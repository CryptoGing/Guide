---
layout: default
title: Pioneer to App Payments
parent: "Pi Payments"
grand_parent: "Important Topics"
nav_order: 3
---
# Pioneer to App Payments
{: .no_toc }
This payment method creates a payment which will be sent from the wallet of the Pioneer to the wallet of the App. 
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Payment Flow
One way transfer from the wallet of a Pioneer, who initates the payment within the app, to the wallet of the App in use. A different method is used to transfer from the wallet of the App to the wallet of a Pioneer. 

This page will not cover how to integrate the Pi SDK or Pi App Platform APIs and assumes you've read the following pages of this guide:

<ul>
<li> <a href="../../../gettingStarted/PiAppPlatform/piAppPlatformSDK"> Pi SDK </a> </li>
<li> <a href="../../../gettingStarted/PiAppPlatform/PiAppPlatformAPIs"> Pi App Platform APIs </a> </li>
<li> <a href="../piPaymentFlow"> Pi Payment Flow </a> </li>
</ul>

If you haven't read these pages then please do so ahead of trying to implement a payment. 

## Create Payment

This payment is initiated with the `Pi.CreatePayment` function of the Pi SDK. It takes two arguments `PaymentData` and `PaymentCallbacks`. Example code in Javascript for a 1 Pi payment is as follows:
{% highlight javascript %}
    // All fields can be replaced with variables to make them useable within your app
    // amount: number,
    // memo: string,
    // metadata: object { },
    const paymentData = {
      amount: 1,
      memo: 'This is a Test Payment',
      metadata: { InternalPaymentID: 1234 },
    };

    const paymentCallbacks = {
      // Callbacks you need to implement - read more about these on the Pi SDK Page:
        onReadyForServerApproval: function(paymentId) {                 
            const body = { "payment_Id": paymentId }
            axios.post(ServerSide_onReadyForServerApprovalURL, body )  },
        onReadyForServerCompletion: function(paymentId, txid) { 
            const body = { "payment_Id": paymentId, "tx_id": txid }
            axios.post(ServerSide_onReadyForServerCompletionURL, body ) 
        },
        onCancel: function(paymentId) { 
            console.log(paymentId)
        },
        onError: function(error, payment) { 
            console.log(error) 
        }
    };
{% endhighlight %}

The createPayment function is then called using the `window.Pi` variable that was created when integrating 
the Pi SDK in the "Getting Started" Section. The two previously created payment variables are passed as arguments.
We used a `.then` function to handle any return and `console.log` to print it within the development console.
A `.catch` function was used to handle any error that might be thrown and to `console.error` or print it in the development console.

{% highlight javascript %}
Pi.createPayment(paymentData, paymentCallbacks).then(function(payment) {
    console.log(payment)
  }).catch(function(error) {
    console.error(error);
  });
{% endhighlight %}

## Callback Functions
The Pi App Platform will start the payment and return the `PaymentID`. The `onReadyForServerApproval` function that was implemented by the developer within the `paymentCallbacks` will begin.
At this point within in the App the Payment Dialog will open to the Pioneer but it is non-interactive until the `onReadyForServerApproval` callback is finished.
The `PaymentID` should be passed to your app's server side for the approval call to the Pi Platform API. Once the `PaymentID` is on your server side the `/payment/{ PaymentID }/approve` endpoint should be called, passing the `PaymentID` for this payment.
A successful call to the approve endpoint will return the `PaymentDTO` resource as seen below:

{% highlight javascript %}
{
  // Payment data:
  "identifier": string, // The payment identifier
  "Pioneer_uid": string, // The Pioneer's app-specific ID
  "amount": number, // The payment amount
  "memo": string, // A string provided by the developer, shown to the Pioneer
  "metadata": Object, // An object provided by the developer for their own usage
  "to_address": string, // The recipient address of the blockchain transaction
  "created_at": string, // The payment's creation timestamp
  
  // Status flags representing the current state of this payment
  "status": {
    "developer_approved": boolean, // Server-Side Approval
    "transaction_verified": boolean, // Blockchain transaction verified
    "developer_completed": boolean, // Server-Side Completion
    "cancelled": boolean, // Cancelled by the developer or by Pi Network
    "Pioneer_cancelled": boolean, // Cancelled by the Pioneer
  },
  
  // Blockchain transaction data:
  "transaction": null | { // This is null if no transaction has been made yet
    "txid": string, // The id of the blockchain transaction
    "verified": boolean, // True if the transaction matches the payment, false otherwise
    "_link": string, // A link to the operation on the Blockchain API
  },
};
{% endhighlight %}

At this point the Payment Dialog displayed to the Pioneer will become interactive. The Pioneer will need to input their passphrase and approve the transaction. Once the Pioneer approves the transaction the Payment Dialog will again become non-interactive. 

After the Pioneer approves the payment then the Pi App Platforms will send the transaction to the blockchain. That will return the TransactionID (txID) to the Pi App Platform. 

The Pi App Platform invokes the callback function `onReadyForServerCompletion` passing the `PaymentID` and the `txID` to the App. The App should pass the `txID` the server side and call the Pi API endpoint `/payment/{ txID }/complete` using the txID to complete the payment.

A successful call to the `/complete` endpoint will return the `PaymentDTO` resource with the updated values. An unsuccessful call will return a non-200 error code

The Payment Dialog will now close and the Pioneer will be able to interact with the app again. Your app's server and your app's frontend can exchange data, and update the app interface to show a confirmation screen to the Pioneer.

### Security Note on Completing Payments
Do not complete any payment within your app until the payment has completed and had a paymentDTO returned from the /complete API endpoint of the Server-Side Completion. The Pioneer might be lying to your app, by running a hacked version of the SDK the Pioneer could pretend they have made a payment. If the API call to /payment/{ transaction_id }/complete returns a non-200 error code, do not mark the payment complete or paid with your app.