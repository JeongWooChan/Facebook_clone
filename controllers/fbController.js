export const home = (req, res) => {
    res.render("login", { pageTitle: "Facebook - 로그인 또는 가입" }); 
}

export const join = (req, res) => {
    const {
        body 
    } = req; 
    console.log(body);
    res.send(body);
}