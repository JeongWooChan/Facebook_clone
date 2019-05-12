import axios from "axios"; 

const registered_reply_Div = document.getElementsByClassName("registered_reply"); 
const replyMenuIcon = document.getElementsByClassName("reply_menuIcon");
const replyMenu = document.getElementsByClassName("reply_menu");

const replyEditBtn = document.getElementsByClassName("reply_editText");
const replyEditDiv = document.getElementsByClassName("editReplyDiv");
const registered_reply = document.getElementsByClassName("registered_reply_reply");
const replyEditForm_cancel = document.getElementsByClassName("editReply_cancel");
const replyEdit_input = document.getElementsByClassName("editReply_input");
const registered_content = document.getElementsByClassName("registered_reply_content");
const replyDeleteBtn = document.getElementsByClassName("reply_deleteText");
const replyEditForm = document.getElementsByClassName("editReply_form");

const fakeEditReply = (reply, i) => {
    registered_reply[i].style.display = "block"; 
    replyEditDiv[i].style.display = "none"; 

    replyEditForm_cancel[i].style.display = "none";
    replyMenuIcon[i].style.display = "block";

    registered_content[i].innerHTML = reply;

}


const sendReply = async (reply, id, i) => {
    const response = await axios({
        url: `/api/${id}/editReply`, 
        method: "POST", 
        data: {
            id, 
            reply
        }
    }); 
    if(response.status === 200) {
        fakeEditReply(reply, i); 
    }
}

const submitEditReply = (i, event) => {
    event.preventDefault(); 
    const editInput_data = replyEdit_input[i].value; 
    const editReply_id = document.getElementsByClassName("editReply_id")[i].innerHTML;

    sendReply(editInput_data, editReply_id, i); 

}

const deleteReply = async i => {
    const replyid = document.getElementsByClassName("reply_id")[i].innerHTML; 

    const response = await axios({
        url: `/api/${replyid}/deleteReply`, 
        method: 'POST'
    }); 
    if(response.status === 200) {
        window.location.reload(true);
    }
}

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
        replyDeleteBtn[i].addEventListener("click", deleteReply.bind(null, i), false); 
        replyEditForm[i].addEventListener("submit", submitEditReply.bind(this,i), false);
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