const toggle = document.querySelector('.menu');
const nav = document.querySelector('#navegacao');
if(toggle && nav){
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
}
const year = document.querySelector('#year');
if(year) year.textContent=String(new Date().getFullYear());
