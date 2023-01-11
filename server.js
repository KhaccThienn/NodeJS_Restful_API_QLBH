const express = require('express');
const bodyParser = require('body-parser');
const category_route = require('./routes/category.route');
const product_route = require('./routes/product.route');
const app = express();

const port = 3636 || process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

category_route(app);
product_route(app);

app.listen(port, () => {
    console.log(`API Server is running on: http://localhost:${port}`);
});