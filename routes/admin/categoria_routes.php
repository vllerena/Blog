<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CategoriaController;

Route::name('categoria.')->prefix('/categoria')->middleware(['auth'])->group(function (){
    Route::get('/index', [CategoriaController::class, 'index'])->name('index');
    Route::get('/create', [CategoriaController::class, 'create'])->name('create');
    Route::post('/store', [CategoriaController::class, 'store'])->name('store');
    Route::get('/edit/{categoria}', [CategoriaController::class, 'edit'])->name('edit');
    Route::put('/update/{categoria}', [CategoriaController::class, 'update'])->name('update');
    Route::delete('/destroy/{categoria}', [CategoriaController::class, 'destroy'])->name('destroy');
});
