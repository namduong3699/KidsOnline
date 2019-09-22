<?php

namespace App\Http\Controllers;

use App\User;
use App\BodyState;
use App\CateNews;
// use App\Class;
use App\Evaluate;
use App\EvaluateSemester;
use App\Menu;
use App\MessTb;
use App\MessToUser;
use App\News;
use App\NoteDrug;
use App\NoteDrugDetail;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
Use \Carbon\Carbon;

class TeacherController extends Controller {
	public function index() {
		$date = Carbon::now()->subDays(1);
		// dd($date);

		$drugs = DB::table('users')
            ->join('note_drug', 'users.id', '=', 'note_drug.idUser')
            ->join('note_drug_detail', 'note_drug.id', '=', 'note_drug_detail.idNote')->where([
            	['note_drug.created_at', '>', Carbon::now()->subDays(1)]
            ])->get();
        // $_news = News::orderBy('created_at', 'desc');
       	$news = News::join('users', 'news.idAuthor', '=', 'users.id')->limit(4)->get();
       	// dd($news);
       	return view('user/home', ['drugs' => $drugs, 'news' => $news]);
	}
}






?>