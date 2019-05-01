// Global 
const HOME = "/"; 
const JOIN = "/join"; 
const LOGIN = "/login"; 
const LOGOUT = "/logout"; 

// Feed 
const MAIN = "/main"; 
const PERSON = "/:id"; 
const PERSON_INFO = "/:id/info";

// User 
const USER = "/user";
const CHANGE_PASSWORD = "/change-password";
const CHANGE_PHONE = "/change-phone";   
const CHANGE_BIRTHDAY = "/change-birthday"; 
const CHANGE_BLOODTYPE = "/change-bloodtype"; 
const CHANGE_RESIDENCE = "/change-residence"; 
const CHANGE_HOMETOWN = "/change-hometown"; 
const CHANGE_COMPANY = "/change-company"; 

// API 
const API = "/api"; 
const EMAIL_CHECK = "/email_check";
const CHECK_PASSWORD = "/checkPassword";

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
    changeBirthday: CHANGE_BIRTHDAY,
    changeBloodType: CHANGE_BLOODTYPE,
    changeResidence: CHANGE_RESIDENCE,
    changeHometown: CHANGE_HOMETOWN,
    changeCompany: CHANGE_COMPANY,
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
    checkPassword: CHECK_PASSWORD
}

export default routes;