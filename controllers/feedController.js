import routes from "../routes"; 

export const joinSuccess = (req, res) => {
    res.redirect(routes.main);
}

export const main = (req, res) => {
    console.log(req);
    res.render("main", { pageTitle : "FaceBook" }); 
}