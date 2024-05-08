---
description: Learn about Atomicals Fungible Tokens (ARC20) PBST Swap Rules
---

# Swap Transfer Rules

**STEP 1.**\
Seller signs 2nd input containing the ARC20 Atomical 9810 and 2nd output to receive 5000 Satoshis. Signing with `SIGHASH_SINGLE | ANYONECANPAY` allows the buyer to add additional inputs for funding and their receive address for where to receive the ARC20 tokens.

**STEP 2.**\
Buyer adds funding input at 1st input and adds first output to receive the ARC20 Atomical 9810 value. Signing with `SIGHASH_ALL` commits the buyer to all inputs and outputs.



<figure><img src="../assets/Transfers of Fungible Tokens (ARC20) (2).jpg" alt=""><figcaption></figcaption></figure>
