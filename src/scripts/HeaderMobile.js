const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggle?.addEventListener('click', () => {
  if (mobileMenu) {
    const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
    mobileMenu.style.maxHeight = isOpen ? '0' : mobileMenu.scrollHeight + 'px';
  }
});
