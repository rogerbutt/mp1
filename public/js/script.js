$(document).ready(function(){var a=$("nav");$(".season").click(function(){}),$(window).scroll(function(){var b=$(window).scrollTop();b>=200?a.addClass("nav-small"):a.removeClass("nav-small"),$("nav ul li a").css({"border-bottom":"none"});var c=$("#characters").offset().top-51,d=$("#seasons").offset().top-51,e=$("#social").offset().top-51,f={"border-bottom":"2px solid white"};c>b&&b>d&&$("#a-seasons").css(f),e>b&&b>c&&$("#a-characters").css(f),b>=e&&$("#a-social").css(f)}),$("nav ul li a").click(function(a){a.preventDefault();var b=$(this).attr("href"),c=$(b).offset().top-50;$("html, body").animate({scrollTop:c},500)});var b=$(".carousel").find(".character"),c=0;b.first().addClass("active"),b.eq(c+1).addClass("next"),b.eq(c+1).css({left:"100%",display:"none"}),b.eq(b.length-1).addClass("prev").css({left:"-100%"});var d=!0;$("#carousel-left").click(function(a){if(a.preventDefault(),d){d=!1;var e=c+1;e===b.length&&(e=0);var f=c-1;0>f&&(f=b.length-1),b.eq(e).css({display:"block"}),b.eq(c).animate({left:"-=100%"},700),b.eq(e).animate({left:"0%"},700,function(){b.eq(f).removeClass("prev"),b.eq(c).removeClass("active").addClass("prev"),b.eq(e).removeClass("next").addClass("active"),c=e,e=c+1,e===b.length&&(e=0),b.eq(e).css({left:"100%",display:"none"}).addClass("next"),d=!0})}else $(this).clearQueue()}),$("#carousel-right").click(function(a){if(a.preventDefault(),d){var e=c+1;e===b.length&&(e=0);var f=c-1;0>f&&(f=b.length-1),b.eq(c).animate({left:"+=100%"},700),b.eq(f).animate({left:"0%"},700,function(){b.eq(e).removeClass("next"),b.eq(c).removeClass("active").addClass("next").css({display:"none"}),b.eq(f).removeClass("prev").addClass("active"),c=f,f=c-1,0>f&&(f=b.length-1),b.eq(f).css({left:"-100%"}).addClass("prev"),d=!0})}else $(this).clearQueue()})});