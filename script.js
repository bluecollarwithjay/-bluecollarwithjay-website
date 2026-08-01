
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
if(menuBtn){menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const counters=document.querySelectorAll('[data-count]');
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.count),duration=1100,start=performance.now();function tick(now){const p=Math.min((now-start)/duration,1);el.textContent=Math.floor(target*p);if(p<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);observer.unobserve(el);});},{threshold:.4});
counters.forEach(c=>observer.observe(c));
