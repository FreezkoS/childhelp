(function ($) {
    $.fn.fnMenu = function (options) {
        var defaults = {
           container: '.container',
		   btn_menu: '.menu_btn',
		   podl: '.podl', 
		   width: '60%'
        };
        var settings = $.extend(defaults, options);
		
		
		this.each(function() {
			var elem = $(this);
			new nikitaMenu(elem, settings)
			
		});
		
        return this;
    }
	
	
	function nikitaMenu(elem, settings) {
		this.open = false;
		var self = this;
		$container = elem.find(settings.container);
		$btn_menu = elem.find(settings.btn_menu);
		$podl = elem.find(settings.podl);
		/*что скажете на счет этого, строка 29 и 30? По другому я не придумал как сделать более гибко */
		this.left = '-' + settings.width;
		$container.css('left', this.left).css('top', '0').css('width', settings.width);
		/*что скажете на счет этого ? По другому я не придумал как сделать более гибко */
		elem.on('click', '.menu_btn, .podl', function() {
			
			if(!self.open) {
				$container.css('display', 'block');
				$container.animate({
					left:0
				},200, function() {
					self.open = true;
				});
				$podl.css('display', 'block').animate({
					opacity:0.3
				}, 150);
			} else {
				$container.animate({
					left: self.left
				},200, function() {$container.css('display', 'block'); self.open = false;});
				$podl.animate({
					opacity:0
				}, 150, function() {
					$podl.css('display', 'none');
				});
			}

		});
		
	}
	
	
})(jQuery);




$(function () {
    $('.menuS').fnMenu();
    
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