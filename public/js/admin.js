const inputUser = document.querySelector('#form__input-user');
const inputPassword = document.querySelector('#form__input-password');
const form = document.querySelector('.form');

const generateHTML = (message) => {
  return `<div class="pop-up">${message}</div>`;
};

const login = async (credentials) => {
  try {
    const res = await fetch('https://marmorariaocoliseu.com.br/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
      credentials: 'same-origin',
    });

    const data = await res.json();
    if (!res.ok) throw data;

    if (data.status === 'sucess') location.assign('/admin/dashboard');
  } catch (err) {
    document
      .querySelector('body')
      .insertAdjacentHTML('beforeend', generateHTML(err.error.message));

    setTimeout(() => document.querySelector('.pop-up').remove(), 2000);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const user = inputUser.value;
  const password = inputPassword.value;

  login({ user, password });
});
