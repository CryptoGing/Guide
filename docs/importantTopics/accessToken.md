---
layout: default
title: Access Token
parent: "Important Topics"
nav_order: 2
---
# Access Token
{: .no_toc }
It is a long random string which uniquely identifies a Pioneer within an app. The access token is received as a returned object the Authenticate call from the Pi SDK. This page assumes that you've read the [Pi SDK]({{ site.baseurl }}{% link docs/gettingSetup/piPlatform/piSDK.md %}) page and have a working understanding of how the Pi SDK and Authenticate function work. 
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Code to Obtain Access Token
The Access Token is obtained by calling the Authenticate function of the Pi SDK. No scope must be passed to obtain an Access Token as it will come included in all calls to the Authenticate Function. The token will be returned as a promise. 

Sample code to call the Authenticate function to obtain the Access Token:
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

That call will return an Access Token in the below format:
{% highlight javascript %}
Object{
  accessToken: string,
  user: {
    uid: string }}
{% endhighlight %}

Security Note: Do not save or use the `accessToken` or `uid` obtained in the Authentication call for purposes other than display. A malicious actor could pass a forged or expired access token. Instead pass the `accessToken` to your server side and verify it with the /me endpoint of the Pi APIs. Calling that API will be detailed later on. 

The Access Token is dynamic and will change at preset time intervals. Apps should not use the access token to create records or store information about a Pioneer. Instead, Apps should verify the access token which returns a static ID. 
To authenticate an access token, the App should pass the access token from its Frontend to its server side, then call the Pi API `/me` endpoint.

### Verifying the Access Token
Once the App has the Access token in its backend, then it should call the `/me` endpoint of the Platform APIs. This call will return the PioneerDTO with the `uid` and the `username`. If the access token is not valid, for any reason, the call will return a 401 error.

The first step to call the Pi API is to create the Authorization Header that is needed. A Bearer header is combined with the Access Token to validate the call. 

{% highlight html %}
Authorization: Bearer <Pioneer's access token obtained from App Frontend>
{% endhighlight %}

An example with the required Header using Axios:
{% highlight javascript %}
const PioneerAccessToken = accessToken_Obtained_from_App_Frontend;
const header = { headers: { authorization: "Bearer " + PioneerAccessToken }};
axios.get("https://api.minepi.com/v2/me", header);
{% endhighlight %}

The `/me` endpoint will return either the PioneerDTO, if the Access Token was valid, or a 401 Error Code if the token was fake or invalid. The returned PioneerDTO will look as follows:

{% highlight javascript %}
Object{
  user: {
    uid: string,
    username: string }}
{% endhighlight %}

The returned `uid` is static and since it comes from the `/me` endpoint it is the correct `uid` for the Pioneer and your App. Check out the next section for potential uses of the `uid`.

## Using the `uid` within your App
