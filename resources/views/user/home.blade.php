@extends('user.main')

@section('content')
<div class="row">
	<!-- Lời căm ơn) -->
	<div class="col-xl-6 col-lg-6 order-lg-2 order-xl-1">
		<!--begin:: Widgets/Blog-->
		<div class="kt-portlet kt-portlet--height-fluid kt-widget19">
			<div class="kt-portlet__body kt-portlet__body--fit kt-portlet__body--unfill">
				<div class="kt-widget19__pic kt-portlet-fit--top kt-portlet-fit--sides" style="min-height: 300px; background-image: url(media/products/product4.jpg)">
					<h3 class="kt-widget19__title kt-font-light">
						Kids Online
					</h3>
					<div class="kt-widget19__shadow"></div>
					<div class="kt-widget19__labels">
						<a href="#" class="btn btn-label-light-o2">LỜI CẢM ƠN</a>
					</div>
				</div>
			</div>
			<div class="kt-portlet__body">
				<div class="kt-widget19__wrapper">
					<div class="kt-widget19__content">
						<div class="kt-widget19__userpic">
							<img src="media/logos/logo-3.png" alt="">
						</div>
						<div class="kt-widget19__info">
							<a href="#" class="kt-widget19__username">
								Kids Online
							</a>
							<span class="kt-widget19__time">
								KidsOnline.vn
							</span>
						</div>
						<div class="kt-widget19__stats">
							<span class="kt-widget19__number kt-font-brand">
								<i class="fa fa-heart" style="color: #fc5c65; font-size: 2rem"></i>
							</span>
						</div>
					</div>
					<div class="kt-widget19__text">
						Kidsonline cảm ơn Quỳnh Chi đã luôn đồng hành cùng chúng tôi! <br>
						Chúc bạn một ngày làm việc vui vẻ và hiệu quả !!!
					</div>
				</div>
				<div class="kt-widget19__action">
					<a href="#" class="btn btn-sm btn-label-brand btn-bold">Xem thêm</a>
				</div>
			</div>
		</div>
		<!--end:: Widgets/Blog-->	
	</div>	

	<!-- Đơn trong ngày -->
	<div class="col-xl-6 col-lg-6 order-lg-2 order-xl-1">
		<!--begin:: Widgets/Last Updates-->
		<div class="kt-portlet kt-portlet--height-fluid">
			<div class="kt-portlet__head">
				<div class="kt-portlet__head-label">
					<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--flag kt-ribbon--ver kt-ribbon--border-dash-hor kt-ribbon--success">
						<div class="kt-ribbon__target" style="top: 0; left: 0px; height: 45px;">
							<span class="kt-ribbon__inner"></span><i class="fa fa-star"></i>
						</div>
					</div>
					<h3 class="kt-portlet__head-title">
						ĐƠN HÔM NAY CỦA BÉ
					</h3>
				</div>
				<div class="kt-portlet__head-toolbar">
					<a href="#" class="btn btn-label-brand btn-bold btn-sm dropdown-toggle" data-toggle="dropdown">
						Hôm nay
					</a>
					<div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-right">
						<!--begin::Nav-->
						<ul class="kt-nav">
							<li class="kt-nav__item">
								<a href="#" class="kt-nav__link">
									<i class="kt-nav__link-icon flaticon-calendar-with-a-clock-time-tools"></i>
									<span class="kt-nav__link-text">Hôm qua</span>
									<span class="kt-nav__link-badge">
										<span class="kt-badge kt-badge--success kt-badge--rounded">5</span>
									</span>
								</a>
							</li>
							<li class="kt-nav__item">
								<a href="#" class="kt-nav__link">
									<i class="kt-nav__link-icon flaticon-event-calendar-symbol"></i>
									<span class="kt-nav__link-text">Tuần qua</span>
									<span class="kt-nav__link-badge">
										<span class="kt-badge kt-badge--success kt-badge--rounded">10</span>
									</span>
								</a>
							</li>
							<li class="kt-nav__item">
								<a href="#" class="kt-nav__link">
									<i class="kt-nav__link-icon flaticon2-calendar-8"></i>
									<span class="kt-nav__link-text">Tháng qua</span>
									<span class="kt-nav__link-badge">
										<span class="kt-badge kt-badge--success kt-badge--rounded">20</span>
									</span>
								</a>
							</li>
							<li class="kt-nav__separator"></li>
							<li class="kt-nav__foot">

								<a class="btn btn-clean btn-bold btn-sm" href="#" data-toggle="kt-tooltip" data-placement="right" title="Xem tất cả đơn">Xem tất cả</a>
							</li>
						</ul>
						<!--end::Nav-->			
					</div>
				</div>
			</div>
			<div class="kt-portlet__body" style="height: 50px;">
				<!--begin::widget 12-->
				<div class="kt-widget4">
					
					<div class="kt-scroll" data-scroll="true" style="height: 400px">
						<div class="kt-widget4__item">
							<span class="kt-widget4__icon">
								<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
							</span>	
							<a href="#" class="kt-widget4__title kt-widget4__title--light">
								<span class="app_widget_name">Đỗ Anh Tùng <br></span>
								<span>Áp dụng từ 04-07-2019 đến 31-07-2019 <br></span>
								<span>Tình trạng đơn: Đơn thuốc chưa được sử dụng <br></span>
								<span>Tên bệnh: ho <br></span>
							</a> 		
							<span class="kt-widget4__number kt-font-info">Xin nghỉ</span>
						</div>
						@for($i = 0; $i <=3 ; $i++)
						<div class="kt-widget4__item">
							<span class="kt-widget4__icon">
								<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
							</span>	
							<a href="#" class="kt-widget4__title kt-widget4__title--light">
								<span class="app_widget_name">Đỗ Anh Tùng <br></span>
								<span>Áp dụng từ 04-07-2019 đến 31-07-2019 <br></span>
								<span>Tình trạng đơn: Đơn thuốc chưa được sử dụng <br></span>
								<span>Tên bệnh: ho <br></span>
							</a> 		
							<span class="kt-widget4__number kt-font-danger">Dặn thuốc</span>
						</div>
						@endfor
					</div>
				</div>
				

				
				<!--end::Widget 12-->
			</div>
		</div>
		<!--end:: Widgets/Last Updates-->	
	</div>
</div>

<!-- Bài viết -->
<div class="row">
	<div class="col-xl-12 order-lg-2 order-xl-1">
		<div class="kt-portlet kt-portlet--height-fluid kt-portlet--mobile ">
			<div class="kt-portlet__head kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm">
				<div class="kt-portlet__head-label">
					<i class="fa fa-newspaper" style="font-size: 1.2rem"></i>
					<h3 class="kt-portlet__head-title">
						&nbsp;BÀI VIẾT
					</h3>
				</div>
				<div class="kt-portlet__head-toolbar">
					<div class="dropdown dropdown-inline">
						<button type="button" class="btn btn-clean btn-sm btn-icon btn-icon-md" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="flaticon-more-1"></i>
						</button>
						<div class="dropdown-menu dropdown-menu-right dropdown-menu-md dropdown-menu-fit">
							<!--begin::Nav-->
							<ul class="kt-nav">
								<li class="kt-nav__head">
									Export Options                                    
									<span data-toggle="kt-tooltip" data-placement="right" title="Click to learn more...">
										<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon kt-svg-icon--brand kt-svg-icon--md1">
											<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<rect id="bound" x="0" y="0" width="24" height="24"/>
												<circle id="Oval-5" fill="#000000" opacity="0.3" cx="12" cy="12" r="10"/>
												<rect id="Rectangle-9" fill="#000000" x="11" y="10" width="2" height="7" rx="1"/>
												<rect id="Rectangle-9-Copy" fill="#000000" x="11" y="7" width="2" height="2" rx="1"/>
											</g>
										</svg>        
									</span>
								</li>
								<li class="kt-nav__separator"></li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-drop"></i>
										<span class="kt-nav__link-text">Activity</span>
									</a>
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-calendar-8"></i>
										<span class="kt-nav__link-text">FAQ</span>
									</a>
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-link"></i>
										<span class="kt-nav__link-text">Settings</span>
									</a>
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-new-email"></i>
										<span class="kt-nav__link-text">Support</span>
										<span class="kt-nav__link-badge">
											<span class="kt-badge kt-badge--success kt-badge--rounded">5</span>
										</span>
									</a>
								</li>
								<li class="kt-nav__separator"></li>
								<li class="kt-nav__foot">
									<a class="btn btn-label-danger btn-bold btn-sm" href="#">Upgrade plan</a>                                    
									<a class="btn btn-clean btn-bold btn-sm" href="#" data-toggle="kt-tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
								</li>
							</ul>
							<!--end::Nav-->				
						</div>
					</div>
				</div>
			</div>
			<div class="kt-portlet__body kt-portlet__body--fit">
				<!--begin: Datatable -->
				<!-- <div class="kt-datatable" id="kt_datatable_latest_orders"></div> -->
				<div class="row" style="margin: 0 20px;">
					@for($i = 0; $i <= 3; $i++)
					<div class="col-xl-3 col-lg-4 order-lg-2 order-xl-1">
						<!--begin:: Widgets/Blog-->
						<div class="kt-portlet kt-portlet--height-fluid kt-widget19">
							<div class="kt-portlet__body kt-portlet__body--fit kt-portlet__body--unfill">
								<div class="kt-widget19__pic kt-portlet-fit--top kt-portlet-fit--sides" style="min-height: 300px; background-image: url(media/products/product4.jpg)">
									<h3 class="kt-widget19__title kt-font-light">
										Tiêu đề
									</h3>
									<div class="kt-widget19__shadow"></div>
									<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--border-dash-hor kt-ribbon--danger kt-ribbon--left">
										<div class="kt-ribbon__target" style="top: 12px; right: -2px;">
											<span class="kt-ribbon__inner"></span>Chưa kiểm duyệt
										</div>
									</div>
								</div>
							</div>
							<div class="kt-portlet__body">
								<div class="kt-widget19__wrapper">
									<div class="kt-widget19__content">
										<div class="kt-widget19__userpic">
											<img src="media/logos/logo-3.png" alt="">
										</div>
										<div class="kt-widget19__info">
											<a href="#" class="kt-widget19__username">
												Tên user
											</a>
											<span class="kt-widget19__time">
												20/07/2019 lúc 13:14
											</span>
										</div>
										<div class="kt-widget19__stats">
											<span class="kt-widget19__number kt-font-brand">
												18
											</span>
											<a href="#" class="kt-widget19__comment">
												Bình luận
											</a>
										</div>
									</div>
									<div class="kt-widget19__text">
										Kidsonline cảm ơn Quỳnh Chi đã luôn đồng hành cùng chúng tôi! <br>
										Chúc bạn một ngày làm việc vui vẻ và hiệu quả. Consectetur adipisicing elit. Provident, aliquam ...
									</div>
								</div>
								<div class="kt-widget19__action">
									<a href="#" class="btn btn-sm btn-label-brand btn-bold">Xem thêm</a>
								</div>
							</div>
						</div>
						<!--end:: Widgets/Blog-->	
					</div>
					@endfor
				</div>

				<!--end: Datatable -->
			</div>
		</div>	
	</div>	
</div>

<!-- END: Bài viết) -->
<div class="post_modal">
	@include('user.modules.post_modal')
</div>


@endsection