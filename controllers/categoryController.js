const category = require('../models/category');

const categoryController = {
    index: (req, res) => {
        category.getAll((err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        });
    },

    create: (req, res) => {
        if (!req.body.ten_danh_muc) {
            res.status(400).send({ error: true, message: "Please Provide name" });
        } else {
            category.create(req.body, (err, data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json(data);
                }
            });
        };
    },

    show: (req, res) => {
        category.getByID(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    },
    edit: (req, res) => {
        category.getByID(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    },



    update: (req, res) => {
        category.update(req.params.id, req.body, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    },

    delete: (req, res) => {
        category.delete(req.params.id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                console.log(data);
                res.json(data);
            }
        });
    }
}

module.exports = categoryController;