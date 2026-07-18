/* ============ COUNTDOWN ============ */
(function(){
  let total = 29*60 + 43;
  const cdMin = document.getElementById('cdMin');
  const cdSec = document.getElementById('cdSec');
  const topTimer = document.getElementById('topTimer');

  function fmt(n){return String(n).padStart(2,'0')}

  function tick(){
    if(total <= 0){
      total = 29*60 + 43;
    }
    const m = Math.floor(total/60);
    const s = total % 60;
    if(cdMin) cdMin.textContent = fmt(m);
    if(cdSec) cdSec.textContent = fmt(s);
    if(topTimer) topTimer.textContent = fmt(m) + ':' + fmt(s);
    total--;
  }
  tick();
  setInterval(tick, 1000);
})();

/* Smooth scroll para âncoras internas */
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click', function(e){
    var href = a.getAttribute('href');
    if(!href || href === '#') return;
    var target = document.querySelector(href);
    if(!target) return;
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth', block:'start'});
    try { history.replaceState(history.state, '', href); } catch(_){}
  });
});
