(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{1673:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/skills",function(){return t(2329)}])},2329:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return M}});var n=t(5893),o=t(7747),i=t(2916),l=t(1664),s=t.n(l),a=t(7294),u=t(5161),c=t(6625),h=t(4061),f=t(1151),d=t(5029),p=t(9477),x=t(912);let m=()=>matchMedia("(pointer:fine)").matches,v=e=>window.open(e,"_blank");var j=e=>{let r=e.length,t;for(;0!=r;)t=Math.floor(Math.random()*r),r--,[e[r],e[t]]=[e[t],e[r]];return e};let _=e=>{let{children:r,hoverColor:t,href:o,...i}=e,l=new p.Color,s=(0,u.ff)("black","white"),h=m(),d=(0,a.useRef)(),[x,j]=(0,a.useState)(!1);return(0,a.useEffect)(()=>(x&&(document.body.style.cursor="pointer"),()=>{document.body.style.cursor="auto"}),[x]),(0,f.A)(e=>{let{camera:r}=e;d.current&&(d.current.quaternion.copy(r.quaternion),d.current.material.color.lerp(l.set(x?t:s),.1))}),(0,n.jsx)(c.x,{ref:d,onPointerOver:e=>(e.stopPropagation(),j(!0)),onPointerOut:()=>j(!1),onClick:()=>v(o),onPointerUp:()=>!h&&v(o),...i,fontSize:2.5,letterSpacing:-.05,lineHeight:1,"material-toneMapped":!1,children:r})},w=e=>{let{count:r=4,radius:t=20}=e,{colorMode:o}=(0,u.If)(),i=(0,a.useMemo)(()=>j((0,x.Z)(o)),[o]),l=(0,a.useMemo)(()=>{let e=[],n=new p.Spherical,o=Math.PI/(r+1),l=2*Math.PI/r,s=0;for(let h=1;h<r+1;h++)for(let f=0;f<r;f++,s++){var a,u,c;e.push([new p.Vector3().setFromSpherical(n.set(t,o*h,l*f)),null===(a=i[s])||void 0===a?void 0:a["aria-label"],null===(u=i[s])||void 0===u?void 0:u.hoverColor,null===(c=i[s])||void 0===c?void 0:c.href])}return e},[r,t,i]);return(0,n.jsx)("group",{children:l.map((e,r)=>{let[t,o,i,l]=e;return(0,n.jsx)(_,{position:t,hoverColor:i,href:l,children:o},r)})})};var g=()=>(0,n.jsxs)(d.Xz,{dpr:[1,2],camera:{position:[0,0,35],fov:90},children:[(0,n.jsx)("fog",{attach:"fog",args:["#202025",0,80]}),(0,n.jsx)(w,{count:7,radius:20}),(0,n.jsx)(h.$,{})]}),k=t(6192),b=t(5336),M=e=>{let{}=e;return(0,n.jsxs)(k.Z,{title:"Skills",children:[(0,n.jsx)(o.xu,{h:b.c,maxH:b.c,children:(0,n.jsx)(g,{})}),(0,n.jsx)(o.xu,{position:"fixed",bottom:"2",right:"2",children:(0,n.jsx)(s(),{href:"/",passHref:!0,children:(0,n.jsx)(i.z,{as:"a",fontWeight:"normal",children:"Back"})})})]})}}},function(e){e.O(0,[907,13,445,415,737,175,63,21,774,888,179],function(){return e(e.s=1673)}),_N_E=e.O()}]);