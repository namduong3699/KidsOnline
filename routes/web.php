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



// Route::get('login', function(){
// 	return view('user/login');
// });

Route::Get('/', 'LoginController@postLogin');

Route::Get('/home', 'LoginController@auth');

/*
* Login
*/
Route::get('/login', 'LoginController@getLogin')->name('login');
Route::post('/login', 'LoginController@postLogin')->name('login');

Route::get('/auth/facebook', "SocialAuthController@redirectFB");
Route::get('/auth/facebook/callback', "SocialAuthController@callbackFB");

Route::get('/auth/google', "SocialAuthController@redirectGG");
Route::get('/auth/google/callback', "SocialAuthController@callbackGG");

/*
* Logout
*/
Route::post('/logout', function(){
	Auth::logout();
	return redirect('/');
})->name('logout');

Route::get('/logout',function(){
	Auth::logout();
	return redirect()->back();
});

Route::get('public/teacher/application/drug/{id}', 'TeacherController@appliDrug');
Route::get('public/teacher/application/drug/confirm/{id}', 'TeacherController@appliDrugConfirm');
Route::post('public/teacher/application/drug/confirm/', 'TeacherController@appliDrugConfirmPost');

Route::group(['prefix'=>'teacher','middleware'=>'teacherLogin'],function(){
	Route::get('/', 'TeacherController@index');

	Route::get('home', function () {
		return view('user/home');
	});

Route::get('application', 'TeacherController@appli');
Route::get('application/drug/{id}', 'TeacherController@appliDrug');
Route::post('application/drug/', 'TeacherController@appliDrug');
Route::get('application/drug/confirm/{id}', 'TeacherController@appliDrugConfirm');
Route::post('application/drug/confirm/', 'TeacherController@appliDrugConfirmPost');

	Route::get('post', function(){
		return view('user/main');
	});

	Route::get('attendance', function(){
		return view('user/attendance');
	});
	Route::get('learn-activity', function(){
		return view('user/learn-activity');
	});
	Route::get('dining', function(){
		return view('user/dining');
	});
	Route::get('sleep', function(){
		return view('user/sleep');
	});
	Route::get('hygienic', function(){
		return view('user/hygienic');
	});
	Route::get('assessment', function(){
		return view('user/assessment');
	});
	Route::get('survey', function(){
		return view('user/survey');
	});
	Route::get('student-messages', function(){
		return view('user/student-messages');
	});
	Route::get('list-student', function(){
		return view('user/list-student');
	});
	
});