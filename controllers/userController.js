import routes from "../routes"; 
import connection from "../db"; 
import pbkdf2 from "pbkdf2-password"; 
import dotenv from "dotenv";

dotenv.config();

const hasher = pbkdf2();
const PORT = process.env.PORT;

export const user = (req, res) => {

}

export const changePassword = async (req, res) => {
    const {
        body: {personInfo_changePassword_change}
    }= req;
    await connection.query('SELECT * FROM users WHERE `id`=?', [req.user.id], function(err, rows) {
         hasher({password: personInfo_changePassword_change}, async (err, pass, salt, hash) => {
            let $sql = "UPDATE users SET ?"; 
            let $set = {
                password: hash, 
                salt: salt 
            }
            await connection.query($sql, $set, (err, result) => {
                if(err) {
                    onsole.log("❌  ERROR : " + err); 
                } else {
                    res.send(`<script type="text/javascript">alert("비밀번호가 성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
                }
            });
         });
    });
}