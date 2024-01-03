document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');

    burgerIcon.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        const isClickInsideBurgerMenu = burgerMenu.contains(event.target);
        const isClickInsideBurgerIcon = burgerIcon.contains(event.target);

        if (!isClickInsideBurgerMenu && !isClickInsideBurgerIcon) {
            burgerMenu.classList.remove('active');
            burgerIcon.classList.remove('active');
        }
    });

    // Додайте обробник кліку для блока burgerIconClose
    const burgerIconClose = document.querySelector('.burger-icon-close');
    burgerIconClose.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        burgerIcon.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        fade: true,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/left.jpg" alt="Previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/right.jpg" alt="Next"></button>',
    });
});