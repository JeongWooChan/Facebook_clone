const main = document.getElementById("main_contents"); 
const feedSection = document.getElementById("main_contentFeedSection");
const addSection = document.getElementById("main_content_adSection"); 

const test = () => {
    addSection.style.right = feedSection.offsetLeft + "px";
}

const responsiveAddBox = () => {
    addSection.style.right = feedSection.offsetLeft + 20 + "px";
}

const init = () => {
    window.addEventListener("resize", responsiveAddBox); 
    window.addEventListener("load", test);
}

if(main) {
    init(); 
}