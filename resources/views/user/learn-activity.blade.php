@extends('user.main')

@section('content')
<div class="row height-p100 margin-0">
	<div class="kt-portlet">
		<div class="kt-portlet__body height-p100">
			<ul class="nav nav-tabs margin-0" role="tablist">
				<li class="nav-item width-p25">
					<a class="nav-link active" data-toggle="tab" href="#kt_tabs_1_1">
						Hoạt động học sáng
					</a>
				</li>
				<li class="nav-item width-p25">
					<a class="nav-link" data-toggle="tab" href="#kt_tabs_1_2">
						Hoạt động học chiều
					</a>
				</li>
			</ul>                    

			<div class="tab-content height-p100 attendance-tab">
				<div class="attendance-info">
					hihi
				</div>
				<div class="date-picker">
					<div class="input-group date">
						<input type="text" class="form-control" readonly="" value="05/20/2017" id="kt_datepicker_3">
						<div class="input-group-append">
							<span class="input-group-text">
								<i class="la la-calendar"></i>
							</span>
						</div>
					</div>
				</div>
				
				<div class="tab-pane active" id="kt_tabs_1_1" role="tabpanel">
					
				</div>



				<div class="tab-pane" id="kt_tabs_1_2" role="tabpanel">
					
				</div>
			</div>       
		</div>
	</div>
</div>

@endsection