---
title: How to Show Wi-Fi Password on Vivo V30 Pro
date: 2024-04-03 14:19:49
updated: 2024-04-05 12:22:45
tags: 
  - unlock
  - remove screen lock
categories:
  - android
description: This article describes How to Show Wi-Fi Password on Vivo V30 Pro
excerpt: This article describes How to Show Wi-Fi Password on Vivo V30 Pro
keywords: Vivo V30 Pro unlock phone forgot password,Vivo V30 Pro android screen lock,android lock screen settings,unlock phone guide,Vivo V30 Pro lock screen pattern,lock screen apps for android device,Vivo V30 Pro lock apps with fingerprint,unlock
thumbnail: https://www.lifewire.com/thmb/ebrh4pryk1RCkUBx_N34Im614oA=/400x300/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-14050070541-0fc96b82fdc54287bf3bbce3ba323342.jpg
---

## How to Show Wi-Fi Password on Vivo V30 Pro

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

## How to Unlock Vivo V30 Pro Phone with Broken Screen

Seeing as the only way to control your Vivo V30 Pro deviceis the touch screen, a broken device can cause you a lot of worries. Most people think that there is no way to get their device to work again let alone be able to unlock it if [the screen is broken or cracked](https://www.wondershare.com/android/access-android-phone-with-broken-screen.html). It is, however, important to find a way to unlock the broken device so that you can gain access to your data and create a backup to restore to a new device.

In this article, we are going to look at a few simple ways you can unlock an Android device with a broken screen.

**Here is a video for you to learn how to unlock Android phone or access phone with broken screen:**

<iframe width="100%" height="450" src="https://www.youtube.com/embed/KaWEiQhxBTQ" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Method 1: Using Android Debug Bridge (ADB)

For this method, you will need your device and access to a PC. It is the most powerful method to unlock a broken Android device. It will however only work if you have enabled USB debugging on your android phone. If you haven’t, skip this method and see if method 2 or 3 might be of help.

ADB creates a bridge between the PC and your device which can then be used to unlock the Vivo V30 Pro device. Here’s how to use this bridge.

**Step 1:** Download the Android SDK package on your PC. You can download it here: [http://developer.android.com/sdk/index.html](http://developer.android.com/sdk/index.html). Extract the ZIP file on your PC.

**Step 2:** Download the necessary drivers for your device. The USB drivers for your device can be found on the manufacturer’s website.

**Step 3:** Launch Command Prompt on your PC and change the location of the ADB file. Type in the following into Command Prompt; _cd C:/android/platform-tools_

**Step 4:** Connect the Vivo V30 Pro device to your PC using USB cables. Enter the command “ ADB _device_” (without quotation marks). If your phone is recognized, you will see numbers in the Command Prompt message.

**Step 5:** Type in the following two commands. You will need to type in the second one immediately after the first. Replace 1234 with your password.

_ADB shell input text 1234_  
_Shell input key event 66_

**Step 6:** Your phone will now be unlocked and you can proceed to back up its contents.

![arrow](https://drfone.wondershare.com/style/images/arrow_up.png)

### [Dr.Fone - Screen Unlock (Android)](https://tools.techidaily.com/wondershare-dr-fone-unlock-android-screen/)

The Best Tool to Reset Phones Without Android Factory Reset Codes

- It enables your Android phones to get safe, simple, and trustful after reset.
- It is still helpful even though you don't know the OS version of your devices.
- Everybody can handle it without any technical background.
- Provide specific removal solutions to promise good success rate.

**4,008,670** people have downloaded it

## Method 2: Using a USB Mouse and the On the Go Adapter

This is a great solution if you don’t have USB debugging enabled on your device. You will need your device, an OTG adapter and a USB mouse. It involves connecting the Vivo V30 Pro device to the USB mouse using the OTG adapter. Check if your device can be connected to a USB mouse. You can find an OTG adapter online, they are relatively inexpensive and very useful.

Before we begin, it is a good idea to ensure your device is sufficiently charged because the Mouse may drain your battery.

**Step 1:** Connect the Micro USB side of the OTG adapter to your device and then plug in the USB mouse to the adapter.

![connect broken screen android phone](https://images.wondershare.com/drfone/others/14531933625473.jpg)

**Step 2:** As soon as the Vivo V30 Pro devices are connected, you will be able to see a pointer on your screen. You can then use the pointer to unlock the pattern or enter the Vivo V30 Pro device’s password lock.

![unlock android with broken screen](https://images.wondershare.com/drfone/others/14531933791903.jpg)

You can then go about backing up the contents of your device.

## Method 3: Using your Samsung Account

This method is a reliable way to unlock a Samsung device that has a broken screen or is not working correctly. While it is highly effective you will need to have a Samsung account registered with your device. The problem is that not many Samsung device users have registered their devices with the service. If you are among the lucky few who have, here’s how to use your account to unlock your device.

**Step 1:** Visit the [https://findmymobile.samsung.com/login.do](https://findmymobile.samsung.com/login.do) on your PC or any other device and log in with your account information.

![unlock android with broken screen](https://images.wondershare.com/drfone/others/14531933993021.jpg)

**Step 2:** Select your device from the menu on the left-hand side of the screen.

**Step 3:** You should see the option “Unlock my screen” on the sidebar. Click on it and you will get instructions on how to access your device.

![unlock android using samsung account](https://images.wondershare.com/drfone/others/14531934188479.jpg)

## Conclusion

Being unable to unlock your device is never a good place to be. We hope one of the above solutions will work for you. You can then gain access to your device and back up the files and contacts. This way your life doesn’t have to be disrupted- you can just restore the backup on a new device or the old one once the screen is fixed.

## How To Change Vivo V30 Pro Lock Screen Password?

Setting up a lock screen is a crucial step in protecting your phone's data. If you're not sure how to create one on your Android™ phone, we're here to help.

Your Android lock screen pin or password and your Google Account password are two passwords you use frequently. Keeping a good lock screen passcode is important.

Although you might not frequently enter your lock screen pin or password if you use a biometric unlocking method like fingerprint or facial recognition, it's still important to be familiar with it.

You'll need to reset your Google Account password if you forget it or become locked out for some other reason when you try to keep accessing all of your data. You might also need to change lock screen passcode from time to time.

![lock screen](https://images.wondershare.com/drfone/article/2022/11/how-to-change-lock-screen-password-1.jpg)


## How to Change/Set up Lock Screen Password

Select Screen Lock Type under Settings > Lock Screen. From there, you may select from a variety of lock screen options:

![how to set up password](https://images.wondershare.com/drfone/article/2022/11/how-to-change-lock-screen-password-2.jpg)

**Swipe:** This lock type allows you to swipe in any direction on your screen to unlock your phone.

**Pattern:** If you opt to unlock your phone in this manner, you must create a pattern on a 3-by-3-dot grid.

**Pin:** A PIN lock is a four-digit code. Make sure you select a set of numbers that you can quickly recall.

**Password:** Your phone's highest level of security. Your password must be distinct, easily remembered, and include at least one letter and 7 characters.

Follow the setup instructions on-screen after selecting the security measure you prefer.

Additionally, you'll notice options to enable fingerprint or face biometric recognition features. Iris Scanner (S8/S8+) or Intelligent Scan (S9/S9+) may also be available on some older Samsung® models.

**Face recognition:** By holding your face directly in front of your phone's screen, you may unlock your phone and authenticate yourself in apps.

With fingerprints, you can quickly touch your finger to unlock your phone.

**Iris:** Check your eyes to make sure that only you can see the contents of your phone.

**Intelligent Scan:** A method of device unlocking that combines face and iris recognition technology.

Follow on-screen instructions if you decide to employ one of these sophisticated security technologies, or go to Settings > Biometrics and security for more customization choices.

## How to look up saved passwords on my device?

The way that Google Chrome manages your usernames and passwords is excellent. But what if you want to log in to a particular website from another device but can't recall your password, and the website won't load the data for you? You may quickly obtain a list of all saved passwords by browsing through Chrome's settings, then manually keying it in.

You may access the passwords saved in the Google Chrome app on a Mac or PC because the app is connected to your Google account. Any passwords saved on your Android phone can easily be removed via the Chrome app.

## How to Change your Password when you forget it?

### 1\. Google Find My Device

As you are likely aware, every Android device is connected to a Google account. As a result, if you'd like, you may use it to unlock Android as well. You'll need to know your Google account login information for this. When you're ready, use these instructions to find out how to unlock a phone password.

![google find my device](https://images.wondershare.com/drfone/article/2022/11/how-to-change-lock-screen-password-3.jpg)

1. Login in using your Google credentials by going to the official Google Find My Device website.
2. You will see the gadgets connected to your Google account as you enter the interface, along with a map of where they are.
3. To wipe the Vivo V30 Pro device, click the ERASE DEVICE option on the left side panel. You will then be required for your password.
4. Once more, select "Erase." This will reset the Vivo V30 Pro device and get rid of the forgot pattern lock.

### 2\. Using Recovery Mode

![recovery mode](https://images.wondershare.com/drfone/article/2022/11/how-to-change-lock-screen-password-4.jpg)

Users of Android smartphones and tablets can troubleshoot various issues with their devices using a feature known as Android Recovery Mode. It might be helpful if you discover that your device is functioning strangely. Recovery Mode Android technically refers to a unique bootable partition with a recovery application installed inside it.

However, users can also use it to reset the android password if it is forgotten. The instructions for resetting android devices through recovery mode are different for every android device.

### 3\. Forgot Password Feature (Android 4.4 and Lower)

In case you lose your pattern, PIN, or other passwords, older versions of Android, including Android 4.4 KitKat, have an integrated feature to let you continue using your device.

Enter an erroneous pattern or PIN five times on the lock screen to reveal this function. A button with the words "Forgot pattern," "Forgot PIN," or "Forgot password" will show up. Tap it. The username and password for the Google account connected to your Android smartphone will be required.

### 4\. Using ADB

Launch Recovery mode and restart the phone. Turn off your phone. Then to access the Bootloader, simultaneously press the Power button and the Volume Down key. Then select Recovery mode.

Use USB to connect the phone. You must have ADB set up on your computer. (ADB is part of the Android Developer Bundle)

Use the shell's following command to start

Rm /data/system/gesture.key using the adb shell

Turn the phone back on normally. Any pattern will unlock the screen, and you will be prompted to enter one.

## Bonus Method: Dr.Fone - Screen Unlock

On most Android handsets, you can attempt Dr.Fone to unlock the screen lock easily. It allows you to delete the password, PIN, pattern, and fingerprint from an Android phone.


**Step 1. Select Unlock Android Screen**

Please select "Unlock Android Screen."

![select unlock android screen](https://images.wondershare.com/drfone/guide/android-screen-unlock-3.png)

**Step 2. Select device model**

On this page, please choose the option fitting your phone.

![select device model](https://images.wondershare.com/drfone/guide/screen-unlock-any-android-device-1.png)

Only when you select the right phone brand so the unlock process will go with success.

![unlock process](https://images.wondershare.com/drfone/guide/screen-unlock-any-android-device-2.png)

**Step 3. Enter into Recovery Mode**

Then go with the instructions for getting the Android phone into Recovery Mode. Here we show you examples of Samsung phones.

![enter into recovery mode](https://images.wondershare.com/drfone/guide/unlock-android-screen-1.png)

_(Recovery Mode When the Samsung phone via Bixby)_

![bixby](https://images.wondershare.com/drfone/guide/unlock-android-screen-2.png)

_(Recovery Mode When the Samsung phone via Bixby)_

![via bixby](https://images.wondershare.com/drfone/guide/unlock-android-screen-3.png)

_(Recovery Mode When the Samsung phone via Home button)_

**Step 4. Instructions to Wipe Cache Partition**

On the page Recovery Mode, you'll see this interface to continue your unlock process.

![wipe cache partition](https://images.wondershare.com/drfone/guide/unlock-android-screen-4.png)

Now you can access your Android device without entering any password after the unlock process is well done.

![access your android device](https://images.wondershare.com/drfone/guide/unlock-ios-screen-9.png)


### Conclusion

Any of the aforementioned methods can be used to overcome the obstacle of using your Android handset. The best thing about this article is that you only need some simple unlock ways to complete the tasks. Dr.Fone - Screen Unlock is the easiest way of restoring your device if you have a stuck password or fingerprint.



<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

