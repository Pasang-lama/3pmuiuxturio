$(document).ready(function () {
    $(".banner-section .banner-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-up"></i>', '<i class="fa-solid fa-arrow-down"></i>']
    });

    $(".best-tour-slider").owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-up"></i>', '<i class="fa-solid fa-arrow-down"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            991: {
                items: 3,
            }
        }
    });
});


