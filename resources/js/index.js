import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel'

bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplay: true,
    loop: true,
    pagination: true,
    breakpoints: [{ changePoint: 480, slidesToShow: 1, slidesToScroll: 1 }, { changePoint: 640, slidesToShow: 1, slidesToScroll: 1 }, { changePoint: 768, slidesToShow: 1, slidesToScroll: 1 } ]
});

