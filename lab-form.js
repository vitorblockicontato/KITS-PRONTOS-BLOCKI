
function renderForm(){
 const fields=val('foFields','Nome, Email').split(',').map(f=>`<input placeholder="${f.trim()}">`).join('');
 const html=`<form class="form-demo" onsubmit="event.preventDefault()" style="--bg:${val('foBg','#fff')};--accent:${val('foAccent','#7c3aed')};--radius:${val('radius','24')}px;--shadow:${val('shadow','40')}px"><h2>${val('foTitle','Solicitar orçamento')}</h2>${fields}<button>${val('foBtn','Enviar agora')}</button></form>`;
 document.getElementById('formPreview').innerHTML=html; setCode('foCode', html);
}
bind(['foTitle','foFields','foBtn','foType','foBg','foAccent','radius','shadow','anim'],renderForm);
document.getElementById('randomForm')?.addEventListener('click',()=>{foTitle.value='Contato rápido';foFields.value='Nome, Email, Mensagem';foAccent.value='#06b6d4';renderForm();});
