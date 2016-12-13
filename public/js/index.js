'use strict';

(function () {

  function sticky_navigate() {
    var window_top = $(window).scrollTop();
    var home_top = $("#home").offset().top;

    if (window_top > home_top) {
      $(".nav").addClass('stick');
    }else {
      $(".nav").removeClass('stick');
    }
  }

  $(window).scroll(sticky_navigate);
  sticky_navigate();

}());