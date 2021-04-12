<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\PostController;

Route::name('post.')->prefix('/post')->middleware(['auth'])->group(function (){
    Route::get('/index', [PostController::class, 'index'])->name('index');
    Route::get('/create', [PostController::class, 'create'])->name('create');
    Route::post('/store', [PostController::class, 'store'])->name('store');
    Route::get('/edit/{post}', [PostController::class, 'edit'])->name('edit');
    Route::put('/update/{post}', [PostController::class, 'update'])->name('update');
    Route::delete('/destroy/{post}', [PostController::class, 'destroy'])->name('destroy');
});
