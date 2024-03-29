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
The Pi Mainnet is a blockchain developed by Pi Network in which Pi is the native cryptocurrency. The mining mechanism that widely distributes the Pi cryptocurrency requires Pioneers to make many diverse forms of contributions to the network’s growth, security, utilities creation, decentralization, stability, and longevity, by which Pi is first deposited in the Pioneers’ mobile Pi accounts. The migration of these Pioneers’ Pi balances from their mobile Pi account to their Mainnet wallet started in June 2022 when the network passed one million KYC-verified Pioneers. KYC authentication of a Pioneer through a native, decentralized Pi KYC app precedes their balance migration to the Mainnet. In order to allow for sufficient time for millions of Pioneers to successfully complete their KYC verification and the subsequent Mainnet migration, create utilities in the Pi ecosystem, and the network’s continued efforts to iterate on the Pi ecosystem design, the Mainnet phase of the Roadmap has two periods as summarized below. For more details, please refer to the updated Roadmap chapter draft [linked here] (https://pinetwork-official.medium.com/pi-whitepaper-chapters-mainnet-token-model-mining-and-roadmap-19f4a6774e71)

<ol>
<li>Firewalled Mainnet (i.e., the Enclosed Network),</li>
<li>Open Mainnet (i.e., the Open Network).</li>
</ol>

### Enclosed Network Period
This period began on December 28, 2021 when the Pi Mainnet blockchain launched. The Enclosed Network period means that the Mainnet is live but with a firewall that prevents any unwanted external connectivity. KYC’ed Pioneers will be able to use their Pi on the Mainnet freely in an enclosed environment within Pi Network. Pi apps will be able to switch from Testnet to Mainnet—to production mode for real Pi transactions. However, this period will not allow connectivity between the Pi blockchain and other blockchains.

The Enclosed Network allows the Mainnet to run with production data and real Pi, which differs from Testnet. Data gathered during the Enclosed Network will help calibrate and tweak any configurations and formulae, if necessary, to ensure a stable and successful Open Network.

#### Restrictions in the Enclosed Network Period
While transactions between Pi apps and Pioneers, and Pioneer-to-Pioneer, are allowed within Pi Network, the Enclosed Network will have in place the restrictions as listed below. These restrictions at this stage help enforce the enclosed nature of the network:

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

### Open Network Period
The launch of the Open Network Period depends on the maturity of the Enclosed Network ecosystem and the progress of KYC. The Open Network period means that the firewall in the Enclosed Network period will be removed, allowing any external connectivity, e.g., to other networks, wallets, and anyone who wants to connect to Pi Mainnet. API calls will not be firewalled, and Pioneers will be able to run their own Pi Nodes and API services. Pioneers will have connectivity with other blockchains. Community Nodes can also run the Mainnet.

## Pi Testnet
Pi Testnet allows for the testing of connectivity, performance, security, and scalability of the blockchain, and allows Pi app developers to develop the Pi apps before they deploy their app on the Pi Mainnet. Blockchain transactions are irreversible and cannot be refunded; therefore, it is important to have a place for developers and Pioneers to test transactions in a risk-free environment. The Pi Testnet is meant to mimic but is not a fork of the Pi Mainnet and the two blockchains may not be identical at a given point in time. 

The Pi Testnet uses Test Pi (or test-π), which is NOT REAL Pi. Test Pi is solely for the purpose of testing transactions on the Pi Testnet and contains NO VALUE. There is a faucet on the Pi Testnet that distributes Test Pi. If your wallet is running low on Test Pi, more can be requested. The Test-Pi balance in the wallet may be reset because Testnet will be periodically reset as part of the testing.

### Sandbox (Local Environment)
The Sandbox is a local testing environment that utilizes the Pi Testnet and a local instance of your app. This is for testing purposes only and should only be used during development. In order to use this feature, you must have a URL registered within the Developer Portal page of your app.

To learn how to utilize the Sandbox and get it set up, go to the <a href="../../gettingStarted/PiAppPlatform/piSDK">Pi SDK</a> page and see the section titled "The Sandbox Flag."

## Pi Wallet
The Pi Wallet can be utilized on both the Pi Mainnet and Pi Testnet. See the <a href="../paymentFlow/piWallet">Pi Wallet</a> page to learn more about the wallet. Instructions to switch between networks within the Pi Wallet are available on this page.
