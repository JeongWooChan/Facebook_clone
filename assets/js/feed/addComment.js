import axios from "axios";

const addCommentForm = document.getElementsByClassName("addCommentForm"); 
const feedId = document.getElementsByClassName("main_content_feedId");

const sendComment = async (comment, id) => {
    const response = await axios({
        url: `/api/${id}/comment`, 
        method: "POST", 
        data: {
            id,
            comment
        }
    }); 
}

const handleSubmit = (i, event) => {
    event.preventDefault();
    const commentInput = document.getElementsByClassName("writeComment_input"); 
    const comment = commentInput[i].value;
    const id = feedId[i].innerHTML;
    sendComment(comment, id); 
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