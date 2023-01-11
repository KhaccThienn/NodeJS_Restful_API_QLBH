const productController = require('../controllers/productController');

const product_route = (app) => {
    app.get('/product', productController.index);
    app.get('/product/:id', productController.show);

    app.post('/product', productController.create);

    app.get('/product/:id/edit', productController.edit);
    app.put('/product/:id', productController.update);

    app.delete('/product/:id', productController.delete);

};

module.exports = product_route;