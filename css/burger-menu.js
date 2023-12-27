let burger-menu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');
burger-menu.addEventListener('click', function(){
	menu.classList.toggle('active');
})

let burger-menu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})