---
description: >-
  Store files and data immutably for the scenarios when it's not needed to
  create a dynamic Atomical Digital Object
---

# Permanent File Storage

## Example: Storing Immutable Image File on Chain

Using the command line utility, execute the following command to set the data for a sample image file. Use the `store-file` command line (`dat` operation on chain) to specify the path to the file and the _on-chain filename ("image.png" is the desired target name in the example below)_

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

Now that the file is on chain, use the [recursion and references URN](recursion-and-references.md) syntax to refer to the file.
