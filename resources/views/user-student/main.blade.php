<!DOCTYPE html>

<html lang="en">

<!-- BEGIN HEAD -->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <base href="{{ asset('') }}public/">
    <title>@yield('page')</title>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="css-student/css.css" rel="stylesheet" type="text/css">
    

    <link href="css-student/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="css-student/simple-line-icons.css" rel="stylesheet" type="text/css">

    <link href="css-student/bootstrap.css" rel="stylesheet" type="text/css">
    
    <!-- <link href="css-student/bootstrap-switch.css" rel="stylesheet" type="text/css">
    <link href="css-student/bootstrapValidator.css" rel="stylesheet" id="style_components" type="text/css">
    <link href="css-student/bootstrap-datepicker3.css" rel="stylesheet" type="text/css">
     -->
    <!-- <link rel="css-student/stylesheet" href="dataTables.bootstrap.css"> -->
   
   

    <!-- <link href="css-student/profile.css" rel="stylesheet" type="text/css"> chua cop component vao css -->
    <!-- <link href="css-student/components.css" rel="stylesheet" type="text/css">  -->


    <link href="css-student/layout.css" rel="stylesheet" type="text/css">
    <!-- <link href="css-student/default.css" rel="stylesheet" type="text/css"> -->
    <!-- <link href="css-student/custom.css" rel="stylesheet" type="text/css"> -->
 

    <link rel="icon" href="media/logos/logo-4.png" type="image/ico">
    
    <script type="text/javascript" src="js/bootstrap.bundle.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/jquery.js"></script>
 

</head>

<body class="page-container-bg-solid" style="overflow-x: hidden;">
    <div class="page-wrapper">
        <div class="page-wrapper-row">
            <div class="page-wrapper-top">
                <!-- BEGIN HEADER -->
                <div class="page-header">
                    <!-- BEGIN HEADER TOP -->
                    <div class="page-header-top">
                        <div class="row col-md-12">
                            <!-- BEGIN LOGO -->
                            <div class="col-md-5 col-sm-5 col-xs-4" style="margin-top: 10px;">
                                <a href="#" onclick="show_chooseStudent()" data-toggle="modal" data-target="#choose-student">

                                    <img class="img-student-info" alt="" src="media/users/100_12.jpg" style="width: 50px;height: 50px;border-radius: 50%!important;">

                                    <span class="span-top" style="margin-left: 5px;"> 
                                        Bạn đang xem bé 
                                    </span> Joy (An Nhiên)

                                </a>
                            </div>

                            <div class="modal fade" style="margin: auto" role="dialog" tabindex="-1" id="choose-student" aria-hidden="true">

                            </div>
                            <div class="page-logo">
                                <a href="#">
                                    <img src="media/logos/logo-3.png" style="margin-left:  
                                    5px; max-height: 60px;" alt="logo" class="logo-default">
                                </a>
                            </div>
                            <!-- END LOGO -->
                            <!-- BEGIN RESPONSIVE MENU TOGGLER -->

                            <!-- END RESPONSIVE MENU TOGGLER -->
                            <!-- BEGIN TOP NAVIGATION MENU -->
                            <div class="top-menu" style="margin-bottom: 10px;">

                                <ul class="nav navbar-nav pull-right">
                                    <!-- BEGIN USER LOGIN DROPDOWN -->
                                    <li class="dropdown dropdown-user dropdown-dark open">
                                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="false" aria-expanded="true">
                                            <img class="img-circle" alt="" src="https://komt.kidsonline.edu.vn/public/avatar/bobethao-1557135048.jpeg" style="width: 50px;height: 50px;border-radius: 50%!important;">
                                            <span class="username username-hide-mobile"></span>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-default">
                                            <li>
                                                <a href="https://komt.kidsonline.edu.vn/v3/bobethao/profileGU">
                                                    <i class="icon-user"></i> Thông tin tài khoản </a>
                                            </li>
                                            <li>
                                                <a href="https://komt.kidsonline.edu.vn/v3/guardian/44944/thong-tin-cua-be">
                                                    <i class="fa fa-book"></i> Hồ sơ của bé </a>
                                            </li>

                                            <li>
                                                <a href="https://komt.kidsonline.edu.vn/logout">
                                                    <i class="icon-key"></i> Đăng xuất </a>
                                            </li>

                                        </ul>
                                    </li>

                                    <!-- END USER LOGIN DROPDOWN -->

                                </ul>
                            </div>
                            <!-- END TOP NAVIGATION MENU -->
                        </div>
                    </div>
                    <!-- END HEADER TOP -->
                    <!-- BEGIN HEADER MENU -->
                    <div class="page-header-menu" style="display: block;">
                        <div class="hor-menu" style="margin-left:0% !important">
                            <ul class="nav navbar-nav">
                                <input type="hidden" value="44944">
                                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                                    <a href="{{URL::to('phu-huynh')}}" class="nav-link">
                                        <i class="glyphicon glyphicon-home"></i> Trang chủ
                                        <span class="arrow"></span>
                                    </a>
                                </li>
                                <li aria-haspopup="true" class="">
                                    <a href="{{URL::to('hoat-dong-cua-be')}}" class="nav-link">
                                        <i class="fa fa-book"></i> Ngày hôm nay của bé</a>
                                    <span class="arrow"></span>
                                </li>
                                <li aria-haspopup="true" class="">
                                    <a href="{{URL::to('anh-cua-be')}}" class="nav-link ">
                                        <i class="glyphicon glyphicon-picture"></i> Ảnh của bé
                                        <span class="arrow"></span>

                                    </a>
                                </li>
                                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown ">
                                    <a href="{{URL::to('bai-viet')}}" class="nav-link">
                                        <i class="fa fa-file-text-o"></i> Bài viết
                                        <span class="arrow"></span>
                                    </a>
                                </li>
                                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                                    <a href="{{URL::to('xin-nghi')}}" class="nav-link">
                                        <i class="fa fa-sticky-note-o"></i> Đơn xin nghỉ
                                        <span class="arrow"></span>
                                    </a>
                                </li>
                                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                                    <a href="{{URL::to('dan-thuoc')}}" class="nav-link">
                                        <i class="fa fa-medkit"></i> Đơn dặn thuốc </a>
                                    <span class="arrow"></span>
                                </li>
                                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                                    <a href="{{URL::to('loi-nhan')}}" class="nav-link">
                                        <i class="fa fa-comment"></i> Lời nhắn đầu ngày </a>
                                    <span class="arrow"></span>
                                </li>
                                <li aria-haspopup="true" class="menu-dropdown classic-menu-dropdown">
                                    <a href="/" target="_blank" class="nav-link">
                                        <i class="fa fa-question"></i> Khảo sát </a>
                                    <span class="arrow"></span>
                                </li>
                                <li>
                                    <a href="/feedback">
                                        <i class="fa fa-comment fa-fw"></i> Đánh giá định kỳ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!-- END MEGA MENU -->
                    </div>
                    <!-- END HEADER MENU -->
                </div>
                <!-- END HEADER -->
            </div>
        </div>
        <div class="page-wrapper-row full-height">
            <div class="page-wrapper-middle">
                <!-- BEGIN CONTAINER -->
                <div class="page-container">
                    <!-- BEGIN CONTENT -->
                    @yield('content')
                    <!-- END CONTENT -->
                </div>
                <!-- END CONTAINER -->
            </div>
        </div>
        <div class="page-wrapper-row">
            <div class="page-wrapper-bottom">
                <!-- BEGIN FOOTER -->
                <!-- BEGIN PRE-FOOTER -->
                <!-- END PRE-FOOTER -->
                <!-- BEGIN INNER FOOTER -->
                <div class="page-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-8 col-xs-8" style="margin-top:10px">
                                <span class="profile-desc-text" style="font-weight: 400;font-size: 15px">
                    <a href="tel:0965002357">
                        <i class="fa fa-phone"></i> Hotline: 0383735536
                    </a>
  
                </div>
                <div class="col-md-4 col-sm-4 col-xs-4" style="margin-top:10px;">
                    <span class="profile-desc-text" style="margin-top:160px;">
                        <a target="_blank" href="https://www.facebook.com/NTKieuTrang.02.02"> 
                            KidsOnline
                        <img src="media/logos/logo-3.png" style="height: 25px;width: auto;margin-top: -2%;margin-left: 1%;">
                        </a>
                    </span>
       
                </div>
            </div>
        </div>
        <div class="scroll-to-top" style="display: none;">
                    <i class="icon-arrow-up"></i>
        </div>
                <!-- END INNER FOOTER -->
                <!-- END FOOTER -->
    </div>
    <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(window).load(function() {
                if ($('.page-header-menu').length > 0) {
                    var _top = $('.page-header-menu').offset().top - parseFloat($('.page-header-menu').css('marginTop').replace(/auto/, 0));
                    $(window).scroll(function(evt) {
                        var _y = $(this).scrollTop();
                        if (_y > _top) {
                            $('.page-header-menu').addClass('fixed');
                            $('.main-1').css("margin-top", "30px")
                        } else {
                            $('.page-header-menu').removeClass('fixed');
                            $('.main-1').css("margin-top", "0")
                        }
                    })
                }
            });
        });
    </script>
</body>

</html>