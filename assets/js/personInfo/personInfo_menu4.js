const personInfo_content_menu4 = document.getElementById("personInfo_content_menu4"); 

// 연락처 추가 
const personInfo_menu4_phoneAdd = document.getElementById("personInfo_menu4_phoneInfo_Add");
const personInfo_menu4_phoneForm = document.getElementById("personInfo_menu4_phoneInfo_number");

// 생일 
const personInfo_showBirthday = document.getElementById("personInfo_showBirthday"); 
const personInfo_editBirthday = document.getElementById("personInfo_editBirthday"); 
const personInfo_birthdayEditBtn = document.getElementById("personInfo_birthdayEdit");

// 성별 
const personInfo_menu4_showGender = document.getElementById("personInfo_menu4_showGender");
const personInfo_menu4_editGender = document.getElementById("personInfo_menu4_editGender");
const personInfo_genderEditBtn = document.getElementById("personInfo_menu4_personGenderEdit"); 

// 혈액형 
const personInfo_addBlood = document.getElementById("personInfo_addBlood");
const personInfo_editBlood = document.getElementById("personInfo_editBlood");

// 취소 
const personInfo_menu4_phoneForm_cancel = document.getElementById("personInfo_menu4_phoneForm_cancel");
const personinfo_birthdayEdit_cancel = document.getElementById("personInfo_editBirthday_cancel");
const personInfo_menu4_genderForm_cancel = document.getElementById("personInfo_menu4_editGenderCancel");
const personInfo_bloodEdit_cancel = document.getElementById("personInfo_menu4_editBloodCancel");

const showPhoneAddForm = () => {
    personInfo_menu4_phoneAdd.style.display = "none"; 
    personInfo_menu4_phoneForm.style.display = "block";
}

const cancelPhoneAddForm = () => {
    personInfo_menu4_phoneAdd.style.display = "block"; 
    personInfo_menu4_phoneForm.style.display = "none";
}

const showEditGenderForm = () => {
    personInfo_menu4_showGender.style.display = "none"; 
    personInfo_menu4_editGender.style.display = "block"; 
}

const cancelEditGender = () => {
    personInfo_menu4_showGender.style.display = "block"; 
    personInfo_menu4_editGender.style.display = "none"; 
}

const showEditBirthday = () => {
    personInfo_showBirthday.style.display="none";
    personInfo_editBirthday.style.display="block";
}

const cancelEditBirthday = () => {
    personInfo_showBirthday.style.display="block";
    personInfo_editBirthday.style.display="none";
}

const showEditBlood = () => {
    personInfo_addBlood.style.display = "none"; 
    personInfo_editBlood.style.display = "block";
}

const cancelEditBlood = () => {
    personInfo_addBlood.style.display = "block"; 
    personInfo_editBlood.style.display = "none";
}

const init = () => {
    personInfo_menu4_phoneAdd.addEventListener("click", showPhoneAddForm); 
    personInfo_menu4_phoneForm_cancel.addEventListener("click", cancelPhoneAddForm);
    
    personInfo_birthdayEditBtn.addEventListener("click", showEditBirthday);
    personinfo_birthdayEdit_cancel.addEventListener("click", cancelEditBirthday); 

    personInfo_genderEditBtn.addEventListener("click", showEditGenderForm);
    personInfo_menu4_genderForm_cancel.addEventListener("click", cancelEditGender);

    personInfo_addBlood.addEventListener("click", showEditBlood); 
    personInfo_bloodEdit_cancel.addEventListener("click", cancelEditBlood); 
}

if(personInfo_content_menu4) {
    init(); 
}