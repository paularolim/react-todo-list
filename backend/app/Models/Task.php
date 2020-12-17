<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

    public $timestamps = false;

    protected $fillable = [
        'description', 'status'
    ];

    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
