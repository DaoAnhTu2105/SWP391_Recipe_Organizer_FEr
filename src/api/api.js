import axios from "axios";
import Cookies from 'js-cookie';

const url = "https://recipe-organizer-api.azurewebsites.net";
const instance = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const user = Cookies.get('user');
        const accessToken = user?.token;
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
