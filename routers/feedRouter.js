import express from "express"; 
import routes from "../routes";
import { getMain, getPerson, getPersonInfo, postUpload } from "../controllers/feedController";
import { uploadFeed } from "../middleware";

const feedRouter = express.Router(); 

feedRouter.get(routes.home, getMain);

feedRouter.get(routes.person(), getPerson); 

feedRouter.get(routes.personInfo(), getPersonInfo);

// Upload
feedRouter.post(routes.upload, uploadFeed, postUpload); 

export default feedRouter;