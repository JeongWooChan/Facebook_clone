const signUpForm = document.getElementById("signUp_form"); 
const signUpPassword = document.getElementById("signUp_pw");

// 비밀번호 정규식 ( 영문, 숫자, 특수문자 조합, 8~16자리 ) 
const chk_password = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;

const handletest = (event) => {
    event.preventDefault();
    if(chk_password.test(signUpPassword.value) == false) {
        alert("영문, 숫자, 특수문자를 조합하여 8~16자리를 입력해 주세요."); 
        signUpPassword.focus();
        return false;
    }
}

const init = () => {
    signUpForm.addEventListener("submit", handletest);
}

if(signUpForm) {
    init();
}
