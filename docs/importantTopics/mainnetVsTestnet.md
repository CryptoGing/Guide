---
layout: default
title: Pi Mainnet vs Pi Testnet
parent: "Important Topics"
nav_order: 1
---
# Pi Mainnet vs Pi Testnet
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Pi Mainnet
The Pi Mainnet is the native blockchain centered around Pi. The mining mechanism that distributes Pi to Pioneers requires all Pioneers to migrate from the Pi App to the Pi Mainnet. The migration of Pioneer balances from their phone account to the Mainnet started during in early 2022 with the launch the Pi KYC App. KYC authentication of a Pioneer precedes their balance migration to the Mainnet. In order to allow for sufficient time for millions of Pioneers to successfully complete their KYC verification, create utilities in the Pi ecosystem, and our continued efforts to iterate on our technology and ecosystem design, the Mainnet will have two periods: 

<ol>
<li>Firewalled Mainnet (i.e., the Enclosed Network),</li> 
<li>Open Mainnet (i.e., the Open Network).</li> 
</ol>

### Enclosed Network Period
This period began in December 2021. The Enclosed Network period means that the Mainnet is live but with a firewall that prevents any unwanted external connectivity. KYC’ed Pioneers will be able to use their Pi on the Mainnet freely in an enclosed environment within Pi Network. Pi apps will be able to switch from Testnet to Mainnet—to production mode for real Pi transactions. However, this period will not allow connectivity between the Pi blockchain and other blockchains. 

Moreover, the Enclosed Network will allow the Mainnet to run with production data and real Pi, which differs from Testnet. Data gathered during the Enclosed Network will help calibrate and tweak any configurations and formulae, if necessary, to ensure a stable and successful Open Network. 

#### Restrictions in the Enclosed Network
While transactions between Pi apps and Pioneers and Pioneer-to-Pioneer transactions are allowed within Pi Network, the Enclosed Network will have in place the restrictions as listed below. These restrictions at this stage help enforce the enclosed nature of the network: 

There will be no connectivity between Pi and other blockchains or crypto exchanges.
Mainnet can only be accessed through the Pi Wallet and Pi apps on the Pi Browser.
The Mainnet blockchain will be accessible to any computer on the internet but only through a firewall to enforce the above rules.
There will only be Core Team Nodes on the Mainnet to ensure that the firewall is in place at all times.

The Enclosed Network will support the growth of the Pi ecosystem. Thus, Pioneer-to-Pioneer transactions are possible through the Pi Wallet as KYC’ed Pioneers will be able to use the Pi Wallet to transact in Pi. Pioneers can also spend Pi in Pi apps on the Pi Browser, which can access the Mainnet through the Pi Apps SDK and the Pi Blockchain API. During the Enclosed Network period, an app on the Pi Browser can only use the Pi blockchain APIs whitelisted by the firewall to interact with the Mainnet.

The following uses of Pioneer-to-Pioneer, Pioneer-to-App, and App-to-Pioneer transactions will be allowed: 
<ul>
<li>Exchange of Pi for goods and services through Pi Apps</li>
<li>Transfer of Pi between Pioneers for goods and services</li>
</ul>
The following uses will be prohibited: 
<ul>
<li>Exchange of Pi for fiat currency</li>
<li>Exchange of Pi for other cryptocurrencies</li>
<li>Transfer for Pi for a future promise of fiat or other cryptocurrencies</li>
</ul>

We will enforce the above restrictions by adding a firewall to the Mainnet and by exclusively running the Mainnet Nodes for this interim period. Community Nodes will continue to run on the Testnet in the Enclosed Network period. We will continue to implement interface and other changes to the Nodes in preparation for the Open Network period where the Community Nodes will be able to run on the Mainnet. The restrictions of the Network to keep it enclosed will be relaxed as it reaches the next period—Open Network.

### The Open Network Period
The launch of the Open Network Period depends on the maturity of the Enclosed Network ecosystem and the progress of KYC. The Open Network period means that the firewall in the Enclosed Network period will be removed, allowing any external connectivity, e.g., to other networks, wallets, and anyone who wants to connect to Pi Mainnet. API calls will not be firewalled, and Pioneers will be able to run their own Pi Nodes and API services. Pioneers will have connectivity with other blockchains. Community Nodes can also run the Mainnet. 

## Pi Testnet
Pi Testnet allows for the testing of connectivity, performance, security, and scalability of the blockchain, and allows Pi app developers to develop the Pi apps before they deploy their app on the Pi Mainnet. The Pi Testnet is meant to mimic but is not a fork of the Pi Mainnet. Blockchain transactions are irreversable and cannot be refunded so its important to have a place for developers and Pioneers to test transcations in a risk free environment. Most parameters of the Pi Testnet match that of the Pi Network. 

The Pi Testnet uses Test Pi (or test-π) which is NOT REAL Pi. Test Pi is solely for the purpose of testing transactions on the Pi Testnet and contains NO VALUE. There is a faucet on the Pi Testnet which distributes Test Pi, if your wallet is running low on Test Pi more can be requested. The Test-Pi balance in the wallet may be reset because Testnet will be periodically reset as part of the testing. 

### Sandbox (Local Environment)
The Sandbox is a local testing environment that utilizes the Pi Testnet and a local instance of your app. This is for testing purposes only and should only be used during development. In order to use this feature you must have a URL registered within the Developer Portal page of your app. 

To learn how to utilize the Sandbox and get it setup go to the [Pi SDK]({{ site.baseurl }}{% link docs/gettingSetup/piPlatform/piSDK.md %}#ImportantTopics) page and see the section titled "The Sandbox Flag."

## Pi Wallet
The Pi Wallet can be utilized on both the Pi Mainnet and Pi Testnet. See the [Pi Wallet]({{ site.baseurl }}{% link docs/importantTopics/paymentFlow/piWallet.md %}#Pi_Wallet) page to learn more about the wallet. Instructions to switch between networks within the Pi Wallet is available on the page.
