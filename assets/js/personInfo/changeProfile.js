const personInfo_content_changeProfileImg = document.getElementById("personInfo_content_changeProfileImg"); 
const avatarFile = document.getElementById("avatar");
const imgPreview = document.getElementById("personInfo_imgPreview");
const basicPreview = document.getElementById("personInfo_basic_imgPreview");

const init = () => {
    avatarFile.addEventListener('change', function (e) {
        const existImg = imgPreview.querySelector("#personInfo_imagePreview_img");

        // 파일선택을 두번했을 때 이미지가 두개 이상이 되는 것을 방지하기 위해서 
        // 먼저 append된 이미지는 삭제시켜준다. 
        if(existImg) {
            existImg.remove();
        }
        const get_file = e.target.files;
        let image = document.createElement('img');
        // FileReader 객체 생성 
        const reader = new FileReader();

        reader.onload = (function (aImg) {

            return function (e) {
                aImg.src = e.target.result
            }
        })(image)
        

        if(get_file) {
            reader.readAsDataURL(get_file[0]); 
        }
        basicPreview.remove();
        image.id = "personInfo_imagePreview_img";
        imgPreview.appendChild(image);
    });
}

if(personInfo_content_changeProfileImg) {
    init();
}