---
layout: default
title: Pi App Platform APIs
parent: "Pi App Platform"
grand_parent: "Getting Started"
nav_order: 3
---
# Pi Platform APIs   
{: .no_toc }
The platform API grants access for Third Party Applications to communicate with the Pi Servers. Information can be requested about Pioneers or transactions that are related with your app deployed on the Pi App Platform, and the Pioneers that use your app.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Making API Calls
### Headers and Authorization Methods
This is how the Pi Servers will determine if the request is coming from an approved source.
There are two formats depending on the endpoint being requested.

#### Access Token (Bearer Token)
These API calls require that you provide a Pioneer's access token to obtain the resource. They are generally related with a Pioneer's data (e.g: /me). The token is returned from the Pi.Authenticate function of the Pi App Platform SDK.

Those endpoints can be accessed using the following Authorization header:
{% highlight html %}
Authorization: Bearer <Pioneer's access token>
{% endhighlight %}

Example Code:
{% highlight javascript %}
const headers = { headers: { authorization: "Bearer " + PioneerAccessToken }};
axios.get("https://api.minepi.com/v2/me", headers);
{% endhighlight %}

#### Server API Key (Authorization Key)
For various reasons, some API calls must be made from the backend or server of your app. To obtain an authorization key for API requests, please see the section of this guide on the [Developer Portal](../../devPortal).

Those endpoints can be accessed using the following Authorization header:
{% highlight html %}
Authorization: Key <App Server API Key>
{% endhighlight %}

Example code calling the `/payments` endpoint to obtain the information on a payment using the paymentID string:

{% highlight javascript %}
const postingURL = `https://api.minepi.com/v2/payments/${ payment_id }`;
const headers = { headers: { authorization: `key ${ APIKEY }` } };
axios.get(postingURL, null, headers);
{% endhighlight %}

### API Reference
#### /me
Access a Pioneer's resource and retrieve the Pioneer's information.

{% highlight html %}
GET api.minepi.com/v2/me
{% endhighlight %}

Authorization method: Access token
<br>
Response type: PioneerDTO

The request will fail (401 HTTP error code) if the token has been tampered with, as a tampered Access token would not belong to any Pioneer.

#### /payments
Payments are covered in greater detail in the [Pi Payment Flow](../../../importantTopics/paymentFlow) section of this guide. If this is your first implementation of a Pi payment, it's highly recommended to read that section in addition. It covers how Pi Payments are initiated and completed. This section only covers the API calls.

The APIs for payments all have the base route `/payments`. It is important to not create payments using the Platform API. Use the client-side Javascript SDK for this purpose.

Get Information:<br />
{% highlight html %}
GET api.minepi.com/v2/payments/{payment_id}
{% endhighlight %}

Authorization method: Server API Key <br />
Response type: PaymentDTO

##### Approve a Payment:<br />
This marks a payment as approved within the Pi Server, enabling the Pioneer to approve and submit the transaction to the blockchain. The `paymentID` is obtained as a argument of the callback function `onReadyForServerApproval` from the Pi App Platform SDK. Read more on that function on the [Pi App Platform SDK](../../importantTopics/mainnetVsTestnet") page. The `paymentID` should be passed from your client side to your server side for this call.

Once the `paymentID` is on your server side then call the `/approve` endpoint using the `paymentID` to identify the payment:
{% highlight html %}
POST api.minepi.com/v2/payments/{payment_id}/approve
{% endhighlight %}

Authorization method: Server API Key <br />
Response type: PaymentDTO

Here is the code to call the `/approve` endpoint and `console.log` the returned `PaymentDTO`
{% highlight html %}
//Using a fake paymentID for demonstration, would be passed from client side
const paymentID = eWXszS7lkfsRLHcrDRghLpDD5tHc;
const payment_id = paymentID; //Passed from the Client Side
const headers = { headers: { authorization: `key ${ APIKEY }` } }; //Stored in a .env file
const postingURL = `https://api.minepi.com/v2/payments/${ payment_id }/approve`;
let paymentDTO = await axios.post(postingURL, null,headers);
console.log(paymentDTO)
{% endhighlight %}

##### Complete a Payment:<br />
This marks a payment as completed by proving to the Pi Servers that your app has obtained the payment's transaction ID (txID). This is the final step in a payment before the payment flow closes and the Pioneer returns to your app. The `txID` is obtained through the callback function `onReadyForServerCompletion` of the Pi App Platform SDK. Passing that `txID` to your server side and using it to call this endpoint will complete a payment.

Don't forget that

{% highlight html %}
POST api.minepi.com/v2/payments/{payment_id}/complete
{% endhighlight %}

Authorization method: Server API Key <br />
Response type: PaymentDTO

##### Example Request
{% highlight javascript %}
//Using a fake txID string for demonstration, would be passed from client side
const txid = "7a7ed20d3d72c365b9019baf8dc4c4e3cce4c08114d866e47ae157e3a796e9e7"
const payment_id = payment_id; //Passed from client side
const tx_id = { txid: txid }; //In production passed from client side
const headers ={headers:{ authorization: `key ${ APIKEY }` } }; //API stored in .env file
const postingURL = `https://api.minepi.com/v2/payments/${ payment_id }/complete`
let paymentDTO = await axios.post(postingURL, tx_id, headers)
console.log(paymentDTO)
{% endhighlight %}

### Resource Types
There are two resources currently returned by the Pi App Platform API: the `UserDTO` and the `PaymentDTO`. In the future, there may be more.

#### Pioneer DTO
{% highlight javascript %}
{
  "uid": string, // An app-specific Pioneer identifier
  "username": string, // The Pioneer's Pi username. Requires the `username` scope.
}
{% endhighlight %}
#### Payment DTO
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
    "canceled": boolean, // Canceled by the developer or by Pi Network
    "Pioneer_cancelled": boolean, // Canceled by the Pioneer
  },
 
  // Blockchain transaction data:
  "transaction": null | { // This is null if no transaction has been made yet
    "txid": string, // The id of the blockchain transaction
    "verified": boolean, // True if the transaction matches the payment, false otherwise
    "_link": string, // A link to the operation on the Blockchain API
  },
};
{% endhighlight %}
