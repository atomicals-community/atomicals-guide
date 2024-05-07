---
description: >-
  Send and receive crypto with human readable payment names powered by the
  Atomicals Realms Protocol.
---

# Payname Format

### Format Convention

<pre><code>+[inbox]@[realm_name]

Where:
+ is always required at the front to denote it is a Realm user recipient

inbox: The name of the inbox associated with the Realm payment name

<strong>@ is required to indicate the inbox is located at the Realm
</strong><strong>
</strong>realm_name: The fully qualified Realm or Subrealm name
</code></pre>

**Examples**

```
+hello@samplerealm
+main@samplerealm
+support@samplerealm
```

Note: The _inbox_ can be data representing the cryptocurrencies or payment methods accepted there, it can also be configured to delegate to another NFT to handle the data updates.

## On-Chain Data Object Format

To see how to store the data for a Realm, consider the following format layout for a Realm/NFT.

```
{
  "paynames": {
    "delegate": "atom:btc:id:<atomical_id>/paynames",
    "hello": {
      "delegate": "atom:btc:id:<atomical_id>/paynames/hello"
    },
    "main": {
      "types": {
         "btc": {
           "value": "bitcoin btc address"
         },
         "ltc": {
           "value": "litecoin ltc address",
           "notes": "optional notes",
           "instructions": "optional instructions"
         }
      }
    }
  }
}
```

### Fields

**paynames**: The top level field that will store the paynames settings and configuration data for the Realm, which can contain additional keys which will identify the inboxes. Only characters /a-z0-9\\./ should be considered valid. Maximum 64 character names.

**types:** The tickers for the various cryptocurrencies and payment types accepted

**delegate:** It is possible to delegate the entire pay names available for a Realm to an NFT, and it is also possible to delegate an individual inbox.  When _delegate_ is set at the top directly underneath _paynames_ field, then it takes precedence and the rest of the data is ignored (since the entire paynames settings are delegated elsewhere)



