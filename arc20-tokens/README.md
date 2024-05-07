---
description: Fungible Token colored coin standard backed by Satoshis
---

# ARC20 Tokens

The Atomicals Protocol solves the long standing problem of how to represent arbitrary fungible token assets on the Bitcoin blockchain. The ARC-20 fungible token standard finally brings colored coins to Bitcoin and uses each Satoshi to represent ownership units of deployed tokens. This means that every unit of the token is backed by 1 Satoshi forever.  _It acts as a kind of "digital gold content" that underpins the value of the token._  It also means every token can never go below 1 Satoshi in value, by definition.

ARC-20 uses the native Satoshi unit to represent each token, and they can be split and combined just like regular Bitcoins. ARC-20 tokens can be minted by anyone, and transferred to any Bitcoin address type, and works with wallets that support UTXO selection such as Sparrow Wallet [(external link)](https://www.sparrowwallet.com/). There are two modes of deployment: direct and decentralized. Learn more below about the different ways the ARC-20 can be minted and their benefits.

The ARC-20 also comes with a built in ticker symbol service to provide a global unique name system for ticker symbols. The first registration of the ticker name is permanent and can never be used again.

## Decentralized Mint

A decentralized is initialized with a ticker, per mint award, total mints allowed, start block height, and metadata. A deployer could initialize a ticker such as `$myticker123` with a mint award of `1,000` units, with a total of `10,000` mints allowed and starting at block height `810,000` with an image.jpg and even meta data such as description, links, and terms.

### Initialize (init-dft)

The basic format of the decentralized initialization using the [Atomicals CLI ](../reference-and-tools/javascript-library-cli.md)is given as:

```
npm run cli init-dft <tick> <per_mint_amt> <mint_count> 
<start_height> metadata.json

Optional flags:
--mintbitworkc=<prefix>
--satsbyte=<number>
```

_<mark style="color:red;">**See format of metadata.json below**</mark>_

The decentralized initialize function `init-dft` allows minting for ticker `tick` to proceed with the `mint-dft` command (described below) only from the starting block height `start_height` and allowing a maximum of `mint_count` total mint requests, each to award `per_mint_amt` token units to the requester.  The effective total max supply is `per_mint_amt * mint_count`.

_Note:_ It will take 3 block confirmations before the `tick` ticker will be claimed. You can query the status with `npm run cli get <atomicalID>` or `npm run cli find-tickers`

**Required Parameters:**

_tick:_ The globally unique ticker name

_per\_mint\_amt: Number of units of the token to award per successful mint. Satoshi amount._

_mint\_count:_ Total number of permitted mints before exhausting the quota and becoming "fully minted"

_start\_height:_ Starting block height that mints may be begin. Can set block height to 0 or any future block height.

_image:_ An image icon to represent the token. The name of the file will appear in the token. Use caution and rename the file first completely and include it as "image.jpg" or "image.png"

**Optional Flags:**

_--mintbitworkc=\<prefix>_

Define an optional [Bitwork](../bitwork-mining.md) mining prefix target for the mints. If set, then the minters must expend CPU energy to find a match for the prefix target to be allowed to mint successfully.  This forces minters to perform proof of working mining in a similar manner to Bitcoin mining itself.

It is recommended to choose a prefix between 4 and 6 hex digits. You can use any valid hex digits between `a-f0-9.` It is intended to purely be a vanity transaction id and any value is sufficient to require minters to expend energy to mint the token.

Example time estimates for time required for minters:

_Note:_ it could be any digit in the range `a-f0-9`, we use all `7's` for illustration purpose only.

* 3 hex digit prefix of "777" will take about 4 seconds to mine
* 4 hex digit prefix of "7777" will take \~1 minute to mine
* 5 hex digit prefix of "77777" will take \~16 minutes to mine
* 6 hex digit prefix of "777777" will take \~256 minutes to mine

_--satsbyte=\<number>_

Set the satoshis per byte for the transaction and override the default.

### Mint (mint-dft)

The basic format of the decentralized mint using the [Atomicals CLI ](../reference-and-tools/javascript-library-cli.md)is given as:

```
npm run cli mint-dft <tick>

Optional flags:
--satsbyte=<number>
```

The decentralized mint function `mint-dft` allows minting for ticker `tick` to proceed starting from block height `start_height`.

Follow the on-screen instructions to mint.

**Required Parameters:**

_tick:_ The globally unique ticker name

**Optional Flags:**

_--satsbyte=\<number>_

Set the satoshis per byte for the transaction and override the default.

## Direct Mint

The second way to mint or create an ARC-20 token type is to directly create a single output which contains the total supply, with each Satoshi representing a single unit of the token.

### Mint entire supply in one step

```
npm run cli mint-ft <tick> <total_supply> metadata.json

Optional flags:
--satsbyte=<number>
```

_<mark style="color:red;">**See format of metadata.json below**</mark>_

The second way to mint or create an ARC-20 token type is to directly create a single output which contains the total supply, with each Satoshi representing a single unit of the token.

For example, to mint a token with a supply of 100,000,000, simply create a single output with exactly 1 full Bitcoin (since 1 BTC = 100,000,000 Satoshis). An advantage of using the direct minting mode is that the team who creates it must put up the required amount of Bitcoins to substantiate the total minted supply; which greatly reduces dishonest actors from printing tokens out of thin air.

Direct minting of ARC-20 is ideal for when a team or company wishes to maintain control over the initial distribution and determine how to spend the tokens at a later point in time.

_Note:_ It will take 3 block confirmations before the `tick` ticker will be claimed. You can query the status with `npm run cli get <atomicalID>` or `npm run cli find-tickers`

**Required Parameters:**

_tick:_ The globally unique ticker name

_total\_supply:_ Total supply units to directly mint

_image:_ An image icon to represent the token. The name of the file will appear in the token. Use caution and rename the file first completely and include it as "image.jpg" or "image.png"

**Optional Flags:**

_--satsbyte=\<number>_

Set the satoshis per byte for the transaction and override the default.

## Metadata.json Format

**Define metadata details into the token.** The suggested format to use follows the convention `sample-ft-meta.json.`

Use [Permanent File Storage](../permanent-file-storage.md) to store an image on-chain and reference it in the "image" field below.

````
```json
{
    "name": "",
    "desc": "",
    "image": "atom:btc:dat:<location of store-file data>/image.png",
    "decimals": 0,
    "links": {
        "x": {
            "v": "https://x.com/..."
        },
        "website": {
            "v": "https://..."
        },
        "realm": {
            "v": "atom:btc:realm:myrealmname.subrealm"
        },
        "discord": {
            "v": "https://discord.gg/..."
        }
    },
    "legal": {
        "terms": ""
    }
}
```
````

None of the fields in the metadata are required, and can take any shape and form as long as it is valid JSON object. However it is recommended at a minimum _name, description, and legal_ are provided to inform users of usage details. You must consult legal advice and verify your applicable jurisdictions permit your intended usage.

<details>

<summary>⚡ Get started and mint your first Atomical Digital Object</summary>

[Download and install the Atomicals Javascript CLI tool](https://github.com/atomicals/atomicals-js) and follow the quick start instructions to mint your NFT, Collection, or Realm name in less than 2 minutes.

</details>
