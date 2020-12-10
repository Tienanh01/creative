let buttonMenu = document.querySelector('.logo__button-menu');
let menu =  document.querySelector('.header__menu-list');
buttonMenu.addEventListener('click', function() {
   menu.classList.toggle('active');
})