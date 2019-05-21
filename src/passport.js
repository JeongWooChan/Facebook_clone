import passport from "passport"; 
import connection from "./db";
import pbkdf2 from "pbkdf2-password"; 

const LocalStrategy = require("passport-local").Strategy;
const hasher = pbkdf2();

passport.use(new LocalStrategy({
    usernameField: 'login_email', 
    passwordField: 'login_pw', 
}, function(username, password, done) {
    connection.query('SELECT * FROM users WHERE `email`=?', [username], function(err, rows) {
        const user = rows[0];

        if (!user) {
            return done(null, false, { message: 'Incorrect username' }); 
        } else {
            let user_salt = user.salt; 
            // passwordField로 부터 넘어온 비밀번호를 db에 적재되어 있던 salt값으로 암호화를 시킨다. 
            hasher({password: password, salt: user_salt}, (err, pass, salt, hash) => {
            if (err) {
                return done(err); 
            }
            if(hash !== user.password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });  
        }   
    });
}));

passport.serializeUser(function(user,done) {
    done(null, user.email); 
}); 

passport.deserializeUser(function(id, done) {
    /* db에서 id를 이용하여 user를 얻어서 done을 호출한다. */
    connection.query('SELECT * FROM users WHERE email = ?', [id], function(err, rows) {
        const user = rows[0]; 
        done(err,user);
    });
});