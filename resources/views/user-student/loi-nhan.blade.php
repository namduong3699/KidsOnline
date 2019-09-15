<!DOCTYPE html>
<html lang="en">
@extends('user-student.main') @section('page') Lời nhắn @endsection 
@section('content')
<div class="page-container">
    <!-- BEGIN CONTENT -->
    <div class="page-content-wrapper">
        <!-- BEGIN CONTENT BODY -->
        <!-- BEGIN PAGE HEAD-->
        <div class="page-head">
            <div class="container">
                <div class="page-title">
                    <h1>Lời nhắn đầu ngày của Bé dbkid </h1>

                </div>
                <!-- END PAGE TITLE -->
            </div>
        </div>
        <!-- END PAGE HEAD-->
        <!-- BEGIN PAGE CONTENT BODY -->
        <div class="page-content">
            <div class="container">
                <div class="modal fade" id="createMorningMessage" tabindex="-1" role="basic" aria-hidden="true">
                    <div class="modal-dialog" id="modal-dialog" style="width: 80%;margin-left: 30%;">
                        <div class="col-md-6 col-sm-6">
                            <div class="panel panel-primary">
                                <div class="panel-heading">
                                    Gửi lời nhắn
                                </div>
                                <div class="panel-body">
                                    <input type="hidden" name="student_id" value="44944">
                                    <input type="hidden" name="class_id" value="6310">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label for="send_date" style="font-weight: 700;max-width: 100%;">Nhắc ngày:
                                            </label>
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" name="send_date" id="send_date" class="form-control" data-date-format="dd-mm-yyyy" value="06-09-2019">
                                            <input type="hidden" value="2019-09-06" id="send_date_format">

                                        </div>
                                    </div>
                                    <div class="row col-md-12" style="margin-top: 15px;">
                                        <div class="col-md-9">
                                            <div class="form-group">
                                                <textarea name="content" class="form-control" placeholder="Nhập nội dung..." rows="5" id="textarea-content"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-9 col-sm-9">
                                            <select class="form-control" id="type-message">
                                                <option value="0" selected="">Gửi tới cô giáo trong lớp</option>
                                                <option value="1">Gửi tới Nhà trường</option>
                                            </select>
                                        </div>
                                        <div class="col-md-3 col-sm-3" style="text-align: right">
                                            <button type="button" class="btn btn-primary btn-sm" onclick="create_MorningMessage()">
                                                Gửi lời nhắn <i class="fa fa-envelope"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="notice" tabindex="-1" role="basic" aria-hidden="true">
                    <div class="modal-dialog" id="modal-dialog" style="width: 80%;margin-left: 30%;">
                        <div class="col-md-6">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <div class="modal-title">
                                        <h3><strong>Chú thích</strong></h3>
                                    </div>
                                </div>
                                <div class="modal-body">
                                    <div class="page-content">
                                        <p>
                                            <button class="btn btn-info">Lời nhắn gửi tới cô giáo trong lớp</button>
                                        </p>
                                        <p>
                                            <button class="btn btn-success">Lời nhắn gửi tới Nhà trường</button>
                                        </p>
                                        <div class="alert alert-danger">Mỗi ngày được gửi 1 lời nhắn, phụ huynh có thể sửa nội dung lời nhắn.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-content-inner">
                    <div class="panel panel-info">
                        <div class="panel-heading" style="height: 50px">

                            <div class="col-md-4">Danh sách các lời nhắn của học sinh</div>
                            <div class="col-md-5">
                                <button type="button" data-target="#createMorningMessage" data-toggle="modal" class="btn btn-primary">Thêm tin nhắn đầu ngày</button>

                                <button type="button" class="btn btn-success" data-target="#notice" data-toggle="modal">
                                    Chú thích</button>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-12 col-sm-12" style="margin-top: 20px;" id="list-messages">
                                    <div class="col-md-4 col-xs-4 col-sm-6" id="message280497">
                                        <div class="portlet box blue" id="panel-message280497">
                                            <div class="portlet-title" style="text-align: center">
                                                dbkid 05-09-2019
                                                <div class="btn-group pull-right">
                                                    <button type="button" class="btn btn-danger btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                                        <i class="fa fa-chevron-down"></i>
                                                    </button>
                                                    <ul class="dropdown-menu slidedown">
                                                        <li>
                                                            <a href="#" onclick="showEdit(280497); return false;">
                                                                <i class="fa fa-edit fa-fw"></i>Sửa
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" onclick="deleteMessage(280497); return false;">
                                                                <i class="fa fa-times fa-fw"></i> Xóa
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="portlet-body" style="height: 100px !important;">
                                                <div id="content-label280497">bdkid</div>
                                                <div id="content-text280497" style="display: none">

                                                    <textarea id="content-message280497" class="form-control" rows="4">bdkid</textarea>
                                                    <br>
                                                    <div class="col-sm-12 col-md-12" align="right">
                                                        <button class="btn btn-xs btn-primary" id="btn-update-content280497" onclick="updateContent(280497)">
                                                            Cập nhật
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="panel-footer" align="right">
                                                <span class="pull-left" id="accepter_name280497">
                                            <b class="text-primary">bdkid đã xác nhận</b>
                                    </span>

                                                <a href="#" data-toggle="modal" data-target="#showMessage" onclick="showMessagePanel(280497); return false;" style="text-decoration: none">
                                                Chi tiết <i class="fa fa-chevron-circle-right"></i>
                                            </a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="showMessage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div style="width:30%; margin:auto; margin-top: 50px;" id="messagePanel">

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