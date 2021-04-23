'use strict'

$(function(){
    var backToTop = $('.backToTop');
    var html_body = $('html,body');
    
    
        $(window).scroll(function () { 
            var scrolling = $(this).scrollTop();
            if(scrolling > 200){
                backToTop.fadeIn();
            }else{
                backToTop.fadeOut();
            }
            if(scrolling >200){
                 $('.navbar').addClass('fixd-nav');
             }else{
                 $('.navbar').removeClass('fixd-nav');
             }
        });
    
    
        backToTop.on('click',function(){
            html_body.animate({
                scrollTop:0,
            },1500);
        });
    
        $('.navbar .navbar-nav .nav-item a').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    html_body.animate({
                        scrollTop: target.offset().top - 0
                    }, 1500,);
                    return false;
                }
            }
        });  
    });

    $(function(){
        $('.banner').slick({
            prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left "></i>',
             nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"></i>',
             dots:true,
        });
    });

    $('.navbar .navbar-nav .nav-item .nav-link ').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(document).ready(function(){
        $('.banner-slider').slick({
            prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left "></i>',
            nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"></i>',
            dots:true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
      });

// filter heading 
      $('.filter-head ul li ').click(function(){
          $(this).addClass('active').siblings().removeClass('active');
      });

    //   filter 

    var mixer = mixitup('.filter-content');

    $(function(){
        $('.slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,
            arrows: false,
             dots:true,
             responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
        });
    });

    $(document).ready(function(){
        $('.venobox').venobox({
            spinner:'wave',
            spinColor:'#709dca',
            overlayColor: 'rgba(112, 157, 202, 0.651);',
            overlayClose: '#ffc155',
            closeBackground:'#709dca',

        }); 
    });


        //    menu icon toggler

        $(".navbar .navbar-toggler").on("click", function () {

          $(".navbar .navbar-toggler span").toggleClass("fas fa-times");
  
      });



      
    /* preloder */
document.body.onload = function () {

	setTimeout(function () {
		let preloader = document.getElementById('page-preloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);
}
/* preloder */