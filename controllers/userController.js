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
        body: { personInfo_changePassword_change }
    } = req;
    hasher({ password: personInfo_changePassword_change }, async (err, pass, salt, hash) => {
        let $set = {
            password: hash,
            salt: salt
        }
        await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
            if (err) {
                console.log("❌  ERROR : " + err);
            } else {
                res.send(`<script type="text/javascript">alert("비밀번호가 성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
            }
        });
    });
}

export const changePhone = async (req, res) => {
    const {
        body: { phoneInfo_editForm_first, phoneInfo_editForm_fInput, phoneInfo_editForm_lInput }
    } = req;
    let $phone = phoneInfo_editForm_first + "-" + phoneInfo_editForm_fInput + "-" + phoneInfo_editForm_lInput;
    let $set = {
        phone: $phone
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("전화번호가 성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const deletePhone = async (req, res) => {
    let $set = {
        phone: null
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 삭제되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const changeBirthday = async (req, res) => {
    const {
        body: { year, month, day }
    } = req;
    let $set = {
        birthday_year: year,
        birthday_month: month,
        birthday_day: day
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    })
}

export const changeBloodType = async (req, res) => {
    const {
        body: { bloodType }
    } = req;
    let $set = {
        bloodType
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const deleteBloodType = async (req, res) => {
    let $set = {
        bloodType: null
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 삭제되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const changeResidence = async (req, res) => {
    const {
        body: { residence }
    } = req;
    let $set = {
        residence
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const deleteResidence = async (req, res) => {
    let $set = {
        residence: null
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 삭제되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const changeHometown = async (req, res) => {
    const {
        body: { hometown }
    } = req;
    let $set = {
        hometown
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const deleteHometown = async (req, res) => {
    let $set = {
        hometown: null
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 삭제되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const changeCompany = async (req, res) => {
    const {
        body: { company, position, city }
    } = req;
    let $set = {
        workspace: company,
        workspace_position: position,
        workspace_city: city
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const deleteCompany = async (req, res) => {
    let $set = {
        workspace: null,
        workspace_position: null,
        workspace_city: null
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 삭제되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}


export const changeUniversity = async (req, res) => {
    const {
        body: { university, major, graduate }
    } = req;
    let $set;
    if (graduate == null) {
        $set = {
            university,
            university_graduate: null,
            university_major: major
        }
    } else {
        $set = {
            university,
            university_graduate: graduate,
            university_major: major
        }
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 변경되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const deleteUniversity = async (req, res) => {
    let $set = {
        university: null,
        university_graduate: null,
        university_major: null
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 삭제되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    });
}

export const editProfile = async (req, res) => {
    const {
        file
    }=req;
    let $set = {
        avatarUrl: file ? file.path : req.user.avatarUrl
    }
    await connection.query('UPDATE users SET ? WHERE `id`= ?', [$set, req.user.id], (err, rows) => {
        if(err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 적용되었습니다.");document.location.href='http://localhost:${PORT}${routes.personInfo(req.user.id)}';</script>`);
        }
    })
}