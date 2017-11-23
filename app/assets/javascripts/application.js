// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .
//= require bootstrap-sprockets
//= require trix
//= require jquery
//= require jquery_ujs



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


$(function () {
    $('.menuS').fnMenu();
});




//Якорь 

$(function() {
 $(window).scroll(function() {
 if($(this).scrollTop() != 0) {
$('#toTop').fadeIn();
} else {
$('#toTop').fadeOut();
 }
});
$('#toTop').click(function() {
 $('body,html').animate({scrollTop:0},800);
});
 });

$(function(){
		$('.menu').slicknav({
      label: ''
    });
});


