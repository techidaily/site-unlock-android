---
title: How to Show Wi-Fi Password on Honor Magic V2
date: 2024-07-03T21:50:10.713Z
updated: 2024-07-04T21:50:10.713Z
tags: 
  - unlock
  - remove screen lock
categories:
  - android
description: This article describes How to Show Wi-Fi Password on Honor Magic V2
excerpt: This article describes How to Show Wi-Fi Password on Honor Magic V2
keywords: Honor Magic V2 rootjunky frp bypass,change android lock screen,unlock android phone without pin,samfw frp tool,Honor Magic V2 lock screen pattern,Honor Magic V2 pattern unlock
thumbnail: https://thmb.techidaily.com/dbcd91d398192e490625be17ab539ce0390575e1cb979a99a698fecfb5d28b74.jpg
---

## How to Show Wi-Fi Password on Honor Magic V2

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

## How to Unlock Honor Magic V2 Phone with Broken Screen

Seeing as the only way to control your Honor Magic V2 deviceis the touch screen, a broken device can cause you a lot of worries. Most people think that there is no way to get their device to work again let alone be able to unlock it if [the screen is broken or cracked](https://www.wondershare.com/android/access-android-phone-with-broken-screen.html). It is, however, important to find a way to unlock the broken device so that you can gain access to your data and create a backup to restore to a new device.

In this article, we are going to look at a few simple ways you can unlock an Android device with a broken screen.

**Here is a video for you to learn how to unlock Android phone or access phone with broken screen:**

<iframe width="100%" height="450" src="https://www.youtube.com/embed/KaWEiQhxBTQ" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

## Method 1: Using Android Debug Bridge (ADB)

For this method, you will need your device and access to a PC. It is the most powerful method to unlock a broken Android device. It will however only work if you have enabled USB debugging on your android phone. If you haven’t, skip this method and see if method 2 or 3 might be of help.

ADB creates a bridge between the PC and your device which can then be used to unlock the Honor Magic V2 device. Here’s how to use this bridge.

**Step 1:** Download the Android SDK package on your PC. You can download it here: [http://developer.android.com/sdk/index.html](http://developer.android.com/sdk/index.html). Extract the ZIP file on your PC.

**Step 2:** Download the necessary drivers for your device. The USB drivers for your device can be found on the manufacturer’s website.

**Step 3:** Launch Command Prompt on your PC and change the location of the ADB file. Type in the following into Command Prompt; _cd C:/android/platform-tools_

**Step 4:** Connect the Honor Magic V2 device to your PC using USB cables. Enter the command “ ADB _device_” (without quotation marks). If your phone is recognized, you will see numbers in the Command Prompt message.

**Step 5:** Type in the following two commands. You will need to type in the second one immediately after the first. Replace 1234 with your password.

_ADB shell input text 1234_  
_Shell input key event 66_

**Step 6:** Your phone will now be unlocked and you can proceed to back up its contents.

![arrow](https://drfone.wondershare.com/style/images/arrow_up.png)

### Dr.Fone - Screen Unlock (Android)

The Best Tool to Reset Phones Without Android Factory Reset Codes

- It enables your Android phones to get safe, simple, and trustful after reset.
- It is still helpful even though you don't know the OS version of your devices.
- Everybody can handle it without any technical background.
- Provide specific removal solutions to promise good success rate.

**4,008,670** people have downloaded it

## Method 2: Using a USB Mouse and the On the Go Adapter

This is a great solution if you don’t have USB debugging enabled on your device. You will need your device, an OTG adapter and a USB mouse. It involves connecting the Honor Magic V2 device to the USB mouse using the OTG adapter. Check if your device can be connected to a USB mouse. You can find an OTG adapter online, they are relatively inexpensive and very useful.

Before we begin, it is a good idea to ensure your device is sufficiently charged because the Mouse may drain your battery.

**Step 1:** Connect the Micro USB side of the OTG adapter to your device and then plug in the USB mouse to the adapter.

![connect broken screen android phone](https://images.wondershare.com/drfone/others/14531933625473.jpg)

**Step 2:** As soon as the Honor Magic V2 devices are connected, you will be able to see a pointer on your screen. You can then use the pointer to unlock the pattern or enter the Honor Magic V2 device’s password lock.

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

## Can I Bypass a Forgotten Phone Password Of Honor Magic V2?

Screen locks on smartphones are crucial for keeping the data in your phone hidden. **Password for phone** becomes necessary when you have critical data on your phone. However, there is a downside to it.

Many people forget their screen lock, and that's normal. That can happen if you accidentally type a new **lock screen password** incorrectly. Apart from that, there are many other explanations too. In short, you can get locked out of your device, which is a terrible experience. It can waste your time if you need something stored in your phone.

Here we have mentioned solutions to let you bypass your **lock screen password.** All the solutions mentioned here are safe and will work almost 100% of the time.

## Part 1: How Can I Set or Change My password?

- Open the Settings application and tap the Security choice.
- Under Device Security, tap Screen Lock.

![screen lock](https://images.wondershare.com/drfone/article/2022/11/what-is-my-phone-password-1.jpg)

- Select a Screen lock option, i.e., Swipe, Example, PIN, Password, etc.

![screen lock options](https://images.wondershare.com/drfone/article/2022/11/what-is-my-phone-password-2.jpg)

- When you pick your choice, follow the guidelines on the screen to set it. Enter your screen lock straightaway.
- Then redo your screen lock on the following screen, then, at that point, tap Confirm.

## Part 2: 4 Simple Ways to Bypass Your Honor Magic V2 Phone Password

### 1\. Google Find My Device

Our first approach to unlocking your device is to do a factory reset. That erases every one of the data on your phone too. You can perform this method if you have your Google account credentials and are ready. However, we want you to back up your data so you can sign once more after the reset and restore a ton of your data.

Since you're locked out, you will have to utilize a technique to do the reset. The most straightforward way is to utilize Google's Find My Device site. So, if the Find my Device option feature is enabled on your phone, you can tap the **Erase device** choice on this page to reset it.

![google find my device](https://images.wondershare.com/drfone/article/2022/11/what-is-my-phone-password-3.jpg)

### 2\. Enter Recovery Mode to Hard Reset

If you can't use the Find my device feature, you'll have to factory reset physically. To do as such:

- Power your device off.
- Hold the Volume (-) and power keys all the while after the screen goes dark to raise Android's bootloader menu. This button blend might be different relying on your device model.
- Press the Volume down button two times to feature the Recovery Mode choice. Then, at that point, press the power button to choose it.
- Hold the power button and press the Volume up button to enter this mode.
- Utilize the volume buttons to go to the Wipe data/Factory Reset choice. Continue with the steps to play out a factory reset.

![wipe data](https://images.wondershare.com/drfone/article/2022/11/what-is-my-phone-password-4.jpg)

### 3\. Use ADB

This fix isn't guaranteed to work; if you don't watch out, it could damage your phone. Therefore, we suggest you back up everything on your Android before proceeding.

If your phone has USB debugging enabled, is connected to a PC, and is not encrypted, follow these steps:

- Connect your device to your PC through a USB connector.
- Open Command Prompt or Terminal window to your ADB installation registry.
- Type in adb shell rm/data/system/gesture.key and click the Enter key.
- Reboot your phone. When you do, the solid lock screen ought to be gone.
- That is not a permanent condition, so reset your PIN or password lock before you reboot your device once more. That's how you reset **password for phone.**

### 4.Dr.Fone-Screen Unlock

If you want to unlock your phone without losing any data, we suggest Dr.Fone-Screen Unlock. Dr.Fone is a professional unlocking tool that can remove all types of screen locks in minutes. Dr.Fone is an all-in-one solution for all your iOS and Android needs. So, if you need a quick solution for your phone, download it now.


**Step 1. Connect your Android telephone**

Open the tool on your PC and select the "Screen Unlock" tool.

![screen unlock](https://images.wondershare.com/drfone/guide/drfone-home.png)

When the entire process is finished, you can access your Android device without entering any PIN and view all your data on the Honor Magic V2 device.

**Step 2. Select Unlock Android Screen tool**

We provide 2 options for you, and to unlock screen, you should select "Unlock Android Screen".

![select unlock android screen](https://images.wondershare.com/drfone/guide/android-screen-unlock-3.png)

**Step 3. Select device model**

There are still 2 buttons to choose, "100% Remove Screen Lock" is for most Android brands, but please back your device up before you pick it.

![select device model](https://images.wondershare.com/drfone/guide/screen-unlock-any-android-device-1.png)

Check the brands list and make sure your unlock process keeps.

![brands list](https://images.wondershare.com/drfone/guide/screen-unlock-any-android-device-2.png)

**Step 4. Enter into Recovery Mode**

Then follow the instructions on the program to get the Android phone into Recovery Mode. Here we take 3 different models of Samsung phones as example. (Note: Processes are different according to different brands).

**Recovery Mode in Samsung Phone with Bixby**

![with bixby](https://images.wondershare.com/drfone/guide/unlock-android-screen-1.png)

**Recovery Mode in Samsung Phone without Bixby**

![without bixby](https://images.wondershare.com/drfone/guide/unlock-android-screen-2.png)

**Recovery Mode in Samsung Phone with Home Button**

![with home button](https://images.wondershare.com/drfone/guide/unlock-android-screen-3.png)

**Step 5. Instructions to Erase Cache Partition**

Steps in Recovery Mode are really important, find the correct options and your locked screen will be removed.

![erase cache partition](https://images.wondershare.com/drfone/guide/unlock-android-screen-4.png)

Now it's a phone everyone can access without password or pattern.

![access without password or pattern](https://images.wondershare.com/drfone/guide/unlock-ios-screen-9.png)


## Part 3: How to Back up My Honor Magic V2 Easily?

### Dr.Fone-Phone Backup

As we all know, unlocking a **lock screen password** involves a hard reset, which can delete your user data. Therefore, you must back up your files before hard resetting.

There are several tools available to back up your files. You can use Google or your phone manufacturer's cloud services to back up your file. However, none of them are secure enough. So, we suggest Dr.Fone-Phone Backup have a secure and reliable backup experience. Dr.Fone lets you choose the files you need and back them up. Moreover, you can restore those files to your phone once it gets unlocked.

### The Bottom Line

Getting locked out of your phone can be frustrating, especially if you need an important file from it. However, there are solutions to get over this issue and unlock the **password for phone**. This article contains all you need to unlock your device and return it to be normal. Moreover, if you don't want to lose your data, give Dr.Fone a try. It is currently the best unlocking and backup tool in the market.





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




