import express from "express"; 
import helmet from "helmet";
import bodyParser from "body-parser"; 
import routes from "./routes"; 
import globalRouter from "./routers/globalRouter"; 

const app = express(); 

app.set("view engine", "pug"); 

app.use(helmet()); // express 보안을 위한 미들웨어 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes.home, globalRouter); 

export default app; 