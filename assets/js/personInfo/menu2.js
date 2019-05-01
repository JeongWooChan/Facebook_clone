const personInfo_content_menu2 = document.getElementById("personInfo_content_menu2");
//// 직장
// 수정 
const workspaceEditBtn = document.getElementById("workspace_edit");
const workspaceEditFormDiv = document.getElementById("personInfo_menu2_workspaceEdit_formDiv"); 
const showWorkspace = document.getElementById("menu2_workspaceShowDiv"); 
const deleteWorkspaceForm = document.getElementById("workspace_deleteform");
// 추가 
const workspaceAdd = document.getElementById("personInfo_menu2_workspaceAdd"); 
const workspaceAddFormDiv = document.getElementById("personInfo_menu2_workspaceAdd_formDiv");

//// 대학교
// 추가 
const universityAdd = document.getElementById("personInfo_menu2_universityAdd"); 
const universityAddFormDiv = document.getElementById("personInfo_menu2_universityAdd_formDiv");
// 수정 
const universityEditBtn = document.getElementById("university_edit");
const showUniversity = document.getElementById("menu2_universityShowDiv");
const universityEditFormDiv = document.getElementById("personInfo_menu2_universityEdit_formDiv");
const deleteUniversityForm = document.getElementById("university_deleteForm");

// cancel 버튼 
const workspaceAddForm_cancel = document.getElementById("personInfo_workspaceAddform_cancel");
const workspaceEditForm_cancel = document.getElementById("personInfo_workspaceEditform_cancel");
const universityAddForm_cancel = document.getElementById("personInfo_universityAddform_cancel");
const universityEditForm_cancel = document.getElementById("personInfo_universityEditform_cancel");


const checkDeleteUniversity = event => {
    event.preventDefault();

    let check = confirm("대학 정보를 삭제하시겠습니까?"); 
    if(check == true) {
        deleteUniversityForm.submit();
    } else {
        return false;
    }
}

const checkDeleteWorkspace = event => {
    event.preventDefault();

    let check = confirm("직장 정보를 삭제하시겠습니까?"); 
    if(check == true) {
        deleteWorkspaceForm.submit();
    } else {
        return false;
    }
}

const universityEditCancel = () => {
    showUniversity.style.display = "block";
    universityEditFormDiv.style.display = "none";
}

const showuniversityEditForm = () => {
    showUniversity.style.display = "none";
    universityEditFormDiv.style.display = "block";
}

const EditWorkspaceCancel = () => {
    showWorkspace.style.display = "block"; 
    workspaceEditFormDiv.style.display = "none";
}

const showEditForm = () => {
    showWorkspace.style.display = "none"; 
    workspaceEditFormDiv.style.display = "block";
}

const AddWorkspaceFunction = () => {
    workspaceAdd.style.display = "none";
    workspaceAddFormDiv.style.display = "block";
}

const workspaceDivCancel = () => {
    workspaceAdd.style.display = "block"; 
    workspaceAddFormDiv.style.display = "none";
}

const AddUniversityFunction = () => {
    universityAdd.style.display = "none";
    universityAddFormDiv.style.display = "block";
}

const universityDivCancel = () => {
    universityAdd.style.display = "block"; 
    universityAddFormDiv.style.display = "none";
}

const AddHighschoolFunction = () => {
    highschoolAdd.style.display = "none";
    highschoolAddFormDiv.style.display = "block";
}

const highschoolDivCancel = () => {
    highschoolAdd.style.display = "block"; 
    highschoolAddFormDiv.style.display = "none";
}

const init = () => {
    //직장 
    if(showWorkspace) {
        workspaceEditBtn.addEventListener("click", showEditForm);
        workspaceEditForm_cancel.addEventListener("click", EditWorkspaceCancel);
        deleteWorkspaceForm.addEventListener("submit", checkDeleteWorkspace);
    } else {
        workspaceAdd.addEventListener("click", AddWorkspaceFunction); 
        workspaceAddForm_cancel.addEventListener("click", workspaceDivCancel);
    }
   
    // 대학 
    if(showUniversity) {
        universityEditBtn.addEventListener("click", showuniversityEditForm);
        universityEditForm_cancel.addEventListener("click", universityEditCancel);
        deleteUniversityForm.addEventListener("submit", checkDeleteUniversity);
    } else {
        universityAdd.addEventListener("click", AddUniversityFunction);
        universityAddForm_cancel.addEventListener("click", universityDivCancel);
    }
}

if(personInfo_content_menu2) {
    init();
}