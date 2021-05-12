/**
 * Copyright (c) 2020 Lucky Byte, Inc.
 */
$(() => {
  new Swiper('.swiper-container', {
    direction: "horizontal",
    effect: 'fade',
    loop: true,
    speed: 1500,
    autoplay: {
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // BACK TO TOP
  var backtop_button = $('button.back-top');
  window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backtop_button.show();
    } else {
      backtop_button.hide();
    }
  };
  backtop_button.on('click', () => {
    $("html, body").animate({scrollTop: 0}, 400);
  });

});
