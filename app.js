import express from "express"; 
import bodyParser from "body-parser"; 
import dotenv from "dotenv";
import helmet from "helmet";
import routes from "./routes"; 
import { localMiddleware } from "./middleware";
import connection from "./db"; 
import globalRouter from "./routers/globalRouter"; 
import apiRouter from "./routers/apiRouter";

const app = express(); 
dotenv.config();

app.set("view engine", "pug"); 

app.use(helmet()); // express 보안을 위한 미들웨어 
app.use("/static", express.static("static")); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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