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

  function active_itemMenu() {
    var home_top = $("#home").offset().top;
    var portafolio_top = $("#portafolio").offset().top;
    /*var aboutme_top = $("#about-me").offset().top;
    var contact_top = $("#contact").offset().top;*/

    if($(window).scrollTop() +70 < portafolio_top){
      $(".nav-item.home").addClass('active');
    }else {
      $(".nav-item.home").removeClass('active');
    }

    if($(window).scrollTop() +70 >= portafolio_top){
      $(".nav-item.pf").addClass('active');
    }else {
      $(".nav-item.pf").removeClass('active');
    }
  }

  $(window).scroll(function () {
    sticky_navigate();
    active_itemMenu();
  });

  active_itemMenu();
  sticky_navigate();

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 70
          }, 1000);
          return false;
        }
      }
    });
  });

}());