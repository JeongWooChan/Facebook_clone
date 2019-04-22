import express from "express"; 
import helmet from "helmet";
import bodyParser from "body-parser"; 
import routes from "./routes"; 
import globalRouter from "./routers/globalRouter"; 
import { localMiddleware } from "./middleware";
import connection from "./db"; 


const app = express(); 

app.set("view engine", "pug"); 

app.use(helmet()); // express 보안을 위한 미들웨어 
app.use("/static", express.static("static")); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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