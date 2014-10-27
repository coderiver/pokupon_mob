head.ready(function() {

	$(document).on("click", function(){
		$(".js-toggle").removeClass("is-active");
		$(".js-toggle-el").removeClass("is-active");
		$("html").removeClass("has-open-nav");
		$(".js-toggle-nav").removeClass("is-active");
		$(".js-nav").removeClass("is-active");
	});

	$(".js-toggle").on("click", function(event){
		var el = $(this).attr("data-toggle");
		$(this).toggleClass("is-active");
		$("."+el).toggleClass("is-active");
		event.stopPropagation();
		return false;
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
});