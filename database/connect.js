const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quan_ly_ban_hang"
});

conn.connect((err) => {
    if (err) {
        throw err;
    }

    console.log(`Connect to database success on port: ${conn.threadId}`);
});

module.exports = conn;
