import routes from "../routes"; 
import connection from "../db"; 
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;


// Main 페이지 
export const getMain = async (req, res) => {
    const $feed = 'SELECT feed.content, feed.id, feed.userId, feed.feedImg, feed.date, feed.likeCount, feed.commentCount, feed.replyCount, users.username, users.avatarUrl FROM feed left join users on feed.userId=users.id ORDER BY date DESC;';
    const $comment = 'SELECT * from comment;'; 
    const $reply = 'SELECT * from reply;'; 
    const $like = `SELECT feedid from liketable where userid="${req.user.id}";`;
    const $ad = 'SELECT * from ad order by RAND() LIMIT 3;'; 
    const $recommendFriend = 'SELECT id, username, avatarUrl from users order by RAND() LIMIT 5;'; 
    const $requestFriend = `SELECT * FROM reqfriend WHERE applicant='${req.user.id}';`   
    const $requestedFriend = `SELECT reqfriend.applicant, reqfriend.target, users.id, users.username, users.avatarUrl from reqfriend join users on reqfriend.applicant=users.id WHERE reqfriend.target='${req.user.id}';`
    const $friend = `SELECT friendid FROM friend WHERE userid='${req.user.id}';`;
    const $storeFeedId = `SELECT feedid FROM feedstore WHERE userid=${req.user.id};`
    // 다중쿼리문 방식을 사용하였으며 
    // 다중쿼리문을 사용하기 위해서는 db connection을 할 때, 
    // multipleStatements: true 를 추가해줘야 한다. 
    await connection.query(
        $feed + 
        $comment + 
        $reply + 
        $like + 
        $ad +
        $recommendFriend +
        $requestFriend + 
        $requestedFriend +
        $friend +
        $storeFeedId,  
        (err, rows) => {
        if (err) {
            console.log("❌  ERROR : " + err);
        } else {
            const feeds = rows[0];
            const comment = rows[1];
            const reply = rows[2];
            const likeList = [];   
            const ad = rows[4] 
            const recommendFriend = rows[5];
            const reqFriendList = [];  
            const requestedFriend = rows[7];  
            const friendList = [];  
            const storeFeedList = []; 
            if (req.user) {
                for(let i = 0; i < rows[3].length; i++){
                    likeList.push(rows[3][i].feedid);
                }
                for(let i = 0; i < rows[6].length; i++) {
                    reqFriendList.push(rows[6][i].target); 
                }
                for(let i = 0; i < rows[8].length; i++) {
                    friendList.push(rows[8][i].friendid); 
                }
                for(let i = 0 ; i < rows[9].length; i++) {
                    storeFeedList.push(rows[9][i].feedid); 
                }
                res.render("main", { pageTitle: "FaceBook", feeds, comment, reply, likeList, ad, recommendFriend, reqFriendList, requestedFriend, friendList, storeFeedList });
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
    const $feed = `SELECT feed.content, feed.id, feed.userId, feed.feedImg, feed.date, feed.likeCount, feed.commentCount, feed.replyCount, users.username, users.avatarUrl FROM feed left join users on feed.userId=users.id ORDER BY date DESC;`;  
    const $like = `SELECT feedid from liketable where userid="${req.user.id}";`;
    const $comment = 'SELECT * from comment;'; 
    const $reply = 'SELECT * from reply;'; 
    const $recommendFriend = 'SELECT id, username, avatarUrl from users order by RAND() LIMIT 5;';
    const $requestFriend = `SELECT * FROM reqfriend WHERE applicant='${req.user.id}';` 
    const $requestedFriend = `SELECT reqfriend.applicant, reqfriend.target, users.id, users.username, users.avatarUrl from reqfriend join users on reqfriend.applicant=users.id WHERE reqfriend.target='${req.user.id}';`
    const $friend = `SELECT friendid FROM friend WHERE userid='${req.user.id}';`;
    const $friendGrid = `SELECT users.id, users.username, users.avatarUrl, friend.friendid from friend join users on friend.friendid=users.id where friend.userid='${id}';`;
    const $storeFeedId = `SELECT feedid FROM feedstore WHERE userid=${req.user.id};`

    await connection.query($user+$feed+$like+$comment+$reply+$recommendFriend+$requestFriend+$requestedFriend+$friend+$friendGrid+$storeFeedId, (err, rows) => {
        if( err ) {
            console.log("❌  ERROR : " + err);
        } else {
            const personUser = rows[0][0];
            const personFeed = rows[1]; 
            const likeList = []; 
            const comment = rows[3];
            const reply = rows[4];
            const recommendFriend = rows[5];
            const reqFriendList = []; 
            const requestedFriend = rows[7];  
            const friendList = []; 
            const friendGrid = rows[9];
            const storeFeedList = [];
            for(let i = 0; i < rows[2].length; i++){
                likeList.push(rows[2][i].feedid);
            }
            for(let i = 0; i < rows[6].length; i++) {
                reqFriendList.push(rows[6][i].target); 
            }
            for(let i = 0; i < rows[8].length; i++) {
                friendList.push(rows[8][i].friendid); 
            }
            for(let i = 0 ; i < rows[10].length; i++) {
                storeFeedList.push(rows[10][i].feedid); 
            }
            res.render("person", { pageTitle: personUser.username, personUser, personFeed, likeList, comment, reply, recommendFriend, reqFriendList, requestedFriend, friendList, friendGrid, storeFeedList })
        }
    })
}

// 개인 정보 페이지 
export const getPersonInfo = async (req, res) => {
    const {
        params : { id }
    }= req;
    const $user = `select * from users WHERE id=${id};`;
    const $recommendFriend = 'SELECT id, username, avatarUrl from users order by RAND() LIMIT 5;';
    const $requestFriend = `SELECT * FROM reqfriend WHERE applicant='${req.user.id}';` 
    const $requestedFriend = `SELECT reqfriend.applicant, reqfriend.target, users.id, users.username, users.avatarUrl from reqfriend join users on reqfriend.applicant=users.id WHERE reqfriend.target='${req.user.id}';`
    const $friend = `SELECT friendid FROM friend WHERE userid='${req.user.id}';`;

    await connection.query($user + $recommendFriend + $requestFriend + $requestedFriend + $friend, (err, rows) => {
        if( err ) {
            console.log("❌  ERROR : " + err);
        } else {
            const personUser = rows[0][0];
            const recommendFriend = rows[1];
            const reqFriendList = []; 
            const requestedFriend = rows[3];  
            const friendList = [];  
            for(let i = 0; i < rows[2].length; i++) {
                reqFriendList.push(rows[2][i].target); 
            }
            for(let i = 0; i < rows[4].length; i++) {
                friendList.push(rows[4][i].friendid); 
            }
            res.render("personInfo", { pageTitle: personUser.username, personUser, recommendFriend, reqFriendList, requestedFriend, friendList })
        }
    });
}

export const feedStore = async (req, res) => {
    const {
        params : { id }
    }= req;
    const $user = `select * from users WHERE id=${id};`;
    const $recommendFriend = 'SELECT id, username, avatarUrl from users order by RAND() LIMIT 5;';
    const $requestFriend = `SELECT * FROM reqfriend WHERE applicant='${req.user.id}';` 
    const $requestedFriend = `SELECT reqfriend.applicant, reqfriend.target, users.id, users.username, users.avatarUrl from reqfriend join users on reqfriend.applicant=users.id WHERE reqfriend.target='${req.user.id}';`
    const $friend = `SELECT friendid FROM friend WHERE userid='${req.user.id}';`;
    const $storeFeedId = `SELECT feedid FROM feedstore WHERE userid=${req.user.id};`
    const $feed = `SELECT feed.content, feed.id, feed.userId, feed.feedImg, feed.date, feed.likeCount, feed.commentCount, feed.replyCount, users.username, users.avatarUrl FROM feed left join users on feed.userId=users.id ORDER BY date DESC;`;  
    const $like = `SELECT feedid from liketable where userid="${req.user.id}";`;
    const $comment = 'SELECT * from comment;'; 
    const $reply = 'SELECT * from reply;'; 

    await connection.query($user + $recommendFriend + $requestFriend + $requestedFriend + $friend + $storeFeedId+ $feed +$like + $comment + $reply, (err, rows) => {
        if( err ) {
            console.log("❌  ERROR : " + err);
        } else {
            const personUser = rows[0][0];
            const recommendFriend = rows[1];
            const reqFriendList = []; 
            const requestedFriend = rows[3];  
            const friendList = [];  
            const storeFeedList = [];
            const feed = rows[6]; 
            const likeList = [];
            const comment = rows[8]; 
            const reply = rows[9]; 
            for(let i = 0; i < rows[2].length; i++) {
                reqFriendList.push(rows[2][i].target); 
            }
            for(let i = 0; i < rows[4].length; i++) {
                friendList.push(rows[4][i].friendid); 
            }
            for(let i = 0 ; i < rows[5].length; i++) {
                storeFeedList.push(rows[5][i].feedid); 
            }
            for(let i = 0; i < rows[7].length; i++) {
                likeList.push(rows[7][i].feedid); 
            }
            res.render("feedStore", { pageTitle: "보관함", personUser, recommendFriend, reqFriendList, requestedFriend, friendList, storeFeedList, feed, likeList, comment, reply });
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