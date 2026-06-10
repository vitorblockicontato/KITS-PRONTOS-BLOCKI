
function renderFooter(){
 const cols=val('fCols','Produtos, Empresa, Suporte').split(',').map(c=>`<div><h4>${c.trim()}</h4><a>Kits</a><br><a>Contato</a><br><a>Ajuda</a></div>`).join('');
 const html=`<footer class="footer-demo" style="--bg:${val('fBg','#0f172a')};--accent:${val('fAccent','#7c3aed')};--radius:${val('radius','24')}px;--shadow:${val('shadow','40')}px"><div class="cols"><div><h3>${val('fBrand','Interface Kits')}</h3><p>${val('fDesc','Crie componentes modernos.')}</p><input placeholder="${val('fNews','Receba novidades')}"></div>${cols}</div></footer>`;
 document.getElementById('footerPreview').innerHTML=html; setCode('fCode', html);
}
bind(['fBrand','fDesc','fCols','fLinks','fNews','fBg','fAccent','radius','shadow','anim'],renderFooter);
document.getElementById('randomFooter')?.addEventListener('click',()=>{fBrand.value='BLOCKI Kits';fAccent.value='#f59e0b';renderFooter();});
