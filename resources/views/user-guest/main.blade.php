<!DOCTYPE html>

<html lang="en">

<!-- BEGIN HEAD -->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <base href="{{ asset('') }}public/">
    <title>@yield('page')</title>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="css-guest/main.css" rel="stylesheet" type="text/css">
    <link href="css-student/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="css-student/layout.css" rel="stylesheet" type="text/css">

    <link rel="icon" href="media/logos/logo-4.png" type="image/ico">
    <!-- END HEAD -->
    <script type="text/javascript" src="js/bootstrap.bundle.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/jquery.js"></script>
    <!-- END CUSTOM -->
</head>
<body style="overflow-x: hidden;">
    <div class="page-wrapper" >
        <div class="page-wrapper-row">
         
            <!-- BEGIN HEADER -->
            <div class="page-header">
                <!-- BEGIN HEADER TOP -->
                 <!-- BEGIN HEADER socket -->
                        <div class="header-socket">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-6 hs-left">
                                        <span class="email"><img src="media/icon-email.png" alt="Email" data-was-processed="true" class="error">&nbsp;Email: 
                                                    <a href="mailto:ktrangk38@gmail.com<">
                                                      <strong>ktrangk38@gmail.com</strong>
                                                    </a>
                                            </span>
                                        <span class="hotline"> <img src="media/icon-call.png" alt="Hotline" data-was-processed="true"> Hotline: <strong>0383735536</strong>
                                            </span>
                                    </div>
                                    <div class="col-sm-6 hs-right">Follow us:&nbsp;
                                        <a href="https://www.facebook.com/NTKieuTrang.02.02">
                                            <img src="media/icon-facebook.png" alt="Facebook" class="lazyloading" data-was-processed="true">
                                        </a>
                                        <a href="https://www.facebook.com/NTKieuTrang.02.02">
                                            <img src="media/icon-twitter.png" alt="Twitter" class="lazyloading" data-was-processed="true">
                                        </a>
                                        <a href="https://www.facebook.com/NTKieuTrang.02.02">
                                            <img src="media/icon-google-plus.png" alt="G+" class="lazyloading" data-was-processed="true">
                                        </a>
                                        <a href="skype:zemi6886?chat">
                                            <img src="media/icon-skype.png" alt="Skype" class="lazyloading" data-was-processed="true">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END HEADER socket -->
                        <div class="top-menu-guest">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-3 hs-center">
                                        <div class="page_logo" itemtype="http://schema.org/Organization" itemscope="itemscope">
                                            <a rel="home" href="{{URL::to('/')}}" itemprop="url"> <img src="media/logos/logo.png" itemprop="logo" class="error" data-was-processed="true"> </a>
                                        </div>
                                    </div>
                                    <div class="col-sm-8 hs-right">
                                        <div class="navbar-menu-right ">
                                            <li aria-haspopup="true" class="">
                                                <a class="nav-link" href="{{URL::to('/')}}">TUYỂN SINH</a>
                                            </li>
                                            <li aria-haspopup="true" class="">
                                                <a class="nav-link" href="{{URL::to('/')}}">THÔNG BÁO</a>
                                            </li>
                                            <li aria-haspopup="true" class="">
                                                <a class="nav-link" href="{{URL::to('/')}}">TUYỂN DỤNG</a>
                                            </li>
                                             <li aria-haspopup="true" class="">
                                                <a class="nav-link" href="{{URL::to('/')}}">GIỚI THIỆU</a>
                                            </li>
                                            <li aria-haspopup="true" class="">
                                                <a class="nav-link" href="{{URL::to('/')}}">TIN TỨC</a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                <!-- END HEADER TOP -->
            </div>
            <!-- END HEADER -->
            
        </div>

        <!--BEGIN CONTAINER-->
        <div class="page-wrapper-row full-height">
            <div class="page-wrapper-middle">
                <div class="page-container">
                    <!--BEGIN CONTENT-->
                    <div class="page-content-wrapper">
                        @yield('content')
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<!--===============================================================================================-->  
    <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
    <script src="vendor/bootstrap/js/popper.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
    <script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
    <script src="vendor/tilt/tilt.jquery.min.js"></script>
    <script >
        $('.js-tilt').tilt({
            scale: 1.1
        })
    </script>
<!--===============================================================================================-->
    <script src="js/main.js"></script>
    <!-- fixd menu -->
   <script type="text/javascript">
        jQuery(document).ready(function($) {
            $(window).load(function() {
                if ($('.top-menu-guest').length > 0) {
                    var _top = $('.top-menu-guest').offset().top - parseFloat($('.top-menu-guest').css('marginTop').replace(/auto/, 0));
                    $(window).scroll(function(evt) {
                        var _y = $(this).scrollTop();
                        if (_y > _top) {
                            $('.top-menu-guest').addClass('fixed');
                            $('.main-1').css("margin-top", "30px")
                        } else {
                            $('.top-menu-guest').removeClass('fixed');
                            $('.main-1').css("margin-top", "0")
                        }
                    })
                }
            });
        });
    </script>


</html>