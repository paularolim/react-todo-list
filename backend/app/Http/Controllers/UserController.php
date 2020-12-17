<?php

namespace App\Http\Controllers;

use App\Models\User;

class UserController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->class = User::class;
    }
}
