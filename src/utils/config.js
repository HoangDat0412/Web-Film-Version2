export const DOMAIN = "http://125.212.204.211/api/v1/films";
export const TOKEN = "accessToken";
export const USER_LOGIN = "USER_LOGIN";
export const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  