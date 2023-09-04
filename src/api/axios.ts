import axios from "axios";
axios.defaults.withCredentials = true;

const devInstance = axios.create({
    //// baseURL: "http://3.39.250.124:8080/api",
    
    baseURL: `${process.env.SERVER}/api`,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

export { devInstance };
