import axios from "axios";

const addCommentForm = document.getElementsByClassName("addCommentForm"); 
const feedId = document.getElementsByClassName("main_content_feedId");
const commentSection = document.getElementsByClassName("commentBlock_section");
const avatar = document.getElementsByClassName("addCommentForm_avatar");
const commentCount = document.getElementsByClassName("main_content_commentCount");

const increaseNumber = i => {
    commentCount[i].innerHTML = parseInt(commentCount[i].innerHTML, 10) + 1;
}

const fakeAddComment = (comment, i) => {
    const section = document.createElement("div"); 
    const commentPart = document.createElement("div");
    
    const imgDiv = document.createElement("div"); 
    const commentDiv = document.createElement("div"); 
    const icon = document.createElement("i"); 
    const menuDiv = document.createElement("div"); 
    
    const img = document.createElement("img"); 
    const username = document.createElement("a"); 
    const commentSpan = document.createElement("span"); 
    const co_comentA = document.createElement("a"); 
    const dot_span = document.createElement("span");
    const date = document.createElement("div"); 
    
    section.className = "registered_comments"; 
    commentPart.className = "commentPart";
    
    imgDiv.className = "registered_comments_img"; 
    commentDiv.className = "registered_comments_comment"; 
    icon.className="fas fa-ellipsis-h";
    menuDiv.className="registered_comments_menu";
    
    img.src=avatar[i].src; 
    username.className="registered_comment_name";
    username.href="#"; 
    username.innerHTML="정우찬"; 
    commentSpan.className= "registered_comment_content";
    commentSpan.innerHTML=comment; 
    co_comentA.innerHTML = "답글달기"; 
    date.className="registerd_comments_time";
    date.innerHTML="방금";
    dot_span.className="dot";
    
    imgDiv.appendChild(img); 
    commentDiv.appendChild(username); 
    commentDiv.appendChild(commentSpan);
    menuDiv.appendChild(co_comentA); 
    menuDiv.appendChild(dot_span); 
    menuDiv.appendChild(date);

    commentPart.appendChild(imgDiv);
    commentPart.appendChild(commentDiv);  
    commentPart.appendChild(icon);
    commentPart.appendChild(menuDiv);

    section.appendChild(commentPart);

    commentSection[i].appendChild(section);
    increaseNumber(i);
}

const sendComment = async (comment, id, i) => {
    const response = await axios({
        url: `/api/${id}/comment`, 
        method: "POST", 
        data: {
            id,
            comment
        }
    }); 
    if(response.status === 200) {
        fakeAddComment(comment, i)
    }
}

const handleSubmit = (i, event) => {
    event.preventDefault();
    const commentInput = document.getElementsByClassName("writeComment_input"); 
    const comment = commentInput[i].value;
    const id = feedId[i].innerHTML;
    sendComment(comment, id, i); 
    commentInput[i].value = ""; 
}

const init = () => {
    for(let i = 0 ; i < addCommentForm.length; i++) {
        addCommentForm[i].addEventListener("submit", handleSubmit.bind(this,i), false);
    }
}

if(addCommentForm) {
    init(); 
}