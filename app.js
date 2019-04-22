import express from "express"; 
import bodyParser from "body-parser"; 
import dotenv from "dotenv";
import helmet from "helmet";
import session from "express-session"; 
import routes from "./routes"; 
import globalRouter from "./routers/globalRouter"; 
import { localMiddleware } from "./middleware";
import connection from "./db"; 

const app = express(); 
const MySQLStore = require("express-mysql-session")(session); 
dotenv.config();

app.set("view engine", "pug"); 

app.use(helmet()); // express 보안을 위한 미들웨어 
app.use("/static", express.static("static")); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SECRET, 
    resave: false, 
    saveUninitialized: false, 
    store: new MySQLStore({}, connection)
}));

app.use(localMiddleware);
app.use(routes.home, globalRouter); 

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

export default app; 