<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Funcionarios;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/teste', function() {
    return ['nome' => 'José', 'idade' => 30];
});

Route::get('users_bd', function(Request $request) {
    $user = new User();

    return $user->getData();
});

Route::get('users_funcionarios', function (Request $request) {
    $funcionarios = new Funcionarios();

    return $funcionarios->getFuncionarios();
});
