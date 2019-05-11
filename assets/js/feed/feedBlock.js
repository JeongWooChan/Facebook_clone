import axios from "axios";

// 댓글 관련 변수 
const commentBtn = document.getElementsByClassName("main_content_commentButton"); 
const commentField = document.getElementsByClassName("main_content_Comment"); 
const commentInput = document.getElementsByClassName("writeComment_input");

// 좋아요 
const likeBtn = document.getElementsByClassName("main_content_likeButton");

const handleLike = async i => {
    const feedId = document.getElementsByClassName("feedBlock_feedId")[i].innerHTML; 
    const likeBtnIcon = document.getElementsByClassName("main_likeButton_icon");
    const likeBtnText = document.getElementsByClassName("main_content_likeButtonText");
    const likeCountSpan = document.getElementsByClassName("main_content_likeCount");

    const response = await axios({
        url: `/api/${feedId}/like`, 
        method: 'POST'
    });
    if(response.status === 200) {
        // 좋아요 취소 
        if(response.data.result == 0) {
            likeBtnIcon[i].style.color="#606770";
            likeBtnText[i].style.color="#606770";
            // 서버에서 status와 함께 전달된 json 값을 response.data.키값의 형태로 
            // 데이터를 받아올 수 있다. 
            likeCountSpan[i].innerHTML = response.data.likeCnt;
        }
        // 좋아요  
        else { 
            likeBtnIcon[i].style.color="blue";
            likeBtnText[i].style.color="blue";
            likeCountSpan[i].innerHTML = response.data.likeCnt;
        }
    }
}

const handleCommentField = i => {
    commentField[i].style.display = "block";
    commentInput[i].focus();
}

const init = () => {
    for(let i = 0; i < commentBtn.length; i++) {
        commentBtn[i].addEventListener("click", handleCommentField.bind(null, i), false); 
        likeBtn[i].addEventListener("click", handleLike.bind(null, i), false); 
    }
}

if(commentBtn) {
    init();
}