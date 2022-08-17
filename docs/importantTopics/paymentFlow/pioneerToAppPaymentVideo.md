---
layout: default
title: Video Integration - Pioneer to App Payments
parent: "Pi Payments"
grand_parent: "Important Topics"
nav_order: 4
---
# Video Integration of Pioneer to App Payments
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

<iframe width="560" height="315" src="https://www.youtube.com/embed/rvrmaDu61Tc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
Captions for the video can also be found on our [Medium Blog Post](https://pinetwork-official.medium.com/hackathon-workshop-transcripts-86367175ebb3)

## Captions
### Introduction
Welcome back everyone. In the previous video, we saw how to use the Pi SDK, run your app in the sandbox and authenticate the user. In this video, I’m going to walk you through the overall payment process. The process I’m about to explain is at a very high level, but even with this, you’ll be able to understand what you need to do to create a payment. If you want to learn more about what’s actually happening behind the scene, please refer to our Pi Platform Documentation. Now let’s begin.

Throughout the process, essentially 4 parties are involved. Your app, Your App Server, the Pi Servers and the Pi Blockchain. The most important point to remember is that all of them must be completely synchronized about the state of a payment to avoid any possible race conditions. If something goes wrong, a user may pay for an item that’s already given to someone else, or a user may pay for an item twice because the process gets interrupted. To avoid such cases, the Pi Core Team has implemented a protocol as a part of the Pi SDK and you don’t need to worry at all.

### Create Payment
With the Pi SDK, creating a payment in Pi Apps is very simple. Let’s have a look at the createPayment function. It takes 2 arguments, which are paymentData object and an object of callback functions. The paymentData object consists of three items. Amount to be paid, memo for users, and metadata for your own usage. If any of these are missing, you’ll get an error.

### onReadyForServerApproval
onReadyForServerApproval is a function that gets called when the payment id is ready. Using this function, you need to pass payment id and other relevant data to your app server. Then on your server, you should reserve an item for the user who’s about to buy it, and let the Pi server know that you’re ready to proceed. In other words, you need to make sure that your server is aware of the current payment through this function.

### onReadyForServerCompletion
onReadyForServerCompletion is a function that gets called after the blockchain transaction has been submitted to the Pi blockchain. Your job is again to pass any relevant data to your app server. On your server, you can verify the payment and deliver the item that was reserved for the user. In the end, you should complete the payment by letting the Pi server know that you have received the payment and delivered the item. The other 2 functions are onCancel and onError functions. As their names suggest, they are functions that will be invoked when the payment gets canceled and when an error occurs.

### onIncompletePaymentFound
Let’s not forget about the onIncompletePaymentFound function that we saw in the previous video. To remind you, this function is in charge of completing any incomplete payment. You might be wondering why you need to implement this function. There’s a chance that a payment process gets interrupted unexpectedly. A user might lose the internet connection, the app might crash or the server might not respond. If the payment process fails before a user pays, then it’s fine. The user just needs to start the process again. Of course, you need to clean up the stale orders on your server. But what if the user already paid and all of a sudden the process ends without being completed gracefully? That’s where this function comes in and plays the role. The Pi SDK will detect such payment when the user is authenticated and when a user tries to make a new payment, and if it finds an incomplete payment, it will request your app to complete the payment. Okay, so we are going to implement the functions in a minute. But there’s one more step you can’t forget, which is obtaining the API Key.

### Generate Server API Key
Assuming that you have registered your app on the developer portal, let’s generate the API Key, if you haven’t done yet. Select your app at the bottom, and if you tap on the “get api key” button, you can create a new key. Save the key before you close the window. Using this key, you can hit our endpoints and update the status of the Payment.

### Callback Functions
We are back to our demo app, and now we are going to implement the callback functions. For the sake of time, I have prepared the code snippet. Let’s fill this in together. We now all know what this is. What you want to do here is to call your server to hit our endpoint from your server. Keep in mind that this slash approve is just an arbitrary route I’m using as an example. Again, to complete the payment, you need to call your server to hit our endpoint. The last two functions are for your own usage. When the payment is canceled, mark it as canceled on your server as well. Also handle the error however you want.

### Server Side
Now let’s complete the backend. In this demo, I’m running the node server, but you can choose any backend you prefer. Also keep in mind that the actual implementation is up to you. I’m just demonstrating a rough example to help you understand the process. First, let’s see the approved route. When the payment is created, you need to reserve an item for the user, and map the paymentId to the current order. Then make sure to hit the approved endpoint to approve the payment. The same thing goes for the complete route as well. You can verify the payment if you want, deliver the item to the user, mark the order as paid and complete the payment by hitting the complete endpoint. We shouldn’t forget the incomplete route. Process the incomplete payment, and hit the complete endpoint. Although I’m skipping here, don’t forget to handle the cancel route as well. We are finally ready to create a payment.

### Testing
Now that the code is ready, let’s see the flow from the beginning. As soon as I tap on the button, the payment flow begins. I can see the next page only if the payment is approved from the app server. Then I can review the details and if I think it’s correct, I’ll use my passphrase to sign and submit the transaction to the Pi blockchain. Now the transaction is submitted, and we are waiting for the app server to complete the payment flow. When the app server finally completes the payment, I can see this result, and this is the end of the demo. Thanks for watching.
