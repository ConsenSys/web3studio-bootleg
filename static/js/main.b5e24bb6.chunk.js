(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,n){e.exports=n(468)},222:function(e,t){},224:function(e,t){},336:function(e,t){},337:function(e,t){},384:function(e,t){},468:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(53),u=n.n(s),o=n(172),p=n(173),r=n(178),c=n(174),d=n(179),y=n(43),m=n(24),l=(n(171),n(77)),b={web3:{customProvider:new(n.n(l).a.providers.WebsocketProvider)("ws://127.0.0.1:7545")},contracts:[{networks:{1:{},4:{address:"0x05128BeEe1652D7DB3e323c17B46d7F762767a22",transactionHash:"0xcc4e4d069cbcb02e6f4ed126d38e268c7faf70708d2f1cb999901453c2aacc8f"}},contractName:"BootlegTraderApp",abi:[{constant:!0,inputs:[],name:"bootlegToken",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x0de8f039"},{constant:!0,inputs:[],name:"tokenPrice",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x7ff9b596"},{constant:!0,inputs:[],name:"bootlegTokenId",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0xbcccfadd"},{inputs:[{name:"deployedAddress",type:"address"},{name:"tokenId",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor",signature:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"newOwner",type:"address"},{indexed:!1,name:"weiAmount",type:"uint256"}],name:"Purchased",type:"event",signature:"0xa512fb2532ca8587f236380171326ebb69670e86a2ba0c4412a3fcca4c3ada9b"},{anonymous:!1,inputs:[{indexed:!1,name:"changer",type:"address"},{indexed:!1,name:"oldPriceInWei",type:"uint256"},{indexed:!1,name:"newPriceInWei",type:"uint256"}],name:"PriceChanged",type:"event",signature:"0x4d624906ce6fd4e4b8b649463516ff505029a1903a8cc34bd82b4ca0f9a479de"},{anonymous:!1,inputs:[{indexed:!1,name:"withdrawer",type:"address"}],name:"PaymentWithdrawn",type:"event",signature:"0x832e43df4de2c3bcddde0796ab3950a40343a9a1f5f39d6b25c0d670877f4e22"},{constant:!1,inputs:[],name:"purchase",outputs:[],payable:!0,stateMutability:"payable",type:"function",signature:"0x64edfbf0"},{constant:!1,inputs:[{name:"newPrice",type:"uint256"}],name:"setTokenPrice",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x6a61e5fc"},{constant:!0,inputs:[],name:"getOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x893d20e8"},{constant:!0,inputs:[],name:"getBalance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x12065fe0"},{constant:!1,inputs:[],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x3ccfd60b"},{constant:!0,inputs:[],name:"getTokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function",signature:"0xd4a19116"}]},{networks:{1:{},4:{address:"0x220Cb1f5e58D205c713256d4Efc4f4165b4fdfE3",transactionHash:"0xa658e0175e5362919b9300d60e4e9dcb3450bc6c2c5c8e6506990056bfb494e5"}},contractName:"BootlegToken",abi:[{constant:!0,inputs:[{name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0x01ffc9a7"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function",signature:"0x06fdde03"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x081812fc"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x095ea7b3"},{constant:!1,inputs:[{name:"franchisor",type:"address"},{name:"tokenId",type:"uint256"}],name:"withdrawPayment",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x0e2cdba7"},{constant:!0,inputs:[{name:"franchisor",type:"address"},{name:"start",type:"uint256"},{name:"count",type:"uint256"},{name:"tokenId",type:"uint256"}],name:"paymentBalanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x1383bfc7"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x18160ddd"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],payable:!0,stateMutability:"payable",type:"function",signature:"0x23b872dd"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x2f745c59"},{constant:!1,inputs:[{name:"franchisor",type:"address"},{name:"count",type:"uint256"},{name:"tokenId",type:"uint256"}],name:"withdrawPayment",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x3c800161"},{constant:!0,inputs:[{name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x4f6ccce7"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"tokenURI",type:"string"}],name:"mintWithTokenURI",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x50bb4e7f"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0x6352211e"},{constant:!0,inputs:[{name:"owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x70a08231"},{constant:!0,inputs:[],name:"_INTERFACE_ID_SRT",outputs:[{name:"",type:"bytes4"}],payable:!1,stateMutability:"view",type:"function",signature:"0x86abecf5"},{constant:!0,inputs:[{name:"franchisor",type:"address"},{name:"tokenId",type:"uint256"}],name:"franchisorWithdrawPaymentsLeft",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x8970c257"},{constant:!0,inputs:[{name:"franchisor",type:"address"},{name:"tokenId",type:"uint256"}],name:"paymentBalanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0x919c3db5"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function",signature:"0x95d89b41"},{constant:!1,inputs:[{name:"account",type:"address"}],name:"addMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x983b2d56"},{constant:!1,inputs:[],name:"renounceMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x98650275"},{constant:!1,inputs:[{name:"to",type:"address"},{name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0xa22cb465"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"isMinter",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0xaa271e1a"},{constant:!1,inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],payable:!0,stateMutability:"payable",type:"function",signature:"0xb88d4fde"},{constant:!0,inputs:[{name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function",signature:"0xc87b56dd"},{constant:!0,inputs:[{name:"franchisor",type:"address"}],name:"franchisorBalanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function",signature:"0xd840fd8c"},{constant:!0,inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function",signature:"0xe985e9c5"},{constant:!0,inputs:[],name:"traderApp",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function",signature:"0xf84908a2"},{inputs:[{name:"name",type:"string"},{name:"symbol",type:"string"},{name:"franchisorPercentage",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor",signature:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"payee",type:"address"},{indexed:!1,name:"weiAmount",type:"uint256"}],name:"WithdrawnPayment",type:"event",signature:"0x3d3ab7d78e99c30b0f84aa86c09e959872657e970a59b0148095a22c52a5c940"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"MinterAdded",type:"event",signature:"0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"},{anonymous:!1,inputs:[{indexed:!0,name:"account",type:"address"}],name:"MinterRemoved",type:"event",signature:"0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Transfer",type:"event",signature:"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"approved",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}],name:"Approval",type:"event",signature:"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event",signature:"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{constant:!1,inputs:[{name:"franchisor",type:"address"},{name:"tokenId",type:"uint256"}],name:"addFranchisor",outputs:[],payable:!0,stateMutability:"payable",type:"function",signature:"0xbcb927b6"},{constant:!1,inputs:[{name:"traderAddr",type:"address"}],name:"setTraderApp",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function",signature:"0x2ac35da3"}]}],events:{},polls:{accounts:1500}},f=n(33),g=Object(y.drizzleConnect)(function(e){var t=e.accounts;e.drizzleStatus;return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement("h1",null,"Drizzle Examples"),i.a.createElement("p",null,"Examples of how to get started with Drizzle in various situations.")),i.a.createElement("div",{className:"section"},i.a.createElement("h2",null,"The Token"),i.a.createElement(m.ContractData,{contract:"BootlegTraderApp",method:"bootlegTokenId"}),i.a.createElement("h2",null,"Token URI"),i.a.createElement(m.ContractData,{contract:"BootlegTraderApp",method:"getTokenURI"}),i.a.createElement("h2",null,"Token Owner"),i.a.createElement(m.ContractData,{contract:"BootlegTraderApp",method:"getOwner"}),i.a.createElement("h2",null,"Your Balance"),i.a.createElement(m.ContractData,{contract:"BootlegTraderApp",method:"getBalance"}),i.a.createElement("h2",null,"Active Account"),JSON.stringify(t),i.a.createElement("h2",null,"Purchase"),i.a.createElement(m.ContractForm,{contract:"BootlegTraderApp",method:"purchase",render:function(e){e.inputs,e.inputTypes,e.state,e.handleInputChange;var t=e.handleSubmit;return i.a.createElement(f.b,{onSubmit:t},i.a.createElement(f.a,{key:"submit",type:"button",onClick:t,size:"medium"},"Purchase"))}}),i.a.createElement("h2",null,"List for sale"),i.a.createElement(m.ContractForm,{contract:"BootlegTraderApp",method:"setTokenPrice",render:function(e){var t=e.inputs,n=e.inputTypes,a=e.state,s=e.handleInputChange,u=e.handleSubmit;return i.a.createElement(f.b,{onSubmit:u},t.map(function(e,t){return i.a.createElement(f.c,{style:{fontSize:30},key:e.name,type:n[t],name:e.name,value:a[e.name],placeholder:e.name,onChange:s})}),i.a.createElement(f.a,{key:"submit",type:"button",onClick:u,size:"medium"},"List for sale"))}})))},function(e){return{accounts:e.accounts,drizzleStatus:e.drizzleStatus}}),x=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement(y.DrizzleProvider,{options:b},i.a.createElement(m.LoadingContainer,null,i.a.createElement(g,null)))}}]),t}(a.Component);u.a.render(i.a.createElement(x,null),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.b5e24bb6.chunk.js.map