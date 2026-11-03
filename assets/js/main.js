// Mobile nav toggle. FAQ uses native <details>/<summary>.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');

  const setOpen = (open) => {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });

  // Demo video modal. Native <dialog> traps focus and closes on Escape.
  const modal = document.querySelector('.video-modal');
  const video = modal.querySelector('video');

  document.querySelectorAll('[data-video-open]').forEach((button) => {
    button.addEventListener('click', () => {
      modal.showModal();
      video.play().catch(() => {});
    });
  });
  modal.querySelector('.video-close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.close();
  });
  // Pause however the dialog closes (button, backdrop, Escape). Watching the open
  // attribute is more dependable than the dialog's close event.
  new MutationObserver(() => {
    if (!modal.open) video.pause();
  }).observe(modal, { attributes: true, attributeFilter: ['open'] });
});
