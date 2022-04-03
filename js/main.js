$('.vertical_slide').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    arrows: true,
    prevArrow: '<i class="p_arrow far fa-angle-up">',
    nextArrow: '<i class="n_arrow far fa-angle-down">',
    mobileFirst: true,
    // responsive: [{
    //     breakpoint: 1024,
    //     settings: {
    //         slidesToShow: 3,
    //         // slidesToScroll: 1,
    //         centerMode: false
    //     },
    //     breakpoint: 390,
    //     settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         centerMode: false
    //     }
    // }]
});

$('.slider_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: false,
    arrows: true,
    // prevArrow: '<i class="p_arrow far fa-angle-left">',
    // nextArrow: '<i class="n_arrow far fa-angle-right">',
    mobileFirst: true,
  });