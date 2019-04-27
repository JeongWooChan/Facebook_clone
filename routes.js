// Global 
const HOME = "/"; 
const JOIN = "/join"; 
const LOGIN = "/login"; 
const LOGOUT = "/logout"; 

// Feed 
const MAIN = "/main"; 
const PERSON = "/:id"; 
const PERSON_INFO = "/:id/info"

// API 
const API = "/api"; 
const EMAIL_CHECK = "/email_check";

const routes = {
    home : HOME,
    join : JOIN, 
    login : LOGIN,
    logout : LOGOUT,
    main : MAIN, 
    api: API, 
    email_check: EMAIL_CHECK, 
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
    }
}

export default routes;