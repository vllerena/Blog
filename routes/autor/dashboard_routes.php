<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Autor\DashboardController;

Route::name('dashboard.')->prefix('/dashboard')->middleware(['auth', 'autor'])->group(function (){
    Route::get('/index', [DashboardController::class, 'index'])->name('index');
});

