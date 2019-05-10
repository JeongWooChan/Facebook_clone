const commentBlock = document.getElementsByClassName("registered_comments"); 
const writeTime = document.getElementsByClassName("registerd_comments_time");
const timeGap = document.getElementsByClassName("registered_time_gap");

const init = () => {
    for(let i = 0; i < commentBlock.length; i++) {
        let old = new Date(writeTime[i].innerHTML).getTime(); 
        let now = new Date().getTime(); 

        let sec_gap = Math.floor((now-old) /1000); 
        let min_gap = Math.floor(sec_gap/60);
        let hour_gap = Math.floor(min_gap / 60);
        let day_gap = Math.floor(hour_gap/24);
        let month_gap = Math.floor(day_gap/30);

        if(month_gap == 0 && day_gap == 0 && hour_gap == 0 && min_gap == 0) {
            timeGap[i].innerHTML = "방금";
        } else if ( month_gap == 0 && day_gap == 0 && hour_gap == 0) {
            timeGap[i].innerHTML = min_gap +"분";
        } else if ( month_gap == 0 && day_gap == 0) {
            timeGap[i].innerHTML = hour_gap + "시간";
        } else if (month_gap == 0) {
            timeGap[i].innerHTML = day_gap + "일";
        } else {
            timeGap[i].innerHTML = month_gap + "달";
        }
    }
}

if(commentBlock) {
    init();
}