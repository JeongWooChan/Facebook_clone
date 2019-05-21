import multer from "multer"; 
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes"; 
import dotenv from "dotenv";

dotenv.config();

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
    region: "us-east-2"
});

const multerAvatar = multer({
    storage: multerS3({
        s3, 
        acl: 'public-read', 
        bucket: 'woochan-facebook/avatar'
    })
});

const multerFeed = multer({
    storage: multerS3({
        s3, 
        acl: 'public-read', 
        bucket: 'woochan-facebook/feeds'
    })
});

// const multerFeed = multer({dest: "uploads/feeds/"}); 

export const localMiddleware = (req, res, next) => {
    res.locals.routes = routes; 
    res.locals.user = req.user || null;
    next();
}

export const uploadAvatar = multerAvatar.single('avatar');
export const uploadFeed = multerFeed.single('feed');