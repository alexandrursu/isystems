
/*========================================================================= */
/*  Preloader
/* ========================================================================= */

$(window).load(function(){
    $("#preloader").fadeOut("slow");

    /*=================================================================
        Parallax
    =================================================================*/
    if($(window).width() > 1024){
        $(".test-parallax").parallax("50%", 0.1);
        $(".text-parallax").parallax("50%", 0.6);
        $(".parallax-subs").parallax("50%", 0.3);
        $("#teatimonial").parallax("50%", 0.1);
        $("#parallax").parallax("50%", 0.1);
        $(".cta-parallax").parallax("50%", 0.5);
        $(".parallax1").parallax("50%", 0.1);
        $(".parallax2").parallax("50%", 0.5);
        $(".parallax3").parallax("50%", 0.5);
        $(".parallax4").parallax("50%", 0.5);
        $(".parallax5").parallax("50%", 0.5);
        $(".parallax6").parallax("50%", 0.5);
        $(".parallax7").parallax("50%", 0.5);
        $(".parallax8").parallax("50%", 0.5);
        $(".parallax9").parallax("50%", 0.5);
        $(".parallax10").parallax("50%", 0.5);
        $(".parallax11").parallax("50%", 0.5);
        $(".parallax12").parallax("50%", 0.5);
        $(".parallax13").parallax("50%", 0.5);
        $(".parallax14").parallax("50%", 0.5);
        $(".parallax15").parallax("50%", 0.5);
        $(".parallax16").parallax("50%", 0.5);
        $(".parallax17").parallax("50%", 0.5);
        $(".parallax18").parallax("50%", 0.5);
        $(".parallax19").parallax("50%", 0.5);
        $(".parallax20").parallax("50%", 0.5);
        $(".parallax21").parallax("50%", 0.5);
        $(".parallax22").parallax("50%", 0.5);
        $(".parallax23").parallax("50%", 0.5);
        $(".parallax24").parallax("50%", 0.5);
        $(".parallax25").parallax("50%", 0.5);
        $(".parallax26").parallax("50%", 0.5);
        $(".parallax27").parallax("50%", 0.5);
        $(".app-home").parallax("50%", 0.5);
        $(".parallax-home").parallax("50%", 0.5);
        $(".parallax-cta").parallax("50%", 0.5);
    };
});

$(document).ready(function () {
    
    //Elements Appear from top
    $('.item_top').each(function () {
        $(this).appear(function () {
            $(this).delay(400).animate({
                opacity: 1,
                top: "0px"
            }, 1000);
        });
    });
    //Elements Appear from bottom
    $('.item_bottom').each(function () {
        $(this).appear(function () {
            $(this).delay(400).animate({
                opacity: 1,
                bottom: "0px"
            }, 1000);
        });
    });
    //Elements Appear from left
    $('.item_left').each(function () {
        $(this).appear(function () {
            $(this).delay(400).animate({
                opacity: 1,
                left: "0px"
            }, 1000);
        });
    });
    //Elements Appear from right
    $('.item_right').each(function () {
        $(this).appear(function () {
            $(this).delay(400).animate({
                opacity: 1,
                right: "0px"
            }, 1000);
        });
    });
    //Elements Appear in fadeIn effect
    $('.item_fade_in').each(function () {
        $(this).appear(function () {
            $(this).delay(400).animate({
                opacity: 1,
                right: "0px"
            }, 1500);
        });
    });

});


$(function(){

    var wow = new WOW({
        mobile:       false
      }
    );
    wow.init();


    $(".sticky-header").sticky({
        topSpacing:0
    });
    if ($(window).width() > 767) {
        
    } else {
        
    }


    // Preview Pannel

    $(".preview-pannel h3 a").on('click', function() {
        $(".preview-pannel").toggleClass("extend");
    });

    $('.colors-option > li > a').on('click', function(){
        $('#themeColorChangeLink').attr({
            'href':'css/colors/'+$(this).attr('data-colorName')+'.css'
        });
    });

/*=================================================================
    Animated Header
=================================================================*/

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".navbar-default").addClass("animated");
            $(".slidedown-nav").slideDown();
            $(".page-head + #head").slideDown();
            $(".page-menu").addClass("page-navbg");
            $(".top-head").slideUp();
            $(".header-mid").slideUp();
            $(".header2 .header-top").slideUp();
            $(".show-top-bar .header-top").slideUp();
            $(".header-top.opened").slideUp();
        } else {
            $(".navbar-default").removeClass('animated');
            $(".slidedown-nav").slideUp();
            $(".page-head + #head").slideUp();
            $(".page-menu").removeClass("page-navbg");
            $(".top-head").slideDown();
            $(".header-mid").slideDown();
            $(".header2 .header-top").slideDown();
            $(".show-top-bar .header-top").slideDown();
            $(".header-top.opened").slideDown();
        }
    });

    $(window).scroll(function () {
        scrollFix();
    });

    $(window).resize(function() {
        scrollFix();
    });

    //luquied hover effect
    // $(".header2 .navbar-nav").lavalamp({
    //  easing: 'easeOutBack'
    // });

    $(".header-widget-toogle").on('click', function() {
        $(".header-widget-inner").slideToggle(600);
    });

    $('.navbar-nav>li>a').each(function(){
        if($(this).next().is('ul')){
            $(this).append('<i class="drpdownSign"></i>');
        }
    });

    $('.navbar-nav>li>.dropdown li a').each(function(){
        if($(this).next().is('ul')){
            $(this).append('<i class="fa fa-angle-right"></i>');
        }
    });

    $('.vertical-nav li>a').each(function(){
        if($(this).next().is('ul')){
            $(this).append('<i class="drpdownSign"></i>');
        }/*else{
            $(this).removeClass('drpdownSign');
        }*/
    });

    var bannerHeight = $(window).height();

    //store navigation height
    var navigationHeight = $(".navbar-default").height();

    //calculate window height without nav height
    var fitScreen = bannerHeight-navigationHeight;

    $(window).scroll(function () {
        if ($(window).scrollTop() > bannerHeight ) {
            $(".header16").addClass('navbar-fixed-top');
        } else {
            $(".header16").removeClass('navbar-fixed-top');
        }
    });

    /*$(window).scroll(function () {
        if ($(window).scrollTop() > fitScreen) {
            $(".header16").addClass('navbar-fixed-top');
        } else {
            $(".header16").removeClass('navbar-fixed-top');
        }
    });*/

    // nav toggle in tablet
    $(".navbar-toggle2").on('click', function() {
        $(".ac-nav .navbar-nav").slideToggle();
    });
    
    $(".slide-top .hide-top").on("click", function() {
        $(".header-top").slideToggle();
    });

    //apply the height
    $(".fitscreen").css('height', fitScreen);
    $(".fullscreen").css('height', bannerHeight);

    $(window).resize(function() {
        $(".fitscreen").css('height', fitScreen);
        $(".fullscreen").css('height', bannerHeight);
    });



    if ($('body').children().hasClass('bordered')) {
        $("header > div").removeClass('container');
        $("section > div").removeClass('container');
        $("section > .overlay > div").removeClass('container');
        $("footer > div").removeClass('container');
        $("header > div").addClass('container-fluid');
        $("section > div").addClass('container-fluid');
        $("section > .overlay > div").addClass('container-fluid');
        $("footer > div").addClass('container-fluid');
        $("section > .overlay").removeClass('container-fluid');
        $("#parallax > .overlay > div").removeClass('container-fluid');
        $("#parallax > .overlay > div").addClass('container');
        $("#teatimonial > .overlay > div").removeClass('container-fluid');
        $("#teatimonial > .overlay > div").addClass('container');
        $(".home-banner13 > div").removeClass('container-fluid');
    };

    /*$('.navbar-nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'easeInOutExpo'
    });*/

    $('.footer-nav').onePageNav({
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        easing: 'easeInOutExpo'
    });

    // vertical dropdown 
    $(".vertical-nav>ul>li").hover(
        function () {
            $(this).children(".dropdown").stop(true,true).slideDown('medium');
            $(this).children("a").find(".drpdownSign").addClass("opened");
        }, 
        function () {
            $(this).children(".dropdown").stop(true,true).slideUp('medium');
            $(this).children("a").find(".drpdownSign").removeClass("opened");
        }
    );
    $(".vertical-nav .dropdown>li").hover(
        function () {
            $(this).children("ul").stop(true,true).slideDown('medium');
            $(this).children("a").find(".drpdownSign").addClass("opened");
        }, 
        function () {
            $(this).children("ul").stop(true,true).slideUp('medium');
            $(this).children("a").find(".drpdownSign").removeClass("opened");
        }
    );

    if($(window).width() <= 768){
        $('.vertical-selector').removeClass("vertical-inner-content");
    };

    $(".mobile-nav-toggle").on('click', function() {
        $(".vertical-nav").slideToggle("slow");
    });
    
    jQuery('.navbar-nav li a').on('click', function(e){
        e.preventDefault;
        if($(window).width() <= 767){
            if ($(this).next().is(".dropdown")) {
                return false;
            }else {
                jQuery('.navbar-toggle').trigger('click');
            }
        };
    });

    //Header 2 

    //on hover search form
    $(".search-form .fa-search").on('mouseover', function() {
        $(".form-inner").fadeIn();
        $(".form-inner .search-field").focus();
    });

    var searchfield = $(".search-field");

    $(".search-form .fa-search, .form-inner").on('mouseleave', function() {
        if (searchfield.val().length <= 0) {
            $(".form-inner").fadeOut();
        }
    });

    searchfield.focusout(function(){
        if (searchfield.val().length <= 0) {
            $(".form-inner").fadeOut();
        }
    });

    
    $(".nav-toggle").on('click', function(event) {
        event.preventDefault();
        $(".navbar-collapse .navbar-nav").slideToggle(400);
    });

    $(".side-nav").on('click', function(event) {
        event.preventDefault();
        $(".slide-menu-sec").css('right', '0');
    });

    $(".close-slide-nav").on('click', function(event) {
        event.preventDefault();
        $(".slide-menu-sec").css('right', '-100%');
    });

    $(".sidebar-nav ul li").hover(
        function () {
            $(this).children("ul").stop(true,true).slideDown('medium');
        }, 
        function () {
            $(this).children("ul").stop(true,true).slideUp('medium');
        }
    );

    // Slider for business.php
    $(".init-slider1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        smartSpeed: 800,
        mouseDrag: false,
        autoplayHoverPause: true
    });

    // home slider

    $("#home-carousel").carousel({
        interval: 4000
    });

    // home6 slider / index6 
    var slide6 = $('.slide6').bxSlider({
        controls: true,
        autoHover: true,
        touchEnabled: true,
        pager: false,
        mode: 'fade',
        auto: false,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.active').removeClass('active');
            $('.slide6 > .item').eq(currentSlideHtmlObject).addClass('active')
        },
        onSliderLoad: function () {
            $('.slide6 > .item').eq().addClass('active')
        }
    });

    // Backsttretch slider index 7
    $(".banner-3").backstretch([
        "img/slider/blurry-1.jpg",
        "img/slider/blurry-2.jpg"
    ],  {duration: 3000, fade: 750});

    // Backsttretch slider index 5
    $(".banner-5").backstretch([
        "img/slider/business-1.jpg",
        "img/slider/business-2.jpg"
    ],  {duration: 3000, fade: 750});

    // Backsttretch slider index 7
    $(".banner-7").backstretch([
        "img/slider/creative_girl-1.jpg",
        "img/slider/creative_girl-2.jpg"
    ],  {duration: 3000, fade: 750});

    // Backsttretch slider index 7
    $(".banner-10").backstretch([
        "img/slider/banner10_1.jpg",
        "img/slider/banner10_2.jpg"
    ],  {duration: 3000, fade: 750});

    // Backsttretch slider index 14
    /*$(".home14").backstretch([
        "img/slider/travel-1.jpg",
        "img/slider/travel-2.jpg"
    ],  {duration: 3000, fade: 750});*/

    // Backsttretch slider index 18
    $(".home18").backstretch([
        "img/slider/science-1.jpg",
        "img/slider/science-2.jpg"
    ],  {duration: 3000, fade: 750});

    // Backsttretch slider index 19
    $(".home19").backstretch([
        "img/slider/food-1.jpg",
        "img/slider/food-2.jpg"
    ],  {duration: 3000, fade: 750});

    // Backsttretch slider index 20
    $(".home20").backstretch([
        "img/slider/book-1.jpg",
        "img/slider/book-2.jpg"
    ],  {duration: 3000, fade: 750});

    // Backsttretch slider index 22
    $(".home22").backstretch([
        "img/slider/parallax-1.jpg",
        "img/slider/parallax-2.jpg"
    ],  {duration: 3000, fade: 750});

    // Backsttretch slider index 23
    $(".home23").backstretch([
        "img/slider/wedding-1.jpg",
        "img/slider/wedding-2.jpg",
        "img/slider/wedding-4.jpg"
    ],  {duration: 3000, fade: 750});

    // Backsttretch slider index 28 and restaurant.php
    $(".home28").backstretch([
        "img/restaurant/slider-head1.jpg",
        "img/restaurant/slider-head2.jpg"
    ],  {duration: 3000, fade: 750});

    // home12 slider / index12
    var slide12 = $('.slide12').bxSlider({
        controls: false,
        autoHover: true,
        touchEnabled: true,
        pager: false,
        auto: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.active').removeClass('active');
            $('.slide12 > .item').eq(currentSlideHtmlObject).addClass('active')
        },
        onSliderLoad: function () {
            $('.slide12 > .item').eq().addClass('active')
        }
    });

    // Index 13

    var slide13 = $('.slide13').bxSlider({
        controls: true,
        autoHover: true,
        touchEnabled: true,
        pager: false,
        mode: 'fade',
        speed: 1500,
        pause: 6000,
        auto: false,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.slide13 .active').removeClass('active');
            $('.slide13 > .slide-item').eq(currentSlideHtmlObject).addClass('active')
        },
        onSliderLoad: function () {
            $('.slide13 > .slide-item').eq().addClass('active')
        }
    });

    $(".banner-slider13").owlCarousel({
        loop: true,
        items : 1,
        autoplay: true,
        dots: false,
        nav: true,
        mouseDrag: false,
        smartSpeed: 800
    });

    $('a.link[href^="#"]').on('click',function (e) {
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+ $(".navbar-default").height()
        }, 900);
        return 0
    });

    //var $boxs = $(".shop-wrapper > .pd-box");

    // var $btns = $(".product-filter li a").on("click", function() {
    //     $(this).closest('ul').children('li a').removeClass('active');
    //     $(this).addClass('active');
    //     $('.shop-wrapper').children('div').addClass('hidden');
    //     var str = $(this).attr('data-filter')
    //     $('.shop-wrapper').children('div').each(function(){
    //         if($(this).hasClass(str)){
    //             $(this).removeClass('hidden');
    //         }
    //     })
    //     return 0;


    // /*
    //     var active = $btns.removeClass("active").filter(this).addClass("active").data("filter");
    //     $boxs.hide().filter( "." + active ).fadeIn(450);*/
    // });

/*=================================================================
    Box Mode Slider
=================================================================*/

    $(".boxed-slider").bxSlider({
        controls: true,
        autoHover: true,
        pager: false,
        touchEnabled: true,
        prevText: '<i class="fa fa-angle-up"></i>',
        nextText: '<i class="fa fa-angle-down"></i>',
        auto: false,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.boxed-slider .active').removeClass('active');
            $('.boxed-slider > .slide-item').eq(currentSlideHtmlObject + 1).addClass('active')
        },
        onSliderLoad: function () {
            $('.boxed-slider > .slide-item').eq(1).addClass('active')
        }
    });

/*=================================================================
    Box Mode Slider2
=================================================================*/

    $(".boxed-slide2").bxSlider({
        controls: true,
        autoHover: true,
        pager: false,
        touchEnabled: true,
        prevText: '<i class="fa fa-angle-up"></i>',
        nextText: '<i class="fa fa-angle-down"></i>',
        auto: false,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.boxed-slide2 .active').removeClass('active');
            $('.boxed-slide2 > .item').eq(currentSlideHtmlObject + 1).addClass('active')
        },
        onSliderLoad: function () {
            $('.boxed-slide2 > .item').eq(1).addClass('active')
        }
    });

/*=================================================================
    home slide / index24
=================================================================*/

    $(".slide17").bxSlider({
        controls: true,
        autoHover: true,
        pager: false,
        mode: 'fade',
        touchEnabled: true,
        auto: false,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.slide17 .active').removeClass('active');
            $('.slide17 > .item').eq(currentSlideHtmlObject).addClass('active')
        },
        onSliderLoad: function () {
            $('.slide17 > .item').eq().addClass('active')
        }
    });

/*=================================================================
    home slide / index24
=================================================================*/

    $(".slide24").bxSlider({
        controls: false,
        autoHover: true,
        pager: false,
        touchEnabled: true,
        auto: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.slide24 .active').removeClass('active');
            $('.slide24 > .item').eq(currentSlideHtmlObject + 1).addClass('active')
        },
        onSliderLoad: function () {
            $('.slide24 > .item').eq(1).addClass('active')
        }
    });

/*=================================================================
    home slide / index25
=================================================================*/

    $(".slide25").bxSlider({
        controls: false,
        autoHover: true,
        pager: false,
        touchEnabled: true,
        auto: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.slide25 .active').removeClass('active');
            $('.slide25 > .item').eq(currentSlideHtmlObject + 1).addClass('active')
        },
        onSliderLoad: function () {
            $('.slide25 > .item').eq(1).addClass('active')
        }
    });

/*=================================================================
    home slide / index25
=================================================================*/

    $(".slide26").bxSlider({
        controls: true,
        autoHover: true,
        pager: false,
        touchEnabled: true,
        auto: false,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.slide26 .active').removeClass('active');
            $('.slide26 > .item').eq(currentSlideHtmlObject + 1).addClass('active')
        },
        onSliderLoad: function () {
            $('.slide26 > .item').eq(1).addClass('active')
        }
    });

/*=================================================================
    home slide / index27
=================================================================*/

    $(".slide27").bxSlider({
        controls: false,
        autoHover: true,
        pager: false,
        touchEnabled: true,
        auto: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.slide27 .active').removeClass('active');
            $('.slide27 > .item').eq(currentSlideHtmlObject + 1).addClass('active')
        },
        onSliderLoad: function () {
            $('.homse27 > .item').eq(1).addClass('active')
        }
    });

/*=================================================================
    home slide / index31
=================================================================*/

    $(".slide31").bxSlider({
        controls: false,
        autoHover: true,
        pager: false,
        touchEnabled: true,
        auto: true,
        onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
            console.log(currentSlideHtmlObject);
            $('.slide31 .active').removeClass('active');
            $('.slide31 > .item').eq(currentSlideHtmlObject + 1).addClass('active')
        },
        onSliderLoad: function () {
            $('.homse31 > .item').eq(1).addClass('active')
        }
    });


/*=================================================================
    home slide / index31
=================================================================*/

    $(".portfolio-single2").bxSlider({
        controls: true,
        autoHover: true,
        pager: false,
        touchEnabled: true,
        auto: true
    });

    $(".home-flex").flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: false
    });

    

    // Quote form validation
    $('#quote-form').validate({
        rules: {
            fullname: {
                required: false
            },
            message: {
                required: false
            },
            phone: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            policy: {
                required: true
            }
        },
        messages: {
            phone: {
                required: "Please Enter Phone Number",
                minlength: "please enter correct phone number"
            },
            email: {
                required: "Please Enter Your Email"
            },
            policy: "(Required)"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"quote-form.php",
                success: function() {
                    $('#quote-form :input').attr('disabled', 'disabled');
                    $('#quote-form').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#quote-form').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });


    /*-------------------------------------------------*/
    /* =  video 
    /*-------------------------------------------------*/

  if (self.location.href == top.location.href){}

  $('#bgndVideo').on("YTPStart",function(e){
     var currentTime = e.time;
     $("#pause").show();
     $("#play").hide();
     $('.mbYTP_wrapper').removeClass('active');

  });

  $('#bgndVideo').on("YTPUnstarted",function(e){
     var currentTime = e.time;
     $("#pause").hide();
     $("#play").show();
     $('.mbYTP_wrapper').addClass('active');
  });
  $('#bgndVideo').on("YTPPause",function(e){
     var currentTime = e.time;
     $("#pause").hide();
     $("#play").show();
  });
  //debug functions
  $("#bgndVideo").on("YTPStart", function(){
      $("#eventListener").html("YTPStart");
      $("#eventListener").append(" :: (state= "+ $("#bgndVideo").getPlayer().getPlayerState()+")");
      $("#eventListener").append(" :: (quality= "+ $("#bgndVideo").getPlayer().getPlaybackQuality()+")");
  });
  $("#bgndVideo").on("YTPLoop", function(e){
      $("#eventListener").html("YTPLoop");
      $("#eventListener").append(" :: (state= "+ $("#bgndVideo").getPlayer().getPlayerState()+")");
      $("#eventListener").append(" :: "+ e.counter);
  });
  $("#bgndVideo").on("YTPEnd", function(){
      $("#eventListener").html("YTPEnd");
      $("#eventListener").append(" :: (state= "+ $("#bgndVideo").getPlayer().getPlayerState()+")");
      console.debug("YTPEnd")
  });
  $("#bgndVideo").on("YTPPause", function(){
      $("#eventListener").html("YTPPause");
      $("#eventListener").append(" :: (state= "+ $("#bgndVideo").getPlayer().getPlayerState()+")");
  });
  $("#bgndVideo").on("YTPBuffering", function(){
      $("#eventListener").html("YTPBuffering");
      $("#eventListener").append(" :: (state= "+ $("#bgndVideo").getPlayer().getPlayerState()+")");
  });

  $(".player").mb_YTPlayer({
      onReady: function(){
          $("#eventListener").append(" (Player is ready)");
          $(".console").show(); 
      }
  });

/*=================================================================
    Banner section dynamic margin top
=================================================================*/

/*  function menuHeightFix(selector, paddingSelector){
        var menuSelector = jQuery(selector).innerHeight();
        var marginTop = paddingSelector;
        jQuery(marginTop).css({
            'margin-top': menuSelector
        });
    }

    menuHeightFix('#head','.home-banner');
    menuHeightFix('#head','.banner-2');
    menuHeightFix('#head','.home11');
    menuHeightFix('#head','.home24');
    menuHeightFix('.header26','.home26');
    menuHeightFix('#head','#blog-section');*/
    //menuHeightFix('#head','.page-head');

/*=================================================================
    Product Slider
=================================================================*/

    $(".product-slider").bxSlider({
        controls: false
    });

/*=================================================================
    gallery filter
=================================================================*/

    $(window).on('load', function() {
            // gallery 2 column (index 5)
            var $galleryFilter2c = $('.gallery-2column');
            $galleryFilter2c.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.gallery-filter a').click(function(){
                $('.gallery-filter .active').removeClass('active');
                $(this).addClass('active');
         
                var selector = $(this).attr('data-filter');
                $galleryFilter2c.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            // gallery 3 column (index 6)
            var $galleryFilter3c = $('.gallery-3column');
            $galleryFilter3c.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.gallery-filter a').click(function(){
                $('.gallery-filter .active').removeClass('active');
                $(this).addClass('active');
         
                var selector = $(this).attr('data-filter');
                $galleryFilter3c.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            //index 10
            var $galleryFilter = $('.gallery-filterable');
            $galleryFilter.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.gallery-filter a').click(function(){
                $('.gallery-filter .active').removeClass('active');
                $(this).addClass('active');
         
                var selector = $(this).attr('data-filter');
                $galleryFilter.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            //portfolio 3 col
            var $gallery3cols = $('.gallery-3cols');
            $gallery3cols.isotope({
                filter: '*',
                layoutMode: 'fitRows',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.gallery-filter a').click(function(){
                $('.gallery-filter .active').removeClass('active');
                $(this).addClass('active');
         
                var selector = $(this).attr('data-filter');
                $gallery3cols.isotope({
                    filter: selector,
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });


            // gallery-masonry (index 7)
            var $galleryMasonry = $('.gallery-masonry');
            $galleryMasonry.isotope({
                filter: '*',
                itemSelector: '.col-xs-12',
                masonry: {
                  columnWidth: 0
                },
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.gallery-filter a').click(function(){
                $('.gallery-filter .active').removeClass('active');
                $(this).addClass('active');
         
                var selector = $(this).attr('data-filter');
                $galleryMasonry.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

            // gallery fullwidth (index 8)
            var $galleryFullwidth = $('.gallery-fullwidth');
            $galleryFullwidth.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.gallery-filter a').click(function(){
                $('.gallery-filter .active').removeClass('active');
                $(this).addClass('active');
         
                var selector = $(this).attr('data-filter');
                $galleryFullwidth.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });


            // staff filtering (team member.php)
            var $galleryFullwidth = $(".staff-filtering");
            $galleryFullwidth.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false
                }
            });
         
            $(".gallery-filter a").click(function(){
                $(".gallery-filter .active").removeClass("active");
                $(this).addClass('active');
         
                var selector = $(this).attr("data-filter");
                $galleryFullwidth.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: false
                    }
                });
                return false;
            });
    });


    // staff filtering (team member.php)
    var $shopFilter = $(".shop-wrapper");
    $shopFilter.isotope({
        filter: "*",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false
        }
    });


    $(".product-filter a").click(function(){
        $('#ajax_details_common').slideUp('slow');
        $('.pd-box').css({
            marginBottom: 0
        })
        $(".product-filter .active").removeClass("active");
        $(this).addClass('active');
 
        var selector = $(this).attr("data-filter");
        $shopFilter.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: false
            }
        });
        return false;
    });
 

    $('.spn_link').on('click',function(){
         $('#ajax_details_common').slideUp('slow');

        $('.spn_link').removeClass('current_action');
        $(this).addClass('current_action');
        var data = {
            currentPosition: parseInt($('.current_action').closest('.pd-box').offset().top),
            parrentHeight: parseInt($('.current_action').closest('.pd-box').innerHeight()),
            ajaxContentHeight: parseInt($('#ajax_details_common').height()),
        }
        $('.pd-box').css({
            marginBottom: 0
        })
        $('.pd-box').each(function(){
            var thisOffset = parseInt($(this).offset().top);
            if( thisOffset == parseInt($('.current_action').closest('.pd-box').offset().top))
                $(this).css({
                    marginBottom: data.ajaxContentHeight
                })
        })

       /* $("html, body").stop().animate({
            scrollTop: (data.currentPosition)-50
        }, 1500, "easeInOutExpo");*/

        $('#ajax_details_common').css({
            top: parseInt($('.current_action').closest('.pd-box').offset().top) + data.parrentHeight,
        }).slideDown(1000);
        $shopFilter.isotope({'layout':"masonry"});
        return false;
    });

    $('body').on('click','.portfolio-close',function(e){
        $('.portfolio-item').removeClass('current_item');
        $('#ajax_details_common').slideUp('slow');
         $('.pd-box').each(function(){
            $(this).animate({
                marginBottom: 0
            },'slow',function(){
                $shopFilter.isotope({'layout':"masonry"});
            })
        })
        
        return false;
    });

    //masonry blog post landing page
    $(".masonry-2col").masonry({
        itemSelector: ".col-xs-12",
        columnWidth: 0
    });

    //masonry blog post landing page
    $(".timeline-blog>.posts-section").masonry({
        columnWidth: 0,
        itemSelector: '.post-entry'
    });

    var conWidht = $(window).width();
    $(".post-entry").each(function(){
        var test = $(this);
        var pos = jQuery(this).position();
        if(pos.left!='0'){
            $(this).addClass("right_con");
        }
        else{
            $(this).addClass("left_con");
        }
    });




    $('body').on('click','.close-product',function(e){
        $('.portfolio-item').removeClass('current_item');
        $('.portfolio_details').slideUp('slow');
        $('#portfolio_details').slideUp('slow');
        return false;
    });

    /*$("body").on('click','.close-product', function(event) {

        var data1 = {
            currentOffset : $('.currentItem').offset(),
            currentDetails : $(this).offset(),
            navbarHeight : $('.navbar-default').height()
        }

        $('.portfolio-item').removeClass('current_item');
        $('.portfolio_details').slideUp('slow',function(){
            var i = 0;
            var startScroll = setInterval(function(){
                i = i+7;
                window.scrollTo(0, data1.currentDetails.top-i);
                if(data1.currentDetails.top-i <= (data1.currentOffset.top - (data1.navbarHeight+ 30)))
                    clearInterval(startScroll);

            },5)
        });
        
        return 0;
    });*/

    
    // product lightbox wedding page
    $(".ajax-view").magnificPopup({
        type: 'ajax'
    });

    //zoom product image
    $(".zoom-img").zoom();


    var currentDate = new Date('Sat Jul 13 2017 20:38:31 GMT+0600 (Central Asia Standard Time)');

     $('div#clock').countdown(55 * 24 * 60 * 60 * 1000 + currentDate.valueOf(), function(event) {
        $this = $(this);
        switch(event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
            $this.find('h2#'+event.type).html(event.value);
            break;
            case "finished":
            $this.fadeTo('slow', .5);
            break;
       }
    });

    $(".rsvp").selectbox();


/*=================================================================
    RSVP Form Submit
=================================================================*/


    // Quote form validation
    $(".rsvp-form").validate({
        
        rules: {
            yourname: {
                required: true
            },
            youremail: {
                required: true,
                email: true
            },
            attending: {
                required: true
            },
            guest: {
                required: true
            }
        },
        messages: {
            yourname: {
                required: "Please write your name"
            },
            youremail: {
                required: "Please enter your email"
            },
            attending: {
                required: "Please select the perty"
            },
            guest: {
                required: "Please mention that how many guest with you"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"rsvp.php",
                success: function() {
                    //$('.rsvp-form :input').attr('disabled', 'disabled');
                    $('.rsvp-form').fadeTo( "slow", 1, function() {
                        //$(this).find(':input[type="submit"]').attr('disabled', 'disabled');
                        //$(this).find('label').css('cursor','default');
                        $('.rsvp-form .success').slideDown();
                    });
                },
                error: function() {
                    $('.rsvp-form').fadeTo( "slow", 1, function() {
                        $('.rsvp-form .failed').slideDown();
                    });
                }
            });
        }
    });


/*=================================================================
    Team Carousel
=================================================================*/

    $(".team-carousel").bxSlider({
        controls: true,
        autoHover: true,
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 320,
        touchEnabled: true,
        pager: false,
        moveSlides: 1,
        auto: true,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });

/*=================================================================
    Client Carousel
=================================================================*/

    $(".client-list").bxSlider({
        controls: false,
        autoHover: true,
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 300,
        slideMargin: 20,
        pager: false,
        moveSlides: 1,
        auto: true
    });

/*=================================================================
    Testimonial carousel fullwidth
=================================================================*/

    $(".testimonial-fullwidth").bxSlider({
        controls: false,
        autoHover: true,
        minSlides: 1,
        moveSlides: 1,
        slideMargin: 30,
        //slideWidth: dynamicWidth('.testimonial-fullwidth'),
        maxSlides: 2,
        touchEnabled: false,
        auto: true
    });

/*=================================================================
    Client page carousel
=================================================================*/

    $(".page-client-carousel").bxSlider({
        controls: true,
        autoHover: true,
        minSlides: 1,
        moveSlides: 1,
        slideWidth: 290,
        pager: false,
        slideMargin: 30,
        maxSlides: 4,
        touchEnabled: true,
        auto: false
    });

/*=================================================================
    Client page carousel
=================================================================*/

    $(".service-carousel").owlCarousel({
        loop: true,
        items : 3,
        autoplay: true,
        dots: false,
        margin: 30,
        nav: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0 : {
                items     : 1
            },
            // breakpoint from 480 up
            480 : {
                items     : 1
            },
            // breakpoint from 768 up
            768 : {
                items     : 2
            },
            // breakpoint from 1050 up
            1050 : {
                items     : 3
            }
        }
    });

/*=================================================================
    Client page carousel
=================================================================*/

    $(".portfolio-carousel").owlCarousel({
        loop: true,
        items : 4,
        autoplay: true,
        dots: false,
        nav: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0 : {
                items     : 1
            },
            // breakpoint from 480 up
            480 : {
                items     : 1
            },
            // breakpoint from 768 up
            768 : {
                items     : 2
            },
            // breakpoint from 1050 up
            1050 : {
                items     : 4
            }
        }
    });


/*=================================================================
    client carousel 2
=================================================================*/

    $(".client-carousel-2").bxSlider({
        controls: true,
        autoHover: true,
        minSlides: 1,
        moveSlides: 1,
        slideWidth: 270,
        pager: false,
        slideMargin: 30,
        maxSlides: 4,
        touchEnabled: true,
        auto: true
    });

    // Use css or opacity instead of hoverizr
    //$(".carousel-item > a img").hoverizr();


/*=================================================================
    Testimonial Slider
=================================================================*/

    $(".testimonial-slider").bxSlider({
        controls: false,
        autoHover: true,
        touchEnabled: true,
        pager: true,
        auto: true
    });

    $(".testimonial2").bxSlider({
        controls: true,
        autoHover: true,
        touchEnabled: true,
        pager: false,
        auto: true,
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });

    //index 10
    var bxliders = $("#client-review").bxSlider({
        mode: 'horizontal',
        auto: false,
        controls: false,
        pager: true,
        onSlideBefore: function(){
            $('.client-item').removeClass('client_active');
            var dataSlide = bxliders.getCurrentSlide();
            $('.client-item').each(function(){
                if(dataSlide == parseInt(($(this).attr('data-slide')))){
                    $(this).addClass('client_active');
                }
            })
        }
    });
    $('.client-item').on('click',function(){
        $('.client-item').removeClass('client_active');
        var dataSliderNo = $(this).attr('data-slide');
        dataSliderNo = parseInt(dataSliderNo);
        $(this).addClass('client_active');
        bxliders.goToSlide(dataSliderNo);
    });

/*=================================================================
    Corporate
=================================================================*/

    $(".corporate .service-item:not(.service-item.active)").on("mouseover", function() {
        $(".corporate .service-item.active").css("background-color", "#f1f1f1");
    });
    $(".corporate .service-item:not(.service-item.active)").on("mouseleave", function() {
        $(".corporate .service-item.active").css("background-color", "#ffffff");
    });

/*=================================================================
    Similar project carousel
=================================================================*/

    $(".similar-project").bxSlider({
        autoHover: true,
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 310,
        slideMargin: 10,
        pager: false,
        moveSlides: 1,
        auto: true
    });

    $(".socialShare").prettySocial();

    var projectHeight = $(".similar-project-item").innerHeight();

    $(".similar-project .project-hover").css('height', projectHeight);

/*=================================================================
    widget-img-slideshow
=================================================================*/

    $(".widget-img-slideshow").bxSlider({
        pager: false,
        autoHover: true,
        touchEnabled: true,
        adaptiveHeight: true,
        auto: true
    });


/*=================================================================
    Accordion
=================================================================*/

    $('.eydia-ac .panel-heading .panel-title a').on('click', function() {
        $('.panel-heading').removeClass('active');
        $(this).parents('.panel-heading').addClass('active');
    });

    $('#faq .panel-heading a').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.preventDefault();
            e.stopPropagation();
        }
    });

/*=================================================================
    Remove Placeholder On click
=================================================================*/

    
    $('input').focusin(function(){
        $('input').data('holder',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });
    $('input').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });
    $('textarea').focusin(function(){
        $('textarea').data('holder',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });
    $('textarea').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });

/*=================================================================
    Back to top
=================================================================*/
    
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#go-top").fadeIn(500)
        } else {
            $("#go-top").fadeOut(500)
        }
    });
    $("#go-top").on('click', function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });


/*=================================================================
    pricing switcher
=================================================================*/

    $(".p-monthly").on('click', function() {
        $(".p-yearly").removeClass('active');
        $(this).removeClass('active');
        $(this).addClass('active');
        $(".pricing-yearly").css('display', 'none');
        $(".pricing-monthly").css('display', 'block');
    });

    $(".p-yearly").on('click', function() {
        $(".p-monthly").removeClass('active');
        $(this).removeClass('active');
        $(this).addClass('active');
        $(".pricing-yearly").css('display', 'block');
        $(".pricing-monthly").css('display', 'none');
    });

    // mag tickerr / index37 
    $(".mag-ticker").flexslider({
        directionNav: false,
        controlNav: false,
        animation: "slide",
        direction: "vertical"
    });

    // featured slider / index37 
    $(".featured-slider").flexslider({
        controlNav: false,
        animation: "fade",
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });

    // featured slider / index37 
    $(".rc-carousel").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        margin: 15,
        dots: false,
        autoplay: false,
        smartSpeed: 600,
        mouseDrag: false,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0 : {
                items: 1
            },
            480 : {
                items: 1
            },
            768 : {
                items: 2
            },
            1050 : {
                items: 3
            }
        }
    });

    //buddypress

    $("#members-order-by").selectbox();


    /* Medical */

    var appointmentformHeight = $(".appointment").outerHeight();

    $(".appointment-form .make-appoint").on('click', function() {
        $(".make-appoint i").toggleClass(" fa-caret-up");
        $(".appointment").slideToggle();
    });

    $(".datepicker").datepicker({
        minDate: 0,
    });

    $(".datepicker2").datepicker({
        minDate: 0,
    });

    $(".timepicker1").timepicker();
    $(".timepicker2").timepicker();

    $(".search-tab-nav .toggle-form").on('click', function() {
        $(".tab-content").slideToggle();
        $(".search-tab-nav").toggleClass("opened");
        $(".toggle-form i").toggleClass("fa-angle-down");
    });

    //popup_iframe
    $('.popup-iframe').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
    //mpopup_inline
    $(".popup-inline").magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    /*======================================
        Travel page promo form validation
    ========================================*/
    $(".promo-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            person: {
                required: true
            },
            date: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please write your name"
            },
            email: {
                required: "Please enter your email"
            },
            person: {
                required: "Please how meny person travel"
            },
            date: {
                required: "Please select travel date"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url : "promo-form.php",
                success: function() {
                    //$('.promo-form :input').attr('disabled', 'disabled');
                    $('.promo-form').fadeTo( "slow", 1, function() {
                        //$(this).find(':input[type="submit"]').attr('disabled', 'disabled');
                        //$(this).find('label').css('cursor','default');
                        $('.promo-form .success').slideDown();
                    });
                },
                error: function() {
                    $('.promo-form').fadeTo( "slow", 1, function() {
                        $('.promo-form .failed').slideDown();
                    });
                }
            });
        }
    });


    // Medical Appointment form
    $(".appointment").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            date: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please write your name"
            },
            email: {
                required: "Please enter your email"
            },
            message: {
                required: "Please select the perty"
            },
            date: {
                required: "Please mention that how many guest with you"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"rsvp.php",
                success: function() {
                    //$('.rsvp-form :input').attr('disabled', 'disabled');
                    $('.rsvp-form').fadeTo( "slow", 1, function() {
                        //$(this).find(':input[type="submit"]').attr('disabled', 'disabled');
                        //$(this).find('label').css('cursor','default');
                        $('.rsvp-form .success').slideDown();
                    });
                },
                error: function() {
                    $('.rsvp-form').fadeTo( "slow", 1, function() {
                        $('.rsvp-form .failed').slideDown();
                    });
                }
            });
        }
    });

    /*Business 2 */

    $(".slide-search .search-sub").on("mouseover", function() {
        $(".header-search").addClass("active");
        $(".slide-search .search-field").focus();
    });

    $(".slide-search .search-sub, .slide-search .search-field").on("mouseleave", function() {
        if( $(".slide-search .search-field").val().length == 0  && !$(".slide-search .search-field").focus()) {
            $(".header-search").removeClass("active");
        }
    });
   $(".slide-search .search-field").on("focusout", function() {
        if( $(".slide-search .search-field").val().length == 0) {
            $(".header-search").removeClass("active");
        }
    });

    $(".one-slide").owlCarousel({
        loop:true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true
    });

    $(".one-slide-control").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        mouseDrag: false,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    $(".carousel-event").owlCarousel({
        items: 3,
        nav: true,
        loop: true,
        margin: 30,
        dots: false,
        autoplay: true,
        mouseDrag: false,
        smartSpeed: 600,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0 : {
                items: 1
            },
            480 : {
                items: 1
            },
            768 : {
                items: 2
            },
            1050 : {
                items: 3
            }
        }
    });

    $(".tweet-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        mouseDrag: false,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

    $(".agency-prtflo").each(function(){
        var bgcolor = $(this).attr("data-hover-color");
        var contentcolor = $(this).attr("data-content-color");
        $(this).find(".portfolio-desc").css({
            "background-color": bgcolor
        });
        $(this).find(".portfolio-desc-inner").css({
            "color": contentcolor
        });
        $(this).find(".portfolio-desc span a").css({
            "color": contentcolor,
            "border-color": contentcolor
        });
    });

    // college tooltip

   /* $(".course-lessons > li").on('mouseenter', function() {
        $(this).addClass("active");
        $(this).children(".lesson-overview").fadeIn(400);
    });

    $(".course-lessons > li").on('mouseleave', function() {
        $(this).removeClass("active");
        $(this).children(".lesson-overview").fadeOut(100);
    });*/

    $(".course-popup").popover();

    $('.inline-magnific').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    /*=================================================================
        Restaurant Post Reel
    =================================================================*/

    

    /*=================================================================
        Donation form validation
    =================================================================*/

    $(".donate--form").validate({
        rules: {
            fname: {
                required: true
            },
            lname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            address: {
                required: true
            },
            note: {
                required: false
            }
        },
        messages: {
            fname: {
                required: "Please write your name"
            },
            lname: {
                required: "Please write your last name"
            },
            email: {
                required: "Please enter your email"
            },
            phone: {
                required: "Please write your phone number"
            },
            address: {
                required: "Please write your address"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"rsvp.php",
                success: function() {
                    //$('.rsvp-form :input').attr('disabled', 'disabled');
                    $('.donate--form').fadeTo( "slow", 1, function() {
                        //$(this).find(':input[type="submit"]').attr('disabled', 'disabled');
                        //$(this).find('label').css('cursor','default');
                        //$('.rsvp-form .success').slideDown();
                    });
                },
                error: function() {
                    $('.rsvp-form').fadeTo( "slow", 1, function() {
                        $('.rsvp-form .failed').slideDown();
                    });
                }
            });
        }
    });

    /*=================================================================
        Map Form validation
    =================================================================*/

    $(".map-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
        },
        messages: {
            name: {
                required: "Please write your name"
            },
            email: {
                required: "Please enter your email"
            },
            message: {
                required: "Please write your message"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"rsvp.php",
                success: function() {
                    //$('.rsvp-form :input').attr('disabled', 'disabled');
                    $('.donate--form').fadeTo( "slow", 1, function() {
                        //$(this).find(':input[type="submit"]').attr('disabled', 'disabled');
                        //$(this).find('label').css('cursor','default');
                        //$('.rsvp-form .success').slideDown();
                    });
                },
                error: function() {
                    $('.rsvp-form').fadeTo( "slow", 1, function() {
                        $('.rsvp-form .failed').slideDown();
                    });
                }
            });
        }
    });

    $("#webticker").webTicker();

    
    $(".news-box-carousel").owlCarousel({
        loop: true,
        items : 3,
        autoplay: false,
        dots: false,
        nav: true,
        autoplayHoverPause: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0 : {
                items     : 1
            },
            // breakpoint from 480 up
            480 : {
                items     : 1
            },
            // breakpoint from 768 up
            768 : {
                items     : 3
            }
        }
    });


    /*
     * FP Carousel
     * for blog2.php
     *
     **/

    $(".fp-carousel").owlCarousel({
        items: 4,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        mouseDrag: false,
        autoplayHoverPause: true,
        autoWidth:true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        onInitialized: function () {
            $(".fp-item .fp-excerpt").each(function(){
                var fpText = $(this).height();
                $(this).css("margin-bottom", (-fpText-14));
            })
        },
        responsive: {
            0 : {
                items: 1
            },
            480 : {
                items: 1
            },
            768 : {
                items: 2
            },
            1150 : {
                items: 4
            }
        }
    });


    /**
    *   Restaurant Reservation Form Validation
    */
    $(".reservation-form").validate({
        rules: {
            date: {
                required: true
            },
            time: {
                required: true
            },
            person: {
                required: true
            }
        },
        messages: {
            date: {
                required: "Date seems invalid."
            },
            person: {
                required: "How meny guest with you?"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"restaurant-reservation.php",
                success: function() {
                    //$('.rsvp-form :input').attr('disabled', 'disabled');
                    $('.reservation-form').fadeTo( "slow", 1, function() {
                        //$(this).find(':input[type="submit"]').attr('disabled', 'disabled');
                        //$(this).find('label').css('cursor','default');
                        $('.reservation-area .success').slideDown();
                    });
                },
                error: function() {
                    $('.reservation-form').fadeTo( "slow", 1, function() {
                        $('.reservation-area .failed').slideDown();
                    });
                }
            });
        }
    });


});

// ==========  START GOOGLE MAP ========== //

function initialize() {
    
    
    // index 4
    var myLatLng = new google.maps.LatLng(23.751510, 90.386137);
    var mapOptions = {
        zoom: 14,
        center: myLatLng,
        disableDefaultUI: false,
        scrollwheel: true,
        navigationControl: true,
        mapTypeControl: true,
        scaleControl: true,
        draggable: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map-canvas4'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: ''
    });

}
google.maps.event.addDomListener(window, "load", initialize);

google.maps.event.addDomListener(window, "load", function(){

    // index all
    var myLatLng2 = new google.maps.LatLng(23.751510, 90.386137);
    var mapOptions = {
        zoom: 14,
        center: myLatLng2,
        disableDefaultUI: false,
        scrollwheel: true,
        navigationControl: true,
        mapTypeControl: true,
        scaleControl: true,
        draggable: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


    var marker = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        icon: 'img/location-icon.png',
        title: ''
    });
    
});
// ========== END GOOGLE MAP ========== //

$(function() {
    // post thumb slider
    $("ul.post-thumb").bxSlider({
        pager: false,
        adaptiveHeight: true,
        mode: "fade"
        //onSliderLoad: function(){}
    });

    // blog 2 column
    $(".blog-masonry").masonry({
        columnWidth: 0,
        itemSelector: '.col-xs-12'
    });

    // blog two column masonry
/*  var $blogMasonry = $('');
    $blogMasonry.isotope({
        itemSelector: '.col-xs-12',
        masonry: {
            columnWidth: 0,
            gutter: 0
        }
    });

    // blog two column masonry
    var $blogMasonry = $('.blog-3-column');
    $blogMasonry.isotope({
        itemSelector: '.col-xs-12',
        masonry: {
            columnWidth: 0,
            gutter: 0
        }
    });*/


    // fitvids
    //$(".post-media .video").fitVids();

    // fun facts counting
    $(".fact-item").appear(function () {
        $(".fact-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

    // single team stat counting
    $(".stat-item").appear(function () {
        $(".stat-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

    // fun facts counting
    $('.pixelcoder_counter').countTo({
        speed: 800
    });


    // flickr feed

    $('.flickr-widget').jflickrfeed({
        limit: 9,
        qstrings: {
            id: '37304598@N02'
        },
        itemTemplate:
        '<li>' +
            '<a data-lightbox="flickr-feed" href="{{image}}" title="{{title}}">' +
                '<img src="{{image_m}}" alt="{{title}}">' +
            '</a>' +
        '</li>'
    });


    // flickr widget for multipage footer

    $('.flickr-footer').jflickrfeed({
        limit: 12,
        qstrings: {
            id: '37304598@N02'
        },
        itemTemplate:
        '<li>' +
            '<a data-lightbox="flickr-feed" href="{{image}}" title="{{title}}">' +
                '<img src="{{image_s}}" alt="{{title}}">' +
            '</a>' +
        '</li>'
    });

    // Twitter Feed
    $(".tw33t").twittie({
        dateFormat: "%b. %d, %Y",
        template: "{{tweet}}",
        count: 1
    });

    // Twitter slider
    $("ul.tweet-slider").bxSlider({
        pager: false,
        auto: true
    });

    /*jQuery('.navbar-nav li.elems>a').hover(function(event){
        var dataInfo = {
            wHeight : jQuery(window).innerHeight(),
            mouseTop : event.pageY,
            chilHeight : jQuery(this).next('ul').outerHeight(),
            chilTop : jQuery(this).next('ul').offset()
        }
        var totalHeight = dataInfo.mouseTop + dataInfo.chilHeight
        var marginTop = totalHeight - dataInfo.wHeight
        if(totalHeight>=dataInfo.wHeight){
            jQuery(this).next('ul').css({
                "margin-top": '-'+marginTop+'px'
            })
        }
    })*/

    // Progress bar
    $('.progress .progress-bar').progressbar();

    $(".progress-set-5 .progress-bar").each(function(){
        if($(this).attr('data-transitiongoal') >= "92"){
            $(this).parent(".progress").addClass("progress-full");
        }else{
            $(this).parent(".progress").removeClass("progress-full");
        }
    });

    $(".progress-set-3 .progress-bar").each(function(){
        if($(this).attr('data-transitiongoal') >= "92"){
            $(this).parent(".progress").addClass("progress-full");
        }else{
            $(this).parent(".progress").removeClass("progress-full");
        }
    });

    
    // Pie Chart
    $('.chart1').circliful();

    // Counter Item
    $(".counter-item").appear(function () {
        $(".counter-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

    // Counter Item
    $(".timer-item").appear(function () {
        $(".timer-item [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });

});

function scrollFix (){
    /*if($(window).width() >= 768){
        if ($(window).scrollTop() > 20) {
            $(".transparent-head .header-top").stop().slideUp();
        } else {
            $(".transparent-head .header-top").stop().slideDown();
        }
    }*/
}

/*dynamic width for textimonial carousel*/
/*function dynamicWidth(container,col = 2){
    var windowWidth = jQuery(container).width()-30;
    var elementWidth;
    if(jQuery(window).width()<=767){
        elementWidth = parseInt(windowWidth+30);
    }else{
        elementWidth = parseInt(windowWidth/col);
    }
    return elementWidth;
}*/

$('.social_animation a i').on('mouseover',function(){
    $('.social_animation a span').removeClass('current');
    $('.social_animation a').each(function(){
        if($(this).hasClass('prev_color')){
            $(this).children('span').css('z-index', 3);
        }
        else{
            $(this).children('span').css('z-index','1')
        }
    });
    $(this).prev().css({
        'z-index' : 4
    }).addClass('current')/*
    $('.social_animation a span').css({
        'z-index':-2
    });*/
    $(this).prev('span').css({
        'width' : 0,
        'height' : 0,
        'margin' : 'auto',
        'background-color': $(this).prev('span').attr('data-color')
    })
   $(this).prev('span').animate({
        'margin-left' : -2500,
        'margin-top' : -2500,
        'width' : 5000,
        'height' : 5000
    },2500)
})

$('.social_animation a i').on('mouseleave',function(){
    $('.social_animation a').removeClass('prev_color');
    $(this).parent().addClass('prev_color');
})

$('.social_animation').on('mouseleave',function(){
    $('.social_animation a span').each(function(){
        if($(this).hasClass('current')){
            $(this).animate({
                'width' : 0,
                'height' : 0,
                'margin' : 0
            },700)
        }else{
           $(this).animate({
                'width' : 0,
                'height' : 0,
                'margin' : 0
            },0) 
        }
    })
    
})