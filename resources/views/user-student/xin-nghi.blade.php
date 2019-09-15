<!DOCTYPE html>
<html lang="en">
<!-- BEGIN HEAD -->
@extends('user-student.main') 
@section('page') Xin nghỉ @endsection 
@section('content')
<div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <!-- BEGIN PAGE HEAD-->
    <div class="page-head">
        <div class="container">
            <div class="page-title-h1">

                Đơn xin nghỉ

            </div>
            <!-- END PAGE TITLE -->
        </div>
    </div>
    <!-- END PAGE HEAD-->
    <!-- BEGIN PAGE CONTENT BODY -->
    <div class="page-content">
        <div class="container">
            <!-- BEGIN PAGE CONTENT INNER -->
            <div class="page-content-inner">
                <div class="portlet light portlet-fit ">
                    <div class="portlet-body">
                        <div class="row" style="margin-top: 5px;">
                            <div class="col-md-5" style="margin-left: 50px;">
                                <img class="square-img" src="media/friendly.png" style="height: 60%;width: 80%;margin-top: 7px;margin-left: 7px;">
                            </div>
                            <div class="col-md-6">
                                <div class="panel panel-primary">
                                    <div class="panel-heading">
                                        Gửi đơn xin nghỉ học cho học sinh
                                    </div>
                                    <div class="panel-body">
                                        <form method="POST" action="https://komt.kidsonline.edu.vn/v3/guardian/44944/don-xin-nghi/luu" accept-charset="UTF-8" class="form-horizontal bv-form" id="absent-request-form" novalidate="novalidate">
                                            <button type="submit" class="bv-hidden-submit" style="display: none; width: 0px; height: 0px;"></button>
                                            <input name="_token" type="hidden" value="J14pzad5yf9XDCPwFCduT6pN39oyTBr4HCeUcR3y">
                                            <input type="hidden" name="student_id" value="44944">
                                            <input type="hidden" name="class_id" value="6310">
                                            <div class="col-md-12">
                                                <div class="form-group has-feedback">
                                                    <div class="col-md-3">
                                                        <label for="from_date">Từ ngày:</label>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input type="text" name="from_date" id="from_date-datepicker" data-date-format="dd-mm-yyyy" class="form-control" value="" data-bv-field="from_date"><i class="form-control-feedback" data-bv-icon-for="from_date" style="display: none;"></i>
                                                        <small class="help-block" data-bv-validator="notEmpty" data-bv-for="from_date" data-bv-result="NOT_VALIDATED" style="display: none;">Không bỏ trống Từ ngày</small>
                                                    </div>
                                                </div>
                                                <div class="form-group has-feedback">
                                                    <div class="col-md-3">
                                                        <label for="to_date">Đến ngày:</label>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <input type="text" name="to_date" id="to_date-datepicker" data-date-format="dd-mm-yyyy" class="form-control" value="" data-bv-field="to_date">
                                                        <i class="form-control-feedback" data-bv-icon-for="to_date" style="display: none;"></i>
                                                        <small class="help-block" data-bv-validator="notEmpty" data-bv-for="to_date" data-bv-result="NOT_VALIDATED" style="display: none;">Không bỏ trống Đến ngày</small></div>
                                                </div>
                                                <div class="form-group has-feedback">
                                                    <div class="col-md-3">
                                                        <label for="note">Ghi chú: </label>
                                                    </div>
                                                    <div class="col-md-7">
                                                        <textarea name="note" id="note" class="form-control" rows="3" data-bv-field="note"></textarea><i class="form-control-feedback" data-bv-icon-for="note" style="display: none;"></i>
                                                        <small class="help-block" data-bv-validator="notEmpty" data-bv-for="note" data-bv-result="NOT_VALIDATED" style="display: none;">Cần phải nhập Ghi chú</small></div>
                                                </div>
                                                <div class="form-group">
                                                    <input class="btn btn-primary fix-btn" id="btn-submit" align="center" width="100%" style="margin-left:80px" type="submit" value="Thêm đơn xin nghỉ">
                                                </div>
                                            </div>
                                        </form>
                                        <div class="col-md-7" id="message">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="portlet box red" style="margin-top: -5px;">
                                    <div class="portlet-title">
                                        <div class="caption">
                                            Danh sách các đơn xin nghỉ học của học sinh
                                        </div>
                                        <div class="tools"></div>
                                    </div>
                                    <div class="portlet-body">
                                        <div class="table-responsive">
                                            <div id="absent-requests-table_wrapper_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="dataTables_length" id="absent-requests-table_wrapper_length">
                                                            <label>Xem
                                                                <select name="absent-requests-table_wrapper_length" aria-controls="absent-requests-table_wrapper" class="form-control input-sm">
                                                                    <option value="5">5</option>
                                                                    <option value="10">10</option>
                                                                    <option value="20">20</option>
                                                                    <option value="-1">All</option>
                                                                </select> bản ghi</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div id="absent-requests-table_wrapper_filter" class="dataTables_filter">
                                                            <label>Tìm kiếm:
                                                                <input type="search" class="form-control input-sm" placeholder="Nhập từ khóa" aria-controls="absent-requests-table_wrapper">
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <table class="table table-striped table-bordered table-hover dt-responsive dataTable no-footer dtr-inline" id="absent-requests-table_wrapper" role="grid" aria-describedby="absent-requests-table_wrapper_info">
                                                            <thead>
                                                                <tr role="row">
                                                                    <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 48px;">STT</th>
                                                                    <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 48px;">Từ ngày</th>
                                                                    <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 69px;">Đến ngày</th>
                                                                    <th width="20%" class="sorting_disabled" rowspan="1" colspan="1" style="width: 176px;">Nội dung</th>
                                                                    <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 61px;">Người gửi</th>
                                                                    <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 86px;">Thời gian gửi</th>
                                                                    <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 213px;">Trạng thái</th>
                                                                    <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 70px;">Ghi chú</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr id="absent_request171896" class="gradeX odd" role="row">

                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <div class="dataTables_info" id="absent-requests-table_wrapper_info" role="status" aria-live="polite">Đang xem 1 đến 5 trong tổng số 121 bản ghi</div>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <div class="dataTables_paginate paging_simple_numbers" id="absent-requests-table_wrapper_paginate">
                                                            <ul class="pagination">
                                                                <li class="paginate_button previous disabled" aria-controls="absent-requests-table_wrapper" tabindex="0" id="absent-requests-table_wrapper_previous"><a href="#">Trước</a></li>
                                                                <li class="paginate_button active" aria-controls="absent-requests-table_wrapper" tabindex="0"><a href="#">1</a></li>
                                                                <li class="paginate_button " aria-controls="absent-requests-table_wrapper" tabindex="0"><a href="#">2</a></li>
                                                                <li class="paginate_button " aria-controls="absent-requests-table_wrapper" tabindex="0"><a href="#">3</a></li>
                                                                <li class="paginate_button " aria-controls="absent-requests-table_wrapper" tabindex="0"><a href="#">4</a></li>
                                                                <li class="paginate_button " aria-controls="absent-requests-table_wrapper" tabindex="0"><a href="#">5</a></li>
                                                                <li class="paginate_button disabled" aria-controls="absent-requests-table_wrapper" tabindex="0" id="absent-requests-table_wrapper_ellipsis"><a href="#">…</a></li>
                                                                <li class="paginate_button " aria-controls="absent-requests-table_wrapper" tabindex="0"><a href="#">25</a></li>
                                                                <li class="paginate_button next" aria-controls="absent-requests-table_wrapper" tabindex="0" id="absent-requests-table_wrapper_next"><a href="#">Tiếp</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- END PAGE CONTENT BODY -->
    <!-- END CONTENT BODY -->
</div>

@endsection