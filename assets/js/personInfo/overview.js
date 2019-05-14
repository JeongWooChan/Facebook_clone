const personInfo = document.getElementById("personInfo_contents");
// 탭 메뉴 
const menu1 = document.getElementById("personInfo_infoWrap_menu1");
const menu2 = document.getElementById("personInfo_infoWrap_menu2");
const menu3 = document.getElementById("personInfo_infoWrap_menu3");
const menu4 = document.getElementById("personInfo_infoWrap_menu4");
const menu5 = document.getElementById("personInfo_infoWrap_editInfo"); 
const menu6 = document.getElementById("perwsonInfo_infoWrap_changeProfile");

// 탭 메뉴별 내용 
const menu1Block = document.getElementById("personInfo_content_menu1");
const menu2Block = document.getElementById("personInfo_content_menu2");
const menu3Block = document.getElementById("personInfo_content_menu3");
const menu4Block = document.getElementById("personInfo_content_menu4");
const menu5Block = document.getElementById("personInfo_content_changePassword");
const menu6Block = document.getElementById("personInfo_content_changeProfileImg");

// 직장
const addWorkspace = document.getElementById("personInfo_menu1_workspace");
const workspaceEditBtn = document.getElementById("menu1_workspace_edit");
// 대학교  
const addSchool = document.getElementById("personInfo_menu1_school");
const universityEditBtn = document.getElementById("menu1_university_edit");
// 거주지 추가 
const addLive = document.getElementById("personInfo_menu1_live"); 


// 연락처 추가 
const addPhone = document.getElementById("personInfo_menu1_phoneAdd");
// 연락처 수정 
const editPhone = document.getElementById("personInfo_menu1_phoneEdit");
// 생일 수정 
const editBirthday = document.getElementById("personInfo_menu1_birthdayEdit");
// 거주지 수정 
const editResidence = document.getElementById("menu1_residence_edit");
// 출신지 수정 
const editHometown = document.getElementById("menu1_hometown_edit");

// dropdown 아이콘 
const personInfo_infoWrap_menu = document.getElementById("personInfo_infoWrap_menu");
const menu1_dropdown = document.getElementById("menu1_dropdown"); 
const menu2_dropdown = document.getElementById("menu2_dropdown"); 
const menu3_dropdown = document.getElementById("menu3_dropdown"); 
const menu4_dropdown = document.getElementById("menu4_dropdown"); 
const menu5_dropdown = document.getElementById("menu5_dropdown"); 
const menu6_dropdown = document.getElementById("menu6_dropdown"); 

let curruentPage = 1; 

const mqHandleMenu6 = () => {
    menu1.style.display = "block";
    menu2.style.display = "block";
    menu3.style.display = "block";
    menu4.style.display = "block";
    menu5.style.display = "block";

    menu1.style.paddingLeft = "40px";
    menu2.style.paddingLeft = "40px";
    menu3.style.paddingLeft = "40px";
    menu4.style.paddingLeft = "40px";
    menu5.style.paddingLeft = "40px";
    menu6.style.paddingLeft = "90px";
}

const mqHandleMenu5 = () => {
    menu1.style.display = "block";
    menu2.style.display = "block";
    menu3.style.display = "block";
    menu4.style.display = "block";
    menu6.style.display = "block";


    menu1.style.paddingLeft = "40px";
    menu2.style.paddingLeft = "40px";
    menu3.style.paddingLeft = "40px";
    menu4.style.paddingLeft = "40px";
    menu5.style.paddingLeft = "90px";
    menu6.style.paddingLeft = "40px";
}

const mqHandleMenu4 = () => {
    menu1.style.display = "block";
    menu2.style.display = "block";
    menu3.style.display = "block";
    menu5.style.display = "block";
    menu6.style.display = "block";

    menu1.style.paddingLeft = "40px";
    menu2.style.paddingLeft = "40px";
    menu3.style.paddingLeft = "40px";
    menu4.style.paddingLeft = "90px";
    menu5.style.paddingLeft = "40px";
    menu6.style.paddingLeft = "40px";
}

const mqHandleMenu3 = () => {
    menu1.style.display = "block";
    menu2.style.display = "block";
    menu4.style.display = "block";
    menu5.style.display = "block";
    menu6.style.display = "block";

    menu1.style.paddingLeft = "40px";
    menu2.style.paddingLeft = "40px";
    menu3.style.paddingLeft = "90px";
    menu4.style.paddingLeft = "40px";
    menu5.style.paddingLeft = "40px";
    menu6.style.paddingLeft = "40px";
}

const mqHandleMenu2 = () => {
    menu1.style.display = "block";
    menu3.style.display = "block";
    menu4.style.display = "block";
    menu5.style.display = "block";
    menu6.style.display = "block";

    menu1.style.paddingLeft = "40px";
    menu2.style.paddingLeft = "90px";
    menu3.style.paddingLeft = "40px";
    menu4.style.paddingLeft = "40px";
    menu5.style.paddingLeft = "40px";
    menu6.style.paddingLeft = "40px";
}

const mqHandleMenu1 = () => {
    menu2.style.display = "block";
    menu3.style.display = "block";
    menu4.style.display = "block";
    menu5.style.display = "block";
    menu6.style.display = "block";

    menu1.style.paddingLeft = "90px";
    menu2.style.paddingLeft = "40px";
    menu3.style.paddingLeft = "40px";
    menu4.style.paddingLeft = "40px";
    menu5.style.paddingLeft = "40px";
    menu6.style.paddingLeft = "40px";
}

const handleMenu1 = () => {
    curruentPage = 1; 

    menu1Block.style.display = "block";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";
    menu6Block.style.display = "none";

    if(!matchMedia("(max-width: 768px").matches) {
        // border 
        menu1.style.borderLeft = "4px solid black";
        menu2.style.borderLeft = "none"; 
        menu3.style.borderLeft = "none"; 
        menu4.style.borderLeft = "none"; 
        menu5.style.borderLeft = "none"; 
        menu6.style.borderLeft = "none"; 
    } else {
        menu1.style.display = "inline-block";
        menu2.style.display = "none";
        menu3.style.display = "none";
        menu4.style.display = "none";
        menu5.style.display = "none";
        menu6.style.display = "none";

        menu1_dropdown.style.display = "inline-block";
        menu2_dropdown.style.display = "none";
        menu3_dropdown.style.display = "none";
        menu4_dropdown.style.display = "none";
        menu5_dropdown.style.display = "none";
        menu6_dropdown.style.display = "none";
    }

    //font 
    menu1.style.color = "black";
    menu1.style.fontWeight = "bold";
    menu2.style.color = "#90949C";
    menu2.style.fontWeight = "normal";
    menu3.style.color = "#90949C";
    menu3.style.fontWeight = "normal";
    menu4.style.color = "#90949C";
    menu4.style.fontWeight = "normal";
    menu5.style.color = "#90949C";
    menu5.style.fontWeight = "normal";
    menu6.style.color = "#90949C";
    menu6.style.fontWeight = "normal";
}

const handleMenu2 = () => {
    curruentPage = 2;

    menu1Block.style.display = "none";
    menu2Block.style.display = "block";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";
    menu6Block.style.display = "none";

    if(!matchMedia("(max-width: 768px").matches) {
        // border 
        menu1.style.borderLeft = "none";
        menu2.style.borderLeft = "4px solid black"; 
        menu3.style.borderLeft = "none"; 
        menu4.style.borderLeft = "none"; 
        menu5.style.borderLeft = "none";
        menu6.style.borderLeft = "none";          
    } else {
        menu1.style.display = "none";
        menu2.style.display = "inline-block";
        menu3.style.display = "none";
        menu4.style.display = "none";
        menu5.style.display = "none";
        menu6.style.display = "none";

        menu1_dropdown.style.display = "none";
        menu2_dropdown.style.display = "inline-block";
        menu3_dropdown.style.display = "none";
        menu4_dropdown.style.display = "none";
        menu5_dropdown.style.display = "none";
        menu6_dropdown.style.display = "none";
    }

    //font 
    menu1.style.color = "#90949C";
    menu1.style.fontWeight = "normal";
    menu2.style.color = "black";
    menu2.style.fontWeight = "bold";
    menu3.style.color = "#90949C";
    menu3.style.fontWeight = "normal";
    menu4.style.color = "#90949C";
    menu4.style.fontWeight = "normal";
    menu5.style.color = "#90949C";
    menu5.style.fontWeight = "normal";
    menu6.style.color = "#90949C";
    menu6.style.fontWeight = "normal";
}

const handleMenu3 = () => {
    curruentPage = 3;

    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "block";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";
    menu6Block.style.display = "none";

    if(!matchMedia("(max-width: 768px").matches) {
        // border 
        menu1.style.borderLeft = "none";
        menu2.style.borderLeft = "none"; 
        menu3.style.borderLeft = "4px solid black"; 
        menu4.style.borderLeft = "none"; 
        menu5.style.borderLeft = "none"; 
        menu6.style.borderLeft = "none"; 
    } else {
        menu1.style.display = "none";
        menu2.style.display = "none";
        menu3.style.display = "inline-block";
        menu4.style.display = "none";
        menu5.style.display = "none";
        menu6.style.display = "none";

        menu1_dropdown.style.display = "none";
        menu2_dropdown.style.display = "none";
        menu3_dropdown.style.display = "inline-block";
        menu4_dropdown.style.display = "none";
        menu5_dropdown.style.display = "none";
        menu6_dropdown.style.display = "none";
    }
    
    //font 
    menu1.style.color = "#90949C";
    menu1.style.fontWeight = "normal";
    menu2.style.color = "#90949C";
    menu2.style.fontWeight = "normal";
    menu3.style.color = "black";
    menu3.style.fontWeight = "bold";
    menu4.style.color = "#90949C";
    menu4.style.fontWeight = "normal";
    menu5.style.color = "#90949C";
    menu5.style.fontWeight = "normal";
    menu6.style.color = "#90949C";
    menu6.style.fontWeight = "normal";
}

const handleMenu4 = () => {
    curruentPage = 4;

    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "block";
    menu5Block.style.display = "none";
    menu6Block.style.display = "none";

    if(!matchMedia("(max-width: 768px").matches) {
        // border 
        menu1.style.borderLeft = "none";
        menu2.style.borderLeft = "none"; 
        menu3.style.borderLeft = "none"; 
        menu4.style.borderLeft = "4px solid black"; 
        menu5.style.borderLeft = "none"; 
        menu6.style.borderLeft = "none"; 
    } else {
        menu1.style.display = "none";
        menu2.style.display = "none";
        menu3.style.display = "none";
        menu4.style.display = "inline-block";
        menu5.style.display = "none";
        menu6.style.display = "none";

        menu1_dropdown.style.display = "none";
        menu2_dropdown.style.display = "none";
        menu3_dropdown.style.display = "none";
        menu4_dropdown.style.display = "inline-block";
        menu5_dropdown.style.display = "none";
        menu6_dropdown.style.display = "none";
    }

    //font 
    menu1.style.color = "#90949C";
    menu1.style.fontWeight = "normal";
    menu2.style.color = "#90949C";
    menu2.style.fontWeight = "normal";
    menu3.style.color = "#90949C";
    menu3.style.fontWeight = "normal";
    menu4.style.color = "black";
    menu4.style.fontWeight = "bold";
    menu5.style.color = "#90949C";
    menu5.style.fontWeight = "normal";
    menu6.style.color = "#90949C";
    menu6.style.fontWeight = "normal";
}

const handleMenu5 = () => {
    curruentPage = 5;

    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "block";
    menu6Block.style.display = "none";

    // mediaquery의 max-width 값이 768이 아닐때만 메뉴 옆에 border를 만들어줌 
    if(!matchMedia("(max-width: 768px").matches) {
        // border 
        menu1.style.borderLeft = "none";
        menu2.style.borderLeft = "none"; 
        menu3.style.borderLeft = "none"; 
        menu4.style.borderLeft = "none"; 
        menu5.style.borderLeft = "4px solid black"; 
        menu6.style.borderLeft = "none"; 
    } else {
        menu1.style.display = "none";
        menu2.style.display = "none";
        menu3.style.display = "none";
        menu4.style.display = "none";
        menu5.style.display = "inline-block";
        menu6.style.display = "none";

        menu1_dropdown.style.display = "none";
        menu2_dropdown.style.display = "none";
        menu3_dropdown.style.display = "none";
        menu4_dropdown.style.display = "none";
        menu5_dropdown.style.display = "inline-block";
        menu6_dropdown.style.display = "none";
    }

    //font 
    menu1.style.color = "#90949C";
    menu1.style.fontWeight = "normal";
    menu2.style.color = "#90949C";
    menu2.style.fontWeight = "normal";
    menu3.style.color = "#90949C";
    menu3.style.fontWeight = "normal";
    menu4.style.color = "#90949C";
    menu4.style.fontWeight = "normal";
    menu5.style.color = "black";
    menu5.style.fontWeight = "bold";
    menu6.style.color = "#90949C";
    menu6.style.fontWeight = "normal";
}

const handleMenu6 = () => {
    curruentPage = 6;

    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";
    menu6Block.style.display = "block";

    // mediaquery의 max-width 값이 768이 아닐때만 메뉴 옆에 border를 만들어줌 
    if(!matchMedia("(max-width: 768px").matches) {
        // border 
        menu1.style.borderLeft = "none";
        menu2.style.borderLeft = "none"; 
        menu3.style.borderLeft = "none"; 
        menu4.style.borderLeft = "none"; 
        menu5.style.borderLeft = "none"; 
        menu6.style.borderLeft = "4px solid black"; 
    } else {
        menu1.style.display = "none";
        menu2.style.display = "none";
        menu3.style.display = "none";
        menu4.style.display = "none";
        menu5.style.display = "none";
        menu6.style.display = "inline-block";

        menu1_dropdown.style.display = "none";
        menu2_dropdown.style.display = "none";
        menu3_dropdown.style.display = "none";
        menu4_dropdown.style.display = "none";
        menu5_dropdown.style.display = "none";
        menu6_dropdown.style.display = "inline-block";
    }

    //font 
    menu1.style.color = "#90949C";
    menu1.style.fontWeight = "normal";
    menu2.style.color = "#90949C";
    menu2.style.fontWeight = "normal";
    menu3.style.color = "#90949C";
    menu3.style.fontWeight = "normal";
    menu4.style.color = "#90949C";
    menu4.style.fontWeight = "normal";
    menu5.style.color = "#90949C";
    menu5.style.fontWeight = "normal";
    menu6.style.color = "black";
    menu6.style.fontWeight = "bold";
}

const onResize = () => {
    if(matchMedia("(max-width: 768px)").matches) {
        menu1.style.borderLeft = "none";
        menu2.style.borderLeft = "none"; 
        menu3.style.borderLeft = "none"; 
        menu4.style.borderLeft = "none"; 
        menu5.style.borderLeft = "none"; 
        menu6.style.borderLeft = "none"; 

        menu2.style.display = "none";
    } else if (matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
        menu1.style.display = "block";
        menu2.style.display = "block";
        menu3.style.display = "block";
        menu4.style.display = "block";
        menu5.style.display = "block";
        menu6.style.display = "block";

        menu1_dropdown.style.display = "none";
        menu2_dropdown.style.display = "none";
        menu3_dropdown.style.display = "none";
        menu4_dropdown.style.display = "none";
        menu5_dropdown.style.display = "none"; 
        menu6_dropdown.style.display = "none"; 

        menu1.style.paddingLeft = "40px";
        menu2.style.paddingLeft = "40px";
        menu3.style.paddingLeft = "40px";
        menu4.style.paddingLeft = "40px";
        menu5.style.paddingLeft = "40px";
        menu6.style.paddingLeft = "40px";
    } 
    if(curruentPage == 1) {
        handleMenu1();
    } else if (curruentPage == 2) {
        handleMenu2();
    } else if (curruentPage == 3) {
        handleMenu3();
    } else if (curruentPage == 4) {
        handleMenu4(); 
    } else if (curruentPage == 5) {
        handleMenu5(); 
    } else if (curruentPage == 6) {
        handleMenu6();
    }
}

const init = () => {
    // 탭 메뉴 클릭 이벤트 
    menu1.addEventListener("click", handleMenu1);
    menu2.addEventListener("click", handleMenu2);
    menu3.addEventListener("click", handleMenu3);
    menu4.addEventListener("click", handleMenu4);
    if(menu5) {
        menu5.addEventListener("click", handleMenu5);
        menu6.addEventListener("click", handleMenu6);
    }


    // 직장 추가 클릭 이벤트 
    if(addWorkspace) {
        addWorkspace.addEventListener("click", handleMenu2); 
    } else {
        workspaceEditBtn.addEventListener("click", handleMenu2);
    }
    
    // 학교 클릭 이벤트 
    if(addSchool) {
        addSchool.addEventListener("click", handleMenu2); 
    } else {
        universityEditBtn.addEventListener("click", handleMenu2);
    }
    
    // 거주지 클릭 이벤트
    if(editResidence) {
        editResidence.addEventListener("click", handleMenu3);
    } else if(editHometown) {
        editHometown.addEventListener("click", handleMenu3);
    } else {
        addLive.addEventListener("click", handleMenu3); 
    }
    
    if(addPhone) {
        // 연락처 추가 클릭 이벤트 
        addPhone.addEventListener("click", handleMenu4); 
    } else {
        // 연락처 수정 클릭 이벤트 
        editPhone.addEventListener("click", handleMenu4);
    }

    // 생일 수정 클릭 이벤트 
    editBirthday.addEventListener("click", handleMenu4); 

    // dropdown 
    menu1_dropdown.addEventListener("click", mqHandleMenu1);
    menu2_dropdown.addEventListener("click", mqHandleMenu2);
    menu3_dropdown.addEventListener("click", mqHandleMenu3);
    if(menu4_dropdown) {
        menu4_dropdown.addEventListener("click", mqHandleMenu4);
        menu5_dropdown.addEventListener("click", mqHandleMenu5);
    }
    window.addEventListener("resize", onResize);
}

if(personInfo) {
    init();
}