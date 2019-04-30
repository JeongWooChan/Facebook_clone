import routes from "../routes"; 
import connection from "../db"; 
import pbkdf2 from "pbkdf2-password"; 

const hasher = pbkdf2();

// 이메일 중복체크를 위한 함수 
export const emailCheck = async (req, res, next) => {
    const {
        body: {email}
    } = req;
    let $sql = "SELECT * FROM users WHERE ?"; 
    let $set = {
        email: email
    }
    let $query = await connection.query($sql, $set, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            if(result != "") {
                res.status(206);
                res.end();
            } else {
                res.status(200); 
                res.end();
            }
        }
    })
}

// 비밀번호 변경 시 현재 비밀번호 확인을 위한 함수 
export const passwordCheck = async (req, res) => {
    const {
        body: { password }
    }=req;
    await connection.query('SELECT * FROM users WHERE `id`=?', [req.user.id], function(err,rows) {
        const user = rows[0]; 
        const user_salt = user.salt; 
        const user_pw = user.password;

        hasher({password: password, salt: user_salt}, (err, pass, salt, hash) => {
             if(user_pw == hash) {
                 res.status(200);
                 res.end();
             } else {
                 res.status(206);
                 res.end();
             }
        });
    })
}