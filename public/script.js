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
	var ctx = $("#skillChart").get(0).getContext("2d");
	var data = {
		labels: ["HTML/CSS",  "C/C++","Javascript+Node", "SQL", "MongoDB", "PHP", "Android"],
			datasets: [
			
			{
	label: "My dataset",
       fillColor: "rgba(151,187,205,0.2)",
       strokeColor: "rgba(151,187,205,1)",
       pointColor: "rgba(151,187,205,1)",
       pointStrokeColor: "#fff",
       pointHighlightFill: "#fff",
       pointHighlightStroke: "rgba(151,187,205,1)",
       data: [75, 30,70, 40, 60,50, 45]
			}
			]	
	};
	//var mq = window.matchMedia('(max-width: 800px)');
	var pointSize = 20;
	if(mq.matches){
		pointSize = 10;
	    }
	var myNewChart = new Chart(ctx).Radar(data,{
		pointLabelFontSize : pointSize,
		angleLineColor:"rgba(100,100,100,1)",
		pointLabelFontColor:"#ffffff"
		});
});
function alignments(){
	$("#skillSet").css({"top":$("#liftoffIntro").height()+50+"px"});	
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
		console.log($('body').scrollTop()+":"+ $('#liftoff').offset().top);
		if($('body').scrollTop() <= $('#liftoff').offset().top+30){
			$("#liftoffIntro").addClass("animated fadeInDown");
			$("#skillSet").addClass("animated fadeInUp");
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
