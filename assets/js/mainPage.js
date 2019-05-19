import axios from "axios";
import routes from "../../routes";

const main = document.getElementById("main_contents"); 
const feedSection = document.getElementById("main_contentFeedSection");
const addSection = document.getElementById("main_content_adSection"); 

const searchForm = document.getElementById("header_searchForm");


const jsAddFeedBlock = feed => {
    console.log(feed);

    const feedBlock = `
    <section class="main_content_feedSection">
        <article class="main_content_feed">
            <div class="main_content_header">
                <img src='/${feed.avatarUrl}'/>
                <div class="main_content_headerTop">
                    <a href='${routes.person(feed.userId)}' id="main_content_writer">
                        ${feed.username}
                    </a>
                    <div class="main_content_more">
                        <i class="fas fa-ellipsis-h"></i>
                    </div> 
                </div>
                <div class="main_content_headerBottom">
                    <span class="main_content_time" hidden="hidden">
                        ${feed.date}
                    </span>
                    <span class="main_time_gap">
                    </span>
                </div>
                <div class="main_menuDiv" style="display: none;">
                    <ul>
                       
                    </ul>
                </div>
            </div>
        </article>
    </section>
    `;
    document.getElementById("main_contentFeedSection").insertAdjacentHTML('beforeend', feedBlock);
}

const autoPaging = async () => {
    // const feedBlock = `
    // <section class= main_content_feedSection>
    //     <article class="main_content_feed">
    //         <div class="main_content_header">
    //         </div>
    //     </article>
    // </section>`;

    // document.getElementById("main_contentFeedSection").insertAdjacentHTML('beforeend', feedBlock);
    // console.log(document.getElementById("autopaging_number").value);
    // document.getElementById("autopaging_number").value++;

    const pagingNumber = document.getElementById("autopaging_number").value; 

    const response = await axios({
        url:`/api/${routes.feedAuto}`, 
        method: "POST", 
        data: {
            pagingNumber
        }
    }); 

    if(response.status === 200) {
        const feedList = response.data.feed;

        for(let i = 0; i < feedList.length; i++) {
            jsAddFeedBlock(feedList[i]); 
        }
    }
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