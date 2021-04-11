<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Home\BlogController;

Route::name('blog.')->prefix('/blog')->group(function (){
    Route::get('/index', [BlogController::class, 'index'])->name('index');
});
