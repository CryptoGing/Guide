---
layout: default
title: Getting Started Checklist
parent: "Introduction to Pi"
nav_order: 2
---

# Getting Started Checklist
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Registering for an Account and Initial Setup
The following steps are required before launching an app in the Pi Ecosystem. Once these steps are completed a developer can choose their development path. 

1. **Download the Pi App**
* [Google Play Store Link](https://play.google.com/store/apps/details?id=com.blockchainvault)
* [Apple App Store Link](https://itunes.apple.com/us/app/pi-network/id1445472541)
2. Register for an account
* Use a friend's invitation code to get 1 Pi
3. **Download and Sign into the Pi Browser**
* Watch our [video tutorial](https://www.youtube.com/watch?v=q8R_-R8Wkls) to learn how to complete this
* [Google Play Store Link](https://play.google.com/store/apps/details?id=pi.browser)
* [Apple App Store Link](https://apps.apple.com/us/app/pi-browser/id1560911608)
4. **Verify Email Address**
* Enter the Pi Mining App and click on the '&#9776;' in the top left corner. 
* Select the Profile option and confirm email address.  
5. **Create a Pi Wallet**
* Create a Pi Wallet by heading to [pi://wallet.pi](pi://wallet.pi) within the Pi Browser. 
* You will be asked to confirm access by opening the wallet you created on the Developer Portal App Checklist.
* *Developer Portal App Checklist Step - 3*

## Initial Setup and Pi Sandbox Launch
1. **Register your App**
* Enter your App Name, App Description, and App’s Network
* Once registered the network an app points to cannot be changed
* See our [Pi Mainnet vs Testnet](../../importantTopics/mainnetVsTestnet) Page for more on selecting a network
* *Developer Portal App Checklist Step - 1*
2. **Configure App Hosting**
* Either setup hosting through a third-party provider or host it on Pi Network’s Pi Engine. 
* Note: Hosting on Pi Network is coming soon
* *Developer Portal App Checklist Step - 2*
3. **Read Documentation and Review Demo App**
* Note: If you don’t want to start from scratch or if you are part of a hackathon, we recommend using our [Pi Demo App](../../demoApp) as a boilerplate to get setup quickly
* Visit [pi://demo.pi](pi://demo.pi) within the Pi Browser to interact with the Demo App
* *Developer Portal App Checklist Step - 4*
4. **Configure your App's Development URL**
* Enter the URL that the app will be accessed from on your local host, while running in the sandbox mode.
* Note: This is not user facing nor accessable on the web
* *Developer Portal App Checklist Step - 5*
5. **Run your development App in the sandbox**
* First, set sandbox flag to “true” within your FE app code. Copy URL from dev portal and paste in your desktop browser. Enter the provided code in the utilities page of your Pi Mining App, found in the hamburger menu on the top left. Your browser will now be in sandbox mode and connected to your pi account
* If using the Pi Demo App using `yarn start` on the frontend will automatically launch the app in the Pi Sandbox
* *Developer Portal App Checklist Step - 6*

## Deploy App on Pi Testnet
1. **Deploy your app in a production environment**
* Enter the desired Production URL. This is the URL the app will be accessible from within the pi browser 
* *Developer Portal App Checklist Step - 7*
2. **Validate Domain Ownership**
* Prove ownership of your domain by adding the provided validation key to a .txt file named ‘validation-key.txt’ and place it on your hosting domain. Click on the step to get your validation key and URL to place the file
* If using the Pi Demo App adding the validation string to your environment variables will automatically produce the needed page on your App for validation 
* *Developer Portal App Checklist Step - 8*
3. **Process a transaction on your app**
* Visit the App at the verified URL within the Pi Browser to see and interact with it
* Have your app process a User-to-App Pi Transaction to confirm you have successfully connected to the Pi Ecosystem
* Users will be able to see and interact with your testnet application. All testnet payments use test-Pi
* *Developer Portal App Checklist Step - 9*


## Launching on Pi Mainnet
1. Obtain a Mainnet Wallet
* Pi KYC is required
* Slots to apply are currently sent on an invitation basis
* The wallet address of the Pioneer who registers the Developer Portal project will be used for all mainnet transfers associated with the app.
2. Create a Developer Portal Project directed at the Pi Mainnet
* Follow the previous steps to register an App and set the parameters
* When registering your app in the Developer Portal select Pi Mainnet as the App's Network
* You cannot change a previously registered project to point to a different network than selected at the time of registration
3. Verify App URL
* URL cannot match the URL that is verified of another Developer Portal Project
* If adjusting the URL of another Developer Portal Project then you must verify a new URL on the other project prior to reuse of that URL on another project.
4. Generate API Key
* API calls will fail if the API Key from a Testnet application is not updated
* This will cause Payment failures
5. Launch App and complete a Pi payment
* It is recommended to have deployed a testnet app prior to launching on Mainnet to ensure payments function as intended
* All Mainnet payments use Pi


## Special Considerations
- To process payments successfully on Pi Mainnet a wallet that has received a migration is required
- Developers must maintain compliance with the [Developer Terms of Service](https://socialchain.app/developer_terms) at all times