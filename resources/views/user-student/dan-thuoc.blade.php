<!DOCTYPE html>
<html lang="en">
<!-- BEGIN HEAD -->
@extends('user-student.main') 
@section('page') Dặn thuốc @endsection 
@section('content')
<div class="page-content-wrapper">
    <!-- BEGIN CONTENT BODY -->
    <!-- BEGIN PAGE HEAD-->
    <div class="page-head">
        <div class="container">
            <div class="page-title-h1">Đơn dặn thuốc </div><!-- END PAGE TITLE -->
        </div>
    </div>
    <!-- END PAGE HEAD-->
    <!-- BEGIN PAGE CONTENT BODY -->
    <div class="page-content">
        <div class="container">
            <!-- BEGIN PAGE CONTENT INNER -->
            <div class="panel">
                <div class="panel-body">

                    <!-- don thuoc -->
                    <div class="col-sm-12">
                        <!-- <div class="form-group has-feedback"> -->
                        <div class="col-md-3">
                            <p>Từ ngày:</p>

                            <div class="col-md-12">
                                <input type="text" name="from_date" id="from_date-datepicker" data-date-format="dd-mm-yyyy" class="form-control" value="" data-bv-field="from_date">
                                <i class="form-control-feedback" data-bv-icon-for="from_date" style="display: none;"></i>
                                <small class="help-block" data-bv-validator="notEmpty" data-bv-for="from_date" data-bv-result="NOT_VALIDATED" style="display: none;">Không bỏ trống Từ ngày</small>
                            </div>
                        </div>
                        <!-- </div> -->

                        <!-- <div class="form-group has-feedback"> -->
                        <div class="col-md-3">
                            <p>Đến ngày:</p>

                            <div class="col-md-12">
                                <input type="text" name="from_date" id="to_date-datepicker" data-date-format="dd-mm-yyyy" class="form-control" value="" data-bv-field="from_date">
                                <i class="form-control-feedback" data-bv-icon-for="from_date" style="display: none;"></i>
                                <small class="help-block" data-bv-validator="notEmpty" data-bv-for="from_date" data-bv-result="NOT_VALIDATED" style="display: none;">Không bỏ trống đến ngày</small>
                            </div>
                        </div>
                        <!-- </div> -->

                        <!-- <div class="form-group has-feedback"> -->
                        <div class="col-md-5">
                            <p>Tên đơn</p>
                            <div class="col-md-12">
                                <textarea name="note" id="note" class="form-control" rows="1" data-bv-field="note"></textarea>
                                <i class="form-control-feedback" data-bv-icon-for="note" style="display: none;"></i>
                                <small class="help-block" data-bv-validator="notEmpty" data-bv-for="note" data-bv-result="NOT_VALIDATED" style="display: none;">Cần phải nhập tên đơn</small>
                            </div>
                        </div>
                        <!-- </div> -->

                    </div>
                    <!-- end don thuoc -->

                    <!-- chi tiet don thuoc -->
                    <!--                    <div class="row" style="padding-top: 10px;"> -->
                    <div class="col-sm-12" style="margin-top: 20px;">
                        <div class="portlet box red" style="margin-top: -5px;">
                            <div class="portlet-title">
                                <div class="caption">Chi tiết đơn thuốc</div>
                            </div>
                            <div class="portlet-body" style="overflow-x: hidden;">
                                <table class="table table-striped table-bordered table-hover dt-responsive dataTable no-footer dtr-inline" id="absent-requests-table_wrapper" role="grid" aria-describedby="absent-requests-table_wrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 18px; text-align: center;">STT</th>
                                            <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 90px;text-align: center;">Tên thuốc</th>
                                            <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 90px;text-align: center;">Đơn vị</th>
                                            <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 213px;text-align: center;">Cách dùng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" style="text-align: center;">1</th>
                                            <td>
                                                <input type="text" class="form-control">
                                                <small class="help-block" data-bv-validator="notEmpty" data-bv-for="note" data-bv-result="NOT_VALIDATED" style="display: none;">Tên thuốc</small>
                                            </td>
                                            <td>
                                                <input type="text" class="form-control">
                                                <small class="help-block" data-bv-validator="notEmpty" data-bv-for="note" data-bv-result="NOT_VALIDATED" style="display: none;">Tên thuốc</small>
                                            </td>
                                            <td>
                                                <input type="text" class="form-control">
                                                <small class="help-block" data-bv-validator="notEmpty" data-bv-for="note" data-bv-result="NOT_VALIDATED" style="display: none;">Tên thuốc</small>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>

                        <!-- danh sach don da gui -->

                    </div>

                    <!-- button them don thuoc -->
                    <div class="col-sm-12" >
                        <div class="form-group" style="">
                            <input class="btn btn-primary fix-btn" id="btn-submit" style="margin-left:80px" type="submit" value="Thêm đơn thuốc" width="100%" align="middle">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>

</div>
@endsection


