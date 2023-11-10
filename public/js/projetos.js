let interval;

window.addEventListener('load', () => {
  const btns = document.querySelectorAll('.details__btn');

  btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const detailContainer = event.target.closest('.details__btn');
      const btnAwesome = detailContainer.querySelector('.btn__awesome');

      if (!detailContainer) return;

      const status = +detailContainer.dataset.status;

      if (status === 0) {
        const description = detailContainer.nextElementSibling;

        description.classList.remove('absolute');
        description.classList.remove('scale-y-0');
        btnAwesome.classList.remove('fa-square-plus');
        btnAwesome.classList.add('fa-square-minus');
        detailContainer.dataset.status = 1;
      } else if (status === 1) {
        const description = detailContainer.nextElementSibling;

        description.classList.add('scale-y-0');
        setTimeout(() => description.classList.add('absolute'), 600);
        btnAwesome.classList.remove('fa-square-minus');
        btnAwesome.classList.add('fa-square-plus');
        detailContainer.dataset.status = 0;
      }
    });
  });
});
