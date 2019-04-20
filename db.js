import mysql from "mysql"; 
import dotenv from "dotenv"; 

dotenv.config(); 

const connection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, 
    database: process.env.DB_DATABASE
}); 

const handleConnect = () => {
    console.log("✅  Connected to DB");
}

connection.connect(err => {
    if (err) {
        console.log(err.stack); 
    } else {
        handleConnect();
    }
}); 

