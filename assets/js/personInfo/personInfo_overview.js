const personInfo = document.getElementById("personInfo_contents");
// 탭 메뉴 
const menu1 = document.getElementById("person_infoWrap_menu1");
const menu2 = document.getElementById("person_infoWrap_menu2");
const menu3 = document.getElementById("person_infoWrap_menu3");
const menu4 = document.getElementById("person_infoWrap_menu4");
const menu5 = document.getElementById("person_infoWrap_editInfo"); 

// 탭 메뉴별 내용 
const menu1Block = document.getElementById("person_content_menu1");
const menu2Block = document.getElementById("person_content_menu2");
const menu3Block = document.getElementById("person_content_menu3");
const menu4Block = document.getElementById("person_content_menu4");
const menu5Block = document.getElementById("person_content_changePassword");

// 직장 추가 
const addWorkspace = document.getElementById("person_menu1_workspace");
// 학교 추가 
const addSchool = document.getElementById("person_menu1_school");
// 거주지 추가 
const addLive = document.getElementById("person_menu1_live"); 

const handleMenu1 = () => {
    // display 
    menu1Block.style.display = "block";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";

    // border 
    menu1.style.borderLeft = "4px solid black";
    menu2.style.borderLeft = "none"; 
    menu3.style.borderLeft = "none"; 
    menu4.style.borderLeft = "none"; 
    menu5.style.borderLeft = "none"; 


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
}

const handleMenu2 = () => {
    menu1Block.style.display = "none";
    menu2Block.style.display = "block";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";

    // border 
    menu1.style.borderLeft = "none";
    menu2.style.borderLeft = "4px solid black"; 
    menu3.style.borderLeft = "none"; 
    menu4.style.borderLeft = "none"; 
    menu5.style.borderLeft = "none"; 


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
}

const handleMenu3 = () => {
    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "block";
    menu4Block.style.display = "none";
    menu5Block.style.display = "none";

    // border 
    menu1.style.borderLeft = "none";
    menu2.style.borderLeft = "none"; 
    menu3.style.borderLeft = "4px solid black"; 
    menu4.style.borderLeft = "none"; 
    menu5.style.borderLeft = "none"; 


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
}

const handleMenu4 = () => {
    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "block";
    menu5Block.style.display = "none";

    // border 
    menu1.style.borderLeft = "none";
    menu2.style.borderLeft = "none"; 
    menu3.style.borderLeft = "none"; 
    menu4.style.borderLeft = "4px solid black"; 
    menu5.style.borderLeft = "none"; 


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
}

const handleMenu5 = () => {
    menu1Block.style.display = "none";
    menu2Block.style.display = "none";
    menu3Block.style.display = "none";
    menu4Block.style.display = "none";
    menu5Block.style.display = "block";

    // border 
    menu1.style.borderLeft = "none";
    menu2.style.borderLeft = "none"; 
    menu3.style.borderLeft = "none"; 
    menu4.style.borderLeft = "none"; 
    menu5.style.borderLeft = "4px solid black"; 


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
}

const handleAddWorkspace = () => {
    handleMenu2();
}

const handleAddSchool = () => {
    handleMenu2(); 
}

const handleAddLive = () => {
    handleMenu3();
}

const init = () => {
    // 탭 메뉴 클릭 이벤트 
    menu1.addEventListener("click", handleMenu1);
    menu2.addEventListener("click", handleMenu2);
    menu3.addEventListener("click", handleMenu3);
    menu4.addEventListener("click", handleMenu4);
    menu5.addEventListener("click", handleMenu5);

    // 직장 추가 클릭 이벤트 
    addWorkspace.addEventListener("click", handleAddWorkspace); 
    // 학교 추가 클릭 이벤트 
    addSchool.addEventListener("click", handleAddSchool); 
    // 거주지 추가 클릭 이벤트 
    addLive.addEventListener("click", handleAddLive); 
}

if(personInfo) {
    init();
}