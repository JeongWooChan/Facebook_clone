console.log('hello');

var express = require('express');
var app = express();
var db = require('./js/db.js');
var bodyParser = require('body-parser');

// Database 연동 
db.connect();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

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

    // 이메일 중복체크를 위한 쿼리문 
    var query = db.query('SELECT * FROM users WHERE email=?', email, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            // where절에 대한 data의 길이를 통해서 중복 여부 확인 
            if (data.length == 0) {
                // 회원 가입정보 insert 
                var query2 =
                    db.query('insert into users (fname, lname, email, password, gender, year, month, day) values ("' + fname + '","' + lname + '","' + email + '","' + password + '","' + gender + '","' + year + '","' + month + '","' + day + '")',
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

// 로그인 폼에서 넘어온 post값을 받는 부분 
app.post("/login", function(req, res) {
    var body = req.body;
    var email = body.email;
    var password = body.pw; 
    // db에 post로 넘어온 이메일 존재 여부 
    var sql = 'SELECT * FROM users WHERE email=?'; 
    db.query(sql, [email], function(err, results) {
        if(err) {
            console.log(err);
        } 

        // 이메일이 존재하지 않을 때 
        if(!results[0]) {
            res.send(`<script type="text/javascript">alert("이메일 및 패스워드를 확인해 주세요.");window.location="/";</script>`);     
        } else {
            db.query('SELECT password FROM users WHERE email=?',[email], function(err, rows, data) {
                if(err) {
                    console.log(err);
                } else {
                    // 비밀번호 매칭 
                    if(password === rows[0].password) {
                        res.send('ok');
                    } else {
                        res.send('fail');
                    }
                }
            });
        }
    });
});


app.listen(3000, function () {
    console.log('Success');
});