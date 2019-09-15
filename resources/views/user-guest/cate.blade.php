<!DOCTYPE html>
<html lang="en">
@extends('user-guest.main')
@section('page')
Kidonline title chuyên mục
@endsection
@section('content')
	<div id="breadcrumbs" class="mb15">
	    <div class="container">
	        <h1 class="page-title ">Tuyển dụng</h1>
	    </div>
	</div>
	<div id="main" class="mb-30">
	    <div class="container">
	        <div class="row">
	            <!-- bài viết-->
	            <div class="col-md-8">
	            	<!-- khối bài viết -->
	                <div class="archive-content ">
	                    <div class="entry" itemscope="" itemtype="http://schema.org/Article">
	                        <div class="col-sm-4">
	                            <a class="thumbnail" href="url bài viết bdkid"> <img width="450" height="267" src="media/login-bg.jpg" class="" itemprop="image" onerror="" data-was-processed="true"> </a>
	                        </div>
	                        <div class="col-sm-8">
	                            <a href="url bài viết bdkid " itemprop="mainEntityOfPage"><h3 class="entry-title" itemprop="name">title bài viết dbkid</h3> </a>
	                            <div class="entry-meta"> <i class="fa fa-calendar"></i><span itemprop="datePublished">dbkid thời gian đăng bài</span></div>
	                            <div class="description">
	                                <p>description dbkid <a href="url bài viết bdkid" class="more-link">Xem thêm <span class="meta-nav"></span></a></p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	               <!-- end khối bài viết -->
	               <!-- khối bài viết -->
	                <div class="archive-content ">
	                    <div class="entry" itemscope="" itemtype="http://schema.org/Article">
	                        <div class="col-sm-4">
	                            <a class="thumbnail" href="url bài viết bdkid"> <img width="450" height="267" src="media/login-bg.jpg" class="" itemprop="image" onerror="" data-was-processed="true"> </a>
	                        </div>
	                        <div class="col-sm-8">
	                            <a href="url bài viết bdkid " itemprop="mainEntityOfPage"><h3 class="entry-title" itemprop="name">title bài viết dbkid</h3> </a>
	                            <div class="entry-meta"> <i class="fa fa-calendar"></i><span itemprop="datePublished">dbkid thời gian đăng bài</span></div>
	                            <div class="description">
	                                <p>description dbkid <a href="url bài viết bdkid" class="more-link">Xem thêm <span class="meta-nav"></span></a></p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	               <!-- end khối bài viết -->
	                <div class="paging">
	                    <div class="wp-pagenavi" role="navigation"> <span class="pages">Trang 1 trên 2</span><span aria-current="page" class="current">1</span><a class="page larger" title="Page 2" href="url dbkid /tuyen-dung/page/2">2</a><a class="nextpostslink" rel="next" href="url dbkid /tuyen-dung/page/2">»</a></div>
	                </div>
	            </div>
	            <!-- sidebar-->
	            @include('user-guest.modules.sidebar')
	        </div>
	    </div>
	</div>
@endsection