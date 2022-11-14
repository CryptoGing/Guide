---
layout: default
title: Initial Development
parent: "Steps to Build on Pi"
nav_order: 3
---

# Steps to Build on Pi
{: .no_toc }

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
