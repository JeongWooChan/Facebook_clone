const main = document.getElementById("main_contents"); 
const feedSection = document.getElementById("main_contentFeedSection");
const addSection = document.getElementById("main_content_adSection"); 

const searchForm = document.getElementById("header_searchForm");

const inputvalidate = e => {
    e.preventDefault();
    const searchInput = document.getElementById("header_searchText"); 

    if(searchInput.value == "") {
        alert("검색어를 입력해주세요."); 
        return false;
    } else {
        searchForm.submit();
    }
}

const load = () => {
    addSection.style.right = feedSection.offsetLeft + 30 + "px";
}

const responsiveAddBox = () => {    
    if(matchMedia("(max-width: 1024px)").matches) {
        addSection.style.right = "10px";
        addSection.style.width = 35+"%";
    } else {
        addSection.style.width = "320px";
        addSection.style.right = feedSection.offsetLeft + 30 + "px";
    }
}

const init = () => {
    window.addEventListener("resize", responsiveAddBox); 
    window.addEventListener("load", load);
    searchForm.addEventListener("submit", inputvalidate);
}

if(main) {
    init(); 
}