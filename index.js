var express = require('express'); 
var app = express(); 
var mysql = require('mysql'); 
var bodyParser = require('body-parser'); 

// Database Setting
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'wjddncks!', 
    database : 'facebook'
}); 

// Database 연동 
connection.connect(); 

app.use(express.static('public'));

app.use(express.urlencoded({ extended:false }));

// 회원가입 폼에서 넘어온 post값을 받는 부분 
app.post("/", function(req,res) {
   var body = req.body; 
   var fname = body.fname; 
   var lname = body.name; 
   var email = body.phone; 
   var password = body.new_pw; 
   var gender = body.chk_gender; 

   // 회원 가입정보 insert 
   var query = connection.query('insert into users (fname, lname, email, password, gender) values ("' + fname + '","' + lname + '","' + email + '","' + password + '","' + gender + '")', function(err, rows) {
        if(err) {
            console.log(err); 
        } else {
            
        }
   });
});

app.listen(3000, function() { 
    console.log('Success');
});