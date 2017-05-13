// accordion js

$(document).ready(function(){
    $(".short_code_image_gallery a[rel^='pixcphoto[gallery]']").prettyPhoto();
    $(".sc_light_box a[rel^='pixcphoto']").prettyPhoto();

    $('#sc_modal_6').on('show.bs.modal', function (e) {
        setTimeout(function(){
            modalMap();
        }, 300);
    })
    // shortcode code
    jQuery('#edit_code').on('click',function(){
        jQuery(this).hide();
        var dataCode = jQuery('#sc_code_body').text();
        jQuery('#sc_code_textarea').fadeIn(500).val(dataCode);
        jQuery('#save_code, #cancel_code').fadeIn(0);
    })
    jQuery('#copy_code').on('click',function(){
        var dataCode = jQuery('#sc_code_body').text();
        window.clipboardData.setData('Text',dataCode);

    })
    jQuery('#save_code').on('click',function(){
        var dataCode = jQuery('#sc_code_textarea').val();
        dataCode = dataCode.trim();
        jQuery('#sc_code_textarea').fadeOut(500);
        jQuery('#sc_code_body').text(dataCode);
        jQuery('#edit_code').fadeIn(0);
        jQuery('#save_code, #cancel_code').fadeOut(0);
    })
    jQuery('#cancel_code').on('click',function(){
        jQuery('#sc_code_textarea').fadeOut(500);
        jQuery('#edit_code').fadeIn(0);
        jQuery('#save_code, #cancel_code').fadeOut(0);
    })
    // ********************** Accordion Code start ******************
    /*$('.accordion_title').each(function(){
     if(!$(this).parent().parent().hasClass('active')){
     var activeIcon = $(this).attr('data-active-icon');
     var DeActiveIcon = $(this).attr('data-deactive-icon');
     $(this).find('.icon').removeClass(activeIcon);
     $(this).find('.icon').addClass(DeActiveIcon);
     }
     })
     $('.panel-heading').click(function(){
     $('.panel-heading').removeClass('active');
     if(!$(this).next('.panel-collapse').hasClass('in')){
     $(this).addClass('active');
     }
     $('.accordion_title').each(function(){
     var activeIcon = $(this).attr('data-active-icon');
     var DeActiveIcon = $(this).attr('data-deactive-icon');
     $(this).find('.icon').removeClass(activeIcon);
     $(this).find('.icon').addClass(DeActiveIcon);
     })
     var activeIcon = $(this).find('.accordion_title').attr('data-active-icon');
     var DeActiveIcon = $(this).find('.accordion_title').attr('data-deactive-icon');
     if($(this).hasClass('active')){
     $(this).find('.icon').removeClass(DeActiveIcon);
     $(this).find('.icon').addClass(activeIcon);
     }
     var activeColor = $(this).find('.accordion_title').css('background-color');
     $(this).next().find('.panel-body').css({"border-color":activeColor});
     });*/
    // ********************** Accordion Code End ******************
    // this code for menubar
    jQuery('#icon_setup_menu button').on('click',function(){
        $('#icon_setup_menu button').removeClass('active');
        $(this).addClass('active');
        var iconAlignmentValue = $(this).attr('data-icon-alignment');
        $('.accordion_area').removeClass('icon_left icon_right icon_0');
        $('.accordion_area').addClass(iconAlignmentValue);
    })
    jQuery('#boxmodemenu button').on('click',function(){
        $('#boxmodemenu button').removeClass('active');
        $(this).addClass('active');
        var boxmode = $(this).attr('data-boxmode');
        if(boxmode == 'box_1'){
            $('.accordion_area').addClass('boxmode');
        }
        else if(boxmode == 'box_0'){
            $('.accordion_area').removeClass('boxmode');
        }
    });

    // ********************** Accordion Code start ******************

    $('.sc_accordion .panel-heading a, .sc_accordion2 .panel-heading a').on('click',function(e){
        if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
            e.preventDefault();
            e.stopPropagation();
        }
    });

    $('.eydia-tg .panel-heading .panel-title a').on('click', function() {
        $(this).parent().parent().toggleClass('active');
    });

    // button code start

    $('.fancy_closs').click(function(){
        $('.shortcode_fancy').fadeOut();
    });

    $('.button_area').find('.btn').click(function(){
        var shortcode = $(this).attr('data-btn-shortcode');
        $('.shortcode_fancy div pre').text(shortcode);
        $('.shortcode_fancy').fadeIn();
        return false;
    });

    //parallax shortcode
    if( $(window).width() >= 768){
        $(".bg_one.parallax").parallax("50%", 0.5);
        $(".bg_two.parallax").parallax("50%", 0.5);
        $(".bg_3.parallax").parallax("50%", 0.5);
        $(".bg_4.parallax").parallax("50%", 0.5);
    };

});

function modalMap() {
    var myLocation = new google.maps.LatLng(36.966953,-122.018562);
    var mapOptions = {
        center: myLocation,
        zoom: 18,
        scrollwheel: true
    };
    var map1 = new google.maps.Map(document.getElementById("map_canvas_modal"),mapOptions);
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map1,
        title:"Hotel Name",
        animation: google.maps.Animation.DROP
    });
}
$('.pix_sc_slider1').flexslider({
    animation: "slide",
    pauseOnHover: true,
    directionNav: false,
    smoothHeight: true,
    slideshow: true,
    easing: "easeOutQuad",//easeOutBounce
    useCSS: false
});
$('.pix_sc_slider3').flexslider({
    animation: "slide",
    pauseOnHover: true,
    smoothHeight: true,
    directionNav: false
});
$('.pix_sc_slider2').flexslider({
    animation: "slide",
    directionNav: false,
    pauseOnHover: true,
    smoothHeight: true,
    controlNav: "thumbnails"
});
$('.latest_project_slider').flexslider({
    animation: "slide",
    controlNav: false,
    itemWidth: 380,
    pauseOnHover: true,
    itemMargin: 0,
    prevText: "<i class='fa fa-angle-left'></i>",
    nextText: "<i class='fa fa-angle-right'></i>"
});
$('.content_slider1').flexslider({
    animation: "slide",
    directionNav: true,
    pauseOnHover: true,
    controlNav: false,
    slideshowSpeed: 4000,
    prevText:"",
    nextText:""
});
$('.content_slider2').flexslider({
    animation: "fade",
    directionNav: true,
    pauseOnHover: true,
    controlNav: false,
    slideshowSpeed: 4000,
    prevText:"",
    nextText:""
});
$('.sc_testimonial_1').flexslider({
    animation: "slide",
    pauseOnHover: true,
    directionNav: true,
    slideshowSpeed: 3000,
    controlNav: false,
    slideshow: false,
    prevText: "",
    nextText: ""
});
$('.sc_testimonial_2').flexslider({
    animation: "slide",
    pauseOnHover: true,
    directionNav: true,
    slideshowSpeed: 3000,
    controlNav: false,
    prevText: "",
    nextText: ""
});

$(".sc_testimonial_3").owlCarousel({
    loop:true,
    nav:true,
    items: 1,
    dots: false,
    autoplay: false,
    mouseDrag: false,
    smartSpeed: 800,
    autoplayHoverPause: true
});