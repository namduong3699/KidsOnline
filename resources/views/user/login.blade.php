<!DOCTYPE html>
<html lang="en" >
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8"/>
	<base href="{{ asset('') }}public/">
	<title>Login</title>
	<meta name="description" content="Login page example"> 
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<!--begin::Fonts -->
	<script src="../../../../../../../ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>

	<script>
		WebFont.load({
			google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
			active: function() {
				sessionStorage.fonts = true;
			}
		});
	</script>
	<!--end::Fonts -->



	<!--begin::Page Custom Styles(used by this page) --> 
	<link href="login/css/demo3/pages/login/login-1.css" rel="stylesheet" type="text/css" />
	<!--end::Page Custom Styles -->

	<!--begin::Global Theme Styles(used by all pages) -->
	<link href="login/vendors/global/vendors.bundle.css" rel="stylesheet" type="text/css" />
	<link href="login/css/demo3/style.bundle.css" rel="stylesheet" type="text/css" />
	<!--end::Global Theme Styles -->

	<!--begin::Layout Skins(used by all pages) -->
	<!--end::Layout Skins -->

	<link rel="shortcut icon" href="media/logos/kids.ico" />
</head>
<!-- end::Head -->

<!-- begin::Body -->
<body  class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--fixed kt-subheader--enabled kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading"  >


	<!-- begin:: Page -->
	<div class="kt-grid kt-grid--ver kt-grid--root kt-page">
		<div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
			<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile">
				<!--begin::Aside-->
				<div class="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside" style="background-image: url(login/media/bg/bg-4.jpg);">
					<div class="kt-grid__item">
						<a href="{{URL::to('login')}}" class="kt-login__logo">
							<img src="login/media/logos/logo-3.png">
						</a>
					</div>
					<div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
						<div class="kt-grid__item kt-grid__item--middle">
							<h3 class="kt-login__title">Welcome to Kids Online!</h3>
							<h4 class="kt-login__subtitle">Chào mừng các bạn đến với Kids Online</h4>
						</div>
					</div>
					<div class="kt-grid__item">
						<div class="kt-login__info">
							<div class="kt-login__copyright">
								&copy 2019 Kids Online
							</div>
							<div class="kt-login__menu">
								<a href="{{URL::to('home')}}" class="kt-link">Trang chủ</a>
								<a href="{{URL::to('contact')}}" class="kt-link">Liên hệ</a>
							</div>
						</div>
					</div>
				</div>
				<!--begin::Aside-->

				<!--begin::Content-->
				<div class="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
					<!--begin::Head-->

					<!--end::Head-->

					<!--begin::Body-->
					<div class="kt-login__body">

						<!--begin::Signin-->
						<div class="kt-login__form">
							<div class="kt-login__title">
								<h3>Login</h3>
							</div>		
							@if($errors->has('username') || $errors->has('password') || $errors->has('errorlogin'))
							<div style="text-align: center; font-size: 1.1rem; color: red">
								<p><b>{{$errors->first('username')}}</b></p>
								<p><b>{{$errors->first('password')}}</b></p>
								<p><b>{{$errors->first('errorlogin')}}</b></p>
							</div>
							@endif

							<!--begin::Form-->
							<form class="kt-form" action="{{URL::to('login')}}" method="POST" novalidate="novalidate">
								<div class="form-group">
									<input class="form-control" type="text" placeholder="Username" name="username" autocomplete="off">
								</div>
								<div class="form-group">
									<input class="form-control" type="password" placeholder="Password" name="password">
								</div>
								<!--begin::Action-->
								<div class="kt-login__actions">
									<a href="#" class="kt-link kt-login__link-forgot">

									</a>
									{!! csrf_field() !!}
									<input  class="btn btn-primary btn-elevate kt-login__btn-primary" type="submit" value="Login">
									<!-- <input type="submit" value="Submit"> -->
								</div>
								<!--end::Action-->
							</form>
							<!--end::Form-->

							<!--begin::Divider-->
							<!-- <div class="kt-login__divider">
								<div class="kt-divider">
									<span></span>
									<span>OR</span>
									<span></span>
								</div>
							</div> -->
							<!--end::Divider-->

							<!--begin::Options-->
							<!-- <div class="kt-login__options">
								<a href="#" class="btn btn-primary kt-btn">
									<i class="fab fa-facebook-f"></i>
									Facebook
								</a>

								<a href="#" class="btn btn-info kt-btn">
									<i class="fab fa-twitter"></i>
									Twitter
								</a>

								<a href="#" class="btn btn-danger kt-btn">
									<i class="fab fa-google"></i>
									Google
								</a>
							</div> -->
							<!--end::Options-->
						</div>
						<!--end::Signin-->
					</div>
					<!--end::Body-->
				</div>
				<!--end::Content-->
			</div>
		</div>



	</div>
	
	<!-- end:: Page -->


	<!-- begin::Global Config(global config for global JS sciprts) -->
	<script>
		var KTAppOptions = {"colors":{"state":{"brand":"#2c77f4","light":"#ffffff","dark":"#282a3c","primary":"#5867dd","success":"#34bfa3","info":"#36a3f7","warning":"#ffb822","danger":"#fd3995"},"base":{"label":["#c5cbe3","#a1a8c3","#3d4465","#3e4466"],"shape":["#f0f3ff","#d9dffa","#afb4d4","#646c9a"]}}};
	</script>
	<!-- end::Global Config -->

	<!--begin::Global Theme Bundle(used by all pages) -->
	<script src="login/vendors/global/vendors.bundle.js" type="text/javascript"></script>
	<script src="login/js/demo3/scripts.bundle.js" type="text/javascript"></script>
	<!--end::Global Theme Bundle -->




	<!--begin::Page Scripts(used by this page) -->
	<script src="login/js/demo3/pages/login/login-1.js" type="text/javascript"></script>
	<!--end::Page Scripts -->
</body>
<!-- end::Body -->

<!-- Mirrored from keenthemes.com/metronic/preview/demo3/custom/pages/user/login-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 18 Jul 2019 03:31:53 GMT -->
</html>