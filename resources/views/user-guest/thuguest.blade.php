<!DOCTYPE html>

<html lang="en">

<!-- BEGIN HEAD -->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <base href="{{ asset('') }}public/">
    <title>@yield('page')</title>
    <!-- BEGIN GLOBAL MANDATORY STYLES -->
    <link href="css-guest/main.css" rel="stylesheet" type="text/css">

    <link href="css-student/css.css" rel="stylesheet" type="text/css">
    <link href="css-student/font-awesome.css" rel="stylesheet" type="text/css">
    
    <link href="css-student/bootstrap.css" rel="stylesheet" type="text/css">

    <link href="css-student/layout.css" rel="stylesheet" type="text/css">

    <link href="css-student/default.css" rel="stylesheet" type="text/css">

    <link rel="icon" href="media/logos/logo-4.png" type="image/ico">
    <!-- END HEAD -->
    <script type="text/javascript" src="js/bootstrap.bundle.js"></script>
    <script type="text/javascript" src="js/bootstrap.js"></script>
    <script type="text/javascript" src="js/jquery.js"></script>
    <!-- END CUSTOM -->
</head>
<body class="page-container-bg-solid" style="overflow-x: hidden;">
    <div class="page-wrapper">
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
                                            <a rel="home" href="{{URL::to('/')}}" itemprop="url"> <img src="media/logos/logo-3.png" itemprop="logo" class="error" data-was-processed="true"> </a>
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
                        <div class="page-content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="wrap-login100">
                                            <form class="login100-form validate-form js-login-form">
                                                <span class="block-title">Đăng nhập</span>
                                                <div class="wrap-input100 validate-input" data-validate="Email không hợp lệ. VD: ex@abc.xyz">
                                                    <input class="input100" type="email" name="email" placeholder="Email">
                                                    <span class="focus-input100"></span>
                                                    <span class="symbol-input100">
                                                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                                        </span>
                                                </div>

                                                <div class="wrap-input100 validate-input" data-validate="Không được bỏ trống">
                                                    <input class="input100" type="password" name="pass" placeholder="Mật khẩu">
                                                    <span class="focus-input100"></span>
                                                    <span class="symbol-input100">
                                                            <i class="fa fa-key" aria-hidden="true"></i>
                                                        </span>
                                                </div>

                                                <div class="container-login100-form-btn">
                                                    <button class="login100-form-btn js-check-input js-login-btn">Đăng nhập</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-sm-8"></div>
                                </div>
                                <!-- BEGIN GIỚI THIỆU-->
                                <div class="row" style="margin-top:15px;">

                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="panel panel-info">
                                            <div class="panel-heading" align="left" style="background: #01afd8;">
                                                <strong style="color: white">GIỚI THIỆU</strong>
                                            </div>
                                            <div class="panel-body">
                                               
                                                <div>
                                                        <div id="content-inner">
                                                            <p><strong>Kính gửi Quý phụ huynh!</strong></p>
                                                            <p>Xin hân hoan chào đón Quý phụ huynh cùng các bé yêu đến với<em> Ngôi nhà mơ ước lớn của bé -<strong>Trường mầm non STEAMe GARTEN</strong></em></p>
                                                            <p>Chúng tôi tự hào là chuỗi trường mầm non song ngữ đầu tiên tại Việt Nam áp dụng phương pháp giáo dục STEM cho trẻ mầm non. Giá trị mà chúng tôi mang lại&nbsp;cho các bé là một môi trường học tập với không gian mở, thân thiện, an toàn cùng chương trình giáo dục hiện đại, hỗ trợ tối đa tiềm năng cá nhân của bé. Đó chính là tiền đề cho sự phát triển toàn diện của các bé.</p>
                                                            <p>Nhân tố trung tâm của STEAMe GARTEN là trẻ em. Cách tiếp cận học tập cá nhân của chúng tôi đặt mỗi em bé vào trung tâm của mọi hoạt động, để các em phát triển đầy đủ các giá trị:</p>
                                                            <ul>
                                                                <strong><li>Tự tin (confidence)</li>
                                                                    <li>Ham hiểu biết (curiosity)</li>
                                                                    <li>Sáng tạo (creativity)</li>
                                                                    <li>Chủ động (proactivity)</li>
                                                                    <li>Hợp tác (co-operation)</li>
                                                                    <li>Yêu thương (Love)</li>
                                                                </strong>
                                                            </ul>
                                                            <p>Với chương trình giáo dục STEAMe, chúng tôi sẽ chuẩn bị cho các bé hành trang trở thành công dân toàn cầu bằng cách nuôi dưỡng sự tự tin, lòng dũng cảm, nhân ái và lạc quan. Sau những năm học tại trường, các bé có kỹ năng tiếng Việt thành thạo và khả năng Tiếng Anh giao tiếp linh hoạt, tự tin tham gia vào mọi loại hình trường trong hệ thống giáo dục Việt Nam cũng như Quốc tế.</p>
                                                            <p>Cùng tâm niệm và khát khao được “<strong><em>truyền cảm hứng cho trẻ thơ một niềm đam mê học tập</em></strong>”, cũng như khơi dậy&nbsp;<strong><em>tối đa tiềm năng của các bé</em></strong>, đội ngũ chuyên gia, tư vấn cùng tập thể giáo viên, cán bộ nhân viên của trường luôn nghiên cứu, tìm tòi, phát triển và đổi mới phương pháp, nâng cao chất lượng chăm sóc – nuôi dưỡng – giáo dục tiệm cận chuẩn quốc tế để không phụ lòng tin yêu mà Quý phụ huynh đã gửi gắm.</p>
                                                            <p>Thay mặt nhà trường, trân trọng cảm ơn Quý phụ huynh đã dành sự quan tâm và lựa chọn STEAMe GARTEN.</p>
                                                            <p><strong>Lãnh đạo Hệ thống trường mầm non STEAMe GARTEN</strong></p>
                                                        </div>
                                                </div>

                                                
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                               <!--  GIỚI THIỆU -->
                            </div>
                        </div>
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