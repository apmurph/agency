

$(function() {
	$('.gallery').flickity();
	$('a').smoothScroll();
	$('.intro h1').click(function(){
	});
	$('.choose_article li').click(function(){
		$('.border_top').removeClass('border_top');
		$('.arrow_down').removeClass('arrow_down');
		$('.choose_display').removeClass('choose_display');
		$(this).toggleClass('border_top');
		$(this).children().toggleClass('arrow_down');
		$(this).next().toggleClass('choose_display');
	});
	$('.best_features li').click(function(){
		$('.feature_display').removeClass('feature_display');
		$('.feature_li').removeClass('feature_li');
		$(this).next().toggleClass('feature_display');
		$(this).toggleClass('feature_li');
	});

	var pictureHeight = $('.gallary div').width();
	$('.gallary div').css({
    'height': pictureHeight + 'px'
	});
});

