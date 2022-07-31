(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(1391)}])},6801:function(n,e,t){"use strict";t.d(e,{Z:function(){return O}});var r=t(5893),i=t(8527),o=t(7496),l=t(5193),c=t(894),s=t(7294),a=t(3750),u=t(9008),d=t.n(u);var f=function(n){var e=n.title,t=void 0===e?"A Portfolio website by @paripsky":e,i=n.description,o=void 0===i?"A portfolio website by Yonatan Paripsky, A full stack web developer":i,l=n.imageUrl;return(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:o}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{property:"og:title",content:t}),(0,r.jsx)("meta",{property:"og:description",content:o}),l&&(0,r.jsx)("meta",{property:"og:image",content:l})]})},h=t(1351),p=t(949),x=t(2846),m=t(1664),v=t.n(m),j=t(1163),g=t(9583),w=t(3854),k=t(1489),b=function(n){n=null!==n?n:(0,h.Z)(new TypeError("Cannot destructure undefined"));var e=function(n){return function(n){return i.pathname.startsWith(n)}(n)?"solid":"ghost"},t=(0,p.ff)(g.TLr,g.Mei),i=(0,j.useRouter)(),o=(0,p.ff)("dark","light"),s=(0,p.If)().toggleColorMode,u=(0,k.m)().onToggle;return(0,r.jsx)(x.m$.header,{pos:"sticky",top:"0",w:"full",zIndex:"1",children:(0,r.jsxs)(x.m$.nav,{display:"flex",p:"2",backdropFilter:"blur(.4em)",bg:"transparent",children:[(0,r.jsx)(v(),{href:"/",passHref:!0,children:(0,r.jsx)(l.zx,{as:"a",variant:"ghost",fontWeight:"normal",children:(0,r.jsx)(x.m$.img,{src:"/favicon.ico",alt:"logo",width:"8"})})}),(0,r.jsx)(v(),{href:"/blog",passHref:!0,children:(0,r.jsx)(l.zx,{as:"a",variant:e("/blog"),fontWeight:"normal",ml:"auto",leftIcon:(0,r.jsx)(c.JO,{as:g.h4d,w:"3",h:"4"}),children:"Blog"})}),(0,r.jsx)(v(),{href:"/lectures",passHref:!0,children:(0,r.jsx)(l.zx,{as:"a",variant:e("/lectures"),fontWeight:"normal",ml:"2",leftIcon:(0,r.jsx)(c.JO,{as:w.suv,w:"5",h:"14"}),children:"Lectures"})}),(0,r.jsx)(l.hU,{size:"md",fontSize:"lg","aria-label":"Toggle terminal",variant:"ghost",color:"current",ml:"2",onClick:u,icon:(0,r.jsx)(a.Rhg,{})}),(0,r.jsx)(l.hU,{size:"md",fontSize:"lg","aria-label":"Switch to ".concat(o," mode"),variant:"ghost",color:"current",ml:"2",onClick:s,icon:(0,r.jsx)(t,{})})]})})},_=t(9815),y=t(7375),C=t(2684),S=t(4612),E=t(3127),z={coinflip:{description:"Flip a coin",handler:function(){var n=Math.random()<.5?"heads":"tails";return"It's ".concat(n,"!")}},tableflip:{description:"Flip a table",handler:function(){return"(\u256f\xb0\u25a1\xb0\uff09\u256f\ufe35 \u253b\u2501\u253b"}},shrug:{description:"Shrug",handler:function(){return"\xaf\\_(\u30c4)_/\xaf"}},eval:{description:"Evaluate a JavaScript expression",handler:function(n){return(0,E.Z)(n.join(" ")).toString()}},close:{description:"Close the terminal",handler:function(n,e){return e.onClose(),"Bye!"}},clear:{description:"Clear the terminal",handler:function(n,e){return e.onClear(),""}},linkedin:{description:"Open my LinkedIn profile",handler:function(){return window.open("https://www.linkedin.com/in/paripsky"),"Linkedin opened in a new tab"}},help:{description:"Show help",handler:function(){var n=Object.keys(z).map((function(n){return"".concat(n,": ").concat(z[n].description)})).join("\n");return"Available commands:\n".concat(n)}}};var I=function(n,e){var t=n.split(" ")[0].toLowerCase(),r=n.split(" ").slice(1);return z[t]?z[t].handler(r,e):"Unknown command: ".concat(t)};var T=function(n){n=null!==n?n:(0,h.Z)(new TypeError("Cannot destructure undefined"));var e=(0,p.ff)("white","black"),t=(0,k.m)(),l=t.isOpen,c=t.onClose,a=t.onOpen,u=(0,s.useRef)(null),d=(0,s.useRef)(null),f=(0,s.useState)([]),x=f[0],m=f[1];return(0,y.O3)({ref:u,handler:c}),(0,s.useEffect)((function(){var n=function(n){if("Backquote"===n.code&&!l)return a(),void n.preventDefault();["Backquote","Escape"].includes(n.code)&&(c(),n.preventDefault())};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[a,c,l]),(0,s.useEffect)((function(){var n;l&&(null===(n=d.current)||void 0===n||n.focus())}),[l]),(0,s.useEffect)((function(){d.current&&d.current.scrollIntoView()}),[x]),(0,r.jsx)(o.Mi,{direction:"top",in:l,style:{zIndex:10},children:(0,r.jsxs)(i.kC,{flexDirection:"column",justifyContent:"center",fontFamily:"'Press Start 2P'",fontSize:(0,C.Sx)({base:"md",md:"xs"}),p:"4",ref:u,maxH:"md",overflow:"auto",bg:e,children:[(0,r.jsx)(i.kC,{flexDirection:"column",bg:e,children:x.map((function(n,e){var t=n.command,o=n.result;return(0,r.jsxs)(i.kC,{flexDirection:"column",children:[(0,r.jsxs)(i.xv,{children:[">",t]}),(0,r.jsx)(i.xv,{whiteSpace:"pre",children:o})]},e)}))}),(0,r.jsxs)(i.kC,{as:"form",onSubmit:function(n){n.preventDefault();var e=n.target[0],t=e.value,r=function(n){return I(n,{onClose:c,onClear:function(){console.log("clear"),m([])}})}(t);r&&m((0,_.Z)(x).concat([{command:t,result:r}])),e.value=""},w:"full",children:[">",(0,r.jsx)(S.II,{ref:d,variant:"unstyled",fontSize:"inherit"})]})]})})};function L(){window.scrollTo({top:0,behavior:"smooth"})}var O=function(n){var e=n.children,t=n.title,u=n.description,d=(0,s.useState)(!1),h=d[0],p=d[1];return(0,s.useEffect)((function(){var n=function(){var n=document.scrollingElement.scrollTop;p(n>100),0===n&&(location.hash="")};return document.addEventListener("scroll",n),function(){return document.removeEventListener("scroll",n)}}),[p]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{title:t,description:u}),(0,r.jsxs)(i.xu,{w:"full",scrollBehavior:"smooth",children:[(0,r.jsx)(T,{}),(0,r.jsx)(b,{}),e,(0,r.jsx)(i.kC,{as:"footer",p:"4",justifyContent:"center",children:"Built with Next.js + Chakra UI"}),(0,r.jsx)(o.pT,{in:h,children:(0,r.jsx)(l.hU,{pos:"fixed",right:"2em",bottom:"1em","aria-label":"Scroll to top",onClick:L,isRound:!0,icon:(0,r.jsx)(c.JO,{as:a.FKi,w:8,h:8})})})]})]})}},1391:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return a}});var r=t(5893),i=t(9876),o=t(8527),l=t(6356),c=t(6801),s=t(9167),a=!0;e.default=function(n){var e=n.posts;return(0,r.jsx)(c.Z,{title:"Blog by @paripsky",children:(0,r.jsx)(o.kC,{alignItems:"center",m:"4",flexDirection:"column",minHeight:"calc(100vh - 144px)",children:(0,r.jsxs)(o.xu,{display:"inline-block",className:"blog-post",maxWidth:"5xl",mx:"auto",children:[(0,r.jsx)(o.X6,{textAlign:"center",fontSize:"4xl",mt:{base:"2em",md:"20vh"},children:"Blog"}),(0,r.jsx)(o.xu,{m:"8",minHeight:"xl",children:e.map((function(n){return(0,r.jsxs)(o.xu,{children:[(0,r.jsx)(o.rU,{href:"/blog/".concat(n.slug),children:(0,r.jsxs)(o.X6,{fontSize:"xl",children:[n.title," ",(0,r.jsx)(i.h0,{mx:"2"})]})}),(0,r.jsxs)(o.xu,{children:[(0,r.jsxs)(o.xv,{as:"span",children:["by ",n.author]}),(0,r.jsxs)(o.xv,{as:"span",ml:"2",fontSize:"md",color:"neutral.300",children:["Last updated ",(0,s.p)((0,s.$)(n.updatedAt))]})]}),(0,r.jsx)(o.xv,{fontSize:"lg",color:"neutral.300",children:n.description}),(0,r.jsx)(o.xu,{mt:"2",children:n.tags.map((function(n){return(0,r.jsx)(l.Vp,{children:n},n)}))})]},n.slug)}))})]})})})}},9167:function(n,e,t){"use strict";function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US";return new Intl.DateTimeFormat(e).format(n)}function i(n){return new Date(n)}t.d(e,{$:function(){return i},p:function(){return r}})},3127:function(__unused_webpack_module,__webpack_exports__){"use strict";function tryEval(command){try{return eval(command)}catch(e){return e.message}}__webpack_exports__.Z=tryEval}},function(n){n.O(0,[445,13,556,467,835,774,888,179],(function(){return e=7801,n(n.s=e);var e}));var e=n.O();_N_E=e}]);