<button class="kt-aside-close " id="kt_aside_close_btn">
	<i class="la la-close"></i>
</button>

<div class="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside">
	<!-- begin:: Aside -->
	<div class="kt-aside__brand kt-grid__item" id="kt_aside_brand">
		<div class="kt-aside__brand-logo">
			<a href="{{URL::to('/')}}">
				<img alt="Logo" src="media/logos/logo-3.png"/>
			</a>
		</div>
	</div>
	<!-- end:: Aside -->	<!-- begin:: Aside Menu -->
	<div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
		<div id="kt_aside_menu" class="kt-aside-menu  kt-aside-menu--dropdown "	data-ktmenu-vertical="1" data-ktmenu-dropdown="1" data-ktmenu-scroll="0">		

			<ul class="kt-menu__nav ">
				<li class="kt-menu__item {{ request()->is('/') ? 'kt-menu__item--active' : '' }} " aria-haspopup="true" >
					<a  href="{{URL::to('/')}}" class="kt-menu__link ">
						<i class="kt-menu__link-icon flaticon2-architecture-and-city"></i>
						<span class="kt-menu__link-text">Trang chủ</span>
					</a>
				</li>
				<li class="kt-menu__item {{ request()->is('application') ? 'kt-menu__item--active' : '' }}" aria-haspopup="true"  data-ktmenu-submenu-toggle="hover"> 
					<a  href="{{URL::to('don')}}" class="kt-menu__link">
						<i class="kt-menu__link-icon flaticon2-mail-1"></i>
						<span class="kt-menu__link-text">Đơn</span>
					</a>
				</li>
				<li class="kt-menu__item {{ request()->is('post') ? 'kt-menu__item--active' : '' }}" aria-haspopup="true">
					<a href="{{URL::to('post')}}" class="kt-menu__link ">
						<i class="kt-menu__link-icon flaticon2-open-text-book"></i>
						<span class="kt-menu__link-text">Bài viết</span></a>
				</li>
				<li class="kt-menu__item  kt-menu__item--submenu" aria-haspopup="true" data-ktmenu-submenu-toggle="hover">
					<a href="javascript:;" class="kt-menu__link kt-menu__toggle">
						<i class="kt-menu__link-icon flaticon2-analytics-2"></i>
						<span class="kt-menu__link-text">Chiều cao <br>Cân nặng</span>
					</a>
				</li>
				<li class="kt-menu__item " aria-haspopup="true">
					<a href="index.html#.html" class="kt-menu__link ">
						<i class="kt-menu__link-icon flaticon2-sheet"></i>
						<span class="kt-menu__link-text">Đánh giá</span>
					</a>
				</li>
				<li class="kt-menu__item " aria-haspopup="true">
					<a href="index.html#.html" class="kt-menu__link ">
						<i class="kt-menu__link-icon flaticon2-checkmark"></i>
						<span class="kt-menu__link-text">Khảo sát</span>
					</a>
				</li>
				<li class="kt-menu__item " aria-haspopup="true">
					<a href="index.html#.html" class="kt-menu__link ">
						<i class="kt-menu__link-icon flaticon2-chat-1"></i>
						<span class="kt-menu__link-text">Lời nhắn</span>
					</a>
				</li>
				<li class="kt-menu__item " aria-haspopup="true">
					<a href="index.html#.html" class="kt-menu__link ">
						<i class="kt-menu__link-icon fa fa-graduation-cap"></i>
						<span class="kt-menu__link-text">Quản lý lớp học</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<!-- end:: Aside Menu -->
</div>