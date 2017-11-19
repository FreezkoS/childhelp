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

/*
 * 1. расширяем $.fn
 * 2. используем надёжный $
 * 3. return this
 * 4. передаём объет и делаем $.extend
 * 5. практически для всех плагинов делаем действие в this.each(...)
 */