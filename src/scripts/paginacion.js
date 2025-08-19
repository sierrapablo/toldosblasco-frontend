document.addEventListener('DOMContentLoaded', () => {
  const paginationContainer = document.getElementById('pagination');
  if (!paginationContainer) return;

  const totalPages = parseInt(paginationContainer.dataset.total);
  let currentPage = parseInt(paginationContainer.dataset.current);

  function renderPagination() {
    paginationContainer.innerHTML = '';

    const currentUrl = new URL(window.location.href);
    const selected = currentUrl.searchParams.get('selected');

    const createLink = (page, label = null, disabled = false) => {
      const a = document.createElement('a');

      const pageUrl = new URL(window.location.origin + window.location.pathname);
      pageUrl.searchParams.set('page', page);
      if (selected) pageUrl.searchParams.set('selected', selected);

      a.href = pageUrl.toString();
      a.textContent = label || page;
      a.className = `px-2 sm:px-3 py-1 border rounded text-sm sm:text-base transition ${
        disabled
          ? 'text-gray-400 cursor-not-allowed'
          : page === currentPage
            ? 'bg-orange-400 text-white border-black-500'
            : 'text-gray-700 hover:bg-gray-100'
      }`;

      if (disabled) a.addEventListener('click', (e) => e.preventDefault());
      return a;
    };

    const maxButtons = 4;

    paginationContainer.appendChild(createLink(1, '«', currentPage === 1));
    paginationContainer.appendChild(
      createLink(Math.max(1, currentPage - 1), '←', currentPage === 1),
    );

    let startPage = currentPage - Math.floor(maxButtons / 2);
    let endPage = startPage + maxButtons - 1;
    if (startPage < 1) {
      startPage = 1;
      endPage = maxButtons;
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - maxButtons + 1;
      if (startPage < 1) startPage = 1;
    }

    if (startPage > 1) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.className = 'px-1 sm:px-2 text-gray-500 text-sm sm:text-base';
      paginationContainer.appendChild(dots);
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationContainer.appendChild(createLink(i));
    }

    if (endPage < totalPages) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.className = 'px-1 sm:px-2 text-gray-500 text-sm sm:text-base';
      paginationContainer.appendChild(dots);
    }

    paginationContainer.appendChild(
      createLink(Math.min(totalPages, currentPage + 1), '→', currentPage === totalPages),
    );
    paginationContainer.appendChild(createLink(totalPages, '»', currentPage === totalPages));

    paginationContainer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = new URL(link.href);

        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          window.location.assign(target.toString());
        }, 300);
      });
    });
  }

  renderPagination();
});
