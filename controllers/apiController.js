import routes from "../routes"; 
import connection from "../db"; 

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