---
description: >-
  Every Realm and Sub-Realm has the ability to mint any number of Sub-Realms
  below them.
---

# Mint Sub-Realms

<figure><img src="../.gitbook/assets/WhatsApp Image 2023-12-12 at 9.35.07 AM.jpeg" alt=""><figcaption></figcaption></figure>

## Method 1: Mint with Sub-Realm Rules

The first way to allow users to mint subrealms is to define the minting rules at the `subrealms` namespace in the Realm or Subrealm data structure.  We will demonstrate below how to configure a realm (or subrealm) to allow users to mint subrealms autonomously.  We start with the sample realm name `+mycoolrealm` and walk through the steps required to enable subrealm minting.

### Pre-Requisites

* You have a Realm or Sub-Realm already claimed
* Decide how you will allow user's to mint subrealms (more on this below)

### Step 1. Create initial Subrealm Minting Rules File

[See Rules Guide for more details](../rules-subrealms-and-dmint.md) for more details on the format of the rules file. Below we will demonstrate how to configure a sample rules configuration for our example Realm `+mycoolrealm`

The  example demo Realm`+mycoolrealm` exists on testnet at atomical\_id`285051d51bb9d045d24dc0816d6f29bfe72b1c91e479702ec866c724a0f4aa56i0`

**Sample Rules File (Save as rules.json)**

````
```json
{
  "subrealms": {
    "rules": [
        {
          "p": "^[a-z0-9]{6,64}$",
          "bitworkc": "8888.8"
        },
        {
          "p": ".*",
           "o": {
            "0014383fb23c5b1b40025b0e1dd3e310d6e1ee6d316e": {
              "v": 1000
            }
          }
        }
    ]
  }
}
```
````

The rules file above allows anyone to mint a subrealm of length 6 to 64 characters in length for free as long as the user mines the Subrealm with [Bitwork](../bitwork-mining.md)  of `"bitworkc": "8888.8"` (about 1-2 minutes of CPU time). There is a second additional rule entry that allows subrealms to be minted less than 6 characters in length as long as a payment of 10,000 satoshis is made to the address.

Recall that you can convert between output script hex format to addresses and vice versa using the CLI tool. See [Rules Guide](../rules-subrealms-and-dmint.md) for more details.

### Step 2. Set the Minting Rules with "enable-subrealms" for your Realm

With the rules file you have created above in Step 1, we will enable it for your particular Realm.&#x20;

Using the CLI, execute the following command to enable subrealm minting:

```
yarn cli enable-subrealms +mycoolrealm file.json --satsbyte=100
```

Then follow the on-screen instructions to deposit the funds into your funding address, and after the transaction is confirmed your rules will become activated and anyone can mint subrealms according to the rules you have created.

### Step 3. Query "realm-info" to see activated rules

After the transaction in Step 2. is completed successfully and confirmed in at least 1 block, then you may query the activated rules for your realm with the command:

```
yarn cli realm-info mycoolrealm
```

It will display the relevant information about the Realm and the activated rules.

> **⭐ Congratulations! You have successfully enabled Subrealm Minting on your Realm or Subrealms.** Read below on how your users can participate and claim subrealms

### Mint and Claim Subrealm

To mint and claim a subrealm according to the rules created above, the users can use the following commands to query if a Subrealm name is available, and determine the minting rules that are applicable and check the status of their request.

#### Step 1. Query the Subrealm to claim to check if is available

Query the subrealm `+mycoolrealm.nicesubrealm` to see if it is available and if it's taken. The command `realm-info` like the DNS `WHOIS` command to report back information about a realm name.

```
yarn cli realm-info mycoolrealm.nicesubrealm
```

#### Step 2. Mint the Subrealm Request

```
yarn cli mint-subrealm +mycoolrealm.nicesubrealm --satsbyte=100
```

Then follow the on-screen instructions. In the case of a mint that requires a payment, then you must use a tool that allows payments.&#x20;

#### Step 3.  (If payment is required) Make payment for Subrealm during payment window.

The CLI has the operation to see which Subrealms are ready to be paid and also help pay with regular Satoshis:

```
yarn cli pending-subrealms 
```

Then follow the on-screen instructions to make regular Satoshi payments.

<mark style="color:red;">**⚠️ WARNING: It is not recommended to use the CLI to make payments for high value items and/or paying with ARC20. The tool is experimental and it is not advised to use the tool unless you are an advanced user. It is better to use one of the upcoming wallets to handle the payment complexity on your behalf.**</mark>





