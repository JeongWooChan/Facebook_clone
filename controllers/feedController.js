import routes from "../routes"; 
import connection from "../db"; 
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;


// Main 페이지 
export const getMain = async (req, res) => {
    const $feed = 'SELECT feed.content, feed.id, feed.userId, feed.feedImg, feed.date, feed.likeCount, feed.commentCount, users.username, users.avatarUrl FROM feed left join users on feed.userId=users.id ORDER BY date DESC;';
    const $comment = 'SELECT * from comment;'; 
    const $reply = 'SELECT * from reply;'; 
    const $like = `SELECT feedid from liketable where userid="${req.user.id}";`;
    const $ad = 'SELECT * from ad order by RAND() LIMIT 3;'; 
    // 다중쿼리문 방식을 사용하였으며 
    // 다중쿼리문을 사용하기 위해서는 db connection을 할 때, 
    // multipleStatements: true 를 추가해줘야 한다. 
    await connection.query($feed + $comment + $reply + $like + $ad, (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            const feeds = rows[0];
            const comment = rows[1];
            const reply = rows[2];
            const likeList = [];   
            const ad = rows[4]      
            if (req.user) {
                for(let i = 0; i < rows[3].length; i++){
                    likeList.push(rows[3][i].feedid);
                }
                res.render("main", { pageTitle: "FaceBook", feeds, comment, reply, likeList, ad });
            } else {
                res.redirect(routes.home);
            }
        }
    });
}
export const postMain = (req, res) => {

}

// 개인 피드 페이지 
export const getPerson = async (req, res) => {
    const {
        params : { id }
    }= req;
    const $user = `select * from users WHERE id=${id};`;
    const $feed = `SELECT feed.content, feed.id, feed.userId, feed.feedImg, feed.date, feed.likeCount, feed.commentCount, users.username, users.avatarUrl FROM feed left join users on feed.userId=users.id ORDER BY date DESC;`;  
    const $like = `SELECT feedid from liketable where userid="${req.user.id}";`;
    const $comment = 'SELECT * from comment;'; 
    const $reply = 'SELECT * from reply;'; 
    await connection.query($user+$feed+$like+$comment+$reply, (err, rows) => {
        if( err ) {
            console.log("❌  ERROR : " + err);
        } else {
            const personUser = rows[0][0];
            const personFeed = rows[1]; 
            const likeList = []; 
            const comment = rows[3];
            const reply = rows[4];
            for(let i = 0; i < rows[2].length; i++){
                likeList.push(rows[2][i].feedid);
            }
            res.render("person", { pageTitle: personUser.username, personUser, personFeed, likeList, comment, reply })
        }
    })
}

// 개인 정보 페이지 
export const getPersonInfo = async (req, res) => {
    const {
        params : { id }
    }= req;
    const $user = `select * from users WHERE id=${id}`; 
    await connection.query($user, (err, rows) => {
        if( err ) {
            console.log("❌  ERROR : " + err);
        } else {
            const personUser = rows[0]; 
            res.render("personInfo", { pageTitle: personUser.username, personUser })
        }
    });
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

export const deleteFeed = async (req, res) => {
    const {
        params: { id }
    } = req;
    await connection.query('DELETE from feed WHERE `id`= ?', [id], (err, rows) => {
        if(err) {
            console.log("❌  ERROR : " + err);
            res.status(400);
            res.end();
        } else {
            res.status(200);
            res.end();
        }
    })
}