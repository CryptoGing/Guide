---
layout: default
title: Pi Platform SDK
parent: "Pi Platform"
grand_parent: "Getting Started"
nav_order: 1
---

# Pi SDK
{: .no_toc }
The SDK is a developer's method to interact with and obtain information from Pi Network. Developers can request information such as a Pioneer’s username or create a payment within Pi Browser.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## How to integrate it
### HTML Code
To use Pi SDK, you need to add an SDK script tag to the frontend HTML code of the app's home page. For most developers this will be the index.html file that is used as the "/" route or home page. Next you need to call the init function to initialize the SDK. You need to specify the version to ensure compatibility with future SDK releases. 

In the below code example the first script tag calls the Pi SDK while the second script tag calls the init function and declares the version the Pi SDK. 

{% highlight html %}
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
<script> Pi.init({ version: "2.0" }) </script>
{% endhighlight %}

As of June 2022, version 2.0 is the latest.

### The Sandbox Flag 
If you want to operate the Pi SDK within a local environment there is an optional tag that can be applied titled sandbox. You must have configured a development URL in the developer portal to use this feature. When testing within the Sandbox the flag should be set to true. 

{% highlight html %}
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
<script> Pi.init({ version: "2.0", sandbox: true }) </script>
{% endhighlight %}

If you're using a framework or a boilerplate that supports it, you should be able to set up your sandbox flag to match your development environment. For example, most good Node boilerplates will set up the value of process.env.NODE_ENV to either "development" or "production", and you could do something like: 

{% highlight html %}
<script> Pi.init({ version: "2.0", sandbox: <%= process.env.NODE_ENV !== 'production' %> })  </script> 
{% endhighlight %}

This depends on your setup, but running the Pi SDK in sandbox mode will generally happen whenever your app is running in development.

##### Sandbox URL
To obtain the URL for your app within the Sandbox open the Pi Browser and navigate to your app's Developer Portal Page. Scroll to the bottom of the page and look for a section titled "Development URL." Copy and paste the URL found in that section into your prefered desktop browser and hit enter.

You will be redirected to a page that looks similar to the below image and says "Sign-in required" and has a random string of letters and numbers on it.

<img title="App Sandbox Screen" alt="Authorize sandbox screen presented when an App tries to access the sandbox" src="/assets/images/authorizeAppSandbox.png" style="width:270px;height:550px;">

##### Authorize Sandbox
You now need to authorize the sandbox to access the Pi SDK. To do this on your mobile phone open the Pi App. Within the sidebar menu click on the "Pi Utilities" option. You will be presented the screen below, and you need to click the link for "Authorize Sandbox" at the bottom of the page.

<img title="App Sandbox Screen" alt="Authorize sandbox screen presented when an App tries to access the sandbox" src="/assets/images/piAppAuthorizeSandbox.png" style="width:270px;height:550px;">

After clicking on the "Authorize Sandbox" link you will be brought to the below page. Using the code displayed on the page within the desktop browser enter it into the "Sign-in code" field and click "confirm." 

<img title="App Sandbox Screen" alt="Authorize sandbox screen presented when an App tries to access the sandbox" src="/assets/images/piAppAuthorizeAppCodeScreen.png" style="width:270px;height:550px;">

The page should now redirect to the home page of your app. You are now able to test the functionality of your app within a local environment. You will need Test-Pi in you Pi Wallet to make any transactions. For more information on payments see the [Pi Payments]({{ site.baseurl }}{% link docs/importantTopics/paymentFlow.md %}#ImportantTopics) section.

### Calling the Pi SDK within your App
#### Window.Pi
In order to call the PI SDK you must first initalize a new window directed towards Pi. This can be done using the follow code:

{% highlight javascript %}
const Pi = window.Pi;
{% endhighlight %}

You may name the varible whatever you prefer for ease we use `Pi`. Now that the window has been initialized it is time to start utilizing the functions offered by the Pi SDK. 

## Functions
The payment function and the acess token received from the Authenticate function are covered in depth within the [Important Topics]({{ site.baseurl }}{% link docs/importantTopics.md %}#ImportantTopics) section. Please head there for a more detailed explination of functionality, integration and use cases. 

### Authenticate
The Authenicate funcation will request the Pioneer's scope and retun them to the App in the form of a promise. 

Scopes, are aspects of a Pioneer's information which can be requested by an application. The information is obscured when possible to protect the Pioneer. The Authenticate function will always return the `uid` and `accessToken` irregardless of what scopes are requested. 

The Access Token is a dynamic identifier which can be used inconjuction with the Pi APIs to verify a Pioneer. The Access Token will change at set time intervals. The Access Token should not be used to create a unique record for a Pioneer. The `uid` is an app-local identifier for the Pioneer. This is specific to this Pioneer, and the app. 

#### Calling Authenticate
To Authenticate function takes two arguements, `scopes` and `onIncompletePaymentFound`. Scopes is an Array of strings and onIncompletePaymentFound is a callback function. Both arguments are implemented by the developer and explinations on each are below. 

Javascript code example that will call the authenticate function and log the return in the console:
{% highlight javascript %}
const Pi = window.Pi;

// Empty array for testing purposes:
const scopes = [ ];

//Empty function that will log an incomplete payment if found
//Developer needs to code this callback function
function onIncompletePaymentFound(payment) { 
  console.log(payment);
  };

Pi.authenticate(scopes, onIncompletePaymentFound).then(function(auth){
    console.log(auth)
}).catch(function(error) {
  console.error(error);
{% endhighlight %}

The empty scopes array will return a promise object in Javascript:
{% highlight javascript %}
Object{
  accessToken: string,
  user: {
    uid: string,
  }
}
{% endhighlight %}

Security Note: The Pioneer information obtained with this method, `uid` and `accessToken`, should not be saved to your backend and should only be used for presentation logic (e.g displaying the Pioneer’s username). Send them to your backend and then verify the Pioneer's identity by requesting the /me endpoint from your backend, using the `accessToken` obtained with this method. The return from the /me endpoint will contain the `uid` for the Pioneer or will result in an error code if the Access Token is not found. Pi Platform APIs are covered in depth on the [Pi Platform APIs]({{ site.baseurl }}{% link docs/gettingSetup/piPlatform/piAPIs.md %}#PiAPIs) page of this guide. 

#### Pioneer Approval
When a Pioneer visits the app for the first time they will be presented a popup asking for permission to share their information with the app. Each scope requested will appear to the Pioneer and the Pioneer can choose to "Allow" or "Cancel" the request. When deciding what scopes to request its best to limit to only the needed scopes for core functionality of the app. Asking for too much information could result in Pioneers declining the request to share information with your app. 

<img title="Pioneer Authenticate Request" alt="Popup request to share a Pioneer's information with an App" src="/assets/images/authenticateRequestPermission.png" style="width:270px;height:550px;">

The app will not receive any information from Pi until the Pioneer approves this request. If the Pioneer fails to respond to the request then it will time out and the app will not be sent the requested information. The Pioneer will need to reload the page and then confirm their decision. 

#### Scopes

##### username
The `username` scope will return a Pioneer's username allowing the developer to integrate personalization into their app for the Pioneer. It can also be used for displaying progress or achievements such as on a leaderboard for a game. 

To request the `username` add the sting 'username' into the scopes array variable. Note this will not remove the `accessToken` or the `uid` from being returned.

{% highlight javascript %}
const scopes = ['username'];
{% endhighlight %}

The returned promise in Javascript:

{% highlight javascript %}
Object{
  accessToken: string,
  user: {
    uid: string,
    username: string
  }
}
{% endhighlight %}


##### Payments
The `payments` string is needed to initialize Pi payments. It does not return any information within the authenticate promise. To include it see the below code example:

#### Code Exapmle 
// Requesting payment scope from the Pi SDK:
{% highlight javascript %}
const scopes = ['payments'];

//Empty function that will log an incomplete payment if found
//Developer needs to code this callback function
function onIncompletePaymentFound(payment) { 
  console.log(payment);
  };

Pi.authenticate(scopes, onIncompletePaymentFound).then(function(auth){
    console.log(auth)
}).catch(function(error) {
  console.error(error);
{% endhighlight %}

Now that you have implemented the payment scope you can create payments.

### Create Payment
The Pi SDK function to create a payment takes two arguments `PaymentData` and `PaymentCallback`. 

Payment Data is the variables of the payment and in Javascript it should be constructed using a `Object {}`. The format for the object is as follow, you can name the object as you prefer:

{% highlight javascript %}
const PaymentData = {
    amount: number,  /* Pi Amount being Transacted */
    memo: string, /* "Any information that you want to add to payment" */
    metadata: object {}, /* { Special Information: 1234, ... } */
};
{% endhighlight %}

The PaymentCallbacks are a groupd of callback functions that will be utilized at points throughout the payment flow. The callback will come from the Pi SDK and each function is prefilled with the arguments it should take. When implementing these functions the information should be passed to your server side to utilize the PI APIs. Its important to have them all implemented so the app can handle errors. 

{% highlight javascript %}
// Callbacks the developer needs to implement:
const PaymentCallbacks = {
    onReadyForServerApproval: function(paymentId) { /* ... */ },
    onReadyForServerCompletion: function(paymentId, txid) { /* ... */ },
    onCancel: function(paymentId) { /* ... */ },
    onError: function(error, payment) { /* ... */ }
    };
{% endhighlight %}

Here is a sample payment for 1 Pi using Javascript code and combining the variables from above: 

{% highlight javascript %}
const PaymentData = {
    amount: 1,
    memo: 'This is a Test Payment',
    metadata: { InternalPaymentID: 1234 },
};

// Callbacks the developer needs to implement:
const PaymentCallbacks = {
    onReadyForServerApproval: function(paymentId) { /* ... */ },
    onReadyForServerCompletion: function(paymentId, txid) { /* ... */ },
    onCancel: function(paymentId) { /* ... */ },
    onError: function(error, payment) { /* ... */ }
    };
  
    Pi.createPayment(PaymentData, PaymentCallbacks).then(function(payment) {
    console.log(payment)
  }).catch(function(error) {
    console.error(error);
  });
  }
  {% endhighlight %}