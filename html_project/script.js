function disableScroll() {
			$('html, div').on('mousewheel', function(){
				return false;
			});
		}

		function enableScroll() {
			$('html, div').off('mousewheel');
		}

		$(function(){
			$('.header__phone__order').click(function() {
				$('#popup-container').fadeIn(500, disableScroll);
			})

			$('#popup-container').click(function(ev) {
				if (ev.target == this) {
					$(this).fadeOut(200, enableScroll);
				}
			})

		})

