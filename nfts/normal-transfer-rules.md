---
description: Learn about Atomicals Non-Fungible Tokens (NFT) Transfer Rules
---

# Normal Transfer Rules

The normal operation of an NFTs such as Realms and containers is using First-In First-Out (FIFO) allocations from inputs to outputs. The way to imagine as the the earliest inputs which contain NFTs will go to the first available output, then the next inputs which contain NFTS go to the next output, and so on until all the input NFTs have been allocated. In the case that an expected output is an unspendable OP\_RETURN or there are not enough outputs to accomodate the input sequence, then the NFTs are always assigned to the 0'th output.

## Transfers of Non-Fungible Tokens (NFT)

NFT inputs are assigned in a First-In First-Output approach. In the case of an input containing multiple NFTs they are considered at the same position and will be assigned to the same output together.

<figure><img src="../.gitbook/assets/Transfers of Fungible Tokens (ARC20) (5).jpg" alt=""><figcaption></figcaption></figure>
