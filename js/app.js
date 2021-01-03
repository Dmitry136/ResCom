$(function () {

   // Fixed Header
   let header = $("#header");
   let intro = $("#intro");
   let introH = intro.innerHeight();
   let scrollPos = $(window).scrollTop();
   let nav = $("#nav");
   let nav_toggle = $("#nav_toggle");

   $(window).on("scroll load resize", function () {
      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();

      if (scrollPos > introH) {
         header.addClass("fixed");
      } else {
         header.removeClass("fixed");
      }
   });


   // Smooth scroll
   $("[data-scroll]").on("click", function (event) {
      event.preventDefault();

      let blockId = $(this).data('scroll');
      let blockOffset = $(blockId).offset().top;

      nav.removeClass("show");

      $("html, body").animate({
         scrollTop: blockOffset - 60
      }, 700);
   });

   // Nav Toggle
   nav_toggle.on("click", function (event) {
      event.preventDefault();

      nav.toggleClass("show");
   });

   // Video:https://kenwheeler.github.io/slick/
   let slider = $("#prevideoSlider");

   slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true
   });

});