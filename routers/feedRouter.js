import express from "express"; 
import routes from "../routes";
import { getMain, getPerson, getPersonInfo, postUpload, editFeed, deleteFeed } from "../controllers/feedController";
import { uploadFeed } from "../middleware";

const feedRouter = express.Router(); 

feedRouter.get(routes.home, getMain);

feedRouter.get(routes.person(), getPerson); 

feedRouter.get(routes.personInfo(), getPersonInfo);

// Upload
feedRouter.post(routes.upload, uploadFeed, postUpload); 
// EditFeed 
feedRouter.post(routes.editFeed(), uploadFeed, editFeed);
// DeleteFeed 
feedRouter.post(routes.deleteFeed(), uploadFeed, deleteFeed);

export default feedRouter;