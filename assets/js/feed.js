import routes from "../../routes";
import axios from "axios";

const main = document.getElementsByClassName("main_content_feedSection");

const feed = document.querySelector(".main_content_feed");
const menuIcon = document.getElementsByClassName("main_content_more");
const menu = document.getElementsByClassName("main_menuDiv");
const menuCancel = document.getElementsByClassName("menu_cancel");
const editFeed = document.getElementsByClassName("menu_edit");
const menuDelete = document.getElementsByClassName("menu_delete");

// edit Form 
const editFormSection = document.querySelector("#main_content_editFeed");
const editFormText = document.querySelector("#main_content_editFeed #main_content_newFeedText");
const editFormCancel = document.querySelector("#main_content_editFeed #editFormCancel");
const editFormContent = document.querySelector("#main_content_editFeed #main_content_newFeedTextarea")
const editFormSubmit = document.querySelector("#main_content_editFeed #writeFromSubmit");
const editFormImg = document.querySelector("#main_content_editFeed #write_feedImg");
const editForm = document.querySelector("#main_content_editFeed #feedWriteForm");
const feedId = document.getElementsByClassName("feedId");
const editFeedFile = document.querySelector("#main_content_editFeed #feed");
const editFeedImgPreview = document.querySelector("#main_content_editFeed #imgPreview");

// editForm > Custom input=file 
const editRealFileBtn = document.querySelector("#main_content_editFeed #feed");
const editCustomBtn = document.querySelector("#main_content_editFeed #custom-button");

// Feed write 
const feedFile = document.getElementById("feed");
const feedImgPreview = document.getElementById("imgPreview");
const feedWriteForm = document.getElementById("feedWriteForm");
const feedWriteArea = document.getElementById("main_content_newFeedTextarea");

// Feed write > Custom input=file 
const realFileBtn = document.getElementById("feed"); 
const customBtn = document.getElementById("custom-button"); 

// TimeStamp 
const writeTime = document.getElementsByClassName("main_content_time");
const TimeGap = document.getElementsByClassName("main_time_gap");

// Store and notWatch 
const feedStore = document.getElementsByClassName("menu_store"); 
const feedStore_delete = document.getElementsByClassName("menu_store_delete");

const jsFeedStoreDelete = async i => {
    const feedId = document.getElementsByClassName("feedId")[i].innerHTML;
    const userId = document.getElementsByClassName("userId")[i].innerHTML;
    
    const response = await axios({
        url:`/api${routes.deleteStore}`, 
        method: "POST", 
        data: {
            feedId, 
            userId
        }
    }); 
    if(response.status === 200) {
        window.location.reload(true);
    }
}

const jsFeedStore = async i => {
    const feedId = document.getElementsByClassName("feedId")[i].innerHTML;
    const userId = document.getElementsByClassName("userId")[i].innerHTML;
    
    const response = await axios({
        url:`/api${routes.addStore}`,
        method: "POST", 
        data: {
            feedId, 
            userId 
        }
    }); 

    if(response.status === 200) {
        let check = confirm("게시물이 저장되었습니다. 보관함으로 이동하시겠습니까?"); 
        if(check == true) {
            location.href=routes.feedStore(userId);
        } else {
            return false; 
        }
    }


}

const submitValidate = event => {
    event.preventDefault();

    if(feedWriteArea.value == "" && realFileBtn.value == "") {
        alert("사진 혹은 글을 작성해 주세요."); 
        return false; 
    } else {
        feedWriteForm.submit();
    }
}


const handeDelete = async (i) => {
    for(let j = 0; j < menuIcon.length; j++) {
        menu[j].style.display="none";
    }
    let check = confirm("게시물을 삭제하시겠습니까?"); 
    if(check == true) {
        const response = await axios({
            url: `${routes.deleteFeed(feedId[i].innerHTML)}`,
            method: "post"
        });
        if(response.status === 200) {
            window.location.reload();
        }
    } else {
        return false;
    }
}

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
    if(document.getElementsByClassName("main_content_mainImage")[i].style.display != "none") {
        editFormImg.style.display="block";

        const imgSrc = document.getElementsByClassName("main_content_mainImage")[i].querySelector("img").getAttribute('src');
        if(imgSrc) {
            editFormImg.src=imgSrc;
        }
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
            menuDelete[i].addEventListener("click", handeDelete.bind(null,i), false);
        }
        if(editFormCancel) {
            editFormCancel.addEventListener("click", handleEditFormCancel);
        }
        if(feedStore[i]) {
            feedStore[i].addEventListener("click", jsFeedStore.bind(null, i), false);
        }
        if(feedStore_delete[i]) {
            feedStore_delete[i].addEventListener("click", jsFeedStoreDelete.bind(null, i), false);
        }
    }

    // 게시글 등록할 때 검사 
    if(feedWriteForm){
        feedWriteForm.addEventListener("submit", submitValidate); 
    }

    // 피드 새로 작성에서의 이미지 프리뷰 
    if(feedFile){
        feedFile.addEventListener("change", function (e) {
            const existImg = document.getElementById("imagePreview_img"); 
    
            if(existImg) {
                existImg.remove();
            }
            
            const get_file = e.target.files; 
    
            let image = document.createElement('img'); 
    
            const reader = new FileReader(); 
    
            reader.onload = (function (aImg) {
                return function (e) {
                    aImg.src = e.target.result
                }
            })(image) 
    
            if(get_file) {
                reader.readAsDataURL(get_file[0]); 
            }
            image.id = "imagePreview_img";
            feedImgPreview.appendChild(image);
        });
    } 
    
    // 피드 수정에서의 이미지 프리뷰 
    if(editFeedFile) {
        editFeedFile.addEventListener("change", function (e) {
            const existImg = document.getElementById("edit_imagePreview_img"); 
    
            if(existImg) {
                existImg.remove();
            }
            
            if(editFormImg) {
                editFormImg.remove();
            }
    
            const get_file = e.target.files; 
    
            let image = document.createElement('img'); 
    
            const reader = new FileReader(); 
    
            reader.onload = (function (aImg) {
                return function (e) {
                    aImg.src = e.target.result
                }
            })(image)
    
            if(get_file) {
                reader.readAsDataURL(get_file[0]); 
            }
            image.id = "edit_imagePreview_img"; 
            editFeedImgPreview.appendChild(image);
        });
    }

    if(customBtn) {
        customBtn.addEventListener("click", function() {
            realFileBtn.click();
        }); 
    }
    

    if(editCustomBtn) {
        editCustomBtn.addEventListener("click", function() {
            editRealFileBtn.click();
        });
    }

    // 메뉴 부분 이외의 부분을 클릭시 메뉴를 display none 시킨다. 
    document.addEventListener("click", function(e) {
        // event.target.getAttribute('class')로 현재 클릭한 부분의 classname을 가져온 후 비교한다. 
        if(e.target.getAttribute('class') == "main_content_more") {
            
        } else if (e.target.getAttribute('class') == "fas fa-ellipsis-h") {

        } else {
            for(let i = 0; i < menu.length; i++){
                menu[i].style.display="none";
            }
        }
    }); 

    // 시간 경과 
    for(let i = 0; i < menu.length; i++) {
        let old = new Date(writeTime[i].innerHTML).getTime(); 
        let now = new Date().getTime();
        
        let sec_gap = Math.floor((now-old) /1000); 
        let min_gap = Math.floor(sec_gap/60);
        let hour_gap = Math.floor(min_gap / 60);
        let day_gap = Math.floor(hour_gap/24);
        let month_gap = Math.floor(day_gap/30); 

        if(month_gap == 0 && day_gap == 0 && hour_gap == 0 && min_gap == 0) {
            TimeGap[i].innerHTML = "방금";
        } else if ( month_gap == 0 && day_gap == 0 && hour_gap == 0) {
            TimeGap[i].innerHTML = min_gap +"분";
        } else if ( month_gap == 0 && day_gap == 0) {
            TimeGap[i].innerHTML = hour_gap + "시간";
        } else if (month_gap == 0) {
            TimeGap[i].innerHTML = day_gap + "일";
        } else {
            TimeGap[i].innerHTML = month_gap + "달";
        }
    }
}

if(main) {
    init();
}

