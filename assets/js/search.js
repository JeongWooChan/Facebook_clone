import axios from "axios";
import routes from "../../routes";

const main = document.getElementById("search_contents"); 
const feedSection = document.getElementById("search_contentSection");
const adSection = document.getElementById("search_adSection"); 

const addFriendBtn = document.getElementsByClassName("search_person_addFriendbutton");

const search_reqFriend = async i => {
    const target = document.getElementsByClassName("search_targetid")[i].innerHTML;
    const applicant = document.getElementsByClassName("search_applicantid")[i].innerHTML;

    const response = await axios({
        url:`/api${routes.reqFriend}`, 
        method: "POST", 
        data: {
           target,
           applicant
        }
    });
    if(response.status === 200) {
        const addBtn = document.getElementsByClassName("search_person_addFriendbutton"); 
        const reqBtn = document.getElementsByClassName("serach_person_reqFriendbutton");

        addBtn[i].style.display = "none"; 
        reqBtn[i].style.display = "block";
    } 
}

const searchLoad = () => {
    adSection.style.right = feedSection.offsetLeft + "px";
}

const responsiveAdBox = () => {
    if(matchMedia("(max-width: 1024px)").matches) {
        adSection.style.right = "10px";
        adSection.style.width = 31+"%";
    } else {
        adSection.style.width = "320px";
        adSection.style.right = feedSection.offsetLeft + 20 + "px";
    }
}

const init = () => {
    if(addFriendBtn) {
        for(let i = 0; i < addFriendBtn.length; i++) {
            addFriendBtn[i].addEventListener("click", search_reqFriend.bind(null,i), false);
        }
    }

    window.addEventListener("resize", responsiveAdBox); 
    window.addEventListener("load", searchLoad); 
}

if(main) {
    init();
}