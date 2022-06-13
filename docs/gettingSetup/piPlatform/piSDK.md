---
layout: default
title: Pi Platform SDK
parent: "Pi Platform"
grand_parent: "Getting Started"
nav_order: 1
---

# Pi SDK
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## How it works
The SDK is a developer's method to interact with and obtain information from Pi Network. Developers can request information such as a Pioneer’s Username or create a payment within Pi Browser.

## How to integrate it
To use Pi SDK, you need to add an SDK script tag to your frontend. Then you need to call the init function to initialize the SDK. You need to specify the version to ensure compatibility with future SDK releases. 

{% highlight html %}
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
<script> Pi.init({ version: "2.0" }) </script>
{% endhighlight %}

As of June 2022, version 2.0 is the latest

## The Sandbox Flag 
If you want to operate the Pi SDK within a local environment there is an optional tag that can be applied titled Sandbox. When testing within the Sandbox the flag should be set to true. In your app's code it’s handy if you control this variable with the environment variable. 

{% highlight html %}
<script src="https://sdk.minepi.com/pi-sdk.js"></script>
<script> Pi.init({ version: "2.0", sandbox: true }) </script>
{% endhighlight %}

The SDK has now been integrated and you can call it within your App by using the window variable

{% highlight javascript %}
const Pi = window.Pi;
{% endhighlight %}

## Important Functions
These functions are covered in depth within the [Important Topics]({{ site.baseurl }}{% link docs/importantTopics.md %}#ImportantTopics) section. Please head there for a more detailed explination of functionality, integration and use cases. 

### Authenticate

### Create Payment

## More In-Depth Step by Step
### Video Guide
NEED TO EMBED THE VIDEO

### Step by Step Guide
