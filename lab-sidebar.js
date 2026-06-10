
function renderSidebar(){
 const links=val('sLinks','Dashboard, Produtos').split(',').map(x=>`<a href="#">${x.trim()}</a>`).join('');
 const html=`<section class="sidebar-demo" style="--bg:${val('sBg','#0b1220')};--accent:${val('sAccent','#06b6d4')};--radius:${val('radius','24')}px;--shadow:${val('shadow','40')}px"><aside><h2>${val('sLogo','AdminKit')}</h2>${links}<p>${val('sUser','Vitor Blocki')}</p></aside><main><h2>Área principal</h2><p>Conteúdo do painel com cards e relatórios.</p></main></section>`;
 document.getElementById('sidePreview').innerHTML=html; setCode('sCode', html);
}
bind(['sLogo','sLinks','sUser','sStyle','sBg','sAccent','radius','shadow','anim'],renderSidebar);
document.getElementById('randomSidebar')?.addEventListener('click',()=>{sLogo.value='StoreDash';sAccent.value='#22c55e';renderSidebar();});
