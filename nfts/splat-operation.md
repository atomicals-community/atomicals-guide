---
description: >-
  Separate (or "splat") merged NFTs at the same UTXO location to their own
  outputs
---

# Splat Operation

In the event that NFTs were merged to the same UTXO location, use the `SPLAT(x)` operation to quickly seperate all of them in a single transaction.&#x20;

Examples:

Atomicals 1199 ,4567, 0542 are Non-Fungible Tokens (NFT) merged in a single UTXO.\
\
To separate them, use the SPLAT (x) operation to spread them out over the outputs in alphabetical order according to their atomical\_id.

If there are not enough outputs to accommodate the remaining NFTs, or the corresponding output is an unspendable OP\_RETURN, then that particular NFT is automatically assigned to the first Output 0 always.



<figure><img src="../.gitbook/assets/Transfers of Fungible Tokens (ARC20) (14) (1).jpg" alt=""><figcaption></figcaption></figure>

\


\
