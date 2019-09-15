<!DOCTYPE html>
<!-- saved from url=(0061)https://komt.kidsonline.edu.vn/v3/guardian/44944/don-xin-nghi -->
<html lang="en">
<!--<![endif]-->
<!-- BEGIN HEAD -->
@extends('user-student.main')
@section('page')
Thông tin của bé @endsection
@section('content')
@section('content')
<div class="page-container">
    <!-- BEGIN CONTENT -->
    <div class="page-content-wrapper">
        <!-- BEGIN CONTENT BODY -->
        <!-- BEGIN PAGE HEAD-->
        <div class="page-head">
            <div class="container">
            </div>
        </div>
        <!-- END PAGE HEAD-->
        <!-- BEGIN PAGE CONTENT BODY -->
        <div class="page-content">
            <div class="container">
                <form method="POST" action="https://komt.kidsonline.edu.vn/v3/bobethao/profileGU" accept-charset="UTF-8" id="editFormUser" data-toggle="validator" novalidate="novalidate" class="bv-form">
                    <button type="submit" class="bv-hidden-submit" style="display: none; width: 0px; height: 0px;"></button>
                    <input name="_token" type="hidden" value="J14pzad5yf9XDCPwFCduT6pN39oyTBr4HCeUcR3y">
                    <input type="hidden" name="_token" value="J14pzad5yf9XDCPwFCduT6pN39oyTBr4HCeUcR3y">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="form-group">
                                    <label class="control-label">
                                        Ảnh đại diện
                                    </label>
                                    <div class="fileupload fileupload-new" data-provides="fileupload">
                                        <div class="col-md-3">
                                            <div class="fileupload-new thumbnail"><img src="https://komt.kidsonline.edu.vn/public/avatar/bobethao-1557135048.jpeg" alt="" id="img_user">
                                            </div>
                                            <input type="file" name="avatar" onchange="change_avatar_user(this)" style="display: none" id="avatar-user">
                                            <input type="button" class="btn btn-success" value="Chọn ảnh" onclick="document.getElementById('avatar-user').click()">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="control-label">
                                    Tên tài khoản
                                </label>
                                <input type="text" class="form-control" id="username" name="username" readonly="readonly" value="bobethao">
                            </div>
                            <div class="form-group has-feedback">
                                <label class="control-label">
                                    Địa chỉ Email
                                </label>
                                <input type="email" class="form-control" id="email" name="email" readonly="readonly" value="" data-bv-field="email"><i class="form-control-feedback" data-bv-icon-for="email" style="display: none;"></i>
                                <small class="help-block" data-bv-validator="emailAddress" data-bv-for="email" data-bv-result="NOT_VALIDATED" style="display: none;">Please enter a valid email address</small></div>
                            <div class="form-group has-feedback">
                                <label class="control-label">
                                    Mật khẩu
                                </label>
                                <input type="password" autocomplete="nope" class="form-control" name="password" id="password" value="" data-bv-field="password"><i class="form-control-feedback" data-bv-icon-for="password" style="display: none;"></i>
                                <small class="help-block" data-bv-validator="stringLength" data-bv-for="password" data-bv-result="NOT_VALIDATED" style="display: none;">Mật khẩu phải trên 6 ký tự</small></div>
                            <div class="form-group has-feedback">
                                <label class="control-label">
                                    Nhập lại mật khẩu
                                </label>
                                <input type="password" class="form-control" id="password-again" name="password_again" data-bv-field="password_again"><i class="form-control-feedback" data-bv-icon-for="password_again" style="display: none;"></i>
                                <small class="help-block" data-bv-validator="identical" data-bv-for="password_again" data-bv-result="NOT_VALIDATED" style="display: none;">Mật khẩu và nhập lại mật khẩu phải giống nhau</small></div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="control-label">
                                    Quốc gia
                                </label>
                                <select name="country_id" id="country_id" aria-controls="dataTables-example" class="form-control">
                                    <option value="1">Afghanistan</option>
                                                                    </select>
                            </div>
                            <div class="form-group connected-group has-feedback">
                                <label class="control-label">
                                    Số điện thoại
                                </label>
                                <input type="text" class="form-control" id="mobile" value="0973538535" name="mobile_phone" data-bv-field="mobile_phone"><i class="form-control-feedback" data-bv-icon-for="mobile_phone" style="display: none;"></i>
                                <small class="help-block" data-bv-validator="notEmpty" data-bv-for="mobile_phone" data-bv-result="NOT_VALIDATED" style="display: none;">Không bỏ trống Di động</small></div>
                            <div class="form-group connected-group">
                                <label class="control-label">
                                    Số máy bàn
                                </label>
                                <input type="text" class="form-control" id="home_phone" value="" name="home_phone">
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label class="control-label">
                                            Họ
                                        </label>
                                        <input type="text" class="form-control" id="lastname" name="last_name" value="Nguyễn">
                                    </div>
                                    <div class="col-md-4">
                                        <label class="control-label">
                                            Đệm
                                        </label>
                                        <input type="text" class="form-control" id="middlename" name="middle_name" value="Nhật">
                                    </div>
                                    <div class="col-md-4">
                                        <label class="control-label">
                                            Tên
                                        </label>
                                        <input type="text" class="form-control" id="firstname" name="first_name" value="Quang">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label">
                                    Giới tính
                                </label>
                                <div>
                                    <label class="radio-inline">
                                        <input type="radio" class="grey" value="male" name="gender" id="gender_female" checked="checked"> Nam
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" class="grey" value="female" name="gender" id="gender_male"> Nữ
                                    </label>
                                </div>
                            </div>

                            <div class="form-group connected-group">
                                <label class="control-label">
                                    Ngày sinh
                                </label>
                                <input type="text" class="form-control" id="datepicker" name="date_of_birth" data-date-format="dd-mm-yyyy" value="29-09-2013">
                            </div>
                            <div class="form-group connected-group">
                                <label class="control-label">
                                    Mô tả
                                </label>
                                <textarea type="text" class="form-control" id="description" name="description" rows="3"> </textarea>
                            </div>

                        </div>
                    </div>
                    <div align="center">
                        <a type="button" href="https://komt.kidsonline.edu.vn/v3/guardian/44944/ngay-hom-nay-cua-be" class="btn btn-default" data-dismiss="modal">Hủy</a>
                        <button type="button" onclick="update_user(72841)" class="btn btn-primary">Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- END PAGE CONTENT BODY -->
        <!-- END CONTENT BODY -->
    </div>
    <!-- END CONTENT -->
</div>

@endsection