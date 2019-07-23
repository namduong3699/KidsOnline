@extends('user.main')
@section('head_custom')
<link href="css/daterangepicker.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script type="text/javascript" src="js/daterangepicker.js"></script>
<script type="text/javascript" src="js/moment.min.js"></script>
@endsection

<style>
	
</style>

@section('content')
<div class="row height-p100 margin-0">
	<div class="kt-portlet">
		<div class="kt-portlet__body height-p100">
			<ul class="nav nav-tabs margin-0" role="tablist">
				<li class="nav-item width-p25">
					<a class="nav-link active" data-toggle="tab" href="#kt_tabs_1_1">
						Dặn thuốc
					</a>
				</li>
				<li class="nav-item width-p25">
					<a class="nav-link" data-toggle="tab" href="#kt_tabs_1_2">
						Xin nghỉ
					</a>
				</li>
				<li class="nav-item width-p25">
					<a class="nav-link" data-toggle="tab" href="#kt_tabs_1_3">
						Lời nhắn
					</a>
				</li>
				<li class="nav-item width-p25">
					<a class="nav-link" data-toggle="tab" href="#kt_tabs_1_4">
						Lời cảm ơn
					</a>
				</li>
			</ul>                    

			<div class="tab-content height-p100">
				<div id="date-range-picker">
					<i class="fa fa-calendar"></i> &nbsp;
					<span id="date"></span>
					&nbsp; <i class="fa fa-caret-down"></i>
				</div>
				
				<div class="tab-pane active" id="kt_tabs_1_1" role="tabpanel">
					<div class="kt-section__content kt-section__content--solid" style="margin: 20px;">
						<!-- <button type="button" class="btn btn-outline-primary">Primary</button> -->
						<button type="button" class="btn btn-outline-secondary">Tổng(20)</button>
						<button type="button" class="btn btn-outline-success">Đã xác nhận(12)</button>
						<button type="button" class="btn btn-outline-danger">Chưa xác nhận(4)</button>
					</div>
					<div class="row">

						<div class="col-xl-6 col-lg-6 order-lg-2 order-xl-1 kt-widget4">

							@for($i = 0; $i <=3 ; $i++)
							<div class="kt-widget4__item app-widget-1">
								<span class="kt-widget4__icon">
									<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
								</span>	
								<div class="kt-widget4__title kt-widget4__title--light">
									<span class="app_widget_name">Đỗ Anh Tùng <br></span>
									<span><b>Áp dụng từ:</b> 04-07-2019 đến 31-07-2019 <br></span>
									<span><b>Tình trạng đơn:</b> Đơn thuốc chưa được sử dụng <br></span>
									<span><b>Tên bệnh:</b> ho <br></span>
									<span><b>Thời gian gửi:</b> 15:50 23/07/2019</span>
									<span style="position: absolute; right: 20px">
										<i class="fa flaticon-exclamation-2"></i>
										2 loại thuốc
									</span>
								</div> 		
								<!-- <span class="kt-widget4__number kt-font-danger">Dặn thuốc</span> -->
								<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--success kt-ribbon--shadow kt-ribbon--left kt-ribbon--round">
									<div class="kt-ribbon__target" style="top: 12px; right: -2px; width: 120px;">Đã xác nhận</div>
								</div>
							</div>
							@endfor
							<div class="kt-widget4__item app-widget-1" style="border-left: 5px solid #fd397a">
								<span class="kt-widget4__icon">
									<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
								</span>	
								<div class="kt-widget4__title kt-widget4__title--light">
									<span class="app_widget_name">Đỗ Anh Tùng <br></span>
									<span><b>Áp dụng từ:</b> 04-07-2019 đến 31-07-2019 <br></span>
									<span><b>Tình trạng đơn:</b> Đơn thuốc chưa được sử dụng <br></span>
									<span><b>Tên bệnh:</b> ho <br></span>
									<span><b>Thời gian gửi:</b> 15:50 23/07/2019</span>
									<span style="position: absolute; right: 20px">
										<i class="fa flaticon-exclamation-2"></i>
										2 loại thuốc
									</span>
								</div> 		
								<!-- <span class="kt-widget4__number kt-font-danger">Dặn thuốc</span> -->
								<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--danger kt-ribbon--shadow kt-ribbon--left kt-ribbon--round">
									<div class="kt-ribbon__target" style="top: 12px; right: -2px; width: 120px;">Chưa xác nhận</div>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 order-lg-2 order-xl-1 kt-widget4 app-widget-1-detail" style="background-color: rgba(75, 207, 250, .2)">
							<div class="kt-widget4__item">
								<span class="kt-widget4__icon">
									<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
								</span>	
								<div class="kt-widget4__title kt-widget4__title--light">
									<span class="app_widget_name">Đỗ Anh Tùng <br></span>
									<span><b>Áp dụng từ:</b> 04-07-2019 đến 31-07-2019 <br></span>
									<span><b>Tên bệnh:</b> ho<br></span>
								</div> 		
								<!-- <span class="kt-widget4__number kt-font-danger">Dặn thuốc</span> -->
								<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--success kt-ribbon--shadow kt-ribbon--left kt-ribbon--round">
									<div class="kt-ribbon__target" style="top: 10px; right: -15px; width: 120px;">Đã xác nhận</div>
								</div>
							</div>

							<div class="widget-detail-table">
								<div class="span-detail">(<i>Gửi lúc: 16:35 23/07/2019</i> bởi Nam)</div>
								<table class="table table-striped">
									<thead>
										<tr>
											<th style="text-align: center;">STT</th>
											<th>Tên thuốc</th>
											<th>Liều</th>
											<th>Cách dùng</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row" style="text-align: center;">1</th>
											<td>siro</td>
											<td>ml</td>
											<td>5ml sau ăn trưa</td>
										</tr>
										<tr>
											<th scope="row" style="text-align: center;">2</th>
											<td>nhỏ mũi</td>
											<td>giọt</td>
											<td>2 giọt trước khi ngủ trưa</td>
										</tr>
									</tbody>
								</table>
								<div class="span-detail">(<i>Xác nhận lúc: 16:35 23/07/2019</i> bởi Quỳnh Chi)</div>
							</div>

							<div class="kt-infobox kt-infobox--success">
								<div class="kt-infobox__header" style="margin-bottom: 10px;">
									<!-- <h4 class="kt-infobox__title">AirPlus SAAS License</h4> -->
									<h5>Cập nhật của giáo viên ngày 22/07/2019</h5>
									<div class="kt-infobox__badge">Đã dùng</div>
								</div>
								<div class="kt-infobox__body">
									<div class="kt-infobox__section">
										<div class="kt-infobox__content">
											Ghi chú: Không
										</div>
									</div>
								</div>
							</div>
							<div class="kt-infobox kt-infobox--danger">
								<div class="kt-infobox__header" style="margin-bottom: 10px;">
									<!-- <h4 class="kt-infobox__title">AirPlus SAAS License</h4> -->
									<h5>Cập nhật của giáo viên ngày 23/07/2019</h5>
									<div class="kt-infobox__badge">Chưa sử dụng</div>
								</div>
								<div class="kt-infobox__body">
									<div class="kt-infobox__section">
										<div class="kt-infobox__content">
											<div class="row" style="padding: 0 0.9rem;">
												<label for="">Xác nhận dùng thuốc: </label>&nbsp;&nbsp;&nbsp;
												<span class="kt-switch kt-switch--outline kt-switch--icon kt-switch--success">
													<label>
														<input type="checkbox" name="">
														<span></span>
													</label>
												</span>
											</div>
										</div>
										<div class="kt-infobox__content">
											<label for="exampleTextarea">Ghi chú:</label>
											<textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane" id="kt_tabs_1_2" role="tabpanel">
					<div class="kt-section__content kt-section__content--solid" style="margin: 20px;">
						<!-- <button type="button" class="btn btn-outline-primary">Primary</button> -->
						<button type="button" class="btn btn-outline-secondary">Tổng(20)</button>
						<button type="button" class="btn btn-outline-success">Đã xác nhận(12)</button>
						<button type="button" class="btn btn-outline-danger">Chưa xác nhận(4)</button>
					</div>
					<div class="row">

						<div class="col-xl-6 col-lg-6 order-lg-2 order-xl-1 kt-widget4">

							@for($i = 0; $i <=3 ; $i++)
							<div class="kt-widget4__item app-widget-1">
								<span class="kt-widget4__icon">
									<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
								</span>	
								<div class="kt-widget4__title kt-widget4__title--light">
									<span class="app_widget_name">Đỗ Anh Tùng <br></span>
									<span><b>Áp dụng từ:</b> 04-07-2019 đến 31-07-2019 <br></span>
									<span><b>Lý do:</b> ho <br></span>
									<span><b>Thời gian gửi:</b> 15:50 23/07/2019</span>
								</div> 		
								<!-- <span class="kt-widget4__number kt-font-danger">Dặn thuốc</span> -->
								<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--success kt-ribbon--shadow kt-ribbon--left kt-ribbon--round">
									<div class="kt-ribbon__target" style="top: 12px; right: -2px; width: 120px;">Đã xác nhận</div>
								</div>
							</div>
							@endfor
							<div class="kt-widget4__item app-widget-1" style="border-left: 5px solid #fd397a">
								<span class="kt-widget4__icon">
									<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
								</span>	
								<div class="kt-widget4__title kt-widget4__title--light">
									<span class="app_widget_name">Đỗ Anh Tùng <br></span>
									<span><b>Áp dụng từ:</b> 04-07-2019 đến 31-07-2019 <br></span>
									<span><b>Lý do:</b> ho <br></span>
									<span><b>Thời gian gửi:</b> 15:50 23/07/2019</span>
								</div> 		
								<!-- <span class="kt-widget4__number kt-font-danger">Dặn thuốc</span> -->
								<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--danger kt-ribbon--shadow kt-ribbon--left kt-ribbon--round">
									<div class="kt-ribbon__target" style="top: 12px; right: -2px; width: 120px;">Chưa xác nhận</div>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 order-lg-2 order-xl-1 kt-widget4 app-widget-1-detail" style="background-color: rgba(75, 207, 250, .2)">
							<div class="kt-widget4__item">
								<span class="kt-widget4__icon">
									<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
								</span>	
								<div class="kt-widget4__title kt-widget4__title--light">
									<span class="app_widget_name">Đỗ Anh Tùng <br></span>
									<span><b>Áp dụng từ:</b> 04-07-2019 đến 31-07-2019 <br></span>
									<span><b>Lý do:</b> ho<br></span>
								</div> 		
								<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--success kt-ribbon--shadow kt-ribbon--left kt-ribbon--round">
									<div class="kt-ribbon__target" style="top: 10px; right: -15px; width: 120px;">Đã xác nhận</div>
								</div>
							</div>

							<div class="widget-detail-table">
								<div class="span-detail">(<i>Gửi lúc: 16:35 23/07/2019</i> bởi Nam)</div>
								<div class="span-detail">(<i>Xác nhận lúc: 16:35 23/07/2019</i> bởi Quỳnh Chi)</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane" id="kt_tabs_1_3" role="tabpanel">
					<div class="kt-section__content kt-section__content--solid" style="margin: 20px;">
						<!-- <button type="button" class="btn btn-outline-primary">Primary</button> -->
						<button type="button" class="btn btn-outline-secondary">Tổng(20)</button>
						<button type="button" class="btn btn-outline-success">Đã xác nhận(12)</button>
						<button type="button" class="btn btn-outline-danger">Chưa xác nhận(4)</button>
					</div>
					<div class="row">

						<div class="col-xl-6 col-lg-6 order-lg-2 order-xl-1 kt-widget4">

							@for($i = 0; $i <=3 ; $i++)
							<div class="kt-widget4__item app-widget-1">
								<span class="kt-widget4__icon">
									<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
								</span>	
								<div class="kt-widget4__title kt-widget4__title--light">
									<span class="app_widget_name">Đỗ Anh Tùng <br></span>
									<span><b>Áp dụng từ:</b> 04-07-2019 đến 31-07-2019 <br></span>
									<span><b>Lời nhắn:</b> Nội dung lời nhắn<br></span>
									<span><b>Thời gian gửi:</b> 15:50 23/07/2019</span>
								</div> 		
								<!-- <span class="kt-widget4__number kt-font-danger">Dặn thuốc</span> -->
								<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--success kt-ribbon--shadow kt-ribbon--left kt-ribbon--round">
									<div class="kt-ribbon__target" style="top: 12px; right: -2px; width: 120px;">Đã xác nhận</div>
								</div>
							</div>
							@endfor
							<div class="kt-widget4__item app-widget-1" style="border-left: 5px solid #fd397a">
								<span class="kt-widget4__icon">
									<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
								</span>	
								<div class="kt-widget4__title kt-widget4__title--light">
									<span class="app_widget_name">Đỗ Anh Tùng <br></span>
									<span><b>Áp dụng từ:</b> 04-07-2019 đến 31-07-2019 <br></span>
									<span><b>Lời nhắn:</b> Nội dung lời nhắn<br></span>
									<span><b>Thời gian gửi:</b> 15:50 23/07/2019</span>
								</div> 		
								<!-- <span class="kt-widget4__number kt-font-danger">Dặn thuốc</span> -->
								<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--danger kt-ribbon--shadow kt-ribbon--left kt-ribbon--round">
									<div class="kt-ribbon__target" style="top: 12px; right: -2px; width: 120px;">Chưa xác nhận</div>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 order-lg-2 order-xl-1 kt-widget4 app-widget-1-detail" style="background-color: rgba(75, 207, 250, .2)">
							<div class="kt-widget4__item">
								<span class="kt-widget4__icon">
									<img src="media/users/100_1.jpg" alt="" class="app_widget_img">
								</span>	
								<div class="kt-widget4__title kt-widget4__title--light">
									<span class="app_widget_name">Đỗ Anh Tùng <br></span>
									<span><b>Áp dụng từ:</b> 04-07-2019 đến 31-07-2019 <br></span>
									
								</div> 	

								<div class="kt-portlet__head kt-portlet__head--noborder  kt-ribbon kt-ribbon--danger kt-ribbon--shadow kt-ribbon--left kt-ribbon--round">
									<div class="kt-ribbon__target" style="top: 10px; right: -15px; width: 120px;">Chưa xác nhận</div>
								</div>
							</div>
							<div style="text-align: justify;">
								<span><b>Lời nhắn:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias hic dignissimos aspernatur excepturi cum repellat inventore error, consequatur debitis officiis, aliquid dolore rerum eaque obcaecati impedit delectus dolorem. Eos nihil veritatis eligendi nobis! Error voluptatem sint soluta sapiente voluptatum laborum adipisci vitae blanditiis. Voluptatum, sint. Facere consequuntur error, nobis sequi.<br></span>
							</div>

							<div class="widget-detail-table">
								<div class="span-detail">(<i>Gửi lúc: 16:35 23/07/2019</i> bởi Nam)</div>
								<!-- <div class="span-detail">(<i>Xác nhận lúc: 16:35 23/07/2019</i> bởi Quỳnh Chi)</div> -->
							</div>
							<div class="kt-infobox kt-infobox--success" style="display: flex; justify-content: flex-end">
								<button type="button" class="btn btn-success btn-elevate btn-elevate-air">Xác nhận</button>
							</div>
						</div>
					</div>
				</div>
				<div class="tab-pane" id="kt_tabs_1_4" role="tabpanel">
					Lorem Ipsum is simply dummy text of the printing and typeset
				</div>
			</div>       
		</div>
	</div>
</div>

<script>
	$('#date-range-picker').daterangepicker({
		startDate: moment().subtract(29, 'days'),
		endDate: moment(),
		ranges: {
			'Hôm nay': [moment(), moment()],
			'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
			'Tuần này': [moment().weekday(1), moment()],
			'30 ngày': [moment().subtract(30, 'days'), moment()],
			'Tháng này': [moment().startOf('month'), moment()],
			'Tháng trước': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
		}
	}, function(start, end){
		$('#date').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'))
	});

	$('#date').html(moment().subtract(29, 'days').format('DD/MM/YYYY') + ' - ' + moment().format('DD/MM/YYYY'))
</script>
@endsection