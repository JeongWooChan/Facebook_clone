import routes from "../routes"; 

// Main 페이지 
export const getMain = (req, res) => {
    if(req.user){
        res.render("main", { pageTitle: "FaceBook" });     
    } else {
        res.redirect(routes.home);
    }
}
export const postMain = (req, res) => {

}
