const form = document.querySelector('.form');
const id = document.querySelector('.id').dataset.id;
const inputTitle = document.querySelector('#form__input-title');
const inputMaterial = document.querySelector('#form__input-material');
const inputLocal = document.querySelector('#form__input-local');
const inputImg = document.querySelector('#form__input-img');
const inputDescription = document.querySelector('#form__input-description');
const userId = document.querySelector('.userId');
const imageName = document.querySelector('.imageName');
const oldImage = document.querySelector('.oldImage');
const body = document.querySelector('body');

inputImg.addEventListener('change', (event) => {
  const file = inputImg.files[0];
  console.log(file);

  imageName.textContent = file.name;
  oldImage.src = URL.createObjectURL(file);
});

const generateHTML = (message) => {
  return `<div class="pop-up">${message}</div>`;
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = new FormData();
  form.append('title', inputTitle.value);
  form.append('material', inputMaterial.value);
  form.append('local', inputLocal.value);
  form.append('img', inputImg.files[0]);
  form.append('description', inputDescription.value);
  form.append('user', userId.dataset.userid);

  const res = await fetch(`https://marmorariaocoliseu.com.br/posts/${id}`, {
    method: 'PATCH',
    body: form,
    credentials: 'same-origin',
  });

  if (res.ok) {
    body.insertAdjacentHTML(
      'beforeend',
      generateHTML('Atualizado com sucesso!')
    );
    setTimeout(() => {
      location.assign('/admin/dashboard');
    }, 3000);
  } else {
    const data = await res.json();
    console.log(data);
  }
});
