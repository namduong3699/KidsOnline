jQuery(document).ready(function($){
	//final width --> this is the quick view image slider width
	//maxQuickWidth --> this is the max-width of the quick-view panel
	var maxQuickWidth = 1500;
	var sliderFinalWidth;
	var _img = $('.kt-portlet__body').children('.kt-widget19__pic');
	if(_img.width() <= _img.height()) {
		if(_img.height() > 800) {
			sliderFinalWidth = _img.width() * 800 / _img.height();
		} else if(_img.height() < 600) {
			sliderFinalWidth = _img.width() * 600 / _img.height();
		} else {
			sliderFinalWidth = _img.width();
		}
	}
	if(_img.width() > _img.height()) {
		if(_img.width() > 1000) {
			sliderFinalWidth = 1000;
		} else if(_img.width() < 200) {
			sliderFinalWidth = 200;
		} else {
			sliderFinalWidth = _img.width();
		}
	}
	

	//open the quick view panel
	$('.cd-trigger').on('click', function(event){
		var selectedImage = $(this).parent('.cd-item').children('img'),
		slectedImageUrl = selectedImage.attr('src');
		console.log(selectedImage);

		$('body').addClass('overlay-layer');
		animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');

		//update the visible slider image in the quick view panel
		//you don't need to implement/use the updateQuickView if retrieving the quick view data with ajax
		updateQuickView(slectedImageUrl);
	});

	//Mở cửa sổ xem nhanh
	$('.cd-trigger-2').on('click', function(event){
		// var selectedImage = $(this).parent().parent().parent().children('.kt-portlet__body').children('.kt-widget19__pic').children('img'),
		// slectedImageUrl = selectedImage.attr('src');

		// $('.modal-over-layer').css('visibility', 'visible');
		// animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');

		// //update the visible slider image in the quick view panel
		// //you don't need to implement/use the updateQuickView if retrieving the quick view data with ajax
		// updateQuickView(slectedImageUrl);
		// console.log(selectedImage.offset());

		var selectedImage = $(this).parent().parent().parent().children('.kt-portlet__body').children('.kt-widget19__pic'),
		slectedImageUrl = selectedImage.css('background-image').replace('url(','').replace(')','').replace(/\"/gi, "");
		$('.modal-over-layer').css('visibility', 'visible');
		animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open');

		//update the visible slider image in the quick view panel
		//you don't need to implement/use the updateQuickView if retrieving the quick view data with ajax
		updateQuickView(slectedImageUrl);
		console.log(selectedImage.offset());
	});

	//close the quick view panel
	$('body').on('click', function(event){
		if( $(event.target).is('.cd-close') || $(event.target).is('.modal-over-layer')) {
			console.log('close');
			closeQuickView( sliderFinalWidth, maxQuickWidth);
			// console.log('close');
		}

	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
		if(event.which=='27'){
			closeQuickView( sliderFinalWidth, maxQuickWidth);
		}
	});

	//Hàm chuyển ảnh slider, không dùng đến
	$('.cd-quick-view').on('click', '.cd-slider-navigation a', function(){
		updateSlider($(this));
	});

	//center quick-view on window resize
	$(window).on('resize', function(){
		if($('.cd-quick-view').hasClass('is-visible')){
			window.requestAnimationFrame(resizeQuickView);
		}
	});

	function updateSlider(navigation) {
		var sliderConatiner = navigation.parents('.cd-slider-wrapper').find('.cd-slider'),
		activeSlider = sliderConatiner.children('.selected').removeClass('selected');
		if ( navigation.hasClass('cd-next') ) {
			( !activeSlider.is(':last-child') ) ? activeSlider.next().addClass('selected') : sliderConatiner.children('li').eq(0).addClass('selected'); 
		} else {
			( !activeSlider.is(':first-child') ) ? activeSlider.prev().addClass('selected') : sliderConatiner.children('li').last().addClass('selected');
		} 
		console.log("updateSlider");
	}

	//Update thông tin vào modal
	function updateQuickView(url) {
		$('.cd-quick-view .cd-slider li').removeClass('selected').find('img').attr("src", url).parent('li').addClass('selected');

		var imgHeight = $('.js-img-modal-post').height();
		var imgWidth = $('.js-img-modal-post').width();
		var textHeight = parseInt(imgHeight)*0.725;
		$('.js-post-modal-content').css('max-height', textHeight);
		window.requestAnimationFrame(resizeQuickView);
		console.log("updateQuickView");
	}

	function resizeQuickView() {
		var quickViewLeft = ($(window).width() - $('.cd-quick-view').width())/2,
		quickViewTop = ($(window).height() - $('.cd-quick-view').height())/2;
		$('.cd-quick-view').css({
			"top": quickViewTop,
			"left": quickViewLeft,
		});
		var commentWidht = parseInt($('.js-post-modal-content').width());
		$('.post_modal_comment').css('width', commentWidht);
		console.log("resizeQuickView");
	} 

	function closeQuickView(finalWidth, maxQuickWidth) {
		var close = $('.cd-close'),
		activeSliderUrl = close.siblings('.cd-slider-wrapper').find('.selected img').attr('src'),
		selectedImage = $('.js-img-modal-post').find('img');
		//update the image in the gallery
		if( !$('.cd-quick-view').hasClass('velocity-animating') && $('.cd-quick-view').hasClass('add-content')) {
			selectedImage.attr('src', activeSliderUrl);
			animateQuickView(selectedImage, finalWidth, maxQuickWidth, 'close');
		} else {
			closeNoAnimation(selectedImage, finalWidth, maxQuickWidth);
		}
	}

	function animateQuickView(image, finalWidth, maxQuickWidth, animationType) {
		//store some image data (width, top position, ...)
		//store window data to calculate quick view panel position
		// finalWidth = maxQuickWidth;
		console.log('finalWidth:  '+finalWidth);
		var parentListItem = image.parent('.kt-portlet'),
		topSelected = image.offset().top - $(window).scrollTop(), //offset top của ảnh
		leftSelected = image.offset().left,    			//offset left của ảnh
		widthSelected = image.width(),					
		heightSelected = image.height(),
		windowWidth = $(window).width(),
		windowHeight = $(window).height(),
		finalLeft = (windowWidth - finalWidth)/2,
		finalHeight = finalWidth * heightSelected/widthSelected,
		finalTop = (windowHeight - finalHeight)/2,
		quickViewWidth = ( windowWidth * .8 < maxQuickWidth ) ? windowWidth * .8 : maxQuickWidth ,
		quickViewLeft = (windowWidth - quickViewWidth)/2;

		// var quickViewLeft = ($(window).width() - $('.cd-quick-view').width())/2,
		// quickViewTop = ($(window).height() - $('.cd-quick-view').height())/2;

		if( animationType == 'open') {
			//hide the image in the gallery
			parentListItem.addClass('empty-box');
			//place the quick view over the image gallery and give it the dimension of the gallery image
			$('.cd-quick-view').css({
				"top": topSelected,
				"left": leftSelected,
				"width": widthSelected,
			}).velocity({
				//animate the quick view: animate its width and center it in the viewport
				//during this animation, only the slider image is visible
				'top': finalTop+ 'px',
				'left': finalLeft+'px',
				'width': finalWidth+'px',
			}, 1000, [ 400, 20 ], function(){
				//animate the quick view: animate its width to the final value
				$('.cd-quick-view').addClass('animate-width').velocity({
					'left': quickViewLeft+'px',
					'width': quickViewWidth+'px',
				}, 300, 'ease' ,function(){
					//show quick view content
					$('.cd-quick-view').addClass('add-content');
				});
			}).addClass('is-visible');
		} else {
			//close the quick view reverting the animation
			$('.cd-quick-view').removeClass('add-content').velocity({
				'top': finalTop+ 'px',
				'left': finalLeft+'px',
				'width': finalWidth+'px',
			}, 300, 'ease', function(){
				$('.modal-over-layer').css('visibility', 'hidden');
				$('.cd-quick-view').removeClass('animate-width').velocity({
					"top": topSelected,
					"left": leftSelected,
					"width": widthSelected,
				}, 500, 'ease', function(){
					$('.cd-quick-view').removeClass('is-visible');
					parentListItem.removeClass('empty-box');
				});
			});
		}
		console.log("animateQuickView");
	}
	function closeNoAnimation(image, finalWidth, maxQuickWidth) {
		var parentListItem = image.parent('.cd-item'),
		topSelected = image.offset().top - $(window).scrollTop(),
		leftSelected = image.offset().left,
		widthSelected = image.width();

		$('.modal-over-layer').css('visibility', 'hidden');
		parentListItem.removeClass('empty-box');
		$('.cd-quick-view').velocity("stop").removeClass('add-content animate-width is-visible').css({
			"top": topSelected,
			"left": leftSelected,
			"width": widthSelected,
		});
	}
});