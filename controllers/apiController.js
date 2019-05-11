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

export const addComment = async (req, res) => {
    const {
        body: {id, comment}
    } = req; 
    await connection.query('SELECT userid from feed WHERE id=?', id, async (err,rows)=> {
        if(err) {
            console.log("❌  ERROR : " + err);
        } else {
            let $set = {
                feedId: id,
                userid: req.user.id,
                feed_userid: rows[0].userid,
                username: req.user.username,
                content: comment,
                userAvatar: req.user.avatarUrl
            }
            const $addComment = 'INSERT INTO comment SET ?;'; 
            const $update_CommentCnt = 'UPDATE feed SET commentCount=commentCount+1 WHERE `id`=?;'; 

            await connection.query($addComment + $update_CommentCnt, [$set,id], (err, result)=> {
                if(err) {
                    console.log("❌  ERROR : " + err); 
                } else {
                    res.status(200); 
                    res.end();
                }
            });
        }
    });
}

export const deleteComment = async (req, res) => {
    const {
        params: {id}
    }=req; 
    // 댓글을 삭제하기 전에 해당 id의 댓글에 대댓글이 있는지 확인 한다. 
    // 대댓글이 없으면 댓글만 삭제하고, 대댓글이 있으면 대댓글을 삭제한 후 댓글을 삭제한다. 
    await connection.query('SELECT EXISTS(SELECT * FROM reply WHERE commentId=?) AS SUCCESS', id, async (err, row) => {
        // 대댓글이 존재 
        if(row[0].SUCCESS == 1) {
            const $feedid = 'SELECT feedId from comment WHERE id=?;';
            const $replyCount = 'SELECT COUNT(*) FROM reply WHERE commentId=?;'; 
            const $deleteReply = 'DELETE FROM reply WHERE commentId=?;';
            const $deleteComment = 'DELETE FROM comment WHERE id=?;'; 

            await connection.query($feedid + $deleteReply + $replyCount + $deleteComment, [id,id,id,id], async (err, result) => {
                const feedId = result[0][0].feedId;
                const replyCount = result[1].affectedRows; 
                console.log(feedId);
                if(err) {
                    console.log("❌  ERROR1 : " + err); 
                } else {
                    await connection.query(`UPDATE feed SET commentCount=commentCount-${replyCount+1} WHERE id=?`, feedId, (err, results) => {
                        if(err) {
                            console.log("❌  ERROR2 : " + err); 
                        } else {
                            res.status(200);
                            res.end();
                        }
                    });
                }
            });
        }
        // 대댓글이 없음  
        else {
            await connection.query('SELECT feedId from comment WHERE `id`=?', id, async (err, rows) => {
                const feedId = rows[0].feedId;
                if(err) {
                    console.log("❌  ERROR : " + err); 
                } else {
                    const $update_CommentCnt = 'UPDATE feed SET commentCount=commentCount-1 WHERE `id`=?;'; 
                    const $deleteComment = 'DELETE FROM comment WHERE id=?;'; 

                    await connection.query($update_CommentCnt + $deleteComment, [feedId, id], (err, result) => {
                        if(err) {
                            console.log("❌  ERROR : " + err); 
                        } else {
                            res.status(200);
                            res.end();
                        }
                    });
                }
            });
        }
    });
}

export const editComment = async (req, res) => {
    const {
        body: { id, comment }
    }=req; 
    let $set = {
        content: comment
    }
    await connection.query('UPDATE comment SET ? WHERE `id`=?', [$set, id], (err, result) => {
        if(err) {
            console.log("❌  ERROR : " + err); 
        } else {
            res.status(200);
            res.end();
        }
    })
}

export const addReply = async (req, res) => {
    const {
        params: {id},
        body: {comment, feedId}
    } = req; 
    await connection.query('SELECT userid from feed WHERE id=?', feedId, async( err, rows) => {
        if(err) {
            console.log("❌  ERROR : " + err);
        } else {
            let $set = {
                commentId: id, 
                feed_userid: rows[0].userid,
                userid: req.user.id,
                userName: req.user.username, 
                userAvatar: req.user.avatarUrl, 
                reply: comment, 
                feedId: feedId 
            }
            const $addReply = 'INSERT INTO reply SET ?;'; 
            const $update_CommentCnt = 'UPDATE feed SET commentCount=commentCount+1 WHERE `id`=?;'; 

            await connection.query($addReply + $update_CommentCnt, [$set, feedId], (err, result) => {
                if(err) {
                    console.log("❌  ERROR : " + err); 
                } else {
                    res.status(200); 
                    res.end();
                }
            });
        }
    });
}

export const deleteReply = async (req, res) => {
    const {
        params: {id}
    }=req;
    await connection.query('SELECT feedId from reply WHERE `id`=?', id, async (err, rows, result) => {
        if(err) {
            console.log("❌  ERROR : " + err); 
        } else {
            const feedId = rows[0].feedId;
            await connection.query('UPDATE feed SET commentCount=commentCount-1 WHERE `id`=?', feedId, (err, result) => {
                if(err) {
                    console.log("❌  ERROR : " + err); 
                }
            }); 
            await connection.query('DELETE from reply WHERE `id`=?', id, (err, result) => {
                if(err) {
                    console.log("❌  ERROR : " + err); 
                } else {
                    res.status(200);
                    res.end();
                }
            });
        }
    });
}

export const editReply = async (req, res) => {
    const {
        body: { id, reply }
    }=req; 
    let $set = {
        reply: reply
    }
    await connection.query('UPDATE reply SET ? WHERE `id`=?', [$set, id], (err, result) => {
        if(err) {
            console.log("❌  ERROR : " + err); 
        } else {
            res.status(200);
            res.end();
        }
    })
}

export const like = async (req, res) => {
    const {
        params: {id}
    }=req; 
    let $set = {
        feedid: id,
        userid: req.user.id
    }
    // EXSISTS의 안에 조건절 값이 존재하는지 아닌지가 0과1로 값이 리턴됨 
    await connection.query('SELECT EXISTS(SELECT feedid FROM liketable WHERE userid=? AND feedid=?) AS SUCCESS', [req.user.id,id], async (err, row) => {
        if(row[0].SUCCESS == 1) {
            const $like_cancel = `DELETE FROM liketable WHERE feedid=? AND userid=?;`;
            const $update_likeCnt = `UPDATE feed SET likeCount=likeCount-1 WHERE id=?;`;
            await connection.query($like_cancel + $update_likeCnt, [id, req.user.id, id], async (err, rows) => {
                if(err) {
                    console.log("❌  ERROR : " + err); 
                } else {
                    const $likeCnt = `SELECT likeCount from feed WHERE id=?;`;
                    await connection.query($likeCnt, id, (err, rows) => {
                        if(err) {
                            console.log("❌  ERROR : " + err); 
                        } else {
                            res.status(200).json({result: 0, likeCnt : rows[0].likeCount})
                            res.end();
                        }
                    });  
                }
            })
        } else {
            const $like = `INSERT INTO liketable SET ?;`; 
            const $update_likeCnt = `UPDATE feed SET likeCount=likeCount+1 WHERE id=?;`; 
            await connection.query($like + $update_likeCnt, [$set, id], async (err, rows) => {
                if(err) {
                    console.log("❌  ERROR : " + err); 
                } else {
                    const $likeCnt = `SELECT likeCount from feed WHERE id=?;`;
                    await connection.query($likeCnt, id, (err, rows) => {
                        if(err) {
                            console.log("❌  ERROR : " + err); 
                        } else {
                            // status값과 함께 json형태로 데이터를 보내줄 수 있다.
                            res.status(200).json({result: 1, likeCnt : rows[0].likeCount})
                            res.end();
                        }
                    });                 
                }
            })
        }
    })
}