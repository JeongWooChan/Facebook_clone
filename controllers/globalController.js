import routes from "../routes"; 
import pbkdf2 from "pbkdf2-password"; 
import passport from "passport"; 
import connection from "../db";

export const home = (req, res) => {
    res.render("login", { pageTitle: "Facebook - 로그인 또는 가입" }); 
    console.log(req.user);
}


// 회원가입 controller
export const getJoin = (req, res) => {
    // 회원가입 화면은 home에 있기때문에 url을 통해 join으로 들어오면 home으로 되돌려 보낸다. 
    res.redirect(routes.home);
}
export const postJoin = (req, res, next) => {
    // 회원가입 form으로 부터 받아온 request 정보 
    const {
        body: { 
            signUp_fname, 
            signUp_lname, 
            signUp_email, 
            signUp_pw, 
            select_year, 
            select_month, 
            select_day, 
            chk_gender }
    } = req; 

    // db에 insert할 변수와 값을 지정해줌 
    let $username = signUp_fname + signUp_lname; //성과 이름을 한번에 넣어줌 
    let $email = signUp_email; 
    let $birthday = select_year + "-" + select_month + "-" + select_day; 
    let $gender = chk_gender; 

    // 혹시나 비어 있는 값이 있는 상태에서 postJoin으로 들어오면 다시 home으로 돌려보냄 
    // 이러한 유효성 검사는 프런트에서 처리하기 때문에 사실상 필요는 없음 
    if(signUp_fname == "" || signUp_lname == "" || signUp_email == "" || signUp_pw == "" || select_year =="" || select_month =="" || select_day == "" || chk_gender == "") {
        res.redirect(routes.home);
    } else {
        const hasher = pbkdf2(); 
        // pbkdf2의 hasher 함수를 통해 비밀번호를 암호화 한다. 
        hasher( { password: signUp_pw }, function (err, pass, salt, hash) {
            let $sql = "INSERT INTO users SET ?"; 
            let $set = {
                username: $username, 
                password: signUp_pw, // 비밀번호에는 hasher함수의 salt값을 통해 암호화 된 값인 hash 값을 넣어준다. 
                email: $email, 
                birthday: $birthday, 
                gender: $gender, 
                salt: salt // 로그인을 할 때 hash값 비교를 위해서 키 역할을 하는 salt값이 있어야 한다. 
            }
            let $query = connection.query($sql, $set, (err, result) => {
                if(err) {
                    console.log("❌  ERROR : " + err); 
                } else {
                    res.send("signUp Success"); 
                }
            });
        });
    }
}


// 로그인 Controller 
export const getLogin = (req, res) => {

}
export const postLogin = passport.authenticate("local", {
    successRedirect: routes.main, 
    failureRedirect: routes.home
})