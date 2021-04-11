<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TagController;

Route::name('tag.')->prefix('/tag')->middleware(['auth'])->group(function (){
    Route::get('/index', [TagController::class, 'index'])->name('index');
    Route::get('/create', [TagController::class, 'create'])->name('create');
    Route::post('/store', [TagController::class, 'store'])->name('store');
    Route::get('/edit/{tag}', [TagController::class, 'edit'])->name('edit');
    Route::put('/update/{tag}', [TagController::class, 'update'])->name('update');
    Route::delete('/destroy/{tag}', [TagController::class, 'destroy'])->name('destroy');
});
