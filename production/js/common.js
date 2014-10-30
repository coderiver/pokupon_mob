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

    var hash = window.location.hash;
    $(hash).show();
    $('.js-tabs a').click(function (e) {
        var content = $(this).attr("href");
        $(this).parents(".js-tabs").find("li").removeClass("is-active");
        $(this).parent().addClass("is-active");
        $(this).parents(".js-tabs-group").find(".js-tabs-content").hide();
        $(content).show();
        window.location.hash = this.hash;
        return false;
    });
   
});