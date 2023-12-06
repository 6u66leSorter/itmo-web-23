document.addEventListener("DOMContentLoaded", function() {
    var startTime = performance.now();
  
    window.addEventListener("load", function() {
      var endTime = performance.now();
      var loadTime = (endTime - startTime) / 1000;
  
      var loadSpeedElement = document.querySelector(".footer__load-speed");
      if (loadSpeedElement) {
        loadSpeedElement.textContent = "Время загрузки страницы: " + loadTime.toFixed(3) + " с";
      }
    });
  });

  

  document.addEventListener("DOMContentLoaded", function() {
    var currentPage = location.href;

    let links = document.querySelectorAll(".header__link");
    links.forEach(item => {
      if (item.href === currentPage) {
        item.className = "header__link__active";
      }
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__links'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__links_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__links_active');
        })
    })
})