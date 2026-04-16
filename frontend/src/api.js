import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:2500",
  baseURL: "https://food-hub-mern-stack-5kxx.vercel.app",
});

export default api;
