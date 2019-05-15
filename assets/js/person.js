import axios from "axios"; 

const person = document.getElementById("person_contents"); 

////////////////////////// 소개 //////////////////////////////////////
// 추가 Div 
const addIntroduceDiv = document.getElementsByClassName("person_introduce_add"); 
const addIntroduceBtn = document.getElementsByClassName("person_add_add"); 
// textarea Div 
const textAreaDiv = document.getElementsByClassName("person_introduce_textarea");
const textAreaCancel = document.getElementById("introduce_textarea_cancel"); 
const textArea = document.getElementById("introduce_textarea");
const textAreaForm = document.querySelector(".person_introduce_textarea form");

// textDiv 
const textDiv = document.getElementsByClassName("person_introduce_textDiv");
const textP = document.getElementById("person_introduce_textP");

// 수정 Div 
const editIntroduceBtn = document.getElementById("person_introduce_editBtn"); 
const editTextareaDiv = document.getElementsByClassName("person_introduce_editTextarea");
const editTextArea = document.getElementById("introduce_editTextarea");
const editTextAreaCancel = document.getElementById("introduce_Edittextarea_cancel");
const editTextAreaForm = document.querySelector(".person_introduce_editTextarea form");



const showEditText = text => {
    editTextareaDiv[0].style.display = "none";
    textDiv[0].style.display = "block"; 

    textP.innerHTML = text;
}

let check2;

const editCheckword = () => {
    let value = editTextArea.value; 
    if(value.length > 30) {
        alert("30자를 초과할 수 없습니다.");
        check2 = 1; 
    } else {
        check2 = 0;
    }
}

const submitEditTextArea = async e => {
    e.preventDefault(); 

    const textAreaInput = editTextArea.value; 
    if(check2 == 1) {
        alert("글자수를 확인해 주세요");
        return false; 
    } else {
        const id = window.location.href.split("main/")[1];

        const response = await axios ({
            url: `/api/${id}/introduce`, 
            method: 'post', 
            data: {
                textAreaInput, 
                id
            }
        }); 
        if(response.status == 200) {
            showEditText(textAreaInput);
        }
    }
}

const cancelEditTextArea = () => {
    textDiv[0].style.display = "block";
    editTextareaDiv[0].style.display = "none";
}

const showEditTextarea = () => {
    textDiv[0].style.display = "none";
    editTextareaDiv[0].style.display = "block";

    editTextArea.focus();
}

const showText = text => {
    textAreaDiv[0].style.display = "none";
    textDiv[0].style.display = "block"; 

    textP.innerHTML = text;
}

// 글자수를 체크하기 위한 변수 
let check;

const checkWord = () => {
    let value = textArea.value; 
    if(value.length > 30) {
        alert("30자를 초과할 수 없습니다.");
        check = 1; 
    } else {
        check = 0;
    }
}

const submitTextarea = async e => {
    e.preventDefault(); 

    const textAreaInput = textArea.value; 
    if(check == 1) {
        alert("글자수를 확인해 주세요");
        return false; 
    } else {
        const id = window.location.href.split("main/")[1];

        const response = await axios ({
            url: `/api/${id}/introduce`, 
            method: 'post', 
            data: {
                textAreaInput, 
                id
            }
        }); 
        if(response.status == 200) {
            showText(textAreaInput);
        }
    }
}

const cancelTextarea = () => {
    addIntroduceDiv[0].style.display = "block"; 
    textAreaDiv[0].style.display = "none";
}

const showTextarea = () => {
    addIntroduceDiv[0].style.display = "none"; 
    textAreaDiv[0].style.display = "block";
}

const init = () => {
    if(addIntroduceBtn[0]) {
        addIntroduceBtn[0].addEventListener("click", showTextarea); 
        textAreaCancel.addEventListener("click", cancelTextarea); 
        textAreaForm.addEventListener("submit", submitTextarea);
        textArea.addEventListener("keyup", checkWord);
    }
    if(editIntroduceBtn) {
        editIntroduceBtn.addEventListener("click", showEditTextarea); 
        editTextAreaCancel.addEventListener("click", cancelEditTextArea);
        editTextAreaForm.addEventListener("submit", submitEditTextArea);
        editTextArea.addEventListener("keyup", editCheckword);
    }
}

if(person) {
    init(); 
}