<?php

use App\Http\Controllers\navController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('home');
// });
// Route::get('/navbar', function () {
//     return view('components.nav');
// });
Route::get('/', [navController::class, 'index'])->name('home');
Route::get('/about', [navController::class, 'about'])->name('about');
