<!DOCTYPE html>
<html lang="vi">
<head>	
	<title>@yield('page')</title>
	<base href="{{ asset('') }}public/">
	<meta charset="utf-8"/>

	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!--begin::Fonts -->
	<script src="js/webfont/1.6.16/webfont.js"></script>
	<script>
		WebFont.load({
			google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
			active: function() {
				sessionStorage.fonts = true;
			}
		});
	</script>
	<!--end::Fonts -->

	<!--begin::Page Vendors Styles(used by this page) -->
	<link href="vendors/custom/fullcalendar/fullcalendar.bundle.css" rel="stylesheet" type="text/css" />
	<!--end::Page Vendors Styles -->


	<!--begin::Global Theme Styles(used by all pages) -->
	<link href="vendors/global/vendors.bundle.css" rel="stylesheet" type="text/css" />
	<link href="css/style.bundle.css" rel="stylesheet" type="text/css" />
	@yield('head_custom')
	<!--end::Global Theme Styles -->

	<!--begin::Layout Skins(used by all pages) -->
	<!--end::Layout Skins -->

	<link rel="shortcut icon" href="media/logos/favicon.ico" />
</head>
<body  class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading">
	
	<!-- Main menu -->
	<!-- begin:: Page -->
	
	<!-- begin:: Header Mobile -->
	@include('user.modules.header_mobile')
	<!-- end:: Header Mobile -->

	<div class="kt-grid kt-grid--hor kt-grid--root">
		<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
			<!-- begin:: Aside -->
			@include('user.modules.aside')
			<!-- end:: Aside -->
			<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
				<!-- begin:: Header -->
				@include('user.modules.header')
				<!-- end:: Header -->
				<div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">


					<!-- begin:: Content -->
					<div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
						<!--Begin::Dashboard 3-->
						<!--Begin::Row-->
						@yield('content')
						<!--End::Row-->
						<!--End::Dashboard 3-->	
					</div>
					<!-- end:: Content -->				
				</div>				

				<!-- begin:: Footer -->
				@include('user.modules.footer')
				<!-- end:: Footer -->			
			</div>
		</div>
	</div>

	<!-- end:: Page -->
    
	<!-- begin::Scrolltop -->
	<div id="kt_scrolltop" class="kt-scrolltop">
		<i class="fa fa-arrow-up"></i>
	</div>
	<!-- end::Scrolltop -->
	<!-- begin::Sticky Toolbar -->
	<ul class="kt-sticky-toolbar" style="margin-top: 30px;">
		<li class="kt-sticky-toolbar__item kt-sticky-toolbar__item--success" id="kt_demo_panel_toggle" data-toggle="kt-tooltip"  title="Check out more demos" data-placement="right">
			<a href="#" class=""><i class="flaticon2-drop"></i></a>
		</li>
		<li class="kt-sticky-toolbar__item kt-sticky-toolbar__item--brand" data-toggle="kt-tooltip" title="Layout Builder" data-placement="left">
			<a href="builder.html" ><i class="flaticon2-gear"></i></a>
		</li>
		<li class="kt-sticky-toolbar__item kt-sticky-toolbar__item--warning" data-toggle="kt-tooltip" title="Documentation" data-placement="left">
			<a href="https://keenthemes.com/metronic/?page=docs" target="_blank"><i class="flaticon2-telegram-logo"></i></a>
		</li>

		<li class="kt-sticky-toolbar__item kt-sticky-toolbar__item--danger" id="kt_sticky_toolbar_chat_toggler" data-toggle="kt-tooltip" title="Chat Example" data-placement="left">
			<a href="#" data-toggle="modal" data-target="#kt_chat_modal"><i class="flaticon2-chat-1"></i></a>
		</li>
	</ul>
	<!-- end::Sticky Toolbar -->
	

	<!-- begin::Global Config(global config for global JS sciprts) -->
	<script>
		var KTAppOptions = {"colors":{"state":{"brand":"#2c77f4","light":"#ffffff","dark":"#282a3c","primary":"#5867dd","success":"#34bfa3","info":"#36a3f7","warning":"#ffb822","danger":"#fd3995"},"base":{"label":["#c5cbe3","#a1a8c3","#3d4465","#3e4466"],"shape":["#f0f3ff","#d9dffa","#afb4d4","#646c9a"]}}};
	</script>
	<!-- end::Global Config -->

	<!--begin::Global Theme Bundle(used by all pages) -->
	<script src="vendors/global/vendors.bundle.js" type="text/javascript"></script>
	<script src="js/scripts.bundle.js" type="text/javascript"></script>
	<!--end::Global Theme Bundle -->


	<!--begin::Page Vendors(used by this page) -->
	<script src="vendors/custom/fullcalendar/fullcalendar.bundle.js" type="text/javascript"></script>
	<script src="http://maps.google.com/maps/api/js?key=AIzaSyBTGnKT7dt597vo9QgeQ7BFhvSRP4eiMSM" type="text/javascript"></script>
	<script src="vendors/custom/gmaps/gmaps.js" type="text/javascript"></script>
	<!--end::Page Vendors -->



	<!--begin::Page Scripts(used by this page) -->
	<script src="js/pages/dashboard.js" type="text/javascript"></script>
	<!--end::Page Scripts -->
</body>
<!-- end::Body -->

<!-- Breadcrumb -->
@yield('breadcrumb')

<!-- Footer -->
@yield('footer')

<!-- Back to top -->
@yield('back_to_top')

</body>
</html>