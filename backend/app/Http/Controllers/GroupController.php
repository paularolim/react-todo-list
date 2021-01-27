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

    public function tasksFromList($id_list)
    {
        $result = Group::with('task')->where('list_id', '=', $id_list)->get();

        return response()->json($result);
    }
}
