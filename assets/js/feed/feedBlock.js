// 댓글 관련 변수 
const commentBtn = document.getElementsByClassName("main_content_commentButton"); 
const commentField = document.getElementsByClassName("main_content_Comment"); 
const commentInput = document.getElementsByClassName("writeComment_input");

const handleCommentField = i => {
    commentField[i].style.display = "block";
    commentInput[i].focus();
}

const init = () => {
    for(let i = 0; i < commentBtn.length; i++) {
        commentBtn[i].addEventListener("click", handleCommentField.bind(null, i), false); 
    }
}

if(commentBtn) {
    init();
}