const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'wjddncks!', 
    database : 'facebook'
});
// db.connect();
module.exports = db;