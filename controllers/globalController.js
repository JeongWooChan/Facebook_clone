import routes from "../routes"; 
import pbkdf2 from "pbkdf2-password"; 
import passport from "passport"; 
import connection from "../db";

export const home = (req, res) => {
    if(req.user) {
        res.redirect(routes.main); 
    } else {
        res.render("login", { pageTitle: "Facebook - 로그인 또는 가입" }); 
    }
}


// 회원가입 controller
export const getJoin = (req, res) => {
   if(req.user) {
       res.redirect(routes.main);
   } else {
       res.render("join", { pageTitle: "회원가입" });
   }
}
export const postJoin = (req, res, next) => {
    // 회원가입 form으로 부터 받아온 request 정보 
    const {
        body: { 
            signUp_fname, 
            signUp_lname, 
            // email과 pw의 name 값이 login_ 으로 되어 있는 이유는 
            // 회원가입 후 성공시 바로 passport를 통해 로그인을 하고 메인화면으로 이동시키고 싶은데 
            // 이때 passport의 LocalStrategy의 nameField와 passwordField가 로그인 폼의 name값으로 되어 있기 때문에 
            // 회원가입할때의 name도 로그인 폼의 name값과 똑같이 맞춰줬음 
            login_email, 
            login_pw, 
            select_year, 
            select_month, 
            select_day, 
            chk_gender }
    } = req; 

    // db에 insert할 변수와 값을 지정해줌 
    let $username = signUp_fname + signUp_lname; //성과 이름을 한번에 넣어줌 
    let $email = login_email; 
    let $birthday_year = select_year; 
    let $birthday_month = select_month; 
    let $birthday_day = select_day;
    let $gender = chk_gender; 

    // 혹시나 비어 있는 값이 있는 상태에서 postJoin으로 들어오면 다시 home으로 돌려보냄 
    // 이러한 유효성 검사는 프런트에서 처리하기 때문에 사실상 필요는 없음 
    if(signUp_fname == "" || signUp_lname == "" || login_email == "" || login_pw == "" || select_year =="" || select_month =="" || select_day == "" || chk_gender == "") {
        res.redirect(routes.home);
    } else {
        const hasher = pbkdf2(); 
        // pbkdf2의 hasher 함수를 통해 비밀번호를 암호화 한다. 
        hasher( { password: login_pw }, async (err, pass, salt, hash) => {
            let $sql = "INSERT INTO users SET ?"; 
            let $set = {
                username: $username, 
                password: hash, // 비밀번호에는 hasher함수의 salt값을 통해 암호화 된 값인 hash 값을 넣어준다. 
                email: $email, 
                birthday_year: $birthday_year,
                birthday_month: $birthday_month, 
                birthday_day: $birthday_day,
                gender: $gender, 
                salt: salt // 로그인을 할 때 hash값 비교를 위해서 키 역할을 하는 salt값이 있어야 한다. 
            }
            const $query = await connection.query($sql, $set, (err, result) => {
                if(err) {
                    console.log("❌  ERROR : " + err); 
                } else {
                    next(); 
                }
            });
        });
    }
}


// 로그인 Controller 
export const getLogin = (req, res) => {
    if(req.user) {
        res.redirect(routes.main);
    } else {
        res.redirect(routes.home);
    }
}
export const postLogin = passport.authenticate("local", {
    successRedirect: routes.main, 
    failureRedirect: routes.home
})
export const logout = (req, res) => {
    if(req.user) {
        req.logout(); 
        res.redirect(routes.home); 
    } else {
        res.redirect(routes.home);
    }
}

export const getSearch = async (req, res) => {
    const {
        query: {header_searchText}
    } = req;
    const $requestedFriend = `SELECT reqfriend.applicant, reqfriend.target, users.id, users.username, users.avatarUrl from reqfriend join users on reqfriend.applicant=users.id WHERE reqfriend.target='${req.user.id}';`
    const $recommendFriend = 'SELECT id, username, avatarUrl from users order by RAND() LIMIT 5;';
    const $friend = `SELECT friendid FROM friend WHERE userid='${req.user.id}';`;
    const $ad = 'SELECT * from ad order by RAND() LIMIT 3;';
    const $feed = `SELECT feed.content, feed.id, feed.userId, feed.feedImg, feed.date, feed.likeCount, feed.commentCount, users.username, users.avatarUrl FROM feed left join users on feed.userId=users.id WHERE content LIKE '%${header_searchText}%' OR username LIKE '%${header_searchText}%' ORDER BY date DESC;`;
    const $like = `SELECT feedid from liketable where userid="${req.user.id}";`;
    const $comment = 'SELECT * from comment;'; 
    const $reply = 'SELECT * from reply;'; 
    const $searchPerson = `SELECT id, username, avatarUrl FROM users WHERE username LIKE '%${header_searchText}%';`
    const $requestFriend = `SELECT * FROM reqfriend WHERE applicant='${req.user.id}';`   

    await connection.query($requestedFriend+$recommendFriend+$friend+$ad+$feed+$like+$comment+$reply+$searchPerson+$requestFriend, (err,rows) => {
        const requestedFriend = rows[0]; 
        const recommendFriend = rows[1];
        const friendList = [];  
        const ad = rows[3]; 
        const feeds = rows[4];
        const likeList = [];  
        const comment = rows[6];
        const reply = rows[7];
        const searchPerson = rows[8]; 
        const reqFriendList = []; 


        for(let i = 0; i < rows[9].length; i++) {
            reqFriendList.push(rows[9][i].target); 
        }
        for(let i = 0; i < rows[5].length; i++){
            likeList.push(rows[5][i].feedid);
        }
        for(let i = 0; i < rows[2].length; i++) {
            friendList.push(rows[2][i].friendid); 
        }
        res.render("search", { pageTitle: header_searchText + "- Facebook 검색", requestedFriend, recommendFriend, friendList, ad, feeds, likeList, comment, reply, searchPerson, reqFriendList });
    })
    
   
}