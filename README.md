# Facebook - clone 

- [완성된 사이트]

<br>


## 1. 기능 소개 

### 1. Home 
> 로그인 및 회원가입을 할 수 있는 페이지 입니다.<br><br>
> 1-1. 회원가입 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 비밀번호 정규식 사용 (영문,숫자,특수문자 포함한 8~16자리)<br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 비동기로 이메일 중복체크<br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - pbkdf2-password를 이용한 비밀번호 암호화 <br>
> 1-2. 로그인 <br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - [passport.JS]를 이용하여 로그인 처리 및 세션 유지 기능<br> 


### 2. Main 
> 게시물 관련 작업 및 광고가 노출되어 있는 페이지 입니다. 
> <br><br>
> 2-1. 게시물(Feed)<br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Feed 등록, 수정, 삭제 기능<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Feed 작성시 이미지 파일을 추가할 경우 선택한 이미지 파일 미리보기<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 작성자에게만 수정과 삭제 기능 부여<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 작성자가 아닌 계정은 다른 사람의 feed를 보관하거나 보지 않을 수 있음  
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 자신과 친구의 Feed만 Main에 노출<br> 
> 2-2. 댓글 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 댓글 등록, 수정, 삭제<br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 대댓글 등록, 수정, 삭제<br>
> 2-3. 광고 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 등록해 놓은 광고가 랜덤으로 3개씩 노출  

### 3. Header 
> Home화면을 제외한 모든 페이지에 적용되어 있는 부분입니다.<br><br>
> 3-1. 검색<br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 검색 기능<br> 
> 3-2. 친구 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 현재 가입한 유저들 중 5명씩 랜덤으로 친구 추천<br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 친구 요청 및 수락 삭제 기능<br> 
> 3-3. 로그아웃<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 로그아웃 및 세션 제거 

### 4. Person 
> 사용자의 개인페이지로 개인정보 수정, 보관한 게시물 보기 등을 할 수 있는 페이지 입니다. <br><br>
>  4-1. 게시물(Feed) <br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 사용자 개인페이지에서는 그 페이지의 계정이 등록한 게시물만 모음 <br>
>  4-2. 소개 및 친구 <br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -등록해 놓은 정보가 소개부분에 노출, 간단한 소개글 추가 및 수정 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 만약 아무런 정보를 등록하지 않았다면, 해당 페이지 계정의 생일만 노출 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 해당 페이지 계정과의 친구 목록을 볼 수 있음 <br> 
> 4-3. 정보<br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 경력, 거주장소, 연락처 및 기본정보 등록, 수정, 삭제<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 해당 페이지 계정 본인에게만 비밀번호, 프로필 사진 변경 메뉴 노출 <br>
> 4-4. 보관함 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 자신이 보관한 피드들을 masonry 레이아웃으로 보여줌 

### 5. Search 
> header에서 검색한 결과를 보여주는 페이지 입니다. <br><br>
> 5-1. 검색결과<br> 
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 검색어와 일치하는 인물 또는 게시글을 보여줌 <br>
> 5-2. 광고 <br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Main페이지와 동일하게 광고 노출

### 6. Responsive Web 

<br>
<br>

## 2. 사용 도구 

### Front-end

- PUG 
- SCSS
- Vanilla JavaScript 
- babel 
- webpack 

### Back-end 
- AWS 
  - Mysql (RDS) 
  - Storage (S3) 
-  Node.js (Express)
-  Heroku 




[완성된 사이트]:https://mighty-fortress-41280.herokuapp.com/
[passport.JS]:http://www.passportjs.org/