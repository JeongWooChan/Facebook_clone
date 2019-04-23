import axios from "axios";

const signUpForm = document.getElementById("signUp_form"); 
const signUpPassword = document.getElementById("signUp_pw");
const signUpYear = document.getElementById("select_year");
const signUpMonth = document.getElementById("select_month"); 
const signUpDay = document.getElementById("select_day"); 
const signUpBoy = document.getElementById("chk_boy"); 
const signUpGirl = document.getElementById("chk_girl");
const signUpEmail = document.getElementById("signUp_email"); 
const emailCheckText = document.getElementById("login_email_validate");

// 비밀번호 정규식 ( 영문, 숫자, 특수문자 조합, 8~16자리 ) 
const chk_password = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;

let responseStatus;
const handleEmailCheck = async () => {
    // 이메일 중복 검사 
    const email = signUpEmail.value;
    const response = await axios({
        url: 'api/email_check', 
        method: "POST", 
        data: {
            email
        }
    }); 
    responseStatus = response.status;
    if(responseStatus == 200) {
        // 중복이 아닐 때 
        emailCheckText.style.display = "none";
    }else {
        // 중복일 때 
        emailCheckText.style.display = "block";
        emailCheckText.innerText = "❌ 중복된 이메일 입니다."; 
        emailCheckText.style.color = "red";
    }
}

const handleSubmit = () => {
    signUpForm.submit();
}

const handleValidate = async (event) => {
    event.preventDefault();

    // 비밀번호 정규식 검사 
    if(chk_password.test(signUpPassword.value) == false) {
        alert("영문, 숫자, 특수문자를 조합하여 8~16자리를 입력해 주세요."); 
        signUpPassword.focus();
        return false;
    }

    // 생일 입력 검사 
    if(signUpYear.value == 0 || signUpMonth.value == 0 || signUpDay.value == 0) {
        alert("생년월일을 입력해주세요"); 
        signUpYear.focus();
        return false; 
    }

    // 성별 입력 검사 
    if(signUpBoy.value == null && signUpGirl.value == null) {
        alert("성별을 입력해주세요."); 
        return false;
    }
    
    if(responseStatus != 200) {
        alert("중복된 이메일입니다."); 
        signUpEmail.focus();
        return false; 
    } else {
        handleSubmit();
    }
}

const init = () => {
    signUpForm.addEventListener("submit", handleValidate);
    signUpEmail.addEventListener("input", handleEmailCheck); 
}

if(signUpForm) {
    init();
}
