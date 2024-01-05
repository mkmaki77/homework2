$(document).ready(function () {
    // swiper ------------------ //
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    // 下拉選單 ------------------ //
    $('.menu-in > li > a').click(function(event) {
        event.preventDefault();
        
        // this以外的都隱藏起來
        $(this).parent().siblings().find('ul').slideUp();
        
        // 我自己的ul 做摺疊效果
        $(this).parent().find('ul').slideToggle();
      });


    // top ------------------ //
      $('.top-btn').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 1000);
       });
});