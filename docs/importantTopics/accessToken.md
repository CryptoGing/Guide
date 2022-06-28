---
layout: default
title: Access Token
parent: "Important Topics"
nav_order: 2
---
# Access Token
{: .no_toc }
A long random string which uniquely identifies a Pioneer within an app. This page assumes that you've read the <a href="../../gettingStarted/PiAppPlatform/piAppPlatformSDK">Pi SDK</a> page and have an understanding of how the Pi SDK and Authenticate function work. 
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


## Obtaining the Access Token
The Access Token is received by calling the Authenticate function of the Pi SDK. No scope must be passed to obtain an Access Token as it will come included in all calls to the Authenticate Function. 

The Authenticate Function call will return a Access Token as a promise object in the below format:
{% highlight javascript %}
Object{
  accessToken: string,
  user: {
    uid: string }}
{% endhighlight %}

Security Note: Do not save or use the `accessToken` or `uid` obtained in the Authentication call for purposes other than display. A malicious actor could pass a forged or corrupt access token. Instead pass the `accessToken` to your server side and verify it with the `/me` endpoint of the Pi App Platform APIs. Calling that API will be detailed later on. 

The Access Token is dynamic string and will change at preset time intervals. Apps should not use the access token to create records or store information about a Pioneer. Instead, Apps should verify the access token which returns the correct `uid` of the Pioneer. To authenticate an access token, the App should pass the access token from its Frontend to its server side, then call the Pi API `/me` endpoint.

The `uid` is a static string which uniquely identifies a Pioneer to an app. The `uid` that comes with the Authenticate function is unverified and should be treated as not valid. Only the `uid` received from the `/me` endpoint of the Pi Platform APIs should be considered valid. 

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
### Create Unique DB Records
Using the verified `uid` which is obtained from the `/me` Pi Platform API endpoint the app can create a unique record for each Pioneer within it's DB. The `uid` is static and will not change, however it is important to not use the `uid` that is returned by the Pi Platform SDK Authenticate function as it is not verified. Once the record is created using the `uid` then it can be used to store any usage information such as purchases, progress within a game 

### No Pioneer Sign-In Required
Everytime the Pioneer visits the app the Pi Platform SDK Authenticate function will be called. This will return the Access Token which needs to be verified. Once that token is verified the `uid` can be used to locate the Pioneer's record within the app's Database and their exprience personalized. 

For example you have a app that offers videos which require purchase. Upon visiting the site within the Pi Browser the Pioneer is presented the homescreen that a not logged in user would see. Within a few seconds once the app has received and verified the access token then the view will reload. Using the `uid` the app now displays to the Pioneer all of the videos that they've purchased in the past. In addition the app could use the Pioneers purchase history to recommend new videos. This is all done without the Pioneer signing in or remembering any passwords
