function w(){}function I(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function T(){return Object.create(null)}function p(t){t.forEach(q)}function B(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let g;function ft(t,e){return g||(g=document.createElement("a")),g.href=e,t===g.href}function J(t){return Object.keys(t).length===0}function K(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(K(e,n))}function _t(t,e,n,i){if(t){const r=H(t,e,n,i);return t[0](r)}}function H(t,e,n,i){return t[1]&&i?I(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,o){if(r){const c=H(e,n,i,o);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let E=!1;function Q(){E=!0}function R(){E=!1}function W(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:W(1,r,y=>e[n[y]].claim_order,l))-1;i[s]=n[a]+1;const f=a+1;n[f]=s,r=Math.max(f,r)}const o=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(c[s],a)}}function V(t,e){if(E){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){E&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function gt(){return S(" ")}function xt(){return S("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,e,n,i,r=!1){et(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,e,n,i){return L(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function wt(t,e,n){return O(t,e,n,Y)}function Et(t,e,n){return O(t,e,n,Z)}function nt(t,e){return L(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function vt(t){return nt(t," ")}function Nt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function At(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function jt(t,e){return new t(e)}let m;function h(t){m=t}function P(){if(!m)throw new Error("Function called outside component initialization");return m}function Ct(t){P().$$.on_mount.push(t)}function Tt(t){P().$$.after_update.push(t)}const d=[],M=[],b=[],D=[],z=Promise.resolve();let N=!1;function F(){N||(N=!0,z.then(G))}function Mt(){return F(),z}function A(t){b.push(t)}const v=new Set;let x=0;function G(){const t=m;do{for(;x<d.length;){const e=d[x];x++,h(e),it(e.$$)}for(h(null),d.length=0,x=0;M.length;)M.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];v.has(n)||(v.add(n),n())}b.length=0}while(d.length);for(;D.length;)D.pop()();N=!1,v.clear(),h(t)}function it(t){if(t.fragment!==null){t.update(),p(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const $=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function kt(){_.r||p(_.c),_=_.p}function rt(t,e){t&&t.i&&($.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Bt(t){t&&t.c()}function Ht(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const c=t.$$.on_mount.map(q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...c):p(c),t.$$.on_mount=[]}),o.forEach(A)}function st(t,e){const n=t.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,i,r,o,c,u=[-1]){const s=m;h(t);const l=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,y,...j)=>{const C=j.length?j[0]:y;return l.ctx&&r(l.ctx[f],l.ctx[f]=C)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](C),a&&lt(t,f)),y}):[],l.update(),a=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){Q();const f=tt(e.target);l.fragment&&l.fragment.l(f),f.forEach(X)}else l.fragment&&l.fragment.c();e.intro&&rt(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),R(),G()}h(s)}class Ot{$destroy(){st(this,1),this.$destroy=w}$on(e,n){if(!B(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!J(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let k="",ut="";function Pt(t){k=t.base,ut=t.assets||k}export{Mt as A,Pt as B,w as C,ut as D,Z as E,Et as F,ft as G,V as H,bt as I,yt as J,at as K,_t as L,ht as M,mt as N,dt as O,St as P,k as Q,Ot as S,gt as a,pt as b,vt as c,kt as d,xt as e,rt as f,Dt as g,X as h,Lt as i,Tt as j,Y as k,wt as l,tt as m,$t as n,Ct as o,At as p,S as q,nt as r,ot as s,qt as t,Nt as u,jt as v,Bt as w,Ht as x,ct as y,st as z};
