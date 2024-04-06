/**
 * 编写顺序执行任务
 * 
 * 1. 任务1： 每次只更新最旧的文件50个，解析出的创建时间, 更新时间。然后创建时间为当前时间减去1天，更新时间为当天时间
 * 2. 任务2： 执行 yarn run publish
 */

const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('child_process');

const maxAllPostCount = 20 * 1000;
const maxNewPostCount = 50;
const newPostSaveRootDir = '/home/ian/_tmp_group';

// 定义一个打印当前系统时间的函数
const nowDate = () => {
  const now = new Date();
  return `当前时间: ${now.toLocaleString()}`
}

class LastPublishChecker {

  constructor() {
    this.lastPublishDate = null;
    this.lastPublishDateFile = path.join(__dirname, '.last-publish-date');
  }

  getLastPublishDate() {
    if (fs.existsSync(this.lastPublishDateFile)) {
      const content = fs.readFileSync(this.lastPublishDateFile, 'utf-8');
      this.lastPublishDate = new Date(content);
    }

    return this.lastPublishDate;
  }

  saveLastPublishDate() {
    const now = new Date();
    fs.writeFileSync(this.lastPublishDateFile, now.toISOString());
    this.lastPublishDate = now;
  }

  check() {
    const lastPublishDate = this.getLastPublishDate();
    const now = new Date();

    if (lastPublishDate) {
      const diff = now - lastPublishDate;

      // 距离上一次发布不到6小时，忽略发布
      const diffHours = diff / (60 * 60 * 1000);
      if (diffHours < 6) {
        console.log(`距离上一次发布不到6小时，忽略发布. 已经历时 ${diffHours} 小时`);
        return false;
      }
    }

    return true;
  }
}

const gPublishHelper = new LastPublishChecker();

/**
 * 全局, 包含所有相关的网站的url2title的映射关系
 */
class GlobalUrl2TitleMapHelper {
  constructor() {
    this.url2titleMap = {};
    this.cacheFile = path.join(__dirname, '../', '.global-url2title-map.json');

    if (fs.existsSync(this.cacheFile)) {
      const content = fs.readFileSync(this.cacheFile, 'utf-8');
      this.url2titleMap = JSON.parse(content);
    }
  }

  getMap() {
    return this.url2titleMap;
  }
}

// 全局的url2title的映射关系
const globalUrlMapHelper = new GlobalUrl2TitleMapHelper();
const globalUrlMap = globalUrlMapHelper.getMap();

/**
 * url 与 title 的映射关系
 */
class Url2TitleMapHelper {
  constructor() {
    this.url2titleMap = {};
    this.cacheFile = path.join(__dirname, '.url2title-map.json');

    if (fs.existsSync(this.cacheFile)) {
      const content = fs.readFileSync(this.cacheFile, 'utf-8');
      this.url2titleMap = JSON.parse(content);
    }

    this.isChange = false;
    this.siteUrl = this.getSubDomain();
  }

  getSubDomain() {
    const subDomainName = path.basename(__dirname);
    const siteUrl = `https://${subDomainName.replace(/^site-/, '')}.techidaily.com`;
    return siteUrl.replace(`techidaily.techidaily`, 'techidaily');
  }

  getMap() {
    return this.url2titleMap;
  }

  addUrl2Title(url, title) {
    const key = `${this.siteUrl}/${url}/`;
    if (this.url2titleMap[key] !== title) {
      this.url2titleMap[key] = title;
      this.isChange = true;
    }
  }

  getTitleByUrl(url) {
    const key = `${this.siteUrl}/${url}/`;
    return this.url2titleMap[key];
  }

  save() {
    if (!this.isChange) return;
    fs.writeFileSync(this.cacheFile, JSON.stringify(this.url2titleMap, null, 2));
  }

  // 获得除给定url以外的指定数量的随机新的url2title的分片映射，如果给定的url不存在, 返回随机的新的url2title的分片映射
  getShuffleUrl2TitleMap(url, count = 15) {
    const filterKey = `${this.siteUrl}/${url}/`;

    const keys = Object.keys(this.url2titleMap);
    const shuffleKeys = keys.filter(key => key !== filterKey).sort(() => Math.random() - 0.5).slice(0, count);

    const shuffleMap = {};

    // 本单元的url2title的映射关系
    shuffleKeys.forEach(key => {
      if (key.startsWith(`https://`)) {
        shuffleMap[key] = this.url2titleMap[key];
      }
    });

    // 全局的url2title的映射关系
    const globalKeys = Object.keys(globalUrlMap);
    const globalShuffleKeys = globalKeys.filter(key => key !== filterKey && !key.startsWith(`${this.siteUrl}/`)).sort(() => Math.random() - 0.5).slice(0, count);
    globalShuffleKeys.forEach(key => {
      if (key.startsWith(`https://`)) {
        shuffleMap[key] = globalUrlMap[key];
      }
    });

    return shuffleMap;
  }
}

const urlMapHelper = new Url2TitleMapHelper();


/**
 * 获得指定目录下所有的 .md 文件
 * @param {*} dir 
 * @param {*} fileList 
 * @returns 
 */
function getMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getMarkdownFiles(filePath, fileList);
    } else if (path.extname(file) === '.md') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const updatePostsTask = () => {
  // 任务1：检测 source/_posts 目录下的所有.md文件，统计数量，如果数小于 < 20000 个, 拷贝新的.md文件到该目录下
  // 任务2：更新最旧的50个.md文件，更新时间为当前时间，创建时间为当前时间减去1天
  console.log(`新增文件及更新最旧的50个文件. ${nowDate()}`);

  const postsDir = path.join(__dirname, 'source/_posts');

  // 编写代码获得 source/_posts 目录下，包括子孙目录下的所有.md文件
  const posts = getMarkdownFiles(postsDir);
  posts.sort((a, b) => {
    const aStat = fs.statSync(a);
    const bStat = fs.statSync(b);

    return aStat.birthtime - bStat.birthtime;
  });

  // 根据posts的每一个文件的url，获得title
  posts.forEach(post => {
    const fileUrl = path.basename(post, '.md');
    if (urlMapHelper.getTitleByUrl(fileUrl)) return;

    const content = fs.readFileSync(post, 'utf-8').trim();
    const title = content.match(/title: (.*)/)[1];

    if (title.trim().length <= 256) { // 违规的title不记录
      urlMapHelper.addUrl2Title(fileUrl, title);
    }
  });

  const updateDateWithContent = (content) => {
    // 时间为当前时间的前一天
    const createDate = new Date();
    createDate.setDate(createDate.getDate() - 1);
    const updateDate = new Date();


    let newContent = content.replace(/date: .*/, `date: ${createDate.toISOString()}`);
    newContent = newContent.replace(/updated: .*/, `updated: ${updateDate.toISOString()}`);

    return newContent;
  }

  const addAlsoReadContent = (url, content) => {
    const alsoReadReg = /<span class="atpl-alsoreadstyle">Also read:<\/span>[\s\S]*?<\/div>/g;

    if (alsoReadReg.test(content)) {
      return content;
    }

    const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const shuffleMap = urlMapHelper.getShuffleUrl2TitleMap(url, randomIntFromInterval(12, 24));
    if (Object.keys(shuffleMap).length === 0) return content;

    const format_posts = [];
    Object.keys(shuffleMap).forEach(link => {
      const title = shuffleMap[link];
      const linkElement = `<li><a href="${link}" target="_blank" rel="noopener"><u>${title}</u></a></li>`
      format_posts.push(linkElement);
    });

    const alsoReadContent = [
      `<span class="atpl-alsoreadstyle">Also read:</span>`,
      '<div><ul>',
      format_posts.join("\n"),
      '</ul></div>',
    ].join('\n');

    return `${content}\n${alsoReadContent}\n`;
  }

  // 任务1: 新文章
  if (posts.length < maxAllPostCount) {
    // 获得当前目录的名称, // 去掉前缀 'site-'
    const dirName = path.basename(__dirname).replace(/^site-/, '');

    // 源目录的位置
    const sourceDir = path.join(newPostSaveRootDir, dirName);

    if (!fs.existsSync(sourceDir)) {
      console.error(`💥错误: 目录 ${sourceDir} 不存在，忽略`);
    } else {
      // 目标目录的位置
      const targetDir = path.join(__dirname, 'source/_posts');

      // 每次至少拷贝 maxNewPostCount 个文件
      const new_posts = getMarkdownFiles(sourceDir);

      const new_files = new_posts.slice(0, maxNewPostCount);
      new_files.forEach(file => {
        const sourceFile = file;
        const targetFile = path.join(targetDir, file.replace(sourceDir, ''));

        const tDir = path.dirname(targetFile);
        if (!fs.existsSync(tDir)) {
          fs.mkdirSync(tDir, { recursive: true });
        }

        if (!fs.existsSync(targetFile) && fs.existsSync(sourceFile)) {
          try {
            fs.copyFileSync(sourceFile, targetFile);
            console.log(`拷贝 ${sourceFile} -> ${targetFile} 完成`)

            // 删除源文件
            if (fs.existsSync(targetFile)) {
              fs.unlinkSync(sourceFile);

              // 拷贝过去的文件也要更新一下时间
              const content = fs.readFileSync(targetFile, 'utf-8');
              let newContent = updateDateWithContent(content);

              const url = path.basename(targetFile, '.md');
              newContent = addAlsoReadContent(url, newContent);

              fs.writeFileSync(targetFile, newContent);
            }
          } catch (e) {
            console.error(`拷贝 ${sourceFile} -> ${targetFile} 失败`)
            console.error(e);
          }
        } else {
          console.warn(`文件 ${targetFile} 已经存在，忽略`)
        }
      });
    }
  }

  // 任务2: 旧文章
  const oldestPosts = posts.slice(0, 50);
  oldestPosts.forEach(post => {
    const postPath = post;
    const content = fs.readFileSync(postPath, 'utf-8');
    const url = path.basename(postPath, '.md');

    let newContent = updateDateWithContent(content);
    newContent = addAlsoReadContent(url, newContent);
    fs.writeFileSync(postPath, newContent);

    console.log(`更新 ${postPath} 完成`)
  });
}

const publishTask = () => {
  console.log(`当前目录为: ${__dirname}`);

  let error = null;
  const criticalErrors = [
    `fatal: 无法访问 'https://github.com/`,
    `spawnSync /bin/sh ENOBUFS`,
    `fatal: 远端意外挂断了`,
  ];


  const checkError = (e) => {
    // 检查e 是否是Error类型
    if (e instanceof Error) {
      try {
        // 检测e的错误信息包含 fatal: 无法访问 'https://github.com/ 的字符串
        criticalErrors.forEach(oneErr => {
          if (e.toString().indexOf(oneErr) > -1) {
            error = e;
          }
        })
      } catch (err) { }

      try {
        criticalErrors.forEach(oneErr => {
          if (e.message.indexOf(oneErr) > -1) {
            error = e;
          }
        })
      } catch (err) { }
    }

    // 检查 e 是字符串
    if (typeof e === 'string') {
      try {
        criticalErrors.forEach(oneErr => {
          if (e.indexOf(oneErr) > -1) {
            error = new Error(e);
          }
        })
      } catch (err) { }
    }

    // 检查 e 是Buffer对象
    if (Buffer.isBuffer(e)) {
      try {
        criticalErrors.forEach(oneErr => {
          if (e.toString().indexOf(oneErr) > -1) {
            error = new Error(e.toString());
          }
        })
      } catch (err) { }
    }
  }


  try {
    console.log(`执行 yarn 安装依赖. ${nowDate()}`);
    execSync(`yarn install`, { cwd: __dirname });

    try {
      console.log(`执行 git gc --prune=now. ${nowDate()}`);
      execSync(`git gc --prune=now`, { cwd: __dirname });
      execSync(`git gc --prune=now`, { cwd: `${__dirname}/.deploy_git` });
    } catch (e) { }

    // 全新构建，删除中间产物, 减少中间的干扰
    try {
      execSync(`rm -fr ./docs`, { cwd: __dirname });
      execSync(`rm -fr ./.deploy_git`, { cwd: __dirname });
    } catch (e) { }

    console.log(`执行 yarn run publish. ${nowDate()}`);
    const child = execSync(`yarn run publish`, { cwd: __dirname, maxBuffer: 100 * 1024 * 1024 });
    const { stdout, stderr } = child;
    console.log(`1.输出:\n ${stdout.toString()} \n`);
    console.log(`2.错误:\n ${stderr.toString()} \n`);

    checkError(stdout.toString());
    checkError(stderr.toString());
  } catch (e) {
    console.log(`代码错误:\n`);
    console.error(e);
    checkError(e);
  }

  if (error) {
    throw error;
  } else {
    gPublishHelper.saveLastPublishDate();
  }
  console.log(`执行完成`)
}

const backupGit = () => {
  // 最多每10天备份一次，检测上一次备份的时间，如果超过10天，执行备份
  // 最近一次备份的时间，存储在 .backup-date 文件中
  const now = new Date();
  let enableBackup = false;
  const backupDateFile = path.join(__dirname, '.backup-date');

  if (fs.existsSync(backupDateFile)) {
    const content = fs.readFileSync(backupDateFile, 'utf-8');
    const lastBackupDate = new Date(content);
    enableBackup = (now - lastBackupDate) > (10 * 24 * 60 * 60 * 1000);

    if (!enableBackup) {
      console.log('距离上一次备份时间不到10天，忽略备份');
      return;
    }
  } else {
    enableBackup = true;
    console.log(`第一次备份`);
  }

  if (!enableBackup) return;

  console.log('准备备份 git 仓库');
  try {
    // 所有文件启动 lfs
    execSync(`git lfs install`, { cwd: __dirname });

    // 跟踪大文件
    execSync(`git lfs track "*.mp4"`, { cwd: __dirname });
    execSync(`git lfs track "*.zip"`, { cwd: __dirname });
    execSync(`git lfs track "*.tar.gz"`, { cwd: __dirname });
    execSync(`git lfs track "*.gz"`, { cwd: __dirname });
    execSync(`git lfs track "*.rar"`, { cwd: __dirname });
    execSync(`git lfs track "*.xml"`, { cwd: __dirname });

    const out = execSync(`git add . && git commit -m "auto backup on ${now.toISOString()}" && git lfs push origin main`, { cwd: __dirname, maxBuffer: 100 * 1024 * 1024 });
    console.log(out.toString());

    // 更新备份时间
    fs.writeFileSync(backupDateFile, now.toISOString());
    console.log(`备份完成`);
  } catch (e) {
    console.error(e);
    console.log(`备份失败，下一次再执行备份`)
  }
}

if (gPublishHelper.check()) {
  // 执行任务队列
  updatePostsTask();
  publishTask();
  backupGit();
  urlMapHelper.save();
}
