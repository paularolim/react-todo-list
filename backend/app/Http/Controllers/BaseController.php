<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class BaseController
{
    protected string $class;

    // Return all with paginate
    public function index(Request $request)
    {
        return $this->class::paginate($request->per_page);
    }

    // Create new
    public function store(Request $request)
    {
        return response()->json($this->class::create($request->all()), 201);
    }

    // Search an id
    public function show(int $id)
    {
        $serie = $this->class::find($id);

        if (!$serie) return response()->json('', 204);

        return response()->json($serie, 200);
    }

    // Update
    public function update(int $id, Request $request)
    {
        $serie = $this->class::find($id);

        if (is_null($serie)) return response()->json(['message' => 'Recurso não encontrado'], 404);

        $serie->fill($request->all());
        $serie->save();

        return $serie;
    }

    // Delete
    public function destroy(int $id){
        $removed = $this->class::destroy($id);

        if($removed === 0) return response()->json(['mensagem' => 'Recurso não encontrado'], 404);
        
        return response()->json(['message' => 'Recurso removido'], 200);
    }
}
