<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lists extends Model
{

    public $timestamps = false;

    protected $fillable = [
        'description', 'backgroundColor', 'fontColor'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function group()
    {
        return $this->hasMany(Group::class);
    }
}
