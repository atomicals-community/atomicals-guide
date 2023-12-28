---
description: Atomicals Digital Objects or "atoms" for short.
---

# NFTs

## What are Atomicals Digital Objects?

An Atomical digital object (or simply "_Atomical_") is a new kind of Non-Fungible Token (NFT) that can be minted, transferred, and updated on Bitcoin. _The major difference is there is no requirement to use a centralized service or middleman acting as a trusted indexer._ It just works today and without needing changes whatsoever to Bitcoin nor requiring side-chains or any secondary layers. **It is time to take back control of our digital lives - forever.**

Atomicals are _self-evident_ and easy to verify which makes them perfect for digital collectibles, social media, gaming, authentication and anywhere ownership and authenticity is critical to establish. The protocol rules are extremely simple, yet at the same time provides military grade security and verification levels. Zero room for error.

The Atomicals Protocol is free, open-source and will forever be available to use by anyone anywhere. Our digital future depends on a robust digital object format to elegantly handle every possible use case while minimizing any potential for errors in software implementations.

## How Atomicals Digital Objects Are Created

An Atomical is minted using a 2-step commit and reveal scheme using Taproot (P2TR) spend scripts using the Atomicals Envelope and the minting operation denoted by the letter "m". A transaction output commits to the data or file being commuted and then the data is included in a spend script to reveal the content which could one or more files with any content type such as images, text or any media.

[Mint your first Atomical using the command line interface](https://github.com/atomicals/atomicals-js) with nothing more than your existing Bitcoin wallet.

Once created the Atomical is stored on the blockchain forever immutably and may be transferred using any address type to any new owner according to the familiar rules of Bitcoin.

## How Atomicals Digital Objects Are Updated

In addition to immutable content and files, Atomicals digital objects supports the ability to attach any number of files and state at any time after using the update operation denoted by the letter "u". Similar to the minting operation, the update follows a 2-step commit and reveal scheme to commit to an update and then a P2TR taproot spend script reveals the update contents.

Any file or content type is supported in a single update. The owner of the digital object can overwrite, or update, the content of any file. This gives Atomicals a unique capability to act as an evolving data object perfect for social media, games, and more.

Due to the nature of immutable storage, every file has the revision history stored permanently to be able to playback the state changes with fidelity.

## How Atomicals Digital Objects Are Transferred

An Atomical, once minted, is transferred like regular Bitcoins using any address format type include Taproot (P2TR), SegWit, Multisig, and legacy address (P2PKH).

No special wallet support is required, although it is highly recommended to use an Atomicals-aware wallet to help facility identifying and transferring Atomicals safely. Even though it is impossible to accidentally destroy an Atomical, it is possible to send it to an unintended recipient if the user is not careful using a wallet that does not facilitate Atomicals identification. Fortunately the implementation is the simplest possible protocol that makes it easy for wallets and services to do if correctly and avoiding errors.

There is no separate explicit "Transfer Operation" because we rely on using the native Bitcoin transfer mechanism to flow (or imprint) the identity of an Atomical from the inputs to the outputs.

Read about [NFT Transfer Rules](normal-transfer-rules.md) and[ NFT Swap Rules](swap-transfer-rules.md).

## Dynamic Digital Object State

An overview of how to update the data state of an AtomicalEvery NFT Atomical digital object has not only the immutable static files embedded upon minting, but it also has the ability to attach any data or file throughout it's lifetime. Since Bitcoin is an immutable audit trail, every change to every field is permanently recorded and can be played back to verify the latest state was arrived at correctly.What this means is that we finally have a way to create complex interactions, games and other services that depend upon attaching data to NFTs. The Atomicals payload format is intuitive and simple: add one or more files or variables to every spend of the digital object UTXO and like magic the latest state is propagated to all nodes and served up in the indexer instantly.With one simple command users and programmers can set key-value pairs of any type of data and even larger files like PDFs and images. For example, a user can host their BTC wallet address at the path "/btc/address" and host their avatar picture at "/profile/photo" in their Atomical and update it easily.The Atomicals philsophy is "Not your digital object history, not your digital asset", which means that we "Trust, but verify" and it's easy to validate the object state is correct by playing forward the history. Don't worry, we are providing a full suite of tools and libraries to basically do all of this automatically for you on launch day.\


> ⚡ Get started and mint your first Atomical Digital Object
>
> [Download and install the Atomicals Javascript CLI tool](https://github.com/atomicals/atomicals-js) and follow the quick start instructions



<details>

<summary>⚡ Get started and mint your first Atomical Digital Object</summary>

[Download and install the Atomicals Javascript CLI tool](https://github.com/atomicals/atomicals-js) and follow the quick start instructions to mint your NFT, Collection, or Realm name in less than 2 minutes.

</details>









