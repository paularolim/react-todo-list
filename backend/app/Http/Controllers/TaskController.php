<?php

namespace App\Http\Controllers;

use App\Models\Task;

class TaskController extends BaseController
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
}
