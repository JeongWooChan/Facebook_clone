const express = require('express');
const app = express();
const db = require('./js/db.js');
const bodyParser = require('body-parser');
const bkfd2Password = require('pbkdf2-password'); // 암호화를 하기 위한 모듈 
const hasher = bkfd2Password();

// Database 연동 
db.connect();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// 회원가입 폼에서 넘어온 post값을 받는 부분 
app.post("/", function (req, res) {
    var body = req.body;
    var fname = body.fname;
    var lname = body.name;
    var email = body.email2;
    var password = body.new_pw;
    var gender = body.chk_gender;
    var year = body.year;
    var month = body.month;
    var day = body.day;

    // pbkdf2의 hasher 함수를 이용하여 암호화를 진행한다. 
    hasher({ password: password }, function (err, pass, salt, hash) {
        // 이메일 중복체크를 위한 쿼리문 
        db.query('SELECT * FROM users WHERE email=?', email, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                // where절에 대한 data의 길이를 통해서 중복 여부 확인 
                if (data.length == 0) {
                    // 회원 가입정보 insert 
                    // password에는 암호화가 된 hash값을 넣고, 동시에 키역할을 해주는 salt를 같이 insert 해준다. 
                    db.query('insert into users (fname, lname, email, password, gender, year, month, day, salt) values ("' + fname + '","' + lname + '","' + email + '","' + hash + '","' + gender + '","' + year + '","' + month + '","'  + day + '","' + salt + '")',
                        function (err, rows) {
                            if (err) {
                                console.log(err);
                            } else {
                                res.send(`<script type="text/javascript">alert("가입 완료");window.location="/";</script>`);
                            }
                        });
                } else {
                    res.send(`<script type="text/javascript">alert("이메일이 중복됩니다.");window.location="/";</script>`);
                }
            }
        });
    });
});

// 로그인 폼에서 넘어온 post값을 받는 부분 
app.post("/login", function (req, res) {
    const body = req.body;
    const email = body.email;
    const password = body.pw;
    // db에 post로 넘어온 이메일 존재 여부 
    let sql = 'SELECT * FROM users WHERE email=?';
    db.query(sql, [email], function (err, rows, results) {
        if (err) {
            console.log(err);
        }
        // 이메일이 존재하지 않을 때 
        if (!results[0]) {
            res.send(`<script type="text/javascript">alert("이메일 및 패스워드를 확인해 주세요.");window.location="/";</script>`);
        } else {
            let user_salt = rows[0].salt;
            // login form으로 부터 넘어온 비밀번호를 db에 저장되어 있던 salt값을 통해 다시 암호화를 시켜준다. 
            return hasher({password:password, salt:user_salt}, function(err, pass, salt, hash) {
                // 암호화 된 hash값과 db에 저장되어 있는 hash값(password)를 비교하여 로그인 여부 판단
                if(hash === rows[0].password) {
                    res.send('ok');
                } else {
                    res.send('fail');
                }
            });
        }
    });
});


app.listen(3000, function () {
    console.log('Success');
});