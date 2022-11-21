(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{695:function(e,t,o){"use strict";o.r(t);var n=o(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-016-protocol-versions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-016-protocol-versions"}},[e._v("#")]),e._v(" ADR 016: Protocol Versions")]),e._v(" "),o("h2",{attrs:{id:"todo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" TODO")]),e._v(" "),o("ul",[o("li",[e._v("How to / should we version the authenticated encryption handshake itself (ie.\nupfront protocol negotiation for the P2PVersion)")]),e._v(" "),o("li",[e._v("How to / should we version ABCI itself? Should it just be absorbed by the\nBlockVersion?")])]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("18-09-2018: Updates after working a bit on implementation\n"),o("ul",[o("li",[e._v("ABCI Handshake needs to happen independently of starting the app\nconns so we can see the result")]),e._v(" "),o("li",[e._v("Add question about ABCI protocol version")])])]),e._v(" "),o("li",[e._v("16-08-2018: Updates after discussion with SDK team\n"),o("ul",[o("li",[e._v("Remove signalling for next version from Header/ABCI")])])]),e._v(" "),o("li",[e._v("03-08-2018: Updates from discussion with Jae:\n"),o("ul",[o("li",[e._v("ProtocolVersion contains Block/AppVersion, not Current/Next")]),e._v(" "),o("li",[e._v("signal upgrades to Tendermint using EndBlock fields")]),e._v(" "),o("li",[e._v("dont restrict peer compatibilty by version to simplify syncing old nodes")])])]),e._v(" "),o("li",[e._v("28-07-2018: Updates from review\n"),o("ul",[o("li",[e._v("split into two ADRs - one for protocol, one for chains")]),e._v(" "),o("li",[e._v("include signalling for upgrades in header")])])]),e._v(" "),o("li",[e._v("16-07-2018: Initial draft - was originally joint ADR for protocol and chain\nversions")])]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("Here we focus on software-agnostic protocol versions.")]),e._v(" "),o("p",[e._v("The Software Version is covered by SemVer and described elsewhere.\nIt is not relevant to the protocol description, suffice to say that if any protocol version\nchanges, the software version changes, but not necessarily vice versa.")]),e._v(" "),o("p",[e._v("Software version should be included in NodeInfo for convenience/diagnostics.")]),e._v(" "),o("p",[e._v("We are also interested in versioning across different blockchains in a\nmeaningful way, for instance to differentiate branches of a contentious\nhard-fork. We leave that for a later ADR.")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("We need to version components of the blockchain that may be independently upgraded.\nWe need to do it in a way that is scalable and maintainable - we can't just litter\nthe code with conditionals.")]),e._v(" "),o("p",[e._v("We can consider the complete version of the protocol to contain the following sub-versions:\nBlockVersion, P2PVersion, AppVersion. These versions reflect the major sub-components\nof the software that are likely to evolve together, at different rates, and in different ways,\nas described below.")]),e._v(" "),o("p",[e._v("The BlockVersion defines the core of the blockchain data structures and\nshould change infrequently.")]),e._v(" "),o("p",[e._v("The P2PVersion defines how peers connect and communicate with eachother - it's\nnot part of the blockchain data structures, but defines the protocols used to build the\nblockchain. It may change gradually.")]),e._v(" "),o("p",[e._v("The AppVersion determines how we compute app specific information, like the\nAppHash and the Results.")]),e._v(" "),o("p",[e._v("All of these versions may change over the life of a blockchain, and we need to\nbe able to help new nodes sync up across version changes. This means we must be willing\nto connect to peers with older version.")]),e._v(" "),o("h3",{attrs:{id:"blockversion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blockversion"}},[e._v("#")]),e._v(" BlockVersion")]),e._v(" "),o("ul",[o("li",[e._v("All tendermint hashed data-structures (headers, votes, txs, responses, etc.).\n"),o("ul",[o("li",[e._v("Note the semantic meaning of a transaction may change according to the AppVersion, but the way txs are merklized into the header is part of the BlockVersion")])])]),e._v(" "),o("li",[e._v("It should be the least frequent/likely to change.\n"),o("ul",[o("li",[e._v("Tendermint should be stabilizing - it's just Atomic Broadcast.")]),e._v(" "),o("li",[e._v("We can start considering for Tendermint v2.0 in a year")])])]),e._v(" "),o("li",[e._v("It's easy to determine the version of a block from its serialized form")])]),e._v(" "),o("h3",{attrs:{id:"p2pversion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#p2pversion"}},[e._v("#")]),e._v(" P2PVersion")]),e._v(" "),o("ul",[o("li",[e._v("All p2p and reactor messaging (messages, detectable behavior)")]),e._v(" "),o("li",[e._v("Will change gradually as reactors evolve to improve performance and support new features - eg proposed new message types BatchTx in the mempool and HasBlockPart in the consensus")]),e._v(" "),o("li",[e._v("It's easy to determine the version of a peer from its first serialized message/s")]),e._v(" "),o("li",[e._v("New versions must be compatible with at least one old version to allow gradual upgrades")])]),e._v(" "),o("h3",{attrs:{id:"appversion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appversion"}},[e._v("#")]),e._v(" AppVersion")]),e._v(" "),o("ul",[o("li",[e._v("The ABCI state machine (txs, begin/endblock behavior, commit hashing)")]),e._v(" "),o("li",[e._v("Behaviour and message types will change abruptly in the course of the life of a chain")]),e._v(" "),o("li",[e._v("Need to minimize complexity of the code for supporting different AppVersions at different heights")]),e._v(" "),o("li",[e._v("Ideally, each version of the software supports only a "),o("em",[e._v("single")]),e._v(" AppVersion at one time\n"),o("ul",[o("li",[e._v("this means we checkout different versions of the software at different heights instead of littering the code\nwith conditionals")]),e._v(" "),o("li",[e._v("minimize the number of data migrations required across AppVersion (ie. most AppVersion should be able to read the same state from disk as previous AppVersion).")])])])]),e._v(" "),o("h2",{attrs:{id:"ideal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ideal"}},[e._v("#")]),e._v(" Ideal")]),e._v(" "),o("p",[e._v("Each component of the software is independently versioned in a modular way and its easy to mix and match and upgrade.")]),e._v(" "),o("h2",{attrs:{id:"proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),o("p",[e._v("Each of BlockVersion, AppVersion, P2PVersion, is a monotonically increasing uint64.")]),e._v(" "),o("p",[e._v("To use these versions, we need to update the block Header, the p2p NodeInfo, and the ABCI.")]),e._v(" "),o("h3",{attrs:{id:"header"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[e._v("#")]),e._v(" Header")]),e._v(" "),o("p",[e._v("Block Header should include a "),o("code",[e._v("Version")]),e._v(" struct as its first field like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBWZXJzaW9uIHN0cnVjdCB7CiAgICBCbG9jayB1aW50NjQKICAgIEFwcCB1aW50NjQKfQo="}}),e._v(" "),o("p",[e._v("Here, "),o("code",[e._v("Version.Block")]),e._v(" defines the rules for the current block, while\n"),o("code",[e._v("Version.App")]),e._v(" defines the app version that processed the last block and computed\nthe "),o("code",[e._v("AppHash")]),e._v(" in the current block. Together they provide a complete description\nof the consensus-critical protocol.")]),e._v(" "),o("p",[e._v("Since we have settled on a proto3 header, the ability to read the BlockVersion out of the serialized header is unanimous.")]),e._v(" "),o("p",[e._v("Using a Version struct gives us more flexibility to add fields without breaking\nthe header.")]),e._v(" "),o("p",[e._v("The ProtocolVersion struct includes both the Block and App versions - it should\nserve as a complete description of the consensus-critical protocol.")]),e._v(" "),o("h3",{attrs:{id:"nodeinfo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nodeinfo"}},[e._v("#")]),e._v(" NodeInfo")]),e._v(" "),o("p",[e._v("NodeInfo should include a Version struct as its first field like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"dHlwZSBWZXJzaW9uIHN0cnVjdCB7CiAgICBQMlAgdWludDY0CiAgICBCbG9jayB1aW50NjQKICAgIEFwcCB1aW50NjQKCiAgICBPdGhlciBbXXN0cmluZwp9Cg=="}}),e._v(" "),o("p",[e._v("Note this effectively makes "),o("code",[e._v("Version.P2P")]),e._v(" the first field in the NodeInfo, so it\nshould be easy to read this out of the serialized header if need be to facilitate an upgrade.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("Version.Other")]),e._v(" here should include additional information like the name of the software client and\nit's SemVer version - this is for convenience only. Eg.\n"),o("code",[e._v("tendermint-core/v0.22.8")]),e._v(". It's a "),o("code",[e._v("[]string")]),e._v(" so it can include information about\nthe version of Tendermint, of the app, of Tendermint libraries, etc.")]),e._v(" "),o("h3",{attrs:{id:"abci"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[e._v("#")]),e._v(" ABCI")]),e._v(" "),o("p",[e._v("Since the ABCI is responsible for keeping Tendermint and the App in sync, we\nneed to communicate version information through it.")]),e._v(" "),o("p",[e._v("On startup, we use Info to perform a basic handshake. It should include all the\nversion information.")]),e._v(" "),o("p",[e._v("We also need to be able to update versions in the life of a blockchain. The\nnatural place to do this is EndBlock.")]),e._v(" "),o("p",[e._v("Note that currently the result of the Handshake isn't exposed anywhere, as the\nhandshaking happens inside the "),o("code",[e._v("proxy.AppConns")]),e._v(" abstraction. We will need to\nremove the handshaking from the "),o("code",[e._v("proxy")]),e._v(" package so we can call it independently\nand get the result, which should contain the application version.")]),e._v(" "),o("h4",{attrs:{id:"info"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[e._v("#")]),e._v(" Info")]),e._v(" "),o("p",[e._v("RequestInfo should add support for protocol versions like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBSZXF1ZXN0SW5mbyB7CiAgc3RyaW5nIHZlcnNpb24KICB1aW50NjQgYmxvY2tfdmVyc2lvbgogIHVpbnQ2NCBwMnBfdmVyc2lvbgp9Cg=="}}),e._v(" "),o("p",[e._v("Similarly, ResponseInfo should return the versions:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBSZXNwb25zZUluZm8gewogIHN0cmluZyBkYXRhCgogIHN0cmluZyB2ZXJzaW9uCiAgdWludDY0IGFwcF92ZXJzaW9uCgogIGludDY0IGxhc3RfYmxvY2tfaGVpZ2h0CiAgYnl0ZXMgbGFzdF9ibG9ja19hcHBfaGFzaAp9Cg=="}}),e._v(" "),o("p",[e._v("The existing "),o("code",[e._v("version")]),e._v(" fields should be called "),o("code",[e._v("software_version")]),e._v(" but we leave\nthem for now to reduce the number of breaking changes.")]),e._v(" "),o("h4",{attrs:{id:"endblock"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#endblock"}},[e._v("#")]),e._v(" EndBlock")]),e._v(" "),o("p",[e._v("Updating the version could be done either with new fields or by using the\nexisting "),o("code",[e._v("tags")]),e._v(". Since we're trying to communicate information that will be\nincluded in Tendermint block Headers, it should be native to the ABCI, and not\nsomething embedded through some scheme in the tags. Thus, version updates should\nbe communicated through EndBlock.")]),e._v(" "),o("p",[e._v("EndBlock already contains "),o("code",[e._v("ConsensusParams")]),e._v(". We can add version information to\nthe ConsensusParams as well:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBDb25zZW5zdXNQYXJhbXMgewoKICBCbG9ja1NpemUgYmxvY2tfc2l6ZQogIEV2aWRlbmNlUGFyYW1zIGV2aWRlbmNlX3BhcmFtcwogIFZlcnNpb25QYXJhbXMgdmVyc2lvbgp9CgptZXNzYWdlIFZlcnNpb25QYXJhbXMgewogICAgdWludDY0IGJsb2NrX3ZlcnNpb24KICAgIHVpbnQ2NCBhcHBfdmVyc2lvbgp9Cg=="}}),e._v(" "),o("p",[e._v("For now, the "),o("code",[e._v("block_version")]),e._v(" will be ignored, as we do not allow block version\nto be updated live. If the "),o("code",[e._v("app_version")]),e._v(" is set, it signals that the app's\nprotocol version has changed, and the new "),o("code",[e._v("app_version")]),e._v(" will be included in the\n"),o("code",[e._v("Block.Header.Version.App")]),e._v(" for the next block.")]),e._v(" "),o("h3",{attrs:{id:"blockversion-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blockversion-2"}},[e._v("#")]),e._v(" BlockVersion")]),e._v(" "),o("p",[e._v("BlockVersion is included in both the Header and the NodeInfo.")]),e._v(" "),o("p",[e._v("Changing BlockVersion should happen quite infrequently and ideally only for\ncritical upgrades. For now, it is not encoded in ABCI, though it's always\npossible to use tags to signal an external process to co-ordinate an upgrade.")]),e._v(" "),o("p",[e._v("Note Ethereum has not had to make an upgrade like this (everything has been at state machine level, AFAIK).")]),e._v(" "),o("h3",{attrs:{id:"p2pversion-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#p2pversion-2"}},[e._v("#")]),e._v(" P2PVersion")]),e._v(" "),o("p",[e._v("P2PVersion is not included in the block Header, just the NodeInfo.")]),e._v(" "),o("p",[e._v("P2PVersion is the first field in the NodeInfo. NodeInfo is also proto3 so this is easy to read out.")]),e._v(" "),o("p",[e._v("Note we need the peer/reactor protocols to take the versions of peers into account when sending messages:")]),e._v(" "),o("ul",[o("li",[e._v("don't send messages they don't understand")]),e._v(" "),o("li",[e._v("don't send messages they don't expect")])]),e._v(" "),o("p",[e._v("Doing this will be specific to the upgrades being made.")]),e._v(" "),o("p",[e._v("Note we also include the list of reactor channels in the NodeInfo and already don't send messages for channels the peer doesn't understand.\nIf upgrades always use new channels, this simplifies the development cost of backwards compatibility.")]),e._v(" "),o("p",[e._v("Note NodeInfo is only exchanged after the authenticated encryption handshake to ensure that it's private.\nDoing any version exchange before encrypting could be considered information leakage, though I'm not sure\nhow much that matters compared to being able to upgrade the protocol.")]),e._v(" "),o("p",[e._v("XXX: if needed, can we change the meaning of the first byte of the first message to encode a handshake version?\nthis is the first byte of a 32-byte ed25519 pubkey.")]),e._v(" "),o("h3",{attrs:{id:"appversion-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#appversion-2"}},[e._v("#")]),e._v(" AppVersion")]),e._v(" "),o("p",[e._v("AppVersion is also included in the block Header and the NodeInfo.")]),e._v(" "),o("p",[e._v("AppVersion essentially defines how the AppHash and LastResults are computed.")]),e._v(" "),o("h3",{attrs:{id:"peer-compatibility"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#peer-compatibility"}},[e._v("#")]),e._v(" Peer Compatibility")]),e._v(" "),o("p",[e._v("Restricting peer compatibility based on version is complicated by the need to\nhelp old peers, possibly on older versions, sync the blockchain.")]),e._v(" "),o("p",[e._v("We might be tempted to say that we only connect to peers with the same\nAppVersion and BlockVersion (since these define the consensus critical\ncomputations), and a select list of P2PVersions (ie. those compatible with\nours), but then we'd need to make accomodations for connecting to peers with the\nright Block/AppVersion for the height they're on.")]),e._v(" "),o("p",[e._v("For now, we will connect to peers with any version and restrict compatibility\nsolely based on the ChainID. We leave more restrictive rules on peer\ncompatibiltiy to a future proposal.")]),e._v(" "),o("h3",{attrs:{id:"future-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#future-changes"}},[e._v("#")]),e._v(" Future Changes")]),e._v(" "),o("p",[e._v("It may be valuable to support an "),o("code",[e._v("/unsafe_stop?height=_")]),e._v(" endpoint to tell Tendermint to shutdown at a given height.\nThis could be use by an external manager process that oversees upgrades by\nchecking out and installing new software versions and restarting the process. It\nwould subscribe to the relevant upgrade event (needs to be implemented) and call "),o("code",[e._v("/unsafe_stop")]),e._v(" at\nthe correct height (of course only after getting approval from its user!)")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("Make tendermint and application versions native to the ABCI to more clearly\ncommunicate about them")]),e._v(" "),o("li",[e._v("Distinguish clearly between protocol versions and software version to\nfacilitate implementations in other languages")]),e._v(" "),o("li",[e._v("Versions included in key data structures in easy to discern way")]),e._v(" "),o("li",[e._v("Allows proposers to signal for upgrades and apps to decide when to actually change the\nversion (and start signalling for a new version)")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("ul",[o("li",[e._v("Unclear how to version the initial P2P handshake itself")]),e._v(" "),o("li",[e._v("Versions aren't being used (yet) to restrict peer compatibility")]),e._v(" "),o("li",[e._v("Signalling for a new version happens through the proposer and must be\ntallied/tracked in the app.")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ul",[o("li",[e._v("Adds more fields to the ABCI")]),e._v(" "),o("li",[e._v("Implies that a single codebase must be able to handle multiple versions")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);