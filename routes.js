// Global 
const HOME = "/"; 
const JOIN = "/join"; 
const LOGIN = "/login"; 
const LOGOUT = "/logout"; 
const SEARCH = "/search";

// Feed 
const MAIN = "/main"; 
const PERSON = "/:id"; 
const PERSON_INFO = "/:id/info";
const FEED_STORE = "/:id/feedStore"; 
const UPLOAD = "/upload";
const EDIT_FEED = "/:id/edit-feed";
const DELETE_FEED = "/:id/delete-feed"; 

// User 
const USER = "/user";
const CHANGE_PASSWORD = "/change-password";

const CHANGE_PHONE = "/change-phone";   
const DELETE_PHONE = "/delete-phone";

const CHANGE_BIRTHDAY = "/change-birthday"; 

const CHANGE_BLOODTYPE = "/change-bloodtype";
const DELETE_BLOODTYPE = "/delete-bloodtype";

const CHANGE_RESIDENCE = "/change-residence"; 
const DELETE_RESIDENCE = "/delete-residence";

const CHANGE_HOMETOWN = "/change-hometown"; 
const DELETE_HOMETOWN = "/delete-hometown";

const CHANGE_COMPANY = "/change-company"; 
const DELETE_COMPANY = "/delete-company"; 

const CHANGE_UNIVERSITY = "/change-university"; 
const DELETE_UNIVERSITY = "/delete-university"; 

const EDIT_PROFILE = "/edit-profile";


// API 
const API = "/api"; 
const EMAIL_CHECK = "/email_check";
const CHECK_PASSWORD = "/checkPassword";

const ADD_INTRODUCE = "/:id/introduce";

const ADD_COMMENT = "/:id/comment"; 
const DELETE_COMMENT = "/:id/deleteComment";
const EDIT_COMMENT = "/:id/editComment";

const ADD_REPLY = "/:id/reply"; 
const DELETE_REPLY = "/:id/deleteReply"; 
const EDIT_REPLY = "/:id/editReply";

const LIKE = "/:id/like";

const REQ_FRINED = "/requestFriend"; 
const ADD_FRIEND = "/addFriend"; 
const DELETE_REQ_FRIENC = "/deleteRequestFriend";

const ADD_STORE = "/addStore"; 


const routes = {
    home : HOME,
    join : JOIN, 
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    main : MAIN, 
    api: API, 
    email_check: EMAIL_CHECK, 
    user: USER, 
    changePassword: CHANGE_PASSWORD,
    changePhone: CHANGE_PHONE,
    deletePhone: DELETE_PHONE,
    changeBirthday: CHANGE_BIRTHDAY,
    changeBloodType: CHANGE_BLOODTYPE,
    deleteBloodType: DELETE_BLOODTYPE,
    changeResidence: CHANGE_RESIDENCE,
    deleteResidence: DELETE_RESIDENCE,
    changeHometown: CHANGE_HOMETOWN,
    deleteHometown: DELETE_HOMETOWN,
    changeCompany: CHANGE_COMPANY,
    deleteCompany: DELETE_COMPANY,
    changeUniversity: CHANGE_UNIVERSITY,
    deleteUniversity: DELETE_UNIVERSITY,
    editProfile: EDIT_PROFILE,
    person: (id) => {
        if(id) {
            return `/main/${id}`;
        } else {
            return PERSON;
        }
    }, 
    personInfo: (id) => {
        if(id) {
            return `/main/${id}/info`;
        } else {
            return PERSON_INFO;
        }
    }, 
    feedStore: (id) => {
        if(id) {
            return `/main/${id}/feedStore`;
        } else {
            return FEED_STORE
        }
    },
    checkPassword: CHECK_PASSWORD, 
    upload: UPLOAD, 
    editFeed: (id) => {
        if(id) {
            return `/main/${id}/edit-feed`; 
        } else {
            return EDIT_FEED;
        }
    }, 
    deleteFeed: (id) => {
        if(id) {
            return `/main/${id}/delete-feed`;
        } else {
            return DELETE_FEED;
        }
    }, 
    addComment: ADD_COMMENT, 
    deleteComment: DELETE_COMMENT,
    editComment: EDIT_COMMENT,
    addReply: ADD_REPLY,
    deleteReply: DELETE_REPLY,
    editReply: EDIT_REPLY,
    like:LIKE,
    addIntroduce: ADD_INTRODUCE,
    reqFriend: REQ_FRINED,
    addFriend: ADD_FRIEND, 
    deleteRequesetFriend: DELETE_REQ_FRIENC,
    addStore: ADD_STORE
}

export default routes;