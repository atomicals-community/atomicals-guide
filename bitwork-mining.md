---
description: Proof of Work CPU/GPU Mineable Tokens
---

# Bitwork Mining

Atomicals introduces GPU Mineable Tokens that demonstrates proof of work and energy burn. It is now possible to create provably rare and hard-to-find tokens. Easily encode an arbitrary string such as "hello" (In hex: "68656C6C6F") and have it be a requirement in the transaction id of the NFT or even to create a validate decentralized mint in the ARC-20 fungible token protocol.

In our example, to encode "hello" we require 16^10 \~ approximately 1.1 _trillion hashes_ to generate. That would take approximately 10 to 20 minutes on a modern GPU to generate (assuming 1 billion hashes per second).  Initially and more practically, one can simple require a smaller prefix such as "21e8" or "7777" which would require only 16^4 \~ 65,000 hashes and easily achievable on desktop computers and smartphones. This is enough to throttle spammers and provide contextual data information encoded right there in the transaction id.

Taking the step further, it is now possible to create an unstoppable content ranking algorithm for upvoting NFTs, tokens, and posts. The Atomicals indexer automatically indexes and categories all proof of work for Atomicals Digital objects and arbitrary "dat" (simple data transactions) into a proof of work content rank index.   This allows a never before possible way to rank social media posts that will elevate highly _energized content in a way that cannot be merely bought by the highest bidder (without running out of energy!)_

The proof of work token mining system will solves the problem of content discovery, ranking and spam filtering. It will now be possible upvote content in marketplaces and NFT platforms and _know_ for certainty that the rank was not manipulated or merely sold to the highest bidder. Welcome to the future.

The ARC-20 token standard follows in the footsteps of BRC-20, and also has the option to require proof of work before awarding tokens for the decentralized mints. This allows the initial token ticker deployer to define how much energy burn must be expended before awarding the token the minters. And it makes for a very beautiful mint pattern -- because all initial supply will be minted from transaction ids that share the same common prefix such as "e7ee7" or "010101" or "21e8", etc...

Atomicals introduces a novel way to mine proof of work vanity prefixes into token transaction ids.

## Fine Tuning Proof of Work Bitwork Prefix

You may also include a number from 1-15 after the prefix such as: '7777.1' or "7777.15" or anything in between. The number represents the allowable variations for that digit.

The way it works is that the digit after the dot "." is interpretted as a semi wild card to match any of the 5th character starting from that number.



Take "7777.10" as an example: The first 4 txid hex chars must match "7777" and the 5th character must match the 10th hex digit and up only. **The 5th digit is allowed to be a, b, c, d, e, or f**

0\
1\
2\
3\
4\
5\
6\
7\
8\
9\
a\
b\
c\
d\
e\
f

What this system allows is fine tuning and so we are not restricted to increasing the difficulty each time by  16x, but instead can chose a range between 2x to 16.

<details>

<summary>⚡ Get started and mint your first Atomical Digital Object</summary>

[Download and install the Atomicals Javascript CLI tool](https://github.com/atomicals/atomicals-js) and follow the quick start instructions to mint your NFT, Collection, or Realm name in less than 2 minutes.

</details>

