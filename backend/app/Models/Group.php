<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{

    public $timestamps = false;

    protected $fillable = [
        'description', 'backgroundColor', 'fontColor'
    ];

    public function lists()
    {
        return $this->belongsTo(Lists::class);
    }

    public function task()
    {
        return $this->hasMany(Task::class);
    }
}
