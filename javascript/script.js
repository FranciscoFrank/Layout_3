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

    function toggleBurgerMenu() {
        burgerMenu.style.display = (burgerMenu.style.display === 'flex') ? 'none' : 'flex';
    }

    function closeBurgerMenu() {
        burgerMenu.style.display = 'none';
    }
  });
  