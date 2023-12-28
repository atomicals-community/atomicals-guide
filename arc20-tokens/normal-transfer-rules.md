---
description: Learn about Atomicals Fungible Tokens (ARC20) Transfer Rules
---

# Normal Transfer Rules

The normal operation of an ARC20 token transfer is that the sum total of all the input values should be allocated completely, or _cleanly,_ into the available outputs. In the situation that there are not enough output values, or one of the subsequent outputs would result in an overallocation (ie: inflation of the token units), then the remaining balance is permanently destroyed or burned.

## Transfers of Fungible Tokens (ARC20)

Fully allocating - cleanly assign all inputs to outputs with FIFO rule.

Atomicals 1932 ,7920, 0542 are Non-Fungible Tokens (NFT) are assigned in First-In First Out order while skipping unspendable outputs (OP\_RETURN). The first input NFTs are assigned starting from Output 0, and then each subsequent NFT input assigned to the next available output.\
Multiple Atomicals at the same UTXO input are sorted by atomical\_id. Since “1932” is before “7920” it goes first.&#x20;

<figure><img src="../.gitbook/assets/Transfers of Fungible Tokens (ARC20) (7).jpg" alt=""><figcaption><p>Fully allocating - cleanly assign all inputs to outputs with FIFO rule.</p></figcaption></figure>

## Transfers of Fungible Tokens (ARC20)

Not cleanly allocating - Performs "best effort" assignment for all tokens from Output 0

In the case that the outputs cannot be fully (or "cleanly") assigned, then the algorithm attempts to allocate all ARC20 tokens starting from Output 0, regardless of whether another ARC20 was already allocated. This decision was made to give leniency in the event that the developer or wallet accidentally failed to track multiple input ARC20 - in other words a "best effort" attempt is made to compensate and assign.\


<figure><img src="../.gitbook/assets/Transfers of Fungible Tokens (ARC20) (10).jpg" alt=""><figcaption></figcaption></figure>

Atomicals 1932 ,7920, 0542 are Non-Fungible Tokens (NFT) are assigned in First-In First Out order while skipping unspendable outputs (OP\_RETURN).\
\
If they Atomicals cannot be “cleanly assigned”, as in the example above the 5th output has 700 units (which is too much for the Atomical 0542’s value of 620), then the algorithm defaults to “best effort” assigning all ARC20 starting from Output 0.

## Transfers of Fungible Tokens (ARC20)

Insufficient outputs - permanently destroying unallocated units&#x20;

Atomical 86a1 is Fungible Tokens (ARC20) and can be split and merged across outputs.\
\
An Atomical is insufficiently allocated when there is not a sufficient amount of Satoshis in the outputs to accommodate the input values. The result is the excess input value is burned – or permanently destroyed.  The example above shows that Atomical 86a1’s input value is 2600, but there are only 1600 Satoshis in the outputs, which effectively results in 1000 units of Atomical 86a1 being burned.\


<figure><img src="../.gitbook/assets/Transfers of Fungible Tokens (ARC20) (8).jpg" alt=""><figcaption></figcaption></figure>

## Transfers of Fungible Tokens (ARC20)

Incorrect over-allocation - permanently destroying remainder

Atomical 86a1 is Fungible Tokens (ARC20) and can be split and merged across outputs.\
\
An Atomical is incorrectly allocated when there is an excess of Satoshis in the expected output and there is not enough remaining balance of the inputs for the Atomical. The example above shows that Atomical 86a1’s input value is 2600, and there is 600 in the first output, but the second output has 2100 Satoshis, which cannot take on the Atomical 86a1 because there is only 2600 - 600 = 2000 units of the Atomical remaining to allocate. To attempt to allocate would result in inflation of the supply and therefore is considered invalid. The result is that 2000 units of Atomical 86a1 is permanently destroyed

<figure><img src="../.gitbook/assets/Transfers of Fungible Tokens (ARC20) (9).jpg" alt=""><figcaption></figcaption></figure>
