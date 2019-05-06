import routes from "../routes"; 
import connection from "../db"; 
import dotenv from "dotenv";
import { networkInterfaces } from "os";

dotenv.config();

const PORT = process.env.PORT;

// Main 페이지 
export const getMain = async (req, res) => {
    await connection.query(
        'SELECT feed.content, feed.id, feed.userId, feed.feedImg, feed.date, feed.likeCount, feed.commentCount, users.username, users.avatarUrl FROM feed left join users on feed.userId=users.id ORDER BY date DESC', (err, feeds) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            if(req.user){
                res.render("main", { pageTitle: "FaceBook", feeds });     
            } else {
                res.redirect(routes.home);
            }
        }
    }); 
}
export const postMain = (req, res) => {

}

// 개인 피드 페이지 
export const getPerson = (req, res) => {
    res.render("person", { pageTitle: req.user.username })
}

// 개인 정보 페이지 
export const getPersonInfo = (req, res) => {
    res.render("personInfo",{ pageTitle: req.user.username })
}

export const postUpload = async (req, res) => {
    const {
        body: {content},
        file
    } = req;
    let $set; 
    if(file == null) {
        $set = {
            userId: req.user.id, 
            content: content
        }
    } else {
        $set = {
            userId: req.user.id, 
            content: content, 
            feedImg: file.path
        }
    }
    let $sql = "INSERT INTO feed SET ?"; 
    await connection.query($sql, $set, (err, result) => {
        if(err) {
            console.log("❌  ERROR : " + err); 
        } else {
            res.redirect(routes.main)
        }
    });
}

export const editFeed = async (req, res) => {
    const {
        params: {id},
        body:{content},
        file
    }=req;
    let $set; 
    if(file == null) {
        $set = {
            content,
            date: new Date()
        }
    } else {
        $set = {
            content, 
            feedImg: file.path
        }
    }
    await connection.query('UPDATE feed SET ? WHERE `id`= ?', [$set, id], (err, rows) => {
        if(err) {
            console.log("❌  ERROR : " + err);
        } else {
            res.send(`<script type="text/javascript">alert("성공적으로 수정되었습니다.");document.location.href='http://localhost:${PORT}${routes.main}';</script>`);
        }
    })
}