// Global 
const HOME = "/"; 
const JOIN = "/join"; 
const LOGIN = "/login"; 
const LOGOUT = "/logout"; 

// Feed 
const MAIN = "/main"; 
const PERSON = "/:id"; 
const PERSON_INFO = "/:id/info";
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
const ADD_COMMENT = "/:id/comment"; 


const routes = {
    home : HOME,
    join : JOIN, 
    login : LOGIN,
    logout : LOGOUT,
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
    addComment: ADD_COMMENT
}

export default routes;