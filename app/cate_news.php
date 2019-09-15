<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cate_news extends Model
{
    //
    protected $table = "cate_news";
    public function news()
    {
    	return $this->hasMany('App\news','idCate','idCate');
    }


}
