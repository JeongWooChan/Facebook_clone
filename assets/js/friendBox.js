import axios from "axios";
import routes from "../../routes";

const friendbox = document.getElementById("header_friendbox");

// recommend
const recommendAddBtn = document.getElementsByClassName("friendbox_recommendAdd_button"); 
const recommendBox = document.getElementsByClassName("header_friendbox_recommend");
const recommendedBtn = document.getElementsByClassName("friendbox_recommended_button");
const recommendBtn = document.getElementsByClassName("friendbox_recommend_button");

// request 
const requestAddBtn = document.getElementsByClassName("friendbox_add_button"); 
const requestAddedBtn = document.getElementsByClassName("frinedbox_request_add");
const requestBtnDiv = document.getElementsByClassName("friendbox_request_button");
const requestDeleteBtn = document.getElementsByClassName("friendbox_delete_button");
const requestBox = document.getElementsByClassName("header_friendbox_request");
const requestNull = document.getElementsByClassName("header_friendbox_null");

const deleteFriendReq = async i => {
    const friendid = document.getElementsByClassName("friendbox_request_targetId")[i].innerHTML;
    const userid = document.getElementsByClassName("friendbox_request_applicantId")[i].innerHTML;

    const response = await axios({
        url:`/api${routes.deleteRequesetFriend}`, 
        method:"POST", 
        data: {
            userid, 
            friendid
        }
    }); 
    if(response.status === 200) {
        requestBox[i].remove();
        requestNull[0].style.display = "block";
    }
}

const addFriend = async i => {
    const friendid = document.getElementsByClassName("friendbox_request_targetId")[i].innerHTML;
    const userid = document.getElementsByClassName("friendbox_request_applicantId")[i].innerHTML;
    
    const response = await axios({
        url:`/api${routes.addFriend}`, 
        method:"POST", 
        data: {
            userid,
            friendid
        }
    });
    if(response.status === 200) {
        requestAddedBtn[i].style.display = "block"; 
        requestBtnDiv[i].style.display = "none";
    }
}

const reqFriend = async i => {
    const target = document.getElementsByClassName("targetid")[i].innerHTML;
    const applicant = document.getElementsByClassName("applicantid")[i].innerHTML;

    const response = await axios({
        url:`/api${routes.reqFriend}`, 
        method: "POST", 
        data: {
           target,
           applicant
        }
    }); 
    if(response.status === 200) {
        recommendBtn[i].style.display = "none"; 
        recommendedBtn[i].style.display = "block";
    }
}


const init = () => {
    for(let i = 0; i < recommendBox.length; i++) {
        recommendAddBtn[i].addEventListener("click", reqFriend.bind(null, i), false);        
    }
    if(requestAddBtn) {
        for(let i = 0; i < requestAddBtn.length; i++) {
            requestAddBtn[i].addEventListener("click", addFriend.bind(null,i), false); 
            requestDeleteBtn[i].addEventListener("click", deleteFriendReq.bind(null, i), false); 
        }
    }
}

if(friendbox) {
    init(); 
}