var Sa=Object.defineProperty;var _a=(s,t,e)=>t in s?Sa(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var A=(s,t,e)=>_a(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Xe(s){return s+.5|0}const Lt=(s,t,e)=>Math.max(Math.min(s,e),t);function Ae(s){return Lt(Xe(s*2.55),0,255)}function Ht(s){return Lt(Xe(s*255),0,255)}function Mt(s){return Lt(Xe(s/2.55)/100,0,1)}function qi(s){return Lt(Xe(s*100),0,100)}const ut={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},pi=[..."0123456789ABCDEF"],Ca=s=>pi[s&15],Ea=s=>pi[(s&240)>>4]+pi[s&15],ss=s=>(s&240)>>4===(s&15),Aa=s=>ss(s.r)&&ss(s.g)&&ss(s.b)&&ss(s.a);function Ma(s){var t=s.length,e;return s[0]==="#"&&(t===4||t===5?e={r:255&ut[s[1]]*17,g:255&ut[s[2]]*17,b:255&ut[s[3]]*17,a:t===5?ut[s[4]]*17:255}:(t===7||t===9)&&(e={r:ut[s[1]]<<4|ut[s[2]],g:ut[s[3]]<<4|ut[s[4]],b:ut[s[5]]<<4|ut[s[6]],a:t===9?ut[s[7]]<<4|ut[s[8]]:255})),e}const Pa=(s,t)=>s<255?t(s):"";function Da(s){var t=Aa(s)?Ca:Ea;return s?"#"+t(s.r)+t(s.g)+t(s.b)+Pa(s.a,t):void 0}const Ra=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function wo(s,t,e){const i=t*Math.min(e,1-e),n=(o,a=(o+s/30)%12)=>e-i*Math.max(Math.min(a-3,9-a,1),-1);return[n(0),n(8),n(4)]}function Ia(s,t,e){const i=(n,o=(n+s/60)%6)=>e-e*t*Math.max(Math.min(o,4-o,1),0);return[i(5),i(3),i(1)]}function $a(s,t,e){const i=wo(s,1,.5);let n;for(t+e>1&&(n=1/(t+e),t*=n,e*=n),n=0;n<3;n++)i[n]*=1-t-e,i[n]+=t;return i}function Ta(s,t,e,i,n){return s===n?(t-e)/i+(t<e?6:0):t===n?(e-s)/i+2:(s-t)/i+4}function Di(s){const e=s.r/255,i=s.g/255,n=s.b/255,o=Math.max(e,i,n),a=Math.min(e,i,n),r=(o+a)/2;let l,d,c;return o!==a&&(c=o-a,d=r>.5?c/(2-o-a):c/(o+a),l=Ta(e,i,n,c,o),l=l*60+.5),[l|0,d||0,r]}function Ri(s,t,e,i){return(Array.isArray(t)?s(t[0],t[1],t[2]):s(t,e,i)).map(Ht)}function Ii(s,t,e){return Ri(wo,s,t,e)}function Oa(s,t,e){return Ri($a,s,t,e)}function Ba(s,t,e){return Ri(Ia,s,t,e)}function ko(s){return(s%360+360)%360}function La(s){const t=Ra.exec(s);let e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?Ae(+t[5]):Ht(+t[5]));const n=ko(+t[2]),o=+t[3]/100,a=+t[4]/100;return t[1]==="hwb"?i=Oa(n,o,a):t[1]==="hsv"?i=Ba(n,o,a):i=Ii(n,o,a),{r:i[0],g:i[1],b:i[2],a:e}}function ja(s,t){var e=Di(s);e[0]=ko(e[0]+t),e=Ii(e),s.r=e[0],s.g=e[1],s.b=e[2]}function Fa(s){if(!s)return;const t=Di(s),e=t[0],i=qi(t[1]),n=qi(t[2]);return s.a<255?`hsla(${e}, ${i}%, ${n}%, ${Mt(s.a)})`:`hsl(${e}, ${i}%, ${n}%)`}const Ki={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Yi={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Na(){const s={},t=Object.keys(Yi),e=Object.keys(Ki);let i,n,o,a,r;for(i=0;i<t.length;i++){for(a=r=t[i],n=0;n<e.length;n++)o=e[n],r=r.replace(o,Ki[o]);o=parseInt(Yi[a],16),s[r]=[o>>16&255,o>>8&255,o&255]}return s}let is;function Va(s){is||(is=Na(),is.transparent=[0,0,0,0]);const t=is[s.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Ha=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function za(s){const t=Ha.exec(s);let e=255,i,n,o;if(t){if(t[7]!==i){const a=+t[7];e=t[8]?Ae(a):Lt(a*255,0,255)}return i=+t[1],n=+t[3],o=+t[5],i=255&(t[2]?Ae(i):Lt(i,0,255)),n=255&(t[4]?Ae(n):Lt(n,0,255)),o=255&(t[6]?Ae(o):Lt(o,0,255)),{r:i,g:n,b:o,a:e}}}function Wa(s){return s&&(s.a<255?`rgba(${s.r}, ${s.g}, ${s.b}, ${Mt(s.a)})`:`rgb(${s.r}, ${s.g}, ${s.b})`)}const Xs=s=>s<=.0031308?s*12.92:Math.pow(s,1/2.4)*1.055-.055,ue=s=>s<=.04045?s/12.92:Math.pow((s+.055)/1.055,2.4);function Ga(s,t,e){const i=ue(Mt(s.r)),n=ue(Mt(s.g)),o=ue(Mt(s.b));return{r:Ht(Xs(i+e*(ue(Mt(t.r))-i))),g:Ht(Xs(n+e*(ue(Mt(t.g))-n))),b:Ht(Xs(o+e*(ue(Mt(t.b))-o))),a:s.a+e*(t.a-s.a)}}function ns(s,t,e){if(s){let i=Di(s);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=Ii(i),s.r=i[0],s.g=i[1],s.b=i[2]}}function So(s,t){return s&&Object.assign(t||{},s)}function Ji(s){var t={r:0,g:0,b:0,a:255};return Array.isArray(s)?s.length>=3&&(t={r:s[0],g:s[1],b:s[2],a:255},s.length>3&&(t.a=Ht(s[3]))):(t=So(s,{r:0,g:0,b:0,a:1}),t.a=Ht(t.a)),t}function Ua(s){return s.charAt(0)==="r"?za(s):La(s)}class ze{constructor(t){if(t instanceof ze)return t;const e=typeof t;let i;e==="object"?i=Ji(t):e==="string"&&(i=Ma(t)||Va(t)||Ua(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=So(this._rgb);return t&&(t.a=Mt(t.a)),t}set rgb(t){this._rgb=Ji(t)}rgbString(){return this._valid?Wa(this._rgb):void 0}hexString(){return this._valid?Da(this._rgb):void 0}hslString(){return this._valid?Fa(this._rgb):void 0}mix(t,e){if(t){const i=this.rgb,n=t.rgb;let o;const a=e===o?.5:e,r=2*a-1,l=i.a-n.a,d=((r*l===-1?r:(r+l)/(1+r*l))+1)/2;o=1-d,i.r=255&d*i.r+o*n.r+.5,i.g=255&d*i.g+o*n.g+.5,i.b=255&d*i.b+o*n.b+.5,i.a=a*i.a+(1-a)*n.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=Ga(this._rgb,t._rgb,e)),this}clone(){return new ze(this.rgb)}alpha(t){return this._rgb.a=Ht(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Xe(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return ns(this._rgb,2,t),this}darken(t){return ns(this._rgb,2,-t),this}saturate(t){return ns(this._rgb,1,t),this}desaturate(t){return ns(this._rgb,1,-t),this}rotate(t){return ja(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Ct(){}const qa=(()=>{let s=0;return()=>s++})();function I(s){return s==null}function V(s){if(Array.isArray&&Array.isArray(s))return!0;const t=Object.prototype.toString.call(s);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function $(s){return s!==null&&Object.prototype.toString.call(s)==="[object Object]"}function G(s){return(typeof s=="number"||s instanceof Number)&&isFinite(+s)}function dt(s,t){return G(s)?s:t}function D(s,t){return typeof s>"u"?t:s}const Ka=(s,t)=>typeof s=="string"&&s.endsWith("%")?parseFloat(s)/100:+s/t,_o=(s,t)=>typeof s=="string"&&s.endsWith("%")?parseFloat(s)/100*t:+s;function F(s,t,e){if(s&&typeof s.call=="function")return s.apply(e,t)}function L(s,t,e,i){let n,o,a;if(V(s))for(o=s.length,n=0;n<o;n++)t.call(e,s[n],n);else if($(s))for(a=Object.keys(s),o=a.length,n=0;n<o;n++)t.call(e,s[a[n]],a[n])}function $s(s,t){let e,i,n,o;if(!s||!t||s.length!==t.length)return!1;for(e=0,i=s.length;e<i;++e)if(n=s[e],o=t[e],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return!1;return!0}function Ts(s){if(V(s))return s.map(Ts);if($(s)){const t=Object.create(null),e=Object.keys(s),i=e.length;let n=0;for(;n<i;++n)t[e[n]]=Ts(s[e[n]]);return t}return s}function Co(s){return["__proto__","prototype","constructor"].indexOf(s)===-1}function Ya(s,t,e,i){if(!Co(s))return;const n=t[s],o=e[s];$(n)&&$(o)?We(n,o,i):t[s]=Ts(o)}function We(s,t,e){const i=V(t)?t:[t],n=i.length;if(!$(s))return s;e=e||{};const o=e.merger||Ya;let a;for(let r=0;r<n;++r){if(a=i[r],!$(a))continue;const l=Object.keys(a);for(let d=0,c=l.length;d<c;++d)o(l[d],s,a,e)}return s}function Oe(s,t){return We(s,t,{merger:Ja})}function Ja(s,t,e){if(!Co(s))return;const i=t[s],n=e[s];$(i)&&$(n)?Oe(i,n):Object.prototype.hasOwnProperty.call(t,s)||(t[s]=Ts(n))}const Xi={"":s=>s,x:s=>s.x,y:s=>s.y};function Xa(s){const t=s.split("."),e=[];let i="";for(const n of t)i+=n,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function Za(s){const t=Xa(s);return e=>{for(const i of t){if(i==="")break;e=e&&e[i]}return e}}function zt(s,t){return(Xi[t]||(Xi[t]=Za(t)))(s)}function $i(s){return s.charAt(0).toUpperCase()+s.slice(1)}const Ge=s=>typeof s<"u",Wt=s=>typeof s=="function",Zi=(s,t)=>{if(s.size!==t.size)return!1;for(const e of s)if(!t.has(e))return!1;return!0};function Qa(s){return s.type==="mouseup"||s.type==="click"||s.type==="contextmenu"}const O=Math.PI,N=2*O,tr=N+O,Os=Number.POSITIVE_INFINITY,er=O/180,q=O/2,Kt=O/4,Qi=O*2/3,jt=Math.log10,St=Math.sign;function Be(s,t,e){return Math.abs(s-t)<e}function tn(s){const t=Math.round(s);s=Be(s,t,s/1e3)?t:s;const e=Math.pow(10,Math.floor(jt(s))),i=s/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function sr(s){const t=[],e=Math.sqrt(s);let i;for(i=1;i<e;i++)s%i===0&&(t.push(i),t.push(s/i));return e===(e|0)&&t.push(e),t.sort((n,o)=>n-o).pop(),t}function ir(s){return typeof s=="symbol"||typeof s=="object"&&s!==null&&!(Symbol.toPrimitive in s||"toString"in s||"valueOf"in s)}function ge(s){return!ir(s)&&!isNaN(parseFloat(s))&&isFinite(s)}function nr(s,t){const e=Math.round(s);return e-t<=s&&e+t>=s}function Eo(s,t,e){let i,n,o;for(i=0,n=s.length;i<n;i++)o=s[i][e],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function bt(s){return s*(O/180)}function Ti(s){return s*(180/O)}function en(s){if(!G(s))return;let t=1,e=0;for(;Math.round(s*t)/t!==s;)t*=10,e++;return e}function Ao(s,t){const e=t.x-s.x,i=t.y-s.y,n=Math.sqrt(e*e+i*i);let o=Math.atan2(i,e);return o<-.5*O&&(o+=N),{angle:o,distance:n}}function hi(s,t){return Math.sqrt(Math.pow(t.x-s.x,2)+Math.pow(t.y-s.y,2))}function or(s,t){return(s-t+tr)%N-O}function tt(s){return(s%N+N)%N}function Ue(s,t,e,i){const n=tt(s),o=tt(t),a=tt(e),r=tt(o-n),l=tt(a-n),d=tt(n-o),c=tt(n-a);return n===o||n===a||i&&o===a||r>l&&d<c}function J(s,t,e){return Math.max(t,Math.min(e,s))}function ar(s){return J(s,-32768,32767)}function Pt(s,t,e,i=1e-6){return s>=Math.min(t,e)-i&&s<=Math.max(t,e)+i}function Oi(s,t,e){e=e||(a=>s[a]<t);let i=s.length-1,n=0,o;for(;i-n>1;)o=n+i>>1,e(o)?n=o:i=o;return{lo:n,hi:i}}const Dt=(s,t,e,i)=>Oi(s,e,i?n=>{const o=s[n][t];return o<e||o===e&&s[n+1][t]===e}:n=>s[n][t]<e),rr=(s,t,e)=>Oi(s,e,i=>s[i][t]>=e);function lr(s,t,e){let i=0,n=s.length;for(;i<n&&s[i]<t;)i++;for(;n>i&&s[n-1]>e;)n--;return i>0||n<s.length?s.slice(i,n):s}const Mo=["push","pop","shift","splice","unshift"];function dr(s,t){if(s._chartjs){s._chartjs.listeners.push(t);return}Object.defineProperty(s,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Mo.forEach(e=>{const i="_onData"+$i(e),n=s[e];Object.defineProperty(s,e,{configurable:!0,enumerable:!1,value(...o){const a=n.apply(this,o);return s._chartjs.listeners.forEach(r=>{typeof r[i]=="function"&&r[i](...o)}),a}})})}function sn(s,t){const e=s._chartjs;if(!e)return;const i=e.listeners,n=i.indexOf(t);n!==-1&&i.splice(n,1),!(i.length>0)&&(Mo.forEach(o=>{delete s[o]}),delete s._chartjs)}function Po(s){const t=new Set(s);return t.size===s.length?s:Array.from(t)}const Do=function(){return typeof window>"u"?function(s){return s()}:window.requestAnimationFrame}();function Ro(s,t){let e=[],i=!1;return function(...n){e=n,i||(i=!0,Do.call(window,()=>{i=!1,s.apply(t,e)}))}}function cr(s,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(s,t,i)):s.apply(this,i),t}}const Bi=s=>s==="start"?"left":s==="end"?"right":"center",Q=(s,t,e)=>s==="start"?t:s==="end"?e:(t+e)/2,ur=(s,t,e,i)=>s===(i?"left":"right")?e:s==="center"?(t+e)/2:t;function Io(s,t,e){const i=t.length;let n=0,o=i;if(s._sorted){const{iScale:a,vScale:r,_parsed:l}=s,d=s.dataset&&s.dataset.options?s.dataset.options.spanGaps:null,c=a.axis,{min:u,max:h,minDefined:f,maxDefined:m}=a.getUserBounds();if(f){if(n=Math.min(Dt(l,c,u).lo,e?i:Dt(t,c,a.getPixelForValue(u)).lo),d){const p=l.slice(0,n+1).reverse().findIndex(g=>!I(g[r.axis]));n-=Math.max(0,p)}n=J(n,0,i-1)}if(m){let p=Math.max(Dt(l,a.axis,h,!0).hi+1,e?0:Dt(t,c,a.getPixelForValue(h),!0).hi+1);if(d){const g=l.slice(p-1).findIndex(b=>!I(b[r.axis]));p+=Math.max(0,g)}o=J(p,n,i)-n}else o=i-n}return{start:n,count:o}}function $o(s){const{xScale:t,yScale:e,_scaleRanges:i}=s,n={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return s._scaleRanges=n,!0;const o=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,n),o}const os=s=>s===0||s===1,nn=(s,t,e)=>-(Math.pow(2,10*(s-=1))*Math.sin((s-t)*N/e)),on=(s,t,e)=>Math.pow(2,-10*s)*Math.sin((s-t)*N/e)+1,Le={linear:s=>s,easeInQuad:s=>s*s,easeOutQuad:s=>-s*(s-2),easeInOutQuad:s=>(s/=.5)<1?.5*s*s:-.5*(--s*(s-2)-1),easeInCubic:s=>s*s*s,easeOutCubic:s=>(s-=1)*s*s+1,easeInOutCubic:s=>(s/=.5)<1?.5*s*s*s:.5*((s-=2)*s*s+2),easeInQuart:s=>s*s*s*s,easeOutQuart:s=>-((s-=1)*s*s*s-1),easeInOutQuart:s=>(s/=.5)<1?.5*s*s*s*s:-.5*((s-=2)*s*s*s-2),easeInQuint:s=>s*s*s*s*s,easeOutQuint:s=>(s-=1)*s*s*s*s+1,easeInOutQuint:s=>(s/=.5)<1?.5*s*s*s*s*s:.5*((s-=2)*s*s*s*s+2),easeInSine:s=>-Math.cos(s*q)+1,easeOutSine:s=>Math.sin(s*q),easeInOutSine:s=>-.5*(Math.cos(O*s)-1),easeInExpo:s=>s===0?0:Math.pow(2,10*(s-1)),easeOutExpo:s=>s===1?1:-Math.pow(2,-10*s)+1,easeInOutExpo:s=>os(s)?s:s<.5?.5*Math.pow(2,10*(s*2-1)):.5*(-Math.pow(2,-10*(s*2-1))+2),easeInCirc:s=>s>=1?s:-(Math.sqrt(1-s*s)-1),easeOutCirc:s=>Math.sqrt(1-(s-=1)*s),easeInOutCirc:s=>(s/=.5)<1?-.5*(Math.sqrt(1-s*s)-1):.5*(Math.sqrt(1-(s-=2)*s)+1),easeInElastic:s=>os(s)?s:nn(s,.075,.3),easeOutElastic:s=>os(s)?s:on(s,.075,.3),easeInOutElastic(s){return os(s)?s:s<.5?.5*nn(s*2,.1125,.45):.5+.5*on(s*2-1,.1125,.45)},easeInBack(s){return s*s*((1.70158+1)*s-1.70158)},easeOutBack(s){return(s-=1)*s*((1.70158+1)*s+1.70158)+1},easeInOutBack(s){let t=1.70158;return(s/=.5)<1?.5*(s*s*(((t*=1.525)+1)*s-t)):.5*((s-=2)*s*(((t*=1.525)+1)*s+t)+2)},easeInBounce:s=>1-Le.easeOutBounce(1-s),easeOutBounce(s){return s<1/2.75?7.5625*s*s:s<2/2.75?7.5625*(s-=1.5/2.75)*s+.75:s<2.5/2.75?7.5625*(s-=2.25/2.75)*s+.9375:7.5625*(s-=2.625/2.75)*s+.984375},easeInOutBounce:s=>s<.5?Le.easeInBounce(s*2)*.5:Le.easeOutBounce(s*2-1)*.5+.5};function Li(s){if(s&&typeof s=="object"){const t=s.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function an(s){return Li(s)?s:new ze(s)}function Zs(s){return Li(s)?s:new ze(s).saturate(.5).darken(.1).hexString()}const pr=["x","y","borderWidth","radius","tension"],hr=["color","borderColor","backgroundColor"];function fr(s){s.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),s.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),s.set("animations",{colors:{type:"color",properties:hr},numbers:{type:"number",properties:pr}}),s.describe("animations",{_fallback:"animation"}),s.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function gr(s){s.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const rn=new Map;function mr(s,t){t=t||{};const e=s+JSON.stringify(t);let i=rn.get(e);return i||(i=new Intl.NumberFormat(s,t),rn.set(e,i)),i}function Ze(s,t,e){return mr(t,e).format(s)}const To={values(s){return V(s)?s:""+s},numeric(s,t,e){if(s===0)return"0";const i=this.chart.options.locale;let n,o=s;if(e.length>1){const d=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(d<1e-4||d>1e15)&&(n="scientific"),o=br(s,e)}const a=jt(Math.abs(o)),r=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:n,minimumFractionDigits:r,maximumFractionDigits:r};return Object.assign(l,this.options.ticks.format),Ze(s,i,l)},logarithmic(s,t,e){if(s===0)return"0";const i=e[t].significand||s/Math.pow(10,Math.floor(jt(s)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?To.numeric.call(this,s,t,e):""}};function br(s,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&s!==Math.floor(s)&&(e=s-Math.floor(s)),e}var zs={formatters:To};function xr(s){s.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:zs.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),s.route("scale.ticks","color","","color"),s.route("scale.grid","color","","borderColor"),s.route("scale.border","color","","borderColor"),s.route("scale.title","color","","color"),s.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),s.describe("scales",{_fallback:"scale"}),s.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const ae=Object.create(null),fi=Object.create(null);function je(s,t){if(!t)return s;const e=t.split(".");for(let i=0,n=e.length;i<n;++i){const o=e[i];s=s[o]||(s[o]=Object.create(null))}return s}function Qs(s,t,e){return typeof t=="string"?We(je(s,t),e):We(je(s,""),t)}class vr{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,n)=>Zs(n.backgroundColor),this.hoverBorderColor=(i,n)=>Zs(n.borderColor),this.hoverColor=(i,n)=>Zs(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Qs(this,t,e)}get(t){return je(this,t)}describe(t,e){return Qs(fi,t,e)}override(t,e){return Qs(ae,t,e)}route(t,e,i,n){const o=je(this,t),a=je(this,i),r="_"+e;Object.defineProperties(o,{[r]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[r],d=a[n];return $(l)?Object.assign({},d,l):D(l,d)},set(l){this[r]=l}}})}apply(t){t.forEach(e=>e(this))}}var z=new vr({_scriptable:s=>!s.startsWith("on"),_indexable:s=>s!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[fr,gr,xr]);function yr(s){return!s||I(s.size)||I(s.family)?null:(s.style?s.style+" ":"")+(s.weight?s.weight+" ":"")+s.size+"px "+s.family}function Bs(s,t,e,i,n){let o=t[n];return o||(o=t[n]=s.measureText(n).width,e.push(n)),o>i&&(i=o),i}function wr(s,t,e,i){i=i||{};let n=i.data=i.data||{},o=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(n=i.data={},o=i.garbageCollect=[],i.font=t),s.save(),s.font=t;let a=0;const r=e.length;let l,d,c,u,h;for(l=0;l<r;l++)if(u=e[l],u!=null&&!V(u))a=Bs(s,n,o,a,u);else if(V(u))for(d=0,c=u.length;d<c;d++)h=u[d],h!=null&&!V(h)&&(a=Bs(s,n,o,a,h));s.restore();const f=o.length/2;if(f>e.length){for(l=0;l<f;l++)delete n[o[l]];o.splice(0,f)}return a}function Yt(s,t,e){const i=s.currentDevicePixelRatio,n=e!==0?Math.max(e/2,.5):0;return Math.round((t-n)*i)/i+n}function ln(s,t){!t&&!s||(t=t||s.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,s.width,s.height),t.restore())}function gi(s,t,e,i){Oo(s,t,e,i,null)}function Oo(s,t,e,i,n){let o,a,r,l,d,c,u,h;const f=t.pointStyle,m=t.rotation,p=t.radius;let g=(m||0)*er;if(f&&typeof f=="object"&&(o=f.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){s.save(),s.translate(e,i),s.rotate(g),s.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),s.restore();return}if(!(isNaN(p)||p<=0)){switch(s.beginPath(),f){default:n?s.ellipse(e,i,n/2,p,0,0,N):s.arc(e,i,p,0,N),s.closePath();break;case"triangle":c=n?n/2:p,s.moveTo(e+Math.sin(g)*c,i-Math.cos(g)*p),g+=Qi,s.lineTo(e+Math.sin(g)*c,i-Math.cos(g)*p),g+=Qi,s.lineTo(e+Math.sin(g)*c,i-Math.cos(g)*p),s.closePath();break;case"rectRounded":d=p*.516,l=p-d,a=Math.cos(g+Kt)*l,u=Math.cos(g+Kt)*(n?n/2-d:l),r=Math.sin(g+Kt)*l,h=Math.sin(g+Kt)*(n?n/2-d:l),s.arc(e-u,i-r,d,g-O,g-q),s.arc(e+h,i-a,d,g-q,g),s.arc(e+u,i+r,d,g,g+q),s.arc(e-h,i+a,d,g+q,g+O),s.closePath();break;case"rect":if(!m){l=Math.SQRT1_2*p,c=n?n/2:l,s.rect(e-c,i-l,2*c,2*l);break}g+=Kt;case"rectRot":u=Math.cos(g)*(n?n/2:p),a=Math.cos(g)*p,r=Math.sin(g)*p,h=Math.sin(g)*(n?n/2:p),s.moveTo(e-u,i-r),s.lineTo(e+h,i-a),s.lineTo(e+u,i+r),s.lineTo(e-h,i+a),s.closePath();break;case"crossRot":g+=Kt;case"cross":u=Math.cos(g)*(n?n/2:p),a=Math.cos(g)*p,r=Math.sin(g)*p,h=Math.sin(g)*(n?n/2:p),s.moveTo(e-u,i-r),s.lineTo(e+u,i+r),s.moveTo(e+h,i-a),s.lineTo(e-h,i+a);break;case"star":u=Math.cos(g)*(n?n/2:p),a=Math.cos(g)*p,r=Math.sin(g)*p,h=Math.sin(g)*(n?n/2:p),s.moveTo(e-u,i-r),s.lineTo(e+u,i+r),s.moveTo(e+h,i-a),s.lineTo(e-h,i+a),g+=Kt,u=Math.cos(g)*(n?n/2:p),a=Math.cos(g)*p,r=Math.sin(g)*p,h=Math.sin(g)*(n?n/2:p),s.moveTo(e-u,i-r),s.lineTo(e+u,i+r),s.moveTo(e+h,i-a),s.lineTo(e-h,i+a);break;case"line":a=n?n/2:Math.cos(g)*p,r=Math.sin(g)*p,s.moveTo(e-a,i-r),s.lineTo(e+a,i+r);break;case"dash":s.moveTo(e,i),s.lineTo(e+Math.cos(g)*(n?n/2:p),i+Math.sin(g)*p);break;case!1:s.closePath();break}s.fill(),t.borderWidth>0&&s.stroke()}}function Rt(s,t,e){return e=e||.5,!t||s&&s.x>t.left-e&&s.x<t.right+e&&s.y>t.top-e&&s.y<t.bottom+e}function Ws(s,t){s.save(),s.beginPath(),s.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),s.clip()}function Gs(s){s.restore()}function kr(s,t,e,i,n){if(!t)return s.lineTo(e.x,e.y);if(n==="middle"){const o=(t.x+e.x)/2;s.lineTo(o,t.y),s.lineTo(o,e.y)}else n==="after"!=!!i?s.lineTo(t.x,e.y):s.lineTo(e.x,t.y);s.lineTo(e.x,e.y)}function Sr(s,t,e,i){if(!t)return s.lineTo(e.x,e.y);s.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function _r(s,t){t.translation&&s.translate(t.translation[0],t.translation[1]),I(t.rotation)||s.rotate(t.rotation),t.color&&(s.fillStyle=t.color),t.textAlign&&(s.textAlign=t.textAlign),t.textBaseline&&(s.textBaseline=t.textBaseline)}function Cr(s,t,e,i,n){if(n.strikethrough||n.underline){const o=s.measureText(i),a=t-o.actualBoundingBoxLeft,r=t+o.actualBoundingBoxRight,l=e-o.actualBoundingBoxAscent,d=e+o.actualBoundingBoxDescent,c=n.strikethrough?(l+d)/2:d;s.strokeStyle=s.fillStyle,s.beginPath(),s.lineWidth=n.decorationWidth||2,s.moveTo(a,c),s.lineTo(r,c),s.stroke()}}function Er(s,t){const e=s.fillStyle;s.fillStyle=t.color,s.fillRect(t.left,t.top,t.width,t.height),s.fillStyle=e}function re(s,t,e,i,n,o={}){const a=V(t)?t:[t],r=o.strokeWidth>0&&o.strokeColor!=="";let l,d;for(s.save(),s.font=n.string,_r(s,o),l=0;l<a.length;++l)d=a[l],o.backdrop&&Er(s,o.backdrop),r&&(o.strokeColor&&(s.strokeStyle=o.strokeColor),I(o.strokeWidth)||(s.lineWidth=o.strokeWidth),s.strokeText(d,e,i,o.maxWidth)),s.fillText(d,e,i,o.maxWidth),Cr(s,e,i,d,o),i+=Number(n.lineHeight);s.restore()}function qe(s,t){const{x:e,y:i,w:n,h:o,radius:a}=t;s.arc(e+a.topLeft,i+a.topLeft,a.topLeft,1.5*O,O,!0),s.lineTo(e,i+o-a.bottomLeft),s.arc(e+a.bottomLeft,i+o-a.bottomLeft,a.bottomLeft,O,q,!0),s.lineTo(e+n-a.bottomRight,i+o),s.arc(e+n-a.bottomRight,i+o-a.bottomRight,a.bottomRight,q,0,!0),s.lineTo(e+n,i+a.topRight),s.arc(e+n-a.topRight,i+a.topRight,a.topRight,0,-q,!0),s.lineTo(e+a.topLeft,i)}const Ar=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Mr=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function Pr(s,t){const e=(""+s).match(Ar);if(!e||e[1]==="normal")return t*1.2;switch(s=+e[2],e[3]){case"px":return s;case"%":s/=100;break}return t*s}const Dr=s=>+s||0;function ji(s,t){const e={},i=$(t),n=i?Object.keys(t):t,o=$(s)?i?a=>D(s[a],s[t[a]]):a=>s[a]:()=>s;for(const a of n)e[a]=Dr(o(a));return e}function Bo(s){return ji(s,{top:"y",right:"x",bottom:"y",left:"x"})}function ie(s){return ji(s,["topLeft","topRight","bottomLeft","bottomRight"])}function st(s){const t=Bo(s);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Y(s,t){s=s||{},t=t||z.font;let e=D(s.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=D(s.style,t.style);i&&!(""+i).match(Mr)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);const n={family:D(s.family,t.family),lineHeight:Pr(D(s.lineHeight,t.lineHeight),e),size:e,style:i,weight:D(s.weight,t.weight),string:""};return n.string=yr(n),n}function Me(s,t,e,i){let n,o,a;for(n=0,o=s.length;n<o;++n)if(a=s[n],a!==void 0&&a!==void 0)return a}function Rr(s,t,e){const{min:i,max:n}=s,o=_o(t,(n-i)/2),a=(r,l)=>e&&r===0?0:r+l;return{min:a(i,-Math.abs(o)),max:a(n,o)}}function Gt(s,t){return Object.assign(Object.create(s),t)}function Fi(s,t=[""],e,i,n=()=>s[0]){const o=e||s;typeof i>"u"&&(i=No("_fallback",s));const a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:s,_rootScopes:o,_fallback:i,_getTarget:n,override:r=>Fi([r,...s],t,o,i)};return new Proxy(a,{deleteProperty(r,l){return delete r[l],delete r._keys,delete s[0][l],!0},get(r,l){return jo(r,l,()=>Fr(l,t,s,r))},getOwnPropertyDescriptor(r,l){return Reflect.getOwnPropertyDescriptor(r._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(s[0])},has(r,l){return cn(r).includes(l)},ownKeys(r){return cn(r)},set(r,l,d){const c=r._storage||(r._storage=n());return r[l]=c[l]=d,delete r._keys,!0}})}function me(s,t,e,i){const n={_cacheable:!1,_proxy:s,_context:t,_subProxy:e,_stack:new Set,_descriptors:Lo(s,i),setContext:o=>me(s,o,e,i),override:o=>me(s.override(o),t,e,i)};return new Proxy(n,{deleteProperty(o,a){return delete o[a],delete s[a],!0},get(o,a,r){return jo(o,a,()=>$r(o,a,r))},getOwnPropertyDescriptor(o,a){return o._descriptors.allKeys?Reflect.has(s,a)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(s,a)},getPrototypeOf(){return Reflect.getPrototypeOf(s)},has(o,a){return Reflect.has(s,a)},ownKeys(){return Reflect.ownKeys(s)},set(o,a,r){return s[a]=r,delete o[a],!0}})}function Lo(s,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:n=t.allKeys}=s;return{allKeys:n,scriptable:e,indexable:i,isScriptable:Wt(e)?e:()=>e,isIndexable:Wt(i)?i:()=>i}}const Ir=(s,t)=>s?s+$i(t):t,Ni=(s,t)=>$(t)&&s!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function jo(s,t,e){if(Object.prototype.hasOwnProperty.call(s,t)||t==="constructor")return s[t];const i=e();return s[t]=i,i}function $r(s,t,e){const{_proxy:i,_context:n,_subProxy:o,_descriptors:a}=s;let r=i[t];return Wt(r)&&a.isScriptable(t)&&(r=Tr(t,r,s,e)),V(r)&&r.length&&(r=Or(t,r,s,a.isIndexable)),Ni(t,r)&&(r=me(r,n,o&&o[t],a)),r}function Tr(s,t,e,i){const{_proxy:n,_context:o,_subProxy:a,_stack:r}=e;if(r.has(s))throw new Error("Recursion detected: "+Array.from(r).join("->")+"->"+s);r.add(s);let l=t(o,a||i);return r.delete(s),Ni(s,l)&&(l=Vi(n._scopes,n,s,l)),l}function Or(s,t,e,i){const{_proxy:n,_context:o,_subProxy:a,_descriptors:r}=e;if(typeof o.index<"u"&&i(s))return t[o.index%t.length];if($(t[0])){const l=t,d=n._scopes.filter(c=>c!==l);t=[];for(const c of l){const u=Vi(d,n,s,c);t.push(me(u,o,a&&a[s],r))}}return t}function Fo(s,t,e){return Wt(s)?s(t,e):s}const Br=(s,t)=>s===!0?t:typeof s=="string"?zt(t,s):void 0;function Lr(s,t,e,i,n){for(const o of t){const a=Br(e,o);if(a){s.add(a);const r=Fo(a._fallback,e,n);if(typeof r<"u"&&r!==e&&r!==i)return r}else if(a===!1&&typeof i<"u"&&e!==i)return null}return!1}function Vi(s,t,e,i){const n=t._rootScopes,o=Fo(t._fallback,e,i),a=[...s,...n],r=new Set;r.add(i);let l=dn(r,a,e,o||e,i);return l===null||typeof o<"u"&&o!==e&&(l=dn(r,a,o,l,i),l===null)?!1:Fi(Array.from(r),[""],n,o,()=>jr(t,e,i))}function dn(s,t,e,i,n){for(;e;)e=Lr(s,t,e,i,n);return e}function jr(s,t,e){const i=s._getTarget();t in i||(i[t]={});const n=i[t];return V(n)&&$(e)?e:n||{}}function Fr(s,t,e,i){let n;for(const o of t)if(n=No(Ir(o,s),e),typeof n<"u")return Ni(s,n)?Vi(e,i,s,n):n}function No(s,t){for(const e of t){if(!e)continue;const i=e[s];if(typeof i<"u")return i}}function cn(s){let t=s._keys;return t||(t=s._keys=Nr(s._scopes)),t}function Nr(s){const t=new Set;for(const e of s)for(const i of Object.keys(e).filter(n=>!n.startsWith("_")))t.add(i);return Array.from(t)}function Vo(s,t,e,i){const{iScale:n}=s,{key:o="r"}=this._parsing,a=new Array(i);let r,l,d,c;for(r=0,l=i;r<l;++r)d=r+e,c=t[d],a[r]={r:n.parse(zt(c,o),d)};return a}const Vr=Number.EPSILON||1e-14,be=(s,t)=>t<s.length&&!s[t].skip&&s[t],Ho=s=>s==="x"?"y":"x";function Hr(s,t,e,i){const n=s.skip?t:s,o=t,a=e.skip?t:e,r=hi(o,n),l=hi(a,o);let d=r/(r+l),c=l/(r+l);d=isNaN(d)?0:d,c=isNaN(c)?0:c;const u=i*d,h=i*c;return{previous:{x:o.x-u*(a.x-n.x),y:o.y-u*(a.y-n.y)},next:{x:o.x+h*(a.x-n.x),y:o.y+h*(a.y-n.y)}}}function zr(s,t,e){const i=s.length;let n,o,a,r,l,d=be(s,0);for(let c=0;c<i-1;++c)if(l=d,d=be(s,c+1),!(!l||!d)){if(Be(t[c],0,Vr)){e[c]=e[c+1]=0;continue}n=e[c]/t[c],o=e[c+1]/t[c],r=Math.pow(n,2)+Math.pow(o,2),!(r<=9)&&(a=3/Math.sqrt(r),e[c]=n*a*t[c],e[c+1]=o*a*t[c])}}function Wr(s,t,e="x"){const i=Ho(e),n=s.length;let o,a,r,l=be(s,0);for(let d=0;d<n;++d){if(a=r,r=l,l=be(s,d+1),!r)continue;const c=r[e],u=r[i];a&&(o=(c-a[e])/3,r[`cp1${e}`]=c-o,r[`cp1${i}`]=u-o*t[d]),l&&(o=(l[e]-c)/3,r[`cp2${e}`]=c+o,r[`cp2${i}`]=u+o*t[d])}}function Gr(s,t="x"){const e=Ho(t),i=s.length,n=Array(i).fill(0),o=Array(i);let a,r,l,d=be(s,0);for(a=0;a<i;++a)if(r=l,l=d,d=be(s,a+1),!!l){if(d){const c=d[t]-l[t];n[a]=c!==0?(d[e]-l[e])/c:0}o[a]=r?d?St(n[a-1])!==St(n[a])?0:(n[a-1]+n[a])/2:n[a-1]:n[a]}zr(s,n,o),Wr(s,o,t)}function as(s,t,e){return Math.max(Math.min(s,e),t)}function Ur(s,t){let e,i,n,o,a,r=Rt(s[0],t);for(e=0,i=s.length;e<i;++e)a=o,o=r,r=e<i-1&&Rt(s[e+1],t),o&&(n=s[e],a&&(n.cp1x=as(n.cp1x,t.left,t.right),n.cp1y=as(n.cp1y,t.top,t.bottom)),r&&(n.cp2x=as(n.cp2x,t.left,t.right),n.cp2y=as(n.cp2y,t.top,t.bottom)))}function qr(s,t,e,i,n){let o,a,r,l;if(t.spanGaps&&(s=s.filter(d=>!d.skip)),t.cubicInterpolationMode==="monotone")Gr(s,n);else{let d=i?s[s.length-1]:s[0];for(o=0,a=s.length;o<a;++o)r=s[o],l=Hr(d,r,s[Math.min(o+1,a-(i?0:1))%a],t.tension),r.cp1x=l.previous.x,r.cp1y=l.previous.y,r.cp2x=l.next.x,r.cp2y=l.next.y,d=r}t.capBezierPoints&&Ur(s,e)}function Hi(){return typeof window<"u"&&typeof document<"u"}function zi(s){let t=s.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Ls(s,t,e){let i;return typeof s=="string"?(i=parseInt(s,10),s.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=s,i}const Us=s=>s.ownerDocument.defaultView.getComputedStyle(s,null);function Kr(s,t){return Us(s).getPropertyValue(t)}const Yr=["top","right","bottom","left"];function ne(s,t,e){const i={};e=e?"-"+e:"";for(let n=0;n<4;n++){const o=Yr[n];i[o]=parseFloat(s[t+"-"+o+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const Jr=(s,t,e)=>(s>0||t>0)&&(!e||!e.shadowRoot);function Xr(s,t){const e=s.touches,i=e&&e.length?e[0]:s,{offsetX:n,offsetY:o}=i;let a=!1,r,l;if(Jr(n,o,s.target))r=n,l=o;else{const d=t.getBoundingClientRect();r=i.clientX-d.left,l=i.clientY-d.top,a=!0}return{x:r,y:l,box:a}}function Zt(s,t){if("native"in s)return s;const{canvas:e,currentDevicePixelRatio:i}=t,n=Us(e),o=n.boxSizing==="border-box",a=ne(n,"padding"),r=ne(n,"border","width"),{x:l,y:d,box:c}=Xr(s,e),u=a.left+(c&&r.left),h=a.top+(c&&r.top);let{width:f,height:m}=t;return o&&(f-=a.width+r.width,m-=a.height+r.height),{x:Math.round((l-u)/f*e.width/i),y:Math.round((d-h)/m*e.height/i)}}function Zr(s,t,e){let i,n;if(t===void 0||e===void 0){const o=s&&zi(s);if(!o)t=s.clientWidth,e=s.clientHeight;else{const a=o.getBoundingClientRect(),r=Us(o),l=ne(r,"border","width"),d=ne(r,"padding");t=a.width-d.width-l.width,e=a.height-d.height-l.height,i=Ls(r.maxWidth,o,"clientWidth"),n=Ls(r.maxHeight,o,"clientHeight")}}return{width:t,height:e,maxWidth:i||Os,maxHeight:n||Os}}const Ft=s=>Math.round(s*10)/10;function Qr(s,t,e,i){const n=Us(s),o=ne(n,"margin"),a=Ls(n.maxWidth,s,"clientWidth")||Os,r=Ls(n.maxHeight,s,"clientHeight")||Os,l=Zr(s,t,e);let{width:d,height:c}=l;if(n.boxSizing==="content-box"){const h=ne(n,"border","width"),f=ne(n,"padding");d-=f.width+h.width,c-=f.height+h.height}return d=Math.max(0,d-o.width),c=Math.max(0,i?d/i:c-o.height),d=Ft(Math.min(d,a,l.maxWidth)),c=Ft(Math.min(c,r,l.maxHeight)),d&&!c&&(c=Ft(d/2)),(t!==void 0||e!==void 0)&&i&&l.height&&c>l.height&&(c=l.height,d=Ft(Math.floor(c*i))),{width:d,height:c}}function un(s,t,e){const i=t||1,n=Ft(s.height*i),o=Ft(s.width*i);s.height=Ft(s.height),s.width=Ft(s.width);const a=s.canvas;return a.style&&(e||!a.style.height&&!a.style.width)&&(a.style.height=`${s.height}px`,a.style.width=`${s.width}px`),s.currentDevicePixelRatio!==i||a.height!==n||a.width!==o?(s.currentDevicePixelRatio=i,a.height=n,a.width=o,s.ctx.setTransform(i,0,0,i,0,0),!0):!1}const tl=function(){let s=!1;try{const t={get passive(){return s=!0,!1}};Hi()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return s}();function pn(s,t){const e=Kr(s,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function Qt(s,t,e,i){return{x:s.x+e*(t.x-s.x),y:s.y+e*(t.y-s.y)}}function el(s,t,e,i){return{x:s.x+e*(t.x-s.x),y:i==="middle"?e<.5?s.y:t.y:i==="after"?e<1?s.y:t.y:e>0?t.y:s.y}}function sl(s,t,e,i){const n={x:s.cp2x,y:s.cp2y},o={x:t.cp1x,y:t.cp1y},a=Qt(s,n,e),r=Qt(n,o,e),l=Qt(o,t,e),d=Qt(a,r,e),c=Qt(r,l,e);return Qt(d,c,e)}const il=function(s,t){return{x(e){return s+s+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},nl=function(){return{x(s){return s},setWidth(s){},textAlign(s){return s},xPlus(s,t){return s+t},leftForLtr(s,t){return s}}};function fe(s,t,e){return s?il(t,e):nl()}function zo(s,t){let e,i;(t==="ltr"||t==="rtl")&&(e=s.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),s.prevTextDirection=i)}function Wo(s,t){t!==void 0&&(delete s.prevTextDirection,s.canvas.style.setProperty("direction",t[0],t[1]))}function Go(s){return s==="angle"?{between:Ue,compare:or,normalize:tt}:{between:Pt,compare:(t,e)=>t-e,normalize:t=>t}}function hn({start:s,end:t,count:e,loop:i,style:n}){return{start:s%e,end:t%e,loop:i&&(t-s+1)%e===0,style:n}}function ol(s,t,e){const{property:i,start:n,end:o}=e,{between:a,normalize:r}=Go(i),l=t.length;let{start:d,end:c,loop:u}=s,h,f;if(u){for(d+=l,c+=l,h=0,f=l;h<f&&a(r(t[d%l][i]),n,o);++h)d--,c--;d%=l,c%=l}return c<d&&(c+=l),{start:d,end:c,loop:u,style:s.style}}function Uo(s,t,e){if(!e)return[s];const{property:i,start:n,end:o}=e,a=t.length,{compare:r,between:l,normalize:d}=Go(i),{start:c,end:u,loop:h,style:f}=ol(s,t,e),m=[];let p=!1,g=null,b,x,k;const v=()=>l(n,k,b)&&r(n,k)!==0,y=()=>r(o,b)===0||l(o,k,b),S=()=>p||v(),_=()=>!p||y();for(let C=c,E=c;C<=u;++C)x=t[C%a],!x.skip&&(b=d(x[i]),b!==k&&(p=l(b,n,o),g===null&&S()&&(g=r(b,n)===0?C:E),g!==null&&_()&&(m.push(hn({start:g,end:C,loop:h,count:a,style:f})),g=null),E=C,k=b));return g!==null&&m.push(hn({start:g,end:u,loop:h,count:a,style:f})),m}function qo(s,t){const e=[],i=s.segments;for(let n=0;n<i.length;n++){const o=Uo(i[n],s.points,t);o.length&&e.push(...o)}return e}function al(s,t,e,i){let n=0,o=t-1;if(e&&!i)for(;n<t&&!s[n].skip;)n++;for(;n<t&&s[n].skip;)n++;for(n%=t,e&&(o+=n);o>n&&s[o%t].skip;)o--;return o%=t,{start:n,end:o}}function rl(s,t,e,i){const n=s.length,o=[];let a=t,r=s[t],l;for(l=t+1;l<=e;++l){const d=s[l%n];d.skip||d.stop?r.skip||(i=!1,o.push({start:t%n,end:(l-1)%n,loop:i}),t=a=d.stop?l:null):(a=l,r.skip&&(t=l)),r=d}return a!==null&&o.push({start:t%n,end:a%n,loop:i}),o}function ll(s,t){const e=s.points,i=s.options.spanGaps,n=e.length;if(!n)return[];const o=!!s._loop,{start:a,end:r}=al(e,n,o,i);if(i===!0)return fn(s,[{start:a,end:r,loop:o}],e,t);const l=r<a?r+n:r,d=!!s._fullLoop&&a===0&&r===n-1;return fn(s,rl(e,a,l,d),e,t)}function fn(s,t,e,i){return!i||!i.setContext||!e?t:dl(s,t,e,i)}function dl(s,t,e,i){const n=s._chart.getContext(),o=gn(s.options),{_datasetIndex:a,options:{spanGaps:r}}=s,l=e.length,d=[];let c=o,u=t[0].start,h=u;function f(m,p,g,b){const x=r?-1:1;if(m!==p){for(m+=l;e[m%l].skip;)m-=x;for(;e[p%l].skip;)p+=x;m%l!==p%l&&(d.push({start:m%l,end:p%l,loop:g,style:b}),c=b,u=p%l)}}for(const m of t){u=r?u:m.start;let p=e[u%l],g;for(h=u+1;h<=m.end;h++){const b=e[h%l];g=gn(i.setContext(Gt(n,{type:"segment",p0:p,p1:b,p0DataIndex:(h-1)%l,p1DataIndex:h%l,datasetIndex:a}))),cl(g,c)&&f(u,h-1,m.loop,c),p=b,c=g}u<h-1&&f(u,h-1,m.loop,c)}return d}function gn(s){return{backgroundColor:s.backgroundColor,borderCapStyle:s.borderCapStyle,borderDash:s.borderDash,borderDashOffset:s.borderDashOffset,borderJoinStyle:s.borderJoinStyle,borderWidth:s.borderWidth,borderColor:s.borderColor}}function cl(s,t){if(!t)return!1;const e=[],i=function(n,o){return Li(o)?(e.includes(o)||e.push(o),e.indexOf(o)):o};return JSON.stringify(s,i)!==JSON.stringify(t,i)}function rs(s,t,e){return s.options.clip?s[e]:t[e]}function ul(s,t){const{xScale:e,yScale:i}=s;return e&&i?{left:rs(e,t,"left"),right:rs(e,t,"right"),top:rs(i,t,"top"),bottom:rs(i,t,"bottom")}:t}function Ko(s,t){const e=t._clip;if(e.disabled)return!1;const i=ul(t,s.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?s.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?s.height:i.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class pl{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,n){const o=e.listeners[n],a=e.duration;o.forEach(r=>r({chart:t,initial:e.initial,numSteps:a,currentStep:Math.min(i-e.start,a)}))}_refresh(){this._request||(this._running=!0,this._request=Do.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,n)=>{if(!i.running||!i.items.length)return;const o=i.items;let a=o.length-1,r=!1,l;for(;a>=0;--a)l=o[a],l._active?(l._total>i.duration&&(i.duration=l._total),l.tick(t),r=!0):(o[a]=o[o.length-1],o.pop());r&&(n.draw(),this._notify(n,i,t,"progress")),o.length||(i.running=!1,this._notify(n,i,t,"complete"),i.initial=!1),e+=o.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,n)=>Math.max(i,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let n=i.length-1;for(;n>=0;--n)i[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Et=new pl;const mn="transparent",hl={boolean(s,t,e){return e>.5?t:s},color(s,t,e){const i=an(s||mn),n=i.valid&&an(t||mn);return n&&n.valid?n.mix(i,e).hexString():t},number(s,t,e){return s+(t-s)*e}};class fl{constructor(t,e,i,n){const o=e[i];n=Me([t.to,n,o,t.from]);const a=Me([t.from,o,n]);this._active=!0,this._fn=t.fn||hl[t.type||typeof a],this._easing=Le[t.easing]||Le.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=a,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const n=this._target[this._prop],o=i-this._start,a=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=Me([t.to,e,n,t.from]),this._from=Me([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,n=this._prop,o=this._from,a=this._loop,r=this._to;let l;if(this._active=o!==r&&(a||e<i),!this._active){this._target[n]=r,this._notify(!0);return}if(e<0){this._target[n]=o;return}l=e/i%2,l=a&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(o,r,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let n=0;n<i.length;n++)i[n][e]()}}class Yo{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!$(t))return;const e=Object.keys(z.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const o=t[n];if(!$(o))return;const a={};for(const r of e)a[r]=o[r];(V(o.properties)&&o.properties||[n]).forEach(r=>{(r===n||!i.has(r))&&i.set(r,a)})})}_animateOptions(t,e){const i=e.options,n=ml(t,i);if(!n)return[];const o=this._createAnimations(n,i);return i.$shared&&gl(t.options.$animations,i).then(()=>{t.options=i},()=>{}),o}_createAnimations(t,e){const i=this._properties,n=[],o=t.$animations||(t.$animations={}),a=Object.keys(e),r=Date.now();let l;for(l=a.length-1;l>=0;--l){const d=a[l];if(d.charAt(0)==="$")continue;if(d==="options"){n.push(...this._animateOptions(t,e));continue}const c=e[d];let u=o[d];const h=i.get(d);if(u)if(h&&u.active()){u.update(h,c,r);continue}else u.cancel();if(!h||!h.duration){t[d]=c;continue}o[d]=u=new fl(h,t,d,c),n.push(u)}return n}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const i=this._createAnimations(t,e);if(i.length)return Et.add(this._chart,i),!0}}function gl(s,t){const e=[],i=Object.keys(t);for(let n=0;n<i.length;n++){const o=s[i[n]];o&&o.active()&&e.push(o.wait())}return Promise.all(e)}function ml(s,t){if(!t)return;let e=s.options;if(!e){s.options=t;return}return e.$shared&&(s.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function bn(s,t){const e=s&&s.options||{},i=e.reverse,n=e.min===void 0?t:0,o=e.max===void 0?t:0;return{start:i?o:n,end:i?n:o}}function bl(s,t,e){if(e===!1)return!1;const i=bn(s,e),n=bn(t,e);return{top:n.end,right:i.end,bottom:n.start,left:i.start}}function xl(s){let t,e,i,n;return $(s)?(t=s.top,e=s.right,i=s.bottom,n=s.left):t=e=i=n=s,{top:t,right:e,bottom:i,left:n,disabled:s===!1}}function Jo(s,t){const e=[],i=s._getSortedDatasetMetas(t);let n,o;for(n=0,o=i.length;n<o;++n)e.push(i[n].index);return e}function xn(s,t,e,i={}){const n=s.keys,o=i.mode==="single";let a,r,l,d;if(t===null)return;let c=!1;for(a=0,r=n.length;a<r;++a){if(l=+n[a],l===e){if(c=!0,i.all)continue;break}d=s.values[l],G(d)&&(o||t===0||St(t)===St(d))&&(t+=d)}return!c&&!i.all?0:t}function vl(s,t){const{iScale:e,vScale:i}=t,n=e.axis==="x"?"x":"y",o=i.axis==="x"?"x":"y",a=Object.keys(s),r=new Array(a.length);let l,d,c;for(l=0,d=a.length;l<d;++l)c=a[l],r[l]={[n]:c,[o]:s[c]};return r}function ti(s,t){const e=s&&s.options.stacked;return e||e===void 0&&t.stack!==void 0}function yl(s,t,e){return`${s.id}.${t.id}.${e.stack||e.type}`}function wl(s){const{min:t,max:e,minDefined:i,maxDefined:n}=s.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:n?e:Number.POSITIVE_INFINITY}}function kl(s,t,e){const i=s[t]||(s[t]={});return i[e]||(i[e]={})}function vn(s,t,e,i){for(const n of t.getMatchingVisibleMetas(i).reverse()){const o=s[n.index];if(e&&o>0||!e&&o<0)return n.index}return null}function yn(s,t){const{chart:e,_cachedMeta:i}=s,n=e._stacks||(e._stacks={}),{iScale:o,vScale:a,index:r}=i,l=o.axis,d=a.axis,c=yl(o,a,i),u=t.length;let h;for(let f=0;f<u;++f){const m=t[f],{[l]:p,[d]:g}=m,b=m._stacks||(m._stacks={});h=b[d]=kl(n,c,p),h[r]=g,h._top=vn(h,a,!0,i.type),h._bottom=vn(h,a,!1,i.type);const x=h._visualValues||(h._visualValues={});x[r]=g}}function ei(s,t){const e=s.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function Sl(s,t){return Gt(s,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function _l(s,t,e){return Gt(s,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function ye(s,t){const e=s.controller.index,i=s.vScale&&s.vScale.axis;if(i){t=t||s._parsed;for(const n of t){const o=n._stacks;if(!o||o[i]===void 0||o[i][e]===void 0)return;delete o[i][e],o[i]._visualValues!==void 0&&o[i]._visualValues[e]!==void 0&&delete o[i]._visualValues[e]}}}const si=s=>s==="reset"||s==="none",wn=(s,t)=>t?s:Object.assign({},s),Cl=(s,t,e)=>s&&!t.hidden&&t._stacked&&{keys:Jo(e,!0),values:null};class xt{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ti(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ye(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),n=(u,h,f,m)=>u==="x"?h:u==="r"?m:f,o=e.xAxisID=D(i.xAxisID,ei(t,"x")),a=e.yAxisID=D(i.yAxisID,ei(t,"y")),r=e.rAxisID=D(i.rAxisID,ei(t,"r")),l=e.indexAxis,d=e.iAxisID=n(l,o,a,r),c=e.vAxisID=n(l,a,o,r);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(a),e.rScale=this.getScaleForId(r),e.iScale=this.getScaleForId(d),e.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&sn(this._data,this),t._stacked&&ye(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if($(e)){const n=this._cachedMeta;this._data=vl(e,n)}else if(i!==e){if(i){sn(i,this);const n=this._cachedMeta;ye(n),n._parsed=[]}e&&Object.isExtensible(e)&&dr(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let n=!1;this._dataCheck();const o=e._stacked;e._stacked=ti(e.vScale,e),e.stack!==i.stack&&(n=!0,ye(e),e.stack=i.stack),this._resyncElements(t),(n||o!==e._stacked)&&(yn(this,e._parsed),e._stacked=ti(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:n}=this,{iScale:o,_stacked:a}=i,r=o.axis;let l=t===0&&e===n.length?!0:i._sorted,d=t>0&&i._parsed[t-1],c,u,h;if(this._parsing===!1)i._parsed=n,i._sorted=!0,h=n;else{V(n[t])?h=this.parseArrayData(i,n,t,e):$(n[t])?h=this.parseObjectData(i,n,t,e):h=this.parsePrimitiveData(i,n,t,e);const f=()=>u[r]===null||d&&u[r]<d[r];for(c=0;c<e;++c)i._parsed[c+t]=u=h[c],l&&(f()&&(l=!1),d=u);i._sorted=l}a&&yn(this,h)}parsePrimitiveData(t,e,i,n){const{iScale:o,vScale:a}=t,r=o.axis,l=a.axis,d=o.getLabels(),c=o===a,u=new Array(n);let h,f,m;for(h=0,f=n;h<f;++h)m=h+i,u[h]={[r]:c||o.parse(d[m],m),[l]:a.parse(e[m],m)};return u}parseArrayData(t,e,i,n){const{xScale:o,yScale:a}=t,r=new Array(n);let l,d,c,u;for(l=0,d=n;l<d;++l)c=l+i,u=e[c],r[l]={x:o.parse(u[0],c),y:a.parse(u[1],c)};return r}parseObjectData(t,e,i,n){const{xScale:o,yScale:a}=t,{xAxisKey:r="x",yAxisKey:l="y"}=this._parsing,d=new Array(n);let c,u,h,f;for(c=0,u=n;c<u;++c)h=c+i,f=e[h],d[c]={x:o.parse(zt(f,r),h),y:a.parse(zt(f,l),h)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const n=this.chart,o=this._cachedMeta,a=e[t.axis],r={keys:Jo(n,!0),values:e._stacks[t.axis]._visualValues};return xn(r,a,o.index,{mode:i})}updateRangeFromParsed(t,e,i,n){const o=i[e.axis];let a=o===null?NaN:o;const r=n&&i._stacks[e.axis];n&&r&&(n.values=r,a=xn(n,o,this._cachedMeta.index)),t.min=Math.min(t.min,a),t.max=Math.max(t.max,a)}getMinMax(t,e){const i=this._cachedMeta,n=i._parsed,o=i._sorted&&t===i.iScale,a=n.length,r=this._getOtherScale(t),l=Cl(e,i,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:u}=wl(r);let h,f;function m(){f=n[h];const p=f[r.axis];return!G(f[t.axis])||c>p||u<p}for(h=0;h<a&&!(!m()&&(this.updateRangeFromParsed(d,t,f,l),o));++h);if(o){for(h=a-1;h>=0;--h)if(!m()){this.updateRangeFromParsed(d,t,f,l);break}}return d}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let n,o,a;for(n=0,o=e.length;n<o;++n)a=e[n][t.axis],G(a)&&i.push(a);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,n=e.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:n?""+n.getLabelForValue(o[n.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=xl(D(this.options.clip,bl(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,n=i.data||[],o=e.chartArea,a=[],r=this._drawStart||0,l=this._drawCount||n.length-r,d=this.options.drawActiveElementsOnTop;let c;for(i.dataset&&i.dataset.draw(t,o,r,l),c=r;c<r+l;++c){const u=n[c];u.hidden||(u.active&&d?a.push(u):u.draw(t,o))}for(c=0;c<a.length;++c)a[c].draw(t,o)}getStyle(t,e){const i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const n=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const a=this._cachedMeta.data[t];o=a.$context||(a.$context=_l(this.getContext(),t,a)),o.parsed=this.getParsed(t),o.raw=n.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=Sl(this.chart.getContext(),this.index)),o.dataset=n,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const n=e==="active",o=this._cachedDataOpts,a=t+"-"+e,r=o[a],l=this.enableOptionSharing&&Ge(i);if(r)return wn(r,l);const d=this.chart.config,c=d.datasetElementScopeKeys(this._type,t),u=n?[`${t}Hover`,"hover",t,""]:[t,""],h=d.getOptionScopes(this.getDataset(),c),f=Object.keys(z.elements[t]),m=()=>this.getContext(i,n,e),p=d.resolveNamedOptions(h,f,m,u);return p.$shared&&(p.$shared=l,o[a]=Object.freeze(wn(p,l))),p}_resolveAnimations(t,e,i){const n=this.chart,o=this._cachedDataOpts,a=`animation-${e}`,r=o[a];if(r)return r;let l;if(n.options.animation!==!1){const c=this.chart.config,u=c.datasetAnimationScopeKeys(this._type,e),h=c.getOptionScopes(this.getDataset(),u);l=c.createResolver(h,this.getContext(t,i,e))}const d=new Yo(n,l&&l.animations);return l&&l._cacheable&&(o[a]=Object.freeze(d)),d}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||si(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const i=this.resolveDataElementOptions(t,e),n=this._sharedOptions,o=this.getSharedOptions(i),a=this.includeOptions(e,o)||o!==n;return this.updateSharedOptions(o,e,i),{sharedOptions:o,includeOptions:a}}updateElement(t,e,i,n){si(n)?Object.assign(t,i):this._resolveAnimations(e,n).update(t,i)}updateSharedOptions(t,e,i){t&&!si(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,n){t.active=n;const o=this.getStyle(e,n);this._resolveAnimations(e,i,n).update(t,{options:!n&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[r,l,d]of this._syncList)this[r](l,d);this._syncList=[];const n=i.length,o=e.length,a=Math.min(o,n);a&&this.parse(0,a),o>n?this._insertElements(n,o-n,t):o<n&&this._removeElements(o,n-o)}_insertElements(t,e,i=!0){const n=this._cachedMeta,o=n.data,a=t+e;let r;const l=d=>{for(d.length+=e,r=d.length-1;r>=a;r--)d[r]=d[r-e]};for(l(o),r=t;r<a;++r)o[r]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,e),i&&this.updateElements(o,t,e,"reset")}updateElements(t,e,i,n){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const n=i._parsed.splice(t,e);i._stacked&&ye(i,n)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,n]=t;this[e](i,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}A(xt,"defaults",{}),A(xt,"datasetElementType",null),A(xt,"dataElementType",null);function El(s,t){if(!s._cache.$bar){const e=s.getMatchingVisibleMetas(t);let i=[];for(let n=0,o=e.length;n<o;n++)i=i.concat(e[n].controller.getAllParsedValues(s));s._cache.$bar=Po(i.sort((n,o)=>n-o))}return s._cache.$bar}function Al(s){const t=s.iScale,e=El(t,s.type);let i=t._length,n,o,a,r;const l=()=>{a===32767||a===-32768||(Ge(r)&&(i=Math.min(i,Math.abs(a-r)||i)),r=a)};for(n=0,o=e.length;n<o;++n)a=t.getPixelForValue(e[n]),l();for(r=void 0,n=0,o=t.ticks.length;n<o;++n)a=t.getPixelForTick(n),l();return i}function Ml(s,t,e,i){const n=e.barThickness;let o,a;return I(n)?(o=t.min*e.categoryPercentage,a=e.barPercentage):(o=n*i,a=1),{chunk:o/i,ratio:a,start:t.pixels[s]-o/2}}function Pl(s,t,e,i){const n=t.pixels,o=n[s];let a=s>0?n[s-1]:null,r=s<n.length-1?n[s+1]:null;const l=e.categoryPercentage;a===null&&(a=o-(r===null?t.end-t.start:r-o)),r===null&&(r=o+o-a);const d=o-(o-Math.min(a,r))/2*l;return{chunk:Math.abs(r-a)/2*l/i,ratio:e.barPercentage,start:d}}function Dl(s,t,e,i){const n=e.parse(s[0],i),o=e.parse(s[1],i),a=Math.min(n,o),r=Math.max(n,o);let l=a,d=r;Math.abs(a)>Math.abs(r)&&(l=r,d=a),t[e.axis]=d,t._custom={barStart:l,barEnd:d,start:n,end:o,min:a,max:r}}function Xo(s,t,e,i){return V(s)?Dl(s,t,e,i):t[e.axis]=e.parse(s,i),t}function kn(s,t,e,i){const n=s.iScale,o=s.vScale,a=n.getLabels(),r=n===o,l=[];let d,c,u,h;for(d=e,c=e+i;d<c;++d)h=t[d],u={},u[n.axis]=r||n.parse(a[d],d),l.push(Xo(h,u,o,d));return l}function ii(s){return s&&s.barStart!==void 0&&s.barEnd!==void 0}function Rl(s,t,e){return s!==0?St(s):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Il(s){let t,e,i,n,o;return s.horizontal?(t=s.base>s.x,e="left",i="right"):(t=s.base<s.y,e="bottom",i="top"),t?(n="end",o="start"):(n="start",o="end"),{start:e,end:i,reverse:t,top:n,bottom:o}}function $l(s,t,e,i){let n=t.borderSkipped;const o={};if(!n){s.borderSkipped=o;return}if(n===!0){s.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:a,end:r,reverse:l,top:d,bottom:c}=Il(s);n==="middle"&&e&&(s.enableBorderRadius=!0,(e._top||0)===i?n=d:(e._bottom||0)===i?n=c:(o[Sn(c,a,r,l)]=!0,n=d)),o[Sn(n,a,r,l)]=!0,s.borderSkipped=o}function Sn(s,t,e,i){return i?(s=Tl(s,t,e),s=_n(s,e,t)):s=_n(s,t,e),s}function Tl(s,t,e){return s===t?e:s===e?t:s}function _n(s,t,e){return s==="start"?t:s==="end"?e:s}function Ol(s,{inflateAmount:t},e){s.inflateAmount=t==="auto"?e===1?.33:0:t}class ws extends xt{parsePrimitiveData(t,e,i,n){return kn(t,e,i,n)}parseArrayData(t,e,i,n){return kn(t,e,i,n)}parseObjectData(t,e,i,n){const{iScale:o,vScale:a}=t,{xAxisKey:r="x",yAxisKey:l="y"}=this._parsing,d=o.axis==="x"?r:l,c=a.axis==="x"?r:l,u=[];let h,f,m,p;for(h=i,f=i+n;h<f;++h)p=e[h],m={},m[o.axis]=o.parse(zt(p,d),h),u.push(Xo(zt(p,c),m,a,h));return u}updateRangeFromParsed(t,e,i,n){super.updateRangeFromParsed(t,e,i,n);const o=i._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:n}=e,o=this.getParsed(t),a=o._custom,r=ii(a)?"["+a.start+", "+a.end+"]":""+n.getLabelForValue(o[n.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:r}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,n){const o=n==="reset",{index:a,_cachedMeta:{vScale:r}}=this,l=r.getBasePixel(),d=r.isHorizontal(),c=this._getRuler(),{sharedOptions:u,includeOptions:h}=this._getSharedOptions(e,n);for(let f=e;f<e+i;f++){const m=this.getParsed(f),p=o||I(m[r.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),g=this._calculateBarIndexPixels(f,c),b=(m._stacks||{})[r.axis],x={horizontal:d,base:p.base,enableBorderRadius:!b||ii(m._custom)||a===b._top||a===b._bottom,x:d?p.head:g.center,y:d?g.center:p.head,height:d?g.size:Math.abs(p.size),width:d?Math.abs(p.size):g.size};h&&(x.options=u||this.resolveDataElementOptions(f,t[f].active?"active":n));const k=x.options||t[f].options;$l(x,k,b,a),Ol(x,k,c.ratio),this.updateElement(t[f],f,x,n)}}_getStacks(t,e){const{iScale:i}=this._cachedMeta,n=i.getMatchingVisibleMetas(this._type).filter(c=>c.controller.options.grouped),o=i.options.stacked,a=[],r=this._cachedMeta.controller.getParsed(e),l=r&&r[i.axis],d=c=>{const u=c._parsed.find(f=>f[i.axis]===l),h=u&&u[c.vScale.axis];if(I(h)||isNaN(h))return!0};for(const c of n)if(!(e!==void 0&&d(c))&&((o===!1||a.indexOf(c.stack)===-1||o===void 0&&c.stack===void 0)&&a.push(c.stack),c.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const i of this.chart.data.datasets)t[D(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){const n=this._getStacks(t,i),o=e!==void 0?n.indexOf(e):-1;return o===-1?n.length-1:o}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,n=[];let o,a;for(o=0,a=e.data.length;o<a;++o)n.push(i.getPixelForValue(this.getParsed(o)[i.axis],o));const r=t.barThickness;return{min:r||Al(e),pixels:n,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:r?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i,index:n},options:{base:o,minBarLength:a}}=this,r=o||0,l=this.getParsed(t),d=l._custom,c=ii(d);let u=l[e.axis],h=0,f=i?this.applyStack(e,l,i):u,m,p;f!==u&&(h=f-u,f=u),c&&(u=d.barStart,f=d.barEnd-d.barStart,u!==0&&St(u)!==St(d.barEnd)&&(h=0),h+=u);const g=!I(o)&&!c?o:h;let b=e.getPixelForValue(g);if(this.chart.getDataVisibility(t)?m=e.getPixelForValue(h+f):m=b,p=m-b,Math.abs(p)<a){p=Rl(p,e,r)*a,u===r&&(b-=p/2);const x=e.getPixelForDecimal(0),k=e.getPixelForDecimal(1),v=Math.min(x,k),y=Math.max(x,k);b=Math.max(Math.min(b,y),v),m=b+p,i&&!c&&(l._stacks[e.axis]._visualValues[n]=e.getValueForPixel(m)-e.getValueForPixel(b))}if(b===e.getPixelForValue(r)){const x=St(p)*e.getLineWidthForValue(r)/2;b+=x,p-=x}return{size:p,base:b,head:m,center:m+p/2}}_calculateBarIndexPixels(t,e){const i=e.scale,n=this.options,o=n.skipNull,a=D(n.maxBarThickness,1/0);let r,l;const d=this._getAxisCount();if(e.grouped){const c=o?this._getStackCount(t):e.stackCount,u=n.barThickness==="flex"?Pl(t,e,n,c*d):Ml(t,e,n,c*d),h=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(D(h,this.getFirstScaleIdForIndexAxis())),m=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+f;r=u.start+u.chunk*m+u.chunk/2,l=Math.min(a,u.chunk*u.ratio)}else r=i.getPixelForValue(this.getParsed(t)[i.axis],t),l=Math.min(a,e.min*e.ratio);return{base:r-l/2,head:r+l/2,center:r,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,n=i.length;let o=0;for(;o<n;++o)this.getParsed(o)[e.axis]!==null&&!i[o].hidden&&i[o].draw(this._ctx)}}A(ws,"id","bar"),A(ws,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),A(ws,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class ks extends xt{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,n){const o=super.parsePrimitiveData(t,e,i,n);for(let a=0;a<o.length;a++)o[a]._custom=this.resolveDataElementOptions(a+i).radius;return o}parseArrayData(t,e,i,n){const o=super.parseArrayData(t,e,i,n);for(let a=0;a<o.length;a++){const r=e[i+a];o[a]._custom=D(r[2],this.resolveDataElementOptions(a+i).radius)}return o}parseObjectData(t,e,i,n){const o=super.parseObjectData(t,e,i,n);for(let a=0;a<o.length;a++){const r=e[i+a];o[a]._custom=D(r&&r.r&&+r.r,this.resolveDataElementOptions(a+i).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:o}=e,a=this.getParsed(t),r=n.getLabelForValue(a.x),l=o.getLabelForValue(a.y),d=a._custom;return{label:i[t]||"",value:"("+r+", "+l+(d?", "+d:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,n){const o=n==="reset",{iScale:a,vScale:r}=this._cachedMeta,{sharedOptions:l,includeOptions:d}=this._getSharedOptions(e,n),c=a.axis,u=r.axis;for(let h=e;h<e+i;h++){const f=t[h],m=!o&&this.getParsed(h),p={},g=p[c]=o?a.getPixelForDecimal(.5):a.getPixelForValue(m[c]),b=p[u]=o?r.getBasePixel():r.getPixelForValue(m[u]);p.skip=isNaN(g)||isNaN(b),d&&(p.options=l||this.resolveDataElementOptions(h,f.active?"active":n),o&&(p.options.radius=0)),this.updateElement(f,h,p,n)}}resolveDataElementOptions(t,e){const i=this.getParsed(t);let n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const o=n.radius;return e!=="active"&&(n.radius=0),n.radius+=D(i&&i._custom,o),n}}A(ks,"id","bubble"),A(ks,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),A(ks,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function Bl(s,t,e){let i=1,n=1,o=0,a=0;if(t<N){const r=s,l=r+t,d=Math.cos(r),c=Math.sin(r),u=Math.cos(l),h=Math.sin(l),f=(k,v,y)=>Ue(k,r,l,!0)?1:Math.max(v,v*e,y,y*e),m=(k,v,y)=>Ue(k,r,l,!0)?-1:Math.min(v,v*e,y,y*e),p=f(0,d,u),g=f(q,c,h),b=m(O,d,u),x=m(O+q,c,h);i=(p-b)/2,n=(g-x)/2,o=-(p+b)/2,a=-(g+x)/2}return{ratioX:i,ratioY:n,offsetX:o,offsetY:a}}class se extends xt{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=i;else{let o=l=>+i[l];if($(i[t])){const{key:l="value"}=this._parsing;o=d=>+zt(i[d],l)}let a,r;for(a=t,r=t+e;a<r;++a)n._parsed[a]=o(a)}}_getRotation(){return bt(this.options.rotation-90)}_getCircumference(){return bt(this.options.circumference)}_getRotationExtents(){let t=N,e=-N;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){const n=this.chart.getDatasetMeta(i).controller,o=n._getRotation(),a=n._getCircumference();t=Math.min(t,o),e=Math.max(e,o+a)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,n=this._cachedMeta,o=n.data,a=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,r=Math.max((Math.min(i.width,i.height)-a)/2,0),l=Math.min(Ka(this.options.cutout,r),1),d=this._getRingWeight(this.index),{circumference:c,rotation:u}=this._getRotationExtents(),{ratioX:h,ratioY:f,offsetX:m,offsetY:p}=Bl(u,c,l),g=(i.width-a)/h,b=(i.height-a)/f,x=Math.max(Math.min(g,b)/2,0),k=_o(this.options.radius,x),v=Math.max(k*l,0),y=(k-v)/this._getVisibleDatasetWeightTotal();this.offsetX=m*k,this.offsetY=p*k,n.total=this.calculateTotal(),this.outerRadius=k-y*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-y*d,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){const i=this.options,n=this._cachedMeta,o=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*o/N)}updateElements(t,e,i,n){const o=n==="reset",a=this.chart,r=a.chartArea,d=a.options.animation,c=(r.left+r.right)/2,u=(r.top+r.bottom)/2,h=o&&d.animateScale,f=h?0:this.innerRadius,m=h?0:this.outerRadius,{sharedOptions:p,includeOptions:g}=this._getSharedOptions(e,n);let b=this._getRotation(),x;for(x=0;x<e;++x)b+=this._circumference(x,o);for(x=e;x<e+i;++x){const k=this._circumference(x,o),v=t[x],y={x:c+this.offsetX,y:u+this.offsetY,startAngle:b,endAngle:b+k,circumference:k,outerRadius:m,innerRadius:f};g&&(y.options=p||this.resolveDataElementOptions(x,v.active?"active":n)),b+=k,this.updateElement(v,x,y,n)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let i=0,n;for(n=0;n<e.length;n++){const o=t._parsed[n];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(n)&&!e[n].hidden&&(i+=Math.abs(o))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?N*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=Ze(e._parsed[t],i.options.locale);return{label:n[t]||"",value:o}}getMaxBorderWidth(t){let e=0;const i=this.chart;let n,o,a,r,l;if(!t){for(n=0,o=i.data.datasets.length;n<o;++n)if(i.isDatasetVisible(n)){a=i.getDatasetMeta(n),t=a.data,r=a.controller;break}}if(!t)return 0;for(n=0,o=t.length;n<o;++n)l=r.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,n=t.length;i<n;++i){const o=this.resolveDataElementOptions(i);e=Math.max(e,o.offset||0,o.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(D(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}A(se,"id","doughnut"),A(se,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),A(se,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),A(se,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:i,textAlign:n,color:o,useBorderRadius:a,borderRadius:r}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,d)=>{const u=t.getDatasetMeta(0).controller.getStyle(d);return{text:l,fillStyle:u.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(d),lineDash:u.borderDash,lineDashOffset:u.borderDashOffset,lineJoin:u.borderJoinStyle,lineWidth:u.borderWidth,strokeStyle:u.borderColor,textAlign:n,pointStyle:i,borderRadius:a&&(r||u.borderRadius),index:d}}):[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}});class Ss extends xt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:n=[],_dataset:o}=e,a=this.chart._animationsDisabled;let{start:r,count:l}=Io(e,n,a);this._drawStart=r,this._drawCount=l,$o(e)&&(r=0,l=n.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=n;const d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(i,void 0,{animated:!a,options:d},t),this.updateElements(n,r,l,t)}updateElements(t,e,i,n){const o=n==="reset",{iScale:a,vScale:r,_stacked:l,_dataset:d}=this._cachedMeta,{sharedOptions:c,includeOptions:u}=this._getSharedOptions(e,n),h=a.axis,f=r.axis,{spanGaps:m,segment:p}=this.options,g=ge(m)?m:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||n==="none",x=e+i,k=t.length;let v=e>0&&this.getParsed(e-1);for(let y=0;y<k;++y){const S=t[y],_=b?S:{};if(y<e||y>=x){_.skip=!0;continue}const C=this.getParsed(y),E=I(C[f]),M=_[h]=a.getPixelForValue(C[h],y),P=_[f]=o||E?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,C,l):C[f],y);_.skip=isNaN(M)||isNaN(P)||E,_.stop=y>0&&Math.abs(C[h]-v[h])>g,p&&(_.parsed=C,_.raw=d.data[y]),u&&(_.options=c||this.resolveDataElementOptions(y,S.active?"active":n)),b||this.updateElement(S,y,_,n),v=C}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return i;const o=n[0].size(this.resolveDataElementOptions(0)),a=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,o,a)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}A(Ss,"id","line"),A(Ss,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),A(Ss,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Fe extends xt{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=Ze(e._parsed[t].r,i.options.locale);return{label:n[t]||"",value:o}}parseObjectData(t,e,i,n){return Vo.bind(this)(t,e,i,n)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((i,n)=>{const o=this.getParsed(n).r;!isNaN(o)&&this.chart.getDataVisibility(n)&&(o<e.min&&(e.min=o),o>e.max&&(e.max=o))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(n/2,0),a=Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0),r=(o-a)/t.getVisibleDatasetCount();this.outerRadius=o-r*this.index,this.innerRadius=this.outerRadius-r}updateElements(t,e,i,n){const o=n==="reset",a=this.chart,l=a.options.animation,d=this._cachedMeta.rScale,c=d.xCenter,u=d.yCenter,h=d.getIndexAngle(0)-.5*O;let f=h,m;const p=360/this.countVisibleElements();for(m=0;m<e;++m)f+=this._computeAngle(m,n,p);for(m=e;m<e+i;m++){const g=t[m];let b=f,x=f+this._computeAngle(m,n,p),k=a.getDataVisibility(m)?d.getDistanceFromCenterForValue(this.getParsed(m).r):0;f=x,o&&(l.animateScale&&(k=0),l.animateRotate&&(b=x=h));const v={x:c,y:u,innerRadius:0,outerRadius:k,startAngle:b,endAngle:x,options:this.resolveDataElementOptions(m,g.active?"active":n)};this.updateElement(g,m,v,n)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((i,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?bt(this.resolveDataElementOptions(t,e).angle||i):0}}A(Fe,"id","polarArea"),A(Fe,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),A(Fe,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i,color:n}}=t.legend.options;return e.labels.map((o,a)=>{const l=t.getDatasetMeta(0).controller.getStyle(a);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(a),index:a}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class mi extends se{}A(mi,"id","pie"),A(mi,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class _s extends xt{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,n){return Vo.bind(this)(t,e,i,n)}update(t){const e=this._cachedMeta,i=e.dataset,n=e.data||[],o=e.iScale.getLabels();if(i.points=n,t!=="resize"){const a=this.resolveDatasetElementOptions(t);this.options.showLine||(a.borderWidth=0);const r={_loop:!0,_fullLoop:o.length===n.length,options:a};this.updateElement(i,void 0,r,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,i,n){const o=this._cachedMeta.rScale,a=n==="reset";for(let r=e;r<e+i;r++){const l=t[r],d=this.resolveDataElementOptions(r,l.active?"active":n),c=o.getPointPositionForValue(r,this.getParsed(r).r),u=a?o.xCenter:c.x,h=a?o.yCenter:c.y,f={x:u,y:h,angle:c.angle,skip:isNaN(u)||isNaN(h),options:d};this.updateElement(l,r,f,n)}}}A(_s,"id","radar"),A(_s,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),A(_s,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Cs extends xt{getLabelAndValue(t){const e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:o}=e,a=this.getParsed(t),r=n.getLabelForValue(a.x),l=o.getLabelForValue(a.y);return{label:i[t]||"",value:"("+r+", "+l+")"}}update(t){const e=this._cachedMeta,{data:i=[]}=e,n=this.chart._animationsDisabled;let{start:o,count:a}=Io(e,i,n);if(this._drawStart=o,this._drawCount=a,$o(e)&&(o=0,a=i.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:r,_dataset:l}=e;r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!l._decimated,r.points=i;const d=this.resolveDatasetElementOptions(t);d.segment=this.options.segment,this.updateElement(r,void 0,{animated:!n,options:d},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,o,a,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,n){const o=n==="reset",{iScale:a,vScale:r,_stacked:l,_dataset:d}=this._cachedMeta,c=this.resolveDataElementOptions(e,n),u=this.getSharedOptions(c),h=this.includeOptions(n,u),f=a.axis,m=r.axis,{spanGaps:p,segment:g}=this.options,b=ge(p)?p:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||o||n==="none";let k=e>0&&this.getParsed(e-1);for(let v=e;v<e+i;++v){const y=t[v],S=this.getParsed(v),_=x?y:{},C=I(S[m]),E=_[f]=a.getPixelForValue(S[f],v),M=_[m]=o||C?r.getBasePixel():r.getPixelForValue(l?this.applyStack(r,S,l):S[m],v);_.skip=isNaN(E)||isNaN(M)||C,_.stop=v>0&&Math.abs(S[f]-k[f])>b,g&&(_.parsed=S,_.raw=d.data[v]),h&&(_.options=u||this.resolveDataElementOptions(v,y.active?"active":n)),x||this.updateElement(y,v,_,n),k=S}this.updateSharedOptions(u,n,c)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let r=0;for(let l=e.length-1;l>=0;--l)r=Math.max(r,e[l].size(this.resolveDataElementOptions(l))/2);return r>0&&r}const i=t.dataset,n=i.options&&i.options.borderWidth||0;if(!e.length)return n;const o=e[0].size(this.resolveDataElementOptions(0)),a=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,o,a)/2}}A(Cs,"id","scatter"),A(Cs,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),A(Cs,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var Ll=Object.freeze({__proto__:null,BarController:ws,BubbleController:ks,DoughnutController:se,LineController:Ss,PieController:mi,PolarAreaController:Fe,RadarController:_s,ScatterController:Cs});function Jt(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Wi{constructor(t){A(this,"options");this.options=t||{}}static override(t){Object.assign(Wi.prototype,t)}init(){}formats(){return Jt()}parse(){return Jt()}format(){return Jt()}add(){return Jt()}diff(){return Jt()}startOf(){return Jt()}endOf(){return Jt()}}var jl={_date:Wi};function Fl(s,t,e,i){const{controller:n,data:o,_sorted:a}=s,r=n._cachedMeta.iScale,l=s.dataset&&s.dataset.options?s.dataset.options.spanGaps:null;if(r&&t===r.axis&&t!=="r"&&a&&o.length){const d=r._reversePixels?rr:Dt;if(i){if(n._sharedOptions){const c=o[0],u=typeof c.getRange=="function"&&c.getRange(t);if(u){const h=d(o,t,e-u),f=d(o,t,e+u);return{lo:h.lo,hi:f.hi}}}}else{const c=d(o,t,e);if(l){const{vScale:u}=n._cachedMeta,{_parsed:h}=s,f=h.slice(0,c.lo+1).reverse().findIndex(p=>!I(p[u.axis]));c.lo-=Math.max(0,f);const m=h.slice(c.hi).findIndex(p=>!I(p[u.axis]));c.hi+=Math.max(0,m)}return c}}return{lo:0,hi:o.length-1}}function qs(s,t,e,i,n){const o=s.getSortedVisibleDatasetMetas(),a=e[t];for(let r=0,l=o.length;r<l;++r){const{index:d,data:c}=o[r],{lo:u,hi:h}=Fl(o[r],t,a,n);for(let f=u;f<=h;++f){const m=c[f];m.skip||i(m,d,f)}}}function Nl(s){const t=s.indexOf("x")!==-1,e=s.indexOf("y")!==-1;return function(i,n){const o=t?Math.abs(i.x-n.x):0,a=e?Math.abs(i.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(a,2))}}function ni(s,t,e,i,n){const o=[];return!n&&!s.isPointInArea(t)||qs(s,e,t,function(r,l,d){!n&&!Rt(r,s.chartArea,0)||r.inRange(t.x,t.y,i)&&o.push({element:r,datasetIndex:l,index:d})},!0),o}function Vl(s,t,e,i){let n=[];function o(a,r,l){const{startAngle:d,endAngle:c}=a.getProps(["startAngle","endAngle"],i),{angle:u}=Ao(a,{x:t.x,y:t.y});Ue(u,d,c)&&n.push({element:a,datasetIndex:r,index:l})}return qs(s,e,t,o),n}function Hl(s,t,e,i,n,o){let a=[];const r=Nl(e);let l=Number.POSITIVE_INFINITY;function d(c,u,h){const f=c.inRange(t.x,t.y,n);if(i&&!f)return;const m=c.getCenterPoint(n);if(!(!!o||s.isPointInArea(m))&&!f)return;const g=r(t,m);g<l?(a=[{element:c,datasetIndex:u,index:h}],l=g):g===l&&a.push({element:c,datasetIndex:u,index:h})}return qs(s,e,t,d),a}function oi(s,t,e,i,n,o){return!o&&!s.isPointInArea(t)?[]:e==="r"&&!i?Vl(s,t,e,n):Hl(s,t,e,i,n,o)}function Cn(s,t,e,i,n){const o=[],a=e==="x"?"inXRange":"inYRange";let r=!1;return qs(s,e,t,(l,d,c)=>{l[a]&&l[a](t[e],n)&&(o.push({element:l,datasetIndex:d,index:c}),r=r||l.inRange(t.x,t.y,n))}),i&&!r?[]:o}var zl={modes:{index(s,t,e,i){const n=Zt(t,s),o=e.axis||"x",a=e.includeInvisible||!1,r=e.intersect?ni(s,n,o,i,a):oi(s,n,o,!1,i,a),l=[];return r.length?(s.getSortedVisibleDatasetMetas().forEach(d=>{const c=r[0].index,u=d.data[c];u&&!u.skip&&l.push({element:u,datasetIndex:d.index,index:c})}),l):[]},dataset(s,t,e,i){const n=Zt(t,s),o=e.axis||"xy",a=e.includeInvisible||!1;let r=e.intersect?ni(s,n,o,i,a):oi(s,n,o,!1,i,a);if(r.length>0){const l=r[0].datasetIndex,d=s.getDatasetMeta(l).data;r=[];for(let c=0;c<d.length;++c)r.push({element:d[c],datasetIndex:l,index:c})}return r},point(s,t,e,i){const n=Zt(t,s),o=e.axis||"xy",a=e.includeInvisible||!1;return ni(s,n,o,i,a)},nearest(s,t,e,i){const n=Zt(t,s),o=e.axis||"xy",a=e.includeInvisible||!1;return oi(s,n,o,e.intersect,i,a)},x(s,t,e,i){const n=Zt(t,s);return Cn(s,n,"x",e.intersect,i)},y(s,t,e,i){const n=Zt(t,s);return Cn(s,n,"y",e.intersect,i)}}};const Zo=["left","top","right","bottom"];function we(s,t){return s.filter(e=>e.pos===t)}function En(s,t){return s.filter(e=>Zo.indexOf(e.pos)===-1&&e.box.axis===t)}function ke(s,t){return s.sort((e,i)=>{const n=t?i:e,o=t?e:i;return n.weight===o.weight?n.index-o.index:n.weight-o.weight})}function Wl(s){const t=[];let e,i,n,o,a,r;for(e=0,i=(s||[]).length;e<i;++e)n=s[e],{position:o,options:{stack:a,stackWeight:r=1}}=n,t.push({index:e,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:a&&o+a,stackWeight:r});return t}function Gl(s){const t={};for(const e of s){const{stack:i,pos:n,stackWeight:o}=e;if(!i||!Zo.includes(n))continue;const a=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=o}return t}function Ul(s,t){const e=Gl(s),{vBoxMaxWidth:i,hBoxMaxHeight:n}=t;let o,a,r;for(o=0,a=s.length;o<a;++o){r=s[o];const{fullSize:l}=r.box,d=e[r.stack],c=d&&r.stackWeight/d.weight;r.horizontal?(r.width=c?c*i:l&&t.availableWidth,r.height=n):(r.width=i,r.height=c?c*n:l&&t.availableHeight)}return e}function ql(s){const t=Wl(s),e=ke(t.filter(d=>d.box.fullSize),!0),i=ke(we(t,"left"),!0),n=ke(we(t,"right")),o=ke(we(t,"top"),!0),a=ke(we(t,"bottom")),r=En(t,"x"),l=En(t,"y");return{fullSize:e,leftAndTop:i.concat(o),rightAndBottom:n.concat(l).concat(a).concat(r),chartArea:we(t,"chartArea"),vertical:i.concat(n).concat(l),horizontal:o.concat(a).concat(r)}}function An(s,t,e,i){return Math.max(s[e],t[e])+Math.max(s[i],t[i])}function Qo(s,t){s.top=Math.max(s.top,t.top),s.left=Math.max(s.left,t.left),s.bottom=Math.max(s.bottom,t.bottom),s.right=Math.max(s.right,t.right)}function Kl(s,t,e,i){const{pos:n,box:o}=e,a=s.maxPadding;if(!$(n)){e.size&&(s[n]-=e.size);const u=i[e.stack]||{size:0,count:1};u.size=Math.max(u.size,e.horizontal?o.height:o.width),e.size=u.size/u.count,s[n]+=e.size}o.getPadding&&Qo(a,o.getPadding());const r=Math.max(0,t.outerWidth-An(a,s,"left","right")),l=Math.max(0,t.outerHeight-An(a,s,"top","bottom")),d=r!==s.w,c=l!==s.h;return s.w=r,s.h=l,e.horizontal?{same:d,other:c}:{same:c,other:d}}function Yl(s){const t=s.maxPadding;function e(i){const n=Math.max(t[i]-s[i],0);return s[i]+=n,n}s.y+=e("top"),s.x+=e("left"),e("right"),e("bottom")}function Jl(s,t){const e=t.maxPadding;function i(n){const o={left:0,top:0,right:0,bottom:0};return n.forEach(a=>{o[a]=Math.max(t[a],e[a])}),o}return i(s?["left","right"]:["top","bottom"])}function Pe(s,t,e,i){const n=[];let o,a,r,l,d,c;for(o=0,a=s.length,d=0;o<a;++o){r=s[o],l=r.box,l.update(r.width||t.w,r.height||t.h,Jl(r.horizontal,t));const{same:u,other:h}=Kl(t,e,r,i);d|=u&&n.length,c=c||h,l.fullSize||n.push(r)}return d&&Pe(n,t,e,i)||c}function ls(s,t,e,i,n){s.top=e,s.left=t,s.right=t+i,s.bottom=e+n,s.width=i,s.height=n}function Mn(s,t,e,i){const n=e.padding;let{x:o,y:a}=t;for(const r of s){const l=r.box,d=i[r.stack]||{placed:0,weight:1},c=r.stackWeight/d.weight||1;if(r.horizontal){const u=t.w*c,h=d.size||l.height;Ge(d.start)&&(a=d.start),l.fullSize?ls(l,n.left,a,e.outerWidth-n.right-n.left,h):ls(l,t.left+d.placed,a,u,h),d.start=a,d.placed+=u,a=l.bottom}else{const u=t.h*c,h=d.size||l.width;Ge(d.start)&&(o=d.start),l.fullSize?ls(l,o,n.top,h,e.outerHeight-n.bottom-n.top):ls(l,o,t.top+d.placed,h,u),d.start=o,d.placed+=u,o=l.right}}t.x=o,t.y=a}var et={addBox(s,t){s.boxes||(s.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},s.boxes.push(t)},removeBox(s,t){const e=s.boxes?s.boxes.indexOf(t):-1;e!==-1&&s.boxes.splice(e,1)},configure(s,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(s,t,e,i){if(!s)return;const n=st(s.options.layout.padding),o=Math.max(t-n.width,0),a=Math.max(e-n.height,0),r=ql(s.boxes),l=r.vertical,d=r.horizontal;L(s.boxes,p=>{typeof p.beforeLayout=="function"&&p.beforeLayout()});const c=l.reduce((p,g)=>g.box.options&&g.box.options.display===!1?p:p+1,0)||1,u=Object.freeze({outerWidth:t,outerHeight:e,padding:n,availableWidth:o,availableHeight:a,vBoxMaxWidth:o/2/c,hBoxMaxHeight:a/2}),h=Object.assign({},n);Qo(h,st(i));const f=Object.assign({maxPadding:h,w:o,h:a,x:n.left,y:n.top},n),m=Ul(l.concat(d),u);Pe(r.fullSize,f,u,m),Pe(l,f,u,m),Pe(d,f,u,m)&&Pe(l,f,u,m),Yl(f),Mn(r.leftAndTop,f,u,m),f.x+=f.w,f.y+=f.h,Mn(r.rightAndBottom,f,u,m),s.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},L(r.chartArea,p=>{const g=p.box;Object.assign(g,s.chartArea),g.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class ta{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,n){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):i)}}isAttached(t){return!0}updateConfig(t){}}class Xl extends ta{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Es="$chartjs",Zl={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Pn=s=>s===null||s==="";function Ql(s,t){const e=s.style,i=s.getAttribute("height"),n=s.getAttribute("width");if(s[Es]={initial:{height:i,width:n,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Pn(n)){const o=pn(s,"width");o!==void 0&&(s.width=o)}if(Pn(i))if(s.style.height==="")s.height=s.width/(t||2);else{const o=pn(s,"height");o!==void 0&&(s.height=o)}return s}const ea=tl?{passive:!0}:!1;function td(s,t,e){s&&s.addEventListener(t,e,ea)}function ed(s,t,e){s&&s.canvas&&s.canvas.removeEventListener(t,e,ea)}function sd(s,t){const e=Zl[s.type]||s.type,{x:i,y:n}=Zt(s,t);return{type:e,chart:t,native:s,x:i!==void 0?i:null,y:n!==void 0?n:null}}function js(s,t){for(const e of s)if(e===t||e.contains(t))return!0}function id(s,t,e){const i=s.canvas,n=new MutationObserver(o=>{let a=!1;for(const r of o)a=a||js(r.addedNodes,i),a=a&&!js(r.removedNodes,i);a&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}function nd(s,t,e){const i=s.canvas,n=new MutationObserver(o=>{let a=!1;for(const r of o)a=a||js(r.removedNodes,i),a=a&&!js(r.addedNodes,i);a&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}const Ke=new Map;let Dn=0;function sa(){const s=window.devicePixelRatio;s!==Dn&&(Dn=s,Ke.forEach((t,e)=>{e.currentDevicePixelRatio!==s&&t()}))}function od(s,t){Ke.size||window.addEventListener("resize",sa),Ke.set(s,t)}function ad(s){Ke.delete(s),Ke.size||window.removeEventListener("resize",sa)}function rd(s,t,e){const i=s.canvas,n=i&&zi(i);if(!n)return;const o=Ro((r,l)=>{const d=n.clientWidth;e(r,l),d<n.clientWidth&&e()},window),a=new ResizeObserver(r=>{const l=r[0],d=l.contentRect.width,c=l.contentRect.height;d===0&&c===0||o(d,c)});return a.observe(n),od(s,o),a}function ai(s,t,e){e&&e.disconnect(),t==="resize"&&ad(s)}function ld(s,t,e){const i=s.canvas,n=Ro(o=>{s.ctx!==null&&e(sd(o,s))},s);return td(i,t,n),n}class dd extends ta{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(Ql(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e[Es])return!1;const i=e[Es].initial;["height","width"].forEach(o=>{const a=i[o];I(a)?e.removeAttribute(o):e.setAttribute(o,a)});const n=i.style||{};return Object.keys(n).forEach(o=>{e.style[o]=n[o]}),e.width=e.width,delete e[Es],!0}addEventListener(t,e,i){this.removeEventListener(t,e);const n=t.$proxies||(t.$proxies={}),a={attach:id,detach:nd,resize:rd}[e]||ld;n[e]=a(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),n=i[e];if(!n)return;({attach:ai,detach:ai,resize:ai}[e]||ed)(t,e,n),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,n){return Qr(t,e,i,n)}isAttached(t){const e=t&&zi(t);return!!(e&&e.isConnected)}}function cd(s){return!Hi()||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas?Xl:dd}class vt{constructor(){A(this,"x");A(this,"y");A(this,"active",!1);A(this,"options");A(this,"$animations")}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return ge(this.x)&&ge(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const n={};return t.forEach(o=>{n[o]=i[o]&&i[o].active()?i[o]._to:this[o]}),n}}A(vt,"defaults",{}),A(vt,"defaultRoutes");function ud(s,t){const e=s.options.ticks,i=pd(s),n=Math.min(e.maxTicksLimit||i,i),o=e.major.enabled?fd(t):[],a=o.length,r=o[0],l=o[a-1],d=[];if(a>n)return gd(t,d,o,a/n),d;const c=hd(o,t,n);if(a>0){let u,h;const f=a>1?Math.round((l-r)/(a-1)):null;for(ds(t,d,c,I(f)?0:r-f,r),u=0,h=a-1;u<h;u++)ds(t,d,c,o[u],o[u+1]);return ds(t,d,c,l,I(f)?t.length:l+f),d}return ds(t,d,c),d}function pd(s){const t=s.options.offset,e=s._tickSize(),i=s._length/e+(t?0:1),n=s._maxLength/e;return Math.floor(Math.min(i,n))}function hd(s,t,e){const i=md(s),n=t.length/e;if(!i)return Math.max(n,1);const o=sr(i);for(let a=0,r=o.length-1;a<r;a++){const l=o[a];if(l>n)return l}return Math.max(n,1)}function fd(s){const t=[];let e,i;for(e=0,i=s.length;e<i;e++)s[e].major&&t.push(e);return t}function gd(s,t,e,i){let n=0,o=e[0],a;for(i=Math.ceil(i),a=0;a<s.length;a++)a===o&&(t.push(s[a]),n++,o=e[n*i])}function ds(s,t,e,i,n){const o=D(i,0),a=Math.min(D(n,s.length),s.length);let r=0,l,d,c;for(e=Math.ceil(e),n&&(l=n-i,e=l/Math.floor(l/e)),c=o;c<0;)r++,c=Math.round(o+r*e);for(d=Math.max(o,0);d<a;d++)d===c&&(t.push(s[d]),r++,c=Math.round(o+r*e))}function md(s){const t=s.length;let e,i;if(t<2)return!1;for(i=s[0],e=1;e<t;++e)if(s[e]-s[e-1]!==i)return!1;return i}const bd=s=>s==="left"?"right":s==="right"?"left":s,Rn=(s,t,e)=>t==="top"||t==="left"?s[t]+e:s[t]-e,In=(s,t)=>Math.min(t||s,s);function $n(s,t){const e=[],i=s.length/t,n=s.length;let o=0;for(;o<n;o+=i)e.push(s[Math.floor(o)]);return e}function xd(s,t,e){const i=s.ticks.length,n=Math.min(t,i-1),o=s._startPixel,a=s._endPixel,r=1e-6;let l=s.getPixelForTick(n),d;if(!(e&&(i===1?d=Math.max(l-o,a-l):t===0?d=(s.getPixelForTick(1)-l)/2:d=(l-s.getPixelForTick(n-1))/2,l+=n<t?d:-d,l<o-r||l>a+r)))return l}function vd(s,t){L(s,e=>{const i=e.gc,n=i.length/2;let o;if(n>t){for(o=0;o<n;++o)delete e.data[i[o]];i.splice(0,n)}})}function Se(s){return s.drawTicks?s.tickLength:0}function Tn(s,t){if(!s.display)return 0;const e=Y(s.font,t),i=st(s.padding);return(V(s.text)?s.text.length:1)*e.lineHeight+i.height}function yd(s,t){return Gt(s,{scale:t,type:"scale"})}function wd(s,t,e){return Gt(s,{tick:e,index:t,type:"tick"})}function kd(s,t,e){let i=Bi(s);return(e&&t!=="right"||!e&&t==="right")&&(i=bd(i)),i}function Sd(s,t,e,i){const{top:n,left:o,bottom:a,right:r,chart:l}=s,{chartArea:d,scales:c}=l;let u=0,h,f,m;const p=a-n,g=r-o;if(s.isHorizontal()){if(f=Q(i,o,r),$(e)){const b=Object.keys(e)[0],x=e[b];m=c[b].getPixelForValue(x)+p-t}else e==="center"?m=(d.bottom+d.top)/2+p-t:m=Rn(s,e,t);h=r-o}else{if($(e)){const b=Object.keys(e)[0],x=e[b];f=c[b].getPixelForValue(x)-g+t}else e==="center"?f=(d.left+d.right)/2-g+t:f=Rn(s,e,t);m=Q(i,a,n),u=e==="left"?-q:q}return{titleX:f,titleY:m,maxWidth:h,rotation:u}}class le extends vt{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:n}=this;return t=dt(t,Number.POSITIVE_INFINITY),e=dt(e,Number.NEGATIVE_INFINITY),i=dt(i,Number.POSITIVE_INFINITY),n=dt(n,Number.NEGATIVE_INFINITY),{min:dt(t,i),max:dt(e,n),minDefined:G(t),maxDefined:G(e)}}getMinMax(t){let{min:e,max:i,minDefined:n,maxDefined:o}=this.getUserBounds(),a;if(n&&o)return{min:e,max:i};const r=this.getMatchingVisibleMetas();for(let l=0,d=r.length;l<d;++l)a=r[l].controller.getMinMax(this,t),n||(e=Math.min(e,a.min)),o||(i=Math.max(i,a.max));return e=o&&e>i?i:e,i=n&&e>i?e:i,{min:dt(e,dt(i,e)),max:dt(i,dt(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){F(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:n,grace:o,ticks:a}=this.options,r=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Rr(this,o,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=r<this.ticks.length;this._convertTicksToLabels(l?$n(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source==="auto")&&(this.ticks=ud(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){F(this.options.afterUpdate,[this])}beforeSetDimensions(){F(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){F(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),F(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){F(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,n,o;for(i=0,n=t.length;i<n;i++)o=t[i],o.label=F(e.callback,[o.value,i,t],this)}afterTickToLabelConversion(){F(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){F(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=In(this.ticks.length,t.ticks.maxTicksLimit),n=e.minRotation||0,o=e.maxRotation;let a=n,r,l,d;if(!this._isVisible()||!e.display||n>=o||i<=1||!this.isHorizontal()){this.labelRotation=n;return}const c=this._getLabelSizes(),u=c.widest.width,h=c.highest.height,f=J(this.chart.width-u,0,this.maxWidth);r=t.offset?this.maxWidth/i:f/(i-1),u+6>r&&(r=f/(i-(t.offset?.5:1)),l=this.maxHeight-Se(t.grid)-e.padding-Tn(t.title,this.chart.options.font),d=Math.sqrt(u*u+h*h),a=Ti(Math.min(Math.asin(J((c.highest.height+6)/r,-1,1)),Math.asin(J(l/d,-1,1))-Math.asin(J(h/d,-1,1)))),a=Math.max(n,Math.min(o,a))),this.labelRotation=a}afterCalculateLabelRotation(){F(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){F(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:n,grid:o}}=this,a=this._isVisible(),r=this.isHorizontal();if(a){const l=Tn(n,e.options.font);if(r?(t.width=this.maxWidth,t.height=Se(o)+l):(t.height=this.maxHeight,t.width=Se(o)+l),i.display&&this.ticks.length){const{first:d,last:c,widest:u,highest:h}=this._getLabelSizes(),f=i.padding*2,m=bt(this.labelRotation),p=Math.cos(m),g=Math.sin(m);if(r){const b=i.mirror?0:g*u.width+p*h.height;t.height=Math.min(this.maxHeight,t.height+b+f)}else{const b=i.mirror?0:p*u.width+g*h.height;t.width=Math.min(this.maxWidth,t.width+b+f)}this._calculatePadding(d,c,g,p)}}this._handleMargins(),r?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,n){const{ticks:{align:o,padding:a},position:r}=this.options,l=this.labelRotation!==0,d=r!=="top"&&this.axis==="x";if(this.isHorizontal()){const c=this.getPixelForTick(0)-this.left,u=this.right-this.getPixelForTick(this.ticks.length-1);let h=0,f=0;l?d?(h=n*t.width,f=i*e.height):(h=i*t.height,f=n*e.width):o==="start"?f=e.width:o==="end"?h=t.width:o!=="inner"&&(h=t.width/2,f=e.width/2),this.paddingLeft=Math.max((h-c+a)*this.width/(this.width-c),0),this.paddingRight=Math.max((f-u+a)*this.width/(this.width-u),0)}else{let c=e.height/2,u=t.height/2;o==="start"?(c=0,u=t.height):o==="end"&&(c=e.height,u=0),this.paddingTop=c+a,this.paddingBottom=u+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){F(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)I(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=$n(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){const{ctx:n,_longestTextCache:o}=this,a=[],r=[],l=Math.floor(e/In(e,i));let d=0,c=0,u,h,f,m,p,g,b,x,k,v,y;for(u=0;u<e;u+=l){if(m=t[u].label,p=this._resolveTickFontOptions(u),n.font=g=p.string,b=o[g]=o[g]||{data:{},gc:[]},x=p.lineHeight,k=v=0,!I(m)&&!V(m))k=Bs(n,b.data,b.gc,k,m),v=x;else if(V(m))for(h=0,f=m.length;h<f;++h)y=m[h],!I(y)&&!V(y)&&(k=Bs(n,b.data,b.gc,k,y),v+=x);a.push(k),r.push(v),d=Math.max(k,d),c=Math.max(v,c)}vd(o,e);const S=a.indexOf(d),_=r.indexOf(c),C=E=>({width:a[E]||0,height:r[E]||0});return{first:C(0),last:C(e-1),widest:C(S),highest:C(_),widths:a,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return ar(this._alignToPixels?Yt(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=wd(this.getContext(),t,i))}return this.$context||(this.$context=yd(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=bt(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),o=this._getLabelSizes(),a=t.autoSkipPadding||0,r=o?o.widest.width+a:0,l=o?o.highest.height+a:0;return this.isHorizontal()?l*i>r*n?r/i:l/n:l*n<r*i?l/i:r/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,n=this.options,{grid:o,position:a,border:r}=n,l=o.offset,d=this.isHorizontal(),u=this.ticks.length+(l?1:0),h=Se(o),f=[],m=r.setContext(this.getContext()),p=m.display?m.width:0,g=p/2,b=function(j){return Yt(i,j,p)};let x,k,v,y,S,_,C,E,M,P,R,W;if(a==="top")x=b(this.bottom),_=this.bottom-h,E=x-g,P=b(t.top)+g,W=t.bottom;else if(a==="bottom")x=b(this.top),P=t.top,W=b(t.bottom)-g,_=x+g,E=this.top+h;else if(a==="left")x=b(this.right),S=this.right-h,C=x-g,M=b(t.left)+g,R=t.right;else if(a==="right")x=b(this.left),M=t.left,R=b(t.right)-g,S=x+g,C=this.left+h;else if(e==="x"){if(a==="center")x=b((t.top+t.bottom)/2+.5);else if($(a)){const j=Object.keys(a)[0],U=a[j];x=b(this.chart.scales[j].getPixelForValue(U))}P=t.top,W=t.bottom,_=x+g,E=_+h}else if(e==="y"){if(a==="center")x=b((t.left+t.right)/2);else if($(a)){const j=Object.keys(a)[0],U=a[j];x=b(this.chart.scales[j].getPixelForValue(U))}S=x-g,C=S-h,M=t.left,R=t.right}const it=D(n.ticks.maxTicksLimit,u),B=Math.max(1,Math.ceil(u/it));for(k=0;k<u;k+=B){const j=this.getContext(k),U=o.setContext(j),ht=r.setContext(j),X=U.lineWidth,de=U.color,es=ht.dash||[],ce=ht.dashOffset,xe=U.tickWidth,Ut=U.tickColor,ve=U.tickBorderDash||[],qt=U.tickBorderDashOffset;v=xd(this,k,l),v!==void 0&&(y=Yt(i,v,X),d?S=C=M=R=y:_=E=P=W=y,f.push({tx1:S,ty1:_,tx2:C,ty2:E,x1:M,y1:P,x2:R,y2:W,width:X,color:de,borderDash:es,borderDashOffset:ce,tickWidth:xe,tickColor:Ut,tickBorderDash:ve,tickBorderDashOffset:qt}))}return this._ticksLength=u,this._borderValue=x,f}_computeLabelItems(t){const e=this.axis,i=this.options,{position:n,ticks:o}=i,a=this.isHorizontal(),r=this.ticks,{align:l,crossAlign:d,padding:c,mirror:u}=o,h=Se(i.grid),f=h+c,m=u?-c:f,p=-bt(this.labelRotation),g=[];let b,x,k,v,y,S,_,C,E,M,P,R,W="middle";if(n==="top")S=this.bottom-m,_=this._getXAxisLabelAlignment();else if(n==="bottom")S=this.top+m,_=this._getXAxisLabelAlignment();else if(n==="left"){const B=this._getYAxisLabelAlignment(h);_=B.textAlign,y=B.x}else if(n==="right"){const B=this._getYAxisLabelAlignment(h);_=B.textAlign,y=B.x}else if(e==="x"){if(n==="center")S=(t.top+t.bottom)/2+f;else if($(n)){const B=Object.keys(n)[0],j=n[B];S=this.chart.scales[B].getPixelForValue(j)+f}_=this._getXAxisLabelAlignment()}else if(e==="y"){if(n==="center")y=(t.left+t.right)/2-f;else if($(n)){const B=Object.keys(n)[0],j=n[B];y=this.chart.scales[B].getPixelForValue(j)}_=this._getYAxisLabelAlignment(h).textAlign}e==="y"&&(l==="start"?W="top":l==="end"&&(W="bottom"));const it=this._getLabelSizes();for(b=0,x=r.length;b<x;++b){k=r[b],v=k.label;const B=o.setContext(this.getContext(b));C=this.getPixelForTick(b)+o.labelOffset,E=this._resolveTickFontOptions(b),M=E.lineHeight,P=V(v)?v.length:1;const j=P/2,U=B.color,ht=B.textStrokeColor,X=B.textStrokeWidth;let de=_;a?(y=C,_==="inner"&&(b===x-1?de=this.options.reverse?"left":"right":b===0?de=this.options.reverse?"right":"left":de="center"),n==="top"?d==="near"||p!==0?R=-P*M+M/2:d==="center"?R=-it.highest.height/2-j*M+M:R=-it.highest.height+M/2:d==="near"||p!==0?R=M/2:d==="center"?R=it.highest.height/2-j*M:R=it.highest.height-P*M,u&&(R*=-1),p!==0&&!B.showLabelBackdrop&&(y+=M/2*Math.sin(p))):(S=C,R=(1-P)*M/2);let es;if(B.showLabelBackdrop){const ce=st(B.backdropPadding),xe=it.heights[b],Ut=it.widths[b];let ve=R-ce.top,qt=0-ce.left;switch(W){case"middle":ve-=xe/2;break;case"bottom":ve-=xe;break}switch(_){case"center":qt-=Ut/2;break;case"right":qt-=Ut;break;case"inner":b===x-1?qt-=Ut:b>0&&(qt-=Ut/2);break}es={left:qt,top:ve,width:Ut+ce.width,height:xe+ce.height,color:B.backdropColor}}g.push({label:v,font:E,textOffset:R,options:{rotation:p,color:U,strokeColor:ht,strokeWidth:X,textAlign:de,textBaseline:W,translation:[y,S],backdrop:es}})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-bt(this.labelRotation))return t==="top"?"left":"right";let n="center";return e.align==="start"?n="left":e.align==="end"?n="right":e.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:n,padding:o}}=this.options,a=this._getLabelSizes(),r=t+o,l=a.widest.width;let d,c;return e==="left"?n?(c=this.right+o,i==="near"?d="left":i==="center"?(d="center",c+=l/2):(d="right",c+=l)):(c=this.right-r,i==="near"?d="right":i==="center"?(d="center",c-=l/2):(d="left",c=this.left)):e==="right"?n?(c=this.left+o,i==="near"?d="right":i==="center"?(d="center",c-=l/2):(d="left",c-=l)):(c=this.left+r,i==="near"?d="left":i==="center"?(d="center",c+=l/2):(d="right",c=this.right)):d="right",{textAlign:d,x:c}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:n,width:o,height:a}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,n,o,a),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks.findIndex(o=>o.value===t);return n>=0?e.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,a;const r=(l,d,c)=>{!c.width||!c.color||(i.save(),i.lineWidth=c.width,i.strokeStyle=c.color,i.setLineDash(c.borderDash||[]),i.lineDashOffset=c.borderDashOffset,i.beginPath(),i.moveTo(l.x,l.y),i.lineTo(d.x,d.y),i.stroke(),i.restore())};if(e.display)for(o=0,a=n.length;o<a;++o){const l=n[o];e.drawOnChartArea&&r({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&r({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:i,grid:n}}=this,o=i.setContext(this.getContext()),a=i.display?o.width:0;if(!a)return;const r=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let d,c,u,h;this.isHorizontal()?(d=Yt(t,this.left,a)-a/2,c=Yt(t,this.right,r)+r/2,u=h=l):(u=Yt(t,this.top,a)-a/2,h=Yt(t,this.bottom,r)+r/2,d=c=l),e.save(),e.lineWidth=o.width,e.strokeStyle=o.color,e.beginPath(),e.moveTo(d,u),e.lineTo(c,h),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,n=this._computeLabelArea();n&&Ws(i,n);const o=this.getLabelItems(t);for(const a of o){const r=a.options,l=a.font,d=a.label,c=a.textOffset;re(i,d,0,c,l,r)}n&&Gs(i)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:n}}=this;if(!i.display)return;const o=Y(i.font),a=st(i.padding),r=i.align;let l=o.lineHeight/2;e==="bottom"||e==="center"||$(e)?(l+=a.bottom,V(i.text)&&(l+=o.lineHeight*(i.text.length-1))):l+=a.top;const{titleX:d,titleY:c,maxWidth:u,rotation:h}=Sd(this,l,e,r);re(t,i.text,0,0,o,{color:i.color,maxWidth:u,rotation:h,textAlign:kd(r,e,n),textBaseline:"middle",translation:[d,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=D(t.grid&&t.grid.z,-1),n=D(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==le.prototype.draw?[{z:e,draw:o=>{this.draw(o)}}]:[{z:i,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:e,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",n=[];let o,a;for(o=0,a=e.length;o<a;++o){const r=e[o];r[i]===this.id&&(!t||r.type===t)&&n.push(r)}return n}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return Y(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class cs{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;Ed(e)&&(i=this.register(e));const n=this.items,o=t.id,a=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in n||(n[o]=t,_d(t,a,i),this.override&&z.override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,n=this.scope;i in e&&delete e[i],n&&i in z[n]&&(delete z[n][i],this.override&&delete ae[i])}}function _d(s,t,e){const i=We(Object.create(null),[e?z.get(e):{},z.get(t),s.defaults]);z.set(t,i),s.defaultRoutes&&Cd(t,s.defaultRoutes),s.descriptors&&z.describe(t,s.descriptors)}function Cd(s,t){Object.keys(t).forEach(e=>{const i=e.split("."),n=i.pop(),o=[s].concat(i).join("."),a=t[e].split("."),r=a.pop(),l=a.join(".");z.route(o,n,l,r)})}function Ed(s){return"id"in s&&"defaults"in s}class Ad{constructor(){this.controllers=new cs(xt,"datasets",!0),this.elements=new cs(vt,"elements"),this.plugins=new cs(Object,"plugins"),this.scales=new cs(le,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(n=>{const o=i||this._getRegistryForType(n);i||o.isForType(n)||o===this.plugins&&n.id?this._exec(t,o,n):L(n,a=>{const r=i||this._getRegistryForType(a);this._exec(t,r,a)})})}_exec(t,e,i){const n=$i(t);F(i["before"+n],[],i),e[t](i),F(i["after"+n],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const n=e.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return n}}var wt=new Ad;class Md{constructor(){this._init=void 0}notify(t,e,i,n){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const o=n?this._descriptors(t).filter(n):this._descriptors(t),a=this._notify(o,t,e,i);return e==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),a}_notify(t,e,i,n){n=n||{};for(const o of t){const a=o.plugin,r=a[i],l=[e,n,o.options];if(F(r,l,a)===!1&&n.cancelable)return!1}return!0}invalidate(){I(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,n=D(i.options&&i.options.plugins,{}),o=Pd(i);return n===!1&&!e?[]:Rd(t,o,n,e)}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,n=(o,a)=>o.filter(r=>!a.some(l=>r.plugin.id===l.plugin.id));this._notify(n(e,i),t,"stop"),this._notify(n(i,e),t,"start")}}function Pd(s){const t={},e=[],i=Object.keys(wt.plugins.items);for(let o=0;o<i.length;o++)e.push(wt.getPlugin(i[o]));const n=s.plugins||[];for(let o=0;o<n.length;o++){const a=n[o];e.indexOf(a)===-1&&(e.push(a),t[a.id]=!0)}return{plugins:e,localIds:t}}function Dd(s,t){return!t&&s===!1?null:s===!0?{}:s}function Rd(s,{plugins:t,localIds:e},i,n){const o=[],a=s.getContext();for(const r of t){const l=r.id,d=Dd(i[l],n);d!==null&&o.push({plugin:r,options:Id(s.config,{plugin:r,local:e[l]},d,a)})}return o}function Id(s,{plugin:t,local:e},i,n){const o=s.pluginScopeKeys(t),a=s.getOptionScopes(i,o);return e&&t.defaults&&a.push(t.defaults),s.createResolver(a,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function bi(s,t){const e=z.datasets[s]||{};return((t.datasets||{})[s]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function $d(s,t){let e=s;return s==="_index_"?e=t:s==="_value_"&&(e=t==="x"?"y":"x"),e}function Td(s,t){return s===t?"_index_":"_value_"}function On(s){if(s==="x"||s==="y"||s==="r")return s}function Od(s){if(s==="top"||s==="bottom")return"x";if(s==="left"||s==="right")return"y"}function xi(s,...t){if(On(s))return s;for(const e of t){const i=e.axis||Od(e.position)||s.length>1&&On(s[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${s}' axis. Please provide 'axis' or 'position' option.`)}function Bn(s,t,e){if(e[t+"AxisID"]===s)return{axis:t}}function Bd(s,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(i=>i.xAxisID===s||i.yAxisID===s);if(e.length)return Bn(s,"x",e[0])||Bn(s,"y",e[0])}return{}}function Ld(s,t){const e=ae[s.type]||{scales:{}},i=t.scales||{},n=bi(s.type,t),o=Object.create(null);return Object.keys(i).forEach(a=>{const r=i[a];if(!$(r))return console.error(`Invalid scale configuration for scale: ${a}`);if(r._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${a}`);const l=xi(a,r,Bd(a,s),z.scales[r.type]),d=Td(l,n),c=e.scales||{};o[a]=Oe(Object.create(null),[{axis:l},r,c[l],c[d]])}),s.data.datasets.forEach(a=>{const r=a.type||s.type,l=a.indexAxis||bi(r,t),c=(ae[r]||{}).scales||{};Object.keys(c).forEach(u=>{const h=$d(u,l),f=a[h+"AxisID"]||h;o[f]=o[f]||Object.create(null),Oe(o[f],[{axis:h},i[f],c[u]])})}),Object.keys(o).forEach(a=>{const r=o[a];Oe(r,[z.scales[r.type],z.scale])}),o}function ia(s){const t=s.options||(s.options={});t.plugins=D(t.plugins,{}),t.scales=Ld(s,t)}function na(s){return s=s||{},s.datasets=s.datasets||[],s.labels=s.labels||[],s}function jd(s){return s=s||{},s.data=na(s.data),ia(s),s}const Ln=new Map,oa=new Set;function us(s,t){let e=Ln.get(s);return e||(e=t(),Ln.set(s,e),oa.add(e)),e}const _e=(s,t,e)=>{const i=zt(t,e);i!==void 0&&s.add(i)};class Fd{constructor(t){this._config=jd(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=na(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),ia(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return us(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return us(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return us(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,i=this.type;return us(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const i=this._scopeCache;let n=i.get(t);return(!n||e)&&(n=new Map,i.set(t,n)),n}getOptionScopes(t,e,i){const{options:n,type:o}=this,a=this._cachedScopes(t,i),r=a.get(e);if(r)return r;const l=new Set;e.forEach(c=>{t&&(l.add(t),c.forEach(u=>_e(l,t,u))),c.forEach(u=>_e(l,n,u)),c.forEach(u=>_e(l,ae[o]||{},u)),c.forEach(u=>_e(l,z,u)),c.forEach(u=>_e(l,fi,u))});const d=Array.from(l);return d.length===0&&d.push(Object.create(null)),oa.has(e)&&a.set(e,d),d}chartOptionScopes(){const{options:t,type:e}=this;return[t,ae[e]||{},z.datasets[e]||{},{type:e},z,fi]}resolveNamedOptions(t,e,i,n=[""]){const o={$shared:!0},{resolver:a,subPrefixes:r}=jn(this._resolverCache,t,n);let l=a;if(Vd(a,e)){o.$shared=!1,i=Wt(i)?i():i;const d=this.createResolver(t,i,r);l=me(a,i,d)}for(const d of e)o[d]=l[d];return o}createResolver(t,e,i=[""],n){const{resolver:o}=jn(this._resolverCache,t,i);return $(e)?me(o,e,void 0,n):o}}function jn(s,t,e){let i=s.get(t);i||(i=new Map,s.set(t,i));const n=e.join();let o=i.get(n);return o||(o={resolver:Fi(t,e),subPrefixes:e.filter(r=>!r.toLowerCase().includes("hover"))},i.set(n,o)),o}const Nd=s=>$(s)&&Object.getOwnPropertyNames(s).some(t=>Wt(s[t]));function Vd(s,t){const{isScriptable:e,isIndexable:i}=Lo(s);for(const n of t){const o=e(n),a=i(n),r=(a||o)&&s[n];if(o&&(Wt(r)||Nd(r))||a&&V(r))return!0}return!1}var Hd="4.5.1";const zd=["top","bottom","left","right","chartArea"];function Fn(s,t){return s==="top"||s==="bottom"||zd.indexOf(s)===-1&&t==="x"}function Nn(s,t){return function(e,i){return e[s]===i[s]?e[t]-i[t]:e[s]-i[s]}}function Vn(s){const t=s.chart,e=t.options.animation;t.notifyPlugins("afterRender"),F(e&&e.onComplete,[s],t)}function Wd(s){const t=s.chart,e=t.options.animation;F(e&&e.onProgress,[s],t)}function aa(s){return Hi()&&typeof s=="string"?s=document.getElementById(s):s&&s.length&&(s=s[0]),s&&s.canvas&&(s=s.canvas),s}const As={},Hn=s=>{const t=aa(s);return Object.values(As).filter(e=>e.canvas===t).pop()};function Gd(s,t,e){const i=Object.keys(s);for(const n of i){const o=+n;if(o>=t){const a=s[n];delete s[n],(e>0||o>t)&&(s[o+e]=a)}}}function Ud(s,t,e,i){return!e||s.type==="mouseout"?null:i?t:s}class mt{static register(...t){wt.add(...t),zn()}static unregister(...t){wt.remove(...t),zn()}constructor(t,e){const i=this.config=new Fd(e),n=aa(t),o=Hn(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const a=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||cd(n)),this.platform.updateConfig(i);const r=this.platform.acquireContext(n,a.aspectRatio),l=r&&r.canvas,d=l&&l.height,c=l&&l.width;if(this.id=qa(),this.ctx=r,this.canvas=l,this.width=c,this.height=d,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Md,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=cr(u=>this.update(u),a.resizeDelay||0),this._dataChanges=[],As[this.id]=this,!r||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Et.listen(this,"complete",Vn),Et.listen(this,"progress",Wd),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:n,_aspectRatio:o}=this;return I(t)?e&&o?o:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return wt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():un(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return ln(this.canvas,this.ctx),this}stop(){return Et.stop(this),this}resize(t,e){Et.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,n=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(n,t,e,o),r=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,un(this,r,!0)&&(this.notifyPlugins("resize",{size:a}),F(i.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};L(e,(i,n)=>{i.id=n})}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,n=Object.keys(i).reduce((a,r)=>(a[r]=!1,a),{});let o=[];e&&(o=o.concat(Object.keys(e).map(a=>{const r=e[a],l=xi(a,r),d=l==="r",c=l==="x";return{options:r,dposition:d?"chartArea":c?"bottom":"left",dtype:d?"radialLinear":c?"category":"linear"}}))),L(o,a=>{const r=a.options,l=r.id,d=xi(l,r),c=D(r.type,a.dtype);(r.position===void 0||Fn(r.position,d)!==Fn(a.dposition))&&(r.position=a.dposition),n[l]=!0;let u=null;if(l in i&&i[l].type===c)u=i[l];else{const h=wt.getScale(c);u=new h({id:l,type:c,ctx:this.ctx,chart:this}),i[u.id]=u}u.init(r,t)}),L(n,(a,r)=>{a||delete i[r]}),L(i,a=>{et.configure(this,a,a.options),et.addBox(this,a)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((n,o)=>n.index-o.index),i>e){for(let n=e;n<i;++n)this._destroyDatasetMeta(n);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(Nn("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,n)=>{e.filter(o=>o===i._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,n;for(this._removeUnreferencedMetasets(),i=0,n=e.length;i<n;i++){const o=e[i];let a=this.getDatasetMeta(i);const r=o.type||this.config.type;if(a.type&&a.type!==r&&(this._destroyDatasetMeta(i),a=this.getDatasetMeta(i)),a.type=r,a.indexAxis=o.indexAxis||bi(r,this.options),a.order=o.order||0,a.index=i,a.label=""+o.label,a.visible=this.isDatasetVisible(i),a.controller)a.controller.updateIndex(i),a.controller.linkScales();else{const l=wt.getController(r),{datasetElementType:d,dataElementType:c}=z.datasets[r];Object.assign(l,{dataElementType:wt.getElement(c),datasetElementType:d&&wt.getElement(d)}),a.controller=new l(this,i),t.push(a.controller)}}return this._updateMetasets(),t}_resetElements(){L(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let d=0,c=this.data.datasets.length;d<c;d++){const{controller:u}=this.getDatasetMeta(d),h=!n&&o.indexOf(u)===-1;u.buildOrUpdateElements(h),a=Math.max(+u.getMaxOverflow(),a)}a=this._minPadding=i.layout.autoPadding?a:0,this._updateLayout(a),n||L(o,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Nn("z","_idx"));const{_active:r,_lastEvent:l}=this;l?this._eventHandler(l,!0):r.length&&this._updateHoverStyles(r,r,!0),this.render()}_updateScales(){L(this.scales,t=>{et.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!Zi(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:n,count:o}of e){const a=i==="_removeElements"?-o:o;Gd(t,n,a)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=o=>new Set(t.filter(a=>a[0]===o).map((a,r)=>r+","+a.splice(1).join(","))),n=i(0);for(let o=1;o<e;o++)if(!Zi(n,i(o)))return;return Array.from(n).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;et.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],L(this.boxes,n=>{i&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,o)=>{n._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,Wt(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),n={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(i.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Et.has(this)?this.attached&&!Et.running(this)&&Et.start(this):(this.draw(),Vn({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:i,height:n}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,n)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let n,o;for(n=0,o=e.length;n<o;++n){const a=e[n];(!t||a.visible)&&i.push(a)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i={meta:t,index:t.index,cancelable:!0},n=Ko(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(n&&Ws(e,n),t.controller.draw(),n&&Gs(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return Rt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,n){const o=zl.modes[e];return typeof o=="function"?o(this,t,i,n):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let n=i.filter(o=>o&&o._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context=Gt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){const i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const n=i?"show":"hide",o=this.getDatasetMeta(t),a=o.controller._resolveAnimations(void 0,n);Ge(e)?(o.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),a.update(o,{visible:i}),this.update(r=>r.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Et.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),ln(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete As[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(o,a)=>{e.addEventListener(this,o,a),t[o]=a},n=(o,a,r)=>{o.offsetX=a,o.offsetY=r,this._eventHandler(o)};L(this.options.events,o=>i(o,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(l,d)=>{e.addEventListener(this,l,d),t[l]=d},n=(l,d)=>{t[l]&&(e.removeEventListener(this,l,d),delete t[l])},o=(l,d)=>{this.canvas&&this.resize(l,d)};let a;const r=()=>{n("attach",r),this.attached=!0,this.resize(),i("resize",o),i("detach",a)};a=()=>{this.attached=!1,n("resize",o),this._stop(),this._resize(0,0),i("attach",r)},e.isAttached(this.canvas)?r():a()}unbindEvents(){L(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},L(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const n=i?"set":"remove";let o,a,r,l;for(e==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+n+"DatasetHoverStyle"]()),r=0,l=t.length;r<l;++r){a=t[r];const d=a&&this.getDatasetMeta(a.datasetIndex).controller;d&&d[n+"HoverStyle"](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map(({datasetIndex:o,index:a})=>{const r=this.getDatasetMeta(o);if(!r)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:r.data[a],index:a}});!$s(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){const n=this.options.hover,o=(l,d)=>l.filter(c=>!d.some(u=>c.datasetIndex===u.datasetIndex&&c.index===u.index)),a=o(e,t),r=i?t:o(t,e);a.length&&this.updateHoverStyle(a,n.mode,!1),r.length&&n.mode&&this.updateHoverStyle(r,n.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=a=>(a.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,n)===!1)return;const o=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,n),(o||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:n=[],options:o}=this,a=e,r=this._getActiveElements(t,n,i,a),l=Qa(t),d=Ud(t,this._lastEvent,i,l);i&&(this._lastEvent=null,F(o.onHover,[t,r,this],this),l&&F(o.onClick,[t,r,this],this));const c=!$s(r,n);return(c||e)&&(this._active=r,this._updateHoverStyles(r,n,e)),this._lastEvent=d,c}_getActiveElements(t,e,i,n){if(t.type==="mouseout")return[];if(!i)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,n)}}A(mt,"defaults",z),A(mt,"instances",As),A(mt,"overrides",ae),A(mt,"registry",wt),A(mt,"version",Hd),A(mt,"getChart",Hn);function zn(){return L(mt.instances,s=>s._plugins.invalidate())}function qd(s,t,e){const{startAngle:i,x:n,y:o,outerRadius:a,innerRadius:r,options:l}=t,{borderWidth:d,borderJoinStyle:c}=l,u=Math.min(d/a,tt(i-e));if(s.beginPath(),s.arc(n,o,a-d/2,i+u/2,e-u/2),r>0){const h=Math.min(d/r,tt(i-e));s.arc(n,o,r+d/2,e-h/2,i+h/2,!0)}else{const h=Math.min(d/2,a*tt(i-e));if(c==="round")s.arc(n,o,h,e-O/2,i+O/2,!0);else if(c==="bevel"){const f=2*h*h,m=-f*Math.cos(e+O/2)+n,p=-f*Math.sin(e+O/2)+o,g=f*Math.cos(i+O/2)+n,b=f*Math.sin(i+O/2)+o;s.lineTo(m,p),s.lineTo(g,b)}}s.closePath(),s.moveTo(0,0),s.rect(0,0,s.canvas.width,s.canvas.height),s.clip("evenodd")}function Kd(s,t,e){const{startAngle:i,pixelMargin:n,x:o,y:a,outerRadius:r,innerRadius:l}=t;let d=n/r;s.beginPath(),s.arc(o,a,r,i-d,e+d),l>n?(d=n/l,s.arc(o,a,l,e+d,i-d,!0)):s.arc(o,a,n,e+q,i-q),s.closePath(),s.clip()}function Yd(s){return ji(s,["outerStart","outerEnd","innerStart","innerEnd"])}function Jd(s,t,e,i){const n=Yd(s.options.borderRadius),o=(e-t)/2,a=Math.min(o,i*t/2),r=l=>{const d=(e-Math.min(o,l))*i/2;return J(l,0,Math.min(o,d))};return{outerStart:r(n.outerStart),outerEnd:r(n.outerEnd),innerStart:J(n.innerStart,0,a),innerEnd:J(n.innerEnd,0,a)}}function pe(s,t,e,i){return{x:e+s*Math.cos(t),y:i+s*Math.sin(t)}}function Fs(s,t,e,i,n,o){const{x:a,y:r,startAngle:l,pixelMargin:d,innerRadius:c}=t,u=Math.max(t.outerRadius+i+e-d,0),h=c>0?c+i+e+d:0;let f=0;const m=n-l;if(i){const B=c>0?c-i:0,j=u>0?u-i:0,U=(B+j)/2,ht=U!==0?m*U/(U+i):m;f=(m-ht)/2}const p=Math.max(.001,m*u-e/O)/u,g=(m-p)/2,b=l+g+f,x=n-g-f,{outerStart:k,outerEnd:v,innerStart:y,innerEnd:S}=Jd(t,h,u,x-b),_=u-k,C=u-v,E=b+k/_,M=x-v/C,P=h+y,R=h+S,W=b+y/P,it=x-S/R;if(s.beginPath(),o){const B=(E+M)/2;if(s.arc(a,r,u,E,B),s.arc(a,r,u,B,M),v>0){const X=pe(C,M,a,r);s.arc(X.x,X.y,v,M,x+q)}const j=pe(R,x,a,r);if(s.lineTo(j.x,j.y),S>0){const X=pe(R,it,a,r);s.arc(X.x,X.y,S,x+q,it+Math.PI)}const U=(x-S/h+(b+y/h))/2;if(s.arc(a,r,h,x-S/h,U,!0),s.arc(a,r,h,U,b+y/h,!0),y>0){const X=pe(P,W,a,r);s.arc(X.x,X.y,y,W+Math.PI,b-q)}const ht=pe(_,b,a,r);if(s.lineTo(ht.x,ht.y),k>0){const X=pe(_,E,a,r);s.arc(X.x,X.y,k,b-q,E)}}else{s.moveTo(a,r);const B=Math.cos(E)*u+a,j=Math.sin(E)*u+r;s.lineTo(B,j);const U=Math.cos(M)*u+a,ht=Math.sin(M)*u+r;s.lineTo(U,ht)}s.closePath()}function Xd(s,t,e,i,n){const{fullCircles:o,startAngle:a,circumference:r}=t;let l=t.endAngle;if(o){Fs(s,t,e,i,l,n);for(let d=0;d<o;++d)s.fill();isNaN(r)||(l=a+(r%N||N))}return Fs(s,t,e,i,l,n),s.fill(),l}function Zd(s,t,e,i,n){const{fullCircles:o,startAngle:a,circumference:r,options:l}=t,{borderWidth:d,borderJoinStyle:c,borderDash:u,borderDashOffset:h,borderRadius:f}=l,m=l.borderAlign==="inner";if(!d)return;s.setLineDash(u||[]),s.lineDashOffset=h,m?(s.lineWidth=d*2,s.lineJoin=c||"round"):(s.lineWidth=d,s.lineJoin=c||"bevel");let p=t.endAngle;if(o){Fs(s,t,e,i,p,n);for(let g=0;g<o;++g)s.stroke();isNaN(r)||(p=a+(r%N||N))}m&&Kd(s,t,p),l.selfJoin&&p-a>=O&&f===0&&c!=="miter"&&qd(s,t,p),o||(Fs(s,t,e,i,p,n),s.stroke())}class De extends vt{constructor(e){super();A(this,"circumference");A(this,"endAngle");A(this,"fullCircles");A(this,"innerRadius");A(this,"outerRadius");A(this,"pixelMargin");A(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,n){const o=this.getProps(["x","y"],n),{angle:a,distance:r}=Ao(o,{x:e,y:i}),{startAngle:l,endAngle:d,innerRadius:c,outerRadius:u,circumference:h}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),f=(this.options.spacing+this.options.borderWidth)/2,m=D(h,d-l),p=Ue(a,l,d)&&l!==d,g=m>=N||p,b=Pt(r,c+f,u+f);return g&&b}getCenterPoint(e){const{x:i,y:n,startAngle:o,endAngle:a,innerRadius:r,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:d,spacing:c}=this.options,u=(o+a)/2,h=(r+l+c+d)/2;return{x:i+Math.cos(u)*h,y:n+Math.sin(u)*h}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:i,circumference:n}=this,o=(i.offset||0)/4,a=(i.spacing||0)/2,r=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=n>N?Math.floor(n/N):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*o,Math.sin(l)*o);const d=1-Math.sin(Math.min(O,n||0)),c=o*d;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,Xd(e,this,c,a,r),Zd(e,this,c,a,r),e.restore()}}A(De,"id","arc"),A(De,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),A(De,"defaultRoutes",{backgroundColor:"backgroundColor"}),A(De,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function ra(s,t,e=t){s.lineCap=D(e.borderCapStyle,t.borderCapStyle),s.setLineDash(D(e.borderDash,t.borderDash)),s.lineDashOffset=D(e.borderDashOffset,t.borderDashOffset),s.lineJoin=D(e.borderJoinStyle,t.borderJoinStyle),s.lineWidth=D(e.borderWidth,t.borderWidth),s.strokeStyle=D(e.borderColor,t.borderColor)}function Qd(s,t,e){s.lineTo(e.x,e.y)}function tc(s){return s.stepped?kr:s.tension||s.cubicInterpolationMode==="monotone"?Sr:Qd}function la(s,t,e={}){const i=s.length,{start:n=0,end:o=i-1}=e,{start:a,end:r}=t,l=Math.max(n,a),d=Math.min(o,r),c=n<a&&o<a||n>r&&o>r;return{count:i,start:l,loop:t.loop,ilen:d<l&&!c?i+d-l:d-l}}function ec(s,t,e,i){const{points:n,options:o}=t,{count:a,start:r,loop:l,ilen:d}=la(n,e,i),c=tc(o);let{move:u=!0,reverse:h}=i||{},f,m,p;for(f=0;f<=d;++f)m=n[(r+(h?d-f:f))%a],!m.skip&&(u?(s.moveTo(m.x,m.y),u=!1):c(s,p,m,h,o.stepped),p=m);return l&&(m=n[(r+(h?d:0))%a],c(s,p,m,h,o.stepped)),!!l}function sc(s,t,e,i){const n=t.points,{count:o,start:a,ilen:r}=la(n,e,i),{move:l=!0,reverse:d}=i||{};let c=0,u=0,h,f,m,p,g,b;const x=v=>(a+(d?r-v:v))%o,k=()=>{p!==g&&(s.lineTo(c,g),s.lineTo(c,p),s.lineTo(c,b))};for(l&&(f=n[x(0)],s.moveTo(f.x,f.y)),h=0;h<=r;++h){if(f=n[x(h)],f.skip)continue;const v=f.x,y=f.y,S=v|0;S===m?(y<p?p=y:y>g&&(g=y),c=(u*c+v)/++u):(k(),s.lineTo(v,y),m=S,u=0,p=g=y),b=y}k()}function vi(s){const t=s.options,e=t.borderDash&&t.borderDash.length;return!s._decimated&&!s._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?sc:ec}function ic(s){return s.stepped?el:s.tension||s.cubicInterpolationMode==="monotone"?sl:Qt}function nc(s,t,e,i){let n=t._path;n||(n=t._path=new Path2D,t.path(n,e,i)&&n.closePath()),ra(s,t.options),s.stroke(n)}function oc(s,t,e,i){const{segments:n,options:o}=t,a=vi(t);for(const r of n)ra(s,o,r.style),s.beginPath(),a(s,t,r,{start:e,end:e+i-1})&&s.closePath(),s.stroke()}const ac=typeof Path2D=="function";function rc(s,t,e,i){ac&&!t.options.segment?nc(s,t,e,i):oc(s,t,e,i)}class Nt extends vt{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){const n=i.spanGaps?this._loop:this._fullLoop;qr(this._points,i,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=ll(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,n=t[e],o=this.points,a=qo(this,{property:e,start:n,end:n});if(!a.length)return;const r=[],l=ic(i);let d,c;for(d=0,c=a.length;d<c;++d){const{start:u,end:h}=a[d],f=o[u],m=o[h];if(f===m){r.push(f);continue}const p=Math.abs((n-f[e])/(m[e]-f[e])),g=l(f,m,p,i.stepped);g[e]=t[e],r.push(g)}return r.length===1?r[0]:r}pathSegment(t,e,i){return vi(this)(t,this,e,i)}path(t,e,i){const n=this.segments,o=vi(this);let a=this._loop;e=e||0,i=i||this.points.length-e;for(const r of n)a&=o(t,this,r,{start:e,end:e+i-1});return!!a}draw(t,e,i,n){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),rc(t,this,i,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}A(Nt,"id","line"),A(Nt,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),A(Nt,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),A(Nt,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Wn(s,t,e,i){const n=s.options,{[e]:o}=s.getProps([e],i);return Math.abs(t-o)<n.radius+n.hitRadius}class Ms extends vt{constructor(e){super();A(this,"parsed");A(this,"skip");A(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,n){const o=this.options,{x:a,y:r}=this.getProps(["x","y"],n);return Math.pow(e-a,2)+Math.pow(i-r,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(e,i){return Wn(this,e,"x",i)}inYRange(e,i){return Wn(this,e,"y",i)}getCenterPoint(e){const{x:i,y:n}=this.getProps(["x","y"],e);return{x:i,y:n}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);const n=i&&e.borderWidth||0;return(i+n)*2}draw(e,i){const n=this.options;this.skip||n.radius<.1||!Rt(this,i,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,gi(e,n,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}A(Ms,"id","point"),A(Ms,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),A(Ms,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function da(s,t){const{x:e,y:i,base:n,width:o,height:a}=s.getProps(["x","y","base","width","height"],t);let r,l,d,c,u;return s.horizontal?(u=a/2,r=Math.min(e,n),l=Math.max(e,n),d=i-u,c=i+u):(u=o/2,r=e-u,l=e+u,d=Math.min(i,n),c=Math.max(i,n)),{left:r,top:d,right:l,bottom:c}}function Vt(s,t,e,i){return s?0:J(t,e,i)}function lc(s,t,e){const i=s.options.borderWidth,n=s.borderSkipped,o=Bo(i);return{t:Vt(n.top,o.top,0,e),r:Vt(n.right,o.right,0,t),b:Vt(n.bottom,o.bottom,0,e),l:Vt(n.left,o.left,0,t)}}function dc(s,t,e){const{enableBorderRadius:i}=s.getProps(["enableBorderRadius"]),n=s.options.borderRadius,o=ie(n),a=Math.min(t,e),r=s.borderSkipped,l=i||$(n);return{topLeft:Vt(!l||r.top||r.left,o.topLeft,0,a),topRight:Vt(!l||r.top||r.right,o.topRight,0,a),bottomLeft:Vt(!l||r.bottom||r.left,o.bottomLeft,0,a),bottomRight:Vt(!l||r.bottom||r.right,o.bottomRight,0,a)}}function cc(s){const t=da(s),e=t.right-t.left,i=t.bottom-t.top,n=lc(s,e/2,i/2),o=dc(s,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:o},inner:{x:t.left+n.l,y:t.top+n.t,w:e-n.l-n.r,h:i-n.t-n.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,o.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(n.b,n.r))}}}}function ri(s,t,e,i){const n=t===null,o=e===null,r=s&&!(n&&o)&&da(s,i);return r&&(n||Pt(t,r.left,r.right))&&(o||Pt(e,r.top,r.bottom))}function uc(s){return s.topLeft||s.topRight||s.bottomLeft||s.bottomRight}function pc(s,t){s.rect(t.x,t.y,t.w,t.h)}function li(s,t,e={}){const i=s.x!==e.x?-t:0,n=s.y!==e.y?-t:0,o=(s.x+s.w!==e.x+e.w?t:0)-i,a=(s.y+s.h!==e.y+e.h?t:0)-n;return{x:s.x+i,y:s.y+n,w:s.w+o,h:s.h+a,radius:s.radius}}class Ps extends vt{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:n}}=this,{inner:o,outer:a}=cc(this),r=uc(a.radius)?qe:pc;t.save(),(a.w!==o.w||a.h!==o.h)&&(t.beginPath(),r(t,li(a,e,o)),t.clip(),r(t,li(o,-e,a)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),r(t,li(o,e)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,i){return ri(this,t,e,i)}inXRange(t,e){return ri(this,t,null,e)}inYRange(t,e){return ri(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:n,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+n)/2:e,y:o?i:(i+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}A(Ps,"id","bar"),A(Ps,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),A(Ps,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var hc=Object.freeze({__proto__:null,ArcElement:De,BarElement:Ps,LineElement:Nt,PointElement:Ms});const yi=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Gn=yi.map(s=>s.replace("rgb(","rgba(").replace(")",", 0.5)"));function ca(s){return yi[s%yi.length]}function ua(s){return Gn[s%Gn.length]}function fc(s,t){return s.borderColor=ca(t),s.backgroundColor=ua(t),++t}function gc(s,t){return s.backgroundColor=s.data.map(()=>ca(t++)),t}function mc(s,t){return s.backgroundColor=s.data.map(()=>ua(t++)),t}function bc(s){let t=0;return(e,i)=>{const n=s.getDatasetMeta(i).controller;n instanceof se?t=gc(e,t):n instanceof Fe?t=mc(e,t):n&&(t=fc(e,t))}}function Un(s){let t;for(t in s)if(s[t].borderColor||s[t].backgroundColor)return!0;return!1}function xc(s){return s&&(s.borderColor||s.backgroundColor)}function vc(){return z.borderColor!=="rgba(0,0,0,0.1)"||z.backgroundColor!=="rgba(0,0,0,0.1)"}var yc={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(s,t,e){if(!e.enabled)return;const{data:{datasets:i},options:n}=s.config,{elements:o}=n,a=Un(i)||xc(n)||o&&Un(o)||vc();if(!e.forceOverride&&a)return;const r=bc(s);i.forEach(r)}};function wc(s,t,e,i,n){const o=n.samples||i;if(o>=e)return s.slice(t,t+e);const a=[],r=(e-2)/(o-2);let l=0;const d=t+e-1;let c=t,u,h,f,m,p;for(a[l++]=s[c],u=0;u<o-2;u++){let g=0,b=0,x;const k=Math.floor((u+1)*r)+1+t,v=Math.min(Math.floor((u+2)*r)+1,e)+t,y=v-k;for(x=k;x<v;x++)g+=s[x].x,b+=s[x].y;g/=y,b/=y;const S=Math.floor(u*r)+1+t,_=Math.min(Math.floor((u+1)*r)+1,e)+t,{x:C,y:E}=s[c];for(f=m=-1,x=S;x<_;x++)m=.5*Math.abs((C-g)*(s[x].y-E)-(C-s[x].x)*(b-E)),m>f&&(f=m,h=s[x],p=x);a[l++]=h,c=p}return a[l++]=s[d],a}function kc(s,t,e,i){let n=0,o=0,a,r,l,d,c,u,h,f,m,p;const g=[],b=t+e-1,x=s[t].x,v=s[b].x-x;for(a=t;a<t+e;++a){r=s[a],l=(r.x-x)/v*i,d=r.y;const y=l|0;if(y===c)d<m?(m=d,u=a):d>p&&(p=d,h=a),n=(o*n+r.x)/++o;else{const S=a-1;if(!I(u)&&!I(h)){const _=Math.min(u,h),C=Math.max(u,h);_!==f&&_!==S&&g.push({...s[_],x:n}),C!==f&&C!==S&&g.push({...s[C],x:n})}a>0&&S!==f&&g.push(s[S]),g.push(r),c=y,o=0,m=p=d,u=h=f=a}}return g}function pa(s){if(s._decimated){const t=s._data;delete s._decimated,delete s._data,Object.defineProperty(s,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function qn(s){s.data.datasets.forEach(t=>{pa(t)})}function Sc(s,t){const e=t.length;let i=0,n;const{iScale:o}=s,{min:a,max:r,minDefined:l,maxDefined:d}=o.getUserBounds();return l&&(i=J(Dt(t,o.axis,a).lo,0,e-1)),d?n=J(Dt(t,o.axis,r).hi+1,i,e)-i:n=e-i,{start:i,count:n}}var _c={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(s,t,e)=>{if(!e.enabled){qn(s);return}const i=s.width;s.data.datasets.forEach((n,o)=>{const{_data:a,indexAxis:r}=n,l=s.getDatasetMeta(o),d=a||n.data;if(Me([r,s.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const c=s.scales[l.xAxisID];if(c.type!=="linear"&&c.type!=="time"||s.options.parsing)return;let{start:u,count:h}=Sc(l,d);const f=e.threshold||4*i;if(h<=f){pa(n);return}I(a)&&(n._data=d,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(p){this._data=p}}));let m;switch(e.algorithm){case"lttb":m=wc(d,u,h,i,e);break;case"min-max":m=kc(d,u,h,i);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}n._decimated=m})},destroy(s){qn(s)}};function Cc(s,t,e){const i=s.segments,n=s.points,o=t.points,a=[];for(const r of i){let{start:l,end:d}=r;d=Ks(l,d,n);const c=wi(e,n[l],n[d],r.loop);if(!t.segments){a.push({source:r,target:c,start:n[l],end:n[d]});continue}const u=qo(t,c);for(const h of u){const f=wi(e,o[h.start],o[h.end],h.loop),m=Uo(r,n,f);for(const p of m)a.push({source:p,target:h,start:{[e]:Kn(c,f,"start",Math.max)},end:{[e]:Kn(c,f,"end",Math.min)}})}}return a}function wi(s,t,e,i){if(i)return;let n=t[s],o=e[s];return s==="angle"&&(n=tt(n),o=tt(o)),{property:s,start:n,end:o}}function Ec(s,t){const{x:e=null,y:i=null}=s||{},n=t.points,o=[];return t.segments.forEach(({start:a,end:r})=>{r=Ks(a,r,n);const l=n[a],d=n[r];i!==null?(o.push({x:l.x,y:i}),o.push({x:d.x,y:i})):e!==null&&(o.push({x:e,y:l.y}),o.push({x:e,y:d.y}))}),o}function Ks(s,t,e){for(;t>s;t--){const i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Kn(s,t,e,i){return s&&t?i(s[e],t[e]):s?s[e]:t?t[e]:0}function ha(s,t){let e=[],i=!1;return V(s)?(i=!0,e=s):e=Ec(s,t),e.length?new Nt({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Yn(s){return s&&s.fill!==!1}function Ac(s,t,e){let n=s[t].fill;const o=[t];let a;if(!e)return n;for(;n!==!1&&o.indexOf(n)===-1;){if(!G(n))return n;if(a=s[n],!a)return!1;if(a.visible)return n;o.push(n),n=a.fill}return!1}function Mc(s,t,e){const i=Ic(s);if($(i))return isNaN(i.value)?!1:i;let n=parseFloat(i);return G(n)&&Math.floor(n)===n?Pc(i[0],t,n,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function Pc(s,t,e,i){return(s==="-"||s==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function Dc(s,t){let e=null;return s==="start"?e=t.bottom:s==="end"?e=t.top:$(s)?e=t.getPixelForValue(s.value):t.getBasePixel&&(e=t.getBasePixel()),e}function Rc(s,t,e){let i;return s==="start"?i=e:s==="end"?i=t.options.reverse?t.min:t.max:$(s)?i=s.value:i=t.getBaseValue(),i}function Ic(s){const t=s.options,e=t.fill;let i=D(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function $c(s){const{scale:t,index:e,line:i}=s,n=[],o=i.segments,a=i.points,r=Tc(t,e);r.push(ha({x:null,y:t.bottom},i));for(let l=0;l<o.length;l++){const d=o[l];for(let c=d.start;c<=d.end;c++)Oc(n,a[c],r)}return new Nt({points:n,options:{}})}function Tc(s,t){const e=[],i=s.getMatchingVisibleMetas("line");for(let n=0;n<i.length;n++){const o=i[n];if(o.index===t)break;o.hidden||e.unshift(o.dataset)}return e}function Oc(s,t,e){const i=[];for(let n=0;n<e.length;n++){const o=e[n],{first:a,last:r,point:l}=Bc(o,t,"x");if(!(!l||a&&r)){if(a)i.unshift(l);else if(s.push(l),!r)break}}s.push(...i)}function Bc(s,t,e){const i=s.interpolate(t,e);if(!i)return{};const n=i[e],o=s.segments,a=s.points;let r=!1,l=!1;for(let d=0;d<o.length;d++){const c=o[d],u=a[c.start][e],h=a[c.end][e];if(Pt(n,u,h)){r=n===u,l=n===h;break}}return{first:r,last:l,point:i}}class fa{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:n,y:o,radius:a}=this;return e=e||{start:0,end:N},t.arc(n,o,a,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:n}=this,o=t.angle;return{x:e+Math.cos(o)*n,y:i+Math.sin(o)*n,angle:o}}}function Lc(s){const{chart:t,fill:e,line:i}=s;if(G(e))return jc(t,e);if(e==="stack")return $c(s);if(e==="shape")return!0;const n=Fc(s);return n instanceof fa?n:ha(n,i)}function jc(s,t){const e=s.getDatasetMeta(t);return e&&s.isDatasetVisible(t)?e.dataset:null}function Fc(s){return(s.scale||{}).getPointPositionForValue?Vc(s):Nc(s)}function Nc(s){const{scale:t={},fill:e}=s,i=Dc(e,t);if(G(i)){const n=t.isHorizontal();return{x:n?i:null,y:n?null:i}}return null}function Vc(s){const{scale:t,fill:e}=s,i=t.options,n=t.getLabels().length,o=i.reverse?t.max:t.min,a=Rc(e,t,o),r=[];if(i.grid.circular){const l=t.getPointPositionForValue(0,o);return new fa({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(a)})}for(let l=0;l<n;++l)r.push(t.getPointPositionForValue(l,a));return r}function di(s,t,e){const i=Lc(t),{chart:n,index:o,line:a,scale:r,axis:l}=t,d=a.options,c=d.fill,u=d.backgroundColor,{above:h=u,below:f=u}=c||{},m=n.getDatasetMeta(o),p=Ko(n,m);i&&a.points.length&&(Ws(s,e),Hc(s,{line:a,target:i,above:h,below:f,area:e,scale:r,axis:l,clip:p}),Gs(s))}function Hc(s,t){const{line:e,target:i,above:n,below:o,area:a,scale:r,clip:l}=t,d=e._loop?"angle":t.axis;s.save();let c=o;o!==n&&(d==="x"?(Jn(s,i,a.top),ci(s,{line:e,target:i,color:n,scale:r,property:d,clip:l}),s.restore(),s.save(),Jn(s,i,a.bottom)):d==="y"&&(Xn(s,i,a.left),ci(s,{line:e,target:i,color:o,scale:r,property:d,clip:l}),s.restore(),s.save(),Xn(s,i,a.right),c=n)),ci(s,{line:e,target:i,color:c,scale:r,property:d,clip:l}),s.restore()}function Jn(s,t,e){const{segments:i,points:n}=t;let o=!0,a=!1;s.beginPath();for(const r of i){const{start:l,end:d}=r,c=n[l],u=n[Ks(l,d,n)];o?(s.moveTo(c.x,c.y),o=!1):(s.lineTo(c.x,e),s.lineTo(c.x,c.y)),a=!!t.pathSegment(s,r,{move:a}),a?s.closePath():s.lineTo(u.x,e)}s.lineTo(t.first().x,e),s.closePath(),s.clip()}function Xn(s,t,e){const{segments:i,points:n}=t;let o=!0,a=!1;s.beginPath();for(const r of i){const{start:l,end:d}=r,c=n[l],u=n[Ks(l,d,n)];o?(s.moveTo(c.x,c.y),o=!1):(s.lineTo(e,c.y),s.lineTo(c.x,c.y)),a=!!t.pathSegment(s,r,{move:a}),a?s.closePath():s.lineTo(e,u.y)}s.lineTo(e,t.first().y),s.closePath(),s.clip()}function ci(s,t){const{line:e,target:i,property:n,color:o,scale:a,clip:r}=t,l=Cc(e,i,n);for(const{source:d,target:c,start:u,end:h}of l){const{style:{backgroundColor:f=o}={}}=d,m=i!==!0;s.save(),s.fillStyle=f,zc(s,a,r,m&&wi(n,u,h)),s.beginPath();const p=!!e.pathSegment(s,d);let g;if(m){p?s.closePath():Zn(s,i,h,n);const b=!!i.pathSegment(s,c,{move:p,reverse:!0});g=p&&b,g||Zn(s,i,u,n)}s.closePath(),s.fill(g?"evenodd":"nonzero"),s.restore()}}function zc(s,t,e,i){const n=t.chart.chartArea,{property:o,start:a,end:r}=i||{};if(o==="x"||o==="y"){let l,d,c,u;o==="x"?(l=a,d=n.top,c=r,u=n.bottom):(l=n.left,d=a,c=n.right,u=r),s.beginPath(),e&&(l=Math.max(l,e.left),c=Math.min(c,e.right),d=Math.max(d,e.top),u=Math.min(u,e.bottom)),s.rect(l,d,c-l,u-d),s.clip()}}function Zn(s,t,e,i){const n=t.interpolate(e,i);n&&s.lineTo(n.x,n.y)}var Wc={id:"filler",afterDatasetsUpdate(s,t,e){const i=(s.data.datasets||[]).length,n=[];let o,a,r,l;for(a=0;a<i;++a)o=s.getDatasetMeta(a),r=o.dataset,l=null,r&&r.options&&r instanceof Nt&&(l={visible:s.isDatasetVisible(a),index:a,fill:Mc(r,a,i),chart:s,axis:o.controller.options.indexAxis,scale:o.vScale,line:r}),o.$filler=l,n.push(l);for(a=0;a<i;++a)l=n[a],!(!l||l.fill===!1)&&(l.fill=Ac(n,a,e.propagate))},beforeDraw(s,t,e){const i=e.drawTime==="beforeDraw",n=s.getSortedVisibleDatasetMetas(),o=s.chartArea;for(let a=n.length-1;a>=0;--a){const r=n[a].$filler;r&&(r.line.updateControlPoints(o,r.axis),i&&r.fill&&di(s.ctx,r,o))}},beforeDatasetsDraw(s,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const i=s.getSortedVisibleDatasetMetas();for(let n=i.length-1;n>=0;--n){const o=i[n].$filler;Yn(o)&&di(s.ctx,o,s.chartArea)}},beforeDatasetDraw(s,t,e){const i=t.meta.$filler;!Yn(i)||e.drawTime!=="beforeDatasetDraw"||di(s.ctx,i,s.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Qn=(s,t)=>{let{boxHeight:e=t,boxWidth:i=t}=s;return s.usePointStyle&&(e=Math.min(e,t),i=s.pointStyleWidth||Math.min(i,t)),{boxWidth:i,boxHeight:e,itemHeight:Math.max(t,e)}},Gc=(s,t)=>s!==null&&t!==null&&s.datasetIndex===t.datasetIndex&&s.index===t.index;class to extends vt{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=F(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(i=>t.filter(i,this.chart.data))),t.sort&&(e=e.sort((i,n)=>t.sort(i,n,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const i=t.labels,n=Y(i.font),o=n.size,a=this._computeTitleHeight(),{boxWidth:r,itemHeight:l}=Qn(i,o);let d,c;e.font=n.string,this.isHorizontal()?(d=this.maxWidth,c=this._fitRows(a,o,r,l)+10):(c=this.maxHeight,d=this._fitCols(a,n,r,l)+10),this.width=Math.min(d,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,n){const{ctx:o,maxWidth:a,options:{labels:{padding:r}}}=this,l=this.legendHitBoxes=[],d=this.lineWidths=[0],c=n+r;let u=t;o.textAlign="left",o.textBaseline="middle";let h=-1,f=-c;return this.legendItems.forEach((m,p)=>{const g=i+e/2+o.measureText(m.text).width;(p===0||d[d.length-1]+g+2*r>a)&&(u+=c,d[d.length-(p>0?0:1)]=0,f+=c,h++),l[p]={left:0,top:f,row:h,width:g,height:n},d[d.length-1]+=g+r}),u}_fitCols(t,e,i,n){const{ctx:o,maxHeight:a,options:{labels:{padding:r}}}=this,l=this.legendHitBoxes=[],d=this.columnSizes=[],c=a-t;let u=r,h=0,f=0,m=0,p=0;return this.legendItems.forEach((g,b)=>{const{itemWidth:x,itemHeight:k}=Uc(i,e,o,g,n);b>0&&f+k+2*r>c&&(u+=h+r,d.push({width:h,height:f}),m+=h+r,p++,h=f=0),l[b]={left:m,top:f,col:p,width:x,height:k},h=Math.max(h,x),f+=k+r}),u+=h,d.push({width:h,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:n},rtl:o}}=this,a=fe(o,this.left,this.width);if(this.isHorizontal()){let r=0,l=Q(i,this.left+n,this.right-this.lineWidths[r]);for(const d of e)r!==d.row&&(r=d.row,l=Q(i,this.left+n,this.right-this.lineWidths[r])),d.top+=this.top+t+n,d.left=a.leftForLtr(a.x(l),d.width),l+=d.width+n}else{let r=0,l=Q(i,this.top+t+n,this.bottom-this.columnSizes[r].height);for(const d of e)d.col!==r&&(r=d.col,l=Q(i,this.top+t+n,this.bottom-this.columnSizes[r].height)),d.top=l,d.left+=this.left+n,d.left=a.leftForLtr(a.x(d.left),d.width),l+=d.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;Ws(t,this),this._draw(),Gs(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:n}=this,{align:o,labels:a}=t,r=z.color,l=fe(t.rtl,this.left,this.width),d=Y(a.font),{padding:c}=a,u=d.size,h=u/2;let f;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=d.string;const{boxWidth:m,boxHeight:p,itemHeight:g}=Qn(a,u),b=function(S,_,C){if(isNaN(m)||m<=0||isNaN(p)||p<0)return;n.save();const E=D(C.lineWidth,1);if(n.fillStyle=D(C.fillStyle,r),n.lineCap=D(C.lineCap,"butt"),n.lineDashOffset=D(C.lineDashOffset,0),n.lineJoin=D(C.lineJoin,"miter"),n.lineWidth=E,n.strokeStyle=D(C.strokeStyle,r),n.setLineDash(D(C.lineDash,[])),a.usePointStyle){const M={radius:p*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:E},P=l.xPlus(S,m/2),R=_+h;Oo(n,M,P,R,a.pointStyleWidth&&m)}else{const M=_+Math.max((u-p)/2,0),P=l.leftForLtr(S,m),R=ie(C.borderRadius);n.beginPath(),Object.values(R).some(W=>W!==0)?qe(n,{x:P,y:M,w:m,h:p,radius:R}):n.rect(P,M,m,p),n.fill(),E!==0&&n.stroke()}n.restore()},x=function(S,_,C){re(n,C.text,S,_+g/2,d,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},k=this.isHorizontal(),v=this._computeTitleHeight();k?f={x:Q(o,this.left+c,this.right-i[0]),y:this.top+c+v,line:0}:f={x:this.left+c,y:Q(o,this.top+v+c,this.bottom-e[0].height),line:0},zo(this.ctx,t.textDirection);const y=g+c;this.legendItems.forEach((S,_)=>{n.strokeStyle=S.fontColor,n.fillStyle=S.fontColor;const C=n.measureText(S.text).width,E=l.textAlign(S.textAlign||(S.textAlign=a.textAlign)),M=m+h+C;let P=f.x,R=f.y;l.setWidth(this.width),k?_>0&&P+M+c>this.right&&(R=f.y+=y,f.line++,P=f.x=Q(o,this.left+c,this.right-i[f.line])):_>0&&R+y>this.bottom&&(P=f.x=P+e[f.line].width+c,f.line++,R=f.y=Q(o,this.top+v+c,this.bottom-e[f.line].height));const W=l.x(P);if(b(W,R,S),P=ur(E,P+m+h,k?P+M:this.right,t.rtl),x(l.x(P),R,S),k)f.x+=M+c;else if(typeof S.text!="string"){const it=d.lineHeight;f.y+=ga(S,it)+c}else f.y+=y}),Wo(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=Y(e.font),n=st(e.padding);if(!e.display)return;const o=fe(t.rtl,this.left,this.width),a=this.ctx,r=e.position,l=i.size/2,d=n.top+l;let c,u=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),c=this.top+d,u=Q(t.align,u,this.right-h);else{const m=this.columnSizes.reduce((p,g)=>Math.max(p,g.height),0);c=d+Q(t.align,this.top,this.bottom-m-t.labels.padding-this._computeTitleHeight())}const f=Q(r,u,u+h);a.textAlign=o.textAlign(Bi(r)),a.textBaseline="middle",a.strokeStyle=e.color,a.fillStyle=e.color,a.font=i.string,re(a,e.text,f,c,i)}_computeTitleHeight(){const t=this.options.title,e=Y(t.font),i=st(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,n,o;if(Pt(t,this.left,this.right)&&Pt(e,this.top,this.bottom)){for(o=this.legendHitBoxes,i=0;i<o.length;++i)if(n=o[i],Pt(t,n.left,n.left+n.width)&&Pt(e,n.top,n.top+n.height))return this.legendItems[i]}return null}handleEvent(t){const e=this.options;if(!Yc(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,o=Gc(n,i);n&&!o&&F(e.onLeave,[t,n,this],this),this._hoveredItem=i,i&&!o&&F(e.onHover,[t,i,this],this)}else i&&F(e.onClick,[t,i,this],this)}}function Uc(s,t,e,i,n){const o=qc(i,s,t,e),a=Kc(n,i,t.lineHeight);return{itemWidth:o,itemHeight:a}}function qc(s,t,e,i){let n=s.text;return n&&typeof n!="string"&&(n=n.reduce((o,a)=>o.length>a.length?o:a)),t+e.size/2+i.measureText(n).width}function Kc(s,t,e){let i=s;return typeof t.text!="string"&&(i=ga(t,e)),i}function ga(s,t){const e=s.text?s.text.length:0;return t*e}function Yc(s,t){return!!((s==="mousemove"||s==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(s==="click"||s==="mouseup"))}var Jc={id:"legend",_element:to,start(s,t,e){const i=s.legend=new to({ctx:s.ctx,options:e,chart:s});et.configure(s,i,e),et.addBox(s,i)},stop(s){et.removeBox(s,s.legend),delete s.legend},beforeUpdate(s,t,e){const i=s.legend;et.configure(s,i,e),i.options=e},afterUpdate(s){const t=s.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(s,t){t.replay||s.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(s,t,e){const i=t.datasetIndex,n=e.chart;n.isDatasetVisible(i)?(n.hide(i),t.hidden=!0):(n.show(i),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:s=>s.chart.options.color,boxWidth:40,padding:10,generateLabels(s){const t=s.data.datasets,{labels:{usePointStyle:e,pointStyle:i,textAlign:n,color:o,useBorderRadius:a,borderRadius:r}}=s.legend.options;return s._getSortedDatasetMetas().map(l=>{const d=l.controller.getStyle(e?0:void 0),c=st(d.borderWidth);return{text:t[l.index].label,fillStyle:d.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(c.width+c.height)/4,strokeStyle:d.borderColor,pointStyle:i||d.pointStyle,rotation:d.rotation,textAlign:n||d.textAlign,borderRadius:a&&(r||d.borderRadius),datasetIndex:l.index}},this)}},title:{color:s=>s.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:s=>!s.startsWith("on"),labels:{_scriptable:s=>!["generateLabels","filter","sort"].includes(s)}}};class Gi extends vt{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const n=V(i.text)?i.text.length:1;this._padding=st(i.padding);const o=n*Y(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:i,bottom:n,right:o,options:a}=this,r=a.align;let l=0,d,c,u;return this.isHorizontal()?(c=Q(r,i,o),u=e+t,d=o-i):(a.position==="left"?(c=i+t,u=Q(r,n,e),l=O*-.5):(c=o-t,u=Q(r,e,n),l=O*.5),d=n-e),{titleX:c,titleY:u,maxWidth:d,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=Y(e.font),o=i.lineHeight/2+this._padding.top,{titleX:a,titleY:r,maxWidth:l,rotation:d}=this._drawArgs(o);re(t,e.text,0,0,i,{color:e.color,maxWidth:l,rotation:d,textAlign:Bi(e.align),textBaseline:"middle",translation:[a,r]})}}function Xc(s,t){const e=new Gi({ctx:s.ctx,options:t,chart:s});et.configure(s,e,t),et.addBox(s,e),s.titleBlock=e}var Zc={id:"title",_element:Gi,start(s,t,e){Xc(s,e)},stop(s){const t=s.titleBlock;et.removeBox(s,t),delete s.titleBlock},beforeUpdate(s,t,e){const i=s.titleBlock;et.configure(s,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ps=new WeakMap;var Qc={id:"subtitle",start(s,t,e){const i=new Gi({ctx:s.ctx,options:e,chart:s});et.configure(s,i,e),et.addBox(s,i),ps.set(s,i)},stop(s){et.removeBox(s,ps.get(s)),ps.delete(s)},beforeUpdate(s,t,e){const i=ps.get(s);et.configure(s,i,e),i.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Re={average(s){if(!s.length)return!1;let t,e,i=new Set,n=0,o=0;for(t=0,e=s.length;t<e;++t){const r=s[t].element;if(r&&r.hasValue()){const l=r.tooltipPosition();i.add(l.x),n+=l.y,++o}}return o===0||i.size===0?!1:{x:[...i].reduce((r,l)=>r+l)/i.size,y:n/o}},nearest(s,t){if(!s.length)return!1;let e=t.x,i=t.y,n=Number.POSITIVE_INFINITY,o,a,r;for(o=0,a=s.length;o<a;++o){const l=s[o].element;if(l&&l.hasValue()){const d=l.getCenterPoint(),c=hi(t,d);c<n&&(n=c,r=l)}}if(r){const l=r.tooltipPosition();e=l.x,i=l.y}return{x:e,y:i}}};function yt(s,t){return t&&(V(t)?Array.prototype.push.apply(s,t):s.push(t)),s}function At(s){return(typeof s=="string"||s instanceof String)&&s.indexOf(`
`)>-1?s.split(`
`):s}function tu(s,t){const{element:e,datasetIndex:i,index:n}=t,o=s.getDatasetMeta(i).controller,{label:a,value:r}=o.getLabelAndValue(n);return{chart:s,label:a,parsed:o.getParsed(n),raw:s.data.datasets[i].data[n],formattedValue:r,dataset:o.getDataset(),dataIndex:n,datasetIndex:i,element:e}}function eo(s,t){const e=s.chart.ctx,{body:i,footer:n,title:o}=s,{boxWidth:a,boxHeight:r}=t,l=Y(t.bodyFont),d=Y(t.titleFont),c=Y(t.footerFont),u=o.length,h=n.length,f=i.length,m=st(t.padding);let p=m.height,g=0,b=i.reduce((v,y)=>v+y.before.length+y.lines.length+y.after.length,0);if(b+=s.beforeBody.length+s.afterBody.length,u&&(p+=u*d.lineHeight+(u-1)*t.titleSpacing+t.titleMarginBottom),b){const v=t.displayColors?Math.max(r,l.lineHeight):l.lineHeight;p+=f*v+(b-f)*l.lineHeight+(b-1)*t.bodySpacing}h&&(p+=t.footerMarginTop+h*c.lineHeight+(h-1)*t.footerSpacing);let x=0;const k=function(v){g=Math.max(g,e.measureText(v).width+x)};return e.save(),e.font=d.string,L(s.title,k),e.font=l.string,L(s.beforeBody.concat(s.afterBody),k),x=t.displayColors?a+2+t.boxPadding:0,L(i,v=>{L(v.before,k),L(v.lines,k),L(v.after,k)}),x=0,e.font=c.string,L(s.footer,k),e.restore(),g+=m.width,{width:g,height:p}}function eu(s,t){const{y:e,height:i}=t;return e<i/2?"top":e>s.height-i/2?"bottom":"center"}function su(s,t,e,i){const{x:n,width:o}=i,a=e.caretSize+e.caretPadding;if(s==="left"&&n+o+a>t.width||s==="right"&&n-o-a<0)return!0}function iu(s,t,e,i){const{x:n,width:o}=e,{width:a,chartArea:{left:r,right:l}}=s;let d="center";return i==="center"?d=n<=(r+l)/2?"left":"right":n<=o/2?d="left":n>=a-o/2&&(d="right"),su(d,s,t,e)&&(d="center"),d}function so(s,t,e){const i=e.yAlign||t.yAlign||eu(s,e);return{xAlign:e.xAlign||t.xAlign||iu(s,t,e,i),yAlign:i}}function nu(s,t){let{x:e,width:i}=s;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function ou(s,t,e){let{y:i,height:n}=s;return t==="top"?i+=e:t==="bottom"?i-=n+e:i-=n/2,i}function io(s,t,e,i){const{caretSize:n,caretPadding:o,cornerRadius:a}=s,{xAlign:r,yAlign:l}=e,d=n+o,{topLeft:c,topRight:u,bottomLeft:h,bottomRight:f}=ie(a);let m=nu(t,r);const p=ou(t,l,d);return l==="center"?r==="left"?m+=d:r==="right"&&(m-=d):r==="left"?m-=Math.max(c,h)+n:r==="right"&&(m+=Math.max(u,f)+n),{x:J(m,0,i.width-t.width),y:J(p,0,i.height-t.height)}}function hs(s,t,e){const i=st(e.padding);return t==="center"?s.x+s.width/2:t==="right"?s.x+s.width-i.right:s.x+i.left}function no(s){return yt([],At(s))}function au(s,t,e){return Gt(s,{tooltip:t,tooltipItems:e,type:"tooltip"})}function oo(s,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?s.override(e):s}const ma={beforeTitle:Ct,title(s){if(s.length>0){const t=s[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:Ct,beforeBody:Ct,beforeLabel:Ct,label(s){if(this&&this.options&&this.options.mode==="dataset")return s.label+": "+s.formattedValue||s.formattedValue;let t=s.dataset.label||"";t&&(t+=": ");const e=s.formattedValue;return I(e)||(t+=e),t},labelColor(s){const e=s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(s){const e=s.chart.getDatasetMeta(s.datasetIndex).controller.getStyle(s.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Ct,afterBody:Ct,beforeFooter:Ct,footer:Ct,afterFooter:Ct};function nt(s,t,e,i){const n=s[t].call(e,i);return typeof n>"u"?ma[t].call(e,i):n}class ki extends vt{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),n=i.enabled&&e.options.animation&&i.animations,o=new Yo(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=au(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:i}=e,n=nt(i,"beforeTitle",this,t),o=nt(i,"title",this,t),a=nt(i,"afterTitle",this,t);let r=[];return r=yt(r,At(n)),r=yt(r,At(o)),r=yt(r,At(a)),r}getBeforeBody(t,e){return no(nt(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:i}=e,n=[];return L(t,o=>{const a={before:[],lines:[],after:[]},r=oo(i,o);yt(a.before,At(nt(r,"beforeLabel",this,o))),yt(a.lines,nt(r,"label",this,o)),yt(a.after,At(nt(r,"afterLabel",this,o))),n.push(a)}),n}getAfterBody(t,e){return no(nt(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:i}=e,n=nt(i,"beforeFooter",this,t),o=nt(i,"footer",this,t),a=nt(i,"afterFooter",this,t);let r=[];return r=yt(r,At(n)),r=yt(r,At(o)),r=yt(r,At(a)),r}_createItems(t){const e=this._active,i=this.chart.data,n=[],o=[],a=[];let r=[],l,d;for(l=0,d=e.length;l<d;++l)r.push(tu(this.chart,e[l]));return t.filter&&(r=r.filter((c,u,h)=>t.filter(c,u,h,i))),t.itemSort&&(r=r.sort((c,u)=>t.itemSort(c,u,i))),L(r,c=>{const u=oo(t.callbacks,c);n.push(nt(u,"labelColor",this,c)),o.push(nt(u,"labelPointStyle",this,c)),a.push(nt(u,"labelTextColor",this,c))}),this.labelColors=n,this.labelPointStyles=o,this.labelTextColors=a,this.dataPoints=r,r}update(t,e){const i=this.options.setContext(this.getContext()),n=this._active;let o,a=[];if(!n.length)this.opacity!==0&&(o={opacity:0});else{const r=Re[i.position].call(this,n,this._eventPosition);a=this._createItems(i),this.title=this.getTitle(a,i),this.beforeBody=this.getBeforeBody(a,i),this.body=this.getBody(a,i),this.afterBody=this.getAfterBody(a,i),this.footer=this.getFooter(a,i);const l=this._size=eo(this,i),d=Object.assign({},r,l),c=so(this.chart,i,d),u=io(i,d,c,this.chart);this.xAlign=c.xAlign,this.yAlign=c.yAlign,o={opacity:1,x:u.x,y:u.y,width:l.width,height:l.height,caretX:r.x,caretY:r.y}}this._tooltipItems=a,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,n){const o=this.getCaretPosition(t,i,n);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,i){const{xAlign:n,yAlign:o}=this,{caretSize:a,cornerRadius:r}=i,{topLeft:l,topRight:d,bottomLeft:c,bottomRight:u}=ie(r),{x:h,y:f}=t,{width:m,height:p}=e;let g,b,x,k,v,y;return o==="center"?(v=f+p/2,n==="left"?(g=h,b=g-a,k=v+a,y=v-a):(g=h+m,b=g+a,k=v-a,y=v+a),x=g):(n==="left"?b=h+Math.max(l,c)+a:n==="right"?b=h+m-Math.max(d,u)-a:b=this.caretX,o==="top"?(k=f,v=k-a,g=b-a,x=b+a):(k=f+p,v=k+a,g=b+a,x=b-a),y=k),{x1:g,x2:b,x3:x,y1:k,y2:v,y3:y}}drawTitle(t,e,i){const n=this.title,o=n.length;let a,r,l;if(o){const d=fe(i.rtl,this.x,this.width);for(t.x=hs(this,i.titleAlign,i),e.textAlign=d.textAlign(i.titleAlign),e.textBaseline="middle",a=Y(i.titleFont),r=i.titleSpacing,e.fillStyle=i.titleColor,e.font=a.string,l=0;l<o;++l)e.fillText(n[l],d.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+r,l+1===o&&(t.y+=i.titleMarginBottom-r)}}_drawColorBox(t,e,i,n,o){const a=this.labelColors[i],r=this.labelPointStyles[i],{boxHeight:l,boxWidth:d}=o,c=Y(o.bodyFont),u=hs(this,"left",o),h=n.x(u),f=l<c.lineHeight?(c.lineHeight-l)/2:0,m=e.y+f;if(o.usePointStyle){const p={radius:Math.min(d,l)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},g=n.leftForLtr(h,d)+d/2,b=m+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,gi(t,p,g,b),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,gi(t,p,g,b)}else{t.lineWidth=$(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;const p=n.leftForLtr(h,d),g=n.leftForLtr(n.xPlus(h,1),d-2),b=ie(a.borderRadius);Object.values(b).some(x=>x!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,qe(t,{x:p,y:m,w:d,h:l,radius:b}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),qe(t,{x:g,y:m+1,w:d-2,h:l-2,radius:b}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(p,m,d,l),t.strokeRect(p,m,d,l),t.fillStyle=a.backgroundColor,t.fillRect(g,m+1,d-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:n}=this,{bodySpacing:o,bodyAlign:a,displayColors:r,boxHeight:l,boxWidth:d,boxPadding:c}=i,u=Y(i.bodyFont);let h=u.lineHeight,f=0;const m=fe(i.rtl,this.x,this.width),p=function(C){e.fillText(C,m.x(t.x+f),t.y+h/2),t.y+=h+o},g=m.textAlign(a);let b,x,k,v,y,S,_;for(e.textAlign=a,e.textBaseline="middle",e.font=u.string,t.x=hs(this,g,i),e.fillStyle=i.bodyColor,L(this.beforeBody,p),f=r&&g!=="right"?a==="center"?d/2+c:d+2+c:0,v=0,S=n.length;v<S;++v){for(b=n[v],x=this.labelTextColors[v],e.fillStyle=x,L(b.before,p),k=b.lines,r&&k.length&&(this._drawColorBox(e,t,v,m,i),h=Math.max(u.lineHeight,l)),y=0,_=k.length;y<_;++y)p(k[y]),h=u.lineHeight;L(b.after,p)}f=0,h=u.lineHeight,L(this.afterBody,p),t.y-=o}drawFooter(t,e,i){const n=this.footer,o=n.length;let a,r;if(o){const l=fe(i.rtl,this.x,this.width);for(t.x=hs(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=l.textAlign(i.footerAlign),e.textBaseline="middle",a=Y(i.footerFont),e.fillStyle=i.footerColor,e.font=a.string,r=0;r<o;++r)e.fillText(n[r],l.x(t.x),t.y+a.lineHeight/2),t.y+=a.lineHeight+i.footerSpacing}}drawBackground(t,e,i,n){const{xAlign:o,yAlign:a}=this,{x:r,y:l}=t,{width:d,height:c}=i,{topLeft:u,topRight:h,bottomLeft:f,bottomRight:m}=ie(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(r+u,l),a==="top"&&this.drawCaret(t,e,i,n),e.lineTo(r+d-h,l),e.quadraticCurveTo(r+d,l,r+d,l+h),a==="center"&&o==="right"&&this.drawCaret(t,e,i,n),e.lineTo(r+d,l+c-m),e.quadraticCurveTo(r+d,l+c,r+d-m,l+c),a==="bottom"&&this.drawCaret(t,e,i,n),e.lineTo(r+f,l+c),e.quadraticCurveTo(r,l+c,r,l+c-f),a==="center"&&o==="left"&&this.drawCaret(t,e,i,n),e.lineTo(r,l+u),e.quadraticCurveTo(r,l,r+u,l),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,n=i&&i.x,o=i&&i.y;if(n||o){const a=Re[t.position].call(this,this._active,this._eventPosition);if(!a)return;const r=this._size=eo(this,t),l=Object.assign({},a,this._size),d=so(e,t,l),c=io(t,l,d,e);(n._to!==c.x||o._to!==c.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=r.width,this.height=r.height,this.caretX=a.x,this.caretY=a.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const n={width:this.width,height:this.height},o={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const a=st(e.padding),r=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&r&&(t.save(),t.globalAlpha=i,this.drawBackground(o,t,n,e),zo(t,e.textDirection),o.y+=a.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),Wo(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,n=t.map(({datasetIndex:r,index:l})=>{const d=this.chart.getDatasetMeta(r);if(!d)throw new Error("Cannot find a dataset at index "+r);return{datasetIndex:r,element:d.data[l],index:l}}),o=!$s(i,n),a=this._positionChanged(n,e);(o||a)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,o=this._active||[],a=this._getActiveElements(t,o,e,i),r=this._positionChanged(a,t),l=e||!$s(a,o)||r;return l&&(this._active=a,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,i,n){const o=this.options;if(t.type==="mouseout")return[];if(!n)return e.filter(r=>this.chart.data.datasets[r.datasetIndex]&&this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index)!==void 0);const a=this.chart.getElementsAtEventForMode(t,o.mode,o,i);return o.reverse&&a.reverse(),a}_positionChanged(t,e){const{caretX:i,caretY:n,options:o}=this,a=Re[o.position].call(this,t,e);return a!==!1&&(i!==a.x||n!==a.y)}}A(ki,"positioners",Re);var ru={id:"tooltip",_element:ki,positioners:Re,afterInit(s,t,e){e&&(s.tooltip=new ki({chart:s,options:e}))},beforeUpdate(s,t,e){s.tooltip&&s.tooltip.initialize(e)},reset(s,t,e){s.tooltip&&s.tooltip.initialize(e)},afterDraw(s){const t=s.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(s.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(s.ctx),s.notifyPlugins("afterTooltipDraw",e)}},afterEvent(s,t){if(s.tooltip){const e=t.replay;s.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(s,t)=>t.bodyFont.size,boxWidth:(s,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:ma},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:s=>s!=="filter"&&s!=="itemSort"&&s!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},lu=Object.freeze({__proto__:null,Colors:yc,Decimation:_c,Filler:Wc,Legend:Jc,SubTitle:Qc,Title:Zc,Tooltip:ru});const du=(s,t,e,i)=>(typeof t=="string"?(e=s.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function cu(s,t,e,i){const n=s.indexOf(t);if(n===-1)return du(s,t,e,i);const o=s.lastIndexOf(t);return n!==o?e:n}const uu=(s,t)=>s===null?null:J(Math.round(s),0,t);function ao(s){const t=this.getLabels();return s>=0&&s<t.length?t[s]:s}class Si extends le{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const i=this.getLabels();for(const{index:n,label:o}of e)i[n]===o&&i.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(I(t))return null;const i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:cu(i,t,D(e,t),this._addedLabels),uu(e,i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(n=this.getLabels().length-1)),this.min=i,this.max=n}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,n=[];let o=this.getLabels();o=t===0&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let a=t;a<=e;a++)n.push({value:a});return n}getLabelForValue(t){return ao.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}A(Si,"id","category"),A(Si,"defaults",{ticks:{callback:ao}});function pu(s,t){const e=[],{bounds:n,step:o,min:a,max:r,precision:l,count:d,maxTicks:c,maxDigits:u,includeBounds:h}=s,f=o||1,m=c-1,{min:p,max:g}=t,b=!I(a),x=!I(r),k=!I(d),v=(g-p)/(u+1);let y=tn((g-p)/m/f)*f,S,_,C,E;if(y<1e-14&&!b&&!x)return[{value:p},{value:g}];E=Math.ceil(g/y)-Math.floor(p/y),E>m&&(y=tn(E*y/m/f)*f),I(l)||(S=Math.pow(10,l),y=Math.ceil(y*S)/S),n==="ticks"?(_=Math.floor(p/y)*y,C=Math.ceil(g/y)*y):(_=p,C=g),b&&x&&o&&nr((r-a)/o,y/1e3)?(E=Math.round(Math.min((r-a)/y,c)),y=(r-a)/E,_=a,C=r):k?(_=b?a:_,C=x?r:C,E=d-1,y=(C-_)/E):(E=(C-_)/y,Be(E,Math.round(E),y/1e3)?E=Math.round(E):E=Math.ceil(E));const M=Math.max(en(y),en(_));S=Math.pow(10,I(l)?M:l),_=Math.round(_*S)/S,C=Math.round(C*S)/S;let P=0;for(b&&(h&&_!==a?(e.push({value:a}),_<a&&P++,Be(Math.round((_+P*y)*S)/S,a,ro(a,v,s))&&P++):_<a&&P++);P<E;++P){const R=Math.round((_+P*y)*S)/S;if(x&&R>r)break;e.push({value:R})}return x&&h&&C!==r?e.length&&Be(e[e.length-1].value,r,ro(r,v,s))?e[e.length-1].value=r:e.push({value:r}):(!x||C===r)&&e.push({value:C}),e}function ro(s,t,{horizontal:e,minRotation:i}){const n=bt(i),o=(e?Math.sin(n):Math.cos(n))||.001,a=.75*t*(""+s).length;return Math.min(t/o,a)}class Ns extends le{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return I(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:n,max:o}=this;const a=l=>n=e?n:l,r=l=>o=i?o:l;if(t){const l=St(n),d=St(o);l<0&&d<0?r(0):l>0&&d>0&&a(0)}if(n===o){let l=o===0?1:Math.abs(o*.05);r(o+l),t||a(n-l)}this.min=n,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:i}=t,n;return i?(n=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e=e||11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const n={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},o=this._range||this,a=pu(n,o);return t.bounds==="ticks"&&Eo(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const n=(i-e)/Math.max(t.length-1,1)/2;e-=n,i+=n}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return Ze(t,this.chart.options.locale,this.options.ticks.format)}}class _i extends Ns{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=G(t)?t:0,this.max=G(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=bt(this.options.ticks.minRotation),n=(t?Math.sin(i):Math.cos(i))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}A(_i,"id","linear"),A(_i,"defaults",{ticks:{callback:zs.formatters.numeric}});const Ye=s=>Math.floor(jt(s)),Xt=(s,t)=>Math.pow(10,Ye(s)+t);function lo(s){return s/Math.pow(10,Ye(s))===1}function co(s,t,e){const i=Math.pow(10,e),n=Math.floor(s/i);return Math.ceil(t/i)-n}function hu(s,t){const e=t-s;let i=Ye(e);for(;co(s,t,i)>10;)i++;for(;co(s,t,i)<10;)i--;return Math.min(i,Ye(s))}function fu(s,{min:t,max:e}){t=dt(s.min,t);const i=[],n=Ye(t);let o=hu(t,e),a=o<0?Math.pow(10,Math.abs(o)):1;const r=Math.pow(10,o),l=n>o?Math.pow(10,n):0,d=Math.round((t-l)*a)/a,c=Math.floor((t-l)/r/10)*r*10;let u=Math.floor((d-c)/Math.pow(10,o)),h=dt(s.min,Math.round((l+c+u*Math.pow(10,o))*a)/a);for(;h<e;)i.push({value:h,major:lo(h),significand:u}),u>=10?u=u<15?15:20:u++,u>=20&&(o++,u=2,a=o>=0?1:a),h=Math.round((l+c+u*Math.pow(10,o))*a)/a;const f=dt(s.max,h);return i.push({value:f,major:lo(f),significand:u}),i}class Ci extends le{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Ns.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return G(i)&&i>0?i:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=G(t)?Math.max(0,t):null,this.max=G(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!G(this._userMin)&&(this.min=t===Xt(this.min,0)?Xt(this.min,-1):Xt(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,n=this.max;const o=r=>i=t?i:r,a=r=>n=e?n:r;i===n&&(i<=0?(o(1),a(10)):(o(Xt(i,-1)),a(Xt(n,1)))),i<=0&&o(Xt(n,-1)),n<=0&&a(Xt(i,1)),this.min=i,this.max=n}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},i=fu(e,this);return t.bounds==="ticks"&&Eo(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":Ze(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=jt(t),this._valueRange=jt(this.max)-jt(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(jt(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}A(Ci,"id","logarithmic"),A(Ci,"defaults",{ticks:{callback:zs.formatters.logarithmic,major:{enabled:!0}}});function Ei(s){const t=s.ticks;if(t.display&&s.display){const e=st(t.backdropPadding);return D(t.font&&t.font.size,z.font.size)+e.height}return 0}function gu(s,t,e){return e=V(e)?e:[e],{w:wr(s,t.string,e),h:e.length*t.lineHeight}}function uo(s,t,e,i,n){return s===i||s===n?{start:t-e/2,end:t+e/2}:s<i||s>n?{start:t-e,end:t}:{start:t,end:t+e}}function mu(s){const t={l:s.left+s._padding.left,r:s.right-s._padding.right,t:s.top+s._padding.top,b:s.bottom-s._padding.bottom},e=Object.assign({},t),i=[],n=[],o=s._pointLabels.length,a=s.options.pointLabels,r=a.centerPointLabels?O/o:0;for(let l=0;l<o;l++){const d=a.setContext(s.getPointLabelContext(l));n[l]=d.padding;const c=s.getPointPosition(l,s.drawingArea+n[l],r),u=Y(d.font),h=gu(s.ctx,u,s._pointLabels[l]);i[l]=h;const f=tt(s.getIndexAngle(l)+r),m=Math.round(Ti(f)),p=uo(m,c.x,h.w,0,180),g=uo(m,c.y,h.h,90,270);bu(e,t,f,p,g)}s.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),s._pointLabelItems=yu(s,i,n)}function bu(s,t,e,i,n){const o=Math.abs(Math.sin(e)),a=Math.abs(Math.cos(e));let r=0,l=0;i.start<t.l?(r=(t.l-i.start)/o,s.l=Math.min(s.l,t.l-r)):i.end>t.r&&(r=(i.end-t.r)/o,s.r=Math.max(s.r,t.r+r)),n.start<t.t?(l=(t.t-n.start)/a,s.t=Math.min(s.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/a,s.b=Math.max(s.b,t.b+l))}function xu(s,t,e){const i=s.drawingArea,{extra:n,additionalAngle:o,padding:a,size:r}=e,l=s.getPointPosition(t,i+n+a,o),d=Math.round(Ti(tt(l.angle+q))),c=Su(l.y,r.h,d),u=wu(d),h=ku(l.x,r.w,u);return{visible:!0,x:l.x,y:c,textAlign:u,left:h,top:c,right:h+r.w,bottom:c+r.h}}function vu(s,t){if(!t)return!0;const{left:e,top:i,right:n,bottom:o}=s;return!(Rt({x:e,y:i},t)||Rt({x:e,y:o},t)||Rt({x:n,y:i},t)||Rt({x:n,y:o},t))}function yu(s,t,e){const i=[],n=s._pointLabels.length,o=s.options,{centerPointLabels:a,display:r}=o.pointLabels,l={extra:Ei(o)/2,additionalAngle:a?O/n:0};let d;for(let c=0;c<n;c++){l.padding=e[c],l.size=t[c];const u=xu(s,c,l);i.push(u),r==="auto"&&(u.visible=vu(u,d),u.visible&&(d=u))}return i}function wu(s){return s===0||s===180?"center":s<180?"left":"right"}function ku(s,t,e){return e==="right"?s-=t:e==="center"&&(s-=t/2),s}function Su(s,t,e){return e===90||e===270?s-=t/2:(e>270||e<90)&&(s-=t),s}function _u(s,t,e){const{left:i,top:n,right:o,bottom:a}=e,{backdropColor:r}=t;if(!I(r)){const l=ie(t.borderRadius),d=st(t.backdropPadding);s.fillStyle=r;const c=i-d.left,u=n-d.top,h=o-i+d.width,f=a-n+d.height;Object.values(l).some(m=>m!==0)?(s.beginPath(),qe(s,{x:c,y:u,w:h,h:f,radius:l}),s.fill()):s.fillRect(c,u,h,f)}}function Cu(s,t){const{ctx:e,options:{pointLabels:i}}=s;for(let n=t-1;n>=0;n--){const o=s._pointLabelItems[n];if(!o.visible)continue;const a=i.setContext(s.getPointLabelContext(n));_u(e,a,o);const r=Y(a.font),{x:l,y:d,textAlign:c}=o;re(e,s._pointLabels[n],l,d+r.lineHeight/2,r,{color:a.color,textAlign:c,textBaseline:"middle"})}}function ba(s,t,e,i){const{ctx:n}=s;if(e)n.arc(s.xCenter,s.yCenter,t,0,N);else{let o=s.getPointPosition(0,t);n.moveTo(o.x,o.y);for(let a=1;a<i;a++)o=s.getPointPosition(a,t),n.lineTo(o.x,o.y)}}function Eu(s,t,e,i,n){const o=s.ctx,a=t.circular,{color:r,lineWidth:l}=t;!a&&!i||!r||!l||e<0||(o.save(),o.strokeStyle=r,o.lineWidth=l,o.setLineDash(n.dash||[]),o.lineDashOffset=n.dashOffset,o.beginPath(),ba(s,e,a,i),o.closePath(),o.stroke(),o.restore())}function Au(s,t,e){return Gt(s,{label:e,index:t,type:"pointLabel"})}class Ie extends Ns{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=st(Ei(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=G(t)&&!isNaN(t)?t:0,this.max=G(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ei(this.options))}generateTickLabels(t){Ns.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{const n=F(this.options.pointLabels.callback,[e,i],this);return n||n===0?n:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){const t=this.options;t.display&&t.pointLabels.display?mu(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,n))}getIndexAngle(t){const e=N/(this._pointLabels.length||1),i=this.options.startAngle||0;return tt(t*e+bt(i))}getDistanceFromCenterForValue(t){if(I(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(I(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return Au(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const n=this.getIndexAngle(t)-q+i;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:n,bottom:o}=this._pointLabelItems[t];return{left:e,top:i,right:n,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),ba(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:n,border:o}=e,a=this._pointLabels.length;let r,l,d;if(e.pointLabels.display&&Cu(this,a),n.display&&this.ticks.forEach((c,u)=>{if(u!==0||u===0&&this.min<0){l=this.getDistanceFromCenterForValue(c.value);const h=this.getContext(u),f=n.setContext(h),m=o.setContext(h);Eu(this,f,l,a,m)}}),i.display){for(t.save(),r=a-1;r>=0;r--){const c=i.setContext(this.getPointLabelContext(r)),{color:u,lineWidth:h}=c;!h||!u||(t.lineWidth=h,t.strokeStyle=u,t.setLineDash(c.borderDash),t.lineDashOffset=c.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),d=this.getPointPosition(r,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(d.x,d.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const n=this.getIndexAngle(0);let o,a;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((r,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const d=i.setContext(this.getContext(l)),c=Y(d.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),d.showLabelBackdrop){t.font=c.string,a=t.measureText(r.label).width,t.fillStyle=d.backdropColor;const u=st(d.backdropPadding);t.fillRect(-a/2-u.left,-o-c.size/2-u.top,a+u.width,c.size+u.height)}re(t,r.label,0,-o,c,{color:d.color,strokeColor:d.textStrokeColor,strokeWidth:d.textStrokeWidth})}),t.restore()}drawTitle(){}}A(Ie,"id","radialLinear"),A(Ie,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:zs.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),A(Ie,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),A(Ie,"descriptors",{angleLines:{_fallback:"grid"}});const Ys={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},at=Object.keys(Ys);function po(s,t){return s-t}function ho(s,t){if(I(t))return null;const e=s._adapter,{parser:i,round:n,isoWeekday:o}=s._parseOpts;let a=t;return typeof i=="function"&&(a=i(a)),G(a)||(a=typeof i=="string"?e.parse(a,i):e.parse(a)),a===null?null:(n&&(a=n==="week"&&(ge(o)||o===!0)?e.startOf(a,"isoWeek",o):e.startOf(a,n)),+a)}function fo(s,t,e,i){const n=at.length;for(let o=at.indexOf(s);o<n-1;++o){const a=Ys[at[o]],r=a.steps?a.steps:Number.MAX_SAFE_INTEGER;if(a.common&&Math.ceil((e-t)/(r*a.size))<=i)return at[o]}return at[n-1]}function Mu(s,t,e,i,n){for(let o=at.length-1;o>=at.indexOf(e);o--){const a=at[o];if(Ys[a].common&&s._adapter.diff(n,i,a)>=t-1)return a}return at[e?at.indexOf(e):0]}function Pu(s){for(let t=at.indexOf(s)+1,e=at.length;t<e;++t)if(Ys[at[t]].common)return at[t]}function go(s,t,e){if(!e)s[t]=!0;else if(e.length){const{lo:i,hi:n}=Oi(e,t),o=e[i]>=t?e[i]:e[n];s[o]=!0}}function Du(s,t,e,i){const n=s._adapter,o=+n.startOf(t[0].value,i),a=t[t.length-1].value;let r,l;for(r=o;r<=a;r=+n.add(r,1,i))l=e[r],l>=0&&(t[l].major=!0);return t}function mo(s,t,e){const i=[],n={},o=t.length;let a,r;for(a=0;a<o;++a)r=t[a],n[r]=a,i.push({value:r,major:!1});return o===0||!e?i:Du(s,i,n,e)}class Je extends le{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const i=t.time||(t.time={}),n=this._adapter=new jl._date(t.adapters.date);n.init(e),Oe(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:ho(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:n,max:o,minDefined:a,maxDefined:r}=this.getUserBounds();function l(d){!a&&!isNaN(d.min)&&(n=Math.min(n,d.min)),!r&&!isNaN(d.max)&&(o=Math.max(o,d.max))}(!a||!r)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=G(n)&&!isNaN(n)?n:+e.startOf(Date.now(),i),o=G(o)&&!isNaN(o)?o:+e.endOf(Date.now(),i)+1,this.min=Math.min(n,o-1),this.max=Math.max(n+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,n=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const o=this.min,a=this.max,r=lr(n,o,a);return this._unit=e.unit||(i.autoSkip?fo(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):Mu(this,r.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Pu(this._unit),this.initOffsets(n),t.reverse&&r.reverse(),mo(this,r,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,n,o;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?e=1-n:e=(this.getDecimalForValue(t[1])-n)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?i=o:i=(o-this.getDecimalForValue(t[t.length-2]))/2);const a=t.length<3?.5:.25;e=J(e,0,a),i=J(i,0,a),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){const t=this._adapter,e=this.min,i=this.max,n=this.options,o=n.time,a=o.unit||fo(o.minUnit,e,i,this._getLabelCapacity(e)),r=D(n.ticks.stepSize,1),l=a==="week"?o.isoWeekday:!1,d=ge(l)||l===!0,c={};let u=e,h,f;if(d&&(u=+t.startOf(u,"isoWeek",l)),u=+t.startOf(u,d?"day":a),t.diff(i,e,a)>1e5*r)throw new Error(e+" and "+i+" are too far apart with stepSize of "+r+" "+a);const m=n.ticks.source==="data"&&this.getDataTimestamps();for(h=u,f=0;h<i;h=+t.add(h,r,a),f++)go(c,h,m);return(h===i||n.bounds==="ticks"||f===1)&&go(c,h,m),Object.keys(c).sort(po).map(p=>+p)}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){const n=this.options.time.displayFormats,o=this._unit,a=e||n[o];return this._adapter.format(t,a)}_tickFormatFunction(t,e,i,n){const o=this.options,a=o.ticks.callback;if(a)return F(a,[t,e,i],this);const r=o.time.displayFormats,l=this._unit,d=this._majorUnit,c=l&&r[l],u=d&&r[d],h=i[e],f=d&&u&&h&&h.major;return this._adapter.format(t,n||(f?u:c))}generateTickLabels(t){let e,i,n;for(e=0,i=t.length;e<i;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,n=bt(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(n),a=Math.sin(n),r=this._resolveTickFontOptions(0).size;return{w:i*o+r*a,h:i*a+r*o}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,n=i[e.unit]||i.millisecond,o=this._tickFormatFunction(t,0,mo(this,[t],this._majorUnit),n),a=this._getLabelSize(o),r=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return r>0?r:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(e=0,i=n.length;e<i;++e)t=t.concat(n[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const n=this.getLabels();for(e=0,i=n.length;e<i;++e)t.push(ho(this,n[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Po(t.sort(po))}}A(Je,"id","time"),A(Je,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function fs(s,t,e){let i=0,n=s.length-1,o,a,r,l;e?(t>=s[i].pos&&t<=s[n].pos&&({lo:i,hi:n}=Dt(s,"pos",t)),{pos:o,time:r}=s[i],{pos:a,time:l}=s[n]):(t>=s[i].time&&t<=s[n].time&&({lo:i,hi:n}=Dt(s,"time",t)),{time:o,pos:r}=s[i],{time:a,pos:l}=s[n]);const d=a-o;return d?r+(l-r)*(t-o)/d:r}class Ai extends Je{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=fs(e,this.min),this._tableRange=fs(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,n=[],o=[];let a,r,l,d,c;for(a=0,r=t.length;a<r;++a)d=t[a],d>=e&&d<=i&&n.push(d);if(n.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(a=0,r=n.length;a<r;++a)c=n[a+1],l=n[a-1],d=n[a],Math.round((c+l)/2)!==d&&o.push({time:d,pos:a/(r-1)});return o}_generate(){const t=this.min,e=this.max;let i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((n,o)=>n-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(fs(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return fs(this._table,i*this._tableRange+this._minPos,!0)}}A(Ai,"id","timeseries"),A(Ai,"defaults",Je.defaults);var Ru=Object.freeze({__proto__:null,CategoryScale:Si,LinearScale:_i,LogarithmicScale:Ci,RadialLinearScale:Ie,TimeScale:Je,TimeSeriesScale:Ai});const Iu=[Ll,hc,lu,Ru];mt.register(...Iu);const Vs={commissioner:{role:"Commissioner",name:"Sri M. Dana Kishore, IAS",username:"commissioner",roleText:"Commissioner (GHMC)",modules:["dashboard","projects","users","settings"]},additional_comm:{role:"Additional Commissioner",name:"Smt. S. Priyanka, IAS",username:"additional_comm",roleText:"Addl. Commissioner (ERP)",modules:["dashboard","projects","settings"]},joint_comm:{role:"Joint Commissioner",name:"Sri V. Anand, KAS",username:"joint_comm",roleText:"Joint Commissioner (Admn)",modules:["dashboard","projects"]},se:{role:"Superintending Engineer",name:"Er. B. Venkanna",username:"se",roleText:"Superintending Engineer (SE)",modules:["dashboard","projects","settings"]},engineer:{role:"Executive Engineer",name:"Er. R. Sharma",username:"engineer",roleText:"Executive Engineer (EE)",modules:["dashboard","projects","settings"]},dyee:{role:"Deputy Executive Engineer",name:"Er. K. Mahesh",username:"dyee",roleText:"Deputy Executive Engineer (Dy.EE)",modules:["dashboard","projects"]},ae:{role:"Assistant Engineer",name:"Er. A. Srinivas",username:"ae",roleText:"Assistant Engineer (AE)",modules:["dashboard","projects"]},assistant:{role:"Senior Assistant",name:"Sri V. Kumar",username:"assistant",roleText:"Senior Assistant (Engg)",modules:["dashboard","projects"]},finance_officer:{role:"Finance Officer",name:"Smt. K. Anitha Reddy",username:"finance_officer",roleText:"Chief Finance Officer (CFO)",modules:["dashboard","projects"]},vendor:{role:"Vendor",name:"Global Infrastructure Ltd. (Contractor)",username:"vendor",roleText:"Authorized Contractor / Vendor",modules:["dashboard","projects"]},admin:{role:"Administrator",name:"System Root Operator",username:"admin",roleText:"System Administrator",modules:["dashboard","projects","users","settings"]}},rt=["Senior Assistant","Assistant Engineer","Deputy Executive Engineer","Executive Engineer","Superintending Engineer","Joint Commissioner","Additional Commissioner","Commissioner"],w={currentUser:null,activeView:"login",activeProject:null,activeModule:"dashboard",activeProjectModule:"tracking",captchaCode:0,notifications:[{id:1,title:"High Priority File Awaiting Clearance",text:"eOffice File FILE-2026-ENG-402 forwarded to you by Additional Commissioner.",time:"10 mins ago",read:!1},{id:2,title:"New Bill Uploaded by Contractor",text:"Global Infrastructure Ltd. uploaded invoice for Girder work of Rs. 35.0 Lakhs.",time:"2 hours ago",read:!0}],auditLogs:[{id:"AUD-3021",user:"Additional Commissioner",action:"Forwarded File FILE-2026-ENG-402 with remarks to Commissioner",date:"2026-07-03",time:"14:20",ip:"10.2.40.12",status:"Success"},{id:"AUD-3020",user:"Finance Officer",action:"Created Head of Account mapping for Zone-3 Bridges",date:"2026-07-03",time:"11:15",ip:"10.2.80.3",status:"Success"}],projects:[{id:"PRJ-8012",name:"Kondapur Flyover Construction & Widening",department:"Engineering",zone:"Zone-3 (Sherilingampally)",projectType:"Flyover & Grade Separator",status:"In Progress",startDate:"2025-04-12",endDate:"2026-12-15",officerInCharge:"Er. R. Sharma",progress:61,budget:15e7,spent:92e6,description:"Construction of a 4-lane grade separator flyover to ease vehicular bottlenecks at the Kondapur traffic junction corridor.",lastUpdated:"2026-07-03 15:41"},{id:"PRJ-3041",name:"JNTU Junction Stormwater Drain Overhaul",department:"Drainage & Sewerage",zone:"Zone-2 (Kukatpally)",projectType:"Box Drain & Pipe Network",status:"Under Audit",startDate:"2025-06-01",endDate:"2026-05-30",officerInCharge:"Er. P. Srinivas",progress:90,budget:42e6,spent:38e6,description:"Full concrete box-drain renovation and capacity enhancement of stormwater discharge channels running parallel to the JNTU arterial road.",lastUpdated:"2026-07-01 10:15"},{id:"PRJ-5022",name:"Serilingampally Smart Streetlights Phase-2",department:"Electrical & Lighting",zone:"Zone-4 (Secunderabad)",projectType:"Smart Grid LED Network",status:"Completed",startDate:"2025-09-15",endDate:"2026-02-28",officerInCharge:"Er. M. Venkatesh",progress:100,budget:18e6,spent:18e6,description:"Supply, installation, and cloud-gateway commissioning of 1,200 smart light-emitting diode (LED) lamps across municipal layouts.",lastUpdated:"2026-06-30 09:00"},{id:"PRJ-1090",name:"Gachibowli Ring Road Resurfacing Project",department:"Engineering",zone:"Zone-3 (Sherilingampally)",projectType:"Road Laying & Bituminous Overlay",status:"Planning",startDate:"2026-08-01",endDate:"2027-04-15",officerInCharge:"Er. K. Prasad",progress:0,budget:25e7,spent:0,description:"Major bituminous overlay resurfacing, structural asphalt correction, and hot-mix laying for the Gachibowli outer ring road bypass lanes.",lastUpdated:"2026-07-02 11:00"},{id:"PRJ-7720",name:"Kukatpally Integrated Public Park Development",department:"Landscaping & Parks",zone:"Zone-2 (Kukatpally)",projectType:"Public Infrastructure Development",status:"On Hold",startDate:"2025-02-10",endDate:"2026-08-30",officerInCharge:"Er. S. Ramakrishna",progress:20,budget:75e6,spent:15e6,description:"Establishment of an eco-friendly public park featuring native tree forestry, walking walkways, and rainwater-harvesting reservoirs.",lastUpdated:"2026-06-15 14:00"},{id:"PRJ-2026-IT-008",name:"IVR Outbound Call Campaign – Property Tax Scheme",department:"Information Technology",zone:"Head Office",projectType:"IVR Outreach & Public Campaign",status:"Completed",startDate:"2026-04-18",endDate:"2026-06-04",officerInCharge:"Er. G.N. Sai Ram",progress:100,budget:5e5,spent:5e5,description:"Publicity campaign for Early Bird Property Tax Scheme (5% rebate) for FY 2026-27 by executing automated IVR outbound calls targeting 6.5 Lakh citizens.",lastUpdated:"2026-06-04 17:00"}],eOfficeFiles:[{id:"FILE-2026-ENG-402",projectId:"PRJ-8012",subject:"Administrative Sanction for additional lane acquisition at Kondapur Junction",department:"Engineering (Zone-3)",currentCustodian:"Commissioner",priority:"High",status:"Pending Review",attachments:["Land_Acquisition_Report_V2.pdf","Compensation_Matrix_Signed.pdf"],notes:[{writer:"Senior Assistant (Sri V. Kumar)",text:"Verified land survey numbers and area markings. Total area required: 1.2 acres. Proposal forwarded for technical clearance.",date:"2026-06-25 10:30"},{writer:"Executive Engineer (Er. R. Sharma)",text:"Recommended for execution. Technical drawing aligns with master structural blueprints. Standard compensation parameters mapped.",date:"2026-06-28 14:15"},{writer:"Addl. Commissioner (Smt. S. Priyanka, IAS)",text:"Acquisition estimates match public works regulations. File forwarded to Commissioner for final administrative and financial sanction.",date:"2026-07-03 14:20"}],lastUpdated:"2026-07-03"},{id:"FILE-2026-FIN-910",projectId:"PRJ-8012",subject:"Revised budget estimation sanction for steel girder foundations",department:"Finance Division",currentCustodian:"Finance Officer",priority:"High",status:"Under Verification",attachments:["Revised_Girder_Estimate.pdf"],notes:[{writer:"Executive Engineer (Er. R. Sharma)",text:"Escalation of raw material prices warrants a 15% budget revision on standard girder structural concrete work. Proposal uploaded.",date:"2026-07-02 09:12"}],lastUpdated:"2026-07-02"},{id:"FILE-IT/COM/0008/2026",projectId:"PRJ-2026-IT-008",subject:"Providing of IVR Outbound Call Campaign – Early Bird Property Tax Scheme 2026-27 of GHMC – According administrative Sanction and Agency approval – Request – Reg.",department:"Information Technology Division",currentCustodian:"Approved / Closed",priority:"High",status:"Approved / Closed",attachments:["ghmc.pdf","Invoice_TS-26-27-GHMC-0186.pdf","Costing_Proposal.pdf"],notes:[{writer:"G. SATYANARAYANA (SR.ASST-1(IT)-HO)",text:'It is submitted that the Commissioner, GHMC has instructed the IT Section to give wide publicity for the Early Bird Property Tax Scheme (5% rebate) by adopting various modes such as SMS, call campaigns, etc., to ensure maximum outreach before 30th April 2026. In this regard, the IT Section is already sending SMS on a daily basis and further proposes to undertake an IVR Outbound Call Campaign to create awareness among citizens who have not yet paid their Property Tax for the financial year 2026-27. Approach has been made to M/s. EMRI Green Health Services, present call center operator, who proposed to cover 6.5 lakh mobile numbers for a lump sum cost of Rs. 5,00,000/- (Excl GST). The expenditure may be met from the head of account "02A-0201-22012-01" (Communication Expenses). Submitted for approval.',date:"2026-04-20 09:13"},{writer:"G.N. SAI RAM (AE-3(IT)HO)",text:"Recommended for sanction. The agency EMRI GHS currently manages the civic helpline and has the necessary outbound calling setup.",date:"2026-04-21 12:23"},{writer:"NARSING RAO KORMI (DY.EE-2(IT)-HO)",text:"Entrusting work to existing call center agency is technically feasible and cost-effective. Forwarded for administrative approval.",date:"2026-04-21 12:27"},{writer:"C RADHA (JC(IT)HO)",text:"Supported. Early bird campaign is a time-bound revenue generation scheme. Proposal forwarded.",date:"2026-04-21 12:28"},{writer:"MANDA MAKARANDU IAS (ADDL. COMMR(IT))",text:"Recommended. Early bird tax collections require intensive calling push to maximize rebate outreach before April 30 deadline.",date:"2026-04-21 13:35"},{writer:"R V KARNAN IAS (COMMISSIONER)",text:"ok",date:"2026-04-21 15:42"},{writer:"MANDA MAKARANDU IAS (ADDL. COMMR(IT))",text:"Commissioner approved at para 10. Work Order draft DFA/125546 placed in drafts for signature.",date:"2026-04-23 17:22"},{writer:"K. SARATH CHANDRA (FINANCIAL ADVISOR)",text:'Budget entry has been provided vide BAS No. HO-26004560/2026-27. Mappable head of account "02A-0201-22012-01". Supporting proceedings placed in drafts.',date:"2026-05-20 16:32"},{writer:"G. SATYANARAYANA (SR.ASST-1(IT)-HO)",text:"Invoice TS/26-27/GHMC/0186 Dt: 05.05.2026 from EMRI GHS submitted for payment release of Rs. 5,00,000/- based on completion report. Call campaign reports attached (Total calls: 815,707, connected: 146,497). Draft proceedings DFA/127210 placed for signature.",date:"2026-06-04 16:13"}],lastUpdated:"2026-06-04"}],workOrders:[{id:"WO-4012",projectId:"PRJ-8012",title:"Superstructure Girder Erection Work",vendor:"Global Infrastructure Ltd.",amount:35e6,currentStage:"Vendor Execution",stageHistory:{Requirement:"2025-05-10",Proposal:"2025-05-20","Administrative Sanction":"2025-06-05",Tendering:"2025-07-11","Technical Bid":"2025-08-01","Financial Bid":"2025-08-15","Contract Award":"2025-09-02","Work Order":"2025-09-20","Vendor Execution":"2025-10-01"},updates:[{date:"2026-01-15",text:"Foundation concrete pile work completed."},{date:"2026-05-20",text:"Sub-structure concrete pillars fully cured."}]},{id:"WO-4021",projectId:"PRJ-8012",title:"Service Road Blacktopping & Lane Marking",vendor:"Aravind Constructions",amount:85e5,currentStage:"Invoice",stageHistory:{Requirement:"2025-06-01",Proposal:"2025-06-15","Administrative Sanction":"2025-07-02",Tendering:"2025-08-01","Technical Bid":"2025-08-20","Financial Bid":"2025-09-01","Contract Award":"2025-09-15","Work Order":"2025-10-05","Vendor Execution":"2025-11-12",Invoice:"2026-07-02"},updates:[{date:"2026-02-12",text:"Grading and earth-leveling operations finished."},{date:"2026-06-15",text:"Bituminous layer blacktop asphalt poured."}]},{id:"WO-401476",projectId:"PRJ-2026-IT-008",title:"IVR Outbound Call Campaign Services",vendor:"M/s. EMRI Green Health Services",amount:5e5,currentStage:"Payment Released",stageHistory:{Requirement:"2026-04-18",Proposal:"2026-04-20","Administrative Sanction":"2026-04-21","Work Order":"2026-04-24","Vendor Execution":"2026-04-25",Invoice:"2026-05-05","Budget Allocation":"2026-05-20","Finance Approval":"2026-06-03","Payment Released":"2026-06-04"},updates:[{date:"2026-04-23",text:"IVR campaign configuration & SIP lines setup."},{date:"2026-04-30",text:"IVR campaign completed. 8.15 Lakh calls triggered."}]}],bills:[{id:"BILL-901",projectId:"PRJ-8012",woId:"WO-4021",vendor:"Aravind Constructions",amount:4e6,headOfAccount:"",status:"Pending Budget Allocation",date:"2026-07-02"},{id:"BILL-TS/26-27/0186",projectId:"PRJ-2026-IT-008",woId:"WO-401476",vendor:"M/s. EMRI Green Health Services",amount:5e5,headOfAccount:"02A-0201-22012-01",status:"Paid",date:"2026-05-05"}],headOfAccounts:[{code:"4120-ENG-CAP-Z3",description:"Capital Outlay Zone-3 Flyovers & Grade Separators",allocation:12e7,spent:82e6,balance:38e6},{code:"4120-ENG-REV-MNT",description:"Revenue Outlay Road Maintenance and Asphalt works",allocation:3e7,spent:1e7,balance:2e7},{code:"02A-0201-22012-01",description:"IT Division Communication Expenses (IVR & SMS campaigns)",allocation:5e6,spent:5e5,balance:45e5}],eOfficeNotes:[{id:"NOTE-2026-ENG-042",fileNumber:"FILE/ENG/2026/042",subject:"Initiation of Smart Streetlighting Grid in Zone-4",projectName:"Zone-4 Smart LED Streetlighting Phase-3",department:"Electrical & Lighting",zone:"Zone-4 (Secunderabad)",description:"Proposed installation of 1500 smart LED streetlights connected to the Centralized Monitoring and Control System (CCMS).",purpose:"Energy efficiency and smart grid integration",background:"Following the successful execution of Phase-2 (PRJ-5022), Phase-3 covers the remaining wards of Secunderabad.",estimatedBudget:22e6,budgetHead:"4120-ENG-REV-MNT",justification:"Reduces electricity consumption by 40% and provides automated failure reporting.",benefits:"Improved citizen safety, lower maintenance expenditure.",priority:"High",attachments:["CCMS_Technical_Spec_v1.pdf","Smart_LED_Savings_Feasibility.pdf"],remarks:"Estimated budget increased by Rs. 20 Lakhs to account for additional CCMS gateway controller hardware.",additionalConditions:"Gateways must support 4G/5G dual band.",status:"Pending",currentCustodian:"Commissioner",creatorRole:"Senior Assistant",creatorName:"Sri V. Kumar",createdDate:"2026-07-01",createdTime:"10:00",versions:[{version:"v1.0",modifiedBy:"Sri V. Kumar",modifiedRole:"Senior Assistant",modifiedDate:"2026-07-01",modifiedTime:"10:00",subject:"Initiation of Smart Streetlighting Grid in Zone-4",projectName:"Zone-4 Smart LED Streetlighting Phase-3",description:"Proposed installation of 1500 smart LED streetlights connected to the Centralized Monitoring and Control System (CCMS).",purpose:"Energy efficiency and smart grid integration",background:"Following the successful execution of Phase-2 (PRJ-5022), Phase-3 covers the remaining wards of Secunderabad.",estimatedBudget:2e7,budgetHead:"4120-ENG-REV-MNT",justification:"Reduces electricity consumption by 40% and provides automated failure reporting.",benefits:"Improved citizen safety, lower maintenance expenditure.",priority:"High",remarks:"Note sheet created and initiated.",additionalConditions:""},{version:"v1.1",modifiedBy:"Er. R. Sharma",modifiedRole:"Executive Engineer",modifiedDate:"2026-07-02",modifiedTime:"11:15",subject:"Initiation of Smart Streetlighting Grid in Zone-4",projectName:"Zone-4 Smart LED Streetlighting Phase-3",description:"Proposed installation of 1500 smart LED streetlights connected to the Centralized Monitoring and Control System (CCMS).",purpose:"Energy efficiency and smart grid integration",background:"Following the successful execution of Phase-2 (PRJ-5022), Phase-3 covers the remaining wards of Secunderabad.",estimatedBudget:22e6,budgetHead:"4120-ENG-REV-MNT",justification:"Reduces electricity consumption by 40% and provides automated failure reporting.",benefits:"Improved citizen safety, lower maintenance expenditure.",priority:"High",remarks:"Estimated budget increased by Rs. 20 Lakhs to account for additional CCMS gateway controller hardware.",additionalConditions:"Gateways must support 4G/5G dual band."}],workflowStatus:{"Senior Assistant":"Approved","Assistant Engineer":"Approved","Deputy Executive Engineer":"Approved","Executive Engineer":"Approved","Superintending Engineer":"Approved","Joint Commissioner":"Approved","Additional Commissioner":"Approved",Commissioner:"Pending"},approvalHistory:[{officerName:"Sri V. Kumar",role:"Senior Assistant",department:"Engineering (Zone-3)",action:"Initiated & Forwarded",remarks:"Note sheet created for Secunderabad streetlight expansion project.",dateTime:"2026-07-01 10:05",status:"Cleared",versionNumber:"v1.0"},{officerName:"Er. A. Srinivas",role:"Assistant Engineer",department:"Engineering (Zone-4)",action:"Recommended & Forwarded",remarks:"Wards verified. Recommended for further administrative clearance.",dateTime:"2026-07-01 14:22",status:"Cleared",versionNumber:"v1.0"},{officerName:"Er. K. Mahesh",role:"Deputy Executive Engineer",department:"Engineering (Zone-4)",action:"Recommended & Forwarded",remarks:"Aligned with smart city objectives. Forwarded.",dateTime:"2026-07-02 09:12",status:"Cleared",versionNumber:"v1.0"},{officerName:"Er. R. Sharma",role:"Executive Engineer",department:"Engineering (Zone-3)",action:"Edited, Recommended & Forwarded",remarks:"Estimated budget increased by Rs. 20 Lakhs to account for additional CCMS gateway controller hardware.",dateTime:"2026-07-02 11:15",status:"Cleared",versionNumber:"v1.1"},{officerName:"Er. B. Venkanna",role:"Superintending Engineer",department:"Engineering",action:"Recommended & Forwarded",remarks:"Reviewed and forwarded for JC clearance.",dateTime:"2026-07-02 15:40",status:"Cleared",versionNumber:"v1.1"},{officerName:"Sri V. Anand, KAS",role:"Joint Commissioner",department:"Administration Division",action:"Recommended & Forwarded",remarks:"Administrative feasibility verified.",dateTime:"2026-07-03 10:00",status:"Cleared",versionNumber:"v1.1"},{officerName:"Smt. S. Priyanka, IAS",role:"Additional Commissioner",department:"ERP Operations Division",action:"Recommended & Forwarded",remarks:"Forwarded for final approval and sanction.",dateTime:"2026-07-03 16:30",status:"Cleared",versionNumber:"v1.1"}],auditLogs:[{user:"Sri V. Kumar",role:"Senior Assistant",date:"2026-07-01",time:"10:00",ip:"10.2.14.8",action:"Note Created",previousValue:"-",newValue:"v1.0 Initial Draft"},{user:"Er. R. Sharma",role:"Executive Engineer",date:"2026-07-02",time:"11:15",ip:"10.2.5.91",action:"Modify Budget",previousValue:"Rs. 20,000,000",newValue:"Rs. 22,000,000 (v1.1)"}]},{id:"NOTE-2026-ENG-043",fileNumber:"FILE/ENG/2026/043",subject:"CC Road construction at Gachibowli sector-2",projectName:"Gachibowli CC Road Sector-2 Development",department:"Engineering",zone:"Zone-3 (Sherilingampally)",description:"Laying of cement concrete (CC) road in inner lane segments of Gachibowli sector-2 ward.",purpose:"Waterlogging prevention and road strengthening",background:"Inner lane segments suffer from water stagnation during monsoons, damaging bituminous surfaces.",estimatedBudget:85e5,budgetHead:"4120-ENG-REV-MNT",justification:"CC road has a life of 20 years with zero maintenance in water stagnation-prone areas.",benefits:"Citizens will have reliable all-weather access roads.",priority:"Medium",attachments:[],remarks:"",additionalConditions:"",status:"Pending",currentCustodian:"Assistant Engineer",creatorRole:"Senior Assistant",creatorName:"Sri V. Kumar",createdDate:"2026-07-03",createdTime:"11:00",versions:[{version:"v1.0",modifiedBy:"Sri V. Kumar",modifiedRole:"Senior Assistant",modifiedDate:"2026-07-03",modifiedTime:"11:00",subject:"CC Road construction at Gachibowli sector-2",projectName:"Gachibowli CC Road Sector-2 Development",description:"Laying of cement concrete (CC) road in inner lane segments of Gachibowli sector-2 ward.",purpose:"Waterlogging prevention and road strengthening",background:"Inner lane segments suffer from water stagnation during monsoons, damaging bituminous surfaces.",estimatedBudget:85e5,budgetHead:"4120-ENG-REV-MNT",justification:"CC road has a life of 20 years with zero maintenance in water stagnation-prone areas.",benefits:"Citizens will have reliable all-weather access roads.",priority:"Medium",remarks:"Initiated for review.",additionalConditions:""}],workflowStatus:{"Senior Assistant":"Approved","Assistant Engineer":"Pending","Deputy Executive Engineer":"Waiting","Executive Engineer":"Waiting","Superintending Engineer":"Waiting","Joint Commissioner":"Waiting","Additional Commissioner":"Waiting",Commissioner:"Waiting"},approvalHistory:[{officerName:"Sri V. Kumar",role:"Senior Assistant",department:"Engineering (Zone-3)",action:"Initiated & Forwarded",remarks:"CC road proposal for Gachibowli inner lanes.",dateTime:"2026-07-03 11:05",status:"Cleared",versionNumber:"v1.0"}],auditLogs:[{user:"Sri V. Kumar",role:"Senior Assistant",date:"2026-07-03",time:"11:00",ip:"10.2.14.8",action:"Note Created",previousValue:"-",newValue:"v1.0 Initial Draft"}]},{id:"NOTE-2026-ENG-044",fileNumber:"FILE/ENG/2026/044",subject:"Sanitation Corridor Maintenance System",projectName:"Sanitation Corridor IoT Tracking Pilot",department:"Drainage & Sewerage",zone:"Zone-2 (Kukatpally)",description:"Laying out IoT sensor networks on major drainage gates to monitor blockage levels in real-time.",purpose:"Proactive disaster drainage monitoring",background:"Monsoon flooding at Kukatpally is caused by sudden garbage choke points in stormwater outlets.",estimatedBudget:45e5,budgetHead:"4120-ENG-CAP-Z3",justification:"Allows alerts to municipal workers before flooding occurs.",benefits:"Drastically reduces sewer backups.",priority:"Low",attachments:[],remarks:"Re-initiated with corrected budget.",additionalConditions:"",status:"Returned",currentCustodian:"Senior Assistant",creatorRole:"Senior Assistant",creatorName:"Sri V. Kumar",createdDate:"2026-07-02",createdTime:"15:20",versions:[{version:"v1.0",modifiedBy:"Sri V. Kumar",modifiedRole:"Senior Assistant",modifiedDate:"2026-07-02",modifiedTime:"15:20",subject:"Sanitation Corridor Maintenance System",projectName:"Sanitation Corridor IoT Tracking Pilot",description:"Laying out IoT sensor networks on major drainage gates to monitor blockage levels in real-time.",purpose:"Proactive disaster drainage monitoring",background:"Monsoon flooding at Kukatpally is caused by sudden garbage choke points in stormwater outlets.",estimatedBudget:6e6,budgetHead:"4120-ENG-CAP-Z3",justification:"Allows alerts to municipal workers before flooding occurs.",benefits:"Drastically reduces sewer backups.",priority:"Low",remarks:"Initial initiation.",additionalConditions:""},{version:"v1.1",modifiedBy:"Sri V. Kumar",modifiedRole:"Senior Assistant",modifiedDate:"2026-07-03",modifiedTime:"09:30",subject:"Sanitation Corridor Maintenance System",projectName:"Sanitation Corridor IoT Tracking Pilot",description:"Laying out IoT sensor networks on major drainage gates to monitor blockage levels in real-time.",purpose:"Proactive disaster drainage monitoring",background:"Monsoon flooding at Kukatpally is caused by sudden garbage choke points in stormwater outlets.",estimatedBudget:45e5,budgetHead:"4120-ENG-CAP-Z3",justification:"Allows alerts to municipal workers before flooding occurs.",benefits:"Drastically reduces sewer backups.",priority:"Low",remarks:"Budget reduced from Rs. 60 Lakhs to Rs. 45 Lakhs to adjust scope as requested by AE.",additionalConditions:""}],workflowStatus:{"Senior Assistant":"Returned","Assistant Engineer":"Returned","Deputy Executive Engineer":"Waiting","Executive Engineer":"Waiting","Superintending Engineer":"Waiting","Joint Commissioner":"Waiting","Additional Commissioner":"Waiting",Commissioner:"Waiting"},approvalHistory:[{officerName:"Sri V. Kumar",role:"Senior Assistant",department:"Engineering (Zone-3)",action:"Initiated & Forwarded",remarks:"Sanitation tracker proposal.",dateTime:"2026-07-02 15:22",status:"Cleared",versionNumber:"v1.0"},{officerName:"Er. A. Srinivas",role:"Assistant Engineer",department:"Engineering (Zone-4)",action:"Returned for Correction",remarks:"Estimated cost is too high for a pilot project. Reduce budget to under Rs. 50 Lakhs.",dateTime:"2026-07-02 17:15",status:"Returned",versionNumber:"v1.0"}],auditLogs:[{user:"Sri V. Kumar",role:"Senior Assistant",date:"2026-07-02",time:"15:20",ip:"10.2.14.8",action:"Note Created",previousValue:"-",newValue:"v1.0 Initial Draft"},{user:"Er. A. Srinivas",role:"Assistant Engineer",date:"2026-07-02",time:"17:15",ip:"10.2.5.91",action:"Returned to creator",previousValue:"Pending Review",newValue:"Returned"},{user:"Sri V. Kumar",role:"Senior Assistant",date:"2026-07-03",time:"09:30",ip:"10.2.14.8",action:"Resubmit Correction",previousValue:"Rs. 6,000,000",newValue:"Rs. 4,500,000 (v1.1)"}]}]},_t={"PRJ-8012":[{id:"DOC-801",name:"Admin_Sanction_Order_PRJ8012.pdf",type:"pdf",uploadedBy:"Smt. S. Priyanka, IAS",uploadedDate:"2025-06-05",version:"v1.0",status:"Approved",size:"2.4 MB",category:"Administrative Sanctions"},{id:"DOC-802",name:"Land_Acquisition_Sanction_GOP.pdf",type:"pdf",uploadedBy:"Sri M. Dana Kishore, IAS",uploadedDate:"2026-07-03",version:"v2.1",status:"Approved",size:"4.8 MB",category:"Administrative Sanctions"},{id:"DOC-803",name:"Structural_Blueprint_Kondapur_V3.pdf",type:"pdf",uploadedBy:"Er. R. Sharma",uploadedDate:"2025-08-01",version:"v3.2",status:"Active",size:"15.6 MB",category:"Drawings"},{id:"DOC-804",name:"Traffic_Diversion_Map_Zone3.pdf",type:"pdf",uploadedBy:"Er. R. Sharma",uploadedDate:"2025-09-10",version:"v1.0",status:"Active",size:"1.2 MB",category:"Drawings"},{id:"DOC-805",name:"Civil_Foundation_Soil_Testing.pdf",type:"pdf",uploadedBy:"Er. R. Sharma",uploadedDate:"2025-07-15",version:"v1.1",status:"Archived",size:"6.1 MB",category:"Estimates"},{id:"DOC-806",name:"Girder_Structural_Cost_Estimate.pdf",type:"pdf",uploadedBy:"Er. R. Sharma",uploadedDate:"2025-05-20",version:"v1.0",status:"Active",size:"3.3 MB",category:"Estimates"},{id:"DOC-807",name:"Tender_Award_Notification_Flyover.pdf",type:"pdf",uploadedBy:"Sri V. Anand, KAS",uploadedDate:"2025-09-02",version:"v1.0",status:"Approved",size:"920 KB",category:"Tender Documents"},{id:"DOC-808",name:"WO_Girder_Erection_WO4012.pdf",type:"pdf",uploadedBy:"Er. R. Sharma",uploadedDate:"2025-09-20",version:"v1.0",status:"Active",size:"1.8 MB",category:"Work Orders"},{id:"DOC-809",name:"WO_Blacktopping_WO4021.pdf",type:"pdf",uploadedBy:"Er. R. Sharma",uploadedDate:"2025-10-05",version:"v1.0",status:"Active",size:"1.4 MB",category:"Work Orders"},{id:"DOC-810",name:"EE_Technical_Clearance_Girder.pdf",type:"pdf",uploadedBy:"Er. R. Sharma",uploadedDate:"2025-08-10",version:"v1.0",status:"Approved",size:"540 KB",category:"Approvals"},{id:"DOC-811",name:"Contractor_Progress_Bill_WO4021.pdf",type:"pdf",uploadedBy:"Global Infrastructure Ltd.",uploadedDate:"2026-07-02",version:"v1.0",status:"Pending Review",size:"4.2 MB",category:"Bills"},{id:"DOC-812",name:"Invoice_Claim_Aravind_Road.pdf",type:"pdf",uploadedBy:"Aravind Constructions",uploadedDate:"2026-07-02",version:"v1.0",status:"Pending Payment",size:"1.9 MB",category:"Invoices"},{id:"DOC-813",name:"Foundation_Concrete_Completion.pdf",type:"pdf",uploadedBy:"Er. R. Sharma",uploadedDate:"2026-01-15",version:"v1.0",status:"Approved",size:"2.8 MB",category:"Completion Certificates"},{id:"DOC-814",name:"Environmental_NOC_PollutionBoard.pdf",type:"pdf",uploadedBy:"Sri V. Anand, KAS",uploadedDate:"2025-03-10",version:"v1.0",status:"Approved",size:"3.1 MB",category:"Other Attachments"}],"PRJ-3041":[{id:"DOC-301",name:"Stormwater_Admin_Sanction.pdf",type:"pdf",uploadedBy:"Smt. S. Priyanka, IAS",uploadedDate:"2025-07-02",version:"v1.0",status:"Approved",size:"2.1 MB",category:"Administrative Sanctions"},{id:"DOC-302",name:"Box_Drain_Hydraulic_Drawings.pdf",type:"pdf",uploadedBy:"Er. P. Srinivas",uploadedDate:"2025-08-20",version:"v1.2",status:"Active",size:"8.9 MB",category:"Drawings"}],"PRJ-2026-IT-008":[{id:"DOC-IT-801",name:"ghmc.pdf",type:"pdf",uploadedBy:"Sri G. Satyanarayana",uploadedDate:"2026-04-20",version:"v1.0",status:"Approved",size:"25.8 KB",category:"Administrative Sanctions"},{id:"DOC-IT-802",name:"Proposal_EMRI_GHS_OutboundCall.pdf",type:"pdf",uploadedBy:"EMRI Green Health Services",uploadedDate:"2026-04-20",version:"v1.0",status:"Approved",size:"1.2 MB",category:"Tender Documents"},{id:"DOC-IT-803",name:"WO_IVR_OutboundCall_WO401476.pdf",type:"pdf",uploadedBy:"Er. G.N. Sai Ram",uploadedDate:"2026-04-24",version:"v1.0",status:"Active",size:"890 KB",category:"Work Orders"},{id:"DOC-IT-804",name:"Invoice_TS-26-27-GHMC-0186.pdf",type:"pdf",uploadedBy:"EMRI Green Health Services",uploadedDate:"2026-05-05",version:"v1.0",status:"Pending Payment",size:"1.4 MB",category:"Bills"},{id:"DOC-IT-805",name:"Connected_Calls_Summary_Report.pdf",type:"pdf",uploadedBy:"EMRI Green Health Services",uploadedDate:"2026-05-05",version:"v1.0",status:"Approved",size:"640 KB",category:"Other Attachments"}]},xa={"PRJ-8012":[{stage:"Requirement",officer:"Sri V. Kumar",department:"Senior Assistant (Engg)",dateTime:"2025-05-10 10:15",status:"Completed",remarks:"Identified chronic bottleneck at Kondapur junction. Traffic gridlocks exceed 25 mins during peak hours.",pendingWith:"None"},{stage:"Proposal Created",officer:"Er. R. Sharma",department:"Executive Engineer",dateTime:"2025-05-20 14:30",status:"Completed",remarks:"Designed a 4-lane grade separator layout proposal with service road expansion grids.",pendingWith:"None"},{stage:"Technical Review",officer:"Er. R. Sharma",department:"Executive Engineer",dateTime:"2025-05-28 11:00",status:"Completed",remarks:"Structural designs cleared by engineering panel. Soil load capacity parameters certified.",pendingWith:"None"},{stage:"Administrative Approval",officer:"Smt. S. Priyanka, IAS",department:"Addl. Commissioner",dateTime:"2025-06-05 16:45",status:"Completed",remarks:"Administrative sanction granted. Approved project budget: Rs. 15.0 Crores.",pendingWith:"None"},{stage:"Financial Approval",officer:"Smt. K. Anitha Reddy",department:"Chief Finance Officer",dateTime:"2025-06-12 12:20",status:"Completed",remarks:"Fund reserve allocated under Capital Outlay Code 4120-ENG-CAP-Z3.",pendingWith:"None"},{stage:"Work Order Issued",officer:"Er. R. Sharma",department:"Executive Engineer",dateTime:"2025-09-20 09:30",status:"Completed",remarks:"Work Order WO-4012 released to Global Infrastructure Ltd.",pendingWith:"None"},{stage:"Execution",officer:"Global Infrastructure Ltd.",department:"Contractor",dateTime:"2026-05-20 17:00",status:"Completed",remarks:"Pillar erection, concrete foundation, and support structures completed.",pendingWith:"None"},{stage:"Invoice Submitted",officer:"Global Infrastructure Ltd.",department:"Contractor",dateTime:"2026-07-02 11:30",status:"Completed",remarks:"Invoice submitted for foundation completion milestone. Claim: Rs. 3.5 Crores.",pendingWith:"None"},{stage:"Budget Allocation",officer:"Smt. K. Anitha Reddy",department:"Chief Finance Officer",dateTime:"2026-07-03 11:15",status:"Completed",remarks:"Linked budget account and mapped payment ledger codes.",pendingWith:"None"},{stage:"Payment Released",officer:"Smt. K. Anitha Reddy",department:"Chief Finance Officer",dateTime:"2026-07-03 15:40",status:"In Progress",remarks:"Treasury payment processing. Clearance scheduled within 24 hours.",pendingWith:"Additional Commissioner"},{stage:"Project Completed",officer:"Er. R. Sharma",department:"Executive Engineer",dateTime:"Pending",status:"Pending",remarks:"Final paving and smart system commission operations to follow.",pendingWith:"Contractor / EE"}],"PRJ-2026-IT-008":[{stage:"Requirement",officer:"Sri G. Satyanarayana",department:"Senior Assistant (IT)",dateTime:"2026-04-18 10:15",status:"Completed",remarks:"Commissioner instructed IT Section to launch call campaign targeting early bird property tax rebate outreach.",pendingWith:"None"},{stage:"Proposal Created",officer:"EMRI Green Health Services",department:"Call Center Agency",dateTime:"2026-04-20 14:30",status:"Completed",remarks:"Submitted costing proposal of Rs. 5.0 Lakhs to target 6.5 Lakh citizens.",pendingWith:"None"},{stage:"Technical Review",officer:"Er. G.N. Sai Ram",department:"Assistant Engineer",dateTime:"2026-04-21 11:00",status:"Completed",remarks:"Technical feasibility verified. Agency possesses existing infrastructure.",pendingWith:"None"},{stage:"Administrative Approval",officer:"R V KARNAN IAS",department:"Commissioner",dateTime:"2026-04-21 15:42",status:"Completed",remarks:"Administrative sanction granted for Rs. 5 Lakhs.",pendingWith:"None"},{stage:"Work Order Issued",officer:"Er. G.N. Sai Ram",department:"Assistant Engineer",dateTime:"2026-04-24 09:30",status:"Completed",remarks:"Work Order WO-401476 issued to EMRI GHS.",pendingWith:"None"},{stage:"Execution",officer:"EMRI Green Health Services",department:"Agency",dateTime:"2026-04-30 17:00",status:"Completed",remarks:"IVR Outbound Call campaign completed. Connected calls: 146,497. Not connected: 570,210.",pendingWith:"None"},{stage:"Invoice Submitted",officer:"EMRI Green Health Services",department:"Agency",dateTime:"2026-05-05 11:30",status:"Completed",remarks:"Invoice TS/26-27/GHMC/0186 submitted for Rs. 5,00,000/-",pendingWith:"None"},{stage:"Budget Allocation",officer:"K. SARATH CHANDRA",department:"Financial Advisor",dateTime:"2026-05-20 16:32",status:"Completed",remarks:"Budget entry provided vide BAS No. HO-26004560/2026-27.",pendingWith:"None"},{stage:"Payment Released",officer:"K. SARATH CHANDRA",department:"Financial Advisor",dateTime:"2026-06-04 15:40",status:"Completed",remarks:"Payment released in full. Transaction finalized.",pendingWith:"None"},{stage:"Project Completed",officer:"Er. G.N. Sai Ram",department:"Assistant Engineer",dateTime:"2026-06-04 17:00",status:"Completed",remarks:"Outreach campaign successfully executed and fully settled.",pendingWith:"None"}]},Hs={"PRJ-8012":[{name:"Sri M. Dana Kishore, IAS",role:"Commissioner",department:"Executive wing",avatarText:"DK"},{name:"Smt. S. Priyanka, IAS",role:"Additional Commissioner",department:"ERP Operations Division",avatarText:"SP"},{name:"Sri V. Anand, KAS",role:"Joint Commissioner",department:"Administration Division",avatarText:"VA"},{name:"Er. R. Sharma",role:"Executive Engineer",department:"Engineering (Zone-3)",avatarText:"RS"},{name:"Sri V. Kumar",role:"Senior Assistant",department:"Engineering (Zone-3)",avatarText:"VK"},{name:"Smt. K. Anitha Reddy",role:"Chief Finance Officer",department:"Finance Division",avatarText:"AR"},{name:"Global Infrastructure Ltd.",role:"Lead Contractor",department:"External Partner",avatarText:"GI"}],"PRJ-3041":[{name:"Er. P. Srinivas",role:"Executive Engineer",department:"Drainage & Sewerage",avatarText:"PS"},{name:"Sri V. Kumar",role:"Senior Assistant",department:"Drainage & Sewerage",avatarText:"VK"},{name:"Aravind Constructions",role:"Contractor",department:"External Partner",avatarText:"AC"}],"PRJ-2026-IT-008":[{name:"R V KARNAN IAS",role:"Commissioner",department:"Executive wing",avatarText:"RK"},{name:"MANDA MAKARANDU IAS",role:"Additional Commissioner",department:"IT Division",avatarText:"MM"},{name:"C RADHA",role:"Joint Commissioner",department:"IT Division",avatarText:"CR"},{name:"Er. Narsing Rao Kormi",role:"Deputy Executive Engineer",department:"IT Division",avatarText:"NK"},{name:"Er. G.N. Sai Ram",role:"Assistant Engineer",department:"IT Division",avatarText:"SR"},{name:"Sri G. Satyanarayana",role:"Senior Assistant",department:"IT Division",avatarText:"GS"},{name:"M/s. EMRI Green Health Services",role:"Agency Partner",department:"Call Center Ops",avatarText:"EM"}]},Mi={"PRJ-8012":[{date:"2026-07-03",time:"15:40",actor:"Finance Officer",activity:"Cleared bill payment release transaction for Bill BILL-901."},{date:"2026-07-03",time:"14:20",actor:"Addl. Commissioner",activity:"Forwarded File FILE-2026-ENG-402 with remarks to Commissioner."},{date:"2026-07-03",time:"11:15",actor:"Finance Officer",activity:"Linked budget head 4120-ENG-CAP-Z3 to Work Order WO-4021."},{date:"2026-07-02",time:"11:30",actor:"Global Infrastructure Ltd.",activity:"Submitted invoice claim for girder foundation work."},{date:"2026-06-28",time:"14:15",actor:"Executive Engineer",activity:"Approved structural drawings for steel girder spans."}],"PRJ-2026-IT-008":[{date:"2026-06-04",time:"15:40",actor:"Financial Advisor",activity:"Payment released in full for Invoice TS/26-27/GHMC/0186."},{date:"2026-05-20",time:"16:32",actor:"Financial Advisor",activity:"Budget entry BAS No. HO-26004560/2026-27 approved."},{date:"2026-05-05",time:"11:30",actor:"EMRI Green Health Services",activity:"Submitted Invoice claim of Rs. 5 Lakhs (Excl GST)."},{date:"2026-04-30",time:"17:00",actor:"EMRI Green Health Services",activity:"Completed call campaigns for 6.5 Lakh citizens."},{date:"2026-04-24",time:"09:30",actor:"Assistant Engineer",activity:"Issued Work Order WO-401476."},{date:"2026-04-21",time:"15:42",actor:"Commissioner",activity:"Administrative sanction granted."}]};document.addEventListener("DOMContentLoaded",()=>{var t,e;const s=sessionStorage.getItem("ghmc_user");s&&Vs[s]?(w.currentUser=Vs[s],w.activeView="landing",(t=document.getElementById("login-screen"))==null||t.classList.add("hidden"),(e=document.getElementById("app-wrapper"))==null||e.classList.remove("hidden"),va(),gt("landing")):(w.activeView="login",Ne()),$u(),Tu(),Ou()});function Ne(){const s=document.getElementById("captcha-equation"),t=Math.floor(Math.random()*9)+1,e=Math.floor(Math.random()*9)+1;w.captchaCode=t+e,s&&(s.textContent=`${t} + ${e} = `);const i=document.getElementById("login-captcha");i&&(i.value="")}function $u(){const s=document.getElementById("login-form"),t=document.getElementById("refresh-captcha"),e=document.getElementById("login-error");t==null||t.addEventListener("click",()=>Ne()),s==null||s.addEventListener("submit",n=>{n.preventDefault();const o=document.getElementById("login-username").value.trim().toLowerCase(),a=document.getElementById("login-password").value;if(parseInt(document.getElementById("login-captcha").value,10)!==w.captchaCode){e&&(e.textContent="Captcha validation failed. Please try again.",e.classList.remove("hidden")),Ne();return}const l=Object.values(Vs).find(d=>d.username===o);l&&a==="password"?bo(l):(e&&(e.textContent='Invalid credentials. Use "password" as standard mock password.',e.classList.remove("hidden")),Ne())}),document.querySelectorAll(".demo-btn").forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-role"),a=Object.values(Vs).find(r=>r.role===o);a&&bo(a)})})}function bo(s){w.currentUser=s,w.activeView="landing",w.activeProject=null,w.activeModule="dashboard",sessionStorage.setItem("ghmc_user",s.username),H(s.roleText,"User authenticated successfully","Success");const t=document.getElementById("login-screen"),e=document.getElementById("app-wrapper");t&&t.classList.add("hidden"),e&&e.classList.remove("hidden");const i=document.getElementById("login-error");i&&i.classList.add("hidden"),va(),gt("landing"),T(`Welcome back, ${s.name}`)}function va(){const s=w.currentUser;if(!s)return;const t=document.getElementById("navbar-avatar-text"),e=document.getElementById("navbar-username"),i=document.getElementById("navbar-role"),n=document.getElementById("dropdown-mobile-name"),o=document.getElementById("dropdown-mobile-role");t&&(t.textContent=s.name.split(" ").map(a=>a[0]).filter(a=>a&&a.toUpperCase()===a).slice(0,2).join("")),e&&(e.textContent=s.name),i&&(i.textContent=s.roleText),n&&(n.textContent=s.name),o&&(o.textContent=s.roleText),Ui()}function Tu(){const s=document.getElementById("sidebar-collapse-btn"),t=document.getElementById("sidebar");s==null||s.addEventListener("click",()=>{t==null||t.classList.toggle("w-64"),t==null||t.classList.toggle("w-16")});const e=document.getElementById("user-profile-menu"),i=document.getElementById("profile-dropdown");e==null||e.addEventListener("click",l=>{l.stopPropagation(),i==null||i.classList.toggle("hidden")}),document.addEventListener("click",()=>{i==null||i.classList.add("hidden")});const n=document.getElementById("logout-btn");n==null||n.addEventListener("click",l=>{var d,c;l.preventDefault(),w.currentUser&&H(w.currentUser.roleText,"User signed out","Success"),sessionStorage.removeItem("ghmc_user"),w.currentUser=null,w.activeView="login",w.activeProject=null,(d=document.getElementById("app-wrapper"))==null||d.classList.add("hidden"),(c=document.getElementById("login-screen"))==null||c.classList.remove("hidden"),Ne()});const o=document.getElementById("navbar-bell"),a=document.getElementById("notification-backdrop"),r=document.getElementById("notification-drawer");o==null||o.addEventListener("click",()=>{r==null||r.classList.remove("translate-x-full"),a==null||a.classList.remove("hidden"),Qe()}),a==null||a.addEventListener("click",()=>{r==null||r.classList.add("translate-x-full"),a==null||a.classList.add("hidden")})}function Ou(){const s=document.getElementById("global-search-input"),t=document.getElementById("search-dropdown");s==null||s.addEventListener("input",()=>{const e=s.value.trim().toLowerCase();if(!e){t&&t.classList.add("hidden");return}const i=[],n=new Set,o=(a,r,l)=>{const d=`${a.toLowerCase()}||${r.toLowerCase()}`;n.has(d)||(n.add(d),i.push({title:a,category:r,action:l}))};if(w.projects.forEach(a=>{(a.name.toLowerCase().includes(e)||a.id.toLowerCase().includes(e)||a.department.toLowerCase().includes(e))&&o(`${a.id} - ${a.name}`,"Projects Directory",()=>{Ve(a)})}),w.eOfficeFiles.forEach(a=>{if(a.id.toLowerCase().includes(e)||a.subject.toLowerCase().includes(e)){const r=w.projects.find(l=>l.id===a.projectId);o(`${a.id} - ${a.subject}`,"eOffice Files",()=>{r&&(w.activeProject=r,w.activeView="project-workspace",w.activeProjectModule="eoffice",a.id,kt(),ct())})}}),w.workOrders.forEach(a=>{if(a.id.toLowerCase().includes(e)||a.title.toLowerCase().includes(e)||a.vendor.toLowerCase().includes(e)){const r=w.projects.find(l=>l.id===a.projectId);o(`${a.id} - ${a.title} (${a.vendor})`,"Work Orders (ERP)",()=>{r&&(w.activeProject=r,w.activeView="project-workspace",w.activeProjectModule="workorders",a.id,kt(),ct())})}}),Object.entries(Hs).forEach(([a,r])=>{const l=w.projects.find(d=>d.id===a);r.forEach(d=>{["Lead Contractor","Contractor","Agency Partner"].includes(d.role)||d.department==="External Partner"?(d.name.toLowerCase().includes(e)||l&&l.name.toLowerCase().includes(e))&&o(`${d.name} (${d.role})`,`Vendor Partner (Project: ${l?l.name:a})`,()=>{l&&(Ve(l),w.activeProjectModule="team",kt(),ct())}):(d.name.toLowerCase().includes(e)||d.role.toLowerCase().includes(e)||d.department.toLowerCase().includes(e))&&o(`${d.name} - ${d.role}`,`GHMC Employee (Dept: ${d.department})`,()=>{l&&(Ve(l),w.activeProjectModule="team",kt(),ct())})})}),i.length===0){t&&(t.innerHTML='<div class="p-4 text-center text-xs text-slate-400 font-semibold uppercase tracking-wider">No matching registry found</div>',t.classList.remove("hidden"));return}t&&(t.innerHTML=i.map((r,l)=>`
        <div class="search-result-item px-4 py-2 hover:bg-slate-50 cursor-pointer border-b border-slate-50 last:border-0 flex items-center justify-between text-xs" data-index="${l}">
          <div>
            <div class="font-bold text-slate-800">${r.title}</div>
            <div class="text-[9px] text-[#2563EB] font-bold uppercase tracking-wider mt-0.5">${r.category}</div>
          </div>
          <svg class="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      `).join(""),t.classList.remove("hidden"),t.querySelectorAll(".search-result-item").forEach(r=>{r.addEventListener("click",()=>{const l=parseInt(r.getAttribute("data-index")||"0",10);i[l].action(),s.value="",t.classList.add("hidden")})}))}),document.addEventListener("click",e=>{t&&!t.contains(e.target)&&e.target!==s&&t.classList.add("hidden")})}function gt(s,t=null){var e;w.activeView=s,s==="project-workspace"&&t?(w.activeProject=t,w.activeProjectModule="tracking",pt="overview",H(((e=w.currentUser)==null?void 0:e.roleText)||"Unknown",`Entered project workspace: ${t.name}`,"Success")):s==="projects-list"?(w.activeProject=null,w.activeModule="projects"):s==="landing"?(w.activeProject=null,w.activeModule="dashboard"):s==="status-view"?(w.activeProject=null,w.activeModule="status"):s==="reports-view"?(w.activeProject=null,w.activeModule="reports"):s==="notifications-view"?(w.activeProject=null,w.activeModule="notifications"):s==="audit-logs-view"?(w.activeProject=null,w.activeModule="audit"):s==="eoffice-view"&&(w.activeProject=null,w.activeModule="eoffice"),kt(),ct(),ts()}function Ve(s){gt("project-workspace",s)}function kt(){const s=document.getElementById("sidebar-nav"),t=document.getElementById("sidebar-project-info"),e=document.getElementById("sidebar-proj-name"),i=w.currentUser;if(!(!s||!i))if(s.innerHTML="",w.activeView==="project-workspace"&&w.activeProject){t==null||t.classList.remove("hidden"),e&&(e.textContent=w.activeProject.name);const n=document.createElement("a");n.className="flex items-center gap-2.5 px-3 py-2 text-xs rounded-md text-[#2563EB] hover:bg-[#DBEAFE] cursor-pointer font-bold border-b border-[#E5E7EB] pb-3 mb-2",n.innerHTML=`
      <svg class="w-4 h-4 shrink-0 text-[#2563EB]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
      </svg>
      <span>← Back to Projects</span>
    `,n.addEventListener("click",a=>{a.preventDefault(),gt("projects-list")}),s.appendChild(n),[{id:"tracking",name:"Tracking",svgPath:'<polygon points="5 3 19 12 5 21 5 3"/>'},{id:"notes",name:"Notes",svgPath:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'},{id:"summary",name:"Summary",svgPath:'<path d="M3 3h18v18H3z"/><path d="M21 9H3"/><path d="M21 15H3"/><path d="M12 3v18"/>'},{id:"documents",name:"Related Documents",svgPath:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'},{id:"aiassist",name:"AI Assist",svgPath:'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'},{id:"approvals",name:"Approvals",svgPath:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'}].forEach(a=>{if(a.id==="approvals"&&i.role==="Vendor")return;const r=w.activeProjectModule===a.id?"bg-[#2563EB] text-white font-semibold shadow-sm":"hover:bg-[#DBEAFE] text-[#4B5563] hover:text-[#2563EB]",l=w.activeProjectModule===a.id?"text-white":"text-[#2563EB]",d=document.createElement("a");d.className=`flex items-center gap-3 px-3 py-2 text-xs rounded-md transition-all cursor-pointer ${r}`,d.innerHTML=`
        <svg class="w-4 h-4 shrink-0 ${l}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${a.svgPath}
        </svg>
        <span class="sidebar-item-text truncate">${a.name}</span>
      `,d.addEventListener("click",c=>{c.preventDefault(),w.activeProjectModule=a.id,kt(),ct()}),s.appendChild(d)})}else t==null||t.classList.add("hidden"),[{id:"dashboard",name:"Dashboard",svgPath:'<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>'},{id:"eoffice",name:"eOffice Notes",svgPath:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'},{id:"projects",name:"Projects",svgPath:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'},{id:"status",name:"Status",svgPath:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'},{id:"reports",name:"Reports",svgPath:'<path d="M18 20V10M12 20V4M6 20v-6"/>'},{id:"notifications",name:"Notifications",svgPath:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>'},{id:"audit",name:"Audit Logs",svgPath:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'}].filter(a=>i.role==="Vendor"?["dashboard","projects","status"].includes(a.id):!0).forEach(a=>{const r=w.activeModule===a.id?"bg-[#2563EB] text-white font-semibold shadow-sm":"hover:bg-[#DBEAFE] text-[#4B5563] hover:text-[#2563EB]",l=w.activeModule===a.id?"text-white":"text-[#2563EB]",d=document.createElement("a");d.className=`flex items-center gap-3 px-3 py-2 text-xs rounded-md transition-all cursor-pointer ${r}`,d.innerHTML=`
        <svg class="w-4 h-4 shrink-0 ${l}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${a.svgPath}
        </svg>
        <span class="sidebar-item-text truncate">${a.name}</span>
      `,d.addEventListener("click",c=>{c.preventDefault(),a.id==="dashboard"?gt("landing"):a.id==="eoffice"?gt("eoffice-view"):a.id==="projects"?gt("projects-list"):a.id==="status"?gt("status-view"):a.id==="reports"?gt("reports-view"):a.id==="notifications"?gt("notifications-view"):a.id==="audit"&&gt("audit-logs-view")}),s.appendChild(d)})}function Bu(){if(w.activeView==="landing")return`
      <nav class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        <span class="text-slate-850">Portal Home</span>
        <span>/</span>
        <span class="text-slate-400">Dashboard</span>
      </nav>
    `;if(w.activeView==="eoffice-view")return`
      <nav class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        <a class="hover:text-indigo-650 cursor-pointer transition-colors" onclick="switchToView('landing')">Portal Home</a>
        <span>/</span>
        <span class="text-slate-850 font-bold">eOffice Notes Workflow</span>
      </nav>
    `;if(w.activeView==="projects-list")return`
      <nav class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        <a class="hover:text-indigo-650 cursor-pointer transition-colors" onclick="switchToView('landing')">Portal Home</a>
        <span>/</span>
        <span class="text-slate-850">Projects Directory</span>
      </nav>
    `;if(w.activeView==="status-view")return`
      <nav class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        <a class="hover:text-indigo-650 cursor-pointer transition-colors" onclick="switchToView('landing')">Portal Home</a>
        <span>/</span>
        <span class="text-slate-850">Status</span>
      </nav>
    `;if(w.activeView==="reports-view")return`
      <nav class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        <a class="hover:text-indigo-650 cursor-pointer transition-colors" onclick="switchToView('landing')">Portal Home</a>
        <span>/</span>
        <span class="text-slate-850 font-bold">System Reports</span>
      </nav>
    `;if(w.activeView==="notifications-view")return`
      <nav class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        <a class="hover:text-indigo-650 cursor-pointer transition-colors" onclick="switchToView('landing')">Portal Home</a>
        <span>/</span>
        <span class="text-slate-850 font-bold">Notifications</span>
      </nav>
    `;if(w.activeView==="audit-logs-view")return`
      <nav class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        <a class="hover:text-indigo-650 cursor-pointer transition-colors" onclick="switchToView('landing')">Portal Home</a>
        <span>/</span>
        <span class="text-slate-850 font-bold">Audit Logs</span>
      </nav>
    `;if(w.activeView==="project-workspace"&&w.activeProject){const s=w.activeProjectModule.toUpperCase();return`
      <nav class="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        <a class="hover:text-indigo-650 cursor-pointer transition-colors" onclick="switchToView('landing')">Portal Home</a>
        <span>/</span>
        <a class="hover:text-indigo-650 cursor-pointer transition-colors" onclick="switchToView('projects-list')">Projects Directory</a>
        <span>/</span>
        <a class="hover:text-indigo-650 cursor-pointer transition-colors" onclick="switchToProjectWorkspace(state.activeProject)">${w.activeProject.id}</a>
        <span>/</span>
        <span class="text-slate-850">${s}</span>
      </nav>
    `}return""}function ct(){const s=document.getElementById("content-panel");if(!s)return;s.scrollTop=0;const t=Bu();w.activeView==="landing"?(s.innerHTML=`${t}<div id="landing-dashboard-view"></div>`,Gu()):w.activeView==="projects-list"?(s.innerHTML=`${t}<div id="projects-list-view" class="animate-toast-slide-in"></div>`,$e()):w.activeView==="project-workspace"&&w.activeProject?(s.innerHTML=`
      ${t}
      <!-- Workspace wrapper -->
      <div id="project-workspace-view" class="animate-toast-slide-in space-y-6"></div>
    `,ya()):w.activeView==="status-view"?(s.innerHTML=`${t}<div id="status-view-container" class="animate-toast-slide-in"></div>`,Z()):w.activeView==="reports-view"?(s.innerHTML=`${t}<div id="reports-view-container" class="animate-toast-slide-in"></div>`,Xu()):w.activeView==="notifications-view"?(s.innerHTML=`${t}<div id="notifications-view-container" class="animate-toast-slide-in"></div>`,Js()):w.activeView==="audit-logs-view"?(s.innerHTML=`${t}<div id="audit-logs-container" class="animate-toast-slide-in"></div>`,ka()):w.activeView==="eoffice-view"&&(s.innerHTML=`${t}<div id="eoffice-view-container" class="animate-toast-slide-in"></div>`,K())}let lt=null,oe=!1,It="inbox",ot="pending",Ds="",Rs="",te=!1,ee=null;function K(){const s=document.getElementById("eoffice-view-container");if(!s)return;const t=w.currentUser;t&&(lt?Fu(s,t):oe?ju(s,t):Lu(s,t))}function Lu(s,t){var r,l,d,c;const e=w.eOfficeNotes.filter(u=>u.status!=="Draft"&&(u.status==="Pending"&&u.currentCustodian===t.role||u.status==="Returned"&&t.role==="Senior Assistant"&&u.currentCustodian==="Senior Assistant")),i=w.eOfficeNotes.filter(u=>u.currentCustodian!==t.role&&u.approvalHistory.some(h=>h.role===t.role)),n=w.eOfficeNotes.filter(u=>u.status==="Draft"&&u.creatorName===t.name);let o=e;It==="outbox"&&(o=i),It==="drafts"&&(o=n);const a=t.role==="Senior Assistant";s.innerHTML=`
    <div class="bg-white border border-slate-200 rounded-md p-6 mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">eOffice project initiation notes</h3>
          <p class="text-[10px] text-slate-500 mt-1 font-semibold">Every project must go through note approval before active execution.</p>
        </div>
        ${a?`
          <button id="btn-initiate-note" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded cursor-pointer transition-colors flex items-center gap-2">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Initiate Project Note
          </button>
        `:""}
      </div>
    </div>

    <!-- Tabs Header -->
    <div class="flex border-b border-slate-200 mb-6 bg-white rounded-t-md px-4 pt-3">
      <button class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${It==="inbox"?"border-[#2563EB] text-[#2563EB]":"border-transparent text-slate-500 hover:text-slate-700"}" id="tab-note-inbox">
        Inbox (${e.length})
      </button>
      <button class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${It==="outbox"?"border-[#2563EB] text-[#2563EB]":"border-transparent text-slate-500 hover:text-slate-700"}" id="tab-note-outbox">
        Outbox (${i.length})
      </button>
      ${a?`
        <button class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${It==="drafts"?"border-[#2563EB] text-[#2563EB]":"border-transparent text-slate-500 hover:text-slate-700"}" id="tab-note-drafts">
          Drafts (${n.length})
        </button>
      `:""}
    </div>

    <!-- List table -->
    <div class="bg-white border border-slate-200 rounded-md overflow-hidden">
      ${o.length===0?`
        <div class="p-12 text-center">
          <p class="text-xs text-slate-400 font-bold uppercase tracking-wider">No Project Notes in this folder</p>
        </div>
      `:`
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-50 text-slate-450 border-b border-slate-200 text-[9px] font-bold uppercase tracking-widest">
                <th class="p-4">File No & ID</th>
                <th class="p-4">Subject & Project</th>
                <th class="p-4">Budget (Estimated)</th>
                <th class="p-4">Priority</th>
                <th class="p-4">Current Custodian</th>
                <th class="p-4">Status</th>
                <th class="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-xs">
              ${o.map(u=>{let h="bg-slate-50 text-slate-600 border-slate-100";u.priority==="High"?h="bg-rose-50 text-rose-700 border-rose-100":u.priority==="Medium"&&(h="bg-amber-50 text-amber-700 border-amber-100");let f="bg-slate-50 text-slate-600";return u.status==="Approved"?f="bg-emerald-50 text-emerald-700 border border-emerald-100":u.status==="Pending"?f="bg-blue-50 text-blue-700 border border-blue-100":u.status==="Returned"?f="bg-orange-50 text-orange-700 border border-orange-100":u.status==="Rejected"&&(f="bg-rose-50 text-rose-700 border border-rose-100"),`
                  <tr class="hover:bg-slate-50/50 transition-colors">
                    <td class="p-4 font-mono font-semibold text-[10px] text-slate-500">
                      <div>${u.fileNumber}</div>
                      <div class="text-[9px] text-slate-400 mt-0.5">${u.id}</div>
                    </td>
                    <td class="p-4">
                      <div class="font-bold text-slate-800">${u.subject}</div>
                      <div class="text-[10px] text-[#2563EB] font-semibold mt-0.5">${u.projectName}</div>
                    </td>
                    <td class="p-4 font-bold text-slate-800">
                      Rs. ${(u.estimatedBudget/1e5).toFixed(1)} Lakhs
                    </td>
                    <td class="p-4">
                      <span class="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider border ${h}">${u.priority}</span>
                    </td>
                    <td class="p-4 text-slate-600 font-semibold">
                      ${u.currentCustodian}
                    </td>
                    <td class="p-4">
                      <span class="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${f}">${u.status}</span>
                    </td>
                    <td class="p-4 text-right">
                      <div class="flex items-center justify-end gap-2">
                        ${u.status==="Draft"?`
                          <button class="btn-edit-draft bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-1 rounded cursor-pointer transition-colors" data-id="${u.id}">
                            Edit
                          </button>
                          <button class="btn-delete-draft bg-rose-50 hover:bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-1 rounded cursor-pointer transition-colors" data-id="${u.id}">
                            Delete
                          </button>
                        `:`
                          <button class="btn-view-note bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded cursor-pointer transition-colors" data-id="${u.id}">
                            Open Note
                          </button>
                        `}
                      </div>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `,(r=document.getElementById("tab-note-inbox"))==null||r.addEventListener("click",()=>{It="inbox",K()}),(l=document.getElementById("tab-note-outbox"))==null||l.addEventListener("click",()=>{It="outbox",K()}),(d=document.getElementById("tab-note-drafts"))==null||d.addEventListener("click",()=>{It="drafts",K()}),(c=document.getElementById("btn-initiate-note"))==null||c.addEventListener("click",()=>{oe=!0,lt=null,K()}),s.querySelectorAll(".btn-view-note").forEach(u=>{u.addEventListener("click",()=>{lt=u.getAttribute("data-id"),ee=null,te=!1,K()})}),s.querySelectorAll(".btn-edit-draft").forEach(u=>{u.addEventListener("click",()=>{const h=u.getAttribute("data-id");oe=!0,lt=h,K()})}),s.querySelectorAll(".btn-delete-draft").forEach(u=>{u.addEventListener("click",()=>{const h=u.getAttribute("data-id");confirm("Are you sure you want to delete this draft note?")&&(w.eOfficeNotes=w.eOfficeNotes.filter(f=>f.id!==h),H(t.roleText,`Deleted draft note: ${h}`,"Success"),T("Draft deleted successfully"),K())})})}function ju(s,t){var r,l,d;let e;lt&&(e=w.eOfficeNotes.find(c=>c.id===lt));const i=e?e.fileNumber:`FILE/ENG/2026/${Math.floor(100+Math.random()*900)}`,n=w.headOfAccounts;s.innerHTML=`
    <div class="bg-white border border-slate-200 rounded-md p-6 mb-6">
      <div class="flex items-center gap-3">
        <button id="btn-form-back" class="text-slate-500 hover:text-slate-700 cursor-pointer p-1 rounded hover:bg-slate-100 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
          </svg>
        </button>
        <div>
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">
            ${e?e.status==="Returned"?"Edit & Resubmit Project Note":"Edit Draft Project Note":"Initiate New Project Note"}
          </h3>
          <p class="text-[10px] text-slate-500 mt-1 font-semibold">${i}</p>
        </div>
      </div>
    </div>

    <form id="note-initiation-form" class="bg-white border border-slate-200 rounded-md p-6 space-y-6">
      <!-- Subject & Project Title -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Subject / Proposal Heading *</label>
          <input type="text" id="form-subject" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="e.g. Laying of CC road at Gachibowli sector-2" required value="${e?e.subject:""}">
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Project Name *</label>
          <input type="text" id="form-project-name" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="e.g. Gachibowli CC Road Sector-2 Development" required value="${e?e.projectName:""}">
        </div>
      </div>

      <!-- Dept, Zone & Priority -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Department *</label>
          <select id="form-dept" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" required>
            <option value="Engineering" ${e&&e.department==="Engineering"?"selected":""}>Engineering</option>
            <option value="Drainage & Sewerage" ${e&&e.department==="Drainage & Sewerage"?"selected":""}>Drainage & Sewerage</option>
            <option value="Electrical & Lighting" ${e&&e.department==="Electrical & Lighting"?"selected":""}>Electrical & Lighting</option>
            <option value="Landscaping & Parks" ${e&&e.department==="Landscaping & Parks"?"selected":""}>Landscaping & Parks</option>
          </select>
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Zone *</label>
          <select id="form-zone" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" required>
            <option value="Zone-1 (Khairetabad)" ${e&&e.zone==="Zone-1 (Khairetabad)"?"selected":""}>Zone-1 (Khairetabad)</option>
            <option value="Zone-2 (Kukatpally)" ${e&&e.zone==="Zone-2 (Kukatpally)"?"selected":""}>Zone-2 (Kukatpally)</option>
            <option value="Zone-3 (Sherilingampally)" ${e&&e.zone==="Zone-3 (Sherilingampally)"?"selected":""}>Zone-3 (Sherilingampally)</option>
            <option value="Zone-4 (Secunderabad)" ${e&&e.zone==="Zone-4 (Secunderabad)"?"selected":""}>Zone-4 (Secunderabad)</option>
            <option value="Head Office" ${e&&e.zone==="Head Office"?"selected":""}>Head Office</option>
          </select>
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Priority *</label>
          <select id="form-priority" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" required>
            <option value="High" ${e&&e.priority==="High"?"selected":""}>High Priority</option>
            <option value="Medium" ${e&&e.priority==="Medium"?"selected":""}>Medium Priority</option>
            <option value="Low" ${e&&e.priority==="Low"?"selected":""}>Low Priority</option>
          </select>
        </div>
      </div>

      <!-- Description & Purpose -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Detailed Description *</label>
          <textarea id="form-desc" rows="4" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="Provide a detailed layout of the proposal..." required>${e?e.description:""}</textarea>
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Project Purpose / Objective *</label>
          <textarea id="form-purpose" rows="4" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="Why is this project required?" required>${e?e.purpose:""}</textarea>
        </div>
      </div>

      <!-- Background & Justification -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Background Context</label>
          <textarea id="form-background" rows="3" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="Previous history, survey details, or complaints if any...">${e?e.background:""}</textarea>
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Justification & Benefits *</label>
          <textarea id="form-justification" rows="3" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="What are the specific justifications and civic benefits?" required>${e?e.justification:""}</textarea>
        </div>
      </div>

      <!-- Financial Information -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Estimated Budget (Rs.) *</label>
          <input type="number" id="form-budget" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="e.g. 8500000" required value="${e?e.estimatedBudget:""}">
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Mappable Budget Head of Account *</label>
          <select id="form-budget-head" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" required>
            ${n.map(c=>`<option value="${c.code}" ${e&&e.budgetHead===c.code?"selected":""}>${c.code} - ${c.description} (Bal: Rs. ${(c.balance/1e5).toFixed(1)}L)</option>`).join("")}
          </select>
        </div>
      </div>

      <!-- Attachments & Initial Remarks -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Upload Drawings / Survey Estimates</label>
          <input type="text" id="form-attachments" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="Enter comma-separated filenames, e.g. layout_drawing.pdf, estimation.xlsx" value="${e&&e.attachments?e.attachments.join(", "):""}">
        </div>
        <div class="space-y-1">
          <label class="text-[10px] font-bold text-slate-550 uppercase tracking-wider">Initiator's remarks (Signature note sheet) *</label>
          <textarea id="form-remarks" rows="2" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="Write initial note remarks to be placed on the green sheet..." required>${e?e.remarks:""}</textarea>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center justify-between border-t border-slate-100 pt-6">
        <button type="button" id="btn-form-cancel" class="px-4 py-2 text-xs font-bold text-slate-550 border border-slate-200 rounded-md hover:bg-slate-50 cursor-pointer transition-colors uppercase tracking-wider">
          Cancel
        </button>
        <div class="flex items-center gap-3">
          <button type="button" id="btn-form-save-draft" class="px-4 py-2 text-xs font-bold text-[#2563EB] border border-[#2563EB] rounded-md hover:bg-blue-50/50 cursor-pointer transition-colors uppercase tracking-wider">
            Save Draft
          </button>
          <button type="submit" id="btn-form-submit" class="px-5 py-2 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-md cursor-pointer transition-all shadow-sm flex items-center gap-2 uppercase tracking-wider">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Sign & Forward to AE
          </button>
        </div>
      </div>
    </form>
  `,(r=document.getElementById("btn-form-back"))==null||r.addEventListener("click",()=>{oe=!1,lt=null,K()}),(l=document.getElementById("btn-form-cancel"))==null||l.addEventListener("click",()=>{oe=!1,lt=null,K()}),(d=document.getElementById("btn-form-save-draft"))==null||d.addEventListener("click",()=>{a(!0)});const o=document.getElementById("note-initiation-form");o==null||o.addEventListener("submit",c=>{c.preventDefault(),a(!1)});function a(c){const u=document.getElementById("form-subject").value.trim(),h=document.getElementById("form-project-name").value.trim(),f=document.getElementById("form-dept").value,m=document.getElementById("form-zone").value,p=document.getElementById("form-priority").value,g=document.getElementById("form-desc").value.trim(),b=document.getElementById("form-purpose").value.trim(),x=document.getElementById("form-background").value.trim(),k=document.getElementById("form-justification").value.trim(),v=parseInt(document.getElementById("form-budget").value,10),y=document.getElementById("form-budget-head").value,S=document.getElementById("form-remarks").value.trim(),C=document.getElementById("form-attachments").value.split(",").map(P=>P.trim()).filter(P=>P.length>0);if(!u||!h||!g||!b||!k||!v||!S){alert("Please fill out all required fields marked with *");return}const E=new Date().toISOString().split("T")[0],M=new Date().toTimeString().split(" ")[0].substring(0,5);if(e){const P=`Budget: Rs. ${e.estimatedBudget}`;if(e.subject=u,e.projectName=h,e.department=f,e.zone=m,e.priority=p,e.description=g,e.purpose=b,e.background=x,e.justification=k,e.estimatedBudget=v,e.budgetHead=y,e.remarks=S,e.attachments=C,c)e.status="Draft",e.currentCustodian="Senior Assistant",T("Draft updated successfully");else{e.status="Pending",e.currentCustodian="Assistant Engineer",e.workflowStatus["Senior Assistant"]="Approved",e.workflowStatus["Assistant Engineer"]="Pending";const R=`v1.${e.versions.length}`,W={version:R,modifiedBy:t.name,modifiedRole:t.role,modifiedDate:E,modifiedTime:M,subject:u,projectName:h,description:g,purpose:b,background:x,estimatedBudget:v,budgetHead:y,justification:k,benefits:k,priority:p,remarks:S,additionalConditions:""};e.versions.push(W),e.approvalHistory.push({officerName:t.name,role:t.role,department:t.roleText,action:"Resubmitted & Forwarded",remarks:S,dateTime:`${E} ${M}`,status:"Cleared",versionNumber:R}),e.auditLogs.push({user:t.name,role:t.role,date:E,time:M,ip:"10.2.14.8",action:"Resubmit Note",previousValue:P,newValue:`Budget: Rs. ${v} (${R})`}),H(t.roleText,`Signed and forwarded note ${e.id} to AE`,"Success"),T("Signed and Forwarded to Assistant Engineer successfully!")}}else{const P=`NOTE-2026-ENG-${Math.floor(100+Math.random()*900)}`,R={id:P,fileNumber:i,subject:u,projectName:h,department:f,zone:m,description:g,purpose:b,background:x,estimatedBudget:v,budgetHead:y,justification:k,benefits:k,priority:p,attachments:C,remarks:S,additionalConditions:"",status:c?"Draft":"Pending",currentCustodian:c?"Senior Assistant":"Assistant Engineer",creatorRole:t.role,creatorName:t.name,createdDate:E,createdTime:M,versions:[{version:"v1.0",modifiedBy:t.name,modifiedRole:t.role,modifiedDate:E,modifiedTime:M,subject:u,projectName:h,description:g,purpose:b,background:x,estimatedBudget:v,budgetHead:y,justification:k,benefits:k,priority:p,remarks:S,additionalConditions:""}],workflowStatus:{"Senior Assistant":c?"Pending":"Approved","Assistant Engineer":c?"Waiting":"Pending","Deputy Executive Engineer":"Waiting","Executive Engineer":"Waiting","Superintending Engineer":"Waiting","Joint Commissioner":"Waiting","Additional Commissioner":"Waiting",Commissioner:"Waiting"},approvalHistory:c?[]:[{officerName:t.name,role:t.role,department:t.roleText,action:"Initiated & Forwarded",remarks:S,dateTime:`${E} ${M}`,status:"Cleared",versionNumber:"v1.0"}],auditLogs:[{user:t.name,role:t.role,date:E,time:M,ip:"10.2.14.8",action:"Note Created",previousValue:"-",newValue:"v1.0 Initial Draft"}]};w.eOfficeNotes.push(R),c?T("Draft note saved successfully."):(H(t.roleText,`Signed and forwarded note ${P} to AE`,"Success"),T("Signed and Forwarded to Assistant Engineer successfully!"))}oe=!1,lt=null,K()}}function Fu(s,t){var l,d,c,u,h,f,m;const e=w.eOfficeNotes.find(p=>p.id===lt);if(!e){s.innerHTML='<div class="p-6 text-red-500 font-bold">Error: Note not found.</div>';return}const i=ee&&e.versions.find(p=>p.version===ee)||e.versions[e.versions.length-1],n=e.currentCustodian===t.role&&e.status!=="Approved"&&e.status!=="Rejected",o=["Senior Assistant","Assistant Engineer","Deputy Executive Engineer","Executive Engineer","Superintending Engineer","Joint Commissioner","Additional Commissioner","Commissioner"],a=`
    <div class="bg-white border border-slate-200 rounded-md p-4 mb-6 shadow-sm">
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100">Workflow Tracker</span>
          <span class="text-xs text-slate-800 font-semibold">${e.fileNumber}</span>
        </div>
        <div class="flex items-center gap-1.5 text-xs">
          <span class="font-bold text-slate-500">Status:</span>
          <span class="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${e.status==="Approved"?"bg-emerald-50 text-emerald-700 border border-emerald-100":e.status==="Pending"?"bg-blue-50 text-blue-700 border border-blue-100":e.status==="Returned"?"bg-orange-50 text-orange-700 border border-orange-100":"bg-rose-50 text-rose-700 border border-rose-100"}">${e.status}</span>
        </div>
      </div>

      <!-- Pipeline Steps -->
      <div class="mt-6 flex items-center justify-between overflow-x-auto pb-2 relative">
        <div class="absolute h-0.5 left-8 right-8 top-4 bg-slate-100 -z-1"></div>
        ${o.map((p,g)=>{let b="Waiting";if(e.status==="Approved")b="Approved";else if(e.status==="Rejected"&&e.currentCustodian===p)b="Returned";else if(e.currentCustodian===p)b=e.status==="Returned"?"Returned":"Active";else{const y=o.indexOf(e.currentCustodian);g<y&&(b="Approved")}let x="bg-slate-200 border-slate-300 text-slate-500",k="text-slate-400 font-medium",v=`<span class="text-[10px] font-bold">${g+1}</span>`;return b==="Approved"?(x="bg-emerald-500 border-emerald-600 text-white",k="text-emerald-700 font-bold",v='<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'):b==="Active"?(x="bg-blue-600 border-blue-700 text-white ring-4 ring-blue-100 animate-pulse",k="text-blue-700 font-extrabold"):b==="Returned"&&(x="bg-amber-500 border-amber-600 text-white",k="text-amber-700 font-extrabold",v='<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>'),`
            <div class="flex flex-col items-center text-center px-4 min-w-[90px] relative z-10">
              <div class="w-8 h-8 rounded-full border-2 flex items-center justify-center ${x} transition-all">
                ${v}
              </div>
              <span class="text-[9px] uppercase tracking-wider mt-2 whitespace-nowrap ${k}">${p.split(" ").map(y=>y==="Assistant"?"Asst":y==="Superintending"?"SE":y==="Executive"?"EE":y==="Deputy"?"Dy.EE":y).join(" ")}</span>
            </div>
          `}).join("")}
      </div>
    </div>
  `,r=`Rs. ${(i.estimatedBudget/1e5).toFixed(1)} Lakhs (Budget Head: ${i.budgetHead})`;if(s.innerHTML=`
    <!-- Top toolbar -->
    <div class="bg-white border border-slate-200 rounded-md p-6 mb-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <button id="btn-detail-back" class="text-slate-500 hover:text-slate-700 cursor-pointer p-1 rounded hover:bg-slate-100 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
          </button>
          <div>
            <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Note Sheet Workspace</h3>
            <p class="text-[10px] text-slate-500 mt-1 font-semibold">${e.fileNumber} | Created by ${e.creatorName} (${e.creatorRole})</p>
          </div>
        </div>
        <div class="flex items-center gap-2">
          ${te?`
            <button id="btn-exit-compare" class="bg-rose-50 hover:bg-rose-100 text-rose-700 text-[10px] font-bold px-3 py-1.5 rounded cursor-pointer transition-colors border border-rose-100 uppercase tracking-wider">
              Exit Comparison
            </button>
          `:`
            <button id="btn-toggle-compare" class="bg-blue-50 hover:bg-blue-100 text-[#2563EB] text-[10px] font-bold px-3 py-1.5 rounded cursor-pointer transition-colors border border-blue-100 uppercase tracking-wider">
              Compare Versions
            </button>
          `}
        </div>
      </div>
    </div>

    ${a}

    ${te?`
      <!-- Comparison Screen -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Version 1 Column -->
        <div class="bg-white border border-slate-200 rounded-md p-6">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h4 class="text-xs font-bold text-slate-900 uppercase">Version A</h4>
            <select id="select-ver-a" class="text-xs p-1 border border-slate-200 rounded bg-white outline-none">
              ${e.versions.map(p=>`<option value="${p.version}" ${p.version===Ds?"selected":""}>${p.version} - ${p.modifiedRole}</option>`).join("")}
            </select>
          </div>
          <div id="compare-column-a"></div>
        </div>

        <!-- Version 2 Column -->
        <div class="bg-white border border-slate-200 rounded-md p-6">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h4 class="text-xs font-bold text-slate-900 uppercase">Version B</h4>
            <select id="select-ver-b" class="text-xs p-1 border border-slate-200 rounded bg-white outline-none">
              ${e.versions.map(p=>`<option value="${p.version}" ${p.version===Rs?"selected":""}>${p.version} - ${p.modifiedRole}</option>`).join("")}
            </select>
          </div>
          <div id="compare-column-b"></div>
        </div>
      </div>
    `:`
      <!-- Standard Detail Screen -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <!-- Left: Traditional Green Note Sheet (2 cols wide) -->
        <div class="xl:col-span-2 space-y-6">
          <div class="green-note-sheet bg-[#F4FAF4] border-l-4 border-l-[#10B981] border-y border-r border-[#D1E7DD] rounded-md shadow-sm p-8 min-h-[500px]">
            <!-- Government Emblem Banner -->
            <div class="text-center border-b border-slate-200 pb-6 mb-6">
              <h1 class="text-xs font-bold text-slate-700 tracking-widest uppercase">Greater Hyderabad Municipal Corporation</h1>
              <h2 class="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">e-Office Note Approval Sheet</h2>
              <div class="w-16 h-0.5 bg-[#10B981] mx-auto mt-2"></div>
            </div>

            <!-- Subject Header -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-baseline gap-2">
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">File No:</span>
                <span class="text-xs font-mono font-bold text-slate-800">${e.fileNumber}</span>
              </div>
              <div class="flex justify-between items-baseline gap-2">
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Subject:</span>
                <span class="text-xs font-bold text-slate-800">${i.subject}</span>
              </div>
              <div class="flex justify-between items-baseline gap-2">
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Project:</span>
                <span class="text-xs font-bold text-[#2563EB]">${i.projectName}</span>
              </div>
              <div class="grid grid-cols-2 gap-4 border-y border-slate-200/60 py-3 text-[11px]">
                <div><span class="font-bold text-slate-500 uppercase tracking-wider text-[9px]">Department:</span> <span class="font-semibold text-slate-700">${e.department}</span></div>
                <div><span class="font-bold text-slate-500 uppercase tracking-wider text-[9px]">Zone:</span> <span class="font-semibold text-slate-700">${e.zone}</span></div>
              </div>
            </div>

            <!-- Core Note Paragraphs -->
            <div class="space-y-5 text-xs text-slate-800 leading-relaxed font-serif">
              <p><strong>1. PROPOSAL DESCRIPTION:</strong><br>${i.description}</p>
              <p><strong>2. OBJECTIVE & PURPOSE:</strong><br>${i.purpose}</p>
              ${i.background?`<p><strong>3. BACKGROUND CONTEXT:</strong><br>${i.background}</p>`:""}
              <p><strong>4. JUSTIFICATION & CIVIC BENEFITS:</strong><br>${i.justification}</p>
              <div class="bg-white/80 p-3 rounded border border-emerald-100 font-sans my-4">
                <div class="text-[9px] uppercase tracking-wider font-bold text-slate-500">Proposed Budget Allocation</div>
                <div class="text-xs font-bold text-slate-800 mt-1">${r}</div>
              </div>
              ${i.additionalConditions?`<p><strong>5. CONDITIONAL PROVISIONS / RIDER:</strong><br>${i.additionalConditions}</p>`:""}
              ${e.attachments&&e.attachments.length>0?`
                <div class="mt-4 border-t border-slate-200/60 pt-3 font-sans">
                  <span class="text-[9px] uppercase tracking-wider font-bold text-slate-500">Uploaded Attachments:</span>
                  <div class="flex items-center gap-2 mt-2 flex-wrap">
                    ${e.attachments.map(p=>`
                      <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-white text-slate-700 text-[10px] border border-slate-200">
                        <svg class="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                        ${p}
                      </span>
                    `).join("")}
                  </div>
                </div>
              `:""}
            </div>

            <!-- Chronological Remarks / Note Sheets Signatures -->
            <div class="mt-8 border-t-2 border-dashed border-[#A7F3D0] pt-6 space-y-6">
              <h3 class="text-[10px] font-bold text-emerald-800 uppercase tracking-widest mb-4">Official Remarks & Digital Signatures</h3>
              ${e.approvalHistory.map((p,g)=>`
                  <div class="p-4 rounded-md bg-white border border-[#D1E7DD] relative space-y-2 font-serif text-slate-800 text-[11px] shadow-sm">
                    <p class="leading-relaxed"><strong>Para ${g+1}:</strong> ${p.remarks||"Recommended and forwarded."}</p>
                    <div class="flex justify-between items-end border-t border-slate-100 pt-3 mt-3 font-sans text-[10px] text-slate-500">
                      <div>
                        <span class="font-bold text-slate-700">${p.officerName}</span>
                        <div class="text-[9px] text-[#2563EB] font-bold uppercase tracking-wider">${p.role}</div>
                      </div>
                      <div class="text-right">
                        <span class="inline-flex items-center gap-1 text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 uppercase tracking-wider">
                          <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                          Digitally Signed
                        </span>
                        <div class="text-[9px] text-slate-450 mt-1 font-semibold">${p.dateTime}</div>
                      </div>
                    </div>
                  </div>
                `).join("")}
            </div>
          </div>
        </div>

        <!-- Right: Actions, Versions & Audit Log -->
        <div class="space-y-6">
          <!-- Actions panel -->
          <div class="bg-white border border-slate-200 rounded-md p-6">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">Action Panel</h4>
            ${n?`
              <!-- Input Remarks -->
              <div class="space-y-2 mb-4">
                <label class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Enter Note sheet Remarks *</label>
                <textarea id="officer-remarks" rows="4" class="w-full text-xs p-2.5 border border-slate-200 rounded-md outline-none focus:border-[#2563EB]" placeholder="Type your official remarks here..." required></textarea>
              </div>

              <!-- Budget overriding for Dy.EE / Addl. Commissioner -->
              ${t.role==="Deputy Executive Engineer"||t.role==="Additional Commissioner"?`
                <div class="space-y-2 mb-4 p-3 bg-slate-50 border border-slate-250 rounded">
                  <label class="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">Verify/Modify Estimated Budget (Rs.)</label>
                  <input type="number" id="officer-modify-budget" class="w-full text-xs p-2 border border-slate-200 rounded outline-none focus:border-[#2563EB]" value="${i.estimatedBudget}">
                  <span class="text-[9px] text-slate-400 font-semibold block mt-1">If budget is modified, a new version of the note will be created automatically.</span>
                </div>
              `:""}

              <!-- Custodian Action Buttons -->
              <div class="space-y-2.5 pt-2">
                <button id="btn-officer-approve" class="w-full py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded cursor-pointer transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  ${t.role==="Commissioner"?"Grant Administrative Sanction":"Approve & Forward"}
                </button>
                
                ${t.role!=="Senior Assistant"?`
                  <button id="btn-officer-return" class="w-full py-2.5 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 rounded border border-amber-250 cursor-pointer transition-all flex items-center justify-center gap-2 uppercase tracking-wider">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                    Return to Previous Officer
                  </button>
                `:""}

                ${t.role==="Commissioner"?`
                  <button id="btn-officer-reject" class="w-full py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded cursor-pointer transition-all flex items-center justify-center gap-2 uppercase tracking-wider">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Reject Proposal
                  </button>
                `:""}
              </div>
            `:`
              <!-- Custodian is someone else -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded text-center text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <svg class="w-6 h-6 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Awaiting clearance from<br><span class="text-[#2563EB] font-bold block mt-1">${e.currentCustodian}</span>
              </div>
              ${e.status==="Returned"&&t.role==="Senior Assistant"?`
                <div class="mt-4 p-4 bg-amber-50 border border-amber-200 rounded text-xs text-amber-800 space-y-2">
                  <p class="font-bold">Proposal Returned for Correction</p>
                  <p class="text-[10px] leading-relaxed">Open the initiation form to adjust values and resubmit.</p>
                  <button id="btn-sa-edit-returned" class="w-full py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded cursor-pointer transition-colors uppercase tracking-wider text-[10px]">
                    Edit & Resubmit Note
                  </button>
                </div>
              `:""}
            `}
          </div>

          <!-- Version History panel -->
          <div class="bg-white border border-slate-200 rounded-md p-6">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">Version Snapshots</h4>
            <div class="space-y-3">
              ${e.versions.map(p=>{const g=ee?p.version===ee:p.version===e.versions[e.versions.length-1].version;return`
                  <div class="version-select-card p-3 rounded-md border transition-all cursor-pointer flex items-center justify-between text-xs ${g?"border-[#2563EB] bg-blue-50/50 shadow-sm":"border-slate-200 hover:border-slate-350"}" data-ver="${p.version}">
                    <div>
                      <div class="font-bold text-slate-800">${p.version} - ${p.modifiedRole}</div>
                      <div class="text-[9px] text-slate-450 mt-0.5">${p.modifiedBy} | ${p.modifiedDate} ${p.modifiedTime}</div>
                    </div>
                    <svg class="w-4 h-4 text-[#2563EB] ${g?"":"hidden"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- Immutable Audit Logs panel -->
          <div class="bg-white border border-slate-200 rounded-md p-6">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">Immutable Audit Trail</h4>
            <div class="space-y-3 text-[10px] max-h-52 overflow-y-auto pr-2">
              ${e.auditLogs.map(p=>`
                <div class="p-2.5 rounded bg-slate-50 border border-slate-150 space-y-1">
                  <div class="flex justify-between font-bold text-slate-700">
                    <span>${p.action}</span>
                    <span class="text-[9px] text-slate-400 font-semibold">${p.date} ${p.time}</span>
                  </div>
                  <div class="text-slate-500 font-medium">By: ${p.user} (${p.role})</div>
                  <div class="grid grid-cols-2 gap-1 text-[8px] border-t border-slate-100 pt-1.5 mt-1.5 font-mono text-slate-450">
                    <div class="truncate">Old: ${p.previousValue}</div>
                    <div class="truncate">New: ${p.newValue}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `}
  `,(l=document.getElementById("btn-detail-back"))==null||l.addEventListener("click",()=>{lt=null,ee=null,te=!1,K()}),(d=document.getElementById("btn-toggle-compare"))==null||d.addEventListener("click",()=>{te=!0,Ds=e.versions[0].version,Rs=e.versions[e.versions.length-1].version,K()}),(c=document.getElementById("btn-exit-compare"))==null||c.addEventListener("click",()=>{te=!1,K()}),s.querySelectorAll(".version-select-card").forEach(p=>{p.addEventListener("click",()=>{ee=p.getAttribute("data-ver"),K()})}),(u=document.getElementById("btn-sa-edit-returned"))==null||u.addEventListener("click",()=>{oe=!0,K()}),te){const p=document.getElementById("select-ver-a"),g=document.getElementById("select-ver-b");p==null||p.addEventListener("change",()=>{Ds=p.value,ui(e)}),g==null||g.addEventListener("change",()=>{Rs=g.value,ui(e)}),ui(e)}if(n){const p=document.getElementById("officer-remarks"),g=document.getElementById("officer-modify-budget"),b=new Date().toISOString().split("T")[0],x=new Date().toTimeString().split(" ")[0].substring(0,5);(h=document.getElementById("btn-officer-approve"))==null||h.addEventListener("click",()=>{const k=p.value.trim();if(!k){T("Error: Remarks are mandatory before signing."),p.focus(),p.classList.add("border-rose-350");return}let v=i.estimatedBudget,y=!1;if(g){const _=parseInt(g.value,10);_!==i.estimatedBudget&&(v=_,y=!0)}const S=document.getElementById("btn-officer-approve");S.disabled=!0,S.innerHTML='<span class="animate-pulse">Signing note sheet electronically...</span>',setTimeout(()=>{let _=i.version;y&&(_=`v1.${e.versions.length}`,e.versions.push({...i,version:_,modifiedBy:t.name,modifiedRole:t.role,modifiedDate:b,modifiedTime:x,estimatedBudget:v,remarks:k}),e.auditLogs.push({user:t.name,role:t.role,date:b,time:x,ip:"10.2.20.15",action:"Modify Budget",previousValue:`Rs. ${i.estimatedBudget}`,newValue:`Rs. ${v} (${_})`}));const C=o.indexOf(t.role),E=o[C+1];e.workflowStatus[t.role]="Approved",e.approvalHistory.push({officerName:t.name,role:t.role,department:t.roleText,action:t.role==="Commissioner"?"Granted Administrative Sanction":"Approved & Forwarded",remarks:k,dateTime:`${b} ${x}`,status:"Cleared",versionNumber:_}),t.role==="Commissioner"?(e.status="Approved",e.currentCustodian="Approved / Closed",Nu(e),T("Project Note Approved! Administrative sanction order generated.")):(e.currentCustodian=E,e.workflowStatus[E]="Pending",e.auditLogs.push({user:t.name,role:t.role,date:b,time:x,ip:"10.2.20.15",action:"Approved & Forwarded",previousValue:`Custodian: ${t.role}`,newValue:`Custodian: ${E}`}),H(t.roleText,`Approved note ${e.id} and forwarded to ${E}`,"Success"),T(`Successfully signed and forwarded to ${E}`)),lt=null,K()},1500)}),(f=document.getElementById("btn-officer-return"))==null||f.addEventListener("click",()=>{const k=p.value.trim();if(!k){T("Error: Remarks are mandatory before returning file."),p.focus(),p.classList.add("border-rose-350");return}const v=o.indexOf(t.role),y=o[v-1];e.status=y==="Senior Assistant"?"Returned":"Pending",e.currentCustodian=y,e.workflowStatus[t.role]="Returned",e.workflowStatus[y]=y==="Senior Assistant"?"Returned":"Pending",e.approvalHistory.push({officerName:t.name,role:t.role,department:t.roleText,action:"Returned to "+y,remarks:k,dateTime:`${b} ${x}`,status:"Returned",versionNumber:i.version}),e.auditLogs.push({user:t.name,role:t.role,date:b,time:x,ip:"10.2.20.15",action:"Returned File",previousValue:`Custodian: ${t.role}`,newValue:`Custodian: ${y} (Returned)`}),H(t.roleText,`Returned note ${e.id} to ${y}`,"Success"),T(`Note returned to ${y}`),lt=null,K()}),(m=document.getElementById("btn-officer-reject"))==null||m.addEventListener("click",()=>{const k=p.value.trim();if(!k){T("Error: Remarks are mandatory before rejecting proposal."),p.focus(),p.classList.add("border-rose-350");return}confirm("WARNING: Are you sure you want to REJECT this project proposal? This action is permanent.")&&(e.status="Rejected",e.currentCustodian="None",e.workflowStatus.Commissioner="Rejected",e.approvalHistory.push({officerName:t.name,role:t.role,department:t.roleText,action:"Rejected Proposal",remarks:k,dateTime:`${b} ${x}`,status:"Rejected",versionNumber:i.version}),e.auditLogs.push({user:t.name,role:t.role,date:b,time:x,ip:"10.2.20.15",action:"Rejected Proposal",previousValue:"Pending Commissioner Approval",newValue:"Rejected & Closed"}),H(t.roleText,`Rejected note ${e.id} completely`,"Success"),T("Proposal note rejected and closed."),lt=null,K())})}}function ui(s){const t=document.getElementById("compare-column-a"),e=document.getElementById("compare-column-b");if(!t||!e)return;const i=s.versions.find(r=>r.version===Ds)||s.versions[0],n=s.versions.find(r=>r.version===Rs)||s.versions[s.versions.length-1],o=(r,l,d,c=!1)=>{const u=l!==d,h=f=>c?`Rs. ${(Number(f)/1e5).toFixed(1)} Lakhs`:String(f);return`
      <div class="space-y-1 py-3 border-b border-slate-50 last:border-0">
        <span class="text-[9px] uppercase tracking-wider font-bold text-slate-400">${r}</span>
        <div class="text-xs ${u?"p-2 rounded bg-amber-50/50 border border-amber-100":""}">
          ${u?`
            <div class="text-slate-500 font-semibold">
              <span class="text-[9px] uppercase font-bold text-rose-600 block mb-0.5">Value A:</span>
              ${h(l)}
            </div>
            <div class="text-slate-900 font-bold mt-2">
              <span class="text-[9px] uppercase font-bold text-emerald-600 block mb-0.5">Value B:</span>
              ${h(d)}
            </div>
          `:`
            <span class="text-slate-800 font-bold">${h(l)}</span>
          `}
        </div>
      </div>
    `},a=r=>`
    <div class="space-y-2">
      <div class="text-[10px] text-slate-450 font-semibold mb-4 bg-slate-50 p-2.5 rounded border border-slate-150">
        Snapshot version: ${r.version}<br>
        Modified by: ${r.modifiedBy} (${r.modifiedRole})<br>
        Date: ${r.modifiedDate} ${r.modifiedTime}
      </div>
      <div class="space-y-1">
        ${o("Project Name",i.projectName,n.projectName)}
        ${o("Subject",i.subject,n.subject)}
        ${o("Estimated Budget",i.estimatedBudget,n.estimatedBudget,!0)}
        ${o("Budget Head",i.budgetHead,n.budgetHead)}
        ${o("Priority",i.priority,n.priority)}
        ${o("Description",i.description,n.description)}
        ${o("Purpose",i.purpose,n.purpose)}
        ${o("Justification",i.justification,n.justification)}
        ${o("Remarks",i.remarks,n.remarks)}
      </div>
    </div>
  `;t.innerHTML=a(i),e.innerHTML=a(n)}function Nu(s){const t="PRJ-2026-ENG-"+Math.floor(100+Math.random()*900),e={id:t,name:s.projectName,department:s.department,zone:s.zone,projectType:s.subject.length>30?s.subject.substring(0,30)+"...":s.subject,status:"Planning",startDate:new Date().toISOString().split("T")[0],endDate:new Date(new Date().setFullYear(new Date().getFullYear()+1)).toISOString().split("T")[0],officerInCharge:"Er. R. Sharma",progress:0,budget:s.estimatedBudget,spent:0,description:s.description,lastUpdated:new Date().toISOString().slice(0,16).replace("T"," ")};w.projects.unshift(e),_t[t]||(_t[t]=[]),_t[t].push({id:"DOC-SAN-"+Math.floor(1e3+Math.random()*9e3),name:`Administrative_Sanction_Order_${t}.pdf`,type:"pdf",uploadedBy:"Sri M. Dana Kishore, IAS",uploadedDate:new Date().toISOString().split("T")[0],version:"v1.0",status:"Approved",size:"1.5 MB",category:"Administrative Sanctions"}),w.workOrders.push({id:"WO-"+Math.floor(1e4+Math.random()*9e4),projectId:t,title:`Work Order Proposal for ${s.projectName}`,vendor:"Pending Bid Winner",amount:s.estimatedBudget,currentStage:"Administrative Sanction",stageHistory:{Requirement:s.createdDate,Proposal:s.createdDate,"Administrative Sanction":new Date().toISOString().split("T")[0]},updates:[{date:new Date().toISOString().split("T")[0],text:"Administrative Sanction received. Work order initialized in ERP."}]}),w.notifications.unshift({id:w.notifications.length+1,title:"Project Approved & Initiated",text:`Proposal note ${s.id} approved by Commissioner. Project ${t} created with Administrative Sanction.`,time:"Just now",read:!1}),w.auditLogs.unshift({id:"AUD-"+Math.floor(1e3+Math.random()*9e3),user:"Commissioner",action:`Approved Note ${s.fileNumber} and instantiated project ${t}`,date:new Date().toISOString().split("T")[0],time:new Date().toTimeString().split(" ")[0].substring(0,5),ip:"10.2.3.1",status:"Success"})}let gs="All",ms="All",bs="",ft="recently-updated",pt="overview";function $e(){var c,u,h;const s=document.getElementById("projects-list-view");if(!s)return;const t=w.currentUser;if(!t)return;let e=w.projects.filter(f=>{const m=f.name.toLowerCase().includes(bs)||f.id.toLowerCase().includes(bs),p=gs==="All"||f.department===gs,g=ms==="All"||f.status===ms;return m&&p&&g});ft==="recently-updated"?e.sort((f,m)=>new Date(m.lastUpdated).getTime()-new Date(f.lastUpdated).getTime()):ft==="budget-high"?e.sort((f,m)=>m.budget-f.budget):ft==="budget-low"?e.sort((f,m)=>f.budget-m.budget):ft==="progress-high"?e.sort((f,m)=>m.progress-f.progress):ft==="progress-low"&&e.sort((f,m)=>f.progress-m.progress);const i=["All","Engineering","Drainage & Sewerage","Electrical & Lighting","Landscaping & Parks"],n=["All","Planning","In Progress","Completed","On Hold","Under Audit"],o=w.eOfficeFiles.filter(f=>f.currentCustodian===t.role&&f.status!=="Approved / Closed"&&f.status!=="Rejected"),a=t.role==="Finance Officer"?w.bills.filter(f=>f.status!=="Paid"):[],r=o.length+a.length;w.projects.filter(f=>f.status==="In Progress").length,(w.projects.reduce((f,m)=>f+m.budget,0)/1e7).toFixed(1),(w.projects.reduce((f,m)=>f+m.spent,0)/1e7).toFixed(1),r>0&&`${r}${o.map(f=>{const m=w.projects.find(g=>g.id===f.projectId),p=f.priority==="High"?"bg-rose-50 text-rose-700 border-rose-100":"bg-slate-100 text-slate-655 border-slate-200";return`
              <div class="py-3 flex items-center justify-between gap-4">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="text-[9px] font-mono font-bold text-slate-450 uppercase">${f.id}</span>
                    <span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase tracking-wider border ${p}">${f.priority}</span>
                    <span class="text-[10px] text-slate-400 font-semibold">${m?m.name:""}</span>
                  </div>
                  <p class="text-xs font-bold text-slate-800">${f.subject}</p>
                </div>
                <button onclick="goToProjectTab('${f.projectId}', 'approvals')" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded cursor-pointer transition-colors shrink-0">
                  Resolve Task
                </button>
              </div>
            `}).join("")}${a.map(f=>{const m=w.projects.find(p=>p.id===f.projectId);return`
              <div class="py-3 flex items-center justify-between gap-4">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="text-[9px] font-mono font-bold text-slate-450 uppercase">${f.id}</span>
                    <span class="px-1.5 py-0.2 rounded text-[8px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-100">${f.status}</span>
                    <span class="text-[10px] text-slate-400 font-semibold">${m?m.name:""}</span>
                  </div>
                  <p class="text-xs font-bold text-slate-800">Invoice Claim for ${f.woId} - Rs. ${(f.amount/1e5).toFixed(1)} Lakhs</p>
                </div>
                <button onclick="goToProjectTab('${f.projectId}', 'approvals')" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded cursor-pointer transition-colors shrink-0">
                  Resolve Payment
                </button>
              </div>
            `}).join("")}`,s.innerHTML=`
    <!-- Filter Header -->
    <div class="bg-white border border-slate-200 rounded-md p-6 mb-6">
      <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
        <div>
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Projects Registry</h3>
          <p class="text-[10px] text-slate-500 mt-1">Select a project to enter its specialized workspace</p>
        </div>
        
        <!-- Controls -->
        <div class="flex flex-wrap items-center gap-3">
          <!-- Search -->
          <div class="flex items-center bg-slate-50 border border-slate-200 rounded-md px-3 py-1.5 w-60">
            <span class="text-slate-400 mr-2">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
            <input type="text" id="project-directory-search" class="w-full text-xs text-slate-800 placeholder-slate-400 bg-transparent outline-none" placeholder="Search by Project Name / ID..." value="${bs}">
          </div>

          <!-- Dept Filter -->
          <select id="project-directory-dept" class="px-3 py-1.5 text-xs border border-slate-200 rounded-md bg-white text-slate-700 outline-none">
            ${i.map(f=>`<option value="${f}" ${f===gs?"selected":""}>Dept: ${f}</option>`).join("")}
          </select>

          <!-- Status Filter -->
          <select id="project-directory-status" class="px-3 py-1.5 text-xs border border-slate-200 rounded-md bg-white text-slate-700 outline-none">
            ${n.map(f=>`<option value="${f}" ${f===ms?"selected":""}>Status: ${f}</option>`).join("")}
          </select>

          <!-- Sort Options -->
          <select id="project-directory-sort" class="px-3 py-1.5 text-xs border border-slate-200 rounded-md bg-white text-slate-700 outline-none">
            <option value="recently-updated" ${ft==="recently-updated"?"selected":""}>Sort: Recently Updated</option>
            <option value="budget-high" ${ft==="budget-high"?"selected":""}>Sort: Budget (High to Low)</option>
            <option value="budget-low" ${ft==="budget-low"?"selected":""}>Sort: Budget (Low to High)</option>
            <option value="progress-high" ${ft==="progress-high"?"selected":""}>Sort: Progress (High to Low)</option>
            <option value="progress-low" ${ft==="progress-low"?"selected":""}>Sort: Progress (Low to High)</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${e.map(f=>{let m="bg-slate-100 text-slate-655";return f.status==="Completed"?m="bg-emerald-50 text-emerald-700":f.status==="In Progress"?m="bg-indigo-50 text-indigo-700":f.status==="Planning"?m="bg-slate-100 text-slate-600":f.status==="On Hold"?m="bg-rose-50 text-rose-700":f.status==="Under Audit"&&(m="bg-amber-50 text-amber-700"),`
          <div class="project-directory-card bg-white border border-slate-200 hover:border-slate-350 rounded-md p-6 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between" data-id="${f.id}">
            <div class="space-y-4">
              <!-- Top Row -->
              <div class="flex justify-between items-center">
                <span class="text-[9px] font-mono font-bold text-slate-400 tracking-wider">${f.id}</span>
                <span class="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${m}">${f.status}</span>
              </div>

              <!-- Title -->
              <div>
                <h4 class="text-xs font-bold text-slate-900 leading-snug hover:text-[#2563EB] transition-colors">${f.name}</h4>
                <p class="text-[10px] text-slate-450 mt-1 font-semibold">${f.projectType}</p>
              </div>
            </div>
          </div>
        `}).join("")}
    </div>
    
    ${e.length===0?'<div class="bg-white border border-slate-200 p-12 text-center text-xs text-slate-450 font-medium rounded-md">No projects matching the selected search parameters.</div>':""}
  `,window.goToProjectTab=(f,m)=>{const p=w.projects.find(g=>g.id===f);p&&(w.activeProject=p,w.activeProjectModule=m,w.activeView="project-workspace",kt(),ct())};const l=document.getElementById("project-directory-search");l==null||l.addEventListener("input",()=>{bs=l.value.trim().toLowerCase(),$e()}),(c=document.getElementById("project-directory-dept"))==null||c.addEventListener("change",f=>{gs=f.target.value,$e()}),(u=document.getElementById("project-directory-status"))==null||u.addEventListener("change",f=>{ms=f.target.value,$e()}),(h=document.getElementById("project-directory-sort"))==null||h.addEventListener("change",f=>{ft=f.target.value,$e()}),s.querySelectorAll(".project-directory-card").forEach(f=>{f.addEventListener("click",()=>{const m=f.getAttribute("data-id"),p=w.projects.find(g=>g.id===m);p&&Ve(p)})})}function ya(){const s=document.getElementById("project-workspace-view"),t=w.activeProject;if(!(!s||!t))switch(s.innerHTML="",w.activeProjectModule){case"summary":Vu(s,t);break;case"tracking":xo(s,t);break;case"notes":Hu(s,t);break;case"documents":zu(s,t);break;case"aiassist":Pi(s,t);break;case"approvals":Is(s,t);break;default:xo(s,t)}}function Vu(s,t){Hs[t.id];const e=Mi[t.id]||[],i=_t[t.id]||[];s.innerHTML=`
    <!-- Top Header & Export Bar -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4 mb-4">
      <div>
        <h2 class="text-base font-extrabold text-slate-900 uppercase tracking-wider">${t.id} : ${t.name}</h2>
        <p class="text-xs text-slate-500 mt-1 font-semibold">${t.projectType} • ${t.zone}</p>
      </div>
      
      <!-- Export Options Dropdown -->
      <div class="relative inline-block text-left">
        <button id="project-export-btn" class="flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-md text-xs font-bold text-slate-700 hover:text-slate-955 transition-colors shadow-xs cursor-pointer">
          <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          <span>Export Options</span>
          <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div id="project-export-dropdown" class="hidden absolute right-0 mt-1.5 w-56 bg-white border border-slate-200 rounded-md shadow-lg py-1 z-55">
          <div class="px-3 py-1.5 border-b border-slate-100 text-[9px] font-bold text-slate-400 uppercase tracking-widest">Available Formats</div>
          <a class="dropdown-item px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer transition-colors" onclick="triggerExport('PDF')">
            <svg class="w-3.5 h-3.5 text-red-650" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 9.8 10c5.3 0 9.7-4.3 9.7-9.8S17 2 12 2zm-1.8 13.8h-1.5v-6h1.5v6zm4.5 0h-2.3v-6h2.3v6zm-2.3-2.3h1.5v-1.5h-1.5v1.5z"/></svg>
            <span>Export as PDF (.pdf)</span>
          </a>
          <a class="dropdown-item px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer transition-colors" onclick="triggerExport('Word')">
            <svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 9.8 10 9.7-4.3 9.7-9.8S17 2 12 2zm2 13h-4v-1h4v1zm0-2.5h-4v-1h4v1zm0-2.5h-4V7h4v1z"/></svg>
            <span>Export as Word (.docx)</span>
          </a>
          <a class="dropdown-item px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer transition-colors" onclick="triggerExport('Excel')">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 9.8 10 9.7-4.3 9.7-9.8S17 2 12 2zm1 13h-2v-2h2v2zm0-4.5h-2v-2h2v2z"/></svg>
            <span>Export as Excel (.xlsx)</span>
          </a>
          <a class="dropdown-item px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer transition-colors" onclick="triggerExport('CSV')">
            <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 9.8 10 9.7-4.3 9.7-9.8S17 2 12 2zm1 13h-2v-2h2v2zm0-4.5h-2v-2h2v2z"/></svg>
            <span>Export as CSV (.csv)</span>
          </a>
          <a class="dropdown-item px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer transition-colors" onclick="window.print()">
            <svg class="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2m-2-4H8v8h8v-8z"/></svg>
            <span>Print Summary</span>
          </a>
          <div class="border-t border-slate-100 my-1"></div>
          <a class="dropdown-item px-4 py-2 text-xs text-indigo-700 hover:bg-indigo-50 flex items-center gap-2 cursor-pointer transition-colors font-bold" onclick="generateProjectReport()">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"/></svg>
            <span>Generate Project Report</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Secondary horizontal tab bar -->
    <div class="flex border-b border-slate-200 mb-6 gap-2">
      <button class="project-summary-tab-btn px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${pt==="overview"?"text-[#2563EB] border-[#2563EB]":"text-slate-500 border-transparent hover:text-slate-700"}" data-tab="overview">Overview</button>
      <button class="project-summary-tab-btn px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${pt==="financial"?"text-[#2563EB] border-[#2563EB]":"text-slate-500 border-transparent hover:text-slate-700"}" data-tab="financial">Financial Status</button>
      <button class="project-summary-tab-btn px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${pt==="milestones"?"text-[#2563EB] border-[#2563EB]":"text-slate-500 border-transparent hover:text-slate-700"}" data-tab="milestones">Milestones</button>
      <button class="project-summary-tab-btn px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${pt==="activity"?"text-[#2563EB] border-[#2563EB]":"text-slate-500 border-transparent hover:text-slate-700"}" data-tab="activity">Recent Activity</button>
      <button class="project-summary-tab-btn px-4 py-2 text-xs font-bold border-b-2 transition-all cursor-pointer ${pt==="documents"?"text-[#2563EB] border-[#2563EB]":"text-slate-500 border-transparent hover:text-slate-700"}" data-tab="documents">Documents</button>
    </div>

    <!-- Tab Contents -->
    <div id="project-summary-tabs-container">
      <!-- 1. OVERVIEW -->
      <div id="tab-content-overview" class="${pt==="overview"?"":"hidden"} animate-toast-slide-in space-y-6">
        <div class="bg-white border border-slate-200 rounded-md p-6 space-y-6">
          <div>
            <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Project Overview</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-semibold">${t.description}</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-semibold text-slate-500 pt-4 border-t border-slate-100">
            <div>
              <span class="text-slate-400 block uppercase text-[8px] tracking-wider mb-0.5">Department / Node</span>
              <span class="text-slate-900 block font-bold">${t.department}</span>
            </div>
            <div>
              <span class="text-slate-400 block uppercase text-[8px] tracking-wider mb-0.5">Zone Area</span>
              <span class="text-slate-900 block font-bold">${t.zone}</span>
            </div>
            <div>
              <span class="text-slate-400 block uppercase text-[8px] tracking-wider mb-0.5">Project Type</span>
              <span class="text-slate-900 block font-bold">${t.projectType}</span>
            </div>
            <div>
              <span class="text-slate-400 block uppercase text-[8px] tracking-wider mb-0.5">Project Manager</span>
              <span class="text-slate-900 block font-bold">${t.officerInCharge}</span>
            </div>
            <div>
              <span class="text-slate-400 block uppercase text-[8px] tracking-wider mb-0.5">Start Date</span>
              <span class="text-slate-900 block font-bold">${t.startDate}</span>
            </div>
            <div>
              <span class="text-slate-400 block uppercase text-[8px] tracking-wider mb-0.5">Target Completion</span>
              <span class="text-slate-900 block font-bold">${t.endDate}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. FINANCIAL STATUS -->
      <div id="tab-content-financial" class="${pt==="financial"?"":"hidden"} animate-toast-slide-in space-y-6">
        <div class="bg-white border border-slate-200 rounded-md p-6 space-y-6">
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Financial Status</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex justify-between text-xs font-semibold">
                <span class="text-slate-500">Estimated Cost (Sanction)</span>
                <span class="text-slate-900 font-bold">Rs. ${(t.budget/1e7).toFixed(2)} Cr</span>
              </div>
              <div class="flex justify-between text-xs font-semibold">
                <span class="text-slate-500">Budget Allocated</span>
                <span class="text-slate-900 font-bold">Rs. ${(t.budget/1e7).toFixed(2)} Cr</span>
              </div>
              <div class="flex justify-between text-xs font-semibold">
                <span class="text-slate-500">Budget Utilized (Expenditure)</span>
                <span class="text-slate-900 font-bold">Rs. ${(t.spent/1e7).toFixed(2)} Cr</span>
              </div>
            </div>
            
            <div class="space-y-2">
              <div class="flex justify-between items-center text-xs font-semibold mb-1">
                <span class="text-slate-655">Work Construction Progress</span>
                <span class="text-[#2563EB] font-bold">${t.progress}%</span>
              </div>
              <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full bg-[#2563EB] rounded-full" style="width: ${t.progress}%"></div>
              </div>
            </div>
          </div>

          <div class="border-t border-slate-100 pt-6">
            <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Financial Summary</h3>
            <p class="text-xs text-slate-600 leading-relaxed font-semibold">
              Out of the total budget limit of Rs. ${(t.budget/1e7).toFixed(2)} Cr, Rs. ${(t.spent/1e7).toFixed(2)} Cr has been utilized. The construction works are at ${t.progress}% of physical progress completion.
            </p>
          </div>
        </div>
      </div>

      <!-- 3. MILESTONES -->
      <div id="tab-content-milestones" class="${pt==="milestones"?"":"hidden"} animate-toast-slide-in space-y-6">
        <div class="bg-white border border-slate-200 rounded-md p-6">
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Key Project Milestones</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between p-3 border border-slate-100 rounded bg-slate-50/30 text-xs font-semibold">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span class="font-bold text-slate-800">Milestone 1: Structural Soil Clearances</span>
              </div>
              <span class="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Completed (2025-07-15)</span>
            </div>

            <div class="flex items-center justify-between p-3 border border-slate-100 rounded bg-slate-50/30 text-xs font-semibold">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span class="font-bold text-slate-800">Milestone 2: Sub-structure Concrete Pillars</span>
              </div>
              <span class="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Completed (2026-01-15)</span>
            </div>

            <div class="flex items-center justify-between p-3 border border-slate-100 rounded bg-slate-50/30 text-xs font-semibold">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse"></span>
                <span class="font-bold text-slate-800">Milestone 3: Steel Girder Erection (Superstructure)</span>
              </div>
              <span class="text-[9px] font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full">In Progress</span>
            </div>

            <div class="flex items-center justify-between p-3 border border-slate-100 rounded bg-slate-50/30 text-xs font-semibold">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                <span class="font-bold text-slate-400">Milestone 4: Asphalt Road Blacktopping</span>
              </div>
              <span class="text-[9px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Planned (Oct 2026)</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. RECENT ACTIVITY -->
      <div id="tab-content-activity" class="${pt==="activity"?"":"hidden"} animate-toast-slide-in space-y-6">
        <div class="bg-white border border-slate-200 rounded-md p-6">
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Activity Timeline & Updates</h3>
          <div class="space-y-4 max-h-96 overflow-y-auto pr-1 text-xs">
            ${e.map(c=>`
              <div class="border-l border-slate-200 pl-3.5 relative space-y-1 py-1 font-semibold">
                <span class="absolute -left-1 top-2.5 w-2 h-2 rounded-full bg-[#2563EB]"></span>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">${c.date} ${c.time} | ${c.actor}</div>
                <p class="text-slate-650 font-semibold leading-relaxed">${c.activity}</p>
              </div>
            `).join("")}
            ${e.length===0?'<div class="text-center text-xs text-slate-400 p-4">No recent activity logs.</div>':""}
          </div>
        </div>
      </div>

      <!-- 5. DOCUMENTS -->
      <div id="tab-content-documents" class="${pt==="documents"?"":"hidden"} animate-toast-slide-in space-y-6">
        <div class="bg-white border border-slate-200 rounded-md p-6">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Project Documents & Repository</h3>
              <p class="text-[10px] text-slate-500 mt-1">Audit-ready PDF file archives. Click Preview to view version logs and details</p>
            </div>
            <span class="px-2.5 py-1 rounded bg-[#EEF4FF] text-[#2563EB] text-[9px] font-bold uppercase tracking-wider">
              ${i.length} Documents Attached
            </span>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="bg-slate-50 border-b border-slate-200 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <th class="py-3 px-4">Document Name</th>
                  <th class="py-3 px-4">Category</th>
                  <th class="py-3 px-4">Version</th>
                  <th class="py-3 px-4">Uploaded By</th>
                  <th class="py-3 px-4">Uploaded Date</th>
                  <th class="py-3 px-4">Status</th>
                  <th class="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 font-semibold text-slate-700">
                ${i.map(c=>{let u="bg-slate-100 text-slate-600 border border-slate-200";return c.status==="Approved"?u="bg-emerald-50 text-emerald-700 border border-emerald-200":c.status==="Active"?u="bg-indigo-50 text-indigo-700 border border-indigo-200":(c.status==="Pending Payment"||c.status==="Pending Review")&&(u="bg-amber-50 text-amber-700 border border-amber-200"),`
                    <tr class="hover:bg-slate-50/50">
                      <td class="py-3.5 px-4 text-slate-900 font-bold flex items-center gap-2">
                        <svg class="w-4 h-4 text-[#2563EB] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                        </svg>
                        <span>${c.name}</span>
                      </td>
                      <td class="py-3.5 px-4 text-slate-500 font-medium">${c.category}</td>
                      <td class="py-3.5 px-4 text-slate-500 font-mono text-[10px]">${c.version}</td>
                      <td class="py-3.5 px-4 text-slate-655 font-medium">${c.uploadedBy}</td>
                      <td class="py-3.5 px-4 text-slate-500 font-mono text-[10px]">${c.uploadedDate}</td>
                      <td class="py-3.5 px-4">
                        <span class="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${u}">${c.status}</span>
                      </td>
                      <td class="py-3.5 px-4 text-right">
                        <div class="flex items-center justify-end gap-1.5">
                          <button onclick="previewDocumentById('${c.id}')" class="bg-white hover:bg-slate-50 text-slate-700 text-[10px] font-bold px-2 py-1 rounded border border-slate-200 cursor-pointer transition-colors">Preview</button>
                          <button onclick="downloadDocumentByName('${c.name}')" class="bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded cursor-pointer transition-colors">Download</button>
                          <button onclick="viewDocumentVersionHistory('${c.id}')" class="bg-white hover:bg-slate-50 text-indigo-755 text-[10px] font-bold px-2 py-1 rounded border border-indigo-150 cursor-pointer transition-colors">History</button>
                        </div>
                      </td>
                    </tr>
                  `}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;const n="px-4 py-2 text-xs font-bold border-b-2 text-[#2563EB] border-[#2563EB] cursor-pointer transition-all",o="px-4 py-2 text-xs font-bold border-b-2 text-slate-500 border-transparent hover:text-slate-700 cursor-pointer transition-all",a=["overview","financial","milestones","activity","documents"],r=s.querySelectorAll(".project-summary-tab-btn");r.forEach(c=>{c.addEventListener("click",()=>{const u=c.getAttribute("data-tab");u&&(pt=u,r.forEach(h=>{h.getAttribute("data-tab")===u?h.className=`project-summary-tab-btn ${n}`:h.className=`project-summary-tab-btn ${o}`}),a.forEach(h=>{const f=document.getElementById(`tab-content-${h}`);f&&(h===u?f.classList.remove("hidden"):f.classList.add("hidden"))}))})});const l=document.getElementById("project-export-btn"),d=document.getElementById("project-export-dropdown");l&&d&&(l.addEventListener("click",c=>{c.stopPropagation(),d.classList.toggle("hidden")}),document.addEventListener("click",()=>{d.classList.add("hidden")})),window.previewDocumentById=c=>{const u=i.find(h=>h.id===c);u&&wa(u)},window.downloadDocumentByName=c=>{T(`Downloading file: ${c}`)},window.viewDocumentVersionHistory=c=>{const u=document.getElementById("document-preview-modal"),h=i.find(f=>f.id===c);u&&h&&(u.classList.remove("hidden"),u.innerHTML=`
        <div class="bg-white border border-slate-200 rounded-md shadow-xl max-w-md w-full p-6 space-y-4 animate-toast-slide-in">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Version History</h4>
              <p class="text-[10px] text-slate-450 mt-1 uppercase font-mono">${h.name}</p>
            </div>
            <button onclick="document.getElementById('document-preview-modal').classList.add('hidden')" class="text-slate-400 hover:text-slate-600 font-bold">✕</button>
          </div>
          <div class="divide-y divide-slate-100 space-y-2">
            <div class="py-2.5 flex justify-between text-xs items-center">
              <div>
                <span class="font-bold text-slate-800">${h.version} (Active)</span>
                <span class="text-[9px] text-slate-400 block">Uploaded by ${h.uploadedBy}</span>
              </div>
              <span class="text-[10px] font-mono text-slate-450 font-bold">${h.uploadedDate}</span>
            </div>
            <div class="py-2.5 flex justify-between text-xs items-center">
              <div>
                <span class="font-medium text-slate-500">v0.9 (Draft)</span>
                <span class="text-[9px] text-slate-400 block">Uploaded by Sri V. Kumar</span>
              </div>
              <span class="text-[10px] font-mono text-slate-450 font-bold">2025-05-15</span>
            </div>
          </div>
          <button onclick="document.getElementById('document-preview-modal').classList.add('hidden')" class="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-[10px] font-bold uppercase tracking-wider rounded transition-colors cursor-pointer">
            Close Version History
          </button>
        </div>
      `)},window.triggerExport=c=>{T(`Successfully exported Project Data as ${c} format!`)},window.generateProjectReport=()=>{const c=document.getElementById("project-report-modal");if(!c)return;Hs[t.id],Mi[t.id];const u=xa[t.id]||[],h=_t[t.id]||[];c.classList.remove("hidden"),c.innerHTML=`
      <div class="bg-white border border-slate-300 rounded-md shadow-2xl max-w-4xl w-full p-8 space-y-6 my-8 print:p-0 print:border-none print:shadow-none max-h-[90vh] overflow-y-auto animate-toast-slide-in">
        <!-- Print Actions -->
        <div class="flex justify-between items-center pb-4 border-b border-slate-200 print:hidden">
          <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">Official Project Report Preview</span>
          <div class="flex gap-2">
            <button onclick="window.print()" class="px-3.5 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[10px] font-bold uppercase tracking-wider rounded transition-colors cursor-pointer">
              Print Report
            </button>
            <button onclick="document.getElementById('project-report-modal').classList.add('hidden')" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-wider rounded transition-colors cursor-pointer">
              Close
            </button>
          </div>
        </div>

        <!-- Report Sheet Container -->
        <div class="space-y-6 text-slate-800 font-serif">
          <!-- Letterhead Header -->
          <div class="text-center space-y-2 border-b-2 border-slate-900 pb-4">
            <div class="font-bold text-lg text-slate-900 tracking-wide uppercase">Greater Hyderabad Municipal Corporation</div>
            <div class="text-xs text-slate-700 font-semibold tracking-wider">OFFICE OF THE COMMISSIONER, HEAD OFFICE, TANK BUND ROAD, HYDERABAD</div>
            <div class="text-[10px] text-slate-500 font-mono">Date: ${new Date().toISOString().split("T")[0]} | Ref No: GHMC/IT-ERP/REPORT/${t.id}/${new Date().getFullYear()}</div>
          </div>

          <div class="text-center font-bold text-sm text-slate-900 underline uppercase py-2">
            DETAILED PROJECT STATUS REPORT
          </div>

          <!-- Section 1: Project Information -->
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 p-1 border-l-2 border-slate-900 font-sans">1. Project Information</h4>
            <table class="w-full text-xs border border-slate-200 border-collapse">
              <tbody>
                <tr>
                  <td class="p-2 border border-slate-200 bg-slate-50 font-bold w-1/4">Project ID:</td>
                  <td class="p-2 border border-slate-200 font-mono">${t.id}</td>
                  <td class="p-2 border border-slate-200 bg-slate-50 font-bold w-1/4">Current Status:</td>
                  <td class="p-2 border border-slate-200 font-bold text-indigo-700">${t.status}</td>
                </tr>
                <tr>
                  <td class="p-2 border border-slate-200 bg-slate-50 font-bold">Project Name:</td>
                  <td class="p-2 border border-slate-200" colspan="3">${t.name}</td>
                </tr>
                <tr>
                  <td class="p-2 border border-slate-200 bg-slate-50 font-bold">Department / Division:</td>
                  <td class="p-2 border border-slate-200">${t.department}</td>
                  <td class="p-2 border border-slate-200 bg-slate-50 font-bold">Zone / Area:</td>
                  <td class="p-2 border border-slate-200">${t.zone}</td>
                </tr>
                <tr>
                  <td class="p-2 border border-slate-200 bg-slate-50 font-bold">Project Manager:</td>
                  <td class="p-2 border border-slate-200">${t.officerInCharge}</td>
                  <td class="p-2 border border-slate-200 bg-slate-50 font-bold">Outlay Timeline:</td>
                  <td class="p-2 border border-slate-200">${t.startDate} to ${t.endDate}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Section 2: Financial Summary -->
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 p-1 border-l-2 border-slate-900 font-sans">2. Financial Status Summary</h4>
            <table class="w-full text-xs border border-slate-200 border-collapse">
              <thead>
                <tr class="bg-slate-50">
                  <th class="p-2 border border-slate-200 text-left font-bold">Sanction Budget Outlay</th>
                  <th class="p-2 border border-slate-200 text-left font-bold">Disbursed Expenditure</th>
                  <th class="p-2 border border-slate-200 text-left font-bold">Utilization Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 border border-slate-200 font-bold">Rs. ${(t.budget/1e7).toFixed(2)} Crores</td>
                  <td class="p-2 border border-slate-200 font-bold">Rs. ${(t.spent/1e7).toFixed(2)} Crores</td>
                  <td class="p-2 border border-slate-200 font-bold text-emerald-700">${(t.spent/t.budget*100).toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Section 3: Key Milestones -->
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 p-1 border-l-2 border-slate-900 font-sans">3. Project Milestones & Progress</h4>
            <div class="text-xs space-y-1 font-sans">
              <div class="flex justify-between font-bold text-slate-700 mb-1">
                <span>Overall Physical Completion Progress:</span>
                <span>${t.progress}%</span>
              </div>
              <div class="w-full h-2 bg-slate-100 border border-slate-200 rounded-full overflow-hidden mb-3">
                <div class="h-full bg-slate-900" style="width: ${t.progress}%"></div>
              </div>
              <div class="border border-slate-200 rounded p-2 bg-slate-50/20">
                <ul class="list-disc pl-5 space-y-1 text-slate-700 font-semibold">
                  <li>Milestone 1: Structural Soil Clearances — <span class="text-emerald-700">Completed (2025-07-15)</span></li>
                  <li>Milestone 2: Sub-structure Concrete Pillars — <span class="text-emerald-700">Completed (2026-01-15)</span></li>
                  <li>Milestone 3: Steel Girder Erection (Superstructure) — <span class="text-indigo-700 font-bold">In Progress (${t.progress}%)</span></li>
                  <li>Milestone 4: Asphalt Road Blacktopping — <span class="text-slate-500">Planned (Oct 2026)</span></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Section 4: Workflow Tracking & Approvals -->
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 p-1 border-l-2 border-slate-900 font-sans">4. File Movement & Workflow History</h4>
            <table class="w-full text-[10px] border border-slate-200 border-collapse">
              <thead>
                <tr class="bg-slate-50 text-slate-700 font-bold">
                  <th class="p-2 border border-slate-200 text-left">Stage</th>
                  <th class="p-2 border border-slate-200 text-left">Officer Name</th>
                  <th class="p-2 border border-slate-200 text-left">Action Date / Time</th>
                  <th class="p-2 border border-slate-200 text-left">Status</th>
                  <th class="p-2 border border-slate-200 text-left">Remarks Given</th>
                </tr>
              </thead>
              <tbody>
                ${u.map(f=>`
                  <tr>
                    <td class="p-2 border border-slate-200 font-bold">${f.stage}</td>
                    <td class="p-2 border border-slate-200">${f.officer} (${f.department})</td>
                    <td class="p-2 border border-slate-200 font-mono">${f.dateTime}</td>
                    <td class="p-2 border border-slate-200 font-bold">${f.status}</td>
                    <td class="p-2 border border-slate-200 italic">"${f.remarks||"N/A"}"</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <!-- Section 5: Attached Auditable Certificates -->
          <div class="space-y-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 p-1 border-l-2 border-slate-900 font-sans">5. Attached Files & Certificates</h4>
            <ul class="list-decimal pl-5 text-xs text-slate-700 font-semibold space-y-1">
              ${h.map(f=>`
                <li>${f.name} (Version: ${f.version}, Uploaded by: ${f.uploadedBy} on ${f.uploadedDate}, Status: ${f.status})</li>
              `).join("")}
            </ul>
          </div>

          <!-- Section 6: Officer Signatures & Seal -->
          <div class="pt-8">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 bg-slate-50 p-1 border-l-2 border-slate-900 font-sans mb-8">6. Authorization & Attestations</h4>
            <div class="grid grid-cols-3 gap-8 text-center text-xs font-sans mt-4">
              <div class="space-y-1">
                <div class="h-10 flex items-end justify-center font-mono italic text-slate-400">[Digital Signature Verified]</div>
                <div class="border-t border-slate-350 pt-2 font-bold text-slate-900">Sri M. Dana Kishore, IAS</div>
                <div class="text-[9px] text-slate-500 uppercase tracking-wider">Commissioner, GHMC</div>
              </div>
              <div class="space-y-1">
                <div class="h-10 flex items-end justify-center font-mono italic text-slate-400">[Digital Signature Verified]</div>
                <div class="border-t border-slate-350 pt-2 font-bold text-slate-900">Smt. K. Anitha Reddy</div>
                <div class="text-[9px] text-slate-500 uppercase tracking-wider">Chief Finance Officer</div>
              </div>
              <div class="space-y-1">
                <div class="h-10 flex items-end justify-center font-mono italic text-slate-400">[Digital Signature Verified]</div>
                <div class="border-t border-slate-350 pt-2 font-bold text-slate-900">Er. R. Sharma</div>
                <div class="text-[9px] text-slate-500 uppercase tracking-wider">Executive Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}function wa(s){var i;const t=document.getElementById("document-preview-modal");if(!t)return;let e="";s.name==="ghmc.pdf"?e=`
      <div class="flex-1 bg-emerald-50/10 p-6 overflow-y-auto border-r border-slate-200 font-mono text-[10px] text-emerald-950 leading-relaxed max-h-full">
        <!-- GHMC Note sheet Header -->
        <div class="text-center border-b border-emerald-900/20 pb-4 mb-4">
          <div class="font-bold text-xs text-emerald-900">GREATER HYDERABAD MUNICIPAL CORPORATION</div>
          <div class="text-[9px] text-emerald-800/80 uppercase font-semibold">O/o SENIOR ASSISTANT-1 INFORMATION TECHNOLOGY, HEAD OFFICE</div>
          <div class="text-[9px] text-emerald-800/60 font-mono mt-1">Computer File No. 401476 | File Ref: IT/COM/0008/2026/SR.ASST-1 (IT)-HO</div>
        </div>

        <div class="mb-4">
          <div class="font-bold text-emerald-900 uppercase mb-1">Subject:</div>
          <p class="font-medium text-emerald-955 bg-white p-2 border border-emerald-900/10 rounded">
            Providing of IVR Outbound Call Campaign – Early Bird Property Tax Scheme 2026-27 of GHMC – According administrative Sanction and Agency approval – Request – Reg.
          </p>
        </div>

        <div class="space-y-4">
          <div class="border-l-2 border-emerald-800/30 pl-3">
            <span class="font-bold text-emerald-900 text-[9px] block">Note #1 (Submitted to AC(IT), GHMC)</span>
            <p class="mt-1">
              It is submitted that the Commissioner, GHMC has instructed the IT Section to give wide publicity for the Early Bird Property Tax Scheme (5% rebate) by adopting various modes such as SMS, call campaigns, etc., to ensure maximum outreach before 30th April 2026.
            </p>
            <p class="mt-2">
              In this regard, the IT Section proposes to undertake an IVR Outbound Call Campaign to create awareness among citizens who have not yet paid their Property Tax for the financial year 2026-27 and to encourage them to avail the Early Bird Scheme.
            </p>
            <p class="mt-2">
              Accordingly, this office has approached M/s. EMRI Green Health Services, the agency presently maintaining the GHMC Call Center (040-21111111) to provide services for conducting the IVR Outbound Call Campaign.
            </p>
            
            <div class="mt-3 bg-white border border-emerald-900/15 rounded p-2">
              <div class="font-bold text-emerald-900 mb-1">Cost Details (Excl GST):</div>
              <div class="flex justify-between border-b border-emerald-900/10 py-1 font-semibold">
                <span>Providing IVR campaign execution (Lump sum)</span>
                <span>Rs. 5,00,000</span>
              </div>
              <div class="flex justify-between pt-1 font-bold">
                <span>Total amount (Rupees Five Lakh Only)</span>
                <span>Rs. 5,00,000</span>
              </div>
            </div>
            
            <div class="text-right mt-2 text-emerald-800/60 font-bold text-[8px] uppercase font-mono">
              Signed: G. SATYANARAYANA (SR.ASST-1(IT)-HO) — 20/04/2026
            </div>
          </div>

          <div class="border-t border-dashed border-emerald-900/10 pt-3">
            <div class="border-l-2 border-emerald-800/30 pl-3">
              <span class="font-bold text-emerald-900 text-[9px] block">Note #2 & #3 (AE / Dy.EE Recommendation)</span>
              <p class="mt-1">Recommended. EMRI GHS currently manages the civic helpline and has the necessary outbound calling setup. Entrusting work to existing call center agency is technically feasible and cost-effective.</p>
              <div class="text-right mt-2 text-emerald-800/60 font-bold text-[8px] uppercase font-mono">
                G.N. SAI RAM (AE-3) / NARSING RAO KORMI (DY.EE) — 21/04/2026
              </div>
            </div>
          </div>

          <div class="border-t border-dashed border-emerald-900/10 pt-3">
            <div class="border-l-2 border-emerald-800/30 pl-3">
              <span class="font-bold text-emerald-900 text-[9px] block">Note #6 (Administrative Sanction)</span>
              <p class="mt-1 font-bold text-emerald-950 font-mono">"ok"</p>
              <div class="text-right mt-2 text-emerald-800/60 font-bold text-[8px] uppercase font-mono">
                R V KARNAN IAS (COMMISSIONER) — 21/04/2026
              </div>
            </div>
          </div>
        </div>
      </div>
    `:e=`
      <div class="flex-1 bg-slate-100 flex flex-col items-center justify-center p-8 border-r border-slate-200">
        <svg class="w-12 h-12 text-slate-400 mb-3" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        </svg>
        <span class="text-xs font-bold text-slate-800 text-center">${s.name}</span>
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Mock PDF View Interface</span>
        <button class="mt-6 bg-slate-900 hover:bg-slate-800 text-white text-xs px-3 py-1.5 rounded font-semibold transition-all cursor-pointer" onclick="alert('Viewing full document via PDF.js viewer is disabled in prototype.')">
          Open in Native PDF Viewer
        </button>
      </div>
    `,t.innerHTML=`
    <div class="bg-white border border-slate-200 rounded-md shadow-xl max-w-4xl w-full overflow-hidden flex flex-col h-[600px]">
      <!-- Header -->
      <div class="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
        <div>
          <h4 class="text-xs font-extrabold text-slate-900 uppercase tracking-wider font-mono">${s.id} - ${s.name}</h4>
          <p class="text-[10px] text-slate-450 font-semibold mt-1 uppercase tracking-wider">${s.category}</p>
        </div>
        <button id="close-doc-modal-btn" class="text-slate-450 hover:text-slate-750 text-base font-bold cursor-pointer">✕</button>
      </div>

      <!-- Body split -->
      <div class="flex-1 flex overflow-hidden">
        <!-- PDF Preview Panel -->
        ${e}

        <!-- Details & Version History -->
        <div class="w-80 p-5 overflow-y-auto space-y-6 text-xs border-l border-slate-100 bg-slate-50/20">
          <!-- Attributes -->
          <div class="space-y-3">
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Document Specs</div>
            <div class="space-y-2 font-semibold text-slate-655">
              <div class="flex justify-between"><span>Ver:</span> <span class="text-slate-900 font-bold">${s.version}</span></div>
              <div class="flex justify-between"><span>Size:</span> <span class="text-slate-900 font-bold">${s.size}</span></div>
              <div class="flex justify-between"><span>Status:</span> <span class="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">${s.status}</span></div>
              <div class="flex justify-between"><span>Uploaded:</span> <span class="text-slate-900 font-mono text-[10px]">${s.uploadedDate}</span></div>
              <div class="flex justify-between"><span>By:</span> <span class="text-slate-900 font-bold">${s.uploadedBy}</span></div>
            </div>
          </div>

          <!-- Version history list -->
          <div class="space-y-3">
            <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Version History</div>
            <div class="space-y-3">
              <div class="border-l-2 border-slate-950 pl-3 py-0.5">
                <div class="font-bold text-slate-900">v1.0 (Signed PDF)</div>
                <div class="text-[9px] text-slate-450 font-medium">Uploaded by ${s.uploadedBy} on ${s.uploadedDate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,t.classList.remove("hidden"),(i=document.getElementById("close-doc-modal-btn"))==null||i.addEventListener("click",()=>{t.classList.add("hidden")})}let Ce="note";function xo(s,t){const e=xa[t.id]||[],i=w.eOfficeFiles.filter(p=>p.projectId===t.id),n=Mi[t.id]||[],d={note:{label:"Cycle 1 – Note File",pipeline:["Senior Assistant (Note Writer)","AE-3 (IT)","Dy. EE (IT)","JC (IT)","Additional Commissioner (IT)","Commissioner"],returnPipeline:["Additional Commissioner (IT)","JC (IT)","Dy. EE (IT)","AE-3 (IT)","Senior Assistant (Note Writer)"]},workorder:{label:"Cycle 2 – Work Order Approval",pipeline:["Senior Assistant (Note Writer)","AE-3 (IT)","Dy. EE (IT)","JC (IT)","Additional Commissioner (IT)"],returnPipeline:["JC (IT)","Dy. EE (IT)","AE-3 (IT)","Senior Assistant (Note Writer)"]},fileforward:{label:"Cycle 3 – File Forward",pipeline:["Senior Assistant (Note Writer)","AE-3 (IT)","Dy. EE (IT)","JC (IT)","CFA","Superintendent (FA)","Junior Assistant (FA)","Superintendent (FA)","Financial Adviser"],returnPipeline:["JC (IT)","Dy. EE (IT)","AE-3 (IT)","Senior Assistant (Note Writer)"]}}[Ce],c=i.find(p=>p.status!=="Approved / Closed"&&p.status!=="Rejected"),u=(c==null?void 0:c.currentCustodian)||"",h=(c==null?void 0:c.status)==="Returned";function f(p,g){var k,v;return c?((k=c.approvalHistory)==null?void 0:k.some(y=>y.role===p&&(y.action.includes("Approved")||y.action.includes("Forwarded"))))&&u!==p?"completed":u===p?h?"returned":"active":((v=c.approvalHistory)==null?void 0:v.some(y=>y.role===p&&y.action.includes("Returned")))?"returned":"pending":g===0?"active":"pending"}const m=e.find(p=>p.status==="In Progress")||e[e.length-1];s.innerHTML=`
    <!-- Top current status banner -->
    <div class="bg-white border border-slate-200 rounded-md p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Active Project Stage</span>
          <h3 class="text-sm font-bold text-slate-900">${m?m.stage:u||"Initiation"}</h3>
        </div>
        <div class="border-l border-slate-100 pl-6">
          <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Custodian Officer</span>
          <span class="text-xs font-bold text-slate-800">${m?m.officer:u||"Unassigned"}</span>
          <span class="text-[10px] text-slate-400 block">${m?m.department:(c==null?void 0:c.department)||""}</span>
        </div>
        <div class="border-l border-slate-100 pl-6">
          <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Pending Action With</span>
          <span class="bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold text-[9px] uppercase tracking-wider border border-amber-100 mt-1 inline-block">${u||(m&&m.pendingWith!=="None"?m.pendingWith:"No pending action")}</span>
        </div>
      </div>
    </div>

    <!-- Workflow Cycle Selector Tabs -->
    <div class="flex border-b border-slate-200 bg-white rounded-t-md mb-0 gap-1 select-none px-2 pt-2">
      <button onclick="changeTrackingCycle('note')" class="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${Ce==="note"?"border-[#2563EB] text-[#2563EB]":"border-transparent text-slate-500 hover:text-slate-700"}">
        Cycle 1 – Note File
      </button>
      <button onclick="changeTrackingCycle('workorder')" class="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${Ce==="workorder"?"border-[#2563EB] text-[#2563EB]":"border-transparent text-slate-500 hover:text-slate-700"}">
        Cycle 2 – Work Order
      </button>
      <button onclick="changeTrackingCycle('fileforward')" class="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${Ce==="fileforward"?"border-[#2563EB] text-[#2563EB]":"border-transparent text-slate-500 hover:text-slate-700"}">
        Cycle 3 – File Forward
      </button>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <!-- Left side: workflow timeline -->
      <div class="xl:col-span-2 space-y-6">
        
        <!-- Forward Flow -->
        <div class="bg-white border border-slate-200 rounded-md p-6">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">${d.label} – Forward Flow</h4>
          <p class="text-[9px] text-slate-450 uppercase font-mono mb-6">Approval pipeline stages for this workflow cycle</p>
          <div class="relative pl-6 space-y-5">
            <!-- Line Connector -->
            <div class="absolute left-[34px] top-4 bottom-4 w-0.5 bg-slate-150"></div>

            ${d.pipeline.map((p,g)=>{const b=f(p,g);let x="border-slate-200 bg-white text-slate-350",k="border-slate-250 bg-white",v="Pending",y="bg-slate-100 text-slate-450";return b==="completed"?(x="border-emerald-500 bg-emerald-500 text-white",k="border-emerald-250 bg-emerald-50/10",v="Cleared",y="bg-emerald-50 text-emerald-700"):b==="active"?(x="border-[#2563EB] bg-[#2563EB] text-white ring-4 ring-[#EEF4FF]",k="border-[#2563EB] bg-[#EEF4FF]/10 ring-2 ring-[#EEF4FF]/20",v="Active",y="bg-[#2563EB]/10 text-[#2563EB]"):b==="returned"&&(x="border-amber-500 bg-amber-500 text-white",k="border-amber-250 bg-amber-50/10",v="Returned",y="bg-amber-50 text-amber-700"),`
                <div class="flex gap-6 items-start relative z-10 animate-toast-slide-in">
                  <div class="w-7 h-7 rounded-full border flex items-center justify-center text-[10px] font-bold shrink-0 ${x}">
                    ${b==="completed"?"✓":g+1}
                  </div>
                  <div class="flex-1 border p-4 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-3 transition-all ${k}">
                    <div class="space-y-1">
                      <div class="flex items-center gap-3">
                        <h4 class="text-xs font-bold text-slate-800 leading-none">${p}</h4>
                        <span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${y}">${v}</span>
                      </div>
                      <p class="text-[10px] text-slate-450 font-semibold">${b==="active"?"Currently awaiting action at this desk":b==="completed"?"Approved and forwarded to next desk":b==="returned"?"Returned for correction":"Pending activation"}</p>
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- Return Flow -->
        <div class="bg-white border border-slate-200 rounded-md p-6">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">${d.label} – Return Flow</h4>
          <p class="text-[9px] text-slate-450 uppercase font-mono mb-6">Return path when corrections are required</p>
          <div class="relative pl-6 space-y-4">
            <div class="absolute left-[34px] top-4 bottom-4 w-0.5 bg-rose-100"></div>
            ${d.returnPipeline.map((p,g)=>{var v;const b=(v=c==null?void 0:c.approvalHistory)==null?void 0:v.some(y=>y.role===p&&y.action.includes("Returned")),x=b?"border-rose-400 bg-rose-400 text-white":"border-slate-200 bg-white text-slate-350",k=b?"border-rose-200 bg-rose-50/20":"border-slate-200 bg-white";return`
                <div class="flex gap-6 items-start relative z-10">
                  <div class="w-6 h-6 rounded-full border flex items-center justify-center text-[9px] font-bold shrink-0 ${x}">
                    ${b?"↩":g+1}
                  </div>
                  <div class="flex-1 border p-3 rounded-md ${k}">
                    <div class="flex items-center gap-3">
                      <h4 class="text-[11px] font-bold text-slate-700 leading-none">${p}</h4>
                      <span class="px-1.5 py-0.5 rounded text-[7px] font-bold uppercase tracking-wider ${b?"bg-rose-50 text-rose-600":"bg-slate-100 text-slate-400"}">${b?"Returned":"Standby"}</span>
                    </div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- File Movement History -->
        <div class="bg-white border border-slate-200 rounded-md p-6">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">eOffice File Movement History</h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="border-b border-slate-100 text-slate-400 uppercase tracking-wider font-bold text-[9px]">
                  <th class="py-2.5 px-1">File Ref</th>
                  <th class="py-2.5 px-1">Subject</th>
                  <th class="py-2.5 px-1">Current Custodian</th>
                  <th class="py-2.5 px-1">Status</th>
                  <th class="py-2.5 px-1">Last Update</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-700">
                ${i.map(p=>`
                  <tr>
                    <td class="py-3 px-1 font-mono font-bold text-[#2563EB]">${p.id}</td>
                    <td class="py-3 px-1 font-medium truncate max-w-xs text-slate-900" title="${p.subject}">${p.subject}</td>
                    <td class="py-3 px-1 font-semibold text-slate-700">${p.currentCustodian}</td>
                    <td class="py-3 px-1">
                      <span class="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${p.status==="Approved / Closed"?"bg-emerald-50 text-emerald-700":p.status==="Rejected"?"bg-rose-50 text-rose-700":(p.status==="Returned","bg-amber-50 text-amber-700")}">${p.status}</span>
                    </td>
                    <td class="py-3 px-1 font-mono text-[10px] text-slate-500">${p.lastUpdated}</td>
                  </tr>
                `).join("")}
                ${i.length===0?'<tr><td colspan="5" class="py-6 text-center text-slate-450 italic">No active files found.</td></tr>':""}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Right side: activity log -->
      <div class="space-y-6">
        <div class="bg-white border border-slate-200 rounded-md p-6">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Project Activity Log</h4>
          <div class="relative pl-6 space-y-6">
            <!-- Line -->
            <div class="absolute left-2.5 top-2.5 bottom-2.5 w-0.5 bg-slate-150"></div>

            ${n.map(p=>`
              <div class="flex gap-4 items-start relative z-10 animate-toast-slide-in">
                <!-- Bullet -->
                <div class="w-5.5 h-5.5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                </div>
                
                <div class="space-y-1">
                  <div class="text-[9px] font-bold text-slate-450 uppercase tracking-wider">${p.date} ${p.time}</div>
                  <p class="text-xs text-slate-800 font-semibold">${p.activity}</p>
                  <div class="text-[10px] text-slate-450 font-bold uppercase tracking-wider">Actor: ${p.actor}</div>
                </div>
              </div>
            `).join("")}

            ${n.length===0?'<div class="text-center text-xs text-slate-400 py-4 italic">No activities logged.</div>':""}
          </div>
        </div>
      </div>
    </div>
  `,window.changeTrackingCycle=p=>{Ce=p,ya()}}function Hu(s,t){const e=w.eOfficeFiles.filter(i=>i.projectId===t.id);s.innerHTML=`
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Notes sheet logs (Span 2) -->
      <div class="bg-white border border-slate-200 rounded-md p-6 lg:col-span-2 space-y-4">
        <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Official Note Sheets Ledger</h3>
        
        ${e.length===0?'<div class="text-center text-xs text-slate-400 p-8 border border-dashed rounded">No note sheets mapped to this project</div>':""}
        
        ${e.map(i=>`
          <div class="space-y-3">
            <div class="text-[10px] font-bold text-slate-450 uppercase tracking-widest font-mono">Note Sheet for File Reference: ${i.id}</div>
            <div class="green-note-sheet rounded-md p-6 border text-[11px] text-emerald-950 space-y-4">
              ${i.notes.map((n,o)=>`
                <div class="pl-8 relative">
                  <span class="absolute left-0 top-0 text-[10px] font-bold text-emerald-900/30">#${o+1}</span>
                  <p class="font-mono text-emerald-900 leading-relaxed">${n.text}</p>
                  <div class="text-right mt-2 text-[9px] font-bold uppercase tracking-wider text-emerald-800/60 font-mono">
                    Signed: ${n.writer} | ${n.date}
                  </div>
                </div>
                <div class="border-b border-dashed border-emerald-900/10 my-3 last:hidden"></div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Correspondence letters pane -->
      <div class="bg-white border border-slate-200 rounded-md p-6">
        <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Inward Correspondence (Letters)</h3>
        
        <div class="space-y-4">
          <div class="p-3 border border-slate-100 hover:border-slate-250 bg-slate-50/20 rounded-md text-xs space-y-2">
            <div class="flex justify-between items-center text-[9px] font-bold text-indigo-750 uppercase tracking-wider">
              <span>Ltr Ref: GHMC-ENG-2026-921</span>
              <span>2026-06-25</span>
            </div>
            <h4 class="font-bold text-slate-800 leading-tight">Demand Letter for land survey clearances</h4>
            <p class="text-slate-500 text-[10px] leading-relaxed">Request for immediate mapping survey at Kondapur junction land acquisition sectors.</p>
            <div class="text-right"><span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Inward clearance: Sri V. Kumar</span></div>
          </div>

          <div class="p-3 border border-slate-100 hover:border-slate-250 bg-slate-50/20 rounded-md text-xs space-y-2">
            <div class="flex justify-between items-center text-[9px] font-bold text-indigo-750 uppercase tracking-wider">
              <span>Ltr Ref: TRANSCO-CIV-441</span>
              <span>2026-06-12</span>
            </div>
            <h4 class="font-bold text-slate-800 leading-tight">NOC Clearance Letter for electric grid relocation</h4>
            <p class="text-slate-500 text-[10px] leading-relaxed">No Objection Certificate issued by TSNPDCL for shifting electric lighting cables near Flyover site.</p>
            <div class="text-right"><span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Inward clearance: Er. R. Sharma</span></div>
          </div>
        </div>
      </div>
    </div>
  `}function zu(s,t){const e=_t[t.id]||[],i=w.eOfficeFiles.filter(d=>d.projectId===t.id),n=w.workOrders.filter(d=>d.projectId===t.id),o=w.bills.filter(d=>d.projectId===t.id),a=[];i.forEach(d=>a.push({cat:"Note Files (eOffice)",name:d.subject,type:"eOffice Note",date:d.lastUpdated,status:d.status,ref:d.id})),n.forEach(d=>a.push({cat:"Work Orders",name:d.title,type:"Work Order",date:d.stageHistory.Requirement||"N/A",status:d.currentStage,ref:d.id})),o.forEach(d=>a.push({cat:"Invoices & Bill Claims",name:`Invoice from ${d.vendor} (Rs. ${(d.amount/1e5).toFixed(1)} Lakhs)`,type:"Invoice",date:d.date,status:d.status,ref:d.id})),e.forEach(d=>a.push({cat:d.category,name:d.name,type:d.type.toUpperCase(),date:d.uploadedDate,status:d.status,ref:d.id}));const r=[...new Set(a.map(d=>d.cat))];let l="";r.forEach(d=>{const c=a.filter(u=>u.cat===d);l+=`
      <div class="space-y-3">
        <h4 class="text-[10px] font-bold text-slate-450 uppercase tracking-widest border-b border-slate-50 pb-2">${d} (${c.length})</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left border-collapse">
            <thead>
              <tr class="border-b border-slate-100 text-slate-400 uppercase tracking-wider font-bold text-[9px]">
                <th class="py-2 px-2">Reference</th>
                <th class="py-2 px-2">Document Name</th>
                <th class="py-2 px-2">Type</th>
                <th class="py-2 px-2">Date</th>
                <th class="py-2 px-2">Status</th>
                <th class="py-2 px-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              ${c.map(u=>{const h=u.status==="Approved"||u.status==="Approved / Closed"||u.status==="Paid"?"bg-emerald-50 text-emerald-700":u.status==="Rejected"?"bg-rose-50 text-rose-700":"bg-amber-50 text-amber-700";return`
                  <tr class="hover:bg-slate-50/50">
                    <td class="py-2.5 px-2 font-mono font-bold text-[#2563EB] text-[10px]">${u.ref}</td>
                    <td class="py-2.5 px-2 font-semibold text-slate-800 truncate max-w-xs" title="${u.name}">${u.name}</td>
                    <td class="py-2.5 px-2"><span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">${u.type}</span></td>
                    <td class="py-2.5 px-2 font-mono text-[10px] text-slate-500">${u.date}</td>
                    <td class="py-2.5 px-2"><span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${h}">${u.status}</span></td>
                    <td class="py-2.5 px-2 text-right">
                      <button onclick="showToast('Opening document: ${u.ref}')" class="text-[#2563EB] hover:text-[#1D4ED8] text-[10px] font-bold uppercase tracking-wider cursor-pointer">View</button>
                      <span class="mx-1 text-slate-300">|</span>
                      <button onclick="showToast('Downloading: ${u.ref}')" class="text-slate-500 hover:text-slate-700 text-[10px] font-bold uppercase tracking-wider cursor-pointer">Download</button>
                    </td>
                  </tr>
                `}).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}),s.innerHTML=`
    <div class="bg-white border border-slate-200 rounded-md p-6 space-y-8">
      <div class="flex justify-between items-center border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Related Documents & Files</h3>
          <p class="text-[10px] text-slate-500 mt-1 font-semibold">All documents, note files, work orders, and attachments for ${t.name}</p>
        </div>
        <span class="px-2.5 py-1 bg-slate-100 text-slate-700 text-[9px] font-bold uppercase tracking-wider rounded">${a.length} Documents</span>
      </div>
      ${a.length===0?'<div class="text-center text-xs text-slate-400 py-8 italic">No documents found for this project.</div>':""}
      ${l}
    </div>
  `}let He=[],vo="";function Pi(s,t){vo!==t.id&&(vo=t.id,He=[]);const e=He.map(o=>o.role==="user"?`<div class="flex justify-end"><div class="bg-[#2563EB] text-white px-4 py-2.5 rounded-lg rounded-br-sm max-w-[75%] text-xs font-semibold leading-relaxed">${o.text}</div></div>`:`<div class="flex justify-start"><div class="bg-slate-100 text-slate-800 px-4 py-2.5 rounded-lg rounded-bl-sm max-w-[75%] text-xs font-semibold leading-relaxed whitespace-pre-wrap">${o.text}</div></div>`).join(""),n=`
    <div class="text-center py-12 space-y-4">
      <div class="w-14 h-14 bg-[#EEF4FF] rounded-full flex items-center justify-center mx-auto">
        <svg class="w-7 h-7 text-[#2563EB]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      </div>
      <div>
        <h4 class="text-sm font-bold text-slate-800">Project Intelligence Assistant</h4>
        <p class="text-[10px] text-slate-500 mt-1 font-semibold max-w-md mx-auto">I can answer questions about this project's workflow status, notes, documents, approvals, and more.</p>
      </div>
      <div class="flex flex-wrap justify-center gap-2 mt-4">${["What is the current approval stage?","Show the latest note.","Summarize this project.","List all pending approvals.","Show related documents.","Who is handling this project?"].map(o=>`<button onclick="askAiQuestion('${o}')" class="px-3 py-1.5 bg-[#EEF4FF] hover:bg-[#DBEAFE] text-[#2563EB] text-[10px] font-bold rounded-full cursor-pointer transition-all border border-[#DBEAFE]">${o}</button>`).join("")}</div>
    </div>
  `;s.innerHTML=`
    <div class="bg-white border border-slate-200 rounded-md overflow-hidden flex flex-col" style="height: 75vh;">
      <div class="border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">AI Project Assistant</h3>
          <p class="text-[10px] text-slate-500 mt-0.5 font-semibold">Ask questions about ${t.name} — notes, documents, workflow, and status</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span class="text-[9px] font-bold text-emerald-600 uppercase tracking-wider">Online</span>
        </div>
      </div>
      <div id="ai-messages-container" class="flex-1 overflow-y-auto p-6 space-y-4">
        ${He.length===0?n:e}
      </div>
      <div class="border-t border-slate-200 p-4 flex gap-3">
        <input type="text" id="ai-query-input" class="flex-1 bg-slate-50 border border-slate-200 rounded-md px-4 py-2.5 text-xs outline-none focus:border-[#2563EB] transition-colors font-semibold" placeholder="Ask about this project..." onkeydown="if(event.key==='Enter') submitAiQuery()">
        <button onclick="submitAiQuery()" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider cursor-pointer transition-all">Send</button>
      </div>
    </div>
  `,setTimeout(()=>{const o=document.getElementById("ai-messages-container");o&&(o.scrollTop=o.scrollHeight)},50),window.askAiQuestion=o=>{const a=document.getElementById("ai-query-input");a&&(a.value=o),yo(o,t)},window.submitAiQuery=()=>{const o=document.getElementById("ai-query-input"),a=o==null?void 0:o.value.trim();a&&(o.value="",yo(a,t))}}function yo(s,t){He.push({role:"user",text:s});const e=Wu(s,t),i=document.getElementById("project-workspace-view");i&&(Pi(i,t),setTimeout(()=>{He.push({role:"assistant",text:e}),Pi(i,t)},800))}function Wu(s,t){const e=s.toLowerCase(),i=w.eOfficeFiles.filter(l=>l.projectId===t.id),n=w.workOrders.filter(l=>l.projectId===t.id),o=_t[t.id]||[],a=w.bills.filter(l=>l.projectId===t.id),r=i.find(l=>l.status!=="Approved / Closed"&&l.status!=="Rejected");if(e.includes("approval stage")||e.includes("current stage")||e.includes("workflow status")){if(r)return`📋 Current Approval Stage for ${t.name}:

• File Reference: ${r.id}
• Current Custodian: ${r.currentCustodian}
• File Status: ${r.status}
• Last Updated: ${r.lastUpdated}

The file is currently awaiting action at the ${r.currentCustodian}'s desk.`;const l=i.find(d=>d.status==="Approved / Closed");return l?`✅ The project "${t.name}" has been fully approved.

• File Ref: ${l.id}
• Final Status: Approved / Closed
• All workflow stages have been completed.`:`ℹ️ No active eOffice files found for project "${t.name}". The project may be in the initiation phase.`}if(e.includes("latest note")||e.includes("show note")||e.includes("note sheet")){if(i.length>0){const l=i[0],d=l.notes[l.notes.length-1];if(d)return`📝 Latest Note for ${t.name}:

• File: ${l.id}
• Author: ${d.writer}
• Date: ${d.date}
• Content: "${d.text}"`}return`ℹ️ No note sheets found for project "${t.name}".`}if(e.includes("summarize")||e.includes("summary")||e.includes("overview"))return`📊 Project Summary: ${t.name}

• Project ID: ${t.id}
• Department: ${t.department}
• Zone: ${t.zone}
• Type: ${t.projectType}
• Status: ${t.status}
• Progress: ${t.progress}%
• Budget: Rs. ${(t.budget/1e7).toFixed(2)} Cr
• Spent: Rs. ${(t.spent/1e7).toFixed(2)} Cr
• Start Date: ${t.startDate}
• End Date: ${t.endDate}
• Officer in Charge: ${t.officerInCharge}

${t.description}`;if(e.includes("pending approval")||e.includes("pending")){const l=i.filter(d=>d.status!=="Approved / Closed"&&d.status!=="Rejected");if(l.length>0){const d=l.map(c=>`• ${c.id}: "${c.subject}" — Pending with ${c.currentCustodian}`).join(`
`);return`⏳ Pending Approvals for ${t.name}:

${d}`}return`✅ No pending approvals for project "${t.name}". All files are either approved or not yet initiated.`}if(e.includes("document")||e.includes("related doc")||e.includes("attachment")||e.includes("file")){const l=[];return o.forEach(d=>l.push(`• [${d.category}] ${d.name} (v${d.version}, ${d.size})`)),i.forEach(d=>l.push(`• [eOffice Note] ${d.subject} (${d.id})`)),n.forEach(d=>l.push(`• [Work Order] ${d.title} (${d.id})`)),a.forEach(d=>l.push(`• [Invoice] ${d.vendor} - Rs. ${(d.amount/1e5).toFixed(1)}L (${d.id})`)),l.length>0?`📁 Related Documents for ${t.name}:

${l.join(`
`)}

Total: ${l.length} documents found.`:`ℹ️ No documents found for project "${t.name}".`}if(e.includes("who")||e.includes("handling")||e.includes("officer")||e.includes("assigned")){let l=`👤 Project Personnel for ${t.name}:

• Officer in Charge: ${t.officerInCharge}
• Department: ${t.department}
• Zone: ${t.zone}`;r&&(l+=`
• Current File Custodian: ${r.currentCustodian}`);const d=Hs[t.id]||[];return d.length>0&&(l+=`

Team Members:
`+d.map(c=>`• ${c.name} (${c.role}) - ${c.department}`).join(`
`)),l}if(e.includes("budget")||e.includes("financial")||e.includes("cost")||e.includes("spent")){const l=t.budget>0?(t.spent/t.budget*100).toFixed(1):"0";return`💰 Financial Summary for ${t.name}:

• Total Budget: Rs. ${(t.budget/1e7).toFixed(2)} Cr
• Amount Spent: Rs. ${(t.spent/1e7).toFixed(2)} Cr
• Remaining: Rs. ${((t.budget-t.spent)/1e7).toFixed(2)} Cr
• Utilization: ${l}%`}return`I can help you with information about the project "${t.name}". Try asking about:

• Current approval stage
• Latest notes
• Project summary
• Pending approvals
• Related documents
• Who is handling this project
• Budget and financial status`}let he="";function Is(s,t){const e=w.currentUser;if(!e)return;const i=w.eOfficeFiles.filter(g=>g.projectId===t.id),n=i.length,o=i.filter(g=>g.status==="Approved / Closed").length,a=i.filter(g=>g.status==="Rejected").length,r=i.filter(g=>g.status==="Returned").length,l=i.filter(g=>g.status!=="Approved / Closed"&&g.status!=="Rejected"&&g.status!=="Returned").length,d=i.filter(g=>g.currentCustodian===e.role&&g.status!=="Approved / Closed"&&g.status!=="Rejected"),c=e.role==="Finance Officer"?w.bills.filter(g=>g.projectId===t.id&&g.status!=="Paid"):[];!he&&i.length>0&&(he=i[0].id);const u=i.find(g=>g.id===he);s.innerHTML=`
    <!-- Top Statistics Grid -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      <div class="bg-white border border-slate-200 rounded-md p-4 flex flex-col justify-between shadow-xs">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Total Files</span>
        <span class="text-lg font-extrabold text-slate-900 mt-2 font-mono">${n}</span>
      </div>
      <div class="bg-white border border-slate-200 rounded-md p-4 flex flex-col justify-between shadow-xs">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Approved / Signed</span>
        <span class="text-lg font-extrabold text-emerald-600 mt-2 font-mono">${o}</span>
      </div>
      <div class="bg-white border border-slate-200 rounded-md p-4 flex flex-col justify-between shadow-xs">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Rejected</span>
        <span class="text-lg font-extrabold text-rose-600 mt-2 font-mono">${a}</span>
      </div>
      <div class="bg-white border border-slate-200 rounded-md p-4 flex flex-col justify-between shadow-xs">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Pending Sanction</span>
        <span class="text-lg font-extrabold text-amber-600 mt-2 font-mono">${l}</span>
      </div>
      <div class="bg-white border border-slate-200 rounded-md p-4 flex flex-col justify-between shadow-xs">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Returned for Correction</span>
        <span class="text-lg font-extrabold text-[#2563EB] mt-2 font-mono">${r}</span>
      </div>
    </div>

    <!-- Active Custodian Note -->
    <div class="bg-white border border-slate-200 rounded-md p-4 mb-6 flex justify-between items-center">
      <div>
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Logged In Role Permission</span>
        <p class="text-xs text-slate-800 font-bold mt-0.5">${e.name} (<span class="text-[#2563EB]">${e.roleText}</span>)</p>
      </div>
      <span class="px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] border border-blue-100 text-[9px] font-bold uppercase tracking-wider">
        Operational Node Access
      </span>
    </div>

    <!-- Grid split layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Actionable approvals + Files list (Col 2) -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Actionable items -->
        <div class="space-y-3">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Pending My Approvals (${d.length+c.length})</h4>
          
          ${d.length===0&&c.length===0?`
            <div class="p-8 text-center text-xs text-slate-450 bg-slate-50/50 border border-dashed border-slate-200 rounded-md font-semibold">
              No files currently pending for ${e.roleText} signature.
            </div>
          `:`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${d.map(g=>{var x;const b=g.priority==="High"?"bg-rose-50 text-rose-700 border-rose-100":"bg-slate-100 text-slate-650 border-slate-200";return`
                  <div class="bg-white border border-slate-200 rounded-md p-4 flex flex-col justify-between hover:border-slate-350 transition-all cursor-pointer ${he===g.id?"ring-2 ring-[#2563EB]":""}" onclick="selectApprovalFile('${g.id}')">
                    <div class="space-y-2">
                      <div class="flex justify-between items-center">
                        <span class="text-[9px] font-mono font-bold text-slate-400">File No: ${g.id}</span>
                        <span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase border ${b}">${g.priority}</span>
                      </div>
                      <h5 class="text-xs font-bold text-slate-900 truncate" title="${g.subject}">${g.subject}</h5>
                      <p class="text-[10px] text-slate-500 line-clamp-2 italic">"${((x=g.notes[g.notes.length-1])==null?void 0:x.text)||"No remarks."}"</p>
                    </div>
                    <div class="flex items-center gap-1.5 mt-4 pt-3 border-t border-slate-100">
                      <button onclick="event.stopPropagation(); viewApprovalFile('${g.id}')" class="bg-white hover:bg-slate-50 text-slate-700 text-[9px] font-bold uppercase px-2 py-1 rounded border border-slate-200 cursor-pointer">Note Sheet</button>
                      <button onclick="event.stopPropagation(); actionApprovalFile('${g.id}', 'Approve')" class="bg-emerald-600 hover:bg-emerald-700 text-white text-[9px] font-bold uppercase px-2 py-1 rounded cursor-pointer">Approve</button>
                      <button onclick="event.stopPropagation(); actionApprovalFile('${g.id}', 'Reject')" class="bg-rose-600 hover:bg-rose-700 text-white text-[9px] font-bold uppercase px-2 py-1 rounded cursor-pointer">Reject</button>
                      <button onclick="event.stopPropagation(); actionApprovalFile('${g.id}', 'Return')" class="bg-amber-600 hover:bg-amber-700 text-white text-[9px] font-bold uppercase px-2 py-1 rounded cursor-pointer">Return</button>
                    </div>
                  </div>
                `}).join("")}

              ${c.map(g=>{const b=g.status==="Pending Budget Allocation"?`<select onchange="allocateBudgetApproval('${g.id}', this.value)" class="text-[9px] font-bold border border-slate-200 bg-white p-1 rounded outline-none cursor-pointer">
                       <option value="">Map Head...</option>
                       ${w.headOfAccounts.map(x=>`<option value="${x.code}">${x.code}</option>`).join("")}
                     </select>`:`<button onclick="clearBillPaymentApproval('${g.id}')" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[9px] font-bold px-2.5 py-1 rounded transition-colors cursor-pointer uppercase tracking-wider">Pay / Clear</button>`;return`
                  <div class="bg-white border border-slate-200 rounded-md p-4 flex flex-col justify-between hover:border-slate-350 transition-all">
                    <div class="space-y-2">
                      <div class="flex justify-between items-center">
                        <span class="text-[9px] font-mono font-bold text-slate-400">Bill ID: ${g.id}</span>
                        <span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-slate-100 text-slate-650 border border-slate-200">${g.status}</span>
                      </div>
                      <h5 class="text-xs font-bold text-slate-900">Claim for Work Order: ${g.woId}</h5>
                      <div class="text-[10px] text-slate-500 font-semibold space-y-0.5">
                        <div class="flex justify-between"><span>Vendor:</span> <span class="text-slate-800">${g.vendor}</span></div>
                        <div class="flex justify-between"><span>Claim Value:</span> <span class="text-slate-950 font-bold">Rs. ${(g.amount/1e5).toFixed(1)} L</span></div>
                        <div class="flex justify-between"><span>Head Code:</span> <span class="font-mono">${g.headOfAccount||'<span class="text-rose-500">Unmapped</span>'}</span></div>
                      </div>
                    </div>
                    <div class="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                      <span class="text-[9px] font-bold text-slate-400 uppercase">Settlement</span>
                      ${b}
                    </div>
                  </div>
                `}).join("")}
            </div>
          `}
        </div>

        <!-- All Project Files Directory -->
        <div class="bg-white border border-slate-200 rounded-md p-5 space-y-4">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">All Project Approval Files (${i.length})</h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="bg-slate-50 border-b border-slate-100 text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                  <th class="py-2.5 px-3">File ID</th>
                  <th class="py-2.5 px-3">Subject / Document Type</th>
                  <th class="py-2.5 px-3">Current Custodian</th>
                  <th class="py-2.5 px-3">Status</th>
                  <th class="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 font-semibold text-slate-700">
                ${i.map(g=>{let b="bg-slate-150 text-slate-700";return g.status==="Approved / Closed"?b="bg-emerald-50 text-emerald-700":g.status==="Rejected"?b="bg-rose-50 text-rose-700":g.status==="Returned"?b="bg-amber-50 text-amber-700":g.status==="Approved & Forwarded"&&(b="bg-blue-50 text-blue-700"),`
                    <tr class="hover:bg-slate-50/50 cursor-pointer ${he===g.id?"bg-[#EEF4FF]/30":""}" onclick="selectApprovalFile('${g.id}')">
                      <td class="py-3 px-3 font-mono font-bold text-slate-900">${g.id}</td>
                      <td class="py-3 px-3 truncate max-w-xs font-medium text-slate-800" title="${g.subject}">${g.subject}</td>
                      <td class="py-3 px-3 text-slate-655">${g.currentCustodian}</td>
                      <td class="py-3 px-3">
                        <span class="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${b}">${g.status}</span>
                      </td>
                      <td class="py-3 px-3 text-right">
                        <button onclick="event.stopPropagation(); viewApprovalFile('${g.id}')" class="text-[#2563EB] hover:text-[#1D4ED8] text-[10px] font-bold cursor-pointer">View Details</button>
                      </td>
                    </tr>
                  `}).join("")}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Selected File Approval History (Col 1) -->
      <div class="space-y-6">
        <div class="bg-white border border-slate-200 rounded-md p-5 space-y-4">
          <div class="border-b border-slate-100 pb-3">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Approval History</h4>
            <p class="text-[9px] text-slate-400 mt-1 uppercase font-mono">${u?u.id:"No file selected"}</p>
          </div>

          ${u?`
            <div class="space-y-4">
              <!-- Header Details -->
              <div class="bg-slate-50 p-3 rounded text-[10px] font-semibold text-slate-600 space-y-1 border border-slate-100">
                <div class="flex justify-between"><span>Initiated By:</span> <span class="text-slate-900 font-bold">Sri V. Kumar</span></div>
                <div class="flex justify-between"><span>Current Custodian:</span> <span class="text-slate-900 font-bold">${u.currentCustodian}</span></div>
                <div class="flex justify-between"><span>Priority Status:</span> <span class="text-slate-900 font-bold">${u.priority}</span></div>
                <div class="flex justify-between"><span>Category Type:</span> <span class="text-slate-900 font-bold">eOffice Note Sheet</span></div>
              </div>

              <!-- Timeline stepper -->
              <div class="relative pl-5 space-y-4 pt-2">
                <!-- Vertical Line -->
                <div class="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-150"></div>

                ${u.notes.map((g,b)=>`
                  <div class="relative pl-3 text-xs space-y-1">
                    <span class="absolute -left-[15px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-50"></span>
                    <div class="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">${g.date}</div>
                    <div class="font-bold text-slate-800">${g.writer}</div>
                    <p class="text-slate-500 font-medium italic">"${g.text}"</p>
                  </div>
                `).join("")}
                
                ${u.status!=="Approved / Closed"&&u.status!=="Rejected"?`
                  <div class="relative pl-3 text-xs space-y-1">
                    <span class="absolute -left-[15px] top-1.5 w-2 h-2 rounded-full bg-amber-500 animate-pulse ring-4 ring-amber-50"></span>
                    <div class="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-mono">Pending</div>
                    <div class="font-bold text-slate-800">Awaiting Signature</div>
                    <p class="text-slate-500 font-medium italic">Pending with ${u.currentCustodian}</p>
                  </div>
                `:""}
              </div>
            </div>
          `:`
            <div class="text-center text-xs text-slate-400 py-8">Select an approval file card to view its timeline history.</div>
          `}
        </div>
      </div>
    </div>

    <!-- Quick Action Modal -->
    <div id="approval-action-modal" class="hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-55 flex items-center justify-center p-4">
      <div class="bg-white border border-slate-200 rounded-md shadow-xl max-w-md w-full overflow-hidden animate-toast-slide-in">
        <div class="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider" id="action-modal-title">Sign Note Sheet</h4>
          <button onclick="closeActionModal()" class="text-slate-400 hover:text-slate-650 text-sm font-bold cursor-pointer">✕</button>
        </div>
        <div class="p-6 space-y-4">
          <div class="space-y-1">
            <label class="text-[9px] font-bold text-slate-500 uppercase tracking-wider block" id="action-remarks-label">Signature Remarks</label>
            <textarea id="action-remarks-textarea" class="w-full min-h-[90px] p-3 text-xs border border-slate-250 rounded font-mono text-slate-800 focus:outline-none focus:border-[#2563EB]" placeholder="Type official signature remarks here..."></textarea>
          </div>
          <div class="flex justify-end gap-2 pt-2">
            <button onclick="closeActionModal()" class="bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-3 py-1.5 rounded border border-slate-200 cursor-pointer">Cancel</button>
            <button id="submit-action-btn" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold px-4 py-1.5 rounded cursor-pointer">Submit Signature</button>
          </div>
        </div>
      </div>
    </div>
  `,window.selectApprovalFile=g=>{he=g,Is(s,t)},window.viewApprovalFile=g=>{var x,k;const b=w.eOfficeFiles.find(v=>v.id===g);if(b){wa({id:b.id,name:b.id+"_Notes.pdf",uploadedBy:((x=b.notes[0])==null?void 0:x.writer)||"Draft",uploadedDate:((k=b.notes[0])==null?void 0:k.date)||b.lastUpdated,version:"v1.0",status:b.status,size:"1.2 MB",category:"Administrative Sanctions"});const v=document.getElementById("document-preview-modal");if(v){const y=v.querySelector(".flex-1");y&&(y.innerHTML=`
            <div class="flex-1 bg-emerald-50/15 p-6 overflow-y-auto border-r border-slate-200 font-mono text-[11px] text-emerald-950 leading-relaxed max-h-full">
              <div class="text-center border-b border-emerald-900/20 pb-4 mb-4">
                <div class="font-bold text-xs text-emerald-900">GREATER HYDERABAD MUNICIPAL CORPORATION</div>
                <div class="text-[9px] text-emerald-800/80 uppercase font-semibold">eOffice green Note Sheet Ledger</div>
                <div class="text-[9px] text-emerald-800/60 font-mono mt-1">File Ref: ${b.id} | Department: ${b.department}</div>
              </div>
              <div class="space-y-4">
                ${b.notes.map((S,_)=>`
                  <div class="pl-8 relative border-l border-emerald-900/10">
                    <span class="absolute left-0 top-0 text-[10px] font-bold text-emerald-900/30">#${_+1}</span>
                    <p class="font-mono text-emerald-900 leading-relaxed">${S.text}</p>
                    <div class="text-right mt-2 text-[9px] font-bold uppercase tracking-wider text-emerald-800/60 font-mono">
                      Signed: ${S.writer} | ${S.date}
                    </div>
                  </div>
                `).join('<div class="border-b border-dashed border-emerald-900/10 my-3"></div>')}
              </div>
            </div>
          `)}}};let h="",f="Approve";window.actionApprovalFile=(g,b)=>{h=g,f=b;const x=document.getElementById("approval-action-modal"),k=document.getElementById("action-modal-title"),v=document.getElementById("action-remarks-label"),y=document.getElementById("action-remarks-textarea"),S=document.getElementById("submit-action-btn");x&&k&&v&&y&&S&&(y.value="",b==="Approve"?(k.textContent="Sign & Approve File",v.textContent="Approval Remarks (Optional)",y.placeholder="e.g. Recommended for administrative sanction. Approved.",S.className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-1.5 rounded cursor-pointer"):b==="Reject"?(k.textContent="Reject File",v.textContent="Reason for Rejection (Required)",y.placeholder="Please state clearly the reason for rejecting this file...",S.className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-1.5 rounded cursor-pointer"):(k.textContent="Return File with Remarks",v.textContent="Remarks for Return (Required)",y.placeholder="Please explain what clarifications are needed...",S.className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-1.5 rounded cursor-pointer"),x.classList.remove("hidden"))},window.closeActionModal=()=>{const g=document.getElementById("approval-action-modal");g&&g.classList.add("hidden")},window.allocateBudgetApproval=(g,b)=>{b&&(window.allocateBudget(g,b),Is(s,t))},window.clearBillPaymentApproval=g=>{window.clearBillPayment(g),Is(s,t)};const m=document.getElementById("submit-action-btn");m==null||m.replaceWith(m.cloneNode(!0));const p=document.getElementById("submit-action-btn");p==null||p.addEventListener("click",()=>{const b=document.getElementById("action-remarks-textarea").value.trim();if((f==="Reject"||f==="Return")&&!b){T("Please enter remarks/reasons before submitting.");return}const x=w.eOfficeFiles.find(k=>k.id===h);if(x&&e){const k=new Date,v=k.toISOString().substring(0,10)+" "+k.toTimeString().substring(0,5),y=`${e.role} (${e.name})`;if(f==="Approve"){const S=rt.indexOf(x.currentCustodian),_=S<rt.length-1?rt[S+1]:"Approved / Closed";x.notes.push({writer:y,text:b||"Approved & Forwarded.",date:v}),x.currentCustodian=_,_==="Approved / Closed"?(x.status="Approved / Closed",t.status==="Planning"&&(t.status="In Progress")):x.status="Approved & Forwarded",H(e.name,`Approved & Forwarded File ${x.id} to ${_}`,"Success"),T(`File successfully approved and forwarded to ${_}.`)}else if(f==="Reject")x.notes.push({writer:y,text:"REJECTED: "+b,date:v}),x.status="Rejected",x.currentCustodian="Approved / Closed",H(e.name,`Rejected File ${x.id}`,"Success"),T(`File ${x.id} has been marked as Rejected.`);else{const S=rt.indexOf(x.currentCustodian),_=S>0?rt[S-1]:"Senior Assistant";x.notes.push({writer:y,text:"RETURNED WITH REMARKS: "+b,date:v}),x.currentCustodian=_,x.status="Returned",H(e.name,`Returned File ${x.id} to ${_}`,"Success"),T(`File returned to ${_}.`)}x.lastUpdated=k.toISOString().substring(0,10),window.closeActionModal(),kt(),ct()}})}function H(s,t,e){const i=["10.2.40.12","10.2.80.3","10.2.5.91","10.2.14.8"],n=i[Math.floor(Math.random()*i.length)],o=new Date,a=o.toISOString().substring(0,10),r=o.toTimeString().substring(0,5);w.auditLogs.unshift({id:`AUD-${Math.floor(Math.random()*9e3)+1e3}`,user:s,action:t,date:a,time:r,ip:n,status:e})}function T(s){const t=document.getElementById("toast-container");if(!t)return;const e=document.createElement("div");e.className="bg-slate-900 border border-slate-850 text-white text-xs px-4 py-3 rounded-md shadow-lg animate-toast-slide-in flex items-center justify-between gap-4 max-w-sm",e.innerHTML=`
    <span>${s}</span>
    <button class="text-slate-400 hover:text-white font-bold cursor-pointer" onclick="this.parentElement.remove()">✕</button>
  `,t.appendChild(e),setTimeout(()=>{e.remove()},4500)}function Ui(){const s=document.getElementById("navbar-bell-badge");if(!s)return;const t=w.notifications.filter(e=>!e.read).length;t>0?(s.textContent=String(t),s.classList.remove("hidden")):s.classList.add("hidden")}function Qe(){const s=document.getElementById("notification-drawer-body");if(!s)return;if(w.notifications.length===0){s.innerHTML='<div class="p-6 text-center text-xs text-slate-400">No notifications</div>';return}s.innerHTML=w.notifications.map((e,i)=>`
    <div class="py-3 flex flex-col gap-1 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors ${e.read?"opacity-60":""}" data-index="${i}">
      <div class="flex justify-between items-center text-[10px] font-bold text-slate-900">
        <span>${e.title}</span>
        <span class="text-slate-400 font-medium">${e.time}</span>
      </div>
      <div class="text-[11px] text-slate-500 leading-normal">${e.text}</div>
    </div>
  `).join(""),s.querySelectorAll("[data-index]").forEach(e=>{e.addEventListener("click",()=>{const i=parseInt(e.getAttribute("data-index")||"0",10);w.notifications[i].read=!0,Ui(),Qe()})})}function Gu(){const s=document.getElementById("landing-dashboard-view");if(!s)return;const t=w.currentUser;if(!t)return;const e=w.projects.length,i=w.projects.filter(d=>d.status==="In Progress").length,n=w.eOfficeFiles.filter(d=>d.currentCustodian===t.role).length,o=w.projects.reduce((d,c)=>d+c.budget,0),a=w.projects.reduce((d,c)=>d+c.spent,0),r=(o/1e7).toFixed(2),l=(a/1e7).toFixed(2);s.innerHTML=`
    <div class="bg-white border border-slate-200 rounded-md p-6 mb-6">
      <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Welcome back, ${t.name}</h3>
      <p class="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">${t.roleText} — GHMC Unified Administration Portal</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div class="bg-white border border-slate-200 rounded-md p-6">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Total Monitored Projects</span>
        <span class="text-2xl font-bold text-slate-900">${e}</span>
        <span class="text-[9px] text-emerald-600 font-bold block mt-1">● ${i} In Progress</span>
      </div>

      <div class="bg-white border border-slate-200 rounded-md p-6">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">eOffice Files In Basket</span>
        <span class="text-2xl font-bold text-slate-900">${n}</span>
        <span class="text-[9px] text-amber-600 font-bold block mt-1">Requires immediate sign-off</span>
      </div>

      <div class="bg-white border border-slate-200 rounded-md p-6">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Total Budget Sanctions</span>
        <span class="text-2xl font-bold text-slate-900">Rs. ${r} Cr</span>
        <span class="text-[9px] text-slate-500 font-semibold block mt-1">Across all zones</span>
      </div>

      <div class="bg-white border border-slate-200 rounded-md p-6">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Disbursed Expenditures</span>
        <span class="text-2xl font-bold text-slate-900">Rs. ${l} Cr</span>
        <span class="text-[9px] text-slate-500 font-semibold block mt-1">Capped at ${(a/o*100).toFixed(0)}% utilization</span>
      </div>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <div class="bg-white border border-slate-200 rounded-md p-6 xl:col-span-2 space-y-4">
        <div class="flex justify-between items-center mb-2">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Your Pending eOffice Inbox</h4>
          <a class="text-[10px] font-bold text-indigo-650 hover:underline cursor-pointer" onclick="switchToView('projects-list');">View Full eOffice Desk</a>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left border-collapse">
            <thead>
              <tr class="border-b border-slate-100 text-slate-400 uppercase tracking-wider font-bold text-[9px]">
                <th class="py-2 px-1">File Ref</th>
                <th class="py-2 px-1">Subject</th>
                <th class="py-2 px-1">Priority</th>
                <th class="py-2 px-1">Last Action Date</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-700">
              ${w.eOfficeFiles.filter(d=>d.currentCustodian===t.role).map(d=>{const c=d.priority==="High"?"bg-rose-50 text-rose-700":"bg-slate-100 text-slate-650";return`
                    <tr class="hover:bg-slate-50/50 cursor-pointer" onclick="openGlobalFile('${d.id}')">
                      <td class="py-3 px-1 font-mono font-bold text-slate-900">${d.id}</td>
                      <td class="py-3 px-1 font-medium truncate max-w-xs" title="${d.subject}">${d.subject}</td>
                      <td class="py-3 px-1">
                        <span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${c}">${d.priority}</span>
                      </td>
                      <td class="py-3 px-1 font-mono text-[10px] text-slate-550">${d.lastUpdated}</td>
                    </tr>
                  `}).join("")}
              ${w.eOfficeFiles.filter(d=>d.currentCustodian===t.role).length===0?'<tr><td colspan="4" class="py-6 text-center text-slate-400 italic font-semibold">No files pending your attention.</td></tr>':""}
            </tbody>
          </table>
        </div>
      </div>

      <div class="bg-white border border-slate-200 rounded-md p-6 flex flex-col justify-between">
        <div>
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Capital Outlay Chart</h4>
          <div class="w-full h-48 relative flex items-center justify-center">
            <canvas id="dashboard-budget-canvas"></canvas>
          </div>
        </div>
        <div class="text-[10px] text-slate-400 font-semibold mt-4 text-center">
          Chart shows distributed budget allocation vs spent across active projects.
        </div>
      </div>
    </div>
  `,setTimeout(()=>{const d=document.getElementById("dashboard-budget-canvas");d&&new mt(d,{type:"doughnut",data:{labels:w.projects.map(c=>c.id),datasets:[{data:w.projects.map(c=>c.budget),backgroundColor:["#0f172a","#3b82f6","#10b981","#f59e0b","#ef4444"],borderWidth:1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}}}})},100)}window.openGlobalFile=s=>{const t=w.eOfficeFiles.find(i=>i.id===s);if(!t)return;const e=w.projects.find(i=>i.id===t.projectId);e&&(Ve(e),w.activeProjectModule="eoffice",kt(),ct())};function Uu(s){s.innerHTML=`
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white border border-slate-200 rounded-md p-6">
        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Capital vs Utilization Allocation</h4>
        <div class="h-64 relative flex items-center justify-center">
          <canvas id="reports-budget-bar-canvas"></canvas>
        </div>
      </div>

      <div class="bg-white border border-slate-200 rounded-md p-6">
        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Project Construction Progress</h4>
        <div class="h-64 relative flex items-center justify-center">
          <canvas id="reports-progress-line-canvas"></canvas>
        </div>
      </div>
    </div>
  `,setTimeout(()=>{const t=document.getElementById("reports-budget-bar-canvas"),e=document.getElementById("reports-progress-line-canvas");t&&new mt(t,{type:"bar",data:{labels:w.projects.map(i=>i.id),datasets:[{label:"Budget Sanction (Rs. Cr)",data:w.projects.map(i=>i.budget/1e7),backgroundColor:"#0f172a"},{label:"Expenditure Disbursed (Rs. Cr)",data:w.projects.map(i=>i.spent/1e7),backgroundColor:"#3b82f6"}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{boxWidth:12,font:{size:10,family:"Inter"}}}},scales:{y:{ticks:{font:{size:9,family:"Inter"}}},x:{ticks:{font:{size:9,family:"Inter"}}}}}}),e&&new mt(e,{type:"line",data:{labels:w.projects.map(i=>i.id),datasets:[{label:"Completion Progress %",data:w.projects.map(i=>i.progress),borderColor:"#10b981",backgroundColor:"#10b98122",fill:!0,tension:.3}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{boxWidth:12,font:{size:10,family:"Inter"}}}},scales:{y:{min:0,max:100,ticks:{font:{size:9,family:"Inter"}}},x:{ticks:{font:{size:9,family:"Inter"}}}}}})},100)}let $t="",Tt=!1,Ot="latest",xs="",vs="",Bt=!1;function qu(s){var e,i;s.noteNumber||(s.noteNumber=`NOTE-2026-${s.id.split("-").pop()}`);const t=w.projects.find(n=>n.id===s.projectId);if(s.projectName||(s.projectName=t?t.name:"Zone-3 Infrastructure Works"),s.zone||(s.zone=t?t.zone:"Zone-3 (Secunderabad)"),s.creatorRole||(s.creatorRole="Senior Assistant"),s.creatorName||(s.creatorName="Sri V. Kumar"),s.createdDate||(s.createdDate="2026-06-25"),s.createdTime||(s.createdTime="10:30"),s.estimatedBudget||(s.estimatedBudget=t?t.budget:12e6),s.budgetHead||(s.budgetHead="4120-ENG-CAP-Z3"),s.description||(s.description=((e=s.notes[0])==null?void 0:e.text)||s.subject),s.purpose||(s.purpose="Administrative approval and financial sanction for public infrastructure enhancements."),s.background||(s.background="This proposal has been initiated to address urgent utility and roadway demands based on local ward representations."),s.justification||(s.justification="Required to prevent seasonal overflow, traffic blockages, and ensure regulatory alignment."),s.benefits||(s.benefits="Will benefit over 2.5 Lakh daily commuters and local residents."),s.additionalConditions||(s.additionalConditions="Standard quality standards must be followed during execution."),(!s.versions||s.versions.length===0)&&(s.versions=[{version:"v1.0",modifiedBy:s.creatorName,modifiedRole:s.creatorRole,modifiedDate:s.createdDate,modifiedTime:s.createdTime,subject:s.subject,projectName:s.projectName,description:s.description,purpose:s.purpose,background:s.background,estimatedBudget:s.estimatedBudget,budgetHead:s.budgetHead,justification:s.justification,benefits:s.benefits,priority:s.priority,remarks:((i=s.notes[0])==null?void 0:i.text)||"",additionalConditions:s.additionalConditions}]),!s.workflowStatus){const n={"Senior Assistant":"Approved","Assistant Engineer":"Waiting","Deputy Executive Engineer":"Waiting","Executive Engineer":"Waiting","Superintending Engineer":"Waiting","Joint Commissioner":"Waiting","Additional Commissioner":"Waiting",Commissioner:"Waiting"};if(s.status==="Approved / Closed")Object.keys(n).forEach(o=>{n[o]="Approved"});else if(s.status==="Rejected")Object.keys(n).forEach(o=>{n[o]="Rejected"});else{const o=rt.indexOf(s.currentCustodian);if(o!==-1){for(let a=0;a<o;a++)n[rt[a]]="Approved";n[s.currentCustodian]=s.status==="Returned"?"Returned":"Pending"}}s.workflowStatus=n}(!s.approvalHistory||s.approvalHistory.length===0)&&(s.approvalHistory=s.notes.map((n,o)=>{let a="Officer",r=n.writer;if(n.writer.includes("(")){const l=n.writer.split(" (");a=l[0],r=l[1].replace(")","")}else(n.writer.includes(" JC")||n.writer.includes("COMMISSIONER")||n.writer.includes("ADDL. COMMR"))&&(n.writer.includes("COMMISSIONER")?(a="Commissioner",r="Sri R V Karnan, IAS"):n.writer.includes("ADDL. COMMR")?(a="Additional Commissioner",r="Sri Manda Makarandu, IAS"):(a="Joint Commissioner",r="C Radha"));return{officerName:r,role:a,department:s.department,action:o===0?"Created Initial Note":"Approved & Forwarded",remarks:n.text,dateTime:n.date,status:"Approved",versionNumber:"v1.0"}})),(!s.auditLogs||s.auditLogs.length===0)&&(s.auditLogs=s.approvalHistory.map((n,o)=>({user:n.officerName,role:n.role,date:n.dateTime.split(" ")[0],time:n.dateTime.split(" ")[1]||"12:00",ip:`10.2.14.${50+o}`,action:n.action,previousValue:o===0?"N/A":"Pending Review",newValue:"Approved"})))}function ys(s){const t=w.eOfficeNotes.find(e=>e.fileNumber===s.id||e.id===s.id||e.id.replace("NOTE","FILE")===s.id||s.id.replace("FILE","NOTE")===e.id);t&&(t.status=s.status,t.currentCustodian=s.currentCustodian,t.subject=s.subject,t.projectName=s.projectName||t.projectName,t.description=s.description||t.description,t.purpose=s.purpose||t.purpose,t.background=s.background||t.background,t.estimatedBudget=s.estimatedBudget||t.estimatedBudget,t.budgetHead=s.budgetHead||t.budgetHead,t.justification=s.justification||t.justification,t.benefits=s.benefits||t.benefits,t.additionalConditions=s.additionalConditions||t.additionalConditions,t.versions=s.versions||t.versions,t.approvalHistory=s.approvalHistory||t.approvalHistory,t.auditLogs=s.auditLogs||t.auditLogs,t.workflowStatus=s.workflowStatus||t.workflowStatus,t.attachments=s.attachments||t.attachments)}function Ku(s,t){const e=parseFloat(s.replace("v",""));return t==="Joint Commissioner"||t==="Additional Commissioner"?`v${Math.floor(e+1)}.0`:`v${(e+.1).toFixed(1)}`}function Yu(s){const t=rt.indexOf(s);return t===-1?"Approved / Closed":t<rt.length-1?rt[t+1]:"Approved / Closed"}function Ju(s){const t=rt.indexOf(s);return t<=0?"Senior Assistant":rt[t-1]}function Z(){var r,l,d,c,u,h,f,m;const s=document.getElementById("status-view-container"),t=w.currentUser;if(!s||!t)return;const e=w.eOfficeFiles;e.forEach(p=>{qu(p),ys(p)});let i=[];ot==="pending"?i=e.filter(p=>p.currentCustodian===t.role&&p.status!=="Approved / Closed"&&p.status!=="Rejected"):ot==="approved"?i=e.filter(p=>p.approvalHistory&&p.approvalHistory.some(g=>g.role===t.role&&(g.action.includes("Approved")||g.action.includes("Forwarded")))):ot==="rejected"&&(i=e.filter(p=>p.approvalHistory&&p.approvalHistory.some(g=>g.role===t.role&&g.action.includes("Rejected"))));const n=ot==="pending"&&(t.role==="Finance Officer"||t.role==="Commissioner"||t.role==="Administrator")?w.bills.filter(p=>p.status==="Pending Budget Allocation"||p.status==="Pending Approval"):[];i.length>0?(!$t||!i.some(p=>p.id===$t))&&($t=i[0].id):$t="";const o=e.find(p=>p.id===$t);let a="";if(o){let p=(r=o.versions)==null?void 0:r[o.versions.length-1];Ot!=="latest"&&(p=((l=o.versions)==null?void 0:l.find(v=>v.version===Ot))||p);const g=((d=o.versions)==null?void 0:d.map(v=>`<option value="${v.version}" ${Ot===v.version?"selected":""}>Version ${v.version.replace("v","")} - ${v.modifiedRole}</option>`).join(""))||"",b=`
      <div class="border border-slate-200 rounded p-4 bg-slate-50/50 space-y-3 font-semibold text-[11px] select-none">
        <div class="text-[9px] font-bold uppercase text-slate-450 tracking-wider">Approval Stage Tracker</div>
        <div class="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          ${rt.map(v=>{var C;const y=((C=o.workflowStatus)==null?void 0:C[v])||"Waiting";let S="bg-slate-105 text-slate-400 border-slate-205",_="Waiting";return y==="Approved"?(S="bg-emerald-50 text-emerald-700 border-emerald-200",_="Approved"):y==="Rejected"?(S="bg-rose-50 text-rose-700 border-rose-200",_="Rejected"):y==="Returned"?(S="bg-blue-50 text-blue-700 border-blue-200",_="Returned"):y==="Pending"&&(S="bg-amber-50 text-amber-700 border-amber-200 animate-pulse",_="Pending"),`
              <div class="flex flex-col items-center justify-center p-2 rounded bg-white border border-slate-200 text-center space-y-1">
                <span class="font-bold text-[9px] text-slate-700 truncate w-full" title="${v}">${v.replace(" Engineer","").replace(" Assistant","")}</span>
                <span class="px-1 py-0.5 rounded text-[7px] font-extrabold uppercase border ${S}">${_}</span>
              </div>
            `}).join("")}
        </div>
      </div>
    `,x=((c=o.approvalHistory)==null?void 0:c.map((v,y)=>`
      <div class="border-l-2 border-emerald-900/15 pl-4 py-1 relative">
        <span class="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-emerald-600 ring-4 ring-white"></span>
        <div class="flex justify-between text-[9px] font-mono text-emerald-800/60 uppercase font-bold">
          <span>${v.officerName} (${v.role})</span>
          <span class="text-slate-400 font-semibold">${v.dateTime}</span>
        </div>
        <p class="text-xs text-slate-800 italic mt-1 leading-normal font-sans font-semibold">"${v.remarks||"No remarks."}"</p>
        <div class="mt-1 flex justify-between items-center text-[9px] text-emerald-800/50 font-mono font-bold">
          <span>Action: ${v.action}</span>
          <span class="bg-emerald-50 px-1 rounded border border-emerald-100">Ver: ${v.versionNumber}</span>
        </div>
      </div>
    `).join('<div class="border-b border-dashed border-emerald-900/5 my-2"></div>'))||"";let k="";if(Bt){const v=(u=o.versions)==null?void 0:u.find(S=>S.version===xs),y=(h=o.versions)==null?void 0:h.find(S=>S.version===vs);v&&y&&(k=`
          <div class="grid grid-cols-2 gap-4 border border-dashed border-slate-300 p-3 bg-slate-50/50 rounded mt-2">
            <div class="space-y-2 border-r border-slate-200 pr-2">
              <div class="text-[10px] font-bold text-slate-450 uppercase font-mono">Version ${v.version.replace("v","")} (${v.modifiedRole})</div>
              <div class="text-[10px] text-slate-800"><strong>Subject:</strong> ${v.subject}</div>
              <div class="text-[10px] text-slate-800 font-mono"><strong>Budget:</strong> Rs. ${(v.estimatedBudget/1e5).toFixed(1)}L</div>
              <div class="text-[10px] text-slate-655 italic line-clamp-4"><strong>Description:</strong> ${v.description}</div>
            </div>
            <div class="space-y-2">
              <div class="text-[10px] font-bold text-slate-455 uppercase font-mono">Version ${y.version.replace("v","")} (${y.modifiedRole})</div>
              <div class="text-[10px] text-slate-800"><strong>Subject:</strong> ${v.subject!==y.subject?`<span class="bg-emerald-100 text-emerald-900">${y.subject}</span>`:y.subject}</div>
              <div class="text-[10px] text-slate-800 font-mono"><strong>Budget:</strong> ${v.estimatedBudget!==y.estimatedBudget?`<span class="bg-emerald-100 text-emerald-900 font-bold">Rs. ${(y.estimatedBudget/1e5).toFixed(1)}L</span>`:`Rs. ${(y.estimatedBudget/1e5).toFixed(1)}L`}</div>
              <div class="text-[10px] text-slate-655 italic line-clamp-4"><strong>Description:</strong> ${v.description!==y.description?`<span class="bg-emerald-100 text-emerald-900">${y.description}</span>`:y.description}</div>
            </div>
          </div>
        `)}a=`
      <div class="xl:col-span-1 bg-white border border-slate-200 rounded-md p-6 space-y-6 overflow-y-auto max-h-[85vh] shadow-xs">
        
        <!-- Header Details -->
        <div class="border-b border-slate-150 pb-4 space-y-3">
          <div class="flex justify-between items-start gap-2">
            <div>
              <span class="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">eOffice File Reference</span>
              <h4 class="text-xs font-bold text-slate-900 font-mono">${o.id}</h4>
            </div>
            <span class="px-2 py-0.5 rounded text-[8px] font-extrabold uppercase border ${o.priority==="High"?"bg-rose-50 text-rose-700 border-rose-200":"bg-slate-100 text-slate-655 border-slate-200"}">${o.priority}</span>
          </div>

          <div class="grid grid-cols-2 gap-2 text-[10px] text-slate-700">
            <div><strong class="text-slate-450 uppercase text-[8px]">Note Number:</strong> <span class="font-mono text-slate-900 font-bold">${o.noteNumber}</span></div>
            <div><strong class="text-slate-450 uppercase text-[8px]">Status:</strong> <span class="px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase ${o.status==="Approved / Closed"?"bg-emerald-50 text-emerald-700 border border-emerald-100":o.status==="Rejected"?"bg-rose-50 text-rose-700 border border-rose-100":o.status==="Returned"?"bg-blue-50 text-blue-700 border border-blue-100":"bg-amber-50 text-amber-700 border border-amber-100"}">${o.status}</span></div>
            <div><strong class="text-slate-450 uppercase text-[8px]">Created By:</strong> <span class="font-semibold text-slate-800">${o.creatorName}</span></div>
            <div><strong class="text-slate-450 uppercase text-[8px]">Created On:</strong> <span class="font-mono text-slate-800">${o.createdDate}</span></div>
            <div><strong class="text-slate-450 uppercase text-[8px]">Department:</strong> <span class="font-semibold text-slate-800 truncate block">${o.department}</span></div>
            <div><strong class="text-slate-450 uppercase text-[8px]">Custodian:</strong> <span class="font-semibold text-slate-800 truncate block">${o.currentCustodian}</span></div>
          </div>
        </div>

        <!-- Stage Stepper Timeline -->
        ${b}

        <!-- Version Selection -->
        <div class="flex justify-between items-center border-b border-slate-100 pb-2">
          <div class="flex items-center gap-2 font-semibold">
            <span class="text-[9px] font-bold text-slate-455 uppercase tracking-wider">Note Sheet Version:</span>
            <select onchange="changeApprovalVersion(this.value)" class="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] text-slate-700 font-bold cursor-pointer outline-none font-semibold">
              <option value="latest" ${Ot==="latest"?"selected":""}>Latest Version</option>
              ${g}
            </select>
          </div>
          
          ${o.versions&&o.versions.length>1?`
            <button onclick="toggleCompareApprovalVersions()" class="text-[#2563EB] hover:text-[#1D4ED8] text-[9px] font-extrabold uppercase tracking-wider cursor-pointer font-bold">
              ${Bt?"Close Compare":"Compare Versions"}
            </button>
          `:""}
        </div>

        ${Bt?`
          <div class="flex gap-2 items-center bg-slate-50 border border-slate-200 p-2 rounded">
            <span class="text-[9px] font-bold text-slate-450 uppercase font-mono">Compare</span>
            <select onchange="changeCompareVer1(this.value)" class="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] text-slate-700 outline-none cursor-pointer">
              ${(f=o.versions)==null?void 0:f.map(v=>`<option value="${v.version}" ${xs===v.version?"selected":""}>Version ${v.version.replace("v","")}</option>`).join("")}
            </select>
            <span class="text-[9px] font-bold text-slate-450 uppercase font-mono">with</span>
            <select onchange="changeCompareVer2(this.value)" class="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] text-slate-700 outline-none cursor-pointer">
              ${(m=o.versions)==null?void 0:m.map(v=>`<option value="${v.version}" ${vs===v.version?"selected":""}>Version ${v.version.replace("v","")}</option>`).join("")}
            </select>
          </div>
          ${k}
        `:""}

        <!-- Main Workspace Body (View or Edit) -->
        ${Tt?`
          <!-- Editable Note Editor -->
          <div class="bg-slate-50 border border-slate-200 rounded p-6 space-y-4 font-semibold text-xs text-slate-800">
            <div class="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-250 pb-2">Edit Note Sheet (New Version Draft)</div>
            
            <div class="space-y-1">
              <label class="block text-[10px] text-slate-450 uppercase">Subject</label>
              <input type="text" id="edit-approval-subject" class="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs outline-none" value="${o.subject}">
            </div>

            <div class="space-y-1">
              <label class="block text-[10px] text-slate-450 uppercase">Project Name</label>
              <input type="text" id="edit-approval-projname" class="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs outline-none" value="${o.projectName||""}">
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="block text-[10px] text-slate-455 uppercase">Estimated Budget (Rs.)</label>
                <input type="number" id="edit-approval-budget" class="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs outline-none font-bold" value="${o.estimatedBudget||0}">
              </div>
              <div class="space-y-1">
                <label class="block text-[10px] text-slate-455 uppercase">Budget Head</label>
                <select id="edit-approval-budgethead" class="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs outline-none cursor-pointer">
                  ${w.headOfAccounts.map(v=>`<option value="${v.code}" ${o.budgetHead===v.code?"selected":""}>${v.code} (Rs. ${(v.balance/1e5).toFixed(1)}L bal)</option>`).join("")}
                </select>
              </div>
            </div>

            <div class="space-y-1">
              <label class="block text-[10px] text-slate-455 uppercase">1. Description & Context</label>
              <textarea id="edit-approval-description" class="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs outline-none h-24 whitespace-pre-wrap">${o.description||""}</textarea>
            </div>

            <div class="space-y-1">
              <label class="block text-[10px] text-slate-455 uppercase">2. Purpose & Need</label>
              <textarea id="edit-approval-purpose" class="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs outline-none h-16 whitespace-pre-wrap">${o.purpose||""}</textarea>
            </div>

            <div class="space-y-1">
              <label class="block text-[10px] text-slate-455 uppercase">3. Background context</label>
              <textarea id="edit-approval-background" class="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs outline-none h-16 whitespace-pre-wrap">${o.background||""}</textarea>
            </div>

            <div class="space-y-1">
              <label class="block text-[10px] text-slate-455 uppercase">4. Justification & Benefits</label>
              <textarea id="edit-approval-justification" class="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs outline-none h-16 whitespace-pre-wrap">${o.justification||""}</textarea>
            </div>

            <div class="space-y-1">
              <label class="block text-[10px] text-slate-455 uppercase">5. Special Conditions/Remarks</label>
              <textarea id="edit-approval-conditions" class="w-full bg-white border border-slate-200 rounded px-2.5 py-1.5 text-xs outline-none h-16 whitespace-pre-wrap">${o.additionalConditions||""}</textarea>
            </div>

            <div class="space-y-2 border-t border-slate-200 pt-3">
              <label class="block text-[10px] text-slate-455 uppercase">Attached Supporting Documents</label>
              <div class="space-y-1.5">
                ${o.attachments.map(v=>`
                  <div class="flex justify-between items-center bg-white border border-slate-200 px-2 py-1 rounded font-bold">
                    <span class="font-mono text-[10px]">${v}</span>
                    <button onclick="removeApprovalAttachment('${v}')" class="text-rose-650 hover:text-rose-800 text-[10px] font-bold cursor-pointer">Delete</button>
                  </div>
                `).join("")}
              </div>
              <div class="flex gap-2 mt-2">
                <input type="text" id="add-approval-attachment-name" class="flex-1 bg-white border border-slate-200 rounded px-2 py-1 text-xs outline-none" placeholder="Enter file name (e.g. Design_Draft_V2.pdf)">
                <button onclick="addApprovalAttachment()" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-3 py-1 rounded text-[10px] font-bold cursor-pointer">Attach</button>
              </div>
            </div>

            <div class="flex justify-end gap-2 border-t border-slate-200 pt-4 font-bold">
              <button onclick="cancelApprovalEditNote()" class="px-3 py-1.5 border border-slate-200 text-slate-700 hover:bg-slate-50 text-[10px] uppercase font-bold rounded cursor-pointer">Cancel</button>
              <button onclick="saveApprovalEditNote()" class="px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[10px] uppercase font-bold rounded cursor-pointer">Save Draft</button>
            </div>
          </div>
        `:`
          <!-- Green ledger note sheet -->
          ${p?`
            <div class="green-note-sheet p-6 rounded-md border border-emerald-200 bg-[#F4FAF4]/45 font-serif leading-relaxed text-emerald-950 text-xs">
              <div class="text-center border-b border-emerald-900/20 pb-4 mb-4 font-sans">
                <div class="font-bold text-sm text-emerald-900 tracking-wider">GREATER HYDERABAD MUNICIPAL CORPORATION</div>
                <div class="text-[10px] text-emerald-800/80 uppercase font-bold tracking-wider">eOffice Green Note Sheet Ledger</div>
                <div class="text-[9px] text-emerald-855 font-mono mt-1">File Ref: ${o.id} | Note ID: ${o.noteNumber}</div>
              </div>

              <div class="space-y-4">
                <div><strong>Subject Matter:</strong> ${p.subject}</div>
                <div><strong>Project Name:</strong> ${p.projectName}</div>
                <div class="grid grid-cols-2 gap-4">
                  <div><strong>Estimated Budget:</strong> Rs. ${(p.estimatedBudget/1e5).toFixed(1)} Lakhs</div>
                  <div><strong>Budget Head:</strong> ${p.budgetHead}</div>
                </div>
                <div class="border-t border-emerald-900/10 pt-2">
                  <strong>1. Description & Context:</strong>
                  <p class="indent-4 leading-normal mt-1 whitespace-pre-wrap">${p.description}</p>
                </div>
                <div class="border-t border-emerald-900/10 pt-2">
                  <strong>2. Purpose & Need:</strong>
                  <p class="indent-4 leading-normal mt-1 whitespace-pre-wrap">${p.purpose}</p>
                </div>
                <div class="border-t border-emerald-900/10 pt-2">
                  <strong>3. Background context:</strong>
                  <p class="indent-4 leading-normal mt-1 whitespace-pre-wrap">${p.background}</p>
                </div>
                <div class="border-t border-emerald-900/10 pt-2">
                  <strong>4. Justification & Benefits:</strong>
                  <p class="indent-4 leading-normal mt-1 whitespace-pre-wrap">${p.justification}</p>
                </div>
                ${p.additionalConditions?`
                <div class="border-t border-emerald-900/10 pt-2">
                  <strong>5. Special Conditions/Remarks:</strong>
                  <p class="indent-4 leading-normal mt-1 whitespace-pre-wrap">${p.additionalConditions}</p>
                </div>
                `:""}
              </div>

              <!-- Signed Remarks Timeline -->
              <div class="border-t border-emerald-900/25 mt-6 pt-4 font-sans space-y-4">
                <div class="text-[10px] font-bold text-emerald-900 uppercase tracking-wider mb-2">Chronological Official Remarks & Signature Stamps</div>
                ${x}
              </div>
            </div>
          `:""}
        `}

        <!-- Attached Documents -->
        ${Tt?"":`
          <div class="border border-slate-200 rounded p-4 bg-white space-y-3 font-semibold text-xs">
            <div class="text-[9px] font-bold uppercase text-slate-455 tracking-wider">Attached Correspondence & Reference Files</div>
            <div class="space-y-2 font-bold">
              ${o.attachments.map(v=>`
                <div class="flex justify-between items-center border border-slate-150 p-2 rounded hover:bg-slate-50/55 cursor-pointer" onclick="viewAttachedDocument('${v}')">
                  <div class="flex items-center gap-2">
                    <span class="text-rose-650 text-[10px] font-extrabold font-mono">PDF</span>
                    <span class="text-slate-800 truncate max-w-[150px] font-sans text-[11px] font-semibold">${v}</span>
                  </div>
                  <span class="text-[9px] text-[#2563EB] uppercase hover:underline">View</span>
                </div>
              `).join("")}
              ${o.attachments.length===0?'<div class="text-[11px] text-slate-400 italic font-semibold">No attachments uploaded.</div>':""}
            </div>
          </div>
        `}

        <!-- Actions Panel -->
        ${ot==="pending"&&o.currentCustodian===t.role&&o.status!=="Approved / Closed"&&o.status!=="Rejected"?`
          <div class="border border-slate-200 rounded p-6 bg-slate-50/50 space-y-4 font-semibold text-xs">
            <div class="text-[10px] font-bold text-slate-455 uppercase tracking-wider font-semibold">Mandatory Action Remarks</div>
            
            <div class="space-y-1">
              <label class="block text-[10px] text-slate-450 uppercase">Official Remarks <span class="text-rose-600">*</span></label>
              <textarea id="workspace-remarks-textarea" class="w-full bg-white border border-slate-200 rounded p-2 text-xs outline-none h-20" placeholder="Please enter your official decision remarks here..."></textarea>
            </div>

            <div class="flex flex-wrap gap-2 border-t border-slate-200 pt-4 font-bold">
              ${t.role!=="Commissioner"&&t.role!=="Vendor"&&!Tt?`
                <button onclick="editApprovalNoteSheet()" class="px-3 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 text-[10px] uppercase tracking-wider rounded cursor-pointer transition-all border border-teal-200">Edit Note</button>
              `:""}

              <button onclick="actionApprovalWorkspace('Keep Pending')" class="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 text-[10px] uppercase tracking-wider rounded cursor-pointer transition-all border border-amber-200 font-bold">Keep Pending</button>

              ${t.role!=="Senior Assistant"&&t.role!=="Vendor"?`
                <button onclick="actionApprovalWorkspace('Return')" class="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-800 text-[10px] uppercase tracking-wider rounded cursor-pointer transition-all border border-blue-200 font-bold">Return for Correction</button>
              `:""}

              ${["Assistant Engineer","Executive Engineer","Additional Commissioner","Commissioner"].includes(t.role)?`
                <button onclick="actionApprovalWorkspace('Reject')" class="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 text-[10px] uppercase tracking-wider rounded cursor-pointer transition-all border border-rose-200 font-bold">Reject</button>
              `:""}

              <button onclick="actionApprovalWorkspace('Forward')" class="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-[10px] uppercase tracking-wider rounded cursor-pointer transition-all border border-indigo-200 font-bold">Forward to Next</button>

              ${t.role==="Commissioner"?`
                <button onclick="actionApprovalWorkspace('Approve')" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] uppercase tracking-wider rounded cursor-pointer transition-all shadow-sm font-bold">Grant Sanction</button>
              `:`
                <button onclick="actionApprovalWorkspace('Approve')" class="px-3 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[10px] uppercase tracking-wider rounded cursor-pointer transition-all shadow-sm font-bold">Approve & Forward</button>
              `}
            </div>
          </div>
        `:`
          <div class="border border-slate-100 rounded p-4 bg-slate-50/50 text-center text-[10px] text-slate-400 uppercase font-mono font-bold">
            ${o.status==="Approved / Closed"?"✔ Approved & Closed (Administrative Sanction Granted)":o.status==="Rejected"?"✖ Rejected & Closed":`✔ Currently Awaiting clearance at ${o.currentCustodian}'s desk`}
          </div>
        `}

      </div>
    `}else a=`
      <div class="xl:col-span-1 bg-white border border-slate-200 rounded-md p-12 text-center text-xs text-slate-400 italic font-semibold">
        Select an active eOffice file to inspect its Status Workspace.
      </div>
    `;s.innerHTML=`
    <!-- Main Workspace Split Pane -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start font-semibold">
      
      <!-- Left 2 Cols: Actionable Items list & Selection -->
      <div class="xl:col-span-2 space-y-6">
        
        <!-- Status Tabs -->
        <div class="flex border-b border-slate-200 bg-white rounded-md p-1 shadow-xs gap-2 select-none">
          <button onclick="changeStatusTab('pending')" class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${ot==="pending"?"border-[#2563EB] text-[#2563EB] border-b-2":"border-transparent text-slate-500 hover:text-slate-700"}">
            Pending at You
          </button>
          <button onclick="changeStatusTab('approved')" class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${ot==="approved"?"border-[#2563EB] text-[#2563EB] border-b-2":"border-transparent text-slate-500 hover:text-slate-700"}">
            Approved by You
          </button>
          <button onclick="changeStatusTab('rejected')" class="px-4 py-2.5 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${ot==="rejected"?"border-[#2563EB] text-[#2563EB] border-b-2":"border-transparent text-slate-500 hover:text-slate-700"}">
            Rejected by You
          </button>
        </div>

        <!-- Files list -->
        <div class="bg-white border border-slate-200 rounded-md p-6 space-y-4">
          <div class="border-b border-slate-100 pb-3">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider font-bold">
              ${ot==="pending"?"Awaiting My Signature":ot==="approved"?"Approved by You":"Rejected by You"} (${i.length})
            </h4>
            <p class="text-[9px] text-slate-455 mt-1 uppercase font-mono font-semibold">
              ${ot==="pending"?"eOffice official note sheets currently assigned to your desk":ot==="approved"?"eOffice files approved or forwarded by you":"eOffice files rejected by you"}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold">
            ${i.map(p=>{var x;const g=p.priority==="High"?"bg-rose-50 text-rose-700 border-rose-100":"bg-slate-100 text-slate-650 border-slate-200",b=w.projects.find(k=>k.id===p.projectId);return`
                <div class="bg-white border border-slate-200 rounded-md p-4 flex flex-col justify-between hover:border-slate-350 transition-all cursor-pointer ${$t===p.id?"ring-2 ring-[#2563EB]":""}" onclick="selectGlobalApprovalFile('${p.id}')">
                  <div class="space-y-1">
                    <div class="flex justify-between items-start gap-2">
                      <span class="font-mono text-[10px] font-bold text-slate-900">${p.id}</span>
                      <span class="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase border ${g}">${p.priority}</span>
                    </div>
                    <h5 class="text-xs font-bold text-slate-800 truncate">${p.subject}</h5>
                    <p class="text-[10px] text-slate-450 font-semibold truncate">${b?b.name:"Unknown Project"}</p>
                    <p class="text-[9px] text-slate-400 font-mono mt-2 font-medium">Forwarded: ${((x=p.notes[p.notes.length-1])==null?void 0:x.date)||p.lastUpdated}</p>
                  </div>

                  <div class="flex justify-end gap-1.5 mt-4 border-t border-slate-50 pt-3 font-bold">
                    <button onclick="event.stopPropagation(); selectGlobalApprovalFile('${p.id}')" class="px-2.5 py-1 bg-[#2563EB] text-white hover:bg-[#1D4ED8] text-[9px] font-bold uppercase tracking-wider rounded cursor-pointer transition-all font-bold">Open Workspace</button>
                  </div>
                </div>
              `}).join("")}
            ${i.length===0?`
              <div class="col-span-2 py-8 text-center text-xs text-slate-400 italic font-semibold">
                No eOffice file approvals in this category.
              </div>
            `:""}
          </div>
        </div>

        <!-- ERP Claims / Bills awaiting action -->
        ${ot==="pending"&&(t.role==="Finance Officer"||t.role==="Commissioner"||t.role==="Administrator")?`
          <div class="bg-white border border-slate-200 rounded-md p-6 space-y-4 font-bold">
            <div class="border-b border-slate-100 pb-3">
              <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">ERP Invoices & Bill Claims Awaiting Clearance</h4>
              <p class="text-[9px] text-slate-450 mt-1 uppercase font-mono">ERP financial payment vouchers and head mapping clearances</p>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-xs text-left border-collapse">
                <thead>
                  <tr class="bg-slate-50 border-b border-slate-100 text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                    <th class="py-2 px-3">Bill ID</th>
                    <th class="py-2 px-3">Vendor / Contractor</th>
                    <th class="py-2 px-3">Amount</th>
                    <th class="py-2 px-3">Head mapping</th>
                    <th class="py-2 px-3">Status</th>
                    <th class="py-2 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 text-slate-700 font-semibold font-bold">
                  ${n.map(p=>{const g=p.status==="Paid"?"bg-emerald-50 text-emerald-700":p.status==="Pending Approval"?"bg-amber-50 text-amber-700":"bg-rose-50 text-rose-700";return`
                      <tr class="hover:bg-slate-50/50">
                        <td class="py-3 px-3 font-mono font-bold text-slate-800">${p.id}</td>
                        <td class="py-3 px-3 text-slate-700 font-bold">${p.vendor}</td>
                        <td class="py-3 px-3 font-mono text-slate-900">Rs. ${(p.amount/1e5).toFixed(1)} Lakhs</td>
                        <td class="py-3 px-3 font-bold">
                          ${p.status==="Pending Budget Allocation"?`
                            <select onchange="allocateBudgetApproval('${p.id}', this.value)" class="bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] text-slate-700 cursor-pointer outline-none font-bold">
                              <option value="">-- Link Head --</option>
                              ${w.headOfAccounts.map(b=>`<option value="${b.code}">${b.code} (${b.balance/1e5}L bal)</option>`).join("")}
                            </select>
                          `:`<span class="font-mono text-slate-550 font-bold">${p.headOfAccount||"N/A"}</span>`}
                        </td>
                        <td class="py-3 px-3">
                          <span class="px-2 py-0.5 rounded-full text-[9px] font-bold ${g}">${p.status}</span>
                        </td>
                        <td class="py-3 px-3 text-right font-bold">
                          ${p.status==="Pending Approval"?`
                            <button onclick="clearBillPaymentApproval('${p.id}')" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded cursor-pointer font-bold">
                              Release Payment
                            </button>
                          `:'<span class="text-[10px] text-slate-400 font-semibold">Awaiting Head Mapping</span>'}
                        </td>
                      </tr>
                    `}).join("")}
                  ${n.length===0?'<tr><td colspan="6" class="py-4 text-center text-slate-400 italic">No payment claims currently pending.</td></tr>':""}
                </tbody>
              </table>
            </div>
          </div>
        `:""}

      </div>

      <!-- Right 1 Col: Status Workspace -->
      ${a}

    </div>
  `,window.selectGlobalApprovalFile=p=>{$t=p,Tt=!1,Bt=!1,Ot="latest",Z()},window.changeStatusTab=p=>{ot=p,$t="",Tt=!1,Bt=!1,Ot="latest",Z()},window.editApprovalNoteSheet=()=>{Tt=!0,Z()},window.cancelApprovalEditNote=()=>{Tt=!1,Z()},window.changeApprovalVersion=p=>{Ot=p,Z()},window.toggleCompareApprovalVersions=()=>{var p,g;Bt=!Bt,Bt&&o&&o.versions&&(xs=((p=o.versions[0])==null?void 0:p.version)||"",vs=((g=o.versions[o.versions.length-1])==null?void 0:g.version)||""),Z()},window.changeCompareVer1=p=>{xs=p,Z()},window.changeCompareVer2=p=>{vs=p,Z()},window.viewAttachedDocument=p=>{T(`Opening attached reference document: ${p}`)},window.removeApprovalAttachment=p=>{o&&(o.attachments=o.attachments.filter(g=>g!==p),Z())},window.addApprovalAttachment=()=>{const p=document.getElementById("add-approval-attachment-name"),g=p==null?void 0:p.value.trim();g&&o&&(o.attachments.includes(g)||o.attachments.push(g),p.value="",Z())},window.allocateBudgetApproval=(p,g)=>{g&&(window.allocateBudget(p,g),Z())},window.clearBillPaymentApproval=p=>{window.clearBillPayment(p),Z()},window.saveApprovalEditNote=()=>{var B,j;if(!o)return;const p=document.getElementById("edit-approval-subject").value.trim(),g=document.getElementById("edit-approval-projname").value.trim(),b=parseFloat(document.getElementById("edit-approval-budget").value),x=document.getElementById("edit-approval-budgethead").value,k=document.getElementById("edit-approval-description").value.trim(),v=document.getElementById("edit-approval-purpose").value.trim(),y=document.getElementById("edit-approval-background").value.trim(),S=document.getElementById("edit-approval-justification").value.trim(),_=document.getElementById("edit-approval-benefits").value.trim(),C=document.getElementById("edit-approval-conditions").value.trim();if(!p||!g||isNaN(b)||!k){T("Subject, Project Name, Budget and Description are mandatory.");return}const E=((j=(B=o.versions)==null?void 0:B[o.versions.length-1])==null?void 0:j.version)||"v1.0",M=Ku(E,t.role),P=new Date,R=P.toISOString().substring(0,10),W=P.toTimeString().substring(0,5),it={version:M,modifiedBy:t.name,modifiedRole:t.role,modifiedDate:R,modifiedTime:W,subject:p,projectName:g,description:k,purpose:v,background:y,estimatedBudget:b,budgetHead:x,justification:S,benefits:_,priority:o.priority,remarks:`Edited note details, created version ${M}.`,additionalConditions:C};o.versions||(o.versions=[]),o.versions.push(it),o.subject=p,o.projectName=g,o.estimatedBudget=b,o.budgetHead=x,o.description=k,o.purpose=v,o.background=y,o.justification=S,o.benefits=_,o.additionalConditions=C,o.auditLogs||(o.auditLogs=[]),o.auditLogs.push({user:t.name,role:t.role,date:R,time:W,ip:"10.2.14.99",action:`Created new version ${M}`,previousValue:E,newValue:M}),H(t.name,`Edited Note Sheet for File ${o.id} (Version ${M})`,"Success"),Tt=!1,Ot="latest",T(`Note details saved successfully as Version ${M.replace("v","")}`),ys(o),Z()},window.actionApprovalWorkspace=p=>{var _,C;if(!o)return;const g=document.getElementById("workspace-remarks-textarea"),b=(g==null?void 0:g.value.trim())||"";if(p!=="Keep Pending"&&!b){T("Official remarks are mandatory for this action.");return}const x=new Date,k=x.toISOString().substring(0,10),v=x.toTimeString().substring(0,5),y=`${k} ${v}`,S=((C=(_=o.versions)==null?void 0:_[o.versions.length-1])==null?void 0:C.version)||"v1.0";if(p==="Keep Pending"){o.status="Pending with Current Officer",o.workflowStatus&&(o.workflowStatus[t.role]="Pending"),o.approvalHistory||(o.approvalHistory=[]),o.approvalHistory.push({officerName:t.name,role:t.role,department:o.department,action:"Keep Pending",remarks:b||"Review in progress. Kept pending.",dateTime:y,status:"Pending",versionNumber:S}),o.auditLogs||(o.auditLogs=[]),o.auditLogs.push({user:t.name,role:t.role,date:k,time:v,ip:"10.2.14.99",action:"Review Kept Pending",previousValue:o.status,newValue:"Pending with Current Officer"}),H(t.name,`Kept review pending for File ${o.id}`,"Success"),T("File status marked as Pending. You can continue reviewing later."),ys(o),Z();return}s.innerHTML,s.innerHTML=`
      <div class="flex flex-col items-center justify-center py-20 space-y-4">
        <div class="w-10 h-10 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin"></div>
        <p class="text-xs font-bold text-slate-800 uppercase tracking-widest animate-pulse">Verifying e-Sign Credentials & Cryptographic Ledger...</p>
      </div>
    `,setTimeout(()=>{if(p==="Approve"||p==="Forward"){const E=Yu(o.currentCustodian);if(o.workflowStatus&&(o.workflowStatus[t.role]="Approved",E!=="Approved / Closed"&&(o.workflowStatus[E]="Pending")),o.approvalHistory||(o.approvalHistory=[]),o.approvalHistory.push({officerName:t.name,role:t.role,department:o.department,action:p==="Approve"?"Approved & Signed":"Forwarded without edits",remarks:b,dateTime:y,status:"Approved",versionNumber:S}),o.notes.push({writer:`${t.role} (${t.name})`,text:b,date:y}),o.currentCustodian=E,E==="Approved / Closed"){o.status="Approved / Closed";const M=`PRJ-2026-${o.id.split("-").pop()}`,P={id:M,name:o.projectName||o.subject,department:o.department,zone:o.zone||"Zone-3 (Secunderabad)",projectType:"General Infrastructure Work",status:"Planning",startDate:k,endDate:"2027-12-31",officerInCharge:"Er. R. Sharma",progress:0,budget:o.estimatedBudget||12e6,spent:0,description:o.description||o.subject,lastUpdated:`${k} 10:00`};w.projects.unshift(P),_t[M]||(_t[M]=[]),_t[M].unshift({id:`DOC-SAN-${o.id.split("-").pop()}`,name:`Administrative_Sanction_Order_${o.id.replace(/-/g,"_")}.pdf`,type:"pdf",uploadedBy:"Sri M. Dana Kishore, IAS",uploadedDate:k,version:"v1.0",status:"Approved",size:"1.8 MB",category:"Administrative Sanctions"}),w.workOrders.unshift({id:`WO-${o.id.split("-").pop()}`,projectId:M,title:`Work Order for ${o.projectName}`,vendor:"Pending Bid Selection",amount:o.estimatedBudget||12e6,currentStage:"Tendering",stageHistory:{Requirement:k},updates:[]}),w.notifications.unshift({id:Date.now(),title:`Project Sanctioned: ${o.projectName}`,text:`Administrative sanction order issued for File ${o.id} with budget Rs. ${(o.estimatedBudget||0).toLocaleString("en-IN")}`,time:"Just now",read:!1}),w.auditLogs.unshift({id:`AUD-${Math.floor(1e3+Math.random()*9e3)}`,user:t.name,action:`Granted Administrative Sanction for File ${o.id} and created Project ${M}`,date:k,time:v,ip:"10.2.14.99",status:"Success"}),T("Sanction Granted! Project created and registered under active directory.")}else o.status="Approved & Forwarded",T(`File successfully approved and routed to ${E}.`);o.auditLogs||(o.auditLogs=[]),o.auditLogs.push({user:t.name,role:t.role,date:k,time:v,ip:"10.2.14.99",action:"Approved & Forwarded",previousValue:o.currentCustodian,newValue:E}),H(t.name,`Approved & Forwarded File ${o.id} to ${E}`,"Success")}else if(p==="Reject")o.workflowStatus&&(o.workflowStatus[t.role]="Rejected"),o.approvalHistory||(o.approvalHistory=[]),o.approvalHistory.push({officerName:t.name,role:t.role,department:o.department,action:"Rejected proposal",remarks:b,dateTime:y,status:"Rejected",versionNumber:S}),o.notes.push({writer:`${t.role} (${t.name})`,text:`REJECTED: ${b}`,date:y}),o.status="Rejected",o.currentCustodian=o.creatorRole||"Senior Assistant",o.auditLogs||(o.auditLogs=[]),o.auditLogs.push({user:t.name,role:t.role,date:k,time:v,ip:"10.2.14.99",action:"Rejected File",previousValue:"Pending Review",newValue:"Rejected"}),H(t.name,`Rejected File ${o.id}`,"Success"),T(`File ${o.id} has been marked as Rejected.`);else if(p==="Return"){const E=Ju(o.currentCustodian);o.workflowStatus&&(o.workflowStatus[t.role]="Returned",o.workflowStatus[E]="Pending"),o.approvalHistory||(o.approvalHistory=[]),o.approvalHistory.push({officerName:t.name,role:t.role,department:o.department,action:"Returned for Correction",remarks:b,dateTime:y,status:"Returned",versionNumber:S}),o.notes.push({writer:`${t.role} (${t.name})`,text:`RETURNED WITH REMARKS: ${b}`,date:y}),o.status="Returned",o.currentCustodian=E,o.auditLogs||(o.auditLogs=[]),o.auditLogs.push({user:t.name,role:t.role,date:k,time:v,ip:"10.2.14.99",action:"Returned File",previousValue:o.currentCustodian,newValue:E}),H(t.name,`Returned File ${o.id} to ${E}`,"Success"),T(`File returned for correction to ${E}.`)}o.lastUpdated=k,ys(o),kt(),Z()},1500)}}function Xu(){const s=document.getElementById("reports-view-container");if(!s)return;s.innerHTML=`
    <!-- Top Statistics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div class="bg-white border border-slate-200 rounded-md p-5 flex flex-col justify-between shadow-xs">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Total Sanctioned Outlay</span>
        <span class="text-lg font-extrabold text-slate-900 mt-2 font-mono">Rs. 33.15 Cr</span>
      </div>
      <div class="bg-white border border-slate-200 rounded-md p-5 flex flex-col justify-between shadow-xs">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Released Expenditure</span>
        <span class="text-lg font-extrabold text-[#2563EB] mt-2 font-mono">Rs. 16.35 Cr</span>
      </div>
      <div class="bg-white border border-slate-200 rounded-md p-5 flex flex-col justify-between shadow-xs">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Average Project Progress</span>
        <span class="text-lg font-extrabold text-emerald-600 mt-2 font-mono">61.8%</span>
      </div>
      <div class="bg-white border border-slate-200 rounded-md p-5 flex flex-col justify-between shadow-xs">
        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Clearances Cleared</span>
        <span class="text-lg font-extrabold text-indigo-700 mt-2 font-mono">92%</span>
      </div>
    </div>

    <!-- Reports engine controls -->
    <div class="bg-white border border-slate-200 rounded-md p-4 mb-6 flex flex-wrap justify-between items-center gap-4">
      <div>
        <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">GHMC MIS Reporting Engine</h4>
        <p class="text-[9px] text-slate-450 mt-1 uppercase font-semibold">Generate and download official PDF/Excel audit outlays</p>
      </div>
      <div class="flex gap-2 font-bold">
        <button onclick="alert('Downloading Department Summary Outlay PDF...')" class="bg-white hover:bg-slate-50 text-slate-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded border border-slate-200 cursor-pointer">
          Download PDF Summary
        </button>
        <button onclick="alert('Exporting Budget Performance Excel...')" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded cursor-pointer">
          Export Excel Report
        </button>
      </div>
    </div>

    <div id="reports-charts-wrapper" class="space-y-6"></div>
  `;const t=document.getElementById("reports-charts-wrapper");t&&Uu(t)}function Js(){const s=document.getElementById("notifications-view-container");if(!s)return;const t=w.notifications;s.innerHTML=`
    <div class="bg-white border border-slate-200 rounded-md p-6 max-w-4xl space-y-6">
      <div class="flex justify-between items-center border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Alert & System Notifications</h3>
          <p class="text-[9px] text-slate-400 mt-1 uppercase font-mono">Real-time eOffice and ERP transaction ledger events</p>
        </div>
        <button onclick="markAllNotificationsRead()" class="text-[#2563EB] hover:text-[#1D4ED8] text-[10px] font-bold cursor-pointer uppercase tracking-wider">
          Mark All As Read
        </button>
      </div>

      <div class="divide-y divide-slate-100 font-semibold">
        ${t.map(e=>`
          <div class="py-4 flex justify-between items-start gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full ${e.read?"bg-slate-300":"bg-[#2563EB] animate-pulse"}"></span>
                <h4 class="text-xs font-bold text-slate-800">${e.title}</h4>
                ${e.read?"":'<span class="bg-blue-50 text-[#2563EB] text-[8px] font-bold px-1 rounded uppercase tracking-wider border border-blue-100">New</span>'}
              </div>
              <p class="text-xs text-slate-500 font-semibold pl-3.5 leading-relaxed">${e.text}</p>
              <span class="text-[9px] text-slate-400 font-mono block pl-3.5">${e.time}</span>
            </div>
            <div class="flex gap-2 font-bold">
              ${e.read?"":`<button onclick="markNotificationRead(${e.id})" class="text-xs text-slate-400 hover:text-slate-700 font-bold cursor-pointer" title="Mark as read">✓</button>`}
              <button onclick="deleteNotification(${e.id})" class="text-xs text-rose-450 hover:text-rose-600 font-bold cursor-pointer" title="Delete notification">✕</button>
            </div>
          </div>
        `).join("")}
        ${t.length===0?'<div class="text-center text-xs text-slate-450 py-8 italic">No notifications present.</div>':""}
      </div>
    </div>
  `}let Ee="";function ka(){const s=document.getElementById("audit-logs-container");if(!s)return;const t=w.auditLogs.filter(i=>i.user.toLowerCase().includes(Ee)||i.action.toLowerCase().includes(Ee)||i.id.toLowerCase().includes(Ee));s.innerHTML=`
    <div class="bg-white border border-slate-200 rounded-md p-6 space-y-6">
      <div class="flex flex-wrap justify-between items-center gap-4 border-b border-slate-100 pb-4">
        <div>
          <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Security Auditing Ledger</h3>
          <p class="text-[9px] text-slate-400 mt-1 uppercase font-mono">Immutable cryptographic transaction logs and IP nodes</p>
        </div>
        
        <div class="w-64 border border-slate-200 rounded-md flex items-center bg-slate-50/50 px-2.5 py-1">
          <input type="text" id="audit-search-input" class="w-full text-xs text-slate-800 bg-transparent outline-none font-medium" placeholder="Filter by User or Action..." value="${Ee}">
        </div>
      </div>

      <div class="overflow-x-auto font-semibold">
        <table class="w-full text-xs text-left border-collapse">
          <thead>
            <tr class="bg-slate-50 border-b border-slate-100 text-[9px] text-slate-400 font-bold uppercase tracking-wider">
              <th class="py-2.5 px-3">Log ID</th>
              <th class="py-2.5 px-3">Operator / Role</th>
              <th class="py-2.5 px-3">Transaction Details</th>
              <th class="py-2.5 px-3">Timestamp</th>
              <th class="py-2.5 px-3">Node IP</th>
              <th class="py-2.5 px-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            ${t.map(i=>`
              <tr class="hover:bg-slate-50/50">
                <td class="py-3 px-3 font-mono font-bold text-slate-400">${i.id}</td>
                <td class="py-3 px-3 text-slate-850 font-bold">${i.user}</td>
                <td class="py-3 px-3 text-slate-600 font-semibold">${i.action}</td>
                <td class="py-3 px-3 font-mono text-[10px] text-slate-500">${i.date} ${i.time}</td>
                <td class="py-3 px-3 font-mono text-[10px] text-slate-500">${i.ip}</td>
                <td class="py-3 px-3 text-right">
                  <span class="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                    ${i.status}
                  </span>
                </td>
              </tr>
            `).join("")}
            ${t.length===0?'<tr><td colspan="6" class="py-6 text-center text-slate-450 italic">No audit records found matching query.</td></tr>':""}
          </tbody>
        </table>
      </div>
    </div>
  `;const e=document.getElementById("audit-search-input");e==null||e.addEventListener("input",()=>{Ee=e.value.trim().toLowerCase(),ka()})}function ts(){const s=document.getElementById("navbar-pending-approvals-text"),t=w.currentUser;if(s&&t){const e=w.eOfficeFiles.filter(o=>o.currentCustodian===t.role&&o.status!=="Approved / Closed"&&o.status!=="Rejected").length,i=t.role==="Finance Officer"?w.bills.filter(o=>o.status!=="Paid").length:0,n=e+i;s.textContent=`${n} Pending`}Ui()}function Te(){const s=document.getElementById("quick-action-modal");s&&s.classList.add("hidden")}window.closeQuickActionModal=Te;window.openQuickActionModal=s=>{var r;const t=document.getElementById("quick-action-modal");if(!t)return;let e="";s==="file"?e=`
      <form id="quick-file-form" class="space-y-4">
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Select Project Link</label>
          <select id="quick-file-project" required class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-700 outline-none">
            ${w.projects.map(l=>`<option value="${l.id}">${l.id} - ${l.name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Subject Matter / File Name</label>
          <input type="text" id="quick-file-subject" required placeholder="Enter administrative sanction subject..." class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-800 outline-none">
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Department Division</label>
          <input type="text" id="quick-file-dept" required placeholder="e.g. Information Technology Division" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-800 outline-none" value="${((r=w.currentUser)==null?void 0:r.role)==="Vendor"?"External Partner":"Engineering Wing"}">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Initial Priority</label>
            <select id="quick-file-priority" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-700 outline-none">
              <option value="Normal">Normal Priority</option>
              <option value="High">High Priority</option>
            </select>
          </div>
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Send to Desk</label>
            <select id="quick-file-custodian" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-700 outline-none">
              ${rt.map(l=>`<option value="${l}">${l}</option>`).join("")}
            </select>
          </div>
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Initial Note Sheet Remark</label>
          <textarea id="quick-file-remark" required placeholder="Write initial proposal/findings note sheet details here..." class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-800 h-20 outline-none"></textarea>
        </div>
        <div class="flex justify-end gap-2 border-t border-slate-100 pt-4 font-bold">
          <button type="button" onclick="closeQuickActionModal()" class="px-4 py-1.5 border border-slate-200 hover:border-slate-350 text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider rounded cursor-pointer">Cancel</button>
          <button type="submit" class="px-4 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer">Dispatch File</button>
        </div>
      </form>
    `:s==="note"?e=`
      <form id="quick-note-form" class="space-y-4">
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Select Target eOffice File</label>
          <select id="quick-note-file" required class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-700 outline-none">
            ${w.eOfficeFiles.map(l=>`<option value="${l.id}">${l.id} - ${l.subject}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Note Sheet Remark Description</label>
          <textarea id="quick-note-text" required placeholder="Write official note remark to sign and attach to file..." class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-800 h-32 outline-none"></textarea>
        </div>
        <div class="flex justify-end gap-2 border-t border-slate-100 pt-4 font-bold">
          <button type="button" onclick="closeQuickActionModal()" class="px-4 py-1.5 border border-slate-200 hover:border-slate-350 text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider rounded cursor-pointer">Cancel</button>
          <button type="submit" class="px-4 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer">Sign & Append</button>
        </div>
      </form>
    `:s==="workorder"?e=`
      <form id="quick-wo-form" class="space-y-4">
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Select Project Link</label>
          <select id="quick-wo-project" required class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-700 outline-none">
            ${w.projects.map(l=>`<option value="${l.id}">${l.id} - ${l.name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Work Contract Title</label>
          <input type="text" id="quick-wo-title" required placeholder="e.g. Pile foundation works for metro spans" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-800 outline-none">
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Vendor Partner Organization</label>
          <input type="text" id="quick-wo-vendor" required placeholder="e.g. Aaditya Construction Group" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-800 outline-none">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Contract Amount (INR)</label>
            <input type="number" id="quick-wo-amount" required placeholder="e.g. 5000000" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-800 outline-none">
          </div>
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Initial Stage</label>
            <select id="quick-wo-stage" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-700 outline-none">
              <option value="Work Order">Work Order Issued</option>
              <option value="Vendor Execution">Vendor Execution</option>
            </select>
          </div>
        </div>
        <div class="flex justify-end gap-2 border-t border-slate-100 pt-4 font-bold">
          <button type="button" onclick="closeQuickActionModal()" class="px-4 py-1.5 border border-slate-200 hover:border-slate-350 text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider rounded cursor-pointer">Cancel</button>
          <button type="submit" class="px-4 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer">Disburse Contract</button>
        </div>
      </form>
    `:e=`
      <form id="quick-doc-form" class="space-y-4">
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Select Project Context</label>
          <select id="quick-doc-project" required class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-700 outline-none">
            ${w.projects.map(l=>`<option value="${l.id}">${l.id} - ${l.name}</option>`).join("")}
          </select>
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Document Title / Name</label>
          <input type="text" id="quick-doc-name" required placeholder="e.g. Soil load capacity certification report.pdf" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-800 outline-none">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Category Classification</label>
            <select id="quick-doc-category" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-700 outline-none">
              <option value="Administrative Sanctions">Administrative Sanction</option>
              <option value="Technical Estimates">Technical Estimate</option>
              <option value="Structural Drawings">Structural Drawing</option>
              <option value="Audit Clearance">Audit Clearance</option>
            </select>
          </div>
          <div>
            <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Version</label>
            <input type="text" id="quick-doc-version" required value="v1.0" class="w-full bg-white border border-slate-200 rounded p-2 text-xs text-slate-800 outline-none">
          </div>
        </div>
        <div>
          <label class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">File Attachment (Mock Drag-Drop)</label>
          <div class="border-2 border-dashed border-slate-200 rounded-md p-4 text-center hover:bg-slate-50 transition-all cursor-pointer">
            <span class="text-xs text-slate-450 font-semibold block">Drag PDF/Excel attachment files here</span>
            <span class="text-[9px] text-slate-400 mt-1 uppercase font-mono block">Max size: 25MB</span>
          </div>
        </div>
        <div class="flex justify-end gap-2 border-t border-slate-100 pt-4 font-bold">
          <button type="button" onclick="closeQuickActionModal()" class="px-4 py-1.5 border border-slate-200 hover:border-slate-350 text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider rounded cursor-pointer">Cancel</button>
          <button type="submit" class="px-4 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer">Upload & Index</button>
        </div>
      </form>
    `,t.innerHTML=`
    <div class="bg-white rounded-md shadow-xl border border-slate-200 w-full max-w-lg p-6 space-y-4 animate-toast-slide-in relative">
      <button onclick="closeQuickActionModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-650 text-sm font-bold cursor-pointer">✕</button>
      <div>
        <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Quick Action Interface</h3>
        <p class="text-[9px] text-slate-400 mt-0.5 uppercase font-mono">Create, link, and disburse records securely</p>
      </div>
      <div class="border-t border-slate-100 pt-4">
        ${e}
      </div>
    </div>
  `,t.classList.remove("hidden");const i=document.getElementById("quick-file-form");i==null||i.addEventListener("submit",l=>{var x,k,v;l.preventDefault();const d=document.getElementById("quick-file-project").value,c=document.getElementById("quick-file-subject").value,u=document.getElementById("quick-file-dept").value,h=document.getElementById("quick-file-priority").value,f=document.getElementById("quick-file-custodian").value,m=document.getElementById("quick-file-remark").value,p=`FILE-2026-${d.split("-")[1]}-${Math.floor(Math.random()*900)+100}`,g=new Date,b=g.toISOString().substring(0,10)+" "+g.toTimeString().substring(0,5);w.eOfficeFiles.unshift({id:p,projectId:d,subject:c,department:u,currentCustodian:f,priority:h,status:"Pending Approval",attachments:[],notes:[{writer:`${(x=w.currentUser)==null?void 0:x.role} (${(k=w.currentUser)==null?void 0:k.name})`,text:m,date:b}],lastUpdated:g.toISOString().substring(0,10)}),H(((v=w.currentUser)==null?void 0:v.name)||"Unknown",`Created eOffice File ${p} link under ${d}`,"Success"),T(`eOffice File ${p} successfully created.`),Te(),ct(),ts()});const n=document.getElementById("quick-note-form");n==null||n.addEventListener("submit",l=>{var h,f,m;l.preventDefault();const d=document.getElementById("quick-note-file").value,c=document.getElementById("quick-note-text").value,u=w.eOfficeFiles.find(p=>p.id===d);if(u){const p=new Date,g=p.toISOString().substring(0,10)+" "+p.toTimeString().substring(0,5);u.notes.push({writer:`${(h=w.currentUser)==null?void 0:h.role} (${(f=w.currentUser)==null?void 0:f.name})`,text:c,date:g}),u.lastUpdated=p.toISOString().substring(0,10),H(((m=w.currentUser)==null?void 0:m.name)||"Unknown",`Appended note to File ${d}`,"Success"),T("Note appended successfully.")}Te(),ct()});const o=document.getElementById("quick-wo-form");o==null||o.addEventListener("submit",l=>{var b;l.preventDefault();const d=document.getElementById("quick-wo-project").value,c=document.getElementById("quick-wo-title").value,u=document.getElementById("quick-wo-vendor").value,h=parseFloat(document.getElementById("quick-wo-amount").value),f=document.getElementById("quick-wo-stage").value,m=`WO-${Math.floor(Math.random()*9e4)+1e4}`,g=new Date().toISOString().substring(0,10);w.workOrders.unshift({id:m,projectId:d,title:c,vendor:u,amount:h,currentStage:f,stageHistory:{Requirement:g,"Work Order":g},updates:[{date:g,text:"Work Order contract initiated."}]}),H(((b=w.currentUser)==null?void 0:b.name)||"Unknown",`Created Work Order ${m} for ${u}`,"Success"),T(`Work Order ${m} successfully created.`),Te(),ct()});const a=document.getElementById("quick-doc-form");a==null||a.addEventListener("submit",l=>{var h;l.preventDefault();const d=document.getElementById("quick-doc-project").value,c=document.getElementById("quick-doc-name").value;document.getElementById("quick-doc-category").value,document.getElementById("quick-doc-version").value,new Date().toISOString().substring(0,10),H(((h=w.currentUser)==null?void 0:h.name)||"Unknown",`Uploaded Document "${c}" under project ${d}`,"Success"),T(`Document attachment "${c}" uploaded successfully.`),Te(),ct()})};window.openHelpGuide=()=>{const s=document.getElementById("quick-action-modal");s&&(s.innerHTML=`
    <div class="bg-white rounded-md shadow-xl border border-slate-200 w-full max-w-2xl p-6 space-y-6 animate-toast-slide-in relative max-h-[90vh] overflow-y-auto">
      <button onclick="closeQuickActionModal()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-bold cursor-pointer">✕</button>
      
      <div class="border-b border-slate-100 pb-3">
        <h3 class="text-xs font-bold text-slate-900 uppercase tracking-wider">GHMC Unified Digital Portal User Guide</h3>
        <p class="text-[9px] text-slate-450 mt-0.5 uppercase font-mono">Standard Operating Procedures & Role Permission Matrices</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start font-semibold">
        <!-- left menu tabs -->
        <div class="space-y-1 md:col-span-1">
          <button id="guide-tab-roles" onclick="switchGuideTab('roles')" class="w-full text-left px-3 py-2 text-xs font-bold rounded hover:bg-slate-50 text-slate-700 bg-slate-100 border-l-2 border-[#2563EB]">Role Permissions</button>
          <button id="guide-tab-flow" onclick="switchGuideTab('flow')" class="w-full text-left px-3 py-2 text-xs font-bold rounded hover:bg-slate-50 text-slate-500">eOffice File Flow</button>
          <button id="guide-tab-erp" onclick="switchGuideTab('erp')" class="w-full text-left px-3 py-2 text-xs font-bold rounded hover:bg-slate-50 text-slate-500">ERP & Finance Integration</button>
        </div>

        <!-- right pane content -->
        <div id="guide-pane-content" class="md:col-span-2 text-xs text-slate-600 space-y-4 leading-relaxed font-semibold">
          <!-- Roles tab default -->
          <div class="space-y-3">
            <h4 class="font-bold text-slate-800">System Role Permission Matrix</h4>
            <ul class="list-disc pl-4 space-y-1.5 text-slate-550">
              <li><strong class="text-slate-700">Commissioner:</strong> Full administrative clearance authority, final note sheet approval, transaction audit access, and global MIS reports download.</li>
              <li><strong class="text-slate-700">Additional Commissioner:</strong> General workspace review, file forwarding/clearance authority, and technical log auditing.</li>
              <li><strong class="text-slate-700">Executive Engineer:</strong> Technical proposal creation, structural drawings upload, milestone execution certification, and technical note submissions.</li>
              <li><strong class="text-slate-700">Finance Officer:</strong> Head of Account ledger mapping, payment voucher release, budget performance monitoring, and financial statement audit.</li>
              <li><strong class="text-slate-700">Vendor Partner:</strong> Workspace timeline overview, payment status verification, invoice submission, and progress remark logs.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex justify-end border-t border-slate-100 pt-4 font-bold">
        <button onclick="closeQuickActionModal()" class="px-4 py-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider rounded cursor-pointer">Close Guide</button>
      </div>
    </div>
  `,s.classList.remove("hidden"),window.switchGuideTab=t=>{const e=document.getElementById("guide-tab-roles"),i=document.getElementById("guide-tab-flow"),n=document.getElementById("guide-tab-erp"),o=document.getElementById("guide-pane-content");if(!o)return;[e,i,n].forEach(r=>{r&&(r.className="w-full text-left px-3 py-2 text-xs font-bold rounded hover:bg-slate-50 text-slate-500")});const a=document.getElementById(`guide-tab-${t}`);a&&(a.className="w-full text-left px-3 py-2 text-xs font-bold rounded hover:bg-slate-50 text-slate-700 bg-slate-100 border-l-2 border-[#2563EB]"),t==="roles"?o.innerHTML=`
        <div class="space-y-3">
          <h4 class="font-bold text-slate-800">System Role Permission Matrix</h4>
          <ul class="list-disc pl-4 space-y-1.5 text-slate-550">
            <li><strong class="text-slate-700">Commissioner:</strong> Full administrative clearance authority, final note sheet approval, transaction audit access, and global MIS reports download.</li>
            <li><strong class="text-slate-700">Additional Commissioner:</strong> General workspace review, file forwarding/clearance authority, and technical log auditing.</li>
            <li><strong class="text-slate-700">Executive Engineer:</strong> Technical proposal creation, structural drawings upload, milestone execution certification, and technical note submissions.</li>
            <li><strong class="text-slate-700">Finance Officer:</strong> Head of Account ledger mapping, payment voucher release, budget performance monitoring, and financial statement audit.</li>
            <li><strong class="text-slate-700">Vendor Partner:</strong> Workspace timeline overview, payment status verification, invoice submission, and progress remark logs.</li>
          </ul>
        </div>
      `:t==="flow"?o.innerHTML=`
        <div class="space-y-3">
          <h4 class="font-bold text-slate-800">eOffice Note Sheet Flow Standard</h4>
          <p class="text-slate-500">Every administrative file follows a rigid hierarchy to guarantee accountability and digital audit logs:</p>
          <div class="flex flex-col gap-2 border-l border-slate-200 pl-4 mt-2">
            <div>
              <span class="text-[9px] font-bold text-slate-400 block uppercase">Step 1: Senior Assistant</span>
              <span class="font-semibold text-slate-705">Initiates file proposal note mapping required land survey numbers or cost estimation details.</span>
            </div>
            <div>
              <span class="text-[9px] font-bold text-slate-400 block uppercase">Step 2: Executive Engineer</span>
              <span class="font-semibold text-slate-705">Reviews technical specifications and attaches loadcapacity calculations.</span>
            </div>
            <div>
              <span class="text-[9px] font-bold text-slate-400 block uppercase">Step 3: Joint/Addl. Commissioner</span>
              <span class="font-semibold text-slate-705">Verifies project alignment with public work directives and forwards to desk of Commissioner.</span>
            </div>
            <div>
              <span class="text-[9px] font-bold text-slate-400 block uppercase">Step 4: Commissioner</span>
              <span class="font-semibold text-slate-705">Grants final administrative signature, officially approving proposal for execution.</span>
            </div>
          </div>
        </div>
      `:o.innerHTML=`
        <div class="space-y-3">
          <h4 class="font-bold text-slate-800">ERP & Financial Release Protocol</h4>
          <p class="text-slate-500">Payments to contractors are linked directly to milestone progress verified by the Executive Engineer:</p>
          <ol class="list-decimal pl-4 space-y-1.5 text-slate-550">
            <li><strong class="text-slate-700">Milestone Completed:</strong> Vendor uploads work invoice under work order panel.</li>
            <li><strong class="text-slate-700">Technical Audit:</strong> Executive Engineer checks and signs the completion report.</li>
            <li><strong class="text-slate-700">Budget Head Mapping:</strong> CFO maps the bill to the corresponding Head of Account (ensuring sufficient balance outlay).</li>
            <li><strong class="text-slate-700">Payment Released:</strong> CFO releases treasury fund disbursement. Payment status changes to "Paid".</li>
          </ol>
        </div>
      `})};window.markNotificationRead=s=>{var e;const t=w.notifications.find(i=>i.id===s);t&&(t.read=!0,H(((e=w.currentUser)==null?void 0:e.name)||"Unknown",`Marked notification "${t.title}" as read`,"Success"),T("Notification marked as read."),ts(),Qe(),w.activeView==="notifications-view"&&Js())};window.markAllNotificationsRead=()=>{var s;w.notifications.forEach(t=>t.read=!0),H(((s=w.currentUser)==null?void 0:s.name)||"Unknown","Marked all notifications as read","Success"),T("All notifications marked as read."),ts(),Qe(),w.activeView==="notifications-view"&&Js()};window.deleteNotification=s=>{var e;const t=w.notifications.findIndex(i=>i.id===s);if(t!==-1){const i=w.notifications[t].title;w.notifications.splice(t,1),H(((e=w.currentUser)==null?void 0:e.name)||"Unknown",`Deleted notification "${i}"`,"Success"),T("Notification deleted."),ts(),Qe(),w.activeView==="notifications-view"&&Js()}};
