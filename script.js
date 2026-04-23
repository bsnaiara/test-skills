function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
}

function initFaq() {
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-question').forEach((b) => {
        b.setAttribute('aria-expanded', 'false');
        const panel = document.getElementById(b.getAttribute('aria-controls'));
        if (panel) panel.hidden = true;
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) panel.hidden = false;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initFaq();
});
