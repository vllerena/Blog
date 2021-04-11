<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('home.blog.index');
})->name('index');

Route::prefix('/admin')->name('admin.')->group(base_path('routes/admin/routes.php'));
Route::prefix('/home')->name('home.')->group(base_path('routes/home/routes.php'));
Route::prefix('/auth')->name('auth.')->group(base_path('routes/auth/routes.php'));
Route::prefix('/autor')->name('autor.')->group(base_path('routes/autor/routes.php'));

