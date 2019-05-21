import multer from "multer"; 
import routes from "./routes"; 

const multerAvatar = multer({dest: "uploads/avatars/"});
const multerFeed = multer({dest: "uploads/feeds/"}); 

export const localMiddleware = (req, res, next) => {
    res.locals.routes = routes; 
    res.locals.user = req.user || null;
    next();
}

export const uploadAvatar = multerAvatar.single('avatar');
export const uploadFeed = multerFeed.single('feed');