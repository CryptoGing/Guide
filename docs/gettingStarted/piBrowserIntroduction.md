---
layout: default
title: Pi Browser Introduction
parent: "Getting Started"
nav_order: 3
---

# Pi Browser Introduction
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

### What is it
The Pi Browser provides a web experience in a decentralized world. In addition to supporting any Web2.0 applications, the Pi Browser also enables people to browse, interact and transact in decentralized applications — applications that integrate with blockchain technology — for a seamless and friendly user experience. 

The Pi Browser is an open Pi Apps platform because it enables developers to test and deploy the applications that integrate with Pi, Pi Wallet and other elements of the Pi tech stack. Developers can integrate the Pi App Platform SDK with the Testnet and conduct Test-Pi transactions for Pi Apps that allow developers to test their Pi apps on Testnet from their own domains. After successful tests, developers can transition to the Mainnet (Mainnet SDK will be released soon.) Additionally, the Pi Browser will have a directory of selected Pi Apps and its own DNS system to support a whole new class of .pi domains. Developers are able to host their apps on non-Pi domains if they choose.

It is the only browser that can support Pi applications. As a general-purpose browser tool, however, it is still primitive. That is, the browser is currently in its beta version, and more changes and features are being developed. The Pi Browser now supports interactions with Apps that are Pi Mainnet Blockchain. 

### Technical Considerations
The Pi Browser utilizes iFrames to display App within the browser. This setup allows apps to be displayed on a wide array of devices without needing to create display logic for different devices or operating systems.

#### Cookies or Session Tokens
##### iOS
Because iFrames are used, all apps displayed within Pi Browser will be considered Third Party Applications by the device. iOS natively disables cookies from all Third Party Applications by default, unless the device owner chooses to enable the cookies. Developers should expect that most Pioneers will have the cookies disabled. The Core Team is actively working on an alternative method for developers to have sessions.

##### Android
Cookies or sessions can be utilized as expected.

