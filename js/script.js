$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        arrows: false,
        speed: 1500,
    });

    $('.slider_news').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__navigation-menu'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__navigation-menu_active');
    });
});

function slowScroll(id) { 
    let offset = 0;
    $('html, body').animate({ 
         scrollTop: $(id).offset().top - offset 
    }, 1500);
    
    return false; 
}
