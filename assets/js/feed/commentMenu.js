import axios from "axios"; 

const commentPart = document.getElementsByClassName("commentPart"); 
const commentMenuIcon = document.getElementsByClassName("commentMenu_icon"); 
const commentMenu = document.getElementsByClassName("menu"); 
const commentDeleteBtn = document.getElementsByClassName('comment_deleteText');
const commentId = document.getElementsByClassName('comment_commentId'); 
const commentEditBtn = document.getElementsByClassName('comment_editText'); 
const editComment_cancel = document.getElementsByClassName("editComment_cancelDiv");

// 기존 댓글 div 
const commentDiv = document.getElementsByClassName("registered_comments_comment"); 
const commentDiv2 = document.getElementsByClassName("registered_comments_menu");
const commentContent = document.getElementsByClassName("registered_comment_content");
// 수정 div 
const editComment_Div = document.getElementsByClassName("editCommentDiv"); 
const editCommentInput = document.getElementsByClassName("editComment_input");
const editComment_form = document.getElementsByClassName("editComment_form"); 

const sendComment = async (comment, id, i) => {
    const response = await axios({
        url: `/api/${id}/editComment`, 
        method: "POST", 
        data: {
            id, 
            comment
        }
    });
    if(response.status === 200) {
        // commentDiv[i].style.display = "block";
        // commentDiv2[i].style.display = "block"; 
        // commentMenuIcon[i].style.display = "block";
        // commentContent[i].innerHTML = comment;

        // editComment_Div[i].style.display = "none";
        // editComment_cancel[i].style.display = "none";
        window.location.reload(true);
    }
}

const submitEditComment = (i, event) => {
    event.preventDefault();
    const editInput_data = editCommentInput[i].value; 
    const editComment_id_span = document.getElementsByClassName("editComment_id"); 
    const editComment_id = editComment_id_span[i].innerHTML; 
    sendComment(editInput_data, editComment_id, i); 
}

const editCancel = i => {
    commentDiv[i].style.display = "block";
    commentDiv2[i].style.display = "block"; 
    commentMenuIcon[i].style.display = "block";

    editComment_Div[i].style.display = "none";
    editComment_cancel[i].style.display = "none";
 }

const editComment = i => {

    commentDiv[i].style.display = "none";
    commentDiv2[i].style.display = "none"; 
    commentMenuIcon[i].style.display = "none";

    editComment_Div[i].style.display = "block";
    editComment_cancel[i].style.display = "block";
    editCommentInput[i].value = commentContent[i].innerHTML;

    editCommentInput[i].focus();
}

const deleteComment = async i => {
    const id = commentId[i].innerHTML;
    const response = await axios({
        url: `/api/${id}/deleteComment`,
        method: "POST"
    });
    if(response.status === 200) {
        window.location.reload(true);
    }
}

const toggleMenu = i => {
    if(commentMenu[i].style.display == "none") {
        commentMenuIcon[i].style.color = "black";
        commentMenu[i].style.display = "block";
    } else {
        commentMenuIcon[i].style.color = "#e9ebee";
        commentMenu[i].style.display = "none";
    }
}

const init = () => {
    for(let i = 0; i < commentMenuIcon.length; i++) {
        commentMenuIcon[i].addEventListener("click", toggleMenu.bind(null, i), false); 
        // 댓글 삭제 
        commentDeleteBtn[i].addEventListener("click", deleteComment.bind(null, i), false);
        // 댓글 수정 폼 띄우기  
        commentEditBtn[i].addEventListener("click", editComment.bind(null, i), false);
        // 수정 취소 
        editComment_cancel[i].addEventListener("click", editCancel.bind(null,i), false);
        // 댓글 수정 
        editComment_form[i].addEventListener("submit", submitEditComment.bind(this,i), false); 
    }

    document.addEventListener("click", function(e) {
        if(e.target.getAttribute('class') != "fas fa-ellipsis-h commentMenu_icon") {
            for(let i = 0; i < commentMenuIcon.length; i++) {
                commentMenuIcon[i].style.color = "#e9ebee";
                commentMenu[i].style.display = "none";
            }
        }
    });
}

if(commentPart) {
    init(); 
}
