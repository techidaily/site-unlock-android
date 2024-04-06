---
title: How to Show Wi-Fi Password on Infinix Note 30 Pro
date: 2024-04-04 18:34:32
updated: 2024-04-05 14:50:20
tags: 
  - unlock
  - remove screen lock
categories:
  - android
description: This article describes How to Show Wi-Fi Password on Infinix Note 30 Pro
excerpt: This article describes How to Show Wi-Fi Password on Infinix Note 30 Pro
keywords: enable usb debugging,unlock android device phone with broken screen,Infinix Note 30 Pro unlock bootloader,Infinix Note 30 Pro remove screen lock pin on android,unlock phone forgot password,Infinix Note 30 Pro bypass android lock screen using emergency call,Infinix Note 30 Pro fingerprint lock app,Infinix Note 30 Pro gusture lock screen,Infinix Note 30 Pro password cracker tools,how to reset voicemail password,get into locked phone
thumbnail: https://www.lifewire.com/thmb/fZAyW_q2RrCH4bIuVh-tO15AFts=/400x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/patch-tuesday-2625783-d6bcf232b3c64fc5958037ad31299bd9.png
---

## How to Show Wi-Fi Password on Infinix Note 30 Pro

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



## How to Reset your Infinix Note 30 Pro Lock Screen Password

Android phones have the option of locking the screen using a PIN, pattern, or password. This is meant to keep the phone secure and prevent any unwanted intrusion. PINs and patterns are somewhat easy to remember, but it is common to forget the Android lock screen password. The phone gets locked if someone consecutively enters the wrong password multiple times. Then it is a common question to ask, "How to reset your Android password?"

The device becomes inaccessible and requires an Android password reset. But there is no easy way to do that. Either one needs their Gmail account or has to forget about getting back the Android data. Today we will deliver how to reset Android passwords and teach 6 useful ways. They can be used to reset the Android password and use the phone again. But if someone has to perform a factory restore, they need to depend on backups to get back the data. Now let's begin with the first way and learn how to reset your Android phone password.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yjlTG2d0gSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

![Safe download](https://images.wondershare.com/drfone/article/2022/05/security.svg)safe & secure

## Solution 1: Dr.Fone - Screen Unlock (Android): A Direct Way to Unlock the Phone

Using [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/) is a direct way to Android reset the password and unlock the phone. There is no tension of data loss, and this [phone unlocking software](https://drfone.wondershare.com/sim-unlock/android-unlock-software.html) works for different lock systems. It can reset the Android password, pattern, PIN, and fingerprint lock in under 5 minutes. It is straightforward to operate and does not require any technical knowledge.

Wondershare offers you 100% security as it only authorizes you access. It is simple and user-friendly and keeps all the data on the Android device ( Samsung and LG only) intact.

![arrow](https://drfone.wondershare.com/style/images/arrow_up.png)

### [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)

Get into Locked Android Phones Within Minutes

- 4 screen lock types are available: pattern, PIN, password & fingerprints.
- Easily remove the lock screen; No need to root your device.
- Unlock 20,000+ models of Android phones & tablets.
- Provide specific removal solutions to promise good success rate

**4,008,669** people have downloaded it

### How to reset an Android phone password with Dr.Fone - Screen Unlock (Android)

**Step 1: Select "Screen Unlock"**

Open the program. After that, select and click on "Screen Unlock" on the right side of the window. With this option, you can Android reset your password and remove the lock screen of PIN, password, pattern, and fingerprints.

![Reset your Android Lock Screen Password](https://images.wondershare.com/drfone/guide/drfone-home.png)

Now get the Android phone connected to the PC and select the Infinix Note 30 Pro device model in the list to proceed.

![Reset your Android Lock Screen Password](https://images.wondershare.com/drfone/guide/screen-unlock-any-android-device-2.png)

**Step 2: Activate download mode**

You have to put your device into download mode. For that, follow the instructions given by Wondershare:

- 1\. Switch off the Android device
- 2\. Tap and keep holding the volume decrease button along with the power and home button simultaneously
- 3\. Now tap the volume increase button to initiate download mode

![Reset your Android Lock Screen Password](https://images.wondershare.com/drfone/guide/android-screen-unlock-without-data-loss-4.png)

**Step 3: Download the recovery package**

After the download mode has been entered, the program will begin to download the recovery package automatically. You have to hold your horses until it is complete.

![Reset your Android Lock Screen Password](https://images.wondershare.com/drfone/guide/android-screen-unlock-without-data-loss-5.png)

**Step 4: Remove the Android password without data loss**

Soon the recovery package finishes downloading. Then the program begins to remove the lock screen. After the process is over, you can access all your data on your Android device and reset your Android password.

![Reset your Android Lock Screen Password](https://images.wondershare.com/drfone/guide/screen-unlock-any-android-device-6.png)

These simple steps will ensure that you can secure your Android lock screen easily, without any worries. You do not have to worry about data loss, and you will reset your Android phone. Even if you have forgotten your Android password and are thinking about starting your Android phone again, these simple tips will help.


## Solution 2: How to reset Android Phone Password with Smart Lock?

Setting up Smart Lock on your Android device adds a convenient and straightforward method for unlocking your screen. Smart Lock provides different alternatives to bypass the lock screen based on specific situations.

These alternatives encompass trusted locations, connected devices, or facial recognition. For devices operating on Android 14, it's now referred to as Extend Unlock. Here's a guide on utilizing Smart Lock to unlock your Android device:

**Step 1.** Set a pattern, PIN, or password for your screen lock if you haven't already. Open the Settings on your Android device and tap on "Security & Privacy." Here, tap "More Security & Privacy" and select "Trust agents."

![access trust agents feature](https://images.wondershare.com/drfone/article/2023/12/how-to-reset-your-android-lock-screen-password-1.jpg)

**Step 2.** Within "Trust agents," toggle on "Extend Unlock" and then return to the previous screen. Select "Extend Unlock" and input your pattern, PIN, or password to confirm. Next, pick your desired Smart Lock type and follow the on-screen prompts to activate.

![required extend lock](https://images.wondershare.com/drfone/article/2023/12/how-to-reset-your-android-lock-screen-password-2.jpg)

## Solution 3: How to Unlock Samsung Phone with SmartThings?

Unlocking an Android phone using SmartThings is an option available for Samsung devices. SmartThings offers remote control and management of Samsung devices. It also includes the ability to unlock your phone under specific conditions. Here's a general guide on how to use SmartThings to unlock your Samsung phone:

**Step 1.** Access the SmartThings website, where you should click on the “Sign In” button. Now log in using your Samsung Account, and you'll be directed to a new screen displaying a map pinpointing your phone's location.

![sign in to smart thing website](https://images.wondershare.com/drfone/article/2023/12/how-to-reset-your-android-lock-screen-password-3.jpg)

**Step 2.** Select the "Unlock" button located in the top right corner of the menu. Then, proceed by clicking "Unlock," and entering your Samsung password. Finally, confirm by clicking Unlock once more. This action will reset all your lock settings, comprising biometric security, PIN, password, and swipe pattern.

![unlock your samsung device](https://images.wondershare.com/drfone/article/2023/12/how-to-reset-your-android-lock-screen-password-4.jpg)

## Solution 4: How to Reset Android Password using Google？

To reset the Android password using Google, it is necessary to remember the Google password and ID. Google account must also be activated on the phone. Also, this method only works on devices running Android 4.4 or below. Follow the steps below for the Android password reset.

**Step 1: Access Google login**

Enter the wrong password 5 times till the Android device gives you a "Forgot password?" prompt. Click on the tab and choose "Enter Google Account details."

![uReset your Android Lock Screen Password](https://images.wondershare.com/drfone/others/reset-lock-screen-password-1.jpg)

**Step 2: Enter credentials and do an Android reset password**

Now enter the Google ID and password and log in. You will be able to Android reset your password and get access to your phone.

![uReset your Android Lock Screen Password](https://images.wondershare.com/drfone/others/reset-lock-screen-password-2.jpg)

## Solution 5: How to Reset Android Password using Android Device Manager？

Familiar with Android Device Manager? Well, it has been renamed now as Find My Device. This service provided by Google helps you find, lock, or wipe your Android device. Plus, if you have enabled Find My Device, it might prove very helpful to assist you in unlocking your device. Check out these easy-to-follow steps for unlocking your Android device. For this, you need to use Find My Device, the upgraded Android Device Manager:

**Instructions.** On a computer or another device, go to the “[Google Find My Device](https://www.google.com/android/find/)” website. Here, sign in using your Google account linked to the locked Android device. Once you've logged in, the website will present a map revealing the most recent location of your device. Next, navigate to the left side and select "Erase Device." Follow the prompts on the screen to finalize the process.

![erase all device data](https://images.wondershare.com/drfone/article/2023/12/how-to-reset-your-android-lock-screen-password-5.jpg)

## Solution 6: How to reset Android Phone Password using Factory Reset?

This method can be used when no other means of Android password reset works. This will erase all your data, so it is better to have backups created before. Now perform the steps to Android reset the password.

**Step 1: Initiate factory restore.**

Turn your Android device off. Press and hold the power button + home button + volume up button. This will bring up the recovery mode to initiate factory restoration.

![uReset your Android Lock Screen Password](https://images.wondershare.com/drfone/others/reset-lock-screen-password-3.jpg)

**Step 2: Factory restore**

Now use the volume +/- button to navigate to the "Wipe Data / Factory Reset" option and press the power button to select it. Wait till the process complete.

![uReset your Android Lock Screen Password](https://images.wondershare.com/drfone/others/reset-lock-screen-password-4.jpg)

**Step 3: Reboot and reset the password.**

From the available options, choose "Reboot System Now." After the Android device powers on, you will be able to do the Android password reset.

## Bonus Part: Useful Tips to Prevent Future Lockouts on Android

Here are some helpful tips to prevent future lockouts on your Android device and ensure better password management.

- **1\. Use Password Managers**: Consider using reputable password manager apps that securely store and manage your passwords. These apps often have features to generate strong, unique passwords for different accounts and help you remember them.
- **2\. Set up Biometric Authentication**: In case your device supports it, use biometric authentication methods for a better experience. These can be fingerprints or facial recognition. These methods can be more convenient than remembering passwords and offer added security.
- **3\. Create Memorable Passwords**: If you opt against using a password manager, craft robust yet easily remembered passwords. To improve your security, try to use a sequence of lowercase and uppercase letters, numbers, and symbols. Plus, avoid easily guessable details like birthdays or common phrases to make your password strong.
- **4\. Enable Two-Factor Authentication (2FA)**: Enable two-factor authentication whenever possible for your accounts. Likewise, this provides an added layer of security by requiring a secondary verification method. It could be a text message code or authentication app in addition to your password.
- **5\. Regularly Back Up Your Data**: Make it a habit to consistently [back up your device data](https://tools.techidaily.com/wondershare/drfone/android-backup-and-restore/). To prevent potential data loss from forgotten passwords or unexpected issues, take precautions. Safeguard your crucial data by creating backups, whether in the cloud or on an external storage device.

## Conclusion

This article guided all the possible ways available in 2024 to reset your Android lock screen password, such as using the Smart Lock, Google Find My, Samsung SmartThings, and Wondershare Dr.Fone - Screen Unlock (Android). The most recommended method out of these methods is Dr.Fone because it can handle all Android brands without restrictions.

On the other hand, other methods have their limitations. For example, SmartThings can only work for Samsung smartphones. Moreover, Wondershare Dr.Fone - Screen Unlock (Android) is compatible with Android 14 and can unlock the screen within 2 minutes.

## Top 10 Password Cracking Tools For Infinix Note 30 Pro

## **What is password cracking?**

Password cracking process involves recovering a password from storage locations or from data, transmitted by a computer system on network. Password cracking term refers to group of techniques used to get password from a data system.

Purpose and reason of password cracking includes gaining an unauthorized access to a computer system or it can be recovery of forgotten password. There might be another reason of using password cracking technique that is for testing password strength so hacker could not hack into system.

Password cracking is normally performed thought repetitive process in which computer applies different combinations of password till the exact match.

**Brute Force Password Cracking:**

Term brute force password cracking may also be referred as brute force attack. Brute force password cracking is respective process of guessing password, in this process software or tool creates a large number of password combinations. Basically it’s a trail-and-error technique used by software to obtain password information from system.

A brute force attack are normally used by hackers when there is no chance of taking advantage of encrypted system weakness or by security analysis experts to test an organization’s network security .This method of password cracking is very fast for short length passwords but for long length passwords [dictionary attack](http://en.wikipedia.org/wiki/Dictionary_attack) technique is normally used.

Time taken by brute force password cracking software to crack password is normally depend upon speed of system and internet connection.

**GPU Password Cracking:**

[GPU](http://en.wikipedia.org/wiki/Graphics_processing_unit) is graphics processing unit, sometimes also called visual processing unit. Before talking about GPU password cracking we must have some understanding about [hashes](http://en.wikipedia.org/wiki/Hash_function). When user enter password the password information stored in form of computer hashes using the one-way hashing algorithm.

In this password cracking technique using GPU software take a password guess and look through hashing algorithm and compare it or match it with the existing hashes till the exact match.

GPU can perform mathematical functions in parallel as GPU have hundreds of core that gives massive advantage in cracking password. GPU is much faster than CPU so that’s the reason of using GPU instead of CPU.

**CUDA Password Cracking:**

[CUDA](http://en.wikipedia.org/wiki/CUDA) Compute Unified Device Architecture is a model for programming and a platform that perform computations in parallel, created by NVIDIA for graphic processing.

CUDA Password cracking includes cracking passwords using Graphics card which have GPU chip, GPU can perform mathematical functions in parallel so the speed of cracking password is faster than CPU.GPU have many 32bit chips on it that perform this operation very quickly.

We can easily access CUDA through libraries, directives and with the help of different programming languages that includes C, C++ and FORTRAN.

**Password Cracking Tools**

Given below is the list of Top10 Password cracking tools.

## 1\. Cain and Abel : Top password cracking tool for Windows

Cain & Abel is one of the top cracking tool for password cracking and password recovery for Windows OS.

Cain & Abel can use techniques of Dictionary Attack, Brute-Force and Cryptanalysis attacks to crack encrypted passwords. So it only uses the weakness of system to crack password. GUI Interface of software is very simple and easy to use. But have availability limitation, tool only available for window based systems .Cain & Abel tool have many good features some of the features of tool are discussed below:

![cain and abel](https://images.wondershare.com/images/utilities/cain-and-abel_39.jpg)

**Features of Cain & Abel:**

- Used for WEP (Wired Equivalent Privacy) cracking
- Have ability to record conversation over IP
- Cab be used as Network Password Sniffer
- Ability to resolve addresses IP to MAC.
- Can crack verity of hashes including LM and NT hashes, IOS and PIX hashes, RADIUS hashes, RDP passwords, and lots more than that.

**Site for Download:**

[http://www.oxid.it](http://www.oxid.it/)

## 2\. John the Ripper : Multi-platform, Powerful, Flexible password cracking tool

John the Ripper is a free multi or cross platform password cracking software. Its called multi platform as it combines different password cracking features into one package.

It’s primarily used to crack weak UNIX passwords but also available for Linux, Mac, and Windows. We can run this software against different password encryptions including many password hashes normally found in different UNIX versions. These hashes are DES, LM hash of Windows NT/2000/XP/2003, MD5, and AFS.

![john the ripper00](https://images.wondershare.com/images/utilities/john-the-ripper00.jpg)

**Features of John the Ripper**

- Supportive with Brute force password cracking and [dictionary attacks](http://en.wikipedia.org/wiki/Dictionary_attack)
- Multi platform
- Available free for use
- Pro version is also available with additional features

**Site for Download:**

[http://www.openwall.com](http://www.openwall.com/)

## 3\. Aircrack : Fast and effective WEP/WPA cracking tool

Aircrack is a combination different tools used for Wifi, WEP and WPA passwords cracking. With the help of these tools you can crack WEP/WPA passwords easily and effectively

Brute force, FMS attack, and [dictionary attacks](http://en.wikipedia.org/wiki/Dictionary_attack) techniques can be used to crack WEP/WPA passwords. Basically it collects and analyzes encrypted packets then using its different tool crack password out of the packets. Although aircrack is available for Windows but there are different issues with this software if we use this in Windows environment, so it’s best when we use it in Linux environment.

![aircrack](https://images.wondershare.com/images/utilities/aircrack.gif)

**Features of Aircrack**

- Supportive with both Brute force and [dictionary attacks](http://en.wikipedia.org/wiki/Dictionary_attack) cracking techniques
- Available for Windows and Linux
- Available in live CD

**Site for Download:**

[http://www.aircrack-ng.org/](http://www.aircrack-ng.org/)

## 4\. THC Hydra : Multiple services supportive, Network authentication cracker

THC Hydra is a supper fast network password cracking tool. It uses network to crack remote systems passwords.

It can be used to crack passwords of different protocols including HTTPS, HTTP, FTP, SMTP, Cisco, CVS, SQL, SMTP etc. It will give you option that you may supply a dictionary file that contains list of possible passwords. It’s best when we use it in Linux environment.

![thc hydra](https://images.wondershare.com/images/utilities/thc-hydra.jpg)

**Features of THC Hydra**

- Fast cracking speed
- Available for Windows, Linux ,Solaris and OS X
- New modules can be added easily to enhance features
- Supportive with Brute force and [dictionary attacks](http://en.wikipedia.org/wiki/Dictionary_attack)

**Site for Download:**

[https://www.thc.org/thc-hydra/](https://www.thc.org/thc-hydra/)

## 5\. RainbowCrack : New Innovation in Password Hash Cracker

RainbowCrack software uses rainbow tables to crack hashes, in other words we can say it uses process of a large-scale time-memory trade for effective and fast password cracking.

Large-scale-time-memory-trade-off is a process of computing all hashes and plain text using a selected hash algorithm. After calculations, obtained results are stored in the tables called rainbow table. Process of creating rainbow tables is very time consuming but when its done software works very fast.

Password cracking using rainbow table is faster than the normal brute force attack method. It’s available for Linux and Windows operating system.

![rainbowcrack](https://images.wondershare.com/images/utilities/rainbowcrack_1236.jpg)

**Features of Rainbow Crack**

- Support verity of Rainbow tables
- Runs on Windows (XP/Vista/7/8) and Linux operating systems (x86 and x86\_64)
- Simple in use

Site for Download:

[http://project-rainbowcrack.com/](http://project-rainbowcrack.com/)

## 6\. OphCrack : Tool for Windows password cracking

OphCrack used to crack Windows user passwords with the help of rainbow tables that are available in a bootable CD.

Ophcrack is completely free to download, Windows based password cracker that uses rainbow tables to crack Windows user passwords. It normally cracks LM and NTLM hashes. Software has simple GUI and can runs on different platforms.

![ophcrack00](https://images.wondershare.com/images/utilities/ophcrack00.jpg)

**Features of OphCrack**

- Available for Windows but also available for Linux, Mac, Unix, and OS X
- Uses for LM hashes of Windows and NTLM hashes of Windows vista.
- Rainbow tables available free and easily for Windows
- To simplify the process of cracking Live CD is available

**Site for Download:**

[http://ophcrack.sourceforge.net/](http://ophcrack.sourceforge.net/)

## 7\. Brutus : A brute force attack cracker for remote systems

Brutus is the fastest, most flexible, and most popular software used to crack remote system passwords. It guess password through applying different permutations or by using a dictionary.

It can be used for different network protocols including HTTP, FTP, IMAP, NNTP and other types such as SMB, Telnet etc. It also gives you facility of creating your own authentication type. It also includes extra options of load and resume, so process can be paused when required and you can resume process when you want.

It is only available for windows operation systems. Tool has a limitation that it has not been updated since 2000.

![brutus](https://images.wondershare.com/images/utilities/brutus_38.jpg)

**Features of Brutus**

- Available for Windows
- Can be used with different network protocols
- Tool have many good extra features
- Support SOCK proxy for all types of authentications
- Capability of error handling and recovery
- Authentication engine is multi stage

**Site for Download:**

[http://www.hoobie.net/brutus/](http://www.hoobie.net/brutus/)

## 8\. L0phtCrack : Smart tool for Windows password recovery

Just like OphCrack tool L0phtCrack is also a Windows passwords recovery tool uses hashes to crack passwords, with extra features of Brute force and [dictionary attacks](http://en.wikipedia.org/wiki/Dictionary_attack).

It normally gains access to these hashes from directories, network servers, or domain controllers. It is capable of doing hash extraction from 32 & 64 bit Windows systems, multiprocessor algorithms, scheduling, and can also perform decoding and monitoring networks. Yet it is still the easiest to use password auditing and recovery software available.

![phtcrack](https://images.wondershare.com/images/utilities/phtcrack_1233.jpg)

**Features of L0phtCrack**

- Available for Windows XP, NT, 2000, Server 2003,and Server 2008
- Can work in both 32- and 64-bit environments
- Extra feature of schedule routine auditing on daily, weekly, monthly bases
- After run it provide complete Audit Summary in report page

**Site for Download:**

[www.l0phtcrack.com/](http://www.l0phtcrack.com/)

## 9\. Pwdump : Password recovery tool for Windows

Pwdump is actually different Windows programs that are used to provide [LM and NTML](http://en.wikipedia.org/wiki/LM_hash) hashes of system user accounts.

Pwdump password cracker is capable of extracting LM, NTLM and LanMan hashes from the target in Windows, in case if [Syskey](http://en.wikipedia.org/wiki/Syskey) is disabled, software has the ability to extract in this condition.

Software is update with extra feature of password histories display if history is available. Extracted data will be available in form that is compatible with L0phtcrack.

Recently software is updated to new version called Fgdump as Pwdump not work fine when any antivirus program is running.

![pwdump](https://images.wondershare.com/images/utilities/pwdump.jpg)

**Features of Pwdump**

- Available for Windows XP, 2000
- Powerful extra feature are available in new version of Pwdump
- Ability to run [multithreaded](http://en.wikipedia.org/wiki/Multithreading_(computer_architecture))
- It can perform cachedump (Crashed credentials dump) and pstgdump (Protected storage dump)

**Site for Download:**

[http://www.darknet.org.uk/](http://www.darknet.org.uk/)

## 10\. Medusa : Speedy network password cracking tool

Medusa is remote systems password cracking tool just like THC Hydra but its stability, and fast login ability prefer him over THC Hydra.

It is speedy brute force, parallel and modular tool. Software can perform Brute force attack against multiple users, hosts, and passwords. It supports many protocols including AFP, HTTP, CVS, IMAP, FTP, SSH, SQL, POP3, Telnet and VNC etc.

Medusa is pthread-based tool, this feature prevent unnecessarily duplicate of information. All modules available as an independent .mod file, so no modification is required to extend the list that supports services for brute forcing attack.

![medusa](https://images.wondershare.com/images/utilities/medusa_1037.jpg)

**Features of Medusa**

- Available for Windows, SunOS, BSD, and Mac OS X
- Capable of performing Thread based parallel testing
- Good feature of Flexible user input
- Due to parallel processing speed of cracking is very fast

**Site for Download:**

[http://www.darknet.org.uk/](http://www.darknet.org.uk/)

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

