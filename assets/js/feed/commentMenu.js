const commentPart = document.getElementsByClassName("commentPart"); 
const commentMenuIcon = document.getElementsByClassName("commentMenu_icon"); 
const commentMenu = document.getElementsByClassName("menu"); 

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
    }

    document.addEventListener("click", function(e) {
        if(e.target.getAttribute('class') != "fas fa-ellipsis-h commentMenu_icon") {
            for(let i = 0; i < commentMenuIcon.length; i++) {
                commentMenuIcon[i].style.color = "#e9ebee";
                commentMenu[i].style.display = "none";
            }
        } else {
        }
    });
}

if(commentPart) {
    init(); 
}