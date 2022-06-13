---
layout: default
title: Developer Portal
parent: "Getting Started"
nav_order: 2
youtubeId: uIdb88gAWkw
---

# Developer Portal
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What is it

The app is where you register as a developer and get developer credentials to create third-party Pi Apps – web-apps that can be accessed through the Pi Browser.  By declaring your app’s URL here, your app will be able to access the Pi APIs and communicate with the Pi servers and the Pi Blockchain.

Your app will be accessible directly from your own URL through the Pi Browser. You can put your app on any domain you want and still have a fully functional Pi app.

To access this feature either head to develop.pi or open the Pi Browser and click on the develop tile.

Currently, all APIs are aimed the Pi Testnet, so only Test-Pi will be involved. This will allow developers to build apps ahead of the release of the Mainnet SDK. Check out the section [Mainnet vs Testnet]({{ site.baseurl }}{% link docs/importantTopics/mainnetVsTestnet.md %}#mainnetVsTestnet)

The only requirement at this stage is that you own the domain of the URL that you provide! You will be asked to verify its ownership.

## Register & Create API Key    
### Step by Step Video Guide
{% include youtubePlayer.html id=page.youtubeId %

### 1 — REGISTERING AN APP
#### 1.A — The basic fields
When you open the developer portal for the first time, you will see this utility presented. You can click the “New App” button to start the creation process. From here, you should now see the application creation form. App Name and Description are pretty self-explanatory. If you have a Brainstorm project associated with your app, you should use the same name. At the end of the form, you will be asked for your Github and Discord usernames. We may want to create a developers groups on discord and github, so we will start collecting usernames now. These two fields are 100% optional. In the future, we want to create a bridge between Brainstorm and the developer portal, so that the whole app lifecycle is seamless.

#### 1.B — Self hosted / Hosted by pi core team
In the middle of the form, you will see a question asking if you want the app to be self hosted or hosted by Pi Core Team.

#### 1.B.1 — Self hosted
Self Hosted means that you are the one handling your application on production. You can have your own infrastructure, but you are the one taking care of the scaling and the availability. If you select this option, you will be asked for the frontend URL of your application. As explained in previous videos, Pi Utilities are actually websites running in an iframe, therefore you must provide this url for the Pi Browser to be able to display your app.

#### 1.B.1 — Hosted by Pi Core Team
On the other hand, Hosted by Pi Core Team means that we are taking care of your application — no infrastructure management, no availability issues, you simply take care of the code. Although the first option, self-hosting is available for everyone, the second requires approval from the Pi Core Team.

Finally, when you select this action, instead of a frontend url, you will be asked for a gitlab username. This will be useful for us in order to provide you with a Gitlab project, already integrated with our deployment pipeline. You can now click the submit button and follow me to the next page.


### 2 — FRONTEND VALIDATION
If you choose to host your application yourself, you will need to verify your domain ownership. This is meant to avoid developers creating apps from websites they do not represent. For instance, you shouldn’t be able to impersonate the wikipedia.com domain name.

In order to prove your ownership over the domain name, you will need to place a specific file at the root of your domain. The content of the file must match the content of the text field in the gray box.

When you are done placing the file with the correct content at the root of your domain, you can click the “Verify domain” button. You will either see an error message with some debugging information, or the gray box should disappear and a green check mark should appear next to your domain url. Congratulations, your domain ownership is now verified, and you can access your app through the PI Browser by typing your app url in the address bar.


### 3 — API KEY
With the Pi SDK comes the Pi API, where you can execute HTTP requests against the main Pi Backend. For now this is only meant to handle payments but more abilities will be added in the future, like creating chat conversations on the Pi Chat from your application. At the bottom of the page, you can see a section called “API Keys”. You will need it to access the PI Backend as an application developer. Keep it safe! Anyone with this key can pretend to be you.

Note that accessing the public Pi blockchain does not require any API keys, you can simply produce transactions using your App’s private key and submit them directly to the blockchain through any public node (e.g. your own node, one of Pi Core Team’s nodes, or any other node that is running the “Blockchain API service”)
