
@extends('user-teacher.main')
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
<div class="table-scrollable">

    <table class="table table-hover table-bordered table-striped table-bordered  dataTable no-footer" id="student-attendance-table" role="grid" aria-describedby="student-attendance-table_info">
        <thead>
            <tr role="row">
                <th class="text-center table-stt sorting_disabled" rowspan="1" colspan="1" style="width: 25px;">STT</th>
                <th class="text-center table-img sorting_disabled" rowspan="1" colspan="1" style="width: 37px;">Ảnh</th>
                <th class="table-name sorting_disabled" rowspan="1" colspan="1" style="width: 96px;">Họ và tên</th>
                <th class="table-name-orther sorting_disabled" rowspan="1" colspan="1" style="width: 65px;">Tên khác</th>
                <th class="text-center table-birthday sorting_disabled" rowspan="1" colspan="1" style="width: 69px;">Ngày sinh</th>
                <th class="text-center sorting_disabled" rowspan="1" colspan="1" style="width: 64px;">Đi học</th>
                <th class="text-center sorting_disabled" rowspan="1" colspan="1" style="width: 64px;">Có phép</th>
                <th class="text-center sorting_disabled" rowspan="1" colspan="1" style="width: 85px;">Không phép</th>
                <th style="min-width: 240px; width: 240px;" class="text-center sorting_disabled" rowspan="1" colspan="1">Ghi chú</th>
            </tr>
        </thead>

        <tbody id="body-attendance">

            <tr id="tr-attendance_come65607" data-student-id="65607" role="row" class="odd">
                <td class="text-center">1</td>
                <td class="text-center"><img class="user-pic rounded" src="https://komt.kidsonline.edu.vn/public/studentAvatar/NOIMAGE.jpg"></td>
                <td class="table-td-left">Nguyễn Tiềm Năng 1</td>
                <td class="table-td-left">Năng</td>
                <td>01-01-2013</td>
                <td class="text-center">
                    <div class="round">
                        <input type="radio" class="radio attendance_radio" value="2" id="learn_request_65607" data-student-id="65607" name="check_attendance65607">
                        <label for="learn_request_65607"></label>
                    </div>
                </td>
                <td class="text-center">
                    <div class="round">
                        <input type="radio" class="radio attendance_radio absent_attendance" value="1" id="has_request_65607" data-student-id="65607" name="check_attendance65607">
                        <label for="has_request_65607"></label>
                    </div>
                </td>

                <td class="text-center">
                    <div class="round">
                        <input type="radio" class="radio attendance_radio absent_attendance" value="0" id="no_request_65607" data-student-id="65607" checked="" name="check_attendance65607">
                        <label for="no_request_65607"></label>
                    </div>
                </td>

                <td>
                    <textarea class="text-area" rows="3" cols="50" name="note_65607" id="note_come_65607" style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 38px;"></textarea>
                </td>
            </tr>
        </tbody>
    </table>
</div>
@endsection