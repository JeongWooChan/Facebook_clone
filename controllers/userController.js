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
                    console.log("❌  ERROR : " + err); 
                } else {
                    res.send(`<script type="text/javascript">alert("비밀번호가 성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
                }
            });
         });
    });
}

export const changePhone = async (req, res) => {
    const {
        body: {phoneInfo_editForm_first, phoneInfo_editForm_fInput, phoneInfo_editForm_lInput}
    }=req;
    let $phone = phoneInfo_editForm_first+"-"+phoneInfo_editForm_fInput+"-"+phoneInfo_editForm_lInput;
    await connection.query('SELECT * FROM users WHERE `id`=?', [req.user.id], async (err, rows) => {
        let $sql = "UPDATE users SET ?"; 
        let $set = {
            phone: $phone
        }
        await connection.query($sql, $set, (err, result) => {
            if(err) {
                console.log("❌  ERROR : " + err); 
            } else {
                res.send(`<script type="text/javascript">alert("전화번호가 성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
            }
        });
    });
}

export const changeBirthday = async (req, res) => {
    const {
        body: {year, month, day}
    }=req;
    await connection.query('SELECT * FROM users WHERE `id`=?', [req.user.id], async(err, rows) => {
        let $sql = "UPDATE users SET ?"; 
        let $set = {
            birthday_year: year,
            birthday_month: month,
            birthday_day: day
        }
        await connection.query($sql, $set, (err, result) => {
            if(err) {
                console.log("❌  ERROR : " + err);
            } else {
                res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
            }
        })
    })
}

export const changeBloodType = async (req, res) => {
    const {
        body: { bloodType }
    }=req; 
    await connection.query('SELECT * FROM users WHERE `id`=?', [req.user.id], async(err, rows) => {
        let $sql = "UPDATE users SET ?"; 
        let $set = {
            bloodType
        }
        await connection.query($sql, $set, (err, result) => {
            if(err) {
                console.log("❌  ERROR : " + err);
            } else {
                res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
            }
        })
    })
}

export const changeResidence = async (req, res) => {
    const {
        body: {residence}
    }=req;
    await connection.query('SELECT * FROM users WHERE `id`=?', [req.user.id], async(err, rows) => {
        let $sql = "UPDATE users SET ?"; 
        let $set = {
            residence
        }
        await connection.query($sql, $set, (err, result) => {
            if(err) {
                console.log("❌  ERROR : " + err);
            } else {
                res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
            }
        });
    });
}

export const changeHometown = async (req, res) => {
    const {
        body: {hometown} 
    }= req; 
    await connection.query('SELECT * FROM users WHERE `id`=?', [req.user.id], async(err, rows) => {
        let $sql = "UPDATE users SET ?"; 
        let $set = {
            hometown
        }
        await connection.query($sql, $set, (err, result) => {
            if(err) {
                console.log("❌  ERROR : " + err);
            } else {
                res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
            }
        });
    });
}

export const changeCompany = async (req, res) => {
    const {
        body: { company, position, city }
    }=req; 
    await connection.query('SELECT * FROM users WHERE `id`=?', [req.user.id], async(err, rows) => {
        let $sql = "UPDATE users SET ?"; 
        let $set = {
            workspace: company, 
            workspace_position: position, 
            workspace_city: city
        }
        await connection.query($sql, $set, (err, result) => {
            if(err) {
                console.log("❌  ERROR : " + err);
            } else {
                res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
            }
        });
    });
}