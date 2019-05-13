import axios from "axios";

const comment = document.getElementsByClassName("registered_comments"); 
const writeReplyBtn = document.getElementsByClassName("write_reply_button"); 
const replyDiv = document.getElementsByClassName("editComment_replyDiv");
const replyDiv_cancel = document.getElementsByClassName("editComment_Reply_cancel");
const replyForm = document.getElementsByClassName("replyForm");
const commentInput = document.getElementsByClassName("reply_input");


const fakeAddReply = (comment, i) => {
    const avatar = document.getElementsByClassName("addCommentForm_avatar");
    const name = document.getElementById("main_header_profileName").innerHTML;

    // CreateElement
    const registered_comments = document.getElementsByClassName("registered_comments");
    const registered_reply = document.createElement("div"); 

    const replyPart = document.createElement("div"); 

    const registered_reply_img = document.createElement("div"); 
    const registered_reply_reply = document.createElement("div"); 
    const icon = document.createElement("i"); 
    const editReplyDiv = document.createElement("div"); 
    const editReply_cancel = document.createElement("div"); 

    const image = document.createElement("img");
    const userName = document.createElement("a");
    const replyContent = document.createElement("span"); 

    // className 
    registered_reply.className="registered_reply";

    replyPart.className = "replyPart"; 

    registered_reply_img.className = "registered_reply_img";
    registered_reply_reply.className = "registered_reply_reply";
    icon.className = "fas fa-ellipsis-h reply_menuIcon"; 
    editReplyDiv.className = "editReplyDiv";
    editReply_cancel.className = "editReply_cancel";

    userName.className = "registered_reply_name";
    replyContent.className = "registered_reply_content";

    // input value 
    image.src=avatar[i].src;
    userName.href="#";
    userName.innerHTML = name;
    replyContent.innerHTML = comment;

    //append 
    registered_reply_img.appendChild(image);

    registered_reply_reply.appendChild(userName);
    registered_reply_reply.appendChild(replyContent);

    replyPart.appendChild(registered_reply_img);
    replyPart.appendChild(registered_reply_reply);
    replyPart.appendChild(icon);
    replyPart.appendChild(editReplyDiv);
    replyPart.appendChild(editReply_cancel);
    
    registered_reply.appendChild(replyPart);

    registered_comments[i].appendChild(registered_reply);
}

const sendReply = async (comment, id, feedId, i) => {
    const response = await axios({
        url : `/api/${id}/reply`,
        method: "POST",
        data: {
            comment,
            feedId
        }
    });
    if(response.status === 200) {
        replyDiv[i].style.display = "none";

        fakeAddReply(comment, i);
    }
}

const handleSubmit = async (i, event) => {
    event.preventDefault();

    const commentId = document.getElementsByClassName("comment_Id")[i].innerHTML; 
    const comment = commentInput[i].value;
    const feedId = document.getElementsByClassName("feed_Id")[i].innerHTML;

    sendReply(comment, commentId, feedId, i);
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