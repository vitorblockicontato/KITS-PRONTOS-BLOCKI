
function renderInput(){
 const disabled=val('iState')==='disabled'?'disabled':'';
 const html=`<label class="input-demo" style="--bg:${val('iBg','#111827')};--text:${val('iText','#fff')};--accent:${val('iAccent','#7c3aed')};--bd:${val('iBorder','1')}px;--radius:${val('iRadius','16')}px;--shadow:${val('iShadow','30')}px"><span>${val('iLabel','E-mail')}</span><div class="field"><span>${val('iIcon','✉️')}</span><input type="${val('iType','email')}" placeholder="${val('iPlaceholder','seuemail@exemplo.com')}" ${disabled}></div><small>${val('iHelp','Digite um e-mail válido.')}</small></label>`;
 document.getElementById('inputPreview').innerHTML=html; setCode('iCode', html);
}
bind(['iLabel','iPlaceholder','iType','iIcon','iHelp','iBg','iText','iAccent','iBorder','iRadius','iShadow','iState','iStyle','iFocus'],renderInput);
document.getElementById('randomInput')?.addEventListener('click',()=>{iLabel.value='Buscar';iType.value='search';iIcon.value='🔎';renderInput();});
