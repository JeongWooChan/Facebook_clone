import express from "express"; 
import bodyParser from "body-parser"; 
import cookieParser from "cookie-parser"; 
import dotenv from "dotenv";
import session from "express-session"; 
import passport from "passport"; 
import helmet from "helmet";
import routes from "./routes"; 
import { localMiddleware } from "./middleware";
import connection from "./db"; 
import globalRouter from "./routers/globalRouter"; 
import apiRouter from "./routers/apiRouter";
import "./passport";

const app = express(); 
dotenv.config();

// 템플릿 엔진을 pug로 설정 
app.set("view engine", "pug"); 

app.use(helmet()); // express 보안을 위한 미들웨어 
app.use("/static", express.static("static")); 
app.use(cookieParser()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use (
    session({
        secret: process.env.COOKIE_SECRET, 
        resave: false, 
        saveUninitialized: false
    })
);
app.use(passport.initialize()); 
app.use(passport.session()); 

app.use(localMiddleware);
app.use(routes.home, globalRouter); 
app.use(routes.api, apiRouter);

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