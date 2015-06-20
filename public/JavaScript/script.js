function automate(){
	var closeCounter = 4;
	var closeInterval = setInterval(function(){
		console.log("Close your console :) "+ closeCounter);
		closeCounter--;
		if(closeCounter==0){
			window.clearInterval(closeInterval);
			$('body').animate({
				scrollTop:$("#liftoff").offset().top
			},1000,function(){
			
			});
		}
	},1000);
		
}
$(function(){
	$("#typedSpan").typed({
		strings: ["programmer","CS undergrad at NITT","star gazer","jedi","pizza lover","geek"],
		typeSpeed: 60,
		loop:true
	});

	window.scrollTo(0, $("#pad").offset().top);
	//console.log($("#pad").offset().top)
	var mq = window.matchMedia('(max-width: 800px)');
	smoothScroll();
	if(!mq.matches){
		$(window).resize(function(){
		window.scrollTo(0, $("#pad").offset().top);
		});
	}
	$("#mePhoto").mouseover(function(){
			$("#mePhoto").removeClass('animated flipOnY');
			setTimeout(function(){
					$("#mePhoto").addClass('animated flipOnY');
			},100);				
	});
	alignments();
});
function alignments(){
//	$("#skillSet").css({"top":$("#liftoffIntro").height()+50+"px"});	
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

var liftOffCreated=false;

$(window).bind('scroll', function() {
		if($('body').scrollTop() <= $('#liftoff').offset().top+30){
			$("#liftoffIntro").addClass("animated fadeInDown");
			$("#skillSet").addClass("animated fadeInUp");
			if(!liftOffCreated){
			$(".skillLi").css("opacity",0);
			setTimeout(function(){
					var skillLiIndex = 0;
					var animateLi = setInterval(function(){
							var li = $(".skillLi")[skillLiIndex];
							$(li).addClass("animated fadeInDown");	
							skillLiIndex++;
							//console.log(skillLiIndex);
							if(skillLiIndex == $(".skillLi").length){
							window.clearInterval(animateLi);
							}
							},500);
					},200);
			}
			liftOffCreated = true;
		}
		if($('body').scrollTop() <= $('#losingEngines').offset().top+30){
			$("#losingEnginesIntro").addClass("animated fadeInDown");
			//$("#skillSet").addClass("animated fadeInUp");
		}
		if($('body').scrollTop() <= $('#inOrbit').offset().top+30){
			$("#inOrbitIntro").addClass("animated fadeInDown");
			//$("#skillSet").addClass("animated fadeInUp");
		}
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
