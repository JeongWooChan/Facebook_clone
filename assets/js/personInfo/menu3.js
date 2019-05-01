const personInfo_content_menu3 = document.getElementById("personInfo_content_menu3");

// 거주지 
const residenceAdd = document.getElementById("personInfo_menu3_residenceAdd"); 
const residenceAddFormDiv = document.getElementById("personInfo_menu3_residenceAddFormDiv");
const residence_editBtn = document.getElementById("residence_edit"); 
const showResidence = document.getElementById("residence_showDiv"); 
const residenceEditFormDiv = document.getElementById("personInfo_menu3_residenceEditFormDiv");
const residenceEditForm = document.getElementById("personInfo_residenceEditForm_form");
const residenceEditInput = document.getElementById("personInfo_residenceEditform_residence");
const residenceAddForm = document.getElementById("personInfo_residenceAddForm_form"); 
const residenceAddInput = document.getElementById("personInfo_residenceAddform_residence");

// 출신지 
const hometownAdd = document.getElementById("personInfo_menu3_hometownAdd"); 
const hometownAddFormDiv = document.getElementById("personInfo_menu3_hometownAddFormDiv");
const showHometown = document.getElementById("hometown_showDiv"); 
const hometownEditBtn = document.getElementById("hometown_edit");
const hometownEditFormDiv = document.getElementById("personInfo_menu3_hometownEditFormDiv");
const hometownEditForm = document.getElementById("personInfo_hometownEditForm_form"); 
const hometownEditInput = document.getElementById("personInfo_hometownEditform_hometown");
const hometownAddForm = document.getElementById("personInfo_hometownAddForm_form");
const hometownAddInput = document.getElementById("personInfo_hometownAddform_hometown");

// 취소버튼 
const residenceAddForm_cancel = document.getElementById("personInfo_residenceAddform_cancel");
const hometownAddForm_cancel = document.getElementById("personInfo_hometownAddform_cancel");
const editCancel = document.getElementById("personInfo_residenceEditform_cancel");
const hometownEditForm_cancel = document.getElementById("personInfo_hometownEditform_cancel");


const checkInput_hometownAdd = event => {
    event.preventDefault();

    if(hometownAddInput.value == "") {
        alert("출신지를 입력해주세요"); 
        hometownAddInput.focus(); 
        return false; 
    } else {
        hometownAddForm.submit();
    }
}

const checkInput_hometownEdit = (event) => {
    event.preventDefault(); 
    if(hometownEditInput.value == "") {
        alert("출신지를 입력해주세요"); 
        hometownEditInput.focus(); 
        return false; 
    } else {
        hometownEditForm.submit();
    }
}

const hometownEditFormCancel = () => {
    showHometown.style.display = "block"; 
    hometownEditFormDiv.style.display = "none";
}

const showHometownEditForm = () => {
    showHometown.style.display = "none"; 
    hometownEditFormDiv.style.display = "block";
}

const checkInput2 = (event) => {
    event.preventDefault();

    if(residenceAddInput.value=="") {
        alert("거주지를 입력해주세요"); 
        residenceAddInput.focus();
        return false; 
    } else {
        residenceAddForm.submit();
    }
}

const checkInput = (event)  => {
    event.preventDefault();

    if(residenceEditInput.value=="") {
        alert("거주지를 입력해주세요");
        return false; 
    } else {
        residenceEditForm.submit();
    }
}

const cancelEditForm = () => {
    residenceEditFormDiv.style.display = "none"; 
    showResidence.style.display = "block";
}

const showEditForm = () => {
    residenceEditFormDiv.style.display = "block"; 
    showResidence.style.display = "none";
}

const AddResidenceFunction = () => {
    residenceAdd.style.display = "none"; 
    residenceAddFormDiv.style.display = "block";
}

const residenceDivCancel = () => {
    residenceAdd.style.display = "block"; 
    residenceAddFormDiv.style.display = "none";
}

const AddHometownFunction = () => {
    hometownAdd.style.display = "none"; 
    hometownAddFormDiv.style.display = "block";
}

const hometownDivCancel = () => {
    hometownAdd.style.display = "block"; 
    hometownAddFormDiv.style.display = "none";
}

const init = () => {
    // 거주지 클릭 이벤트 
    if(showResidence) {
        residence_editBtn.addEventListener("click", showEditForm); 
        editCancel.addEventListener("click", cancelEditForm);
        residenceEditForm.addEventListener("submit", checkInput);
    } else {
        residenceAdd.addEventListener("click", AddResidenceFunction); 
        residenceAddForm_cancel.addEventListener("click", residenceDivCancel);
        residenceAddForm.addEventListener("submit", checkInput2); 
    }
    
    // 출신지 클릭 이벤트 
    if(showHometown) {
        hometownEditBtn.addEventListener("click", showHometownEditForm);
        hometownEditForm_cancel.addEventListener("click", hometownEditFormCancel)
        hometownEditForm.addEventListener("submit", checkInput_hometownEdit);
    } else {
        hometownAdd.addEventListener("click", AddHometownFunction); 
        hometownAddForm_cancel.addEventListener("click", hometownDivCancel);
        hometownAddForm.addEventListener("submit", checkInput_hometownAdd);
    }
}

if(personInfo_content_menu3) {
    init(); 
}