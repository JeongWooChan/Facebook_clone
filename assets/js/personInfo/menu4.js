const personInfo_content_menu4 = document.getElementById("personInfo_content_menu4"); 

// 연락처 추가 
const personInfo_menu4_phoneAdd = document.getElementById("personInfo_menu4_phoneInfo_Add");
// 수정 
const personInfo_menu4_phoneInfo_show = document.getElementById("personInfo_menu4_phoneInfo_show");
const personInfo_menu4_phoneInfo_edit = document.getElementById("personInfo_menu4_phoneInfo_edit");
const personInfo_menu4_phoneInfo_editForm = document.getElementById("personInfo_menu4_phoneInfo_editForm");
const deletePhoneForm = document.getElementById("delete_phoneForm");

// 생일 
const personInfo_showBirthday = document.getElementById("personInfo_showBirthday"); 
const personInfo_editBirthday = document.getElementById("personInfo_editBirthday"); 
const personInfo_birthdayEditBtn = document.getElementById("personInfo_birthdayEdit");

// 혈액형 
// 추가 
const personInfo_addBlood = document.getElementById("personInfo_addBlood");
const personInfo_addBloodForm = document.getElementById("personInfo_addBloodFormDiv");
// 수정 
const editBloodBtn = document.getElementById("personInfo_editBlood"); 
const showBlood = document.getElementById("personInfo_showBloodDiv"); 
const editBloodForm = document.getElementById("personInfo_editBloodFormDiv"); 
const deleteBloodTypeForm = document.getElementById("delete_bloodTypeForm");


// 취소 
const personInfo_menu4_phoneForm_cancel = document.getElementById("personInfo_menu4_phoneForm_cancel");
const personinfo_birthdayEdit_cancel = document.getElementById("personInfo_editBirthday_cancel");
const personInfo_menu4_genderForm_cancel = document.getElementById("personInfo_menu4_editGenderCancel");
const personInfo_bloodAdd_cancel = document.getElementById("personInfo_menu4_addBloodCancel");
const personInfo_menu4_phoneForm_editFormcancel = document.getElementById("personInfo_menu4_phoneForm_editFormcancel");
const personInfo_editBlood_cancel = document.getElementById("personInfo_menu4_editBloodCancel");

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


const checkDeleteBlood = event => {
    event.preventDefault();

    let check = confirm("혈액형 정보를 삭제하시겠습니까?"); 
    if(check == true) {
        deleteBloodTypeForm.submit();
    } else {
        return false;
    }
}

const checkDeletePhone = event => {
    event.preventDefault();

    let check = confirm("휴대전화 정보를 삭제하시겠습니까?"); 
    if(check == true) {
        deletePhoneForm.submit();
    } else {
        return false;
    }
}

const cancelEditBlood = () => {
    showBlood.style.display = "block"; 
    editBloodForm.style.display = "none";
}

const showEditBloodForm = () => {
    showBlood.style.display = "none"; 
    editBloodForm.style.display = "block";
}


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
    deletePhoneForm.style.display="none";
}

const cancelPhoneAddForm = () => {
    personInfo_menu4_phoneAdd.style.display = "block"; 
    personInfo_menu4_phoneForm.style.display = "none";
    deletePhoneForm.style.display="block";
    
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
    personInfo_addBloodForm.style.display = "block";
}

const cancelAddBlood = () => {
    personInfo_addBlood.style.display = "block"; 
    personInfo_addBloodForm.style.display = "none";
}

const init = () => {
    if(personInfo_menu4_phoneInfo_show) {
        personInfo_menu4_phoneInfo_edit.addEventListener("click", showPhoneEditForm);
        personInfo_menu4_phoneForm_editFormcancel.addEventListener("click", cancelPhoneEditForm);
        deletePhoneForm.addEventListener("submit", checkDeletePhone);
    }else {
        personInfo_menu4_phoneAdd.addEventListener("click", showPhoneAddForm); 
        personInfo_menu4_phoneForm_cancel.addEventListener("click", cancelPhoneAddForm);
    }
   
    personInfo_birthdayEditBtn.addEventListener("click", showEditBirthday);
    personinfo_birthdayEdit_cancel.addEventListener("click", cancelEditBirthday); 

    if(editForm) {
        editForm.addEventListener("submit", checkInput);
    } else {
        addForm.addEventListener("submit", checkInput2);
    }

    //혈액형 event 
    if(showBlood) {
        editBloodBtn.addEventListener("click", showEditBloodForm);
        personInfo_editBlood_cancel.addEventListener("click", cancelEditBlood);
        deleteBloodTypeForm.addEventListener("submit", checkDeleteBlood)
    } else {
        personInfo_addBlood.addEventListener("click", showEditBlood); 
        personInfo_bloodAdd_cancel.addEventListener("click", cancelAddBlood); 
    }
}

if(personInfo_content_menu4) {
    init(); 
}