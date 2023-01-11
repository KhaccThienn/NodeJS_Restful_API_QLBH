const categoryController = require('../controllers/categoryController');

const category_route = (app) => {
    app.get('/category', categoryController.index);
    app.get('/category/:id', categoryController.show);
    app.post('/category', categoryController.create);

    app.get('/category/:id/edit', categoryController.edit);
    app.put('/category/:id', categoryController.update);
    
    app.delete('/category/:id', categoryController.delete);

};

module.exports = category_route;