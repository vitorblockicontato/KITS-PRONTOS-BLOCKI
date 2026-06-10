
function renderHero(){
 const visual=val('hVisual')==='yes'?'<div class="visual"></div>':'';
 const html=`<section class="hero-demo ${val('hAlign','left') === 'center' ? 'center' : ''}" style="--bg:${val('hBg','#111827')};--bg2:${val('hBg2','#4f46e5')};--text:${val('hText','#fff')};--accent:${val('hAccent','#06b6d4')};--height:${val('hHeight','520')}px;--radius:${val('hRadius','28')}px"><div><span>${val('hTag','Novo projeto')}</span><h2>${val('hTitle','Crie interfaces modernas')}</h2><p>${val('hSub','Monte uma seção principal profissional.')}</p><button>${val('hBtn1','Começar')}</button> <button>${val('hBtn2','Ver exemplos')}</button></div>${visual}</section>`;
 document.getElementById('heroPreview').innerHTML=html; setCode('hCode', html);
}
bind(['hTag','hTitle','hSub','hBtn1','hBtn2','hVisual','hVideo','hCards','hAlign','hBg','hBg2','hText','hAccent','hTexture','hHeight','hRadius','hAnim'],renderHero);
document.getElementById('randomHero')?.addEventListener('click',()=>{hTag.value='Lançamento';hTitle.value='Seu próximo site começa aqui';hBg2.value='#06b6d4';renderHero();});
