const conn = require('../database/connect');

const product = {
    getAll: (callback) => {
        const sql = "SELECT sp.*, dm.ten_danh_muc AS Category FROM san_pham sp JOIN danh_muc dm ON sp.ma_danh_muc = dm.id";
        conn.query(sql, (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },
    getByID: (id, callback) => {
        const sql = "SELECT sp.*, dm.ten_danh_muc AS Category FROM san_pham sp JOIN danh_muc dm ON sp.ma_danh_muc = dm.id WHERE sp.id = ?";
        conn.query(sql, id, (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },
    create: (newProduct, file_name, callback) => {
        const sql = "INSERT INTO san_pham SET ten_sp = ?, anh_sp = ?, gia_sp = ?, gia_km = ?, ma_danh_muc = ?";
        console.log(newProduct, file_name);

        conn.query(sql, [newProduct.ten_sp, file_name, newProduct.gia_sp, newProduct.gia_km, newProduct.ma_danh_muc], (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },
    update: (id, Product, file_name, callback) => {
        const sql = "UPDATE san_pham SET ten_sp = ?, anh_sp = ?, gia_sp = ?, gia_km = ?, ma_danh_muc = ? WHERE id = ?";
        console.log(Product, file_name);

        conn.query(sql, [Product.ten_sp, file_name, Product.gia_sp, Product.gia_km, Product.ma_danh_muc, id], (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    },
    delete: (id, callback) => {
        const sql = "DELETE FROM san_pham WHERE id = ?";
        conn.query(sql, [id], (err, data) => {
            if (err) {
                console.log("Error: " + err);
                callback(err, null);
            } else {
                console.log("Data: " + data);
                callback(null, data);
            }
        });
    }
};

module.exports = product;