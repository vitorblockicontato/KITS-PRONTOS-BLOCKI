
function copyCode(id, button){
    const el=document.getElementById(id);
    if(!el) return;
    copyText(el.textContent.trim(), button);
}
async function copyText(text, button){
    try{ await navigator.clipboard.writeText(text); }
    catch(e){ const area=document.createElement('textarea'); area.value=text; document.body.appendChild(area); area.select(); document.execCommand('copy'); area.remove(); }
    if(button){ const old=button.textContent; button.textContent='Copiado!'; setTimeout(()=>button.textContent=old,1100); }
}
document.addEventListener('click',e=>{const t=e.target.closest('.menu-toggle'); if(t){document.querySelector('.nav')?.classList.toggle('open');}});
function val(id, fallback=''){ return document.getElementById(id)?.value || fallback; }
function setCode(id, html){ const el=document.getElementById(id); if(el) el.textContent=html.trim(); }
function bind(ids, render){ ids.forEach(id=>document.getElementById(id)?.addEventListener('input', render)); document.addEventListener('DOMContentLoaded', render); }
