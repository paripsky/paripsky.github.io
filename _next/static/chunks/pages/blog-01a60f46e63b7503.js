(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(1391)}])},6801:function(n,e,t){"use strict";t.d(e,{Z:function(){return L}});var r=t(5893),o=t(3725),i=t(5901),a=t(3894),c=t(4737),l=t(7294),s=t(3750),u=t(9008),d=t.n(u),f=function(n){var e=n.title,t=void 0===e?"A Portfolio website by @yonatanparipsky":e,o=n.description,i=void 0===o?"A portfolio website by Yonatan Paripsky, A full stack web developer":o,a=n.imageUrl;return(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:description",content:i}),a&&(0,r.jsx)("meta",{property:"og:image",content:a})]})},h=t(1351),p=t(8457),m=t(3217),x=t(1664),v=t.n(x),j=t(9583),w=t(3854),g=t(1649),k=t(1489),b=function(n){n=null!==n?n:(0,h.Z)(new TypeError("Cannot destructure undefined"));var e=(0,p.ff)(j.TLr,j.Mei),t=(0,p.ff)("dark","light"),o=(0,p.If)().toggleColorMode,i=(0,k.m)().onToggle;return(0,r.jsx)(m.m$.header,{pos:"sticky",top:"0",w:"full",zIndex:"1",children:(0,r.jsxs)(m.m$.nav,{display:"flex",p:"2",backdropFilter:"blur(.4em)",bg:"transparent",children:[(0,r.jsx)(v(),{href:"/",passHref:!0,children:(0,r.jsx)(a.zx,{as:"a",variant:"ghost",fontWeight:"normal",children:(0,r.jsx)(m.m$.img,{src:"/favicon.ico",alt:"logo",width:"8"})})}),(0,r.jsx)(v(),{href:"/blog",passHref:!0,children:(0,r.jsx)(a.zx,{as:"a",variant:"ghost",ml:"auto",fontWeight:"normal",leftIcon:(0,r.jsx)(c.JO,{as:w.n5C,w:"4",h:"6"}),children:"CV"})}),(0,r.jsx)(v(),{href:"/blog",passHref:!0,children:(0,r.jsx)(a.zx,{as:"a",variant:"ghost",fontWeight:"normal",ml:"2",leftIcon:(0,r.jsx)(c.JO,{as:j.h4d,w:"3",h:"4"}),children:"Blog"})}),(0,r.jsx)(v(),{href:"/game",passHref:!0,children:(0,r.jsx)(a.zx,{as:"a",variant:"ghost",fontWeight:"normal",ml:"2",leftIcon:(0,r.jsx)(c.JO,{as:g.IUJ,w:"5",h:"14"}),children:"Game"})}),(0,r.jsx)(a.hU,{size:"md",fontSize:"lg","aria-label":"Toggle terminal",variant:"ghost",color:"current",ml:"2",onClick:i,icon:(0,r.jsx)(s.Rhg,{})}),(0,r.jsx)(a.hU,{size:"md",fontSize:"lg","aria-label":"Switch to ".concat(t," mode"),variant:"ghost",color:"current",ml:"2",onClick:o,icon:(0,r.jsx)(e,{})})]})})},_=t(9815),y=t(7375),C=t(3580),E=t(268),S=t(3127),I={coinflip:{description:"Flip a coin",handler:function(){var n=Math.random()<.5?"heads":"tails";return"It's ".concat(n,"!")}},tableflip:{description:"Flip a table",handler:function(){return"(\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b"}},shrug:{description:"Shrug",handler:function(){return"\xaf\\_(\u30c4)_/\xaf"}},eval:{description:"Evaluate a JavaScript expression",handler:function(n){return(0,S.Z)(n.join(" ")).toString()}},close:{description:"Close the terminal",handler:function(n,e){return e.onClose(),"Bye!"}},clear:{description:"Clear the terminal",handler:function(n,e){return e.onClear(),""}},linkedin:{description:"Open my LinkedIn profile",handler:function(){return window.open("https://www.linkedin.com/in/paripsky"),"Linkedin opened in a new tab"}},help:{description:"Show help",handler:function(){var n=Object.keys(I).map((function(n){return"".concat(n,": ").concat(I[n].description)})).join("\n");return"Available commands:\n".concat(n)}}};var z=function(n,e){var t=n.split(" ")[0].toLowerCase(),r=n.split(" ").slice(1);return I[t]?I[t].handler(r,e):"Unknown command: ".concat(t)};var O=function(n){n=null!==n?n:(0,h.Z)(new TypeError("Cannot destructure undefined"));var e=(0,p.ff)("white","black"),t=(0,k.m)(),a=t.isOpen,c=t.onClose,s=t.onOpen,u=(0,l.useRef)(null),d=(0,l.useRef)(null),f=(0,l.useState)([]),m=f[0],x=f[1];return(0,y.O3)({ref:u,handler:c}),(0,l.useEffect)((function(){var n=function(n){if("Backquote"===n.code&&!a)return s(),void n.preventDefault();["Backquote","Escape"].includes(n.code)&&(c(),n.preventDefault())};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[s,c,a]),(0,l.useEffect)((function(){var n;a&&(null===(n=d.current)||void 0===n||n.focus())}),[a]),(0,l.useEffect)((function(){d.current&&d.current.scrollIntoView()}),[m]),(0,r.jsx)(i.Mi,{direction:"top",in:a,style:{zIndex:10},children:(0,r.jsxs)(o.kC,{flexDirection:"column",justifyContent:"center",fontFamily:"'Press Start 2P'",fontSize:(0,C.Sx)({base:"md",md:"xs"}),p:"4",ref:u,maxH:"md",overflow:"auto",bg:e,children:[(0,r.jsx)(o.kC,{flexDirection:"column",bg:e,children:m.map((function(n,e){var t=n.command,i=n.result;return(0,r.jsxs)(o.kC,{flexDirection:"column",children:[(0,r.jsxs)(o.xv,{children:[">",t]}),(0,r.jsx)(o.xv,{whiteSpace:"pre",children:i})]},e)}))}),(0,r.jsxs)(o.kC,{as:"form",onSubmit:function(n){n.preventDefault();var e=n.target[0],t=e.value,r=function(n){return z(n,{onClose:c,onClear:function(){console.log("clear"),x([])}})}(t);r&&x((0,_.Z)(m).concat([{command:t,result:r}])),e.value=""},w:"full",children:[">",(0,r.jsx)(E.II,{ref:d,variant:"unstyled",fontSize:"inherit"})]})]})})};function T(){window.scrollTo({top:0,behavior:"smooth"})}var L=function(n){var e=n.children,t=(0,l.useState)(!1),u=t[0],d=t[1];return(0,l.useEffect)((function(){var n=function(){var n=document.scrollingElement.scrollTop;d(n>100),0===n&&(location.hash="")};return document.addEventListener("scroll",n),function(){return document.removeEventListener("scroll",n)}}),[d]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsxs)(o.xu,{w:"full",scrollBehavior:"smooth",children:[(0,r.jsx)(O,{}),(0,r.jsx)(b,{}),e,(0,r.jsx)(o.kC,{as:"footer",p:"4",justifyContent:"center",children:"Built with Next.js + Chakra UI"}),(0,r.jsx)(i.pT,{in:u,children:(0,r.jsx)(a.hU,{pos:"fixed",right:"2em",bottom:"1em","aria-label":"Scroll to top",onClick:T,isRound:!0,icon:(0,r.jsx)(c.JO,{as:s.FKi,w:8,h:8})})})]})]})}},1391:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return a}});var r=t(5893),o=t(3725),i=t(6801),a=!0;e.default=function(n){var e=n.posts;return(0,r.jsx)(i.Z,{children:(0,r.jsx)(o.xu,{children:e.map((function(n){return(0,r.jsx)(o.xu,{as:"a",href:"/blog/".concat(n.slug),children:n.description},n.slug)}))})})}},3127:function(__unused_webpack_module,__webpack_exports__){"use strict";function tryEval(command){try{return eval(command)}catch(e){return e.message}}__webpack_exports__.Z=tryEval}},function(n){n.O(0,[445,13,866,556,157,774,888,179],(function(){return e=7801,n(n.s=e);var e}));var e=n.O();_N_E=e}]);