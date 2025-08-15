const heroContainer = document.getElementById('hero-container');
const selectedContainer = document.getElementById('selected-product-container');

function renderProduct(product) {
  if (!selectedContainer) return;

  // Insertar HTML inicial con estado oculto y reducido
  selectedContainer.innerHTML = `
    <div id="selected-product" class="bg-white rounded-lg shadow p-6 mb-6 transform scale-95 opacity-0 transition-all duration-500">
      <div class="flex flex-col md:flex-row gap-6">
        <img src="${product.imageUrl}" alt="${product.name}" class="w-full md:w-1/2 h-64 object-cover rounded-md" />
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-2xl font-bold mb-2">${product.name}</h2>
            <p class="text-gray-600 mb-4">${product.content}</p>
            <p class="text-gray-900 font-bold text-xl">€${product.price}</p>
          </div>
          <a href="/contacto">
            <button class="mt-3 px-4 py-3 bg-orange-400 text-white rounded hover:bg-orange-600">
              Contactar para presupuesto
            </button>
          </a>
        </div>
      </div>
    </div>
  `;

  // Forzar animación después de renderizar
  const el = document.getElementById('selected-product');
  if (el) {
    // Necesitamos un pequeño delay para que el navegador registre el estado inicial
    setTimeout(() => {
      el.classList.remove('opacity-0', 'scale-95');
      el.classList.add('opacity-100', 'scale-100');
    }, 10); // 10ms es suficiente
  }
}

window.showProductDetail = (product) => {
  hideHero();
  renderProduct(product); // animación aquí
  setSelectedInUrl(product.name);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function hideHero() {
  if (!heroContainer) return;
  heroContainer.style.transition = 'opacity 0.5s';
  heroContainer.style.opacity = 0;
  setTimeout(() => {
    heroContainer.style.display = 'none';
  }, 500);
}

function setSelectedInUrl(productName) {
  const url = new URL(window.location.href);
  url.searchParams.set('selected', productName);
  history.replaceState(null, '', url);
}

window.showProductDetail = (product) => {
  hideHero();
  renderProduct(product);
  setSelectedInUrl(product.name);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Al cargar la página con ?selected=
document.addEventListener('DOMContentLoaded', () => {
  const url = new URL(window.location.href);
  const selectedName = url.searchParams.get('selected');
  if (selectedName) {
    const product = window.products?.find((p) => p.name === selectedName);
    if (product) {
      hideHero();
      renderProduct(product);
    }
  }
});
