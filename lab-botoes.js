
function renderButton(){
 const bg=val('bBg','#7c3aed'), bg2=val('bBg2','#06b6d4'), color=val('bColor','#fff');
 const html=`<button class="generated-btn ${val('bStyle','filled')}" style="--bg:${bg};--bg2:${bg2};--color:${color};--bd:${val('bBorder','0')}px;--radius:${val('bRadius','16')}px;--shadow:${val('bShadow','40')}px;--pad:${val('bPad','14')}px;--fs:${val('bFont','16')}px"><span>${val('bIcon','🛒')}</span>${val('bLoading')==='yes'?'Carregando...':val('bText','Comprar agora')}</button>`;
 document.getElementById('btnPreview').innerHTML=html; setCode('bCode', html);
}
bind(['bText','bIcon','bLoading','bBg','bBg2','bColor','bStyle','bBorder','bRadius','bShadow','bPad','bFont','bHover','bAnim'],renderButton);
document.getElementById('randomButton')?.addEventListener('click',()=>{bText.value='Explorar agora';bIcon.value='⚡';bStyle.value='gradient';renderButton();});
