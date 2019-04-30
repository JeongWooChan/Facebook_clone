const personInfo_content_menu4 = document.getElementById("personInfo_content_menu4"); 

// 연락처 추가 
const personInfo_menu4_phoneAdd = document.getElementById("personInfo_menu4_phoneInfo_Add");
// 수정 
const personInfo_menu4_phoneInfo_show = document.getElementById("personInfo_menu4_phoneInfo_show");
const personInfo_menu4_phoneInfo_edit = document.getElementById("personInfo_menu4_phoneInfo_edit");
const personInfo_menu4_phoneInfo_editForm = document.getElementById("personInfo_menu4_phoneInfo_editForm");

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
const personInfo_menu4_phoneForm_editFormcancel = document.getElementById("personInfo_menu4_phoneForm_editFormcancel");

// 연락처 수정 form 
const editForm = document.getElementById("phoneInfo_editForm");
const editForm_first = document.getElementById("phoneInfo_editForm_first");
const editForm_second = document.getElementById("phoneInfo_editForm_second"); 
const editForm_third = document.getElementById("phoneInfo_editForm_third"); 

// 연락처 추가 form 
const personInfo_menu4_phoneForm = document.getElementById("personInfo_menu4_phoneInfo_addForm");
const addForm = document.getElementById("phoneInfo_addForm");
const addForm_first = document.getElementById("phoneInfo_addForm_first"); 
const addForm_second = document.getElementById("phoneInfo_addForm_second");
const addForm_third = document.getElementById("phoneInfo_addForm_third");

const checkInput2 = () => {
    // 비어 있는 값이 있으면 false를 리턴해 준다. 
    if(addForm_first.value=="" || addForm_second.value =="" || addForm_third.value =="") {
        alert("비어있는 입력란이 있습니다.");
        return false;  
    }
}

const checkInput = () => {
    // 비어 있는 값이 있으면 false를 리턴해 준다. 
    if(editForm_first.value=="" || editForm_second.value =="" || editForm_third.value =="") {
        alert("비어있는 입력란이 있습니다.");
        return false;  
    }
}

const showPhoneAddForm = () => {
    personInfo_menu4_phoneAdd.style.display = "none"; 
    personInfo_menu4_phoneForm.style.display = "block";
}

const showPhoneEditForm = () => {
    personInfo_menu4_phoneInfo_show.style.display = "none"; 
    personInfo_menu4_phoneInfo_editForm.style.display = "block";
    personInfo_menu4_phoneInfo_edit.style.display = "none";
}

const cancelPhoneAddForm = () => {
    personInfo_menu4_phoneAdd.style.display = "block"; 
    personInfo_menu4_phoneForm.style.display = "none";
}

const cancelPhoneEditForm = () => {
    personInfo_menu4_phoneInfo_show.style.display = "block"; 
    personInfo_menu4_phoneInfo_editForm.style.display = "none";
    personInfo_menu4_phoneInfo_edit.style.display = "block";
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
    if(personInfo_menu4_phoneInfo_show) {
        personInfo_menu4_phoneInfo_edit.addEventListener("click", showPhoneEditForm);
        personInfo_menu4_phoneForm_editFormcancel.addEventListener("click", cancelPhoneEditForm);
    }else {
        personInfo_menu4_phoneAdd.addEventListener("click", showPhoneAddForm); 
        personInfo_menu4_phoneForm_cancel.addEventListener("click", cancelPhoneAddForm);
    }
   
    personInfo_birthdayEditBtn.addEventListener("click", showEditBirthday);
    personinfo_birthdayEdit_cancel.addEventListener("click", cancelEditBirthday); 

    personInfo_genderEditBtn.addEventListener("click", showEditGenderForm);
    personInfo_menu4_genderForm_cancel.addEventListener("click", cancelEditGender);

    personInfo_addBlood.addEventListener("click", showEditBlood); 
    personInfo_bloodEdit_cancel.addEventListener("click", cancelEditBlood); 

    if(editForm) {
        editForm.addEventListener("submit", checkInput);
    } else {
        addForm.addEventListener("submit", checkInput2);
    }
    
}

if(personInfo_content_menu4) {
    init(); 
}