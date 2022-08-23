
# Pioneer to App Payments
{: .no_toc }
This payment method creates a payment which will be sent from the wallet of the Pioneer to the wallet of the App. 
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Payment Flow
This method sets up the ability to enable a one-way transfer from the wallet of a Pioneer, who initiates the payment within the App, to the Application’s wallet. A different method will be used to transfer from the wallet of the App to the wallet of a Pioneer (this functionality will be available in the future).

This page will not cover how to integrate the Pi SDK or Pi App Platform APIs, and assumes that you’ve read the following pages of this guide:

Pi SDK
Pi App Platform APIs
Pi Payment Flow

If you haven’t read these pages, then please do so ahead of trying to implement a payment.

## Create Payment
This payment is initiated with the Pi.CreatePayment function of the Pi SDK. It takes two arguments PaymentData and PaymentCallbacks. Example code in Javascript for a 1 Pi payment is as follows: 

{% highlight javascript %} 
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
The createPayment function is then called using the window.Pi variable that was created when integrating the Pi SDK in the "Getting Started" Section. The two previously created payment variables are passed as arguments. We used a .then function to handle any return and console.log to print it within the development console. A .catch function was used to handle any error that might be thrown and to console.error or print it in the development console.
{% highlight javascript %} Pi.createPayment(paymentData, paymentCallbacks).then(function(payment) { console.log(payment) }).catch(function(error) { console.error(error); }); {% endhighlight %}

A .catch function was used to handle any error that might be returned and to console.error or print it in the development console.

Callback Functions
The Pi App Platform will start the payment and return the PaymentID. The onReadyForServerApproval function that was implemented by the developer within the paymentCallbacks will begin. At this point, the Payment Dialog will open to the Pioneer on the App, but it is non-interactive until the onReadyForServerApproval callback is finished. The PaymentID should be passed to your app’s server side for the approval call to the Pi Platform API. Once the PaymentID is on your server side, the /payment/{ PaymentID }/approve endpoint should be called, passing the PaymentID for this payment. A successful call to the approve endpoint will return the PaymentDTO resource as seen below:

At this point, the Payment Dialog displayed to the Pioneer will become interactive. The Pioneer will need to input their passphrase (or use Biometric verification if they have enabled it on their phone) and approve the transaction. Once the Pioneer approves the transaction, the Payment Dialog will again become non-interactive.

After the Pioneer approves the payment, then the Pi App Platforms will send the transaction to the blockchain. That will return the TransactionID (txID) to the Pi App Platform.

The Pi App Platform invokes the callback function onReadyForServerCompletion, passing the PaymentID and the txID to the App. The App should pass the txID to the server side and call the Pi API endpoint /payment/{ txID }/complete using the txID to complete the payment.

A successful call to the /complete endpoint will return the PaymentDTO resource with the updated values. An unsuccessful call will return a non-200 error code.

The Payment Dialog will now close and the Pioneer will be able to interact with the app again. Your app’s server and your app’s frontend can exchange data, and update the app interface to show a confirmation screen to the Pioneer.

Security Note on Completing Payments
Do not complete any payment within your app until the payment has completed and had a paymentDTO returned from the /complete API endpoint of the Server-Side Completion. The Pioneer might be lying to your app, by running a hacked version of the SDK the Pioneer could pretend they have made a payment. If the API call to /payment/{ transaction_id }/complete returns a non-200 error code, do not mark the payment complete or paid with your app.
