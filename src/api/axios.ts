import axios from "axios";

const devInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 3000,
});

export { devInstance };