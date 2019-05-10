const comment = document.getElementsByClassName("registered_comments"); 
const writeReplyBtn = document.getElementsByClassName("write_reply_button"); 
const replyDiv = document.getElementsByClassName("editComment_replyDiv");
const replyDiv_cancel = document.getElementsByClassName("editComment_Reply_cancel");

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
    }
}

if(comment) {
    init(); 
}