"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"Contributing",sidebar_position:1},i=void 0,c={unversionedId:"open-source/contributing",id:"open-source/contributing",title:"Contributing",description:"Create branches from the main branch and name it in accordance to conventional commits here, or follow the examples below:",source:"@site/docs/open-source/contributing.md",sourceDirName:"open-source",slug:"/open-source/contributing",permalink:"/fleek-network-docs/docs/open-source/contributing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Contributing",sidebar_position:1},sidebar:"default",previous:{title:"Code of Conduct",permalink:"/fleek-network-docs/docs/open-source/code-of-conduct"},next:{title:"Whitepaper",permalink:"/fleek-network-docs/docs/whitepaper"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create branches from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch and name it in accordance to ",(0,o.kt)("strong",{parentName:"p"},"conventional commits")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"here"),", or follow the examples below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"test: \ud83d\udc8d Adding missing tests\nfeat: \ud83c\udfb8 A new feature\nfix: \ud83d\udc1b A bug fix\nchore: \ud83e\udd16 Build process or auxiliary tool changes\ndocs: \u270f\ufe0f Documentation only changes\nrefactor: \ud83d\udca1 A code change that neither fixes a bug or adds a feature\nstyle: \ud83d\udc84 Markup, white-space, formatting, missing semi-colons...\n")),(0,o.kt)("p",null,"The following example demonstrates how to branch out from ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"test/a-test-scenario")," branch and committing two changes!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout main\n\ngit checkout -b test/a-test-scenario\n\ngit commit -m 'test: \ud83d\udc8d verified X equals Z when Foobar'\n\ngit commit -m 'refactor: \ud83d\udca1 input value changes'\n")),(0,o.kt)("p",null,"Here's an example of a refactor of a hypothetical ",(0,o.kt)("inlineCode",{parentName:"p"},"address-panel"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout main\n\ngit checkout -b refactor/address-panel\n\ngit commit -m 'fix: \ud83d\udc1b font-size used in the address description'\n\ngit commit -m 'refactor: \ud83d\udca1 simplified markup for the address panel'\n")),(0,o.kt)("p",null,"Once you're done with your feat, chore, test, docs, or task:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Push to ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Psychedelic/DIP721"},"remote origin")),(0,o.kt)("li",{parentName:"ul"},"Create a new PR targeting the base ",(0,o.kt)("strong",{parentName:"li"},"main branch"),", there might be cases where you need to target a different branch in accordance to your use-case"),(0,o.kt)("li",{parentName:"ul"},"Use the naming convention described above, for example, PR named ",(0,o.kt)("inlineCode",{parentName:"li"},"test: some scenario")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"fix: scenario amend x")),(0,o.kt)("li",{parentName:"ul"},"On approval, make sure you have ",(0,o.kt)("inlineCode",{parentName:"li"},"rebased")," to the latest in ",(0,o.kt)("strong",{parentName:"li"},"main"),", fixing any conflicts and preventing any regressions"),(0,o.kt)("li",{parentName:"ul"},"Complete by selecting ",(0,o.kt)("strong",{parentName:"li"},"Squash and Merge"))))}u.isMDXComponent=!0}}]);