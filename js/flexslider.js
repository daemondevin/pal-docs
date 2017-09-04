(function($){
	var $featured = $('#featured'),
		container_width = $('#main-area .container').width(),
		slider;

	$(document).ready(function(){
		var slider_settings;

		if ( $featured.length ){
			slider_settings = {
				slideshow: false,
				start: function(slider) {
					slider = slider;

					// fixes 'slider isn't shown on the second load' bug in webkit browsers
					slider.css( 'background', 'none' );
					slider.find( '.container' ).css( 'visibility', 'visible' );
				}
			}

			if ( $featured.find('.flexslider').hasClass('slider_auto') ) {
				var slider_autospeed_class_value = /slider_speed_(\d+)/g;

				slider_settings.slideshow = true;

				slider_autospeed = slider_autospeed_class_value.exec( $featured.find('.flexslider').attr('class') );

				slider_settings.slideshowSpeed = slider_autospeed[1];
			}

			slider_settings.pauseOnHover = $featured.find('.flexslider').hasClass('pause_on') ? true : false;

			$featured.flexslider( slider_settings );
		}

		$featured.find('iframe').each( function(){
			var src_attr = jQuery(this).attr('src'),
				wmode_character = src_attr.indexOf( '?' ) == -1 ? '?' : '&amp;',
				this_src = src_attr + wmode_character + 'wmode=opaque';
			jQuery(this).attr('src',this_src);
		} );

		duplicate_menu( $('#header ul.nav'), $('#header .mobile_nav'), 'main_mobile_menu', 'mobile_menu' );

		function duplicate_menu( menu, append_to, menu_id, menu_class ){
			var $cloned_nav;

			menu.clone().attr('id',menu_id).removeClass().attr('class',menu_class).appendTo( append_to );
			$cloned_nav = append_to.find('> ul');
			$cloned_nav.find('li:first').addClass('first_mobile_item').end().find('a').css('opacity',1);

			append_to.click( function(){
				if ( $(this).hasClass('closed') ){
					$(this).removeClass( 'closed' ).addClass( 'opened' );
					$cloned_nav.slideDown( 500 );
				} else {
					$(this).removeClass( 'opened' ).addClass( 'closed' );
					$cloned_nav.slideUp( 500 );
				}
				return false;
			} );

			append_to.find('a').click( function(event){
				event.stopPropagation();
			} );
		}

		$(window).resize( function(){
			if ( container_width != $('#main-area .container').width() ) {
				container_width = $('#main-area .container').width();

				if ( ! $featured.is(':visible') ) $featured.flexslider( 'pause' );

				center_home_tabs();
			}
		});
	});

	function center_home_tabs(){
		var $home_tabs = $('ul#main-tabs'),
			maintabswidth = $home_tabs.width(),
			container_width = $('#main-area .container').width(),
			maintabsleft = Math.round( ( container_width - maintabswidth ) / 2 );
		if ( maintabswidth < container_width ) $home_tabs.css('left',maintabsleft);
	}

	$(window).on("load", function(){
		center_home_tabs();
	});
})(jQuery)