
const body=document.body,banner=document.getElementById('secretBanner'),main=document.getElementById('mainBtn'),second=document.getElementById('secondBtn'),third=document.getElementById('thirdBtn'),navBtn=document.getElementById('navSecretBtn');
function show(t){banner.textContent=t;banner.classList.add('active');setTimeout(()=>banner.classList.remove('active'),1800)}
function stars(){document.querySelector('.card-two').classList.toggle('stars');show('STAR MAGIC')}
main.onclick=stars;second.onclick=()=>{body.classList.toggle('day');show('TIME PASSES')};third.onclick=()=>{document.querySelector('.card-three').classList.toggle('mimic');show('MIMIC?')};navBtn.onclick=stars;
document.querySelectorAll('[data-nav-egg]').forEach(a=>a.onclick=e=>{e.preventDefault();show('MANA FLOW');a.style.textShadow='0 0 20px #C4B5FD';setTimeout(()=>a.style.textShadow='',700)});
document.querySelector('.card-one').onclick=()=>{document.querySelector('.card-one').classList.toggle('book');show('GRIMOIRE OPENED')};document.querySelector('.card-two').onclick=stars;document.querySelector('.card-three').onclick=()=>{document.querySelector('.card-three').classList.toggle('mimic');show('MIMIC!')};
let typed='';document.addEventListener('keydown',e=>{typed=(typed+e.key.toLowerCase()).slice(-12);if(typed.includes('zoltraak')){show('ZOLTRAAK');main.click()}if(typed.includes('fern')){body.style.filter='hue-rotate(50deg)';show('FERN MODE')}})
