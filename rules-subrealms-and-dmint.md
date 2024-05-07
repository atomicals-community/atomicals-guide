---
description: Overview of the Rules system for claiming Subrealms and DMINT
---

# Rules (Subrealms & DMINT)

Subrealms and NFT items (with DMINT - Decentralized Mints) can be minted (or "claimed") according to the `rules` set up by the owner of the parent realm or in in the case of DMINT, the creator of the container.

It is possible to pay for a subrealm or DMINT'ed item using only proof of work (Bitwork) and/or also paying any set of output addresses a certain amount of Satoshis or value in an [ARC20](arc20-tokens/) token.

## Format of Rules Data-structure

The `rules` section in the `dmint` (for containers) and `subrealms` section for Realms is identical and has the same syntax and semantics.

We demonstrate the use of the rules, by building upon simple examples and gradually increasing complexity.

<mark style="color:red;">Warning:</mark> The regex standard being used is the one in Python 3.9. This means that all regex patterns are matched in "full string mode" - meaning that the match is always from the very beginning of a string to the very end even in the absence of `^` or `$`

### Example 1: Require only Bitworkc mining to claim mint

Require the use of Bitwork to mine on the commit transaction (`bitworkc`). The pattern `"p": ".*"` means to match any subrealm name or any dmint item id, then the only form of "payment" required is that the item must be minted with `"bitworkc": "1234"` on the commit transaction to claim.

````
```json
{
  "rules": [
      {
        "p": ".*",
        "bitworkc": "1234"
      }
  ]
}
```
````

### Example 2: Require both Bitworkc and Bitworkr mining to claim mint

Require the use of Bitwork to mine on the commit transaction (`bitworkc`). The pattern `"p": ".*"` means to match any subrealm name or any dmint item id, then the form of "payment" required is that the item must be minted with `"bitworkc": "1234"` on the commit transaction to claim. Additionally the reveal transaction must have `"bitworkr": "8888.10" which means it must match "8888.*"` for the transaction hash as long as the 5th hex character is greater than or equal to "a" (10 in hex).

````
```json
{
  "rules": [
      {
        "p": ".*",
        "bitworkc": "1234",
        "bitworkr": "8888.10"
      }
  ]
}
```
````

### Example 3: Require different Bitworkc based on the name of the item

In the third example, we specify that if the item name starts with the number `"0"` or the name ends in `.gif` then the Bitwork required is about 16x harder (ie: 16x more CPU/GPU mining will be required)

````
```json
{
  "rules": [
      {
        "p": "^0|\.gif$",
        "bitworkc": "77777"
      },
      {
        "p": ".*",
        "bitworkc": "7777"
      }
  ]
}
```
````

### Example 4: Require a payment to a certain address to claim the item

To enable "pay to claim" use the `"o"` (output script) field to indicate what output must be paid in order to successfully claim. 

````
```json
{
  "rules": [
      {
        "p": ".*",
         "o": {
          "5120a97636cf3492a546d976e053f61b50788ef57a10b28885275b60bb369e6290e4": {
            "v": 1000
          }
        },
      }
  ]
}
```
````

The above means that the output script of 5120a97636cf3492a546d976e053f61b50788ef57a10b28885275b60bb369e6290e4 must be paid at least `"v": 1000` satoshis for the claim to succeed. The script decodes to address `bc1p49mrdne5j2j5dktkupflvx6s0z8027ssk2yg2f6mvzand8nzjrjqschm45`

**Note: Use the CLI utility commands "yarn cli script-address \<script>" to get the address decoded. To perform the reverse and get the script for an address use "yarn cli address-script \<address>"**

The reason for the use of the hex encoded output script is because a project may want the user to post a message in the form of an OP\_RETURN on the blockchain instead of payment. Additionally it is more flexible for future address types.



### Example 5: Require a payment to multiple address to claim an item

To enable "pay to claim" use the `"o"` (output script) field to indicate what outputs must be paid in order to successfully claim.  In the example below in order to claim the items that start with `"000\d"` (ie: items `0000 to 0009`") they must pay 5000 satoshis to output script `5120bd5ba4e806e8cf69eff55af83c9b910f82d1978bfac53ce48554ce291dd22bec` (address: `bc1ph4d6f6qxar8knml4tturexu3p7pdr9utltzneey92n8zj8wj90kqshxyqa`) and also at the same time pay output script `5120a97636cf3492a546d976e053f61b50788ef57a10b28885275b60bb369e6290e4` (address: `bc1p49mrdne5j2j5dktkupflvx6s0z8027ssk2yg2f6mvzand8nzjrjqschm45`) 1000 satoshis.

````
```json
{
  "rules": [
      {
        "p": "^000\d$",
         "o": {
          "5120bd5ba4e806e8cf69eff55af83c9b910f82d1978bfac53ce48554ce291dd22bec": {
            "v": 5000
          }
        },
        "p": ".*",
         "o": {
          "5120a97636cf3492a546d976e053f61b50788ef57a10b28885275b60bb369e6290e4": {
            "v": 1000
          }
        }
      }
  ]
}
```

````







### Example 5: Require a payment with specific ARC20 token to claim an item

To enable "pay to claim" use the `"o"` (output script) field to indicate what outputs must be paid in order to successfully claim.  In the example below in order to claim the items that start with `"000\d"` (ie: items `0000 to 0009`") they must  pay output script `5120a97636cf3492a546d976e053f61b50788ef57a10b28885275b60bb369e6290e4` (address: `bc1p49mrdne5j2j5dktkupflvx6s0z8027ssk2yg2f6mvzand8nzjrjqschm45`) with 1000 units of the [ARC20](arc20-tokens/) token identified by id `2112003789d572f764ff91b273266997e3a1153e017dc8a4fca020eaff324301i0`

````
```json
{
  "rules": [
      {
        "p": ".*",
         "o": {
          "5120a97636cf3492a546d976e053f61b50788ef57a10b28885275b60bb369e6290e4": {
            "id": "2112003789d572f764ff91b273266997e3a1153e017dc8a4fca020eaff324301i0",
            "v": 1000
          }
        }
      }
  ]
}
```
````

### Example 6: Require Bitworkc mining and a payment with specific ARC20 token to claim an item

The example below combines Examples above to also require Bitworkc (commit txid) mining and also a payment of a specific token

````
```json
{
  "rules": [
      {
        "p": ".*",
         "o": {
          "5120a97636cf3492a546d976e053f61b50788ef57a10b28885275b60bb369e6290e4": {
            "id": "2112003789d572f764ff91b273266997e3a1153e017dc8a4fca020eaff324301i0",
            "v": 1000
          }
        },
        "bitworkc": "7878"
      }
  ]
}
```

````

## When to make a Payment after the initial claim candidate

When a payment rule includes a requirement to pay at least one address, then the user who minted the claim must wait 4 block confirmations to ensure they are the leading candidate to win the subrealm or item. Then they have an additional 11 block confirmations to make the payment according to the payment rules and must attach an `OP_RETURN` receipt which specifies which atomical id they are claiming and paying for.

The reason for this 2 step process is that if it was not 2 steps, then a malicious NFT collection could front run valid payments and then cheat users out of their items by paying faster than the user.  Therefore we use the candidate system to ensure only 1 user has the leading candidate and the eligibility to make the payment. If the user does not complete the payment and confirmed on the blockchain within 15 blocks since their original commit transaction, then another user can take the candidate lead and issue their payment and be awarded the item.

**We strongly recommend wallet and service implementors use a fee rate that is at least 50% to 100% higher than the prevaling Bitcoin network conditions to ensure the payment arrives on time and not delayed after ther 15 block confirmations**
