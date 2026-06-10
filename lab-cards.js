
function renderCard(){
 const tags=val('cTags','UI, Premium').split(',').map(t=>`<span>${t.trim()}</span>`).join(' ');
 const img=val('cImage')==='yes'?'<div class="img"></div>':'';
 const html=`<article class="card-demo ${val('cLayout')}" style="--bg:${val('cBg','#fff')};--text:${val('cText','#111827')};--accent:${val('cAccent','#7c3aed')};--bd:${val('cBorder','1')}px;--radius:${val('cRadius','26')}px;--shadow:${val('cShadow','50')}px">${img}<div><span class="badge">${val('cBadge','Premium')}</span><h3>${val('cTitle','Card moderno')}</h3><p>${val('cDesc','Use em lojas, portfólios e landing pages.')}</p><strong class="price">${val('cPrice','R$ 129')}</strong><p>${tags}</p><button>${val('cBtn','Ver detalhes')}</button></div></article>`;
 document.getElementById('cardPreview').innerHTML=html; setCode('cCode', html);
}
bind(['cImage','cBadge','cTitle','cDesc','cPrice','cBtn','cTags','cBg','cText','cAccent','cBorder','cRadius','cShadow','cLayout','cGlass','cHover','cAnim'],renderCard);
document.getElementById('randomCard')?.addEventListener('click',()=>{cBadge.value='Novo';cTitle.value='Produto premium destacado';cAccent.value='#f59e0b';renderCard();});
