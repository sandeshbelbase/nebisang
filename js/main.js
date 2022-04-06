$('.vertical_slide').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    arrows: true,
    prevArrow: '<i class="p_arrow far fa-angle-up">',
    nextArrow: '<i class="n_arrow far fa-angle-down">',
    // mobileFirst: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            // slidesToScroll: 1,
            centerMode: false
        },
        breakpoint: 768,
        settings: {
        //    dots:true,
            slidesToShow: 1,
            // slidesToScroll: 1,
            centerMode: false
        },
        breakpoint: 390,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});

$('.slider_main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // vertical: false,
    arrows: true,
    dots:true,
    // prevArrow: '<i class="p_arrow far fa-angle-left">',
    // nextArrow: '<i class="n_arrow far fa-angle-right">',
    mobileFirst: true,
  });

  $('.minister_slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // vertical: false,
    arrows: true,
    dots:true,
    // prevArrow: '<i class="p_arrow far fa-angle-left">',
    // nextArrow: '<i class="n_arrow far fa-angle-right">',
    // mobileFirst: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      
      ]
  });