---
description: Overview of Collection Containers for Tokens and Data
---

# Collection Containers

This section describes how to mint a special type of Atomical digital object called a _Container._ This data type is designed for NFT collections and more. Basically any time we want to group items together, we will use a container.

> **-> Quick Overview: What is a **_**Container**_**?**
>
> Containers are human-readable identifiers to represent collections of NFTs and metadata. A Container name begins with the hashtag  `#` sign. Container names are self-owned and self-managed directly on the Bitcoin blockchain using the Atomicals Digital Object format — add and update items in the container collection, and optionally _seal_ the container permanently to prevent future changes

**📌 To Mint Container Items with DMINT (Decentralized Mint) consult the** [**DMINT Guide**](dmint-guide.md)

## Collection Format (Recommended)

For efficiency reasons, the attributes are defined seperately from the items attributes assocations. A numeric value is used to link or connect the attributes of each item to the attribute definitions.\
See the [sample collection format](https://github.com/atomicals/atomicals-js/tree/master/templates/containers/sample-collection.json) in github.

### name (string - optional)

The _name_ field defines the display name of the collection. The collection container itself is identified with the # hashtag slug (ie: _#mycollection-name_), and _name_ is what websites can use to display a more descriptive name.

### desc (string - optional)

The _desc_ field defines the detailed description of the collection.

### legal (object - recommended)

The _legal_ section defines legal terms and licensing to make it clear how users and holders of the NFTs may use the data.

**terms (recommended):** Any specific terms of the collection usage or items usage.

**license (recommended):** Any type of license code.

```
"legal": {
    "terms": "...",
    "license": "CC",
}
```

### links (optional)

The _links_ section defines additional external resources of interest such as website and social media links.

```
{
    "links": {
        "x": {
            "v": "https://x.com/username"
        },
        "website": {
            "v": "https://coolwebsite.com"
        },
        "discord": {
            "v": "https://discord.gg/..."
        }
    }
}
```

### attrs (object - optional)

The _attrs_ section defines the types of attributes, their details such as name, description and possible ranges of values.

### items (object - required)

The items section connects all of the NFTs to the container using a map of key to items. It is recommended to use a string of the key of items, even when using a numbering scheme.

**id (required):** stands for "id" of an item and corresponds to the atomical ID of an NFT

**a (required):** stands for "attributes" of an item. It is required to be in the form of an array with each element in the array representing the associated value in the attributes definition section _attr_

**n (optional):** stands for "name" of an item

<pre><code><strong>```json
</strong>{
  "name": "Collection Name",
  "desc": "Collection description",
  "image": "atom:btc:dat:&#x3C;location of store-file data>/image.png",
  "legal": {
    "terms": "...",
    "license": "CC"
  },
  "links": {
        "x": {
            "v": "https://x.com/..."
        },
        "website": {
            "v": "https://..."
        },
        "discord": {
            "v": "https://discord.gg/..."
        }
  },
  "attrs": [
    {
      "name": "bodyarmor",
      "desc": "Type of body armor",
      "type": "string",
      "values": [
        "metal",
        "leather",
        "field"
      ]
    },
    {
      "name": "headcovering",
      "desc": "The type of head covering",
      "type": "string",
      "values": [
        "bandana",
        "helmet",
        "scarf",
        "baseball cap"
      ]
    },
    {
      "name": "stamina",
      "desc": "The stamina of the hero",
      "type": "integer",
      "min": 0,
      "max": 10
    }
  ],
  "items": {
    "0": {
      "id": "84718b469c40b1bcc7cb324b8e24e4e442f88cd913687ea2bc7b3e79d4fc4fdei0",
      "n": "Some Name",
      "a": [
        0,
        3,
        8
      ]
    },
    "1": {
      "id": "1070d7c98304bf5ac9a5addceb13e0ce4e840641f82d71d84cebbdac427c1f4fi0",
      "n": "Another Name",
      "a": [
        1,
        2,
        10
      ]
    },
    "Signature Series 1": {
      "id": "14a0d7c98304bf5ac9a5addceb1de0ce4e840641f82d71d84cebbdac427c1fc3i0",
      "n": "Special",
      "a": [
        2,
        3,
        7
      ]
    }
  }
}
```
</code></pre>

Execute the following commands after formatting your collection data in the format above.

```
// first store the desired main image on chain (see section below)
npm run cli store-file ./path/to/image.png image.png --satsbyte=10

Success sent tx:  db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461f
{
  "success": true,
  "data": {
    "commitTxid": "b57bad8c0b7f58a552574fafc16b6efbbb3bf966b9ccfb24f03580f9462b5997",
    "revealTxid": "db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461f",
    "dataId": "db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461fi0"
  }
}

// We will use the dataId above to reference the data on chain
// ie: atom:btc:dat:db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461fi0/image.png

// Store the collection metadata with the following command:
npm run cli set-container-data #mycollection-name collection.json --satsbyte=10
```

### Bare Minimum Recommended Collection Format

If you have a collection with no attributes and not much metadata, then the following format is the recommended minimum. Provide a _name, image and the list of items._

<pre><code><strong>```json
</strong>{
  "name": "Collection Name",
  "image": "atom:btc:dat:&#x3C;location of store-file data>/image.png",
  "items": {
    "0": {
      "id": "84718b469c40b1bcc7cb324b8e24e4e442f88cd913687ea2bc7b3e79d4fc4fdei0"
    },
    "1": {
      "id": "1070d7c98304bf5ac9a5addceb13e0ce4e840641f82d71d84cebbdac427c1f4fi0"
    },
    "9999": {
      "id": "14a0d7c98304bf5ac9a5addceb1de0ce4e840641f82d71d84cebbdac427c1fc3i0"
    }
  }
}
```
</code></pre>

Execute the following commands after formatting your collection data in the format above.

```
// first store the desired main image on chain (see section below)
npm run cli store-file ./path/to/image.png image.png --satsbyte=10

Success sent tx:  db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461f
{
  "success": true,
  "data": {
    "commitTxid": "b57bad8c0b7f58a552574fafc16b6efbbb3bf966b9ccfb24f03580f9462b5997",
    "revealTxid": "db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461f",
    "dataId": "db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461fi0"
  }
}

// We will use the dataId above to reference the data on chain
// ie: atom:btc:dat:db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461fi0/image.png

// Store the collection metadata with the following command:
npm run cli set-container-data #mycollection-name collection.json --satsbyte=10
```

## Storing Immutable Image File on Chain

[permanent-file-storage.md](../permanent-file-storage.md "mention")

Using the command line utility, execute the following command to set the data in the sample file above.

```
// immutably store an image on-chain to reference in the container metadata
npm run cli store-file ./path/to/image.png image.png --satsbyte=10

Success sent tx:  db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461f
{
  "success": true,
  "data": {
    "commitTxid": "b57bad8c0b7f58a552574fafc16b6efbbb3bf966b9ccfb24f03580f9462b5997",
    "revealTxid": "db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461f",
    "dataId": "db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461fi0"
  }
}
```

We will use the _reveal location_ (db8a761ed493627138c5733071558c4caa65912c5cba3e1061c02d6d7933461fi0) to refer to the image _image.png_ below.

## Adding NFTs to a Collection Container

Provide a file that matches the collections format above and execute the following command to update the sample #mycollection-name.

```
npm run cli set-container-data #mycollection-name sample-collection.json --satsbyte=10
```

## Querying Metadata and Items of Collection Container

After the transaction is confirmed in a block, you may query the state of the sample #mycollection-name with:

```
npm run cli state #mycollection-name
```









<details>

<summary>⚡ Get started and mint your first Atomical Digital Object</summary>

[Download and install the Atomicals Javascript CLI tool](https://github.com/atomicals/atomicals-js) and follow the quick start instructions to mint your NFT, Collection, or Realm name in less than 2 minutes.

</details>



