const product = require('../models/product');
const multer = require('multer');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        let math = ["image/png", "image/jpeg"];
        if (math.indexOf(file.mimetype) === -1) {
            let errorMess = `File <strong>${file.originalname}</strong> is invalid.`;
            return callback(errorMess, null);
        }
        let filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    }
})

const upload = multer({ storage: diskStorage }).single('anh_sp');

const productController = {
    index: (req, res) => {
        product.getAll((err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        });
    },

    show: (req, res) => {
        product.getByID(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        });
    },

    create: (req, res) => {
        upload(req, res, (error) => {

            if (error) {
                return res.send(`Have err when upload file to server: ${error}`);
            }

            console.log(`------Request body-----`);
            console.log(req.body);

            console.log(`------Request file-----`);
            console.log("File name: " + req.file.filename);

            console.log(`------Test Done-----`);

            product.create(req.body, req.file.filename, (err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json(data);
                }
            });
        });
    },

    edit: (req, res) => {
        product.getByID(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    },

    update: (req, res) => {
        product.getByID(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                upload(req, res, (error) => {

                    if (error) {
                        return res.send(`Have err when upload file to server: ${error}`);
                    }

                    if (req.file != null) {
                        var file_name = req.file.filename;
                    } else {
                        var file_name = data[0].anh_sp;
                    }

                    product.update(req.params.id, req.body, file_name, (err, data) => {
                        if (err) {
                            res.send(err);
                        } else {
                            res.json(data);
                        }
                    });
                });
            }
        });
    },

    delete: (req, res) => {
        product.delete(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    }
};

module.exports = productController;
