<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {

    $router->group(['prefix' => 'users'], function () use ($router) {
        $router->get('', 'UserController@index');
        $router->get('{id}', 'UserController@show');

        $router->post('', 'UserController@store');
        $router->put('{id}', 'UserController@update');
        $router->delete('{id}', 'UserController@destroy');
    });

    $router->group(['prefix' => 'lists'], function () use ($router) {
        $router->get('', 'ListController@index');
        $router->get('{id}', 'ListController@show');

        $router->post('', 'ListController@store');
        $router->put('{id}', 'ListController@update');
        $router->delete('{id}', 'ListController@destroy');
    });

    $router->group(['prefix' => 'groups'], function () use ($router) {
        $router->get('', 'GroupController@index');
        $router->get('{id}', 'GroupController@show');

        $router->post('', 'GroupController@store');
        $router->put('{id}', 'GroupController@update');
        $router->delete('{id}', 'GroupController@destroy');
    });

    $router->group(['prefix' => 'tasks'], function () use ($router) {
        $router->get('', 'TaskController@index');
        $router->get('{id}', 'TaskController@show');
        $router->post('', 'TaskController@store');
        $router->put('{id}', 'TaskController@update');
        $router->delete('{id}', 'TaskController@destroy');
    });
});
