$(function() {
	"use strict";
	$('.portfolio-item .link').on('click',function(){
		$('#portfolio_details').slideUp('slow');
		$('.portfolio-item').removeClass('current_item');
		$(this).closest('.portfolio-item').addClass('current_item');
		var data ={
			postId : $(this).attr('data-post-id')
		}
		$('#portfolio_details').load('post.html',data,function(res){
			$('.portfolio-item a.link').click(function(){
			    $('html, body').animate({
			        scrollTop: $( $(this).attr('href') ).offset().top
			    }, 1200);
			    return false;
			});
			$('#portfolio_details').slideDown('slow');
		});
		return false;
	});
});