---
layout: default
title: Developer Portal
parent: "Introduction to Pi"
nav_order: 4
---

# Developer Portal
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## What is it

The Developer Portal is a Pi App that allows you to register as a developer and get developer credentials to create third-party Pi Apps – web apps that can be accessed through the Pi Browser.  By declaring your app’s URL here, your app will be able to access the Pi App Platform and communicate with the Pi servers and the Pi Blockchain.

Your app will be accessible directly from your own URL on the Pi Browser. You can put your app on any domain you want (including a .pi domain) and still have a fully functional Pi app.

To access this feature head to develop.pi within the Pi Browser or open the Pi Browser and click on the develop.pi tile.

If you have not previously acknowledge the Pi Developer Agreement you will get a popup alerting you to do so when you click on "Register an App".

## Registering an App
Prior to registering your first app you must verify your email within your Pi Mining App profile. This can be done by following the process listed on step 4 of the [Getting Started Checklist](./gettingStartedChecklist).

### Creating a New App
When you open the developer portal, the homepage presents a brief introduction of the app and some important information. At the bottom of the page, you will see a “More Info” and a "Register a New App" button. If you have previously registered an app, you will be shown the My App page seen below. Click the “New App” button to start the registration process of your new app. 
 
The application creation form, includes the following steps:

<ul>
<li><b>Add an App Name </b></li>
<ul>
<li>If you have a Brainstorm project associated with your app, you should use the same name. </li>
</ul>
<li><b>Description of the App </b></li>
<li><b>Select Network</b></li>
<ul>
<li>See header below for more information </li>
</ul>
</ul>
In the future, we may create a bridge between Brainstorm and the Developer Portal, so that the whole app lifecycle is seamless.

#### Select Network
This is the most important step and will determine what network your app connects to. Selecting Pi Mainnet will connect this application when accessed in the Pi Browser to the Pi Mainnet Blockchain. There are no Test-Pi transactions on Pi Mainnet and all transactions will be for real Pi. The Pi Testnet is the network that should be selected for testing purposes. All testnet transactions use Test-Pi will is a provided free of charge through the Pi Wallet. <b>It is recommended that all projects begin by building a testnet application and after testing create a second application for the mainnet app. </b>

Important Note: To facilitate transactions the most recently accessed wallet address of the developer will be used as the project's wallet address. All transactions for the network that the app points to will be processed using this address. If a developer has not created a wallet on the Pi Testnet then all transaction will fail until one is created. If you need to register for a wallet head to wallet.pi from within the Pi Browser to create a wallet. Prior to obtaining a Pi Mainnet Wallet it is required to complete Pi KYC a process that ensure each Pioneer is a real person. Due to this requirement it is suggested that a developer first launch their app on testnet where anyone can create a wallet. 

Once you app is registered the home page of the Developer Portal will appear as below. From this menu you can click on a project and that will load the app dashboard for that project.

<img title="Developers List of Apps" alt="Developer Portal list of Apps" src="../../../assets/images/devPortalAppListingHomescreen.png" style="width:425px;height:650px;">

<br />
Dashboard Buttons
<ul>
<li>Click the ? to read about the Developer Portal</li>
<li>The + will create a new app</li>
<li>The &#128101; is the reward feature, click here to enter you hackathon 2022 code.</li>
</ul>

## App Dashboard
The App Dashboard within the Developer Portal is all of the information relating to the app. From this dashboard a developer can make updates to the information. Toggle between the “App Overview” view and the “App Details” view to see all of the information relevant to the app.

The screenshot below shows how an App Dashboard will appear within the Developer Portal. 

<img title="Developer Portal App Dashboard" alt="App Dashboard" src="../../../assets/images/devPortalAppDashboard.png" style="width:300px;height:650px;">

<br />

### App Checklist
The Developer Portal App Checklist is a feature within in the Developer Portal which allows a developer to track their progress against what is needed to launch an application. The checklist has 9 steps and once completed a developer will having a fully functioning app that is deployed on the network that the app is pointed to. 

#### Note Step 8: Verify Domain Ownership
If you choose to host your application yourself, you will need to verify your domain ownership. This is meant to avoid developers creating apps from websites that they do not own or represent. For instance, you shouldn’t be able to impersonate the wikipedia.com domain name.

In order to prove your ownership over the domain name, you will need to place a specific file at the root of your domain. The content of the file must match the content of the text field in the gray box listed on the Developer Portal.

When you are done placing the file with the correct content at the root of your domain, you can click the “Verify domain” button. You will either see an error message with some debugging information, or the gray box will disappear and a green check mark will appear next to your domain url. Your domain ownership is now verified, and you can access your app through the Pi Browser by typing your app url in the address bar.

<br />

### App Configuration
The following fields can all be edited within the App Configuration feature that is accessed from the App’s dashboard. 

#### Whitelist Users
If registering a Pi Testnet connected App the developer has the option to grant access to all that visit the site or only to a select list of Pioneers. If you wish to allow anyone to test the application then leave this field blank. Otherwise, you can add up to 10 Pi Usernames for limiting access. These Pioneers can be changed, removed, or added to after registration. 

#### Hosting Options: Self hosted or Hosted by Pi Core Team
In the middle of the form, you will be asked whether you want the app to be self hosted or hosted by Pi Core Team.

#### Self hosted
Self Hosted means that you are the one handling your applications server and web hosting. You have your own infrastructure, and you are the one taking care of daily operations of the hosting. If you select this option, you will be asked to enter the frontend URL of your application. See the Frontend Validation section below on how to validate this frontend URL. For a limited time try Digital Ocean hosting services and get a free $200 credit by using [this link to sign up](https://www.digitalocean.com/try/free-trial-offer?utm_campaign=amer_brand_kw_en_cpc&utm[…]id=EAIaIQobChMI6uHQ1cHZ-gIVh8aGCh1wQA4tEAAYASACEgKgFvD_BwE).

#### Coming Soon - Hosted by Pi Core Team
The Pi Core Team will host your application — you will have no infrastructure management, no availability headaches, you simply manage the application’s  code base. Although the self-hosting option is available for everyone, the Pi Core Team hosting option requires approval from the Pi Core Team. The Pi Core Team hosting of apps, if available for your app, is facilitated through the Pi App Engine.

Finally, when you select this action, instead of a frontend url, you will be asked for a Gitlab username. This will be useful for the Pi Core Team to provide you with a Gitlab project, already integrated with the Pi Core Team’s deployment pipeline. 

#### Production URL
In this field you should put the URL that this App will be accessed with. If this is a Mainnet Application the URL should be the URL that you will give to Pioneers so they can access the application within Pi Browser. If a testnet application then this URL should be your testing URL which you may or may not give out. It is required to have an Https:// URL. 

#### Development URL
This is the URL for your locally-run development application (e.g. http://localhost:3000/). This will be used by the Sandbox to access your local application instance. See [The Sandbox Flag](./piAppPlatform/piAppPlatformSDK/#the-sandbox-flag) section for more information on running your development application in the Sandbox. 

<br />

### API Key
With the Pi App Platform comes the Pi APIs, where you can execute HTTP requests. For now this is only meant to handle user verification and payments but more abilities will be added in the future, such as creating chat conversations on the Pi Chat from your application. 

At the bottom of your project’s app dashboard, you can see a section called “API Keys”. You will need it to access the Pi Backend as an application developer. Keep it safe! Anyone with this key can pretend to be you.

Note that accessing the public Pi blockchain does not require any API keys. You can simply produce transactions using your App’s private key and submit them directly to the blockchain through any public node (e.g., your own node, one of Pi Core Team’s nodes, or any other node that is running the “Blockchain API service”). Note, however, that during the current Enclosed Mainnet period, only Pi Core Team nodes operate the Pi Mainnet blockchain while any node can operate the Pi Testnet blockchain. For more details, please refer to the updated whitepaper chapter drafts [here](https://pinetwork-official.medium.com/pi-whitepaper-chapters-mainnet-token-model-mining-and-roadmap-19f4a6774e71”).