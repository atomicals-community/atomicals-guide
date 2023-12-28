---
description: >-
  Create hierarchies and includes of Atomicals digital objects with recursion
  and references
---

# Recursion and References

The following URNs are defined to simplify including and referencing different Atomicals resources.

NOTE: When referring to references in an Atomical, it is recommended to. use the `ctx` top level field in the data to import or include references to other Atomicals and data files. The `ctx` top level is reserved specially for this reason.

Examples of Recursion with References in the `ctx` field:

```
{
  // Any Atomical data above...
  "ctx": {
     // Implied to always get the latest data for an atomical:
     "resourcename": "atom:btc:id:<atomical_id>/mydata",
     // Gets permanent data file image.png at the dat_id
     "icon": "atom:btc:dat:<dat_id>/image.png",
     // Gets the minted "name" property for a collection
     "collection-name": "atom:btc:container:<dat_id>$name",
     // Gets the latest version of import.js located at a realm name
     "assetbuilder.js": "atom:btc:realm:<realm_name>/import.js",
  },
  // Another other Atomical data ...
}
```

**Note:** It is preferably to use the "dat" command to refer to on-chain assets where applicable. When using containers, realms or the dynamic references (using slash "/") it is possible the resource. &#x20;

## Conventions

The convention is to use the prefix "atom:btc" to indicate the Atomicals Protocol on the Bitcoin (BTC) network. It is possible to reference digital objects by atomical\_id, container name, or (sub)realms and immutable file data by the data\_id.

The basic form of the Atomicals Universal Resource Name (URN) is:

**atom:\<chain>:\<ref\_type>:\<identifier>\[$ or /\[\<file>]]**

Where:

**chain:** The referenced blockchain, set to "BTC" for Bitcoin

**ref\_type:** The type of reference. Currently supported "**id", "container", "realm", and "dat"**

**identifier**: The identifier corresponding to the ref\_type. Such as atomical\_id, container name, realm name, or the reveal location of the immutable data in the case of "_dat"_

**$ or /:** Whether to refer to the mint (original) data (using dollar sign $) or the dynamic (latest) data (using slash /) of a file for an Atomical. You will notice that for the `dat` ref\_type either  $ or / is acceptable and will return the same data regardless.

**file:** The name of the file is optional, if omitted then general information about the resource is returned

The philosophy is that we should be able to unambiguously reference Atomicals digital objects based on their types. At the base level every type such as container and realm can also be referenced by the atomical\_id. Furthermore, we should always be able to get the original mint data, and also get the latest version of files stored, including every revision of that file either by txid, version number, or block height.

## References by Atomical ID

**Get general information**&#x20;

atom:btc:id:\<atomical\_id>

Ex: atom:btc:id:14a0d7c98304bf5ac9a5addceb1de0ce4e840641f82d71d84cebbdac427c1fc3i0

**Get original minted data as JSON**

atom:btc:id:\<atomical\_id>$

**Get original minted file**

atom:btc:id:\<atomical\_id>$links

atom:btc:id:\<atomical\_id>$info.pdf

**Get latest dynamic data state**

atom:btc:id:\<atomical\_id>/

**Get latest version of a file**

atom:btc:id:\<atomical\_id>/image.png&#x20;

**Get specific version of a file**

atom:btc:id:\<atomical\_id>/image.png@\[txid or version number or blockheight]

The \[txid or version number or blockheight] can be of the form:

* hexadecimal of the txid that was one of the valid updates to the file
* Version number starting with "v" such as "v1"
* Block height for the state of the file as of that block height

## References by Container Name

**Get general information**&#x20;

atom:btc:container:\<containerName>

Examples: \
atom:btc:id:my-coolcontainer-name

**Get original minted data**&#x20;

atom:btc:container:\<containerName>$

**Get latest dynamic data state**

atom:btc:container:\<containerName>/

**Get original minted file**

atom:btc:container:\<containerName>$image.jpg

**Get latest version of a file**

atom:btc:container:\<containerName>/items

**Get specific version of a file**

atom:btc:container:\<containerName>/items@\[txid or version number]

## References by Realms

**Get general information**&#x20;

atom:btc:realm:\<realmName>

Where realmName can be a Top Realm or any Sub Realm

Examples: \
atom:btc:realm:myrealm\
atom:btc:realm:myrealm.somesubrealm\
atom:btc:realm:myrealm.somesubrealm.thirdlevel-subrealm

**Get latest version of a file**

atom:btc:realm:\<realmName>/profile

**Get specific version of a file**

atom:btc:realm:\<realmName>/profile@\[txid or version number]

The \[txid or version number or blockheight] can be of the form:

* hexadecimal of the txid that was one of the valid updates to the file
* Version number starting with "v" such as "v1"
* Block height for the state of the file as of that block height

## References by ARC20 (Fungible Tokens)

**Get general information**&#x20;

atom:btc:arc:\<ticker>

Where ticker can be a ticker name of an ARC20 token

**Get mint original data**

atom:btc:arc:\<ticker>$

atom:btc:arc:\<ticker>/icon.png

**Get event feed at ticker**&#x20;

atom:btc:arc:\<ticker>/events (To be determined - TBD)

## References to Immutable Data

To store immutable (non digital object data) use the "dat" command (store-file) and reference it using the _dat_ URN of the form:

atom:btc:dat:\<data\_id>/image.png

Notice that the `dat` immutable data storage can use either the $ or the / since there is only one version of the immutable data and both will return the same data.



