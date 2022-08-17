---
layout: default
title: Developer Portal
parent: "Getting Started"
nav_order: 3
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

The only requirement at this stage is that you own the domain of the URL that you provide! You will be asked to verify its ownership which is detailed below.

<<<<<<< Updated upstream
### Pi Brainstorm
The Pi Brainstorm application is designed to be the hub where Pioneers can collaborate and propose ideas for new apps that will build utility in the Pi Ecosystem. All Pioneers are able to view, propose, and apply to join existing projects within the Brainstorm app. 

Check it out by clicking on the Brainstorm tile within the Pi Browser. Listing your app on the Brainstorm brings you visibility to the Core Team and the community, and can potentially attract other community members with a variety of skills to apply to work on your team. 

In 2021, the Brainstorm app was also the hub for a network Hackathon that drew hundreds of participants from around the world. In the near future, we will also be hosting ongoing scalable online Hackathons as the Core Team is turning the Brainstorm app into an automatic scalable Hackathon system that involves blind peer-review processes. The ongoing Hackathon system is meant to further surface excellent community development and support the overall apps ecosystem.

=======

>>>>>>> Stashed changes
## Register & Create API Key 

### Registering an App
#### The basic fields
<<<<<<< Updated upstream
When you open the developer portal, the homepage presents a brief introduction of the app and some important information. At the bottom of the page, you will see a "New App" button. If  you have previously registered an app, that app will appear at the very bottom of the page. Click the “New App” button to start the registration process of your new app. The Mainnet SDK was launched in July of 2022 and when creating a Developer Portal Project at the time of registration it must be chosen whether the project will connect to the Pi Mainnet or Pi Testnet. Once a project has be registered it cannot be changed.
=======
When you open the developer portal, the homepage presents a brief introduction of the app and some important information. At the bottom of the page, you will see a "New App" button. If  you have previously registered an app, that app will appear at the very bottom of the page. Click the “New App” button to start the registration process of your new app. The Mainnet SDK was launched in July of 2022 and when creating a Developer Portal Project at the time of registration it must be chosen whether the project will connect to the Pi Mainnet or Pi Testnet. Once a project has been created the network that it points to cannot be changed. 
>>>>>>> Stashed changes
 
The application creation form, includes the following steps:

<ul>
<li>Add an App Name and Description of the App. </li>
<ul>
<li>If you have a Brainstorm project associated with your app, you should use the same name. </li>
</ul>
<li>At the end of the form, you will be asked for your Github and Discord usernames, both of which are optional. </li>
</ul>
In the future, we may create a bridge between Brainstorm and the Developer Portal, so that the whole app lifecycle is seamless.

### Select Network App will Connect To
This is the most important step and will determine what network your app connects to. Selecting Pi Mainnet will connect this application when accessed in the Pi Browser to the Pi Mainnet Blockchain. There are no Test-Pi transactions on Pi Mainnet and all transactions will be for real Pi. The Pi Testnet is the network that should be selected for testing purposes. All testnet transactions use Test-Pi. 

### Whitelist Users
If registering a Pi Testnet connected App the developer has the option to grant access to all that visit the site or only to a select list of Pioneers. If you wish to allow anyone to test the application then leave this field blank. Otherwise, you can add up to 10 Pi Usernames for limiting access. These Pioneers can be changed, removed, or added to after registration. 

### Hosting Options: Self hosted or Hosted by Pi Core Team
In the middle of the form, you will be asked whether you want the app to be self hosted or hosted by Pi Core Team.

#### Self hosted
<<<<<<< Updated upstream
Self Hosted means that you are the one handling your application on production. You can have your own infrastructure, but you are the one taking care of the scaling and the availability. If you select this option, you will be asked to enter the frontend URL of your application. See the Frontend Validation section below on how to validate this frontend URL.

#### Hosted by Pi Core Team
On the other hand, "Hosted by Pi Core Team" means that Pi Core Team will host your application — no infrastructure management, no availability issues, you simply take care of the code. Although the self-hosting option is available for everyone, the Pi Core Team hosting option requires approval from the Pi Core Team. The Pi Core Team hosting of apps, if available for your app, is facilitated through the Pi App Engine.

Finally, when you select this action, instead of a frontend url, you will be asked for a gitlab username. This will be useful for the Pi Core Team to  provide you with a Gitlab project, already integrated with the Pi Core Team’s deployment pipeline. You can now click the submit button and follow me to the next page.

### URL Where You Will Host Your App
In this field you should put the URL that this App will be accessed with. If this is a Mainnet Application the URL should be the URL that you will give to Pioneers so they can access the application within Pi Browser. If a testnet application then this URL should be your testing URL which you may or may not give out. 

#### Frontend Validation
If you choose to host your application yourself, you will need to verify your domain ownership. This is meant to avoid developers creating apps from websites that they do not own represent. For instance, you shouldn’t be able to impersonate the wikipedia.com domain name.

In order to prove your ownership over the domain name, you will need to place a specific file at the root of your domain. The content of the file must match the content of the text field in the gray box on the Developer Portal.
=======
Self Hosted means that you are the one handling your applications server and web hosting. You have your own infrastructure, and you are the one taking care of daily operations of the hosting. If you select this option, you will be asked to enter the frontend URL of your application. See the Frontend Validation section below on how to validate this frontend URL.

#### Hosted by Pi Core Team
On the other hand, "Hosted by Pi Core Team" means that the Pi Core Team will host your application — you will have no infrastructure management, no availability headaches, you simply manage the application’s  code base. Although the self-hosting option is available for everyone, the Pi Core Team hosting option requires approval from the Pi Core Team. The Pi Core Team hosting of apps, if available for your app, is facilitated through the Pi App Engine.

Finally, when you select this action, instead of a frontend url, you will be asked for a gitlab username. This will be useful for the Pi Core Team to  provide you with a Gitlab project, already integrated with the Pi Core Team’s deployment pipeline. 

### URL Where You Will Host Your App
In this field you should put the URL that this App will be accessed with. If this is a Mainnet Application the URL should be the URL that you will give to Pioneers so they can access the application within Pi Browser. If a testnet application then this URL should be your testing URL which you may or may not give out. 

#### Frontend Validation
If you choose to host your application yourself, you will need to verify your domain ownership. This is meant to avoid developers creating apps from websites that they do not own or represent. For instance, you shouldn’t be able to impersonate the wikipedia.com domain name.

In order to prove your ownership over the domain name, you will need to place a specific file at the root of your domain. The content of the file must match the content of the text field in the gray box listed on the Developer Portal.
>>>>>>> Stashed changes

When you are done placing the file with the correct content at the root of your domain, you can click the “Verify domain” button. You will either see an error message with some debugging information, or the gray box will disappear and a green check mark will appear next to your domain url. Your domain ownership is now verified, and you can access your app through the Pi Browser by typing your app url in the address bar.

### Development URL
The URL entered in this field will be used for generating the Pi Sandbox URL

### API Key
With the Pi App Platform comes the Pi API, where you can execute HTTP requests against the main Pi Servers. For now this is only meant to handle payments but more abilities will be added in the future, such as creating chat conversations on the Pi Chat from your application. 

<<<<<<< Updated upstream
At the bottom of the page, you can see a section called “API Keys”. You will need it to access the Pi Backend as an application developer. Keep it safe! Anyone with this key can pretend to be you.

Note that accessing the public Pi blockchain does not require any API keys. you can simply produce transactions using your App’s private key and submit them directly to the blockchain through any public node (e.g., your own node, one of Pi Core Team’s nodes, or any other node that is running the “Blockchain API service”). Note, however, that during the current Enclosed Mainnet period, only Pi Core Team nodes operate the Pi Mainnet blockchain while any node can operate the Pi Testnet blockchain. For more details, please refer to the updated whitepaper chapter drafts here. 

=======
At the bottom of your project’s developer portal page, you can see a section called “API Keys”. You will need it to access the Pi Backend as an application developer. Keep it safe! Anyone with this key can pretend to be you.

Note that accessing the public Pi blockchain does not require any API keys. you can simply produce transactions using your App’s private key and submit them directly to the blockchain through any public node (e.g., your own node, one of Pi Core Team’s nodes, or any other node that is running the “Blockchain API service”). Note, however, that during the current Enclosed Mainnet period, only Pi Core Team nodes operate the Pi Mainnet blockchain while any node can operate the Pi Testnet blockchain. For more details, please refer to the updated whitepaper chapter drafts here. 
>>>>>>> Stashed changes