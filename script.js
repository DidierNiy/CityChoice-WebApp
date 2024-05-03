



(function ($) {
    "use strick";

    //Spinner
    var Spinner = function () {
        setTimeout(function() {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    Spinner();

    //Initiate the WOWjs
    new WOW().init();

    //Stick to Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else{
            $('.nav-bar').removeClass('sticky-top');
        }
    });

    //Back to the Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() >300) {
            $('.back-to-top').FadeIn('slow');
        } else{
            $('.back-to-top').fadeOut('slow')
        }
    });
    $('.back-to-top').click(function() {
        $('html,body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false
    });

    //header carousel
    $('.header-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        item: 1,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chervon-left"></i>',
            '<i class="bi bi-chervon-right"></i>'
        ]
    });

    //Testimonial Carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });

})(jQuery);    
