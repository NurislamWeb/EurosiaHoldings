//**************** project slider js start ******************
$('.project-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaylay: true,
    infinite: true,
    prevArrow:'<i class="fa fa-angle-double-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-double-right next" aria-hidden="true"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	
//**************** project slider js end ********************





//**************** project hallery slider js start ************
$(document).ready(function(){
    $('.venobox').venobox(); 
});
//**************** project hallery slider js end **************

