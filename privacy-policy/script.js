// ============================================
// Privacy Policy — Interactivity
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Auto-fill "Last updated" if left as placeholder (optional convenience)
  const lastUpdatedEl = document.getElementById('last-updated');
  if (lastUpdatedEl && lastUpdatedEl.textContent.trim() === '[Month Day, Year]') {
    // Leave as placeholder intentionally — set a real date manually in index.html
    // Uncomment below to auto-populate with today's date instead:
    // const today = new Date();
    // lastUpdatedEl.textContent = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  // ---------- Back to top button ----------
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Scrollspy: highlight active TOC link ----------
  const sections = document.querySelectorAll('.content section[id]');
  const tocLinks = document.querySelectorAll('.toc a[data-target]');

  if (sections.length && tocLinks.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.toc a[data-target="${id}"]`);
        if (!link) return;

        if (entry.isIntersecting) {
          tocLinks.forEach((l) => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, {
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0
    });

    sections.forEach((section) => observer.observe(section));
  }

  // ---------- Smooth scroll for TOC links (fallback / offset correction) ----------
  tocLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const offset = 80;
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        history.pushState(null, '', targetId);
      }
    });
  });

});
