const heroContainer = document.getElementById('hero-container');
const heroText = heroContainer?.querySelector('.text-center');
const selectedContainer = document.getElementById('selected-product-container');

const heroOriginalImage = heroContainer?.style.backgroundImage;

function renderProduct(product) {
  if (!selectedContainer) return;

  if (heroContainer) {
    heroContainer.style.backgroundImage = `url('${product.imageUrl}')`;
  }
  if (heroText) {
    heroText.style.display = 'none';
  }

  selectedContainer.innerHTML = `
    <div id="selected-product" class="bg-white rounded-lg shadow p-6 mb-6 transform scale-95 opacity-0 transition-all duration-500 relative">
      <!-- Botón de cierre -->
      <button 
        id="close-product" 
        class="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold">
        ✕
      </button>
      <div class="flex flex-col gap-4">
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
  `;

  const el = document.getElementById('selected-product');
  if (el) {
    setTimeout(() => {
      el.classList.remove('opacity-0', 'scale-95');
      el.classList.add('opacity-100', 'scale-100');
    }, 10);
  }

  const closeBtn = document.getElementById('close-product');
  if (closeBtn) {
    closeBtn.addEventListener('click', restoreHero);
  }
}

window.showProductDetail = (product) => {
  renderProduct(product);
  setSelectedInUrl(product.name);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function restoreHero() {
  if (heroContainer) {
    heroContainer.style.backgroundImage = heroOriginalImage;
  }
  if (heroText) {
    heroText.style.display = 'block';
  }
  if (selectedContainer) {
    selectedContainer.innerHTML = '';
  }
  removeSelectedFromUrl();
}

function setSelectedInUrl(productName) {
  const url = new URL(window.location.href);
  url.searchParams.set('selected', productName);
  history.replaceState(null, '', url);
}

function removeSelectedFromUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete('selected');
  history.replaceState(null, '', url);
}

document.addEventListener('DOMContentLoaded', () => {
  const url = new URL(window.location.href);
  const selectedName = url.searchParams.get('selected');
  if (selectedName && window.products) {
    const product = window.products.find((p) => p.name === selectedName);
    if (product) {
      renderProduct(product);
    }
  }
});
