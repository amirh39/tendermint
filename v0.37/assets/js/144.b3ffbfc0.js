(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{751:function(e,t,o){"use strict";o.r(t);var r=o(1),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-081-protocol-buffers-management"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-081-protocol-buffers-management"}},[e._v("#")]),e._v(" ADR 081: Protocol Buffers Management")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("2022-02-28: First draft")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Accepted")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/8121",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tracking issue"),o("OutboundLink")],1)]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("At present, we manage the "),o("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),o("OutboundLink")],1),e._v(' schema files ("protos") that define\nour wire-level data formats within the Tendermint repository itself (see the\n'),o("RouterLink",{attrs:{to:"/proto/"}},[o("code",[e._v("proto")])]),e._v(" directory). Recently, we have been making use of "),o("a",{attrs:{href:"https://buf.build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf"),o("OutboundLink")],1),e._v(",\nboth locally and in CI, in order to generate Go stubs, and lint and check\n"),o("code",[e._v(".proto")]),e._v(" files for breaking changes.")],1),e._v(" "),o("p",[e._v("The version of Buf used at the time of this decision was "),o("code",[e._v("v1beta1")]),e._v(", and it was\ndiscussed in "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/7975",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7975"),o("OutboundLink")],1),e._v(" and in weekly calls as to whether we should upgrade to\n"),o("code",[e._v("v1")]),e._v(" and harmonize our approach with that used by the Cosmos SDK. The team\nmanaging the Cosmos SDK was primarily interested in having our protos versioned\nand easily accessible from the "),o("a",{attrs:{href:"https://buf.build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf"),o("OutboundLink")],1),e._v(" registry.")]),e._v(" "),o("p",[e._v("The three main sets of stakeholders for the "),o("code",[e._v(".proto")]),e._v(" files and their needs, as\ncurrently understood, are as follows.")]),e._v(" "),o("ol",[o("li",[e._v("Tendermint needs Go code generated from "),o("code",[e._v(".proto")]),e._v(" files.")]),e._v(" "),o("li",[e._v("Consumers of Tendermint's "),o("code",[e._v(".proto")]),e._v(" files, specifically projects that want to\ninteroperate with Tendermint and need to generate code for their own\nprogramming language, want to be able to access these files in a reliable and\nefficient way.")]),e._v(" "),o("li",[e._v("The Tendermint Core team wants to provide stable interfaces that are as easy\nas possible to maintain, on which consumers can depend, and to be able to\nnotify those consumers promptly when those interfaces change. To this end, we\nwant to:\n"),o("ol",[o("li",[e._v("Prevent any breaking changes from being introduced in minor/patch releases\nof Tendermint. Only major version updates should be able to contain\nbreaking interface changes.")]),e._v(" "),o("li",[e._v("Prevent generated code from diverging from the Protobuf schema files.")])])])]),e._v(" "),o("p",[e._v("There was also discussion surrounding the notion of automated documentation\ngeneration and hosting, but it is not clear at this time whether this would be\nthat valuable to any of our stakeholders. What will, of course, be valuable at\nminimum would be better documentation (in comments) of the "),o("code",[e._v(".proto")]),e._v(" files\nthemselves.")]),e._v(" "),o("h2",{attrs:{id:"alternative-approaches"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alternative-approaches"}},[e._v("#")]),e._v(" Alternative Approaches")]),e._v(" "),o("h3",{attrs:{id:"meeting-stakeholders-needs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#meeting-stakeholders-needs"}},[e._v("#")]),e._v(" Meeting stakeholders' needs")]),e._v(" "),o("ol",[o("li",[e._v("Go stub generation from protos. We could use:\n"),o("ol",[o("li",[o("a",{attrs:{href:"https://buf.build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf"),o("OutboundLink")],1),e._v(". This approach has been rather cumbersome up to this point, and it\nis not clear what Buf really provides beyond that which "),o("code",[e._v("protoc")]),e._v(" provides\nto justify the additional complexity in configuring Buf for stub\ngeneration.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("protoc"),o("OutboundLink")],1),e._v(" - the Protocol Buffers compiler.")])])]),e._v(" "),o("li",[e._v("Notification of breaking changes:\n"),o("ol",[o("li",[e._v("Buf in CI for all pull requests to "),o("em",[e._v("release")]),e._v(" branches only (and not on\n"),o("code",[e._v("master")]),e._v(").")]),e._v(" "),o("li",[e._v("Buf in CI on every pull request to every branch (this was the case at the\ntime of this decision, and the team decided that the signal-to-noise ratio\nfor this approach was too low to be of value).")])])]),e._v(" "),o("li",[o("code",[e._v(".proto")]),e._v(" linting:\n"),o("ol",[o("li",[e._v("Buf in CI on every pull request")])])]),e._v(" "),o("li",[o("code",[e._v(".proto")]),e._v(" formatting:\n"),o("ol",[o("li",[o("a",{attrs:{href:"https://clang.llvm.org/docs/ClangFormat.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("clang-format"),o("OutboundLink")],1),e._v(" locally and a "),o("a",{attrs:{href:"https://github.com/marketplace/actions/clang-format-github-action",target:"_blank",rel:"noopener noreferrer"}},[e._v("clang-format GitHub Action"),o("OutboundLink")],1),e._v(" in CI to check\nthat files are formatted properly on every pull request.")])])]),e._v(" "),o("li",[e._v("Sharing of "),o("code",[e._v(".proto")]),e._v(" files in a versioned, reliable manner:\n"),o("ol",[o("li",[e._v("Consumers could simply clone the Tendermint repository, check out a\nspecific commit, tag or branch and manually copy out all of the "),o("code",[e._v(".proto")]),e._v("\nfiles they need. This requires no effort from the Tendermint Core team and\nwill continue to be an option for consumers. The drawback of this approach\nis that it requires manual coding/scripting to implement and is brittle in\nthe face of bigger changes.")]),e._v(" "),o("li",[e._v("Uploading our "),o("code",[e._v(".proto")]),e._v(" files to Buf's registry on every release. This is\nby far the most seamless for consumers of our "),o("code",[e._v(".proto")]),e._v(" files, but requires\nthe dependency on Buf. This has the additional benefit that the Buf\nregistry will automatically "),o("a",{attrs:{href:"https://docs.buf.build/bsr/documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("generate and host\ndocumentation"),o("OutboundLink")],1),e._v(" for these protos.")]),e._v(" "),o("li",[e._v("We could create a process that, upon release, creates a "),o("code",[e._v(".zip")]),e._v(" file\ncontaining our "),o("code",[e._v(".proto")]),e._v(" files.")])])])]),e._v(" "),o("h3",{attrs:{id:"popular-alternatives-to-buf"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#popular-alternatives-to-buf"}},[e._v("#")]),e._v(" Popular alternatives to Buf")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/uber/prototool",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prototool"),o("OutboundLink")],1),e._v(" was not considered as it appears deprecated, and the ecosystem seems\nto be converging on Buf at this time.")]),e._v(" "),o("h3",{attrs:{id:"tooling-complexity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tooling-complexity"}},[e._v("#")]),e._v(" Tooling complexity")]),e._v(" "),o("p",[e._v("The more tools we have in our build/CI processes, the more complex and fragile\nrepository/CI management becomes, and the longer it takes to onboard new team\nmembers. Maintainability is a core concern here.")]),e._v(" "),o("h3",{attrs:{id:"buf-sustainability-and-costs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#buf-sustainability-and-costs"}},[e._v("#")]),e._v(" Buf sustainability and costs")]),e._v(" "),o("p",[e._v("One of the primary considerations regarding the usage of Buf is whether, for\nexample, access to its registry will eventually become a\npaid-for/subscription-based service and whether this is valuable enough for us\nand the ecosystem to pay for such a service. At this time, it appears as though\nBuf will never charge for hosting open source projects' protos.")]),e._v(" "),o("p",[e._v("Another consideration was Buf's sustainability as a project - what happens when\ntheir resources run out? Will there be a strong and broad enough open source\ncommunity to continue maintaining it?")]),e._v(" "),o("h3",{attrs:{id:"local-buf-usage-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#local-buf-usage-options"}},[e._v("#")]),e._v(" Local Buf usage options")]),e._v(" "),o("p",[e._v("Local usage of Buf (i.e. not in CI) can be accomplished in two ways:")]),e._v(" "),o("ol",[o("li",[e._v("Installing the relevant tools individually.")]),e._v(" "),o("li",[e._v("By way of its "),o("a",{attrs:{href:"https://hub.docker.com/r/bufbuild/buf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker image"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("Local installation of Buf requires developers to manually keep their toolchains\nup-to-date. The Docker option comes with a number of complexities, including\nhow the file system permissions of code generated by a Docker container differ\nbetween platforms (e.g. on Linux, Buf-generated code ends up being owned by\n"),o("code",[e._v("root")]),e._v(").")]),e._v(" "),o("p",[e._v("The trouble with the Docker-based approach is that we make use of the\n"),o("a",{attrs:{href:"https://github.com/cosmos/gogoproto",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogoprotobuf"),o("OutboundLink")],1),e._v(" plugin for "),o("code",[e._v("protoc")]),e._v(". Continuing to use the Docker-based approach\nto using Buf will mean that we will have to continue building our own custom\nDocker image with embedded gogoprotobuf.")]),e._v(" "),o("p",[e._v("Along these lines, we could eventually consider coming up with a "),o("a",{attrs:{href:"https://nixos.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nix"),o("OutboundLink")],1),e._v("- or\n"),o("a",{attrs:{href:"https://redo.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("redo"),o("OutboundLink")],1),e._v("-based approach to developer tooling to ensure tooling consistency across\nthe team and for anyone who wants to be able to contribute to Tendermint.")]),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("ol",[o("li",[e._v("We will adopt Buf for now for proto generation, linting, breakage checking\nand its registry (mainly in CI, with optional usage locally).")]),e._v(" "),o("li",[e._v("Failing CI when checking for breaking changes in "),o("code",[e._v(".proto")]),e._v(" files will only\nhappen when performing minor/patch releases.")]),e._v(" "),o("li",[e._v("Local tooling will be favored over Docker-based tooling.")])]),e._v(" "),o("h2",{attrs:{id:"detailed-design"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),o("p",[e._v("We currently aim to:")]),e._v(" "),o("ol",[o("li",[e._v("Update to Buf "),o("code",[e._v("v1")]),e._v(" to facilitate linting, breakage checking and uploading to\nthe Buf registry.")]),e._v(" "),o("li",[e._v("Configure CI appropriately for proto management:\n"),o("ol",[o("li",[e._v("Uploading protos to the Buf registry on every release (e.g. the\n"),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/e6571906043b6751951a42b6546431b1c38b05bd/.github/workflows/proto-registry.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("approach"),o("OutboundLink")],1),e._v(" used by the Cosmos SDK).")]),e._v(" "),o("li",[e._v("Linting on every pull request (e.g. the\n"),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/e6571906043b6751951a42b6546431b1c38b05bd/.github/workflows/proto.yml#L15",target:"_blank",rel:"noopener noreferrer"}},[e._v("approach"),o("OutboundLink")],1),e._v(" used by the Cosmos SDK). The linter\npassing should be considered a requirement for accepting PRs.")]),e._v(" "),o("li",[e._v("Checking for breaking changes in minor/patch version releases and failing\nCI accordingly - see "),o("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/8003",target:"_blank",rel:"noopener noreferrer"}},[e._v("#8003"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Add "),o("a",{attrs:{href:"https://github.com/marketplace/actions/clang-format-github-action",target:"_blank",rel:"noopener noreferrer"}},[e._v("clang-format GitHub Action"),o("OutboundLink")],1),e._v(" to check "),o("code",[e._v(".proto")]),e._v(" file formatting. Format\nchecking should be considered a requirement for accepting PRs.")])])]),e._v(" "),o("li",[e._v("Update the Tendermint "),o("a",{attrs:{href:"../../Makefile"}},[o("code",[e._v("Makefile")])]),e._v(" to primarily facilitate\nlocal Protobuf stub generation, linting, formatting and breaking change\nchecking. More specifically:\n"),o("ol",[o("li",[e._v("This includes removing the dependency on Docker and introducing the\ndependency on local toolchain installation. CI-based equivalents, where\nrelevant, will rely on specific GitHub Actions instead of the Makefile.")]),e._v(" "),o("li",[e._v("Go code generation will rely on "),o("code",[e._v("protoc")]),e._v(" directly.")])])])]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("We will still offer Go stub generation, proto linting and breakage checking.")]),e._v(" "),o("li",[e._v("Breakage checking will only happen on minor/patch releases to increase the\nsignal-to-noise ratio in CI.")]),e._v(" "),o("li",[e._v("Versioned protos will be made available via Buf's registry upon every release.")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ul",[o("li",[e._v("Developers/contributors will need to install the relevant Protocol\nBuffers-related tooling (Buf, gogoprotobuf, clang-format) locally in order to\nbuild, lint, format and check "),o("code",[e._v(".proto")]),e._v(" files for breaking changes.")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protocol Buffers"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://buf.build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Buf"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/7975",target:"_blank",rel:"noopener noreferrer"}},[e._v("#7975"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/protocolbuffers/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("protoc"),o("OutboundLink")],1),e._v(" - The Protocol Buffers compiler")])])])}),[],!1,null,null,null);t.default=n.exports}}]);