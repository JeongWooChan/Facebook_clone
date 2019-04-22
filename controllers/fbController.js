import routes from "../routes"; 
import pbkdf2 from "pbkdf2-password"; 
import connection from "../db";

const hasher = pbkdf2(); 

export const home = (req, res) => {
    res.render("login", { pageTitle: "Facebook - 로그인 또는 가입" }); 
}

export const join = (req, res, next) => {
    const {
        body: {
            signUp_fname, 
            signUp_lname, 
            signUp_email, 
            signUp_pw, 
            select_year, 
            select_month, 
            select_day, 
            chk_gender}
    } = req; 

    let $username = signUp_fname + signUp_lname; 
    let $email = signUp_email; 
    let $password = signUp_pw;
    let $birthday = select_year + "-" + select_month + "-" + select_day; 
    let $gender = chk_gender;
    
    if(signUp_fname == "" || signUp_lname == "" || signUp_email == "" || signUp_pw == "" || select_year =="" || select_month =="" || select_day == "" || chk_gender == "") {
        res.redirect(routes.home);
    } else {
        hasher( {password: signUp_pw }, function (err, pass, salt, hash) {
            let $sql = "INSERT INTO users SET ?";
            // password에는 암호화가 된 hash 값을 넣고, 키 역할을 해주는 salt를 같이 insert 해준다.  
            let $set = {
                username: $username, 
                password: hash, 
                email: $email,
                birthday: $birthday, 
                gender: $gender,
                salt: salt
            }
            // 회원가입 정보 insert 
            let $query = connection.query($sql, $set, (err, result) => {
                if(err) {
                    console.log("❌  Error :" + err); 
                } else {
                    req.session.username = $username;
                    res.send("success"); 
                }
            })
        })
    }
}