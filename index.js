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

    var query = db.query('SELECT * FROM users WHERE email=?', email, function (err, data) {
        if (err) {
            console.log(err);
        } else {
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
    })



});

app.listen(3000, function () {
    console.log('Success');
});