window.openLightbox = (src) => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
  }
};

window.closeLightbox = (event) => {
  if (event.target.id === 'lightbox') {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.add('hidden');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightboxImg) lightboxImg.src = '';
  }
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && !lightbox.classList.contains('hidden')) {
      lightbox.classList.add('hidden');
      if (lightboxImg) lightboxImg.src = '';
    }
  }
});
