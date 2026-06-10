
function renderDashboard(){
 const metrics=val('dMetrics','Vendas, Usuários, Receita, Pedidos').split(',').map((m,i)=>`<div><strong>${[128,842,'R$9k',57][i]||99}</strong><span>${m.trim()}</span></div>`).join('');
 const html=`<section class="dashboard-demo" style="--bg:${val('dBg','#0b1220')};--accent:${val('dAccent','#7c3aed')};--radius:${val('radius','24')}px;--shadow:${val('shadow','40')}px"><h2>${val('dTitle','Painel de Controle')}</h2><div class="metrics">${metrics}</div><div class="bars"><i></i><i></i><i></i><i></i></div><div class="table">${val('dTable','Últimos pedidos')}</div></section>`;
 document.getElementById('dashPreview').innerHTML=html; setCode('dCode', html);
}
bind(['dTitle','dMetrics','dTable','dStyle','dBg','dAccent','radius','shadow','anim'],renderDashboard);
document.getElementById('randomDashboard')?.addEventListener('click',()=>{dTitle.value='Dashboard Premium';dAccent.value='#06b6d4';renderDashboard();});
