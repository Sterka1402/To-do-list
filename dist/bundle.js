(()=>{"use strict";const t=function(t,e){(async()=>{const n=await(async t=>{try{const e=await fetch(t);if(200!==e.status)throw new Error(e.status);return e.json()}catch(t){console.log(`Error: server responded: ${t.message}`)}})(e)||[];t.innerHTML=n.map((t=>`\n      <li class="${t.done?"check-list done-list":"check-list"}" data-key="${t.id}" >\n      <img class='remove-list' src='./src/icons/trash.svg' alt="Delete">\n      ${t.text}</li>\n    `)).join(""),localStorage.setItem("list",JSON.stringify(n))})()},e=function(e,n){(async()=>{const s=(await(async t=>{try{const e=await fetch(t);if(200!==e.status)throw new Error(e.status);return e.json()}catch(t){console.log(`Error: server responded: ${t.message}`)}})(n)||[]).filter((t=>!t.done));document.querySelector(".task-counting").innerHTML=`\n    <p>${0===s.length?"No tasks today!":`You have ${s.length} tasks today!`}</p>\n    `,t(e,n)})()},n=function(t,n,s,o){(async()=>{if(""!==s.value){const t={text:s.value,done:!1};await(async(t,e)=>{const n={headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)};try{const e=await fetch(t,n);if(200!==e.status)throw new Error(e.status);return e.json()}catch(t){console.log(`Error: server responded: ${t.message}`)}})(o,t);const a=[];a.push(t),localStorage.setItem("list",JSON.stringify(a)),e(n,o),s.value=""}})()},s=function(t,n,s){let o,a=0;const r=JSON.parse(localStorage.getItem("list"))||[];if(t.target.classList.contains("check-list")&&"LI"===t.target.tagName){a=t.target.dataset.key;for(let t=0;t<r.length;t++)r[t].id==a&&(r[t].done=!r[t].done,o=r[t],localStorage.setItem("list",JSON.stringify(r)))}!function(t,n,s,o){(async()=>{await(async(t,e,n)=>{const s={headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify(e)};try{const e=await fetch(`${t}/${n}`,s);if(200!==e.status)throw new Error(e.status);return e.json()}catch(t){console.log(`Error: server responded: ${t.message}`)}})(n,s,o),e(t,n)})()}(n,s,o,a)};window.addEventListener("load",(()=>{const o=document.querySelector(".list-container"),a=document.getElementById("new-task"),r=document.getElementById("add-btn"),c="http://localhost:3000/posts";(function(){const t=document.querySelector(".current-date"),e=new Date,n=e.getDay();t.innerHTML=`\n  <h1>Hello!</h1>\n  <p>Today is ${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n]}, ${e.toLocaleDateString()}.</p>\n  `})(),e(o,c),a.addEventListener("keydown",(t=>function(t,e,s,o){13===t.keyCode&&n(0,e,s,o)}(t,o,a,c))),r.addEventListener("click",(t=>n(0,o,a,c))),o.addEventListener("click",(e=>function(e,n,s){if(e.target.classList.contains("remove-list")&&"IMG"===e.target.tagName){const o=e.target.closest("LI").dataset.key,a=JSON.parse(localStorage.getItem("list"))||[];for(let t=0;t<a.length;t++)if(a[t].id==o&&!a[t].done)return;(async()=>{await(async(t,e)=>{const n={method:"DELETE"};try{const s=await fetch(`${t}/${e}`,n);if(200!==s.status)throw new Error(s.status);return s.json()}catch(t){console.log(`Error: server responded: ${t.message}`)}})(s,o),t(n,s)})()}}(e,o,c))),o.addEventListener("click",(t=>s(t,o,c)))}))})();