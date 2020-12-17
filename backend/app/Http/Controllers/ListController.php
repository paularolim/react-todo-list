<?php

namespace App\Http\Controllers;

use App\Models\Lists;

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
}
