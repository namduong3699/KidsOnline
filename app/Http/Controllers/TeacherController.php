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
use Illuminate\Http\Request;

class TeacherController extends Controller {
	public function index() {
		$currentDate = Carbon::now()->format('Y-m-d');
		// dd($date);

		$drugs = DB::table('users')
            ->join('note_drug', 'users.id', '=', 'note_drug.idUser')
            ->where([['note_drug.created_at', 'like', $currentDate.'%']])
            ->get();
       	$news = News::join('users', 'news.idAuthor', '=', 'users.id')
	       	->limit(4)
	       	->get();

       	return view('user/home', ['drugs' => $drugs, 'news' => $news]);
	}

	public function appli() {
		$currentDate = Carbon::now()->format('Y-m-d');
		$drugs = DB::table('users')
            ->join('note_drug', 'users.id', '=', 'note_drug.idUser')
            ->where([['note_drug.created_at', 'like', $currentDate.'%']])
            ->get();
        foreach ($drugs as $drug) {
        	// $drugDetail = NoteDrugDetail::where('idNote', '=', $drug->id)->get();
        	$drugDetail = DB::table('note_drug_detail')->where('idNote', '=', $drug->id)->get();
        	$drug->detail = $drugDetail;
 
        }
        // dd($drugs);

		return view('user/don', ['drugs' => $drugs, 'currentDate' => $currentDate]);
	}

	public function appliDrug($id){
		$currentDate = Carbon::now()->format('Y-m-d');
		$drugs = DB::table('users')
            ->join('note_drug', 'users.id', '=', 'note_drug.idUser')
            ->where('note_drug.id', '=', $id)
            ->get();
        foreach ($drugs as $drug) {
        	// $drugDetail = NoteDrugDetail::where('idNote', '=', $drug->id)->get();
        	$drugDetail = DB::table('note_drug_detail')->where('idNote', '=', $drug->id)->get();
        	$drug->detail = $drugDetail;
 
        }
        // dd($drugs);

		return ['drugs' => $drugs];
	}

	public function appliDrugConfirm($id){
		DB::table('note_drug')
            ->where('id', $id)
            ->update(['status' => 1]);
        return redirect()->back();
	}

	public function appliDrugConfirmPost(Request $req){
		DB::table('note_drug')
            ->where('id', $req->id)
            ->update(['status' => 1]);
        return redirect()->back();
	}
}






?>