(function () {
  const overlay = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const btn = document.getElementById('close-lightbox');
  let zoomed = false;

  window.openLightbox = function (src) {
    if (src) img.src = src;
    overlay.classList.remove('hidden');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    zoomed = false;
    img.style.transform = 'scale(1)';
    img.style.cursor = 'zoom-in';
  };

  function hideLightbox() {
    overlay.classList.add('hidden');
    img.src = '';
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  window.closeLightbox = hideLightbox;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hideLightbox();
  });

  img.addEventListener('click', (e) => e.stopPropagation());

  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      hideLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      hideLightbox();
    }
  });

  img.addEventListener('dblclick', () => {
    zoomed = !zoomed;
    img.style.transform = zoomed ? 'scale(1.8)' : 'scale(1)';
    img.style.cursor = zoomed ? 'zoom-out' : 'zoom-in';
  });
})();
