const registered_reply_Div = document.getElementsByClassName("registered_reply"); 
const replyMenuIcon = document.getElementsByClassName("reply_menuIcon");
const replyMenu = document.getElementsByClassName("reply_menu");

const replyEditBtn = document.getElementsByClassName("reply_editText");
const replyEditDiv = document.getElementsByClassName("editReplyDiv");
const registered_reply = document.getElementsByClassName("registered_reply_reply");
const replyEditForm_cancel = document.getElementsByClassName("editReply_cancel");
const replyEdit_input = document.getElementsByClassName("editReply_input");
const registered_content = document.getElementsByClassName("registered_reply_content");


const cancelEditForm = i => {
    registered_reply[i].style.display = "block"; 
    replyEditDiv[i].style.display = "none"; 

    replyEditForm_cancel[i].style.display = "none";
    replyMenuIcon[i].style.display = "block";
}

const showEditFrom = i => {
    registered_reply[i].style.display = "none"; 
    replyEditDiv[i].style.display = "block"; 

    replyEditForm_cancel[i].style.display = "block";
    replyMenuIcon[i].style.display = "none";

    replyEdit_input[i].value = registered_content[i].innerHTML;

    replyEdit_input[i].focus();

}

const showReplyMenu = i => {
    if(replyMenu[i].style.display == "none") {
        replyMenuIcon[i].style.color = "black";
        replyMenu[i].style.display = "block";
    } else {
        replyMenuIcon[i].style.color = "#e9ebee";
        replyMenu[i].style.display = "none";
    }
}

const init = () => {
    for(let i = 0; i < replyMenuIcon.length; i++) {
        replyMenuIcon[i].addEventListener("click", showReplyMenu.bind(null, i), false);
        replyEditBtn[i].addEventListener("click", showEditFrom.bind(null,i),false);
        replyEditForm_cancel[i].addEventListener("click", cancelEditForm.bind(null, i), false);
    }

    document.addEventListener("click", function(e) {
        if(e.target.getAttribute('class') != "fas fa-ellipsis-h reply_menuIcon") {
            for(let i = 0; i < replyMenuIcon.length; i++) {
                replyMenuIcon[i].style.color = "#e9ebee";
                replyMenu[i].style.display = "none";
            }
        }
    })
}

if(registered_reply_Div) {
    init();
}