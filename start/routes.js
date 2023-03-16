"use strict";
const CupcakesModel = use("App/Models/Cupcake");
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.on("/").render("welcome");

Route.get("/productos", "productoController.getAllProducts");

Route.get("/cupcakes-data-onwire", async () => {
  return await CupcakesModel.all();
});

Route.get("/cupcakes-html-onwire", async ({ view }) => {
  const cupcakes = (await CupcakesModel.all()).toJSON();
  return view.render("cupcakes", { cupcakes });
});
