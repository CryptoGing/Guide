---
layout: default
title: Developer Portal
parent: "Getting Started"
nav_order: 2
---

# Developer Portal
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What is it

The Developer Portal is a Pi App that allows you to register as a developer and get developer credentials to create third-party Pi Apps – web-apps that can be accessed through the Pi Browser.  By declaring your app’s URL here, your app will be able to access the Pi App Platform and communicate with the Pi servers and the Pi Blockchain.

Your app will be accessible directly from your own URL through the Pi Browser. You can put your app on any domain you want and still have a fully functional Pi app.

To access this feature head to develop.pi within the Pi Browser or open the Pi Browser and click on the develop.pi tile.

<small>
Currently, all APIs are aimed the Pi Testnet, so only Test-Pi will be involved. This will allow developers to build apps ahead of the release of the Mainnet SDK. Check out the section <a href="../../importantTopics/mainnetVsTestnet">Mainnet vs. Testnet</a></small>

The only requirement at this stage is that you own the domain of the URL that you provide! You will be asked to verify its ownership which is detailed below.

### Pi Brainstorm
The Pi Brainstorm application is designed to be the hub where Pioneers can collaborate and propose ideas for new apps that will build utility in the Pi Ecosystem. All Pioneers are able to view, propose, and apply to join exsisting projects within the Brainstorm app. Check it out by clicking on the Brainstorm tile within the Pi Browser. 

## Register & Create API Key    
### Step by Step Video Guide
<iframe width="560" height="315" src="https://www.youtube.com/embed/1geTAyvMeZM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
Captions for the video can be found on our [Medium Blog Post](https://pinetwork-official.medium.com/hackathon-workshop-transcripts-86367175ebb3)

### Registering an App
#### The basic fields
When you open the developer portal the homepage will be presented, there is a brief introduction of the app and information to keep in mind. At the bottom of the page you will see a "New App" button and if you have previously registered an app it will appear at the very bottom of the page. Click the “New App” button to start the creation process. You will now see the application creation form: 

<ul>
<li>Add an App Name and Description of the App. </li>
<ul>
<small>If you have a Brainstorm project associated with your app, you should use the same name. </small>
</ul>
<li>At the end of the form, you will be asked for your Github and Discord usernames, both of which are optional. </li>
</ul>
In the future, we may create a bridge between Brainstorm and the Developer Portal, so that the whole app lifecycle is seamless.

### Self hosted or Hosted by Pi Core Team
In the middle of the form, you will see a question asking if you want the app to be self hosted or hosted by Pi Core Team.

#### Self hosted
Self Hosted means that you are the one handling your application on production. You can have your own infrastructure, but you are the one taking care of the scaling and the availability. If you select this option, you will be asked for the frontend URL of your application. See the Frontend Validation Section for validating this frontend URL.

#### Hosted by Pi Core Team
On the other hand, "Hosted by Pi Core Team" means that will host your application — no infrastructure management, no availability issues, you simply take care of the code. Although the first option, self-hosting is available for everyone, the second requires approval from the Pi Core Team. The hosting of apps is facilitated through the Pi App Engine. 

Finally, when you select this action, instead of a frontend url, you will be asked for a gitlab username. This will be useful for us in order to provide you with a Gitlab project, already integrated with our deployment pipeline. You can now click the submit button and follow me to the next page.

### Frontend Validation
If you choose to host your application yourself, you will need to verify your domain ownership. This is meant to avoid developers creating apps from websites they do not represent. For instance, you shouldn’t be able to impersonate the wikipedia.com domain name.

In order to prove your ownership over the domain name, you will need to place a specific file at the root of your domain. The content of the file must match the content of the text field in the gray box.

When you are done placing the file with the correct content at the root of your domain, you can click the “Verify domain” button. You will either see an error message with some debugging information, or the gray box will disappear and a green check mark will appear next to your domain url. Your domain ownership is now verified, and you can access your app through the Pi Browser by typing your app url in the address bar.

### API Key
With the Pi App Platform comes the Pi API, where you can execute HTTP requests against the main Pi Servers. For now this is only meant to handle payments but more abilities will be added in the future, like creating chat conversations on the Pi Chat from your application. At the bottom of the page, you can see a section called “API Keys”. You will need it to access the Pi Backend as an application developer. Keep it safe! Anyone with this key can pretend to be you.

Note that accessing the public Pi blockchain does not require any API keys, you can simply produce transactions using your App’s private key and submit them directly to the blockchain through any public node (e.g. your own node, one of Pi Core Team’s nodes, or any other node that is running the “Blockchain API service”)
