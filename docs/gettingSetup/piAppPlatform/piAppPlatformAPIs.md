---
layout: default
title: Pi App Platform APIs
parent: "Pi App Platform"
grand_parent: "Getting Started"
nav_order: 3
---

# Pi Platform APIs   
{: .no_toc }
The platform API allows you to read and write data to the Pi Servers related with your app deployed on the Pi App Platform, and your app's Pioneers.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Making API Calls
### Headers and Authorization Methods
This is how the Pi Servers will determine if the request is coming from a approved source. 
There are two formats depending on the endpoint being requested

#### Access Token (Bearer Token)
Some API calls require that you provide a Pioneer's access token to access the resource. They are generally related with a Pioneer's data (e.g: /me). The token Comes from the Pi.Authenticate Call to the SDK. 

Those endpoints can be accessed using the following Authorization header:
{% highlight html %}
Authorization: Bearer <Pioneer's access token>
{% endhighlight %}

Example Code:
{% highlight javascript %}
const PioneerAccessToken = accessToken;
const headers = { headers: { authorization: "Bearer " + PioneerAccessToken }};
axios.get("https://api.minepi.com/v2/me", headers);
{% endhighlight %}

#### Server API Key (Authorization Key)
For various reasons, some API calls must be made from the backend or server of your app. To obtain an authorization key for API requests, please see the section of this guide on the <a href="../../devPortal">Developer Portal</a>. 

Those endpoints can be accessed using the following Authorization header:
Format:
{% highlight html %}
Authorization: Key <App's Server API Key>
{% endhighlight %}

 Example Code:

{% highlight javascript %}
const postingURL = `https://api.minepi.com/v2/payments/${ payment_id }`;
const headers = { headers: { authorization: `key ${ APIKEY }` } };
axios.get(postingURL, null, headers);
{% endhighlight %}

### API Reference
#### /me
Access a Pioneer's resource and retrieve the Pioneer's information.

{% highlight html %}
GET minepi.com/api/v2/me
{% endhighlight %}

Authorization method: Access token
Response type: PioneerDTO

The request will fail (401 HTTP error code) if the token has been tampered with as a tampered Access token would not belong to any Pioneer.

#### /payments
Payments are covered in greater detail in the <a href="../../../importantTopics/paymentFlow">Pi Payment Flow</a> section of this guide. If this is your first implentation of a Pi payment its highly recommended to read that section. It covers how Pi Paymemts are initaited and completed. This section covers the API calls portion only. 

The APIs for payments all have the base route /payments. It is important to note do not create payments using the Platform API. Use the client-side Javascript SDK for this purpose.

Get Information:<br />
{% highlight html %}
GET minepi.com/api/v2/payments/{payment_id}
{% endhighlight %}

Authorization method: Server API Key <br />
Response type: PaymentDTO

Approve a Payment:<br />
This marks payment as approved, enabling the Pioneer to submit the transaction to the blockchain.
{% highlight html %}
POST minepi.com/api/v2/payments/{payment_id}/approve
{% endhighlight %}

Authorization method: Server API Key <br />
Response type: PaymentDTO

Complete a Payment:<br />
This marks a payment as completed by proving to the Pi Servers that your app has obtained the payment's txid, enabling the Pioneer to close the payment flow.

{% highlight html %}
POST minepi.com/api/v2/payments/{payment_id}/complete
{% endhighlight %}

Authorization method: Server API Key <br />
Response type: PaymentDTO

##### Example Request
{% highlight javascript %}
const tx_id = { txid: "7a7ed20d3d72c365b9019baf8dc4c4e3cce4c08114d866e47ae157e3a796e9e7" }
const headers ={headers:{ authorization: `key ${ APIKEY }` } };
axios.post(PaymentURL, tx_id, headers)
{% endhighlight %}

### Resource Types
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