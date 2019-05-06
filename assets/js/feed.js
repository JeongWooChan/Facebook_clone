import routes from "../../routes";

const feed = document.querySelector(".main_content_feed");
const menuIcon = document.getElementsByClassName("main_content_more");
const menu = document.getElementsByClassName("main_menuDiv");
const menuCancel = document.getElementsByClassName("menu_cancel");
const editFeed = document.getElementsByClassName("menu_edit");
// edit Form 
const editFormSection = document.querySelector("#main_content_editFeed");
const editFormText = document.querySelector("#main_content_editFeed #main_content_newFeedText");
const editFormCancel = document.querySelector("#main_content_editFeed #editFormCancel");
const editFormContent = document.querySelector("#main_content_editFeed #main_content_newFeedTextarea")
const editFormSubmit = document.querySelector("#main_content_editFeed #writeFromSubmit");
const editFormImg = document.querySelector("#main_content_editFeed #write_feedImg");
const editForm = document.querySelector("#main_content_editFeed #feedWriteForm");

const feedId = document.getElementsByClassName("feedId");

const handleEditFormCancel = () => {
    editFormSection.style.display = "none";
}

const handleEditForm = i => {
    // feed의 i와 메뉴의 i의 값이 다를수도 있기때문에 
    // 게시글 수정하기 누르면 모든 menu창을 안보이게끔 한다. 
    for(let j = 0; j < menuIcon.length; j++) {
        menu[j].style.display="none";
    }
    // 기존의 writeForm에서 editForm에 맞게 스타일 수정 
    editFormSection.style.display = "block";
    editFormText.innerHTML = "게시물 수정하기";
    editFormSubmit.value = "수정";
    editFormCancel.style.display = "block";
    editForm.action=`${routes.editFeed(feedId[i].innerHTML)}`;
    // 기존의 피드 내용 가져오기 
    const content = document.getElementsByClassName("main_content_mainContent")[i].innerHTML;
    editFormContent.innerHTML = content;
    // 피드의 이미지 여부에 따라 이미지 가져오기 
    if(document.getElementsByClassName("main_content_mainImage")[i]) {
        editFormImg.style.display="block";

        const imgSrc = document.getElementsByClassName("main_content_mainImage")[i].querySelector("img").getAttribute('src');
        editFormImg.src=imgSrc;
    } else {
        editFormImg.style.display="none";
        editFormImg.src="";
    }
}

const handelMenuCancel = (i) => {
    menu[i].style.display = "none";
}

const toggleMenu = (i) => {
    if(menu[i].style.display == 'none') {
        menu[i].style.display = "block";
    } else {
        menu[i].style.display = "none";
    }
}

const init = () => {
    for(let i = 0; i < menu.length; i++){
        menuIcon[i].addEventListener("click", toggleMenu.bind(null, i), false);
        menuCancel[i].addEventListener("click", handelMenuCancel.bind(null, i), false); 
        if(editFeed[i]){
            editFeed[i].addEventListener("click", handleEditForm.bind(null,i), false);
        }
        if(editFormCancel) {
            editFormCancel.addEventListener("click", handleEditFormCancel);
        }
    }    
}

if(feed) {
    init();
}

