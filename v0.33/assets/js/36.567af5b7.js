(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{593:function(e,t,n){e.exports=n.p+"assets/img/consensus_blockchain.65d2dc6c.png"},741:function(e,t,n){"use strict";n.r(t);var i=n(1),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"adr-069-flexible-node-initialization"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adr-069-flexible-node-initialization"}},[e._v("#")]),e._v(" ADR 069: Flexible Node Initialization")]),e._v(" "),i("h2",{attrs:{id:"changlog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changlog"}},[e._v("#")]),e._v(" Changlog")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("2021-06-09: Initial Draft (@tychoish)")])]),e._v(" "),i("li",[i("p",[e._v("2021-07-21: Major Revision (@tychoish)")])])]),e._v(" "),i("h2",{attrs:{id:"status"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),i("p",[e._v("Proposed.")]),e._v(" "),i("h2",{attrs:{id:"context"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),i("p",[e._v("In an effort to support "),i("RouterLink",{attrs:{to:"/architecture/adr-060-go-api-stability.html"}},[e._v("Go-API-Stability")]),e._v(",\nduring the 0.35 development cycle, we have attempted to reduce the the API\nsurface area by moving most of the interface of the "),i("code",[e._v("node")]),e._v(" package into\nunexported functions, as well as moving the reactors to an "),i("code",[e._v("internal")]),e._v("\npackage. Having this coincide with the 0.35 release made a lot of sense\nbecause these interfaces were "),i("em",[e._v("already")]),e._v(" changing as a result of the "),i("code",[e._v("p2p")]),e._v(" "),i("RouterLink",{attrs:{to:"/architecture/adr-061-p2p-refactor-scope.html"}},[e._v("refactor")]),e._v(", so it made sense to think a bit\nmore about how tendermint exposes this API.")],1),e._v(" "),i("p",[e._v("While the interfaces of the P2P layer and most of the node package are already\ninternalized, this precludes some operational patterns that are important to\nusers who use tendermint as a library. Specifically, introspecting the\ntendermint node service and replacing components is not supported in the latest\nversion of the code, and some of these use cases would require maintaining a\nvendor copy of the code. Adding these features requires rather extensive\n(internal/implementation) changes to the "),i("code",[e._v("node")]),e._v(" and "),i("code",[e._v("rpc")]),e._v(" packages, and this\nADR describes a model for changing the way that tendermint nodes initialize, in\nservice of providing this kind of functionality.")]),e._v(" "),i("p",[e._v("We consider node initialization, because the current implemention\nprovides strong connections between all components, as well as between\nthe components of the node and the RPC layer, and being able to think\nabout the interactions of these components will help enable these\nfeatures and help define the requirements of the node package.")]),e._v(" "),i("h2",{attrs:{id:"alternative-approaches"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#alternative-approaches"}},[e._v("#")]),e._v(" Alternative Approaches")]),e._v(" "),i("p",[e._v("These alternatives are presented to frame the design space and to\ncontextualize the decision in terms of product requirements. These\nideas are not inherently bad, and may even be possible or desireable\nin the (distant) future, and merely provide additional context for how\nwe, in the moment came to our decision(s).")]),e._v(" "),i("h3",{attrs:{id:"do-nothing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#do-nothing"}},[e._v("#")]),e._v(" Do Nothing")]),e._v(" "),i("p",[e._v("The current implementation is functional and sufficient for the vast\nmajority of use cases (e.g., all users of the Cosmos-SDK as well as\nanyone who runs tendermint and the ABCI application in separate\nprocesses). In the current implementation, and even previous versions,\nmodifying node initialization or injecting custom components required\ncopying most of the "),i("code",[e._v("node")]),e._v(" package, which required such users\nto maintain a vendored copy of tendermint.")]),e._v(" "),i("p",[e._v("While this is (likely) not tenable in the long term, as users do want\nmore modularity, and the current service implementation is brittle and\ndifficult to maintain, in the short term it may be possible to delay\nimplementation somewhat. Eventually, however, we will need to make the\n"),i("code",[e._v("node")]),e._v(" package easier to maintain and reason about.")]),e._v(" "),i("h3",{attrs:{id:"generic-service-pluggability"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#generic-service-pluggability"}},[e._v("#")]),e._v(" Generic Service Pluggability")]),e._v(" "),i("p",[e._v("One possible system design would export interfaces (in the Golang\nsense) for all components of the system, to permit runtime dependency\ninjection of all components in the system, so that users can compose\ntendermint nodes of arbitrary user-supplied components.")]),e._v(" "),i("p",[e._v("Although this level of customization would provide benefits, it would be a huge\nundertaking (particularly with regards to API design work) that we do not have\nscope for at the moment.  Eventually providing support for some kinds of\npluggability may be useful, so the current solution does not explicitly\nforeclose the possibility of this alternative.")]),e._v(" "),i("h3",{attrs:{id:"abstract-dependency-based-startup-and-shutdown"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#abstract-dependency-based-startup-and-shutdown"}},[e._v("#")]),e._v(" Abstract Dependency Based Startup and Shutdown")]),e._v(" "),i("p",[e._v("The main proposal in this document makes tendermint node initialization simpler\nand more abstract, but the system lacks a number of\nfeatures which daemon/service initialization could provide, such as a\nsystem allowing the authors of services to control initialization and shutdown order\nof components using dependency relationships.")]),e._v(" "),i("p",[e._v("Such a system could work by allowing services to declare\ninitialization order dependencies to other reactors (by ID, perhaps)\nso that the node could decide the initialization based on the\ndependencies declared by services rather than requiring the node to\nencode this logic directly.")]),e._v(" "),i("p",[e._v("This level of configuration is probably more complicated than is needed.  Given\nthat the authors of components in the current implementation of tendermint\nalready "),i("em",[e._v("do")]),e._v(" need to know about other components, a dependency-based system\nwould probably be overly-abstract at this stage.")]),e._v(" "),i("h2",{attrs:{id:"decisions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#decisions"}},[e._v("#")]),e._v(" Decisions")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("To the greatest extent possible, factor the code base so that\npackages are responsible for their own initialization, and minimize\nthe amount of code in the "),i("code",[e._v("node")]),e._v(" package itself.")])]),e._v(" "),i("li",[i("p",[e._v("As a design goal, reduce direct coupling and dependencies between\ncomponents in the implementation of "),i("code",[e._v("node")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Begin iterating on a more-flexible internal framework for\ninitializing tendermint nodes to make the initatilization process\nless hard-coded by the implementation of the node objects.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Reactors should not need to expose their interfaces "),i("em",[e._v("within")]),e._v(" the\nimplementation of the node type")])]),e._v(" "),i("li",[i("p",[e._v("This refactoring should be entirely opaque to users.")])]),e._v(" "),i("li",[i("p",[e._v("These node initialization changes should not require a\nreevaluation of the "),i("code",[e._v("service.Service")]),e._v(" or a generic initialization\norchestration framework.")])])])]),e._v(" "),i("li",[i("p",[e._v("Do not proactively provide a system for injecting\ncomponents/services within a tendtermint node, though make it\npossible to retrofit this kind of plugability in the future if\nneeded.")])]),e._v(" "),i("li",[i("p",[e._v("Prioritize implementation of p2p-based statesync reactor to obviate\nneed for users to inject a custom state-sync provider.")])])]),e._v(" "),i("h2",{attrs:{id:"detailed-design"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),i("p",[e._v("The "),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/node/node.go#L47",target:"_blank",rel:"noopener noreferrer"}},[e._v("current\nnodeImpl"),i("OutboundLink")],1),e._v("\nincludes direct references to the implementations of each of the\nreactors, which should be replaced by references to "),i("code",[e._v("service.Service")]),e._v("\nobjects. This will require moving construction of the "),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/node/node.go#L771",target:"_blank",rel:"noopener noreferrer"}},[e._v("rpc\nservice"),i("OutboundLink")],1),e._v("\ninto the constructor of\n"),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/node/node.go#L126",target:"_blank",rel:"noopener noreferrer"}},[e._v("makeNode"),i("OutboundLink")],1),e._v(". One\npossible implementation of this would be to eliminate the current\n"),i("code",[e._v("ConfigureRPC")]),e._v(" method on the node package and instead "),i("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/6798/files#diff-375d57e386f20eaa5f09f02bb9d28bfc48ac3dca18d0325f59492208219e5618R441",target:"_blank",rel:"noopener noreferrer"}},[e._v("configure it\nhere"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("p",[e._v("To avoid adding complexity to the "),i("code",[e._v("node")]),e._v(" package, we will add a\ncomposite service implementation to the "),i("code",[e._v("service")]),e._v(" package\nthat implements "),i("code",[e._v("service.Service")]),e._v(" and is composed of a sequence of\nunderlying "),i("code",[e._v("service.Service")]),e._v(" objects and handles their\nstartup/shutdown in the specified sequential order.")]),e._v(" "),i("p",[e._v("Consensus, blocksync ("),i("em",[e._v("née")]),e._v(" fast sync), and statesync all depend on\neach other, and have significant initialization dependencies that are\npresently encoded in the "),i("code",[e._v("node")]),e._v(" package. As part of this change, a\nnew package/component (likely named "),i("code",[e._v("blocks")]),e._v(" located at\n"),i("code",[e._v("internal/blocks")]),e._v(") will encapsulate the initialization of these block\nmanagement areas of the code.")]),e._v(" "),i("h3",{attrs:{id:"injectable-component-option"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#injectable-component-option"}},[e._v("#")]),e._v(" Injectable Component Option")]),e._v(" "),i("p",[e._v("This section briefly describes a possible implementation for\nuser-supplied services running within a node. This should not be\nimplemented unless user-supplied components are a hard requirement for\na user.")]),e._v(" "),i("p",[e._v("In order to allow components to be replaced, a new public function\nwill be added to the public interface of "),i("code",[e._v("node")]),e._v(" with a signature that\nresembles the following:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdXaXRoU2VydmljZXMoY29uZiAqY29uZmlnLkNvbmZpZywKCWxvZ2dlciBsb2cuTG9nZ2VyLAoJY2YgcHJveHkuQ2xpZW50Q3JlYXRvciwKCWdlbiAqdHlwZXMuR2VuZXNpc0RvYywKCXNydnMgW11zZXJ2aWNlLlNlcnZpY2UsCikgKHNlcnZpY2UuU2VydmljZSwgZXJyb3IpIHsK"}}),e._v(" "),i("p",[e._v("The "),i("code",[e._v("service.Service")]),e._v(" objects will be initialized in the order supplied, after\nall pre-configured/default services have started (and shut down in reverse\norder).  The given services may implement additional interfaces, allowing them\nto replace specific default services. "),i("code",[e._v("NewWithServices")]),e._v(" will validate input\nservice lists with the following rules:")]),e._v(" "),i("ul",[i("li",[e._v("None of the services may already be running.")]),e._v(" "),i("li",[e._v("The caller may not supply more than one replacement reactor for a given\ndefault service type.")])]),e._v(" "),i("p",[e._v("If callers violate any of these rules, "),i("code",[e._v("NewWithServices")]),e._v(" will return\nan error. To retract support for this kind of operation in the future,\nthe function can be modified to "),i("em",[e._v("always")]),e._v(" return an error.")]),e._v(" "),i("h2",{attrs:{id:"consequences"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),i("h3",{attrs:{id:"positive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("The node package will become easier to maintain.")])]),e._v(" "),i("li",[i("p",[e._v("It will become easier to add additional services within tendermint\nnodes.")])]),e._v(" "),i("li",[i("p",[e._v("It will become possible to replace default components in the node\npackage without vendoring the tendermint repo and modifying internal\ncode.")])]),e._v(" "),i("li",[i("p",[e._v("The current end-to-end (e2e) test suite will be able to prevent any\nregressions, and the new functionality can be thoroughly unit tested.")])]),e._v(" "),i("li",[i("p",[e._v("The scope of this project is very narrow, which minimizes risk.")])])]),e._v(" "),i("h3",{attrs:{id:"negative"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("This increases our reliance on the "),i("code",[e._v("service.Service")]),e._v(" interface which\nis probably not an interface that we want to fully commit to.")])]),e._v(" "),i("li",[i("p",[e._v("This proposal implements a fairly minimal set of functionality and\nleaves open the possibility for many additional features which are\nnot included in the scope of this proposal.")])])]),e._v(" "),i("h3",{attrs:{id:"neutral"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),i("p",[e._v("N/A")]),e._v(" "),i("h2",{attrs:{id:"open-questions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#open-questions"}},[e._v("#")]),e._v(" Open Questions")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("To what extent does this new initialization framework need to accommodate\nthe legacy p2p stack? Would it be possible to delay a great deal of this\nwork to the 0.36 cycle to avoid this complexity?")]),e._v(" "),i("ul",[i("li",[e._v("Answer: "),i("em",[e._v("depends on timing")]),e._v(", and the requirement to ship pluggable reactors in 0.35.")])])]),e._v(" "),i("li",[i("p",[e._v("Where should additional public types be exported for the 0.35\nrelease?")]),e._v(" "),i("p",[e._v("Related to the general project of API stabilization we want to deprecate\nthe "),i("code",[e._v("types")]),e._v(" package, and move its contents into a new "),i("code",[e._v("pkg")]),e._v(" hierarchy;\nhowever, the design of the "),i("code",[e._v("pkg")]),e._v(" interface is currently underspecified.\nIf "),i("code",[e._v("types")]),e._v(" is going to remain for the 0.35 release, then we should consider\nthe impact of using multiple organizing modalities for this code within a\nsingle release.")])])]),e._v(" "),i("h2",{attrs:{id:"future-work"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#future-work"}},[e._v("#")]),e._v(" Future Work")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Improve or simplify the "),i("code",[e._v("service.Service")]),e._v(" interface. There are some\npretty clear limitations with this interface as written (there's no\nway to timeout slow startup or shut down, the cycle between the\n"),i("code",[e._v("service.BaseService")]),e._v(" and "),i("code",[e._v("service.Service")]),e._v(" implementations is\ntroubling, the default panic in "),i("code",[e._v("OnReset")]),e._v(" seems troubling.)")])]),e._v(" "),i("li",[i("p",[e._v("As part of the refactor of "),i("code",[e._v("service.Service")]),e._v(" have all services/nodes\nrespect the lifetime of a "),i("code",[e._v("context.Context")]),e._v(" object, and avoid the\ncurrent practice of creating "),i("code",[e._v("context.Context")]),e._v(" objects in p2p and\nreactor code. This would be required for in-process multi-tenancy.")])]),e._v(" "),i("li",[i("p",[e._v("Support explicit dependencies between components and allow for\nparallel startup, so that different reactors can startup at the same\ntime, where possible.")])])]),e._v(" "),i("h2",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://peter.bourgon.org/go-for-industrial-programming/#the-component-graph",target:"_blank",rel:"noopener noreferrer"}},[e._v("the component\ngraph"),i("OutboundLink")],1),e._v("\nas a framing for internal service construction.")])]),e._v(" "),i("h2",{attrs:{id:"appendix"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[e._v("#")]),e._v(" Appendix")]),e._v(" "),i("h3",{attrs:{id:"dependencies"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),i("p",[e._v("There's a relationship between the blockchain and consensus reactor\ndescribed by the following dependency graph makes replacing some of\nthese components more difficult relative to other reactors or\ncomponents.")]),e._v(" "),i("p",[i("img",{attrs:{src:n(593),alt:"consensus blockchain dependency graph"}})])],1)}),[],!1,null,null,null);t.default=o.exports}}]);