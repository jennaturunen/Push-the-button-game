!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";const n=document.querySelector(".circle"),o=document.querySelector(".scores"),s=document.querySelector(".countTillWin"),l=document.querySelector(".continueGame"),c=document.querySelector(".continueText"),a=document.querySelector(".continueBtn"),i=document.querySelector(".endBtn"),u=document.querySelector(".mainGame"),y=document.querySelector(".winningSection"),d=document.querySelector(".congrats"),f=document.querySelector(".loserSection"),m=document.querySelector(".listOfLosers"),g=document.querySelector(".restartGameBtn"),p=document.querySelector(".startGameBtn"),S=document.querySelector(".addPlayersSection"),M=document.querySelector("form"),b=document.querySelector(".whoIsNext");let L,T,H=[],h=[],x=0;p.addEventListener("click",()=>{const e=document.querySelectorAll(".players");for(const t of e)if(""!==t.value){const e={};e.name=t.value,e.score=20,H.push(e)}H.length>=2&&(u.style.display="flex",S.style.display="none",f.style.display="flex",localStorage.setItem("players",JSON.stringify(H)),localStorage.setItem("counter",x),localStorage.setItem("losers",JSON.stringify(h)),M.reset(),O())});const O=()=>{const e=JSON.parse(localStorage.getItem("players")),t=localStorage.getItem("counter"),r=JSON.parse(localStorage.getItem("losers"));if(e){H=e,x=parseInt(t),null!==r&&(h=r),T=H[Math.floor(Math.random()*H.length)],b.innerHTML=`<strong>${T.name}</strong> it is your turn to press the button!`;const n=10-x%10;s.innerHTML=`Presses left to next extra points: ${n} `,S.style.display="none",u.style.display="flex",f.style.display="flex"}for(const e of H)o.innerHTML+=`<br><strong>${e.name}</strong> score: ${e.score}<br>`;if(h)for(const e of h)m.innerHTML+=`${e.name}<br>`};O();n.addEventListener("click",()=>{x++,localStorage.setItem("counter",x),o.innerHTML="",T.score--,L=T,x%500==0?T.score+=250:x%100==0?T.score+=40:x%10==0&&(T.score+=5),localStorage.setItem("players",JSON.stringify(H)),0===T.score&&(u.style.display="none",l.style.display="flex",c.innerHTML=`Oh no <strong>${T.name}</strong>! Your game ended. Would you like to restart or end the game?`);for(const e of H)o.innerHTML+=`<br><strong>${e.name}</strong> score: ${e.score}<br>`;const e=10-x%10;s.innerHTML=`Presses left to next extra points: ${e} `,T=H[Math.floor(Math.random()*H.length)],b.innerHTML=`<strong>${T.name}</strong> it is your turn to press the button!`});a.addEventListener("click",()=>{u.style.display="flex",l.style.display="none",L.score=20,o.innerHTML="";for(const e of H)o.innerHTML+=`<br><strong>${e.name}</strong> score: ${e.score}<br>`;localStorage.setItem("players",JSON.stringify(H))}),i.addEventListener("click",()=>{u.style.display="flex",l.style.display="none",h.push(L),H=H.filter(e=>e.score>=1),localStorage.setItem("losers",JSON.stringify(h)),localStorage.setItem("players",JSON.stringify(H)),T=H[Math.floor(Math.random()*H.length)],b.innerHTML=`<strong>${T.name}</strong> it is your turn to press the button!`,o.innerHTML="",m.innerHTML="";for(const e of H)o.innerHTML+=`<br><strong>${e.name}</strong> score: ${e.score}<br>`;for(const e of h)m.innerHTML+=`${e.name}<br>`;1===H.length&&(y.style.display="flex",u.style.display="none",f.style.display="none",d.innerHTML=`Congratulations <strong>${H[0].name}</strong>, YOU WON THE GAME!!`,h=[],H=[],x=0,localStorage.setItem("players",H),localStorage.setItem("losers",h),localStorage.setItem("counter",x))});g.addEventListener("click",()=>{S.style.display="flex",y.style.display="none",o.innerHTML="",m.innerHTML="",s.innerHTML=""})}]);