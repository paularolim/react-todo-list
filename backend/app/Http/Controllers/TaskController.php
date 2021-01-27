<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Client\Request;

class TaskController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->class = Task::class;
    }

    public function index() {
        $tasks = Task::with('group')->get();
        return response()->json($tasks);
    }
}
