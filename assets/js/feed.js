const feed = document.querySelector(".main_content_feed");
const menuIcon = document.getElementsByClassName("main_content_more");
const menu = document.getElementsByClassName("main_menuDiv");

const toggleMenu = (i) => {
    if(menu[i].style.display == 'none') {
        menu[i].style.display = "block";
    } else {
        menu[i].style.display = "none";
    }
    
}

const init = () => {
    for(let i = 0; i < menuIcon.length; i++){
        menuIcon[i].addEventListener("click", toggleMenu.bind(null, i), false); 
    }
}

if(feed) {
    init();
}

