---
description: An Introduction to Atomicals Theory and Digital Objects on Bitcoin
---

# Introduction

<figure><img src="./assets/atomblack.jpg" alt=""><figcaption><p>Atomicals Protocol brings Digital Objects to life on Bitcoin and proof-of-work based blockchains.</p></figcaption></figure>

## What is the Atomicals Protocol?

The Atomicals Protocol is a simple, yet flexible protocol for minting, transferring and updating
_digital objects (traditionally called non-fungible tokens)_
for unspent transaction output (UTXO) blockchains such as Bitcoin. An Atomical (or "atom") is a way to organize the creation,
transfer and updates of digital objects – it is essentially a chain of digital ownership defined according to a few simple rules.

## Why use Atomicals?

The Atomical specification is _the simplest possible way_ to organize digital property on a blockchain such as Bitcoin. The implementation is very simple and provides the maximum flexibility for static and dynamic digital assets, artifacts and objects. The rules are so simple that it's impossible to accidentally spend Atomicals as miner fees and it's trivial to verify that ownership was transferred to the correct recipient – without relying on any third parties whatsoever or even being required to run an indexer. Atomicals are self-evident digital object histories. That being said, most developers and services will prefer the convenience of running their own indexer and all the benefits that come along with it.

## Use Cases

* Digital collectibles, media and art
* Digital identity, authentication and token- gated content.
* Web hosting and file storage
* Peer to peer exchange and atomic swaps
* Digital namespace allocation
* Virtual land and title registries
* Dynamic objects and state for games
* Social media profiles, posts and communities
* Anywhere security and decentralization is critical concern. Military grade security and verification requirements.

The usage philosophy of Atomicals is to pass along the complete history of an Atomical digital object from mint inception and including every transfer updates. _Even if an Atomical is updated or exchanges hands 10,000 times  – that amounts to only about 2.5 MB of data (250 bytes x 10,000)._ A digital object is self-evident, unforgeable chain of authenticity that does not rely on any third party service or centralized indexer for verification purposes.

The motto is:

**"No transaction history, not your digital object"**

Any client, wallet, marketplace, game and service can rapidly verify the Atomical by processing the history according to the very simple rules and detect a fake instantly without relying on trusted services.

The heart of Atomicals is a few key simple rules to follow for mint, transfer, and update operations, continue reading to the Protocol Overview to understand the high level flow before diving deeper.  If you like, you can just [skip all the theory and go straight to minting your first Atomical within a couple of minutes.](reference-and-tools/javascript-library-cli.md)

## What are Atomicals Digital Objects?

An Atomical digital object (or simply "_Atomical_") is a new kind of Non-Fungible Token (NFT) that can be minted, transferred, and updated on Bitcoin. _The major difference is there is no requirement to use a centralized service or middleman acting as a trusted indexer._ It just works today and without needing changes whatsoever to Bitcoin nor requiring side-chains or any secondary layers. **It is time to take back control of our digital lives - forever.**

Atomicals are _self-evident_ and easy to verify which makes them perfect for digital collectibles, social media, gaming, authentication and anywhere ownership and authenticity is critical to establish. The protocol rules are extremely simple, yet at the same time provides military grade security and verification levels. Zero room for error.

The Atomicals Protocol is free, open-source and will forever be available to use by anyone anywhere. Our digital future depends on a robust digital object format to elegantly handle every possible use case while minimizing any potential for errors in software implementations.

## The Atomicals Vision

\
The grand vision is to establish and secure the Bitcoin blockchain as the source of truth and digital sovereignty.  Atomicals provides a simple and powerful protocol to take back control of our digital lives forever. We have everything within reach for us to create the future we want.

The Atomicals Protocol is open source, free for anyone to use however they want. All the libraries, frameworks and services are released under MIT and GPLv3 to ensure no one has power over the tools and protocol.\
\
This is our work of passion to give to the world an option for finally bringing programmable digital objects to Bitcoin. It works today with no changes to Bitcoin, no side-chains, no separate token, no secondary layers and no middlemen, no leaders nor centralized parties.\
\
It is designed to work in harmony with the other protocols that have emerged such as [Nostr](https://nostr.com), [Ordinals](https://ordinals.com) and more. Each Protocol has it's different strengths and Atomicals Digital Objects adds to the landscape of options available for users, creators and developers.\
\
Atomicals is a shift to sovereignty and self-ownership over our digital lives. A simple and extremely powerful protocol to re-decentralize the web and social communities.

## Key Differences From Other Protocols

The best way to understand the differences of Atomicals is to compare it against other popular non-fungible token (NFT) protocols.

|                       | Atomicals                                                                                                                                                                                                                                    | Ordinals                                                                                                                                                                                                                                                            | Ethereum ERC721                                                        |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| **Value Proposition** | Digital Objects                                                                                                                                                                                                                              | Digital Artifacts                                                                                                                                                                                                                                                   | Digital Collectibles                                                   |
| **Blockchains**       | Bitcoin and all UTXO blockchains                                                                                                                                                                                                             | Bitcoin and all UTXO blockchains                                                                                                                                                                                                                                    | Ethereum EVM compatible blockchains                                    |
| **Mint Technique**    | Bitcoin: Commit & reveal w/ "_atom_" envelope.                                                                                                                                                                                               | Bitcoin: Commit & reveal w/ "_ord_" envelope.                                                                                                                                                                                                                       | Fund and deploy contract account                                       |
| **Data Storage**      | <mark style="color:green;">Store</mark> <mark style="color:green;"></mark>_<mark style="color:green;">one or multiple</mark>_ <mark style="color:green;"></mark><mark style="color:green;">files upon minting</mark>                         | Store only one file upon minting                                                                                                                                                                                                                                    | _Not defined_                                                          |
| **Dynamic State**     | <mark style="color:green;">Define</mark> <mark style="color:green;"></mark>_<mark style="color:green;">and update app state</mark>_ <mark style="color:green;"></mark><mark style="color:green;">for basic and any complex file types</mark> | _Not defined_ - can be defined on app specific basis                                                                                                                                                                                                                | _Not defined -_ can be programmed up front                             |
| **Validation**        | <mark style="color:blue;">Validation currently through the indexing service "electrumx" - in theory it's possible to validate 100% client-side.</mark>                                                                                       | <mark style="color:blue;">Validation currently through the indexing service "ord" - in theory it's possible to validate 100% client-side.</mark>                                                                                                                    | Trusts Ethereum  EVM nodes or in practice trust Metamask or Infura     |
| **Indexing**          | <mark style="color:blue;">Validation relies on elecrumx atomicals</mark> <mark style="color:blue;">indexer (Python) at the moment for tracking ordinal numbering system.</mark>                                                              | <mark style="color:blue;">Validation relies on</mark> <mark style="color:blue;"></mark>_<mark style="color:blue;">ord</mark>_ <mark style="color:blue;"></mark><mark style="color:blue;">indexer (Rust) at the moment for tracking ordinal numbering system.</mark> | Uses native Ethereum EVM nodes or in practice trust Metamask or Infura |
| **Address Format**    | <mark style="color:green;">P2TR (Taproot) addresses required for mint and updates.</mark>                                                                                                                                                    | P2TR (Taproot) addresses are required for all uses such as mint and transfers                                                                                                                                                                                       | Uses native Ethereum Account address.                                  |
| **Collections**       | <mark style="color:green;">First-class "Container" NFT for updating collections, sealable permanently.</mark>                                                                                                                                | Not defined but is in progress with parent-child relationships                                                                                                                                                                                                      | Defined as separate ERC                                                |
| **Atomics Swaps**     | <mark style="color:green;">Partially Signed Bitcoin Transactions (PBSTs)</mark>                                                                                                                                                              | <mark style="color:green;">Partially Signed Bitcoin Transactions (PBSTs)</mark>                                                                                                                                                                                     | Defined as separate ERC                                                |
| **Fungible Tokens**   | <mark style="color:green;">First-class "ARC20" using Satoshis as unit of account. Decentralized and direct minting modes available. Built-in ticker name service</mark>                                                                      | Not provided in base protocol. "BRC20" creates a JSON protocol in an Inscription to define the decentralized mint rules and ticker name.                                                                                                                            | Defined as ERC20 type tokens                                           |
| **Name Service**      | <mark style="color:green;">Realms are first-class NFTs that represent domain names and digital identities. A new naming standard with no domain suffix, starts with plus "+" sign like +username</mark>                                      | Not provided in base protocol. ".names" and ".sats" protocols exist as JSON protocol in an Inscription to define the claim and update rules.                                                                                                                        | Existing services such as ENS and Unstoppable Domains                  |

## Atomical Numbers, IDs, REFs

An Atomical Number is a sequential numbering scheme starting from 0. The numbering scheme is used to give a global order of the Atomicals that were minted. The Atomicals numbering scheme provides a simple way to refer to individual Atomicals with a short number that complements the Atomical ID. 

Atomicals have the Atomical ID which is a unique identifier based on the hash and output of the transaction it was minted in such as _**\<txid>**_**i**_**\<index>**_ (Example: _a14e65573ff32b95b91a0ed8367feec64125e5f4ff44d9901002b262da959e6di0_). In contrast, the Atomical number is the sequential ordering of every Atomical that was minted, in the order they appear in the blockchain.

An Atomical Reference ("REF" for short) is an alternative encoding of the Atomical ID using Crockford-base32 to provide a richer character set to make it more useful for vanity identifiers. (See section on 'Bitwork')

## Get Started and Create Your First Atomical Digital Object

[Download and install the Atomicals Javascript CLI tool](https://github.com/atomicals/atomicals-js) and mint your first Atomical in less than 2 minutes.





<details>

<summary>⚡ Get started and mint your first Atomical Digital Object</summary>

[Download and install the Atomicals Javascript CLI tool](https://github.com/atomicals/atomicals-js) and follow the quick start instructions to mint your NFT, Collection, or Realm name in less than 2 minutes.

</details>









