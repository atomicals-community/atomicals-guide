---
description: Detailed Documentation of Atomicals Protocol
---

# Specification

{% hint style="success" %}
The heart of Atomicals Protocol is a **few simple rules** to follow for mint, transfer, update, delete and extract operations. After getting acquainted with the theory, jump to [minting your first Atomical Digital Object](javascript-library-cli.md) in a few minutes
{% endhint %}

## ⚠️Warning: The specification is defined in code. Review the commands in the [atomicals-js CLI](https://github.com/atomicals/atomicals-js/tree/master/lib/commands) to see how they function accurately.

## Envelope

All methods follows a "commit and reveal" scheme leveraging Taproot (P2TR) spend path scripts. In the witness script for an input, we put the Atomicals envelope which will contain the various operations that can be legally performed on an Atomical.

The convention is to use an `OP_FALSE OP_IF ... OP_ENDIF` to place arbitrary non-executable content in a witness spend script. We use the bytes of "_atom_" (`61746F6D` in hex) to indicate this envelope belongs to the Atomicals Protocol.

```
OP_FALSE
OP_IF
 0x0461746F6D // Push "atom" 4 bytes
 <Operation>  // Followed by a single push to denote the operation type
 <Payload>    // Payload (CBOR encoded) for the operation
OP_ENDIF
```

The envelope can appear anywhere in the spend script, but it is recommended to put it after a pay-to-pubkey-hash (p2pkh), which would actually be:

```
<pubkey-hash>
OP_CHECKSIG     // Perform a check signature against the pubkey-hash
OP_FALSE
OP_IF
 0x0461746F6D // Push "atom" 4 bytes
 <Operation>  // Followed by a single push to denote the operation type
 <Payload>    // Payload (CBOR encoded) for the operation
OP_ENDIF
```

The format of the `<Operation>` field is a single push data representing the type of operation that follows. The `<Payload>` data is interpreted in the context of the operation type. The `<Payload>` is a [CBOR](https://cbor.io/) encoded data structure and can be decoded in a variety of programming languages. CBOR provides a concise and expressive way to encode data and greatly simplifies parsing Atomicals protocol operations since there are only push datas that contain the necessary information for all the files and their metadata. &#x20;



## **Payload Format Description**

The payload format is intuitive and simple: Each top-level field is a file (or field) name and below it can be any valid JSON-like structure. In the case that there is a `"ct"` (content-type) field in the payload, then it is interpreted to be a file of that type with the bytes located at `"d"`

The payload is [CBOR encoded](https://cbor.io/) and can be of any size in a single push data up to 520 bytes. If the payload is larger, then include subsequent push datas of size 520. It is understood that parsers will concatenate all chunks together and then perform a CBOR decode to obtain the data structure.

If any point the payload is not CBOR encoded compliant, then it is assumed there is no data associated the NFT. The absence of a Payload field is valid, but also merely indicates there is no data. Some digital objects may not have explicit payload data as part of their mint event.

A final note is that any field with a sub-key `"ct"` (content-type) is assumed to be a file if and only if the `"d"` bytes are also provided. If they are not provided, then the field is treated as a non-file metadata field.

### Sample Payload Format

```
  {
    "someimage.png": "binary data",
    "meta": {
      "some": "value",
      "another: {
        "fieldabc": 123
      }
    },
    "args": {
      "r": "abc"
    }
  }
```
