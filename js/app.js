$(function () {
    //Banner Slider Activation
    $('.banner_slider').slick({
       prevArrow:'<i class="fa-solid fa-xl fa-angle-left banner_slider_arrow"></i>',
       nextArrow:'<i class="fa-solid fa-xl fa-angle-right banner_slider_arrow"></i>'
    })

    //latest product slider

    $('.latest_slider').slick({
      prevArrow:'<i class="fa-solid fa-xl fa-angle-left latest_slider_arrow"></i>',
      nextArrow:'<i class="fa-solid fa-xl fa-angle-right latest_slider_arrow"></i>',
      slidesToShow:4,
      slidesToScroll:4,
      responsive:[
        {
          breakpoint: 992,
          settings: {
            slidesToShow:2,
          }
        }
      ]
    });
})