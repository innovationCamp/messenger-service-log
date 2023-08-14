import axios from "axios";
axios.defaults.withCredentials = true;

const devInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

export { devInstance };