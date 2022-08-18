import axios from "axios";

// const user = JSON.parse(localStorage.getItem("persist:root")).user;
// const token = JSON.parse(user).currentUser.token;
// console.log(token);

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const token = currentUser?.token;

const BASE_URL = "http://localhost:5000/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
