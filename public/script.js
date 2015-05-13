$(function(){
	window.scrollTo(0, $("#pad").offset().top);
	console.log($("#pad").offset().top)
	smoothScroll();
	$("#mePhoto").mouseover(function(){
			$("#mePhoto").removeClass('animated flipOnY');
			setTimeout(function(){
					$("#mePhoto").addClass('animated flipOnY');
			},100);				
});
	alignments();
});
function alignments(){
	//$("#padIntro").css({"top":$("#wildIntro").height()+$("#mePhoto").height()+10+"px"});	
}
function smoothScroll(){
	jQuery.extend(jQuery.easing, {
easeOutQuint: function(x, t, b, c, d) {
return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
});

var wheel = false,
    $docH = $(document).height() - $(window).height(),
    $scrollTop = $(window).scrollTop();

$(window).bind('scroll', function() {
		if (wheel === false) {
		$scrollTop = $(this).scrollTop();
		}
		});
$(document).bind('DOMMouseScroll mousewheel', function(e, delta) {
		delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;
		wheel = true;

		$scrollTop = Math.min($docH, Math.max(0, parseInt($scrollTop - delta * 30)));
		$('body').stop().animate({
scrollTop: $scrollTop + 'px'
}, 1000, 'easeOutQuint', function() {
wheel = false;
});
		return false;
		});
}
