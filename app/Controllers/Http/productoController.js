const productModel = use("App/Models/Producto");

class ProductoController {
  async getAllProducts() {
    return await productModel.all();
  }
}

module.exports = ProductoController;
