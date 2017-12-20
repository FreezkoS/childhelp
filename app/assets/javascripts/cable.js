

$(function () {
    var button_up = $('#toTop');
	button_up.on('click', function(){
		$('html, body').animate({
            scrollTop: 0
        }, 700);
	});
	var h = 250;
	var open = false;
	
	$(document).on('scroll', function(){
		var st = $(this).scrollTop();
		if(!open && st > h) {
			open = true;
			button_up.stop(true).fadeIn(350);
		} else if(open && st <= h){
			open = false;
			button_up.stop(true).fadeOut(350);
		}
		
	});
});