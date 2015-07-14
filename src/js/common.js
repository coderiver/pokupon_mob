head.ready(function() {

	$(document).on("click", function(){
		$(".js-toggle").removeClass("is-active");
		$(".js-toggle-el").removeClass("is-active");
		$("html").removeClass("has-open-nav");
		$(".js-toggle-nav").removeClass("is-active");
		$(".js-nav").removeClass("is-active");
		$(".js-dropdown-list").slideUp(200);
		$(".js-dropdown-btn").removeClass("is-active");
	});

	
	$("body").on('scroll touchmove mousewheel', function(e){
	   if ($('html').hasClass('has-open-nav')) {
		e.preventDefault();
		e.stopPropagation();
		return false;
	   }
	});

	$('.touch body').swipe({
		swipeLeft: function(event, direction, distance, duration, fingerCount) {
			$("html").removeClass("has-open-nav");
			$(".js-nav").removeClass("is-active");
			$(".js-toggle-nav").removeClass("is-active");
		}
		// swipeRight: function(event, direction, distance, duration, fingerCount) {
		//     $("html").addClass("has-open-nav")
		// }
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		//threshold: 0
	});

	// $(document).on("click touchstart",".js-sidebar-overlay", function(){
	//     $("html").removeClass("has-open-nav");
	// });

	$(".js-toggle").on("click", function(event){
		var el = $(this).attr("data-toggle");
		$(this).toggleClass("is-active");
		$("."+el).toggleClass("is-active");
		event.stopPropagation();
		return false;
	});
	$(".js-toggle-el").on("click", function(event){
		event.stopPropagation();
	});
	$(".js-toggle-nav").on("click", function(event){
		$("html").toggleClass("has-open-nav");
		$(this).toggleClass("is-active");
		$(".js-nav").toggleClass("is-active");
		event.stopPropagation();
		return false;
	});
	$(".js-nav-main").on("click", function(event){
		event.stopPropagation();
	});
	function number() { 
		var number = $(".js-number");
		number.each(function(){
			var max_number = +($(this).attr("data-max-number"));
			var input = $(this).find("input");
			var plus = $(this).find(".js-plus");
			var minus = $(this).find(".js-minus");
			plus.on("click", function(){
				var val = +(input.val());
				if (val >= max_number) {
					return false
				}
				else {
					val += 1;
					input.val(val);
				}
			});
			minus.on("click", function(){
				var val = +(input.val());
				if (val > 1) {
					val -= 1;
					input.val(val);
				}
				else {
					return false;
				}
			});
			input.on("change", function(){
				var val = +$(this).val();
				if (val > max_number) {
					val = max_number;
					$(this).val(val);
				}
				else {
					return false;
				}
			});
		});
	}
	number();


	$(".js-accordion-title").on("click", function(){
		if ($(this).parents(".js-accordion").hasClass("is-active")) {
			$(this).parents(".js-accordion").removeClass("is-active").find(".js-accordion-body").hide();
		}
		else {
			$(".js-accordion").removeClass("is-active");
			$(".js-accordion-body").hide();
			$(this).parents(".js-accordion").toggleClass("is-active").find(".js-accordion-body").toggle()
		}
		
		return false;
	});


	$(".js-select").each(function(){
		var val = $(this).find("option:checked").val();
		$(this).find(".input").val(val);

	});

	$(".js-select select").on("change",function(){
		var val = $(this).val();
		$(this).parents(".js-select").find(".input").val(val);
	});

	$(".js-input-date").each(function(){
		var val = $(this).val();
		$(this).parent().find(".js-input-date-value").val(val);
	});
	
	$(".js-input-date").on("change",function(){
		var val = $(this).val();
		$(this).parent().find(".js-input-date-value").val(val);
	});

	if ($(".js-input-tel").length) {
		$(".js-input-tel").mask("380 99 9999999");
	}

	// $(".js-open-window").on("click",function(){
	//     $(".js-window").toggleClass("is-active");
	//     $("html").toggleClass("no-scroll");
	// }); 
	// $(".js-window-close").on("click",function(){
	//     $(".js-window").removeClass("is-active");
	//     $("html").removeClass("no-scroll");
	// });
	$(".js-open-popup").on("click", function(){
		var el = $(this).attr("data-popup");
		$("."+el).addClass("is-active");
		$("html").addClass("no-scroll");
		return false;
	});
	$(".js-close-popup").on("click", function(){
		$(".js-popup").removeClass("is-active");
		$("html").removeClass("no-scroll");
		return false;
	});

	function tabsLoad() {
		var hash = window.location.hash;
		if (hash) {
			$('[href="'+hash+'"]').parents(".js-tabs-group").find(".js-tabs-content").hide();
			$('[data-id="'+hash+'"]').show();
			$('[href="'+hash+'"]').parents(".js-tabs").find("li").removeClass("is-active");
			$('[href="'+hash+'"]').parent().addClass("is-active");
		}
		else if ($(".js-tabs li.is-active").length) {
			$(".js-tabs li").each(function(){
				if ($(this).hasClass("is-active")) {
				   var hash = $(this).find("a").attr("href");
					$('[data-id="'+hash+'"]').show();
					window.location.hash = hash;
				}
			});
		}
		else {
			$('.js-tabs li:first').addClass("is-active");
			$('.js-tabs').next().show();
			
		}
		
	}
   tabsLoad();
   // alert(hash);
	$('.js-tabs a').on("click",function (e) {
		var content = $(this).attr("href");
		$(this).parents(".js-tabs").find("li").removeClass("is-active");
		$(this).parent().addClass("is-active");
		$(this).parents(".js-tabs-group").find(".js-tabs-content").hide();
		$('[data-id="'+content+'"]').show();
		window.location.hash = this.hash;
		return false;
	});

	$(".js-message-close").on("click",function (e) {
		$(this).parents(".js-message").fadeOut(200);
		return false;
	});

	$(".js-dropdown-btn").on("click", function(event){
		$(this).toggleClass("is-active").parents(".js-dropdown").find(".js-dropdown-list").slideToggle(200);
		event.stopPropagation();
		return false;
	});
	$(".js-dropdown-list").on("click", function(event){
		event.stopPropagation();
	});
	$(".js-show-recovery").on("click", function(){
		$(".js-recovery").slideToggle(200);
		return false;
	});   
	// (function () {
	// 	$('.slider').on('init', function(slick) {
	// 		  setTimeout(function(){
	// 		  	$('.slider').addClass("is-ready");
	// 		  },200);
	// 	});
	// 	var slEl = $('.js-sl');
	// 	if (slEl.length) {
	// 		var slNav = $('.js-sl-nav');
	// 		slEl.slick({
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			arrows: false,
	// 			asNavFor: slNav,
	// 			toucMove: true,
	// 			adaptiveHeight: true
	// 		});
	// 		slNav.slick({
	// 			slidesToShow: 3,
	// 			slidesToScroll: 1,
	// 			arrows: false,
	// 			centerMode: true,
	// 			asNavFor: slEl,
	// 			focusOnSelect: true,
	// 			toucMove: true,
				// adaptiveHeight: true

	// 		})
	// 	};
	//  }());
(function () {
	$('.slider').on('init', function(slick) {
		  setTimeout(function(){
		  	$('.slider').addClass("is-ready");
		  },200);
	});

	var slEl = $('.js-sl');
	if (slEl.length) {
		var slNav = $('.js-sl-nav');
		if (slNav.find('>div').length >= 4) {
			slEl.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true,
				arrows: false,
				asNavFor: slNav
			});
			slNav.slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
				centerMode: true,
				asNavFor: slEl,
				focusOnSelect: true,
				touchMove: true,
				adaptiveHeight: true,
				infinite: true
			});

		}

		else {
			slNav.addClass('is-sm');
			slEl.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				adaptiveHeight: true,
				asNavFor: slNav
			});
			slNav.slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: false,
				swipe: false,
				asNavFor: slEl,
				// centerMode: true,
				focusOnSelect: true
			});
			slNav.find('.slick-slide').eq(0).addClass('is-active');
			slEl.on('afterChange', function(event, slick, currentSlide, nextSlide){
				slNavSlide = slNav.find('.slick-slide');
				slNavSlide.removeClass('is-active');
				slNavSlide.eq(currentSlide).addClass('is-active');
			});
		}
	};
 }());
	$('.js-favr').click(function(e) {
		$(this).toggleClass('is-active');
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	$('.js-heart').click(function(e) {
		$(this).toggleClass('is-active');
		e.preventDefault();
		e.stopPropagation();
		return false;
	});
	// code sort
	(function () {
		var sort = $('.js-code-sort button'),
			code = $('.js-code');
		sort.on('click', function () {
			var type = $(this).data('code');
			sort.removeClass('is-active');
			$(this).addClass('is-active');
			if (type === undefined) {
				code.show();
			}
			else {
				code.hide();
				$('.' + type).show();
			}
			return false;
		});
	}());
	(function () {
		$('.js-open').click(function () {
			$('.js-open-text').toggleClass('is-open');
			if($('.js-open-text').hasClass('is-open')) {
				$('.js-open').text('Свернуть');
			} else {
				$('.js-open').text('Читать полностью');
			}
			return false;
		})
	}());

	$('.js-letter-nav a').on('click', function(){
		var section = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(section).offset().top - 10
		}, 500);
		return false;
	});
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if($('.js-show').length) {
			if (scroll >= $('.js-letter').offset().top-20) {
					$('.js-show').fadeIn('fast');
			} else {
				$('.js-show').fadeOut('fast');
			}
		}
	});
	(function () {
		$('.js-copy-text span').click(function() {
		 var e=this; 
		 if(window.getSelection){ 
		 var s=window.getSelection(); 
		 if(s.setBaseAndExtent){ 
		 s.setBaseAndExtent(e,0,e,e.innerText.length-1); 
		 }else{ 
		 var r=document.createRange(); 
		 r.selectNodeContents(e); 
		 s.removeAllRanges(); 
		 s.addRange(r);} 
		 }else if(document.getSelection){ 
		 var s=document.getSelection(); 
		 var r=document.createRange(); 
		 r.selectNodeContents(e); 
		 s.removeAllRanges(); 
		 s.addRange(r); 
		 }else if(document.selection){ 
		 var r=document.body.createTextRange(); 
		 r.moveToElementText(e); 
		 r.select();}
		});
			
	}());
});