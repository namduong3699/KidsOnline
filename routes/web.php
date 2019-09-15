<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('giao-vien', function () {
    return view('user-teacher.home');

});

Route::get('diem-danh', function () {
    return view('user-teacher.diem-danh');
});

//phụ huynh
Route::get('phu-huynh', function () {
    return view('user-student.main');
});

Route::get('xin-nghi', function () {
    return view('user-student.xin-nghi');
});

Route::get('loi-nhan', function () {
    return view('user-student.loi-nhan');
});

Route::get('profileGU', function () {
    return view('user-student.profileGU');
});


Route::get('hoat-dong-cua-be', function () {
    return view('user-student.hoat-dong-cua-be');
});

Route::get('anh-cua-be', function () {
    return view('user-student.anh-cua-be');
});

Route::get('dan-thuoc', function () {
    return view('user-student.dan-thuoc');
});

Route::get('bai-viet', function () {
    return view('user-student.bai-viet');
});


// Route::get('1', function () {
//     return view('user-guest.thuguest');
// });




// lam moi

// giao vien
// Route::group(['prefix'=>'giao-vien'],function){
//     Route::get('/don', function () {
//         return view('user-teacher/don');

//     });

// });



// guest
Route::get('/', function () {
    return view('user-guest.home');
});

Route::get('tin-tuc', function () {
    return view('user-guest.tin-tuc');
});
Route::get('post', function () {
    return view('user-guest.postview');
});



use App\cate_news;
use App\News;

Route::get('thu', function () {
    $news = news::where('idNews' ,1);
    dd($news->title);
});