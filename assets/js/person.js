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


const showText = text => {
    textAreaDiv[0].style.display = "none";
    textDiv[0].style.display = "block"; 

    textP.innerHTML = text;
}

// 글자수를 체크하기 위한 변수 
let check;

const checkWord = () => {
    let value = textArea.value; 
    console.log(value.length);
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
}

if(person) {
    init(); 
}