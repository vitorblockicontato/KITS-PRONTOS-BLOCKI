
function renderNavbar(){
 const links=val('nLinks','Início, Produtos, Contato').split(',').map(x=>x.trim()).filter(Boolean).map(x=>`<a href="#">${x}</a>`).join('');
 const extras=`${val('nSearch')==='yes'?'<a href="#">🔎</a>':''}${val('nCart')==='yes'?'<a href="#">🛒</a>':''}${val('nLogin')==='yes'?'<a href="#">👤</a>':''}`;
 const html=`<nav class="lab-navbar-demo" style="--nav-bg:${val('nBg','#111827')};--nav-color:${val('nColor','#fff')};--accent:${val('nAccent','#06b6d4')};--blur:${val('nBlur','14')}px;--radius:${val('nRadius','22')}px;min-height:${val('nHeight','76')}px"><strong>${val('nLogo','Interface Kits')}</strong>${links}${extras}<button>${val('nCta','Entrar')}</button></nav>`;
 document.getElementById('navPreview').innerHTML=html; setCode('nCode', html);
}
bind(['nLogo','nLinks','nSubs','nCta','nSearch','nCart','nLogin','nFixed','nMobile','nBg','nColor','nAccent','nBlur','nOpacity','nHeight','nRadius','nHover','nAnim'],renderNavbar);
document.getElementById('randomNavbar')?.addEventListener('click',()=>{nLogo.value='BLOCKI UI';nLinks.value='Home, Loja, Kits, Contato';nAccent.value='#22c55e';renderNavbar();});
