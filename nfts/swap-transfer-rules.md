---
description: Learn about Atomicals Non-Fungible Tokens (NFT) PBST Swap Rules
---

# Swap Transfer Rules

STEP 1.\
Seller signs 2nd input containing the NFT Atomical 7771 and 2nd output to receive 4000 Satoshis.\
Signing with SIGHASH\_SINGLE | ANYONECANPAY allows the buyer to add additional inputs for funding and their receive address for where to receive the NFT

\
STEP 2.\
Buyer adds funding input at 1st input and adds first output to receive the NFT Atomical 7771 value. Signing with SIGHASH\_ALL commits the buyer to all inputs and outputs.

<figure><img src="../.gitbook/assets/Transfers of Fungible Tokens (ARC20) (6).jpg" alt=""><figcaption></figcaption></figure>
