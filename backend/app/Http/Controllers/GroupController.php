<?php

namespace App\Http\Controllers;

use App\Models\Group;

class GroupController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->class = Group::class;
    }
}
