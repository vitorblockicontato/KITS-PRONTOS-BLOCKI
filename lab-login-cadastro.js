
function renderAuth(){
 const extra=val('aMode')!=='login'?'<input placeholder="Nome completo">':'';
 const terms=val('aTerms')==='yes'?'<small><input type="checkbox"> Aceito os termos</small>':'';
 const social=val('aSocial')==='yes'?'<button type="button">Continuar com Google</button>':'';
 const side=val('aVisual')==='yes'?'<div class="side"></div>':'';
 const html=`<section class="auth-demo" style="--bg:${val('aCard','#111827')};--text:${val('aText','#fff')};--accent:${val('aAccent','#7c3aed')};--radius:${val('aRadius','28')}px"><form onsubmit="event.preventDefault()"><strong>${val('aLogo','Interface Kits')}</strong><h2>${val('aTitle','Entre na sua conta')}</h2><p>${val('aSub','Acesse seus componentes favoritos.')}</p>${extra}<input placeholder="E-mail"><input placeholder="Senha" type="password">${terms}<button>${val('aBtn','Entrar agora')}</button>${social}</form>${side}</section>`;
 document.getElementById('authPreview').innerHTML=html; setCode('aCode', html);
}
bind(['aLogo','aTitle','aSub','aBtn','aMode','aSocial','aRemember','aTerms','aVisual','aBg','aCard','aText','aAccent','aRadius','aStyle','aAnim'],renderAuth);
document.getElementById('randomAuth')?.addEventListener('click',()=>{aMode.value='cadastro';aTitle.value='Crie sua conta';aAccent.value='#06b6d4';renderAuth();});
