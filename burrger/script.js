const button = document.querySelector('.nav__mobile--button');
const navMobile = document.querySelector('.nav__mobile');

button.addEventListener('click', function () {
  button.classList.toggle('close');
  navMobile.classList.toggle('visible');
})

