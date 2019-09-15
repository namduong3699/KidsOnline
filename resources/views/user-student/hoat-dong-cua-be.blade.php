<!DOCTYPE html>
<html lang="en">
@extends('user-student.main')
@section('page')
Ngày hôm nay của bé @endsection
<head><base href="{{ asset('') }}public/"></head>
@section('content')
<div class="page-container">
    <!-- BEGIN CONTENT -->
    <div class="page-content-wrapper">
        <!-- BEGIN CONTENT BODY -->
        <!-- BEGIN PAGE HEAD-->
        <div class="page-head">
            <div class="container">
                <div class="page-title">
                    <h1>Hoạt động của bé dbkid</h1>
                </div>
                <div class="col-lg-6 pull-right" align="right">
                    <form class="form-inline">
                        <div class="form-group" style="margin-top:2%;">
                            <label style="font-size: 14px;" class="input-group" for="datepicker">Chọn ngày:</label>
                            <div class="input-group">
                                <input type="text" id="datepicker" name="date" class="form-control" data-date-format="dd-mm-yyyy">
                            </div>
                        </div>
                    </form>
                </div>
                <!-- END PAGE TITLE -->
            </div>
        </div>
        <!-- END PAGE HEAD-->
        <!-- BEGIN PAGE CONTENT BODY -->
        <div class="page-content">
            <div class="container">
                <div align="center" id="show_spinner" style="display: none;">
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <h4>Đang lấy thông tin hoạt động trong ngày của học sinh</h4>
                    <div id="cssload-pgloading">
                        <div class="cssload-loadingwrap">
                            <ul class="cssload-bokeh">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="activity">
                    <div class="row col-md-12">

                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="panel panel-info">
                                <div class="panel-heading" align="left" style="background: #01afd8;">
                                    <strong style="color: white">Hoạt động học</strong>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div style="margin: 0 auto;">
                                                <img src="media/math.png" style="width:250px;margin: 0 auto;">
                                            </div>
                                        </div>
                                        <div class="col-md-9" style=" vertical-align: middle;">
                                            <table class="table table-responsive" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="width: 15%;">
                                                            <button type="button" class="btn btn-info">
                                                                Buổi sáng
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <textarea readonly="readonly" rows="4" style="width: 50%;" class="form-control"></textarea>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 15%">
                                                            <b> Nhận xét</b>
                                                        </td>
                                                        <td style="text-align: left">dbkid</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table class="table table-responsive" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="width: 15%;">
                                                            <button type="button" class="btn btn-info">
                                                                Buổi chiều
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <textarea readonly="readonly" rows="4" style="width: 50%;" class="form-control"></textarea>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="width: 15%">
                                                            <b> Nhận xét</b>
                                                        </td>
                                                        <td style="text-align: left">dbkid</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <div class="panel panel-info">
                                <div class="panel-heading" align="left" style="background: #01afd8;">
                                    <strong style="color: white">Hoạt động ăn</strong>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img src="media/math.png" style="width:100%;margin: 0 auto;">
                                        </div>
                                        <div class="col-md-9">
                                            <table class="table table-responsive table-hover table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th width="15%">Tên bữa</th>
                                                        <th width="50%">Món ăn</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style="text-align: center;vertical-align: middle">
                                                            Bữa sáng
                                                        </td>
                                                        <td>
                                                            <textarea class="form-control" style="width: 100%;" readonly="readonly" rows="4">dbkid</textarea>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: center;vertical-align: middle">
                                                            Bữa trưa
                                                        </td>
                                                        <td>
                                                            <textarea class="form-control" style="width: 100%;" readonly="readonly" rows="4">dbkid</textarea>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: center;vertical-align: middle">
                                                            Bữa chiều
                                                        </td>
                                                        <td>
                                                            <textarea class="form-control" style="width: 100%;" readonly="readonly" rows="4">dbkid</textarea>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="text-align: center;vertical-align: middle">
                                                            Bữa phụ chiều
                                                        </td>
                                                        <td>
                                                            <textarea class="form-control" style="width: 100%;" readonly="readonly" rows="4">dbkid</textarea>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Nhận xét
                                                        </td>
                                                        <td>dbkid</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6" style="padding-left: 1px;">
                            <div class="panel panel-info">
                                <div class="panel-heading" align="left" style="background: #01afd8;">
                                    <strong style="color: white">Hoạt động ngủ</strong>
                                </div>
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img src="media/sleep.png" style="width:100%;margin: 0 auto;">
                                        </div>
                                        <div class="col-md-9">
                                            <table class="table table-responsive" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td width="15%">
                                                            <button type="button" class="btn btn-info">
                                                                Bắt đầu
                                                            </button>
                                                        </td>
                                                        <td style="text-align: left">
                                                            11:15
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="15%">
                                                            <button type="button" class="btn btn-info">
                                                                Kết thúc
                                                            </button>
                                                        </td>
                                                        <td style="text-align: left">
                                                            14:15
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td width="15%">
                                                            <button type="button" class="btn btn-info">
                                                                Ghi chú
                                                            </button>
                                                        </td>
                                                        <td style="text-align: left">

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
    <!-- END CONTENT -->
</div>
@endsection