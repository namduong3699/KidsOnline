@extends('user.main')
@section('content')
<div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
	<div class="alert alert-light alert-elevate" role="alert">
		<div class="alert-icon"><i class="flaticon-exclamation kt-font-brand"></i></div>
		
		<div class="alert-text">
			<table class="dining-menu-table">
				<thead>
					<tr>
						<th>Bữa sáng</th>
						<th>Bữa trưa</th>
						<th>Bữa chiều</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Sữa Friso 4</td>
						<td>Sữa Friso 4</td>
						<td>Sữa Friso 4</td>
					</tr>
					<tr>
						<td>Thịt gà om nấm</td>
						<td>Thịt gà om nấm</td>
						<td>Thịt gà om nấm</td>
					</tr>
					<tr>
						<td>Cơm trắng – Tôm rim- Canh rau dền</td>
						<td>Cơm trắng – Tôm rim- Canh rau dền</td>
						<td>Cơm trắng – Tôm rim- Canh rau dền</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	
	<div class="kt-portlet kt-portlet--mobile">
		<div class="kt-portlet__head kt-portlet__head--lg">
			<div class="kt-portlet__head-label">
				<span class="kt-portlet__head-icon">
					<i class="kt-font-brand flaticon2-line-chart"></i>
				</span>
				<h3 class="kt-portlet__head-title">
					Cập nhật
				</h3>
			</div>
			<div class="kt-portlet__head-toolbar">
				<div class="kt-portlet__head-wrapper">
					<div class="dropdown dropdown-inline">
						<button type="button" class="btn btn-brand btn-icon-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i class="la la-save"></i> Cập nhật	
						</button>
						<div class="dropdown-menu dropdown-menu-right">
							<ul class="kt-nav">
								<li class="kt-nav__section kt-nav__section--first">
									<span class="kt-nav__section-text">Choose an action:</span>
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-open-text-book"></i>
										<span class="kt-nav__link-text">Reservations</span>
									</a>
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-calendar-4"></i>
										<span class="kt-nav__link-text">Appointments</span>
									</a>
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-bell-alarm-symbol"></i>
										<span class="kt-nav__link-text">Reminders</span>
									</a>
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-contract"></i>
										<span class="kt-nav__link-text">Announcements</span>
									</a>
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-shopping-cart-1"></i>
										<span class="kt-nav__link-text">Orders</span>
									</a>
								</li>
								<li class="kt-nav__separator kt-nav__separator--fit">
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-rocket-1"></i>
										<span class="kt-nav__link-text">Projects</span>
									</a>
								</li>
								<li class="kt-nav__item">
									<a href="#" class="kt-nav__link">
										<i class="kt-nav__link-icon flaticon2-chat-1"></i>
										<span class="kt-nav__link-text">User Feedbacks</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>		</div>
			</div>

			<div class="kt-portlet__body">
				<!--begin: Search Form -->
				<div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
					<div class="row align-items-center">
						<div class="col-xl-8 order-2 order-xl-1">
							<div class="row align-items-center">				
								<div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
									<div class="kt-input-icon kt-input-icon--left">
										<input type="text" class="form-control" placeholder="Tìm kiếm..." id="generalSearch">
										<span class="kt-input-icon__icon kt-input-icon__icon--left">
											<span><i class="la la-search"></i></span>
										</span>
									</div>
								</div>
								<div class="col-md-6 kt-margin-b-20-tablet-and-mobile">
									<div class="kt-form__group kt-form__group--inline">
										<div class="kt-form__label">
											<label>Nhận xét:</label>
										</div>
										<div class="kt-form__control" style="width: 85%">
											<div class="dropdown bootstrap-select form-control"><select class="form-control bootstrap-select" id="kt_form_status" tabindex="-98">
												<option value="">All</option>
												<option value="1">Pending</option>
												<option value="2">Delivered</option>
											</select>
											<button type="button" class="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="kt_form_status" title="All">
												<div class="filter-option">
													<div class="filter-option-inner">
														<div class="filter-option-inner-inner">All</div>
													</div> 
												</div>
											</button>
											<div class="dropdown-menu ">
												<div class="inner show" role="listbox" id="bs-select-1" tabindex="-1">
													<ul class="dropdown-menu inner show" role="presentation"></ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-4 order-1 order-xl-2 kt-align-right">
						<a href="#" class="btn btn-default kt-hidden">
							<i class="la la-cart-plus"></i> New Order
						</a>
						<div class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"></div>
					</div>
				</div>
			</div>		<!--end: Search Form -->
		</div>
		<div class="kt-portlet__body kt-portlet__body--fit">
			<!--begin: Datatable -->
			<div class="kt-datatable" id="local_data"></div>
			<!--end: Datatable -->
		</div>
	</div>	

</div>
@endsection