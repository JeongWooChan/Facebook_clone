const main = document.getElementById("main_contents"); 
const feedSection = document.getElementById("main_contentFeedSection");
const addSection = document.getElementById("main_content_adSection"); 

const searchForm = document.getElementById("header_searchForm");


const autoPaging = () => {
    const feedBlock = `
    <section class= main_content_feedSection>
        <article class="main_content_feed">
            <div class="main_content_header">
            </div>
        </article>
    </section>`;

    document.getElementById("main_contentFeedSection").insertAdjacentHTML('beforeend', feedBlock);
    console.log(document.getElementById("autopaging_number").value);
    document.getElementById("autopaging_number").value++;
}

const scrollEnd = () => {
    if((window.scrollY + window.innerHeight) / document.body.clientHeight >= 1) {
        autoPaging();
    }
}

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

    window.addEventListener("scroll", scrollEnd); 
}

if(main) {
    init(); 
}