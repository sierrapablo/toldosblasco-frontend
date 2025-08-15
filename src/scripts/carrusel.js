(() => {
  function init(root) {
    if (!root) return;
    const track = root.querySelector('.track');
    const slides = Array.from(root.querySelectorAll('.slide'));
    const prev = root.querySelector('.prev');
    const next = root.querySelector('.next');
    const dots = Array.from(root.querySelectorAll('.dot'));
    if (!track || slides.length === 0) return;

    let index = 0;
    let timer = null;
    const autoplay = true;
    const autoplayMs = 5000;

    const setIndex = (i) => {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.setAttribute('aria-current', String(di === index)));
    };

    const nextSlide = () => setIndex(index + 1);
    const prevSlide = () => setIndex(index - 1);

    prev?.addEventListener('click', prevSlide);
    next?.addEventListener('click', nextSlide);
    dots.forEach((d, di) => d.addEventListener('click', () => setIndex(di)));

    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    });

    let startX = 0;
    let isDown = false;
    const onStart = (x) => {
      isDown = true;
      startX = x;
      stopAutoplay();
    };
    const onMove = (x) => {
      if (!isDown) return;
      const delta = x - startX;
      if (Math.abs(delta) > 50) {
        delta < 0 ? nextSlide() : prevSlide();
        isDown = false;
      }
    };
    const onEnd = () => {
      isDown = false;
      startAutoplay();
    };

    track.addEventListener('mousedown', (e) => onStart(e.clientX));
    window.addEventListener('mousemove', (e) => onMove(e.clientX));
    window.addEventListener('mouseup', onEnd);

    track.addEventListener('touchstart', (e) => onStart(e.touches[0].clientX), {
      passive: true,
    });
    track.addEventListener('touchmove', (e) => onMove(e.touches[0].clientX), { passive: true });
    track.addEventListener('touchend', onEnd);

    const startAutoplay = () => {
      if (!autoplay) return;
      clearInterval(timer);
      timer = setInterval(nextSlide, autoplayMs);
    };
    const stopAutoplay = () => clearInterval(timer);

    setIndex(0);
    startAutoplay();

    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      () => {
        document.querySelectorAll('section[aria-label="Carrusel de testimonios"]').forEach(init);
      },
      { once: true },
    );
  } else {
    document.querySelectorAll('section[aria-label="Carrusel de testimonios"]').forEach(init);
  }
})();
