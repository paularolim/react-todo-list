<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Lists;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ListController extends BaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->class = Lists::class;
    }

    public function store(Request $request)
    {
        var_dump($request);
    }

    public function groupsFromList($id_list)
    {
        $groups = DB::table('groups')->where('list_id', '=', $id_list)->get();
        
        return response()->json($groups, 200);
    }
}
