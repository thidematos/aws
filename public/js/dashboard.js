let deleteBtns;
let timers = [];
let id;
let modal;

window.addEventListener('load', (event) => {
  deleteBtns = document.querySelectorAll('.delete__btn');
  const yes = document.querySelectorAll('.yes');
  const no = document.querySelectorAll('.no');

  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const btn = event.target.closest('.delete__btn');
      if (!btn) return;
      id = btn.dataset.id;
      modal = event.target.closest('.post__container').querySelector('.modal');

      modal.classList.remove('absolute');
      modal.classList.remove('scale-y-0');

      timers.push(
        setTimeout(() => {
          modal.classList.add('scale-y-0');
          timers.push(
            setTimeout(() => {
              console.log('oi1');
              modal.classList.add('absolute');
            }, 680)
          );
        }, 5000)
      );
    });
  });

  no.forEach((btn) => {
    btn.addEventListener('click', () => {
      timers.forEach((timer) => clearInterval(timer));
      modal.classList.add('scale-y-0');
      setTimeout(() => {
        console.log('oi2');
        modal.classList.add('absolute');
        timers = undefined;
        id = undefined;
        modal = undefined;
      }, 615);
    });
  });

  yes.forEach((btn) => {
    btn.addEventListener('click', async () => {
      timers.forEach((timer) => clearInterval(timer));
      if (!id) return console.log('Sem ID!');
      const res = await fetch(`https://marmorariaocoliseu.com.br/posts/${id}`, {
        method: 'DELETE',
        credentials: 'same-origin',
      });
      if (!res.ok) return console.log(await res.json());
      location.assign('/admin/dashboard');
    });
  });
});
