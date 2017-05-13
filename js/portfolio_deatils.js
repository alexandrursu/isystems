$(function() {
	"use strict";
	//for portfolio

	$(".product-wrapper .link").on('click', function(event) {
		event.preventDefault();
		$(".product-wrapper").removeClass("current_item");
		$(".portfolio-details.filter").slideDown('slow');
		$(".product-wrapper").addClass("current_item");
	});

	$('.product-wrapper .link').on('click',function(){
		var wraperOffset = jQuery('.shop-wrapper').offset();
		$('.portfolio_details').parent().css({
			'margin-bottom':0
		})
		var thisparent = jQuery(this).closest('.product-wrapper');
		var selectCanvas = jQuery(this).closest('.product-wrapper').children('.portfolio_details');
		var selectCanvas2 = jQuery(this).closest('.product-wrapper').children('.portfolio_details').children('.portfolio-details');
		selectCanvas.slideUp('slow');
		var wraperOffset = jQuery('.shop-wrapper').offset();
		var wraperOffsetTop = wraperOffset.left;
		var thisOffset = thisparent.offset();
		var thisOffsetTop = thisOffset.left;
		var thisPostion = thisOffsetTop-wraperOffsetTop;
		$('.product-wrapper').removeClass('current_item');
		$(this).closest('.product-wrapper').addClass('current_item');
		$('.portfolio_details').html('');
		$('.portfolio_details').slideUp('slow',function(){
			
		});
		var data ={
			postId : $(this).attr('data-post-id')
		}
		jQuery(this).closest('.product-wrapper').children('.portfolio_details').load('post.html',data,function(res){
			

			selectCanvas.css({
				'margin-left': '-'+thisPostion+'px',
				'width': jQuery('.shop-wrapper').width()
			});
			selectCanvas.slideDown('slow',function(){
				thisparent.css({
					'margin-bottom': selectCanvas2.innerHeight()
				})/*
				var r = 0;
				var startScroll = setInterval(function(){
					r = r+5;
					if(r<=50){
						window.scrollBy(0,50);
					}else{
						clearInterval(startScroll);
					}
					
				}, 50);*/
			});
		});

		return false;
	});
});