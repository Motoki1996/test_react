<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', LoginController::class)->name('login'); 
Route::post('/logout', LogoutController::class)->name('logout'); 

Route::middleware('auth:sanctum')->group(function () {
    //認証を必要とする機能を記載
    // Route::apiResource('tasks', 'App\Http\Controllers\TaskController');
    // Route::patch('tasks/update-done/{task}', 'App\Http\Controllers\TaskController@updateDone');
    Route::get('user', function (Request $request) {
        return $request->user();
    });
});
