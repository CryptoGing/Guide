---
layout: default
title: Pi Wallet Intro
parent: "Pi Payments"
grand_parent: "Important Topics"
nav_order: 1
---
# Pi Wallet Introduction
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What is the Pi Wallet
To introduce the Pi Wallet, it’s worth briefly going over what a crypto wallet is. A crypto wallet is essentially a pair of “keys”: a public Address and a secret Passphrase (or a secret key). While the wallet address must be shared with others to transact on the blockchain, the passphrase must be kept secret as it is like a password to your bank account required to move any assets. In general, crypto wallets are categorized into custodial and non-custodial wallets with a difference in whether there is someone else helping you manage your passphrase/secret key or assets in the wallet.

The Pi Wallet is a non-custodial wallet because the Pi servers never have access to your secret key or passphrase. To be more user-friendly and based on feedback from early testing Pioneers, the Pi Wallet secret key is represented by a list of more legible words called a 'Passphrase'.  The secret key can be dynamically derived from the passphrase so people only need to store a passphrase without actually saving a secret key. Using passphrases instead of the derived secret key for safekeeping reduces the chance of human mistakes in recording, and at the same time, achieves the same level of security as the secret key itself. In the mobile version of the Pi Wallet, if your phone has biometric authentication (fingerprint or face recognition), the passphrases can be safely stored on your phone and retrieved through fingerprint or FaceID.

For more information and to learn about other features of the Pi Wallet watch our <a href=”https://www.youtube.com/watch?v=q8R_-R8Wkls”> Introductory Pi Wallet Video </a> 

The Pi Wallet can generate wallet addresses on multiple blockchains and hold different crypto assets on such blockchains using the same passphrase, but initially we are focusing only on Pi assets.

##  Switch between Pi Mainnet and Pi Testnet
The Pi Wallet has a feature to switch between the Pi Testnet and Mainnet Blockchains. Only one wallet will be needed for both testing an app on the Testnet and interacting on the Pi Mainnet. This limits the wallets needed, reducing the number of passphrases which must be secured.

To change between the Pi Mainnet and Pi Testnet, utilize the dropdown menu within the Pi Wallet.

Press on the down arrow that is inside the red box of the first image, and select the corresponding blockchain that you wish to interact with as seen on second image:

<br>
<img title="Pi Wallet Mainnet" alt="Pi Wallet showing the Pi Mainnet is selected" src="../../../../assets/images/mainnetWallet.png" style="width:300px;height:550px;"> 
  
<img title="Pi Wallet Network Selection" alt="Pi Wallet showing the dropdown network selection feature" src="../../../../assets/images/mainnet_v_testnet_wallet.png" style="width:300px;height:550px;">

## Creating a Pi Wallet
### Personal Wallet
To create a Pi Wallet, open the Pi Browser and click on the Pi Wallet tile to open the app. Once on the main page of the app, follow the steps to create a Pi Wallet. When creating a wallet, there is a minimal balance which must be maintained in order for the wallet to be valid. In addition, because there is a KYC component to the Pi Mainnet ,you will need to apply for Pi KYC before a Mainnet wallet can be created for you. In order to apply for Pi KYC, you must continue to mine and an invitation will be sent to you.

#### Testnet
The Pi Testnet faucet will initiate the wallet on the Pi Testnet with 100 Test Pi for you to test transactions with. We want to emphasize that Test Pi (or test π) is NOT REAL Pi! Test Pi is solely for the purpose of testing transactions on the Pi Testnet and contains NO VALUE. The Test Pi balance in the wallet may be reset because Testnet will be periodically reset as part of the testing. You can also request additional Test Pi from the faucet when your balance gets low.

### Developer Wallet
This feature is coming soon and will be updated once it's available.

### Testnet Faucet
On the Pi Testnet Blockchain, anyone can take advantage of the test Pi faucet. The purpose of the faucet is to supply, free of charge, imitation tokens which function the same as the real Pi tokens for the purpose of testing an app. This allows anyone to test interactions and transactions in a risk-free environment. Test Pi cannot be transferred to Mainnet and holds no value.
