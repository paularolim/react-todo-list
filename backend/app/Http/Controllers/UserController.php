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

    public function listsFromUser($id_user)
    {
        $lists = User::with('lists')->find($id_user);

        return response()->json($lists, 200);
    }
}
