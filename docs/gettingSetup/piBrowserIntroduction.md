---
layout: default
title: Pi Browser Introduction
parent: "Getting Started"
nav_order: 1
---

## Pi Browser Introduction

### What is it

The Pi Browser intends to provide a web experience in a decentralized world. In addition to supporting any Web2.0 applications, as do existing web browsers, the Pi Browser also enables people to browse, interact and transact in decentralized applications — applications that integrate with blockchain technology — for a seamless and friendly Pioneer experience. Additionally, the Pi Browser will have a directory of selected Pi Apps and its own DNS system to support a whole new class of .pi domains. Developers are able to host their apps on non-Pi domains if they choose.

The Pi Browser is an  open Pi Apps platform because it enables developers to test and deploy the applications that integrate with Pi, Pi Wallet and other elements of the Pi tech stack. It is the only browser that can support Pi applications. As a general-purpose browser tool, however, it is still primitive. That is, the browser is currently in its beta version, and more changes and features will be added later. Developers can integrate the Pi App Platform SDK with the Testnet and conduct Test-Pi transactions for Pi Apps that allow developers to test their Pi apps on Testnet from their own domains.

### Technicial Considerations
The Pi Browser utilizes iFrames to display App within the browser. This setup allows apps to be displayed on a wide array of devices without needing to create display logic for different devices or operating systems. 

#### Cookies or Session Tokens 
##### iOS
Because iFrames are used, all apps displayed within Pi Browser will be considered Third Party Applications by the device. iOS natively disables cookies from all Third Party Applications, unless the device owner manually disables this feature. Developers should expect that Pioneers will have this feature enabled. The Core Team is actively working on an alterntive method for developers to have sessions.

##### Android
Cookies or sessions can be utilized as expected. 