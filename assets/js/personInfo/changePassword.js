import axios from "axios"; 

const personInfo_content_changePassword = document.getElementById("personInfo_content_changePassword"); 

const personInfo_changePassword_form = document.getElementById("personInfo_changePassword_form");
const personInfo_currentPassword = document.getElementById("personInfo_changePassword_now");
const personInfo_newPassword = document.getElementById("personInfo_changePassword_change");
const personInfo_newPassword_confirm = document.getElementById("personInfo_changePassword_confirm"); 

const confirm_success = document.getElementById("personInfo_changePassword_success");
const confirm_fail = document.getElementById("personInfo_changePassword_fail");
// 비밀번호 정규식 ( 영문, 숫자, 특수문자 조합, 8~16자리 ) 
const chk_password = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;

let responseStatus;

const handleSubmit = () => {
    personInfo_changePassword_form.submit(); 
}

const passwordCheck = async () => {
    // 현재 비밀번호 확인 
    const password = personInfo_currentPassword.value; 
    const response = await axios({
        url: '/api/checkPassword',
        method: "POST",
        data: {
            password
        }
    }); 
    responseStatus = response.status; 
}

const passwordConfirm = () => {
    if(personInfo_newPassword_confirm.value != personInfo_newPassword.value) {
        confirm_fail.style.display="block";
        confirm_success.style.display="none";
        personInfo_newPassword_confirm.focus();
        return false;
    }else {
        confirm_fail.style.display="none";
        confirm_success.style.display="block";
    }
}

const handleValidate = (event) => {
    event.preventDefault(); 

    // 새로운 비밀번호 정규식 검사 
    if(chk_password.test(personInfo_newPassword.value) == false) {
        alert("영문, 숫자, 특수문자를 조합하여 8~16자리를 입력해 주세요."); 
        personInfo_newPassword.focus(); 
        return false; 
    }

    if(responseStatus != 200) {
        alert("현재 비밀번호를 확인해 주세요"); 
        personInfo_currentPassword.focus(); 
        return false; 
    }

    // 새로운 비밀번호 확인 일치 검사
    if(personInfo_newPassword_confirm.value != personInfo_newPassword.value) {
        personInfo_newPassword_confirm.focus();
        return false;
    }

    handleSubmit();
}

const init = () => {
    personInfo_changePassword_form.addEventListener("submit", handleValidate);
    personInfo_newPassword_confirm.addEventListener("input", passwordConfirm); 
    personInfo_currentPassword.addEventListener("input", passwordCheck); 
}

if(personInfo_content_changePassword) {
    init(); 
}