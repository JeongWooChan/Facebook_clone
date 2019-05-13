const header = document.getElementById("header_header"); 
const searchIcon = document.getElementById("section3_search_icon"); 
const searchForm = document.getElementById("section3_search_form"); 
const logoText = document.getElementById("header_section3_logoName");
const menuIcon = document.getElementById("section3_menu_icon"); 
const headerMenu = document.getElementById("header_menu");

const toggleMenu = () => {
    if(headerMenu.style.display == "none") {
        headerMenu.style.display = "block";
    } else {
        headerMenu.style.display = "none";
    }
}

const showSearchForm = () => {
    searchForm.style.display = "block"; 
    searchIcon.style.display = "none";
    logoText.style.display = "none";
} 

const init = () => {
    searchIcon.addEventListener("click", showSearchForm);
    menuIcon.addEventListener("click", toggleMenu); 
}

if(header) {
    init();
}