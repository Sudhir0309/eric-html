'use strict';

if($) {
  $('.list-design-thinkers').slick({
    // dots: true,
    speed: 300,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991, //767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}



// import './theme-switch.js';
