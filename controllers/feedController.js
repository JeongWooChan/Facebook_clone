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

// 개인 피드 페이지 
export const getPerson = (req, res) => {
    res.render("person", { pageTitle: req.user.username })
}

// 개인 정보 페이지 
export const getPersonInfo = (Req, res) => {
    res.send("111"); 
}