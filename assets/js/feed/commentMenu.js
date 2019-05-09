import axios from "axios"; 

const commentPart = document.getElementsByClassName("commentPart"); 
const commentMenuIcon = document.getElementsByClassName("commentMenu_icon"); 
const commentMenu = document.getElementsByClassName("menu"); 
const commentDeleteBtn = document.getElementsByClassName('comment_deleteText');
const commentId = document.getElementsByClassName('comment_commentId'); 

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