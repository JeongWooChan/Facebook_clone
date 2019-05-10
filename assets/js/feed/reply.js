import axios from "axios";

const comment = document.getElementsByClassName("registered_comments"); 
const writeReplyBtn = document.getElementsByClassName("write_reply_button"); 
const replyDiv = document.getElementsByClassName("editComment_replyDiv");
const replyDiv_cancel = document.getElementsByClassName("editComment_Reply_cancel");
const replyForm = document.getElementsByClassName("replyForm");

const sendReply = async (comment, id, feedId) => {
    const response = await axios({
        url : `/api/${id}/reply`,
        method: "POST",
        data: {
            comment,
            feedId
        }
    });
    if(response.status === 200) {
        window.location.reload(true);
    }
}

const handleSubmit = async (i, event) => {
    event.preventDefault();

    const commentId = document.getElementsByClassName("comment_Id")[i].innerHTML; 
    const commentInput = document.getElementsByClassName("reply_input");
    const comment = commentInput[i].value;
    const feedId = document.getElementsByClassName("feed_Id")[i].innerHTML;

    sendReply(comment, commentId, feedId); 
}

const cancelWriteReply = i => {
    replyDiv[i].style.display = "none";
}

const toggleWriteReply = i => {
    replyDiv[i].style.display = "block";
}

const init = () => {
    for(let i = 0; i < writeReplyBtn.length; i++) {
        writeReplyBtn[i].addEventListener("click", toggleWriteReply.bind(null, i), false);
        replyDiv_cancel[i].addEventListener("click", cancelWriteReply.bind(null, i), false);
        replyForm[i].addEventListener("submit", handleSubmit.bind(this, i), false);
    }
}

if(comment) {
    init(); 
}