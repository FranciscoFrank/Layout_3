/*  For the burger menu  */
document.addEventListener('DOMContentLoaded', function () {
    /*  ID  */
    const burgerIcon = document.querySelector('.burger-icon');
    const burgerMenu = document.querySelector('.burger-menu');

    /*  Activation of the burger menu  */
    burgerIcon.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    /* Closing he burger menu  */
    const burgerIconClose = document.querySelector('.burger-icon-close');
    burgerIconClose.addEventListener('click', function () {
        burgerMenu.classList.remove('active');
        burgerIcon.classList.remove('active');
    });
});

/*  Slider animation  */
document.addEventListener('DOMContentLoaded', function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        fade: true,
        centerMode: true,

        /*  Arrows to switch the slider  */
        prevArrow: '<button type="button" class="slick-prev"><img src="images/left.jpg" alt="Previous"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/right.jpg" alt="Next"></button>',
    });
});

/*  For the product menu  */
document.addEventListener('DOMContentLoaded', function() {
    /*  ID  */
    var overlay = document.querySelector('.menu-overlay');

    /*  Menu appears  */
    document.getElementById('toggleButton').addEventListener('click', function() {
        document.getElementById('menu').classList.toggle('active');
        overlay.style.display = 'block';
    });

    /*  Disappearing menu  when clicking on the overlay  */
    overlay.addEventListener('click', function() {
        document.getElementById('menu').classList.remove('active');
        overlay.style.display = 'none';
    });

    /*  Disappearing menu  when clicking on the close button  */
    document.querySelector('.close-button').addEventListener('click', function() {
        document.getElementById('menu').classList.remove('active');
        overlay.style.display = 'none';
    });
});

/*  Animation for the feedback form  */
document.addEventListener('DOMContentLoaded', function() {
    /*  ID  */
    var showFeedbackLink = document.getElementById('show-feedback');
    var feedbackForm = document.getElementById('feedback-form');
    var overlay = document.getElementById('overlay');
    var closeIcon = document.querySelector('#close-feedback-close');

    /*  Add a fade effect for appearance  */
    showFeedbackLink.addEventListener('click', function(event) {
        event.preventDefault();
        feedbackForm.classList.remove('fadeOut');
        feedbackForm.classList.add('fadeIn');
        feedbackForm.style.display = 'block';
        overlay.style.display = 'block';
    });

    /*  Add a fade effect for disapperaing  */
    closeIcon.addEventListener('click', function() {
        /*  Add new animation and remov old */
        feedbackForm.classList.remove('fadeIn');
        feedbackForm.classList.add('fadeOut');

        /*  Hiding the form  */
        feedbackForm.addEventListener('animationend', function() {
            feedbackForm.style.display = 'none';
            overlay.style.display = 'none';
        }, { once: true });
    });
});

/*  Tracking button clicks  */
document.addEventListener('DOMContentLoaded', function () {
    /*  ID  */
    var submitButton = document.getElementById('submit');
    var inputElements = document.querySelectorAll('.form-input');

    /*  Adding a class to a button  */
    submitButton.addEventListener('click', function() {
        inputElements.forEach(function(inputElement) {
            inputElement.classList.add('activated');
        });
    });
});