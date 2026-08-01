
const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu){menu.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const counters=document.querySelectorAll('[data-count]');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const el=entry.target,target=Number(el.dataset.count),start=performance.now(),duration=1200;
    function tick(now){const p=Math.min((now-start)/duration,1);el.textContent=Math.floor(target*p);if(p<1)requestAnimationFrame(tick);}
    requestAnimationFrame(tick);observer.unobserve(el);
  });
},{threshold:.4});
counters.forEach(c=>observer.observe(c));
