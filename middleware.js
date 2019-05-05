import multer from "multer"; 
import routes from "./routes"; 

const multerAvatar = multer({dest: "uploads/avatars/"});

export const localMiddleware = (req, res, next) => {
    res.locals.routes = routes; 
    res.locals.user = req.user || null;
    next();
}

export const uploadAvatar = multerAvatar.single('avatar');