import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2500",
  // baseURL: "https://food-hub-fullstack-backend.vercel.app",
});

export default api;
