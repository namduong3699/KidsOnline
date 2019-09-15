<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = "news";
    // puclic function users_kid(){
    // 	return $this->belongTo('App\Users','idAuthor','idUser');
    // }

    // puclic function cate_news(){
    // 	return $this->belongTo('App\cate_news','idCate','idNews');
    // }
    
}
