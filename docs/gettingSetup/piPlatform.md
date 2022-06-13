---
layout: default
title: "Pi Platform"
parent: "Getting Started"
has_children: true
nav_order: 3
---

# Pi Platform
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Pi Browser Introduction

### What is it

The Pi Browser intends to provide a web experience in a decentralized world. In addition to supporting any Web2.0 applications, as do existing web browsers, the Pi Browser also enables people to browse, interact and transact in decentralized applications — applications that integrate with blockchain technology — for a seamless and friendly user experience. Additionally, the Pi Browser will have a directory of selected Pi Apps and its own DNS system to support a whole new class of .pi domains. Developers are able to host their apps on non-Pi domains if they choose.

The Pi Browser is an  open Pi Apps platform because it enables developers to test and deploy the applications that integrate with Pi, Pi Wallet and other elements of the Pi tech stack. It is the only browser that can support Pi applications. As a general-purpose browser tool, however, it is still primitive. That is, the browser is currently in its beta version, and more changes and features will be added later. Developers can integrate the Pi platform SDK with the Testnet and conduct Test-Pi transactions for Pi Apps that allow developers to test their Pi apps on Testnet from their own domains.

### Specs for Developers
The Pi Browser utilizes iFrames to display Apps. This setup allows apps to be displayed on a wide array of devices without the developer needing to create device specific code. 

Cookies - Because iFrames are used, all apps displayed on iOS devices will be considered Third Party apps. iOS natively disables cookies from all Third Party apps, unless the device owner manually disables this feature.
