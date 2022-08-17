---
layout: default
title: Pi SDK Video Integration Tutorial
parent: "Pi App Platform"
grand_parent: "Getting Started"
nav_order: 2
---

# Pi SDK Video Tutorial
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Video Guide to Integrating the Pi SDK
<iframe width="560" height="315" src="https://www.youtube.com/embed/7wsIYOFtSZ4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
Captions for the video can also be found on our [Medium Blog Post](https://pinetwork-official.medium.com/hackathon-workshop-transcripts-86367175ebb3)

## Captions
### Integrating the SDK
To use Pi SDK, you need to add an SDK script tag to your frontend. Then you need to call the init function to initialize the SDK. You need to specify the version to ensure compatibility with future SDK releases. As of now, the version 2.0 is the latest so we put 2.0 here, and the sandbox flag to be true, which I’m going to talk about in a minute. This sandbox flag is optional and lets you configure the SDK to run in the sandbox. It’s handy if you control this variable with the environment variable, but to be explicit, I’m setting it to true here.

### Developer Portal Parameters
Let’s go to the developer portal. I’m assuming you have registered your app on the portal as I did here. To load your app in the sandbox, you need to set the “development URL”. Right now it says “Not configured” so let’s edit this. This will typically be localhost with a custom port which depends on your development environment. Here I’m using localhost with 3003 port. Once you set the development URL, a sandbox url is generated. Open this url in the desktop browser, and you’ll see this white page with authorization code. If you’re running Pi Node, you are probably familiar with this process. Open your mobile app and tap on the Authorize sandbox link at the bottom of Pi Utilities page. And you need to type the authorization code and press confirm. When your sandbox environment is authorized, you’ll see your app within the sandbox environment, which is the page you saw earlier.

### Sandbox (Local Environment)
Now open the devtool of the browser. There’s a small context selector here. You can select localhost to get your app’s context. After you select localhost, if you type Pi in the console, you can access it. Of course, you’ll see some value to be null because the current user is not authenticated yet.

### Authenticate Function
Now that we can run our app in the sandbox, let’s take a look at the SDK shortly. The very first function you’ll encounter is the authenticate function. It takes an array of strings called scopes, and one callback function called onIncompletePaymentFound.

### Scopes
There are two available scopes, which are username and payments. For now, the scopes feature is still a work in progress. What that means is the authenticate function will consider both scopes as requested for now. Nonetheless, you should implement your app with only relevant scopes. Check our SDK reference hosted on our github repository for future updates.

### onIncompletePaymentFound Callback Function
onIncompletePaymentFound function handles an incomplete payment between your app and this user you’re authenticating. A payment is considered incomplete when you don’t submit the server-side completion API call. In this demo app, we are proposing an example usage, where the payment is sent to the app server to find the previous order and mark it as paid. More details about payment is available in the Payment video. For now, let’s just keep in mind that we need to pass a callback function that handles the incomplete payment from the server side.

### Authenticate Call Return
The authenticate function will return a promise, which looks something like this. The return value might change later, but what’s important is that you need to make sure to send it to the app server and store this information in your database. It’s also important to verify this by hitting /me endpoint from your server, because malicious users can pretend they are someone else. You can find more about the /me endpoint on our Pi-Platform-documentation.
