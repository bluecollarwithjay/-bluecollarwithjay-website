
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
if(menu && nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('[data-count]').forEach(el=>{
  const target=Number(el.dataset.count||0); let n=0; const step=Math.max(1,Math.ceil(target/35));
  const tick=()=>{n=Math.min(target,n+step);el.textContent=n+(target>=100?'+':'');if(n<target)requestAnimationFrame(tick)};
  const obs=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){tick();obs.disconnect();}});
  obs.observe(el);
});
