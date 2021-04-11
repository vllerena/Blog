<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Livewire\Auth\Login;
use Illuminate\Support\Facades\Route;

Route::get('/login', Login::class)->name('login');
Route::post('/login', [AuthenticatedSessionController::class, 'login'])->name('login');
Route::post('/logout', [AuthenticatedSessionController::class, 'logout'])->middleware('auth')->name('logout');
