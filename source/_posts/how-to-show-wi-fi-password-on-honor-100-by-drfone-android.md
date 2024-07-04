---
title: How to Show Wi-Fi Password on Honor 100
date: 2024-05-19T19:19:03.874Z
updated: 2024-05-20T19:19:03.874Z
tags: 
  - unlock
  - remove screen lock
categories:
  - android
description: This article describes How to Show Wi-Fi Password on Honor 100
excerpt: This article describes How to Show Wi-Fi Password on Honor 100
keywords: unlock android phone password without factory reset,android emergency call bypass,unlock phone forgot password,Honor 100 easy pattern lock,how to change lock screen password,android device manager unlock
thumbnail: https://www.lifewire.com/thmb/HNtneePKuJeaZXX7qZjEwvmSz6M=/400x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Flora_and_Son-f6517d3de531487e89f5e0e99192d13f.jpg
---

## How to Show Wi-Fi Password on Honor 100

Since the invention of Android OS in 2008 by Andy Rubin, our world has faced a dramatic change. Android seems to be controlling a considerably high portion of our life. We have bought many gadgets that use this amazing OS and most of which are phones. But how much can you do with your Android phone? Developers are always making it more interesting to use this interface.

Most of the time, we use Android phones, we get faced with the need to access the internet. The Wi-Fi capability of these Android gadgets makes it super easy for us to surf the web. Throughout using Wi-Fi, we connect to a number of them. This could be at school, a sub-way café, the gym, buses, hospitals, hotels, towns, and the list is endless. A password secures most of this. Needless to say, our brain is weak to store all these passwords for future use, especially if you would want to connect with a different gadget you have recently bought or even your laptop. In this article, we will introduce you to how to find wifi password on rooted and also unrooted Android devices.

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/78mNMIr_wpI"></iframe>

## Part 1: Show Wifi Password on Rooted Android Device

### What is Rooting?

First of all, what does rooting mean? You have probably used a Windows computer or even Linux. For the case of Windows, when installing a new program or software, it always prompts a dialog box saying, "Administrator permission required to run this program." If you don't have the administrator permission, you won't install the program. In Android, this is called rooting. In simple terms, it means having the root permission to your phone. Some Android apps will require you the root permission, e.g., flashing your ROM. In this part, we will explain how you can show the Wi-Fi password on your Android with root.

To find the Wi-Fi passwords on your Android phone, you need to have an app to explore files which also supports a root user. In this case, ES FileExplorer or Root Explorer will come in handy. However, it turns out that the latter is offered at $3. Let's use the free ES File Explorer.

![android show wifi password](https://images.wondershare.com/drfone/others/14556285763404.jpg)

### Steps of getting Wi-Fi password on Android with root

In only four steps, we, at this moment, learn how we can find the password of a Wi-Fi on an Android phone.

Step 1: Install the ES File Explorer

Download the ES File Explorer from your play store, install it, and open it.

![android show wifi password](https://images.wondershare.com/drfone/others/14556286507084.jpg)

Step 2: Enable Root Explorer

The root explorer needs to be enabled so that you can reach the root folders of the Wi-Fi passwords you need. By default, the root feature in this ES explorer is not enabled. To enable it, just tap on the list menu on the top left corner.:

![android show wifi password](https://images.wondershare.com/drfone/others/14556292611536.jpg)

This will drop down a list of controls. Scroll down and find the **Root Explorer** option and enable it.

![android show wifi password](https://images.wondershare.com/drfone/others/14556293052566.jpg)

Step 3: Get the passwords' file.

Go back to ES file explorer, and this time, find the folder named **data**.

![android show wifi password](https://images.wondershare.com/drfone/others/14556293412707.jpg)

When this folder opens, find another one named **misc**. Open it and find another one named **wifi**. Here, find a file named **wpa\_supplicant.conf**.

![android show wifi password](https://images.wondershare.com/drfone/others/14556293762552.jpg)

Step 4: Retrieve the wifi password on Android

Make sure that you don't edit anything in the file. You might mess up with important data and fail to access the Wi-Fi(s) in the future.

![android show wifi password](https://images.wondershare.com/drfone/others/14556294042257.jpg)

As you can see above, we have found the Wi-Fi passwords on the android device. On each network profile, we have the name of the network represented by _name (ssid="{the name}")_, the network's password represented by _psk_, the network's access point represented by _key\_mgmt=WPA-PSK_ and its priority represented by _priority_.

## Part 2: Show Wifi Password on Android without Root

What if I don't have root access to my Android, can I still see Android Wi-Fi password? The short answer is yes. However, this is a bit involving but simple. You don't need to be a computer guru to do it, but you need to have a computer and some internet access of course. The key thing is to find a way through which we can fetch the password file from the phone without using a root access protocol in the Android. This is made possible by some little programming insight using the Windows Command prompt.

### Steps to show Wi-Fi password on Android without root

Step 1: Access the Developer authority

To access the files that Android uses to run passwords, you must first become a developer. This is very simple.

Get your Android phone and go to settings. Scroll down and find "About phone." Tap on it and scroll down again to find Build number.

![android show wifi password](https://images.wondershare.com/drfone/others/14556302638925.jpg)

Tap on this "build number" 5 to 6 times until a message pops up, saying, "You are now a developer".

![android show wifi password](https://images.wondershare.com/drfone/others/14556303263992.jpg)

Step 2: Enable the debugging.

Go back to Settings. Scroll down for developer options. Turn on the button for "Android/USB debugging".

![android show wifi password](https://images.wondershare.com/drfone/others/14556308665697.jpg)

Step 3: Install ADB drivers.

Now, open your Windows desktop. Download and install ADB drivers. (Use this download link [adbdriver.com](http://adbdriver.com/)). You need to download and install platform tools (minimal ADB and fastboot) from [http://forum.xda-developers.com/...](http://forum.xda-developers.com/showthread.php?t=2317790) Now open the folder where you've installed the above tools. By default, it is in the Local disc _C\\windows\\system32\\platform\_tools_ location. However, you might want to locate them by searching on the windows search engine. You have to hold the Shift key and right-click inside the folder to click on"Open Command Window Here."

![android show wifi password](https://images.wondershare.com/drfone/others/14556329561742.jpg)

Step 4: Test the ADB

Here, we would like to test whether the ABD is working properly. To do this, connect your phone to the PC using a USB. In the command prompt, type **adb services** and then press enter. If it's working properly, you should see a device on this list.

![android show wifi password](https://images.wondershare.com/drfone/others/14556329984622.jpg)

Step 5: Find the Android wifi password.

Now, it is time to type the given command in the command prompt and type: _adb pull /data/misc/wifi/wpa\_supplicant.conf c:/wpa\_supplicant.conf_. This will fetch the file from your phone to the local disc C drive of the PC.

Step 6: Get the wifi passwords.

Lastly, open the file with a notepad, and there you go.

![android show wifi password](https://images.wondershare.com/drfone/others/14556331232772.jpg)

Now you learned how to show the wifi password on your Android device.

## 10 Easy-to-Use FRP Bypass Tools for Unlocking Google Accounts On Honor 100

FRP, popularly known as the Factory Reset Protection program, is an additional data protection feature for all Android users. As per the FRP feature, in any unfortunate event wherein you lose the Honor 100 device or if any unauthorized person tries to reset it, the Honor 100 device will require the Google Account ID and password to be fed in. So, this program is designed to curb the chances of theft and other fraudulent activities.

However, it was found that the FRP feature comes out as trouble for those who somehow forget their Google Account ID/ password, or who have purchased a second-hand phone either online or via some third-party source. Hence, it is important to know how to bypass a Google Account. Below mentioned are the Top 10 FRP tools to bypass Google accounts.

## Tool 1: Android FRP Bypass Helper - Dr.Fone - Screen Unlock (Android OS 2.1 or later)

Dr.Fone - Screen Unlock can help you bypass your Google account and enter into your device's home screen with ease. No matter whether you can't get the Google account from previous sellers, or just forgot the PIN. In just 5 minutes, your Google FRP lock can be removed.

<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube.com/embed/MU8fYmLJBXg" id="video-iframe-t"></iframe>

![Safe download](https://mobiletrans.wondershare.com/images/security.svg)safe & secure

### Features

- Available for Samsung/Xiaomi/Readmi/OPPO/Realme/Vivo devices.
- It provides a useful guide.
- Dr.Fone - Screen Unlock can reactivate the lock removers

**Price**: ＄39.95/year, Go and check [Dr.Fone –Screen Unlock.](https://download.wondershare.com/drfone_unlock_full3372.exe)

**Pros**:

- a. Easy to use with detailed guide including video guide.
- b. Only need a few minutes to complete.
- c. It is also useful for users who do not know their mobile phone model.
- d. It is safe and convenient.

**Cons**:

A little pricey, but worth it.

You can easily download it from Dr.Fone's official website within one minute and use it with our detailed instructions. Even if you don't know the specific model of your Samsung device, Dr.Fone - Screen Unlock will provide you with quality service and assistance. Check [the bypass FRP lock guide](https://drfone.wondershare.com/guide/google-frp-bypass.html) in detail to help you disable your Google account on your Android smartphone.



### [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)

Bypass Android FRP Lock without Google Account or a PIN Code.

- It is helpful even though you don't know the OS version of your Samsung.
- Only remove the lock screen, no data loss at all.
- No tech knowledge asked, everybody, can handle it.
- Work also for Xiaomi, Redmi, Oppo, Realme, Vivo devices.

**4,926,978** people have downloaded it

## Tool 2: Samsung Reactivation/FRP Lock Removal Service

[Samsung Reactivation/FRP unlocking service](http://directunlocks.com/lock-protection.php?aff=wondershare) can solve your FRP issue through an online service. With this, you only need to enter your phone details to get the unique user ID and password. The staff will contact and help you to bypass the Google FRP lock on your Samsung devices within 24-72 hours.

![frp bypass tools-samsung-frp-lock-removal](https://images.wondershare.com/drfone/article/2018/03/samsung-frp-lock-removal.jpg "Tool 2")

### Features

- Unlock most Samsung FRP locks, not limited to the version of Android.
- Huaman service only, solve the problem with the help of staff.

 Go and check  [Samsung Reactivation/FRP unlocking service](http://directunlocks.com/lock-protection.php?aff=wondershare)

**Pros**:

- It provides online service - no confusing video tutorials and no risky software to download.
- No tech knowledge is required. Everybody can handle it.
- Issues will be solved within 24-72 hours.

**Cons**:

- It supports Samsung phones only now.
- It takes a long time to wait.

## Tool 3: FRP/Google Account Bypass and Flashing Tool

One of the best tools that cover almost all the latest versions of Android phones. This tool is quite easy to use.

![frp bypass tools-Tool 4](https://images.wondershare.com/drfone/article/2017/07/factory-reset-protection-5-4.jpg "Tool 4")

### Features

- Works for Samsung, HTC, MTK, MI, QUALCOMM, SPD, and many more devices.
- This tool is for all the latest device versions.
- The old version of SP Flash is also covered by this tool.

 Go and check  [FRP/Google Account Bypass and Flashing Tool](http://devoloperxda.blogspot.in/2017/05/a-new-frpgoogle-account-bypass-and.html)

**Price**: Free

**Pros**: Work for almost all the versions of Android phones.

**Cons**: Currently not tested with Android versions 5.1.1 and 6.0.1.

## Tool 4: FRP Bypass Solutions

FRP Bypass Solutions is tested and updated for the process of bypassing Google verification if you forget the credentials of your account.

![frp bypass tools-Tool 5](https://images.wondershare.com/drfone/article/2017/07/factory-reset-protection-5-5.jpg "Tool 5")

### Features

- It works with all Android devices such as Moto series, LG, ZTE, HUAWEI, Vodafone, Samsung, Lenovo, HISENSE, XPERIA, and lots more.
- It covers the latest versions and the team keeps it updated.
- It is a useful tool for Samsung Galaxy S8.

 Go and check  [FRP Bypass Solutions](https://www.cashsite.tk/)

**Price**: $7.00

**Pros**: The tool has been tested and verified to work for Android 7.0 and 7.1.

**Cons**: You need to purchase the tool to use all its features.

## Tool 5: D&G Password Unlocker

D&G unlocker tool assists you in step by step and comprehensive way to unlock your Android phones. It can help Android users to remove FRP restrictions from their mobiles and tablets in a few seconds. The program will work for major brands including Samsung, Lenovo, Motorola, Xiaomi, Huawei, HTC, and Yuphoria.

![frp bypass tools-Tool 6](https://images.wondershare.com/drfone/article/2017/07/factory-reset-protection-5-6.jpg "Tool 6")

### Features

- It is compatible with Windows 7, 8, 10, XP, and Vista.
- It supports Samsung, Motorola, Huawei, HTC, Lenovo, Xiaomi, and Euphoria.

 Go and check  [D&G Password Unlocker](http://www.freemobiletools.com/2017/04/d-password-unlocker-tools-all-frp.html)

**Price**: Free

**Pros**: Provides free setup for Windows.

**Cons**: There are no details available for LG devices.

## Tool 6: Pangu FRP Bypass tool for Remove 2017

The processing time is just about 10 minutes. This facility is for the Authorized Google account owner. With this tool, the FRP lock will get removed.

![frp bypass tools-Tool 7](https://images.wondershare.com/drfone/article/2017/07/factory-reset-protection-5-7.jpg "Tool 7")

### Features

- This tool works for All Samsung, Motorola, Micromax, Lenovo, MTK, and SPD devices.
-  Lollipop 5.1, Marshmallow 6.1, Nougat 7.0 and 7.1.2, and Oreo 8.0.

 Go and check  [D&G Password Unlocker](http://pangu.in/bypass-samsung-google-account-verification-reset-remove-frp-lock)

**Price**: Free

**Pros**: Works well with all Samsung and other devices.

**Cons**: The tool requires you to use an OTG cable with a pen drive or a computer.

## Tool 7: FRP lock Google Verification Bypass Tool Software

This is a kind of software program that is innovative and through this unlocker tool, additional protection for the Android devices can get bypassed.

![frp bypass tools-Tool 8](https://images.wondershare.com/drfone/article/2017/07/factory-reset-protection-5-8.jpg "Tool 8")

### Features

It works for HTC, Samsung devices, Motorola, Huawei, Lenovo, OPPO, LG, Alcatel, Xiaomi, Sony, and other Android devices.

 Go and check  [FRP lock Google Verification Bypass](http://www.allmobitools.com/2016/11/frp-lock-google-verification-bypass.html)

**Price**: Free

Pros:

- Works well for almost all Android devices and unblocks any Android phone with a Reactivation Lock error.
- It is 100% free.
- Also, it works for higher Android versions from 5.1.1 – 6.0 to 7.1.

**Cons**: To Apply this method you need a Wi-Fi connection or a micro USB cable.

## Tool 8: Samsung FRP Helper V.0.2 FRP Removal Tools

Samsung FRP tool uses the ADB feature to Bypass the FRP verification process.

![frp bypass tools-Tool 9](https://images.wondershare.com/drfone/article/2017/07/factory-reset-protection-5-9.jpg "Tool 9")

### Features

- This tool has an easy and interactive GUI.
- It comes with a detailed guide.

 Go and check  [Samsung FRP Helper V.0.2 FRP Removal](http://www.gsmfavor.com/2017/01/samsung-frp-helper-v02-frp-removal.html)

**Price**: Free

**Pros**: Easy to use and comes with a guide.

**Cons**:

- It does not work with other models besides Samsung.
- Combination firmware is required to run this software.

## Tool 9: GSM Flasher ADB Bypass FRP Tool

GSM flasher uses an easy and accessible way to bypass an Android device's lock through a USB cable. The downloading, as well as the complete setup, takes a few minutes. Also, ADB (Android debug bridge) helps you to have to communicate with your device.

![frp bypass tools-Tool 10](https://images.wondershare.com/drfone/article/2017/07/factory-reset-protection-5-10.jpg "Tool 10")

### Features

- a. GSM flasher software setup is easy to use.
- It works with all OS types.
- A pattern lock removal facility is also available.
- This file can be used for the reactivation of lock removers.

 Go and check  [GSM Flasher ADB Bypass FRP](http://www.allflashfiles.net/2017/06/gsm-flasher-adb-bypass-frp-latest-setup.html)

**Price**: Free

**Pros**: It can be used for all types of Android devices.

**Cons**: Can also act as a reactivator for lock removers.

## Tool 10: FRP Bypass APK Download Samsung for Android

FRP Bypass helps to overcome the security feature of the Honor 100 device so that you can easily bypass the Google Account verification process. As per user ratings, FRP Bypass APK has 4.1 Stars.

![frp bypass tools-Tool 3](https://images.wondershare.com/drfone/article/2017/07/factory-reset-protection-5-3.jpg "Tool 3")

### Features

- A useful tool for Samsung Galaxy devices.
- Download and use it for free.
- You can also share this tool with your friends and family.

 Go and check  [FRP Bypass APK Download Samsung for Android](https://apkoftheday.co/frp-bypass-apk-download/)

**Price**: Free

**Pros**:

If you have forgotten your Google Account ID/ password, this tool will come in handy.

**Cons**:

- You cannot access this tool directly through the local market or resources.
- Play Store users cannot access this tool.

## The Comparison of the 10 FRP Bypass Tools

| **Bypass FRP Tools** | **Unique Feature** | **Price** | **Cons** |
| --- | --- | --- | --- |
| [Dr.Fone - Screen Unlock](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)![hot icon](https://images.wondershare.com/drfone/article/2022/05/hot-tip.png) | Bypass most Android FRP remotely | $39.95 per year for 1-5 mobile devices | Only available for Samsung/Xiaomi/Readmi/OPPO/Realme/Vivo at present |
| Samsung Online Removal Service | Huaman service only, solve the problem with the help of staff | $15-$50 per time for 1 device | It takes a long time to wait |
| FRP/Google Account Bypass and Flashing | Works for Samsung, HTC, MTK, MI, QUALCOMM, SPD, and many more devices | Free | Currently not tested with Android versions 5.1.1 and 6.0.1, and not always functional. |
| FRP Bypass Solutions | Works with all Android devices such as Moto series, LG, ZTE, HUAWEI, Vodafone, Samsung, Lenovo, HISENSE, XPERIA, etc. | $7 | You need to purchase the tool to use all its features |
| D&G Password Unlocker | Compatible with Windows 7, 8, 10, XP, and Vista | Free | Unavailable for LG devices |
| Pangu FRP Bypass tool for Remove 2017 | Lollipop 5.1, Marshmallow 6.1, Nougat 7.0 and 7.1.2, and Oreo 8.0. | Free | Requires you to use an OTG cable with a pen drive or a computer. |
| FRP lock Google Verification Bypass Tool Software | Additional protection for Android devices can get bypassed. | Free | A Wi-Fi connection or a micro USB cable is needed |
| Samsung FRP Helper V.0.2 FRP Removal Tools | With an easy and interactive Guide. | Free | Combination firmware is required to run this software |
| GSM Flasher ADB Bypass FRP Tool | Works with all OS types | Free | Can also act as a reactivator for lock removers |
| FRP Bypass APK Download Samsung for Android | Effective on Samsung devices | Free | Play Store users cannot access this tool |

## The Bottom Line

The article above gives useful information on some of the important tools for the FRP bypass process. The information available is to assist the original users only who have somehow forgotten their user GoogleID/password. We hope that using any of the above methods will definitely resolve your FRP bypass issue with ease. If you also want to bypass the iCloud activation lock, Dr.Fone is of help.



## Unlock Honor 100  Phone Password Without Factory Reset: Full Guide Here

In today's fast-paced digital age, our smartphones are more than just communication devices; they are repositories of our personal and professional lives. However, there comes a time when we find ourselves [locked out of our Honor 100  phones](https://drfone.wondershare.com/unlock/how-to-reset-a-motorola-phone-that-is-locked.html), desperately trying to remember a password or PIN that seems to have slipped our minds. The thought of a factory reset, which wipes our valuable data clean, can be daunting.

But fear not! This comprehensive guide is here to rescue you from the perils of forgotten passwords without factory reset. So, if you're in a bind and need to regain access to your device, read on for a full guide to know **how to unlock Honor 100  phone password without factory reset**!

![how to unlock motorola phone](https://images.wondershare.com/drfone/article/2022/09/full-guide-to-unlock-motorola-phones-1.jpg)

## Method 1: Unlock Honor 100  Phones Running Older Android OS (4.4 Or Below) With Google Security Questions

Up until Android version 4.4, you could lock your phone screen with a pattern. Google allowed you to unlock the phone by answering security questions in case you forgot the pattern. Since these may also be easily guessed by people who are in possession of your device illegally, Google deprecated this method after Android 4.4. However, the phones running Android 4.4 or lower are still allowed to be unlocked using this method. So, if you have an old Honor 100  with Android 4.4 or earlier, here is **how to unlock Honor 100  phone password without factory reset**:

**Step 1:** You may already have entered the incorrect pattern a few times. If so, simply tap the Forgot Pattern to start the process of unlocking your Honor 100  phone screen. Else, deliberately enter incorrect pattern a few times till you see the Forgot Pattern option:

![unlock motorola phone with security questions](https://images.wondershare.com/drfone/article/2022/09/full-guide-to-unlock-motorola-phones-2.jpg)

**Step 2:** Next, choose the option to reset the pattern by answering your Google credentials.

**Step 3:** Sign into the Google account that matches with the Google account on the phone.

**Step 4:** Lastly, create a new pattern to unlock your Honor 100  phone.

### Side Tip

Now that you have unlocked your Honor 100  phone with Google security questions, we have a tip for you. For the safety and security of your data on your phone, it might be time to trade in the Honor 100 device for a newer phone with the latest Android OS. Between Android 4.4 and the Android 12 prevalent today, there have been massive security updates and code improvements that you can benefit from. It makes sense given that our phones hold a substantially large part of our personal and professional lives these days. And we are not even talking about features that you may or may not need - we are talking only from a data security point of view. Of course, you will also benefit from the massive performance improvements that have taken place thanks to hardware and software improvements over the years.

## Method 2: Unlock Your Honor 100  Phone Using Wondershare Dr.Fone ( Easy & Fast)

Now, since the previous method of unlocking your Honor 100  phone was deprecated after Android 4.4, what about the phones running newer versions? How to unlock a Honor 100  phone with a newer Android version? There are still a few methods that are available to you, but the best way to unlock a Honor 100  phone is to use this nifty little app called Wondershare Dr.Fone. And you will discover that there is nothing little about this app!

Dr.Fone is a collection of several modules unified in a single interface. Each of these modules is designed meticulously to serve a purpose for your device, such as unlocking your phone, repairing your phone, erasing data from your phone or wiping the phone securely, etc. With this approach, users are never encumbered with options. Instead, they can focus on every task in the simplest, easiest manner without worrying about doing something untoward because they could not understand the software. Dr.Fone is fast, intuitive and easy to use.

![wondershare drfone](https://images.wondershare.com/drfone/guide/drfone-home.png)

**Step 1:** Launch Dr.Fone on your computer. Select the Screen Unlock module.

![drfone screen unlock tool](https://images.wondershare.com/drfone/guide/android-screen-unlock-2.png)

**Step 2:** Click Unlock Android Screen.

![unlock motorola phone screen lock](https://images.wondershare.com/drfone/guide/screen-unlock-any-android-device-1.png)

**Step 3:** Select the first option – 100% Remove Screen Lock as Honor 100  devices cannot be unlocked without data loss.

![drfone screen unlock choose your brand](https://images.wondershare.com/drfone/guide/screen-unlock-any-android-device-2.png)

**Step 4:** Choose your phone brand carefully – Honor 100  in this case.

![download recovery software to motorola phone](https://images.wondershare.com/drfone/guide/android-screen-unlock-without-data-loss-4.png)

**Step 5:** Complete the instructions to download the software to your phone.

**Step 6:** The software will start downloading, and if everything went smoothly you will see a screen to click Remove Now.

![motorola phone screen unlock](https://images.wondershare.com/drfone/guide/android-unlock-07.png)

**Step 7:** When all is done, you will see the following:

![motorola phone screen unlock process complete](https://images.wondershare.com/drfone/guide/screen-unlock-any-android-device-6.png)

Your Honor 100  phone screen is now unlocked. Click the button below to unlock Honor 100  phone password without factory reset now!


## Method 3: Factory Reset Honor 100  Phones (Wipes User Data)

There is a standard factory reset built into every Honor 100  phone to allow users to erase the Honor 100 device and start over fully. This option wipes all user data and resets the phone to how you received it in the box. Naturally, this is not a preferred way, as it requires the phone to be set up all over again and that takes time. Also, all data will need to be backed up beforehand in order to restore it again. Overall, this method consumes a lot of time.

**Step 1:** Go to Settings > Backup & Reset.

**Step 2:** Tap Factory Reset > Reset Phone.

**Step 3:** Tap Erase Everything.

## Method 4: Use Google Find My Device To Unlock Honor 100  Phones (Wipes User Data)

Google Find My Device is an online service by Google that is used to locate and track your Android devices. It works like how Apple's Find My works for its range of hardware. Using Find My Device, you can play a sound on the Honor 100 device to locate it in the house if you have misplaced it, lock the phone in case it is lost, and wipe the Honor 100 device remotely.

**Step 1:** Go to <https://accounts.google.com>.

**Step 2:** Log in and go to Security > Your Devices:

![unlock motorola phone with google](https://images.wondershare.com/drfone/article/2022/09/full-guide-to-unlock-motorola-phones-10.jpg)

**Step 3:** Click Find A Lost Device.

**Step 4:** Select the Android device you want to wipe carefully if you have a few:

![erase phone with google](https://images.wondershare.com/drfone/article/2022/09/full-guide-to-unlock-motorola-phones-11.jpg)

**Step 5:** Click Erase Device and confirm.

**Step 6:** After the erasure, your device will need to be set up all over again.

## Method 5: Request Service Provider To Unlock Your Honor 100  Phone

If your Honor 100  phone is tied to a service contract and you want to unlock your device to use it with other service providers, this method is for you. You can request your service provider to unlock your Honor 100  phone provided their conditions are met. Usually, they will be happy to oblige if there are no dues and the service period is over.

## Bonus Tip: If You Want To Disable Screen Lock

Sometimes, you may not need to secure your device at all. For example, if you have an old device that you want to use as a media player in your car or to give to children to play games, you may not want to password-protect the Honor 100 device. This is how to disable screen lock on Android:

**Step 1:** Navigate to Settings > Security > Screen Lock.

**Step 2:** Enter the PIN or pattern.

**Step 3:** Choose None and confirm.

### Conclusion

There are a handful of methods you can use to unlock a Honor 100  phone in case you forget the password or PIN or pattern. Especially for the old pattern-based screen locks, it is easy to unlock the phone if you know the answers to the security questions in your Google account. However, to unlock Honor 100  phone screen without password on newer Android versions, you need technical knowledge, or you can use third-party software such as Wondershare Dr.Fone. Using Dr.Fone Screen Unlock, you can unlock your phone quickly with no technical mumbo jumbo to confuse you. All you will get is a software that guides you every step of the way so you can unlock Honor 100  phone easily.


<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="1223367746"></ins>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>


<span class="atpl-alsoreadstyle">Also read:</span>
<div><ul>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-unlock-any-infinix-hot-40-phone-password-using-emergency-call-by-drfone-android/"><u>In 2024, How To Unlock Any Infinix Hot 40 Phone Password Using Emergency Call</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-unlock-your-itel-p40pluss-potential-the-top-20-lock-screen-apps-you-need-to-try-by-drfone-android/"><u>In 2024, Unlock Your Itel P40+s Potential The Top 20 Lock Screen Apps You Need to Try</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-10-easy-to-use-frp-bypass-tools-for-unlocking-google-accounts-on-vivo-v30-lite-5g-by-drfone-android/"><u>In 2024, 10 Easy-to-Use FRP Bypass Tools for Unlocking Google Accounts On Vivo V30 Lite 5G</u></a></li>
<li><a href="https://unlock-android.techidaily.com/complete-review-and-guide-to-techeligible-frp-bypass-and-more-for-infinix-smart-8-plus-by-drfone-android/"><u>Complete Review & Guide to Techeligible FRP Bypass and More For Infinix Smart 8 Plus</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-a-perfect-guide-to-remove-or-disable-google-smart-lock-on-vivo-y100-5g-by-drfone-android/"><u>In 2024, A Perfect Guide To Remove or Disable Google Smart Lock On Vivo Y100 5G</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-remove-screen-lock-pin-on-xiaomi-redmi-k70-pro-like-a-pro-5-easy-ways-by-drfone-android/"><u>In 2024, How To Remove Screen Lock PIN On Xiaomi Redmi K70 Pro Like A Pro 5 Easy Ways</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-remove-or-bypass-knox-enrollment-service-on-infinix-by-drfone-android/"><u>In 2024, How To Remove or Bypass Knox Enrollment Service On Infinix</u></a></li>
<li><a href="https://unlock-android.techidaily.com/how-to-lock-apps-on-vivo-y36i-to-protect-your-individual-information-by-drfone-android/"><u>How to Lock Apps on Vivo Y36i to Protect Your Individual Information</u></a></li>
<li><a href="https://unlock-android.techidaily.com/how-to-bypass-android-lock-screen-using-emergency-call-on-vivo-y100-5g-by-drfone-android/"><u>How to Bypass Android Lock Screen Using Emergency Call On Vivo Y100 5G?</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-mastering-android-device-manager-the-ultimate-guide-to-unlocking-your-xiaomi-mix-fold-3-device-by-drfone-android/"><u>In 2024, Mastering Android Device Manager The Ultimate Guide to Unlocking Your Xiaomi Mix Fold 3 Device</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-reset-gmail-password-on-itel-devices-by-drfone-android/"><u>In 2024, How to Reset Gmail Password on Itel Devices</u></a></li>
<li><a href="https://unlock-android.techidaily.com/how-to-unlock-itel-p55-5g-pin-codepattern-lockpassword-by-drfone-android/"><u>How to Unlock Itel P55 5G PIN Code/Pattern Lock/Password</u></a></li>
<li><a href="https://unlock-android.techidaily.com/10-easy-to-use-frp-bypass-tools-for-unlocking-google-accounts-on-tecno-spark-10-pro-by-drfone-android/"><u>10 Easy-to-Use FRP Bypass Tools for Unlocking Google Accounts On Tecno Spark 10 Pro</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-unlock-xiaomi-redmi-a2-bootloader-easily-by-drfone-android/"><u>In 2024, How to Unlock Xiaomi Redmi A2 Bootloader Easily</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-show-wi-fi-password-on-xiaomi-13t-by-drfone-android/"><u>In 2024, How to Show Wi-Fi Password on Xiaomi 13T</u></a></li>
<li><a href="https://unlock-android.techidaily.com/6-proven-ways-to-unlock-google-pixel-7a-phone-when-you-forget-the-password-by-drfone-android/"><u>6 Proven Ways to Unlock Google Pixel 7a Phone When You Forget the Password</u></a></li>
<li><a href="https://unlock-android.techidaily.com/how-to-unlock-xiaomi-redmi-k70e-phone-pattern-lock-without-factory-reset-by-drfone-android/"><u>How to Unlock Xiaomi Redmi K70E Phone Pattern Lock without Factory Reset</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-how-to-unlock-infinix-hot-40i-bootloader-easily-by-drfone-android/"><u>In 2024, How to Unlock Infinix Hot 40i Bootloader Easily</u></a></li>
<li><a href="https://unlock-android.techidaily.com/how-to-unlock-any-vivo-v30-lite-5g-phone-password-using-emergency-call-by-drfone-android/"><u>How To Unlock Any Vivo V30 Lite 5G Phone Password Using Emergency Call</u></a></li>
<li><a href="https://unlock-android.techidaily.com/a-perfect-guide-to-remove-or-disable-google-smart-lock-on-honor-x50-by-drfone-android/"><u>A Perfect Guide To Remove or Disable Google Smart Lock On Honor X50</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-7-ways-to-unlock-a-locked-infinix-smart-8-plus-phone-by-drfone-android/"><u>In 2024, 7 Ways to Unlock a Locked Infinix Smart 8 Plus Phone</u></a></li>
<li><a href="https://unlock-android.techidaily.com/in-2024-top-apps-and-online-tools-to-track-infinix-hot-40i-phone-withwithout-imei-number-by-drfone-android/"><u>In 2024, Top Apps and Online Tools To Track Infinix Hot 40i Phone With/Without IMEI Number</u></a></li>
<li><a href="https://unlock-android.techidaily.com/a-perfect-guide-to-remove-or-disable-google-smart-lock-on-infinix-hot-40i-by-drfone-android/"><u>A Perfect Guide To Remove or Disable Google Smart Lock On Infinix Hot 40i</u></a></li>
<li><a href="https://sim-unlock.techidaily.com/how-to-unlock-sim-card-on-iphone-12-online-without-jailbreak-by-drfone-ios/"><u>How to Unlock SIM Card on iPhone 12 online without jailbreak</u></a></li>
<li><a href="https://ai-video-tools.techidaily.com/new-the-ultimate-guide-to-online-stop-motion-software-5-top-picks/"><u>New The Ultimate Guide to Online Stop Motion Software 5 Top Picks</u></a></li>
<li><a href="https://ai-driven-video-production.techidaily.com/new-10-best-open-source-video-editing-software-for-linux-users-for-2024/"><u>New 10 Best Open-Source Video Editing Software for Linux Users for 2024</u></a></li>
<li><a href="https://voice-adjusting.techidaily.com/new-unlocking-audio-potential-using-audacity-effectively-for-your-podcasts/"><u>New Unlocking Audio Potential Using Audacity Effectively for Your Podcasts</u></a></li>
<li><a href="https://ai-editing-video.techidaily.com/new-2024-approved-6-websites-to-free-download-motivational-video-footage/"><u>New 2024 Approved 6 Websites to Free Download Motivational Video Footage</u></a></li>
<li><a href="https://ai-video-editing.techidaily.com/new-this-blog-post-shows-how-to-create-an-eye-catching-paper-rip-effect-for-your-videos-using-wondershare-filmora-with-these-easy-to-follow-steps-for-2024.m/"><u>New This Blog Post Shows How to Create an Eye-Catching Paper Rip Effect for Your Videos Using Wondershare Filmora with These Easy-to-Follow Steps for 2024</u></a></li>
<li><a href="https://fix-guide.techidaily.com/how-to-fix-unresponsive-touch-screen-on-samsung-galaxy-a15-5g-drfone-by-drfone-fix-android-problems-fix-android-problems/"><u>How To Fix Unresponsive Touch Screen on Samsung Galaxy A15 5G | Dr.fone</u></a></li>
<li><a href="https://ai-driven-video-production.techidaily.com/2024-approved-shine-on-best-video-brightening-apps-for-mobile-and-desktop/"><u>2024 Approved Shine On Best Video Brightening Apps for Mobile and Desktop</u></a></li>
<li><a href="https://screen-mirror.techidaily.com/how-to-cast-samsung-galaxy-a54-5g-screen-to-pc-using-wifi-drfone-by-drfone-android/"><u>How to Cast Samsung Galaxy A54 5G Screen to PC Using WiFi | Dr.fone</u></a></li>
<li><a href="https://android-pokemon-go.techidaily.com/latest-way-to-get-shiny-meltan-box-in-pokemon-go-mystery-box-on-meizu-21-drfone-by-drfone-virtual-android/"><u>Latest way to get Shiny Meltan Box in Pokémon Go Mystery Box On Meizu 21 | Dr.fone</u></a></li>
</ul></div>

