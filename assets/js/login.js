const signUpForm = document.getElementById("signUp_form"); 
const signUpPassword = document.getElementById("signUp_pw");
const signUpYear = document.getElementById("select_year");
const signUpMonth = document.getElementById("select_month"); 
const signUpDay = document.getElementById("select_day"); 
const signUpGender = document.getElementsByName("chk_gender"); 

// 비밀번호 정규식 ( 영문, 숫자, 특수문자 조합, 8~16자리 ) 
const chk_password = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;

const handleSubmit = () => {
    signUpForm.submit();
}

const handleValidate = (event) => {
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
    if(signUpGender.value == null) {
        alert("성별을 입력해주세요."); 
        return false;
    }
    handleSubmit();
}

const init = () => {
    signUpForm.addEventListener("submit", handleValidate);
}

if(signUpForm) {
    init();
}
