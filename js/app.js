// js/app.js もしくは js/apps.js
(() => {
  const showAll = () => {
    document.querySelectorAll('.reveal, .reveal-stagger')
      .forEach(el => el.classList.add('is-visible'));
  };

  // ユーザーが「動きを減らす」→ 表示はする（演出だけ無効）
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showAll(); 
    return;
  }

  // IntersectionObserver 非対応なら、即時表示
  if (!('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => obs.observe(el));
})();

