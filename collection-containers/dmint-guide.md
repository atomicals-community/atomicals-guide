---
description: Atomicals NFT Container DMint Tutorial
---

# DMINT Guide

> The following DMINT Guide is courtesy and written by the [wizz.cash](https://wizz.cash) team. [Original link.](https://astrox.notion.site/Atomicals-NFT-Container-DMint-Tutorial-1bd9216f051942458b3a83268a68fb0c)



<figure><img src="../assets/Transfers of Fungible Tokens (ARC20) (16).jpg" alt=""><figcaption></figcaption></figure>

## Terms

| Mint      | The process of creating content on a blockchain. It typically involves generating and recording new items on the blockchain. |
|-----------|------------------------------------------------------------------------------------------------------------------------------|
| DMINT     | "Decentralized Mint", indicating a decentralized minting operation.                                                          |
| Container | A collection or a set of items.                                                                                              |
| Bitwork   | The difficulty of minting. The rules for bitwork can be found in the [Bitwork Mining](../bitwork-mining.md).                 |
| Timestamp | A continuous 10 or 13-digit number used to represent time.                                                                   |

## Overview

This tutorial is designed to help project owners quickly understand how to onboard their DMINT NFT collection onto the Atomicals protocol. In the Atomicals protocol, NFT collections are d to as 'containers', which is roughly equivalent to 'NFT collection.'

The process can be broadly divided into four main blocks:

1. Prepare all data for the collection.
2. Configure the container.
3. Validate the NFT item.
4. Mint the NFT item.

As a project owner, your focus should be on steps 1, 2, and 3.

> 💰 Before each step, there is a ⛓️ icon indicating that the operation is on-chain, requiring gas consumption.

#### **Prepare Collection Data**

1. Gather data for all NFTs (A1, A2......AN).
2. Prepare the DMINT data for the collection (B).
3. Collect other metadata for the collection (C).
4. Use the command-line tool to locally create a new wallet for isolating all container operations and avoiding confusion.

#### **Configure Container**

1. ⛓️ Mint the container.
2. ⛓️ Use the collection data (B) to configure DMINT.
3. ⛓️ Configure other metadata (C).
4. ⛓️ Seal the container after confirming all information. **(Final step! Final step!)**

#### **Validate NFT Item**

1. With existing item data and the container already on-chain with configured DMINT, independently use NFT data (A) to validate whether the item matches the container.
2. The container is sealed; you can retrieve the mint status of individual items and the list of items already minted.

#### **Mint NFT Item**

1. ⛓️ Download NFT data (A) and locally mint using the official command-line tool.

> 📌 For your convenience in distinguishing between different files, we have marked them with uppercase English labels. Please pay attention to the corresponding files at each step. Using incorrect files may result in unexpected on-chain data.

From the outlined steps above, it is evident that project owners do not need to upload each NFT individually to the blockchain. Users are responsible for verifying and bearing the gas costs during the Mint process.

***

## **Operation Process**

The following operations are based on version 0.1.46 of the atomicals-js command-line tool ([@aa34095c](https://github.com/atomicals/atomicals-js/commit/aa34095c673de28166105e26ab2e898179e8039a)). The tool version may be updated periodically, so before proceeding, please check whether your local CLI is the latest or an available version. For installation and configuration, please refer to: [https://github.com/atomicals/atomicals-js#install](https://github.com/atomicals/atomicals-js#install). If you have any questions about a specific command, use **`-h`** when entering the command to get help content.

> 💡 To avoid errors and unexpected discrepancies during the operation, it is recommended to test the entire process on the testnet before any actions on the mainnet.

> ❗ Each step that includes content with \`#container-name\` represents the container name, and it must start with \`#\`. Otherwise, some commands may identify it as a different type of Atomicals.

> 💰 For each command in the steps with \`--satsbyte\`, please fill in the value based on the on-chain gas situation.

***

### **Prepare Collection Data**

1. Prepare a folder containing all the original NFT files (images). It is recommended to pre-change the file names (e.g., "number.png" to "1234.png") to reduce the possibility and complexity of later data modifications. File names only support digits, English, and hyphens (`-`), and cannot start with a hyphen. The maximum length is 64 characters.
2. Run a command to generate processed data for all NFTs. After completion, a new folder will be generated.

    ```
    $ yarn cli prepare-dmint-items "path/to/collection-folder" "path/to/output-folder"
    ```

3. The generated folder is named "output-folder" with a timestamp, containing individual item-\*.json files for each NFT. Please note that the data generated at this point only includes the `mainHash` and `data` fields. If necessary, you can specify `bitworkc`/`bitworkr` in the `args`, and after modification, users will be required to use the declared bitwork during minting.

    ```json
    {
      "mainHash": "0099ad5961eff12096b851d9701bedfe09ec3433dad89857bcaddc5ea2172c98",
      "data": {
        "args": {
          "request_dmitem": "test-1",
          "main": "image.jpg",
          "i": true
        },
        "image.jpg": {
          "$b": "ffd8ffe000104a4649460001010100600060000ffd9"
        }
      }
    }
    ```

4. Run the following command to generate DMINT data. Replace `path/to/folder` with the path to the folder generated in step 2, and `mintHeight` with the starting block height for minting (a suggested value is `0`, meaning minting can occur immediately after deployment). After completion, a new "dmint-timestamp.json" file will be added to the folder, and all processed data for NFTs will be updated.
    
    ```
    yarn cli prepare-dmint "path/to/folder" 0 "b1d0"
    ```
    
    ```json
    {
      "dmint": {
        "v": "1",
        "mint_height": 0,
        "merkle": "5c529dacfb37fc24804c550abc851602a9926016a424390387eb23e38de4cca1",
        "immutable": true,
        "items": 10,
        "rules": [
          {
            "p": ".*",
            "bitworkc": "7baf"
          }
        ]
      }
    }
    ```

    From here, `mint_height` can be modified to specify which block your DMINT should start.
    For example: `840000` means the DMINT of the container can only start after the `840000` height block has been confirmed.
    
    ```json
    {
      "mainHash": "0099ad5961eff12096b851d9701bedfe09ec3433dad89857bcaddc5ea2172c98",
      "data": {
        "args": {
          "request_dmitem": "test-1",
          "main": "image.jpg",
          "i": true,
          "proof": [
            {
              "p": true,
              "d": "3212c74b3b5083433a8111f80369d8c591711c577e45dacb8ccaf7960d96790f"
            }
          ]
        },
        "image.jpg": {
          "$b": "ffd8ffe000104a4649460001010100600060000ffd9"
        }
      },
      "targetVector": "test-1:any:any:image.jpg:0099ad5961eff12096b851d9701bedfe09ec3433dad89857bcaddc5ea2172c97",
      "targethash": "0099ad5961eff12096b851d9701bedfe09ec3433dad89857bcaddc5ea2172c98"
    }
    ```
    
    > ❗ Each time you run **`prepare-dmint`** a new **`dmint-timestamp.json`** file will be generated, instead of modifying the old one. Please be cautious not to use incorrect data for subsequent operations.

5. You can modify the bitwork rules for dmint. In the `rules`, `p` represents the Pattern, allowing you to use regular expressions to specify different `bitworkc`. Please refer to available resources on regular expressions for rule composition. In the example below, for instance:

   ```json
   {
     "dmint": {
       "v": "1",
       "mint_height": 0,
       "merkle": "5c529dacfb37fc24804c550abc851602a9926016a424390387eb23e38de4cca1",
       "immutable": true,
       "items": 10,
       "rules": [
         {
           "p": "1$",
           "bitworkc": "890a"
         },
         {
           "p": ".*",
           "bitworkc": "7baf"
         }
       ]
     }
   }
   ```

[See Rules Guide for more details](../rules-subrealms-and-dmint.md)

<mark style="color:red;">**Warning:**</mark>** The regex standard being used is the one in Python 3.9. This means that all regex patterns are matched in "full string mode" - meaning that the match is always from the very beginning of a string to the very end even in the absence of `^` or `$`**

In that case, the rule **`1$`** signifies that the `bitworkc` for items ending with `1` (e.g., `test1`) should be `890a`, while other items (e.g., `test`) should have `7baf` as their `bitworkc`. Rules are ordered from the most specific (minimum subset) to the most general (full set).

> ❗ If you have individually set `bitworkc`/`bitworkr` for an item, you need to manually declare the corresponding pattern and rule in the \`rules\`. Otherwise, there will be conflicts between them and the base rules, making minting impossible after formal closure and deployment. The tool does not provide any prompts for this, so exercise caution when making modifications.

6. If you modify item data, ensure that you re-run the command from step 4 each time after making changes to regenerate the data.
7. Copy a metadata **`dmint-metadata.json`** from **`template/containers/dmint-collection-general-dmint-metadata.json`** in the tool directory or [https://github.com/atomicals/atomicals-js/blob/master/templates/containers/dmint-collection-general-metadata.json](https://github.com/atomicals/atomicals-js/blob/master/templates/containers/dmint-collection-general-metadata.json), and adjust it according to your content.

> ❗ You can refer to the [Collection Containers](README.md#collection-format-recommended) to write this section, but please do not declare \`attrs\` and \`items\` as they are incorrect content for DMINT and will lead to the inability to seal the container.

***

### Configure Container

1. ⛓️ Mint the specified container. If you want to specify a different receiving address, replace "yourWalletAddress" with the corresponding wallet address.

```
$ yarn cli mint-container "#container-name" --initialowner "yourWalletAddress" --satsoutput=1000 --bitworkc="b6cf" --satsbyte=1
```

2. ⛓️ Enable the dmint status for the container using the previously generated "dmint-timestamp.json." Replace "dmint-json-path.json" with the file path of data B \[generated in step 2 - Prepare Collection Data].

> ❗ You need to wait for 4 block confirmations (turning into verified status) after completing “Configure Container - Step 1”. You can check the container status at https://wizz.cash/live-mint by entering the revealTxid.

```
$ yarn cli enable-dmint "#container-name" "dmint-json-path.json" --satsbyte=1
```

3. ⛓️ Upload the resources for the container cover by renaming the file to "logo.png" (preferably in PNG, JPG, or SVG format), then run the following command.

```
$ yarn run cli store-file "path/of/your_logo.png" "logo.png" --satsbyte=1

......
filesData {
  'logo.png': <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 18 00 00 00 18 08 06 00 00 00 e0 77 3d f8 00 00 00 9d 49 44 41 54 78 da 63 60 18 05 54 04 ff ... 164 more bytes>
}
Payload CBOR Size (bytes):  235
Payload Encoded:  {
  'logo.png': <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 18 00 00 00 18 08 06 00 00 00 e0 77 3d f8 00 00 00 9d 49 44 41 54 78 da 63 60 18 05 54 04 ff ... 164 more bytes>
}

...
Success sent tx:  f26bbf1833d6af0ca533cfdd7401f8074375490120164e6d0a680aca4bacf7af
{
  "success": true,
  "data": {
    "commitTxid": "c931d7a337eef91f5f6f2b3430c78aaac0e7f11752e15576a1a4881b344457c5",
    "revealTxid": "f26bbf1833d6af0ca533cfddbbb1f8074375490120164e6d0a680aca4bacf7af",
    "dataId": "f26bbf1833d6af0ca533cfdd7401f8074375490120164e6d0a680aca4bacf7afi0"
  }
}
✨  Done in 81.41s.
```

After completion, concatenate the filename and the output `dataId` as: **`atom:btc:dat:{dataId}/logo.png`**. Fill in the image field in the metadata file C \[generated in step 7 of Prepare Collection Data] with this value.

```
{
  "name": "container-name",
  "desc": "A test container."
  "image": "atom:btc:dat:1a29d1ed20c36a95f6b5c20977a5f1035cc0cd5f55327692149a5710d1d75e9bi0/logo.png",
  ...
}
```

4. ⛓️ After modifying metadata C, set it for the container.

```
$ yarn cli set-container-data "#container-name" "path/to/container-dmint-metadata.json" --satsbyte=1
```

5. Execute the command to seal the container.

> ❗ This operation is \*\*IRREVERSIBLE\*\*! Before closing, please complete the item validation in \[Validate NFT Item]. Ensure that all items have been validated and are correct.

```
$ yarn cli seal "#container-name" --satsbyte=1
```

***

### **Validate NFT Item**

Due to the uniqueness of Merkle verification, there's no need to upload each NFT in advance. It's sufficient to verify whether they match the container. In different states or lifecycles of the container, you can use various methods to validate the effectiveness of NFT items.

* To validate whether a specific item is effective, you need the container's name, the item's name, and the JSON file generated in step 2 of Prepare Collection Data (replace `path/to/item-3.json` with the file path of the item).

```
$ yarn cli validate-container-item "#container-name" "test-item-3" "path/to/item-3.json"
```

* The result will return the following content. If **`proof_valid`** is `true`, it means the validation is successful. If **`applicable_rule`** returns the complete rule, it indicates that the rule configuration is correct:

```
{
  "success": true,
  "response": {
    "result": {
      "status": null,
      "candidate_atomical_id": null,
      "atomical_id": null,
      "candidates": [],
      "type": "item",
      "applicable_rule": {
        "p": ".*",
        "bitworkc": "a91b"
      },
      "proof_valid": true,
      "target_vector": "test-item-3:any:any:image.jpg:3b0bcfe26b7521e83e595f5838d04ea25a45931a849ab5f0db134eb9a4a7cec2",
      "target_hash": "8d800be8cb6b418d986a99b9d2fd23994fa712f3c76ef9a3c8306298d2af2ba4",
      "dmint": {
        "v": "1",
        "rules": [
          {
            "p": ".*",
            "bitworkc": "a91b"
          }
        ],
        "merkle": "b68ace0edff5f81a92acc57e493d6d3cfa7cfc038bfe0397dfb81d082bd3b9d0",
        "immutable": true,
        "mint_height": 0
      }
    }
  }
}
```

> ❗ It is recommended to validate each item to ensure the effectiveness of all data.

### **Mint NFT Item**

After the container is released, users can mint the corresponding NFT using the command-line tool, provided they have access to the json file for the item.

```
$ yarn cli mint-item "#container-name" "item-name" "path/to/item-name.json" --satsbyte=1
```

***

## Advanced Topic: Mint Payment Rules

<mark style="color:red;">Note:</mark> The creator of a DMINT collection can choose to specify that not only is Bitwork required to mint an item, but also certain payments must be made to predetermined addresses in order to finalize the claim process. This is basically purchasing an NFT.

An example rule set with payments defined. Any item ending in "hi" must be claimed with a payment to the output script "_5120a1519da5fead1a2e6cc803aedbd79a756f5e0eaafccae641c16e0612fb03071c_" with at least 10000 satoshis and every other item claimed must have a payment of 2000 satoshis to "_5120a9519da5fead1a2e6cc803acebd79a756f5e0eaafccae641c16e0612fb03072c_"

````
```json
{
  "dmint": {
    "v": "1",
    "items": 1000,
    "rules": [
      {
        "o": {
          "5120a1519da5fead1a2e6cc803aedbd79a756f5e0eaafccae641c16e0612fb03071c": {
            "v": 10000
          }
        },
        "p": "hi$",
        "bitworkc": "888"
      },
      {
        "o": {
          "5120a9519da5fead1a2e6cc803acebd79a756f5e0eaafccae641c16e0612fb03072c": {
            "v": 2000
          }
        },
        "p": ".*",
        "bitworkc": "7777"
      }
    ],
    "merkle": "12e772dc28611968e3f203827ed9c71e0a1e25071032d565b6fb9afee94dd344",
    "immutable": true,
    "mint_height": 0
  }
}
```
````

In the event that an item minted requires payment, the status of the NFT will indicate that payment is expected for the leading candidate.

Use the **\`transfer-builder\`** command to create a custom payment. This is an advanced command and could lead to the loss of funds if used incorrectly.

From the [atomical-js CLI:](https://github.com/atomicals/atomicals-js)

```
yarn cli transfer-builder --atomicalreceipt <atomical_id_of_item_claim_attempt> --owner funding --atomicalreceipttype d --satsbyte=80
```

Then follow the instructions in the terminal to select which UTXOS to combine and send. Make sure you do not send UTXOS with other Atomicals in them. And construct the outputs in a way as to pay the rules defined in the DMINT Container. <mark style="color:red;">**When in doubt, do NOT use this command, it is risky without advanced knowledge.**</mark> Wait for 3rd party wallets and services to provide direct payment support.

## **Optional Operations**

The container is already sealed, and users can now begin minting. In the case where some items have already been minted:

### Query the status of a single item

`get-container-item`

```
$ yarn cli get-container-item "#container-name" "test-item-4"
```

### **Query Minted Items**

Use **`get-container-items`** to query minted items (**`limit`** specifies the number of entries, suggested value is **`10`**; **`offset`** indicates the starting point for the query, suggested value is **`0`**).

```
$ yarn cli get-container-items "#container-name" limit offset
```
