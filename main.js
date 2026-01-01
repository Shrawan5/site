// Dark mode
const btn=document.getElementById('themeBtn');
if(btn){
  btn.onclick=()=>{
    document.body.classList.toggle('dark');
    btn.textContent=document.body.classList.contains('dark')?'Light':'Dark';
  }
}

// Scroll reveal animation
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add('show');
 })
},{threshold:.2});

document.querySelectorAll('section').forEach(s=>observer.observe(s));
