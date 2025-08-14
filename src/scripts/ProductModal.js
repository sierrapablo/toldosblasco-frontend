const heroContainer = document.getElementById('hero-container');
const selectedContainer = document.getElementById('selected-product-container');

window.showProductDetail = (product) => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!selectedContainer || !heroContainer) return;

  heroContainer.classList.add('transition-all', 'duration-500', 'opacity-0', 'scale-95');

  setTimeout(() => {
    heroContainer.classList.add('hidden');
  }, 500);

  selectedContainer.innerHTML = '';

  const card = document.createElement('div');
  card.className =
    'bg-white rounded-lg shadow p-6 mb-6 transform opacity-0 scale-95 transition-all duration-500';
  card.innerHTML = `
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
  `;

  selectedContainer.appendChild(card);

  setTimeout(() => {
    card.classList.remove('opacity-0', 'scale-95');
  }, 50);
};
