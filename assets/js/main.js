let burgerBtn = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
})