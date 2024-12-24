$(function() {

	// Yandex.Metrika counter
		!function(e,t,a){(t[a]=t[a]||[]).push(function(){try{t.yaCounter35150355=new Ya.Metrika({id:35150355,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0})}catch(e){}});var c=e.getElementsByTagName("script")[0],n=e.createElement("script"),r=function(){c.parentNode.insertBefore(n,c)};n.type="text/javascript",n.async=!0,n.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",r,!1):r()}(document,window,"yandex_metrika_callbacks");


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
/*	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};*/

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });



	// YouTube-Video-BG
	$(document).ready(function() {
		var is_mobile = false;

		if( $('.player').css('display')=='none') {
			is_mobile = true;
		}
		if (is_mobile == true) {
				//Conditional script here
				$('.big_background').addClass('big-background_default_image');
			}else{
				$(".player").mb_YTPlayer();
			};



	// mobile-menu
	$(".toggle_mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden_mnu").slideToggle();
		return false;
	});
});


// Magnific popup
$('.popup-with-zoom-anim').magnificPopup({
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

	// masonry
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		// $('.item').imagefill();
		$container.masonry({
			columnWidth: ".item",
		itemSelector: ".item"
	});
});

// pjax
$(document).pjax('a.logo, .mnu_left a', '.pjax_container', {fragment: '.pjax_container'});
$('.pjax_container').on('pjax:success', function() {
	$.pjax({
		url:window.location.href,
		container: '.box-mnu',
		fragment: '.box-mnu'
		// fragment: '.player'
	});


	// YouTube-Video-BG
	// var is_mobile=!1;"none"==$(".player").css("display")&&(is_mobile=!0),1==is_mobile?$(".big_background").addClass("big-background_default_image"):$(".player").mb_YTPlayer();

	// isotope
	// $(document).ready(function(){var t=$(".isotope").isotope({itemSelector:".element-item",layoutMode:"fitRows",getSortData:{name:".name",symbol:".symbol",number:".number parseInt",category:"[data-category]",weight:function(t){var e=$(t).find(".weight").text();return parseFloat(e.replace(/[\(\)]/g,""))}}}),e={number1000:function(){var t=$(this).find(".number").text();return parseInt(t,10)<=1e3},number10015000:function(){var t=$(this).find(".number").text();return parseInt(t,10)>1e3&parseInt(t,10)<=5e3},ium:function(){var t=$(this).find(".name").text();return t.match(/ium$/)}};$("#filters").on("click","button",function(){var n=$(this).attr("data-filter");n=e[n]||n,t.isotope({filter:n})}),$("#sorts").on("click","button",function(){var e=$(this).attr("data-sort-by");t.isotope({sortBy:e})}),$(".button-group").each(function(t,e){var n=$(e);n.on("click","button",function(){n.find(".is-checked").removeClass("is-checked"),$(this).addClass("is-checked")})})});

	// Zoom-gallery
	$(document).ready(function(){$(".zoom-gallery").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(e){return e.el.attr("title")+' &middot; <a class="image-source-link" href="'+e.el.attr("data-source")+'" target="_blank">image source</a>'}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(e){return e.find("img")}}})});

	// Magnific popup
	$(".popup-with-zoom-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"});

	// masonry
	var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		// $('.img-wrap').imagefill();
		$container.masonry({
			columnWidth: ".item",
		itemSelector: ".item"
	});
});


	console.log("Hello World");
});



// Zoom-gallery
$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}

	});
});



var $container = $(".masonry-container");
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
		itemSelector: ".item"
	});
});


// jQuery Easing Plugin
/*var targetElement = $(".btn");
targetElement.mousemove(function({
	targetElement.animate({"box-shadow": "0 0 3px 3px"}, 200, "easeInElastic")
}))*/


});