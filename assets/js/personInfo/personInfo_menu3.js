const person_content_menu3 = document.getElementById("person_content_menu3");

// 거주지 
const residenceAdd = document.getElementById("person_menu3_residenceAdd"); 
const residenceAddFormDiv = document.getElementById("person_menu3_residenceAddFormDiv");
// 출신지 
const hometownAdd = document.getElementById("person_menu3_hometownAdd"); 
const hometownAddFormDiv = document.getElementById("person_menu3_hometownAddFormDiv");

// 취소버튼 
const residenceAddForm_cancel = document.getElementById("person_residenceAddform_cancel");
const hometownAddForm_cancel = document.getElementById("person_hometownAddform_cancel");

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
    residenceAdd.addEventListener("click", AddResidenceFunction); 
    residenceAddForm_cancel.addEventListener("click", residenceDivCancel);
    // 출신지 클릭 이벤트 
    hometownAdd.addEventListener("click", AddHometownFunction); 
    hometownAddForm_cancel.addEventListener("click", hometownDivCancel);
}

if(person_content_menu3) {
    init(); 
}