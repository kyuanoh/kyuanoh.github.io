(() => {
  const newsList = document.querySelector('[data-news-list]');
  const pager = document.querySelector('[data-news-pager]');

  if (!newsList || !pager) return;

  const items = [...newsList.querySelectorAll('article')];
  const pageSize = 6;
  const totalPages = Math.ceil(items.length / pageSize);
  const status = pager.querySelector('[data-news-status]');
  const prev = pager.querySelector('[data-news-prev]');
  const next = pager.querySelector('[data-news-next]');
  let page = 0;

  const render = () => {
    items.forEach((item, index) => {
      const isVisible = index >= page * pageSize && index < (page + 1) * pageSize;
      item.hidden = !isVisible;
      item.classList.toggle('page-first', index === page * pageSize);
    });
    status.textContent = `${page + 1} / ${totalPages}`;
    };

  prev.addEventListener('click', () => {
    page = Math.max(0, page - 1);
    render();
  });

  next.addEventListener('click', () => {
    page = Math.min(totalPages - 1, page + 1);
    render();
  });

  render();
})();
