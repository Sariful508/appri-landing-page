// smooth scroll


var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

// counter plugin here

$('.counter').counterUp({
    delay: 10,
    time: 10000
});

// magnific popup
$('.video-play').magnificPopup({
    type: 'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>',
        patterns: {
            youtube: {
                index: 'youtube.com/',

                id: 'v=',

                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
            }
        },
        srcAction: 'iframe_src',
    }
});

// slick for testimonial 

$('.testimonial-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    infinite: true,
    asNavFor: '.testimonial-img-active'
});
$('.testimonial-img-active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-active',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    focusOnSelect: true
});

// owl carousel for brand / logo
$('.faq-brand-active').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})