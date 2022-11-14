---
layout: default
title: Launch on Mainnet
parent: "Steps to Build on Pi"
nav_order: 5
---

# Steps to Build on Pi
{: .no_toc }


## Launching on Pi Mainnet

1. Obtain a Mainnet Wallet
* Pi KYC is required
* Slots to apply are currently sent on an invitation basis
* The wallet address of the Pioneer who registers the Developer Portal project will be used for all mainnet transfers associated with the app.
2. Create a Developer Portal Project directed at the Pi Mainnet
* Follow the previous steps to register an App and set the parameters
* When registering your app in the Developer Portal select Pi Mainnet as the App's Network
* You cannot change a previously registered project to point to a different network than selected at the time of registration
3. Verify App URL
* URL cannot match the URL that is verified of another Developer Portal Project
* If adjusting the URL of another Developer Portal Project then you must verify a new URL on the other project prior to reuse of that URL on another project.
4. Generate API Key
* API calls will fail if the API Key from a Testnet application is not updated
* This will cause Payment failures
5. Launch App and complete a Pi payment
* It is recommended to have deployed a testnet app prior to launching on Mainnet to ensure payments function as intended
* All Mainnet payments use Pi


## Special Considerations
- To process payments successfully on Pi Mainnet a wallet that has received a migration is required
- Developers must maintain compliance with the [Developer Terms of Service](https://socialchain.app/developer_terms) at all times
