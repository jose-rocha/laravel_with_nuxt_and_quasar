<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Funcionarios extends Model
{
    use HasFactory;

    protected $fillable = [
            'name',
            'email',
            'profession'
    ];

    function getFuncionarios()
    {
        $db = DB::table('funcionarios');

        return $db->orderBy('id', 'desc')->get();
    }
}
