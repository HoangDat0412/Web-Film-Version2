export const DOMAIN = "http://117.1.29.215:4000/api/v1/films";
export const LINKBE = 'http://117.1.29.215:4000'
export const TOKEN = "accessToken";
export const USER_LOGIN = "USER_LOGIN";
export const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  