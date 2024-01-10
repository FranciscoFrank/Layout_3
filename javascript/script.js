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

document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector('.menu-overlay');

    document.getElementById('toggleButton').addEventListener('click', function() {
        document.getElementById('menu').classList.toggle('active');
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function() {
        document.getElementById('menu').classList.remove('active');
        overlay.style.display = 'none';
    });

    document.querySelector('.close-button').addEventListener('click', function() {
        document.getElementById('menu').classList.remove('active');
        overlay.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var showFeedbackLink = document.getElementById('show-feedback');
    var feedbackForm = document.getElementById('feedback-form');
    var overlay = document.getElementById('overlay');
    var closeIcon = document.querySelector('#feedback-form img');

    showFeedbackLink.addEventListener('click', function(event) {
        event.preventDefault();
        feedbackForm.style.display = 'block';
        overlay.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        feedbackForm.style.display = 'none';
        overlay.style.display = 'none';
    });
});