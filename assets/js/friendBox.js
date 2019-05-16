import axios from "axios";
import routes from "../../routes";

const friendbox = document.getElementById("header_friendbox");

// recommend
const recommendAddBtn = document.getElementsByClassName("friendbox_recommendAdd_button"); 
const recommendBox = document.getElementsByClassName("header_friendbox_recommend");
const recommendedBtn = document.getElementsByClassName("friendbox_recommended_button");
const recommendBtn = document.getElementsByClassName("friendbox_recommend_button");


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
}

if(friendbox) {
    init(); 
}