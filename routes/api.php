<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\StaffController;
use App\Http\Controllers\GetStaff;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', [TestController::class, 'index']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->prefix('/admin')->group(function () {
    Route::prefix('/staff')->group(function () {
        Route::get('/index', [StaffController::class, 'index'])->name('admin.staff.index');
        Route::get('/show/{staff}', [StaffController::class, 'show'])->name('admin.staff.show');
        Route::post('/store', [StaffController::class, 'store'])->name('admin.staff.store');
        Route::post('/update/{staff}', [StaffController::class, 'update'])->name('admin.staff.update');
        Route::post('/delete', [StaffController::class, 'destroy'])->name('admin.staff.destroy');
    });
});
Route::get('staff/index', GetStaff::class)->name('staff.index');
