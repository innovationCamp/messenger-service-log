import axios from "axios";
axios.defaults.withCredentials = true;

const devInstance = axios.create({
    baseURL: `${process_env.SERVER}/api`,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

export { devInstance };
