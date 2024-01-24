
$(document).ready(function () {   
  $('.slider').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    autoplaySpeed: 400,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        480:{
          items:1
        },
        767:{
            items:1
        },
        1200:{
            items:1
        }
    }
})
$(".default_option").click(function(){
  $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
})
$(window).scroll(function(){
  var scrolltop = $(window).scrollTop();
  var header = $("header");
  var headerHeight = $("header").outerHeight();
  if(scrolltop > headerHeight){
    header.addClass("active");
  }
  else{
    header.removeClass("active");
  }
})
});

