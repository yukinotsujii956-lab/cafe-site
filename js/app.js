// Intersection Observer で .reveal / .reveal-stagger を監視
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // 動きを減らす指定なら何もしない

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        // 一度表示したら監視解除（無駄な処理を減らす）
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => obs.observe(el));
})();
