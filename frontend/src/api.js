import axios from "axios";

const api = axios.create({
    baseURL: "https://leave-managament-system.onrender.com"
});

export default api;
