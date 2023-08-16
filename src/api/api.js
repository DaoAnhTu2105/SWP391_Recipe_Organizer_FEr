import axios from "axios";
import { useCookies } from 'react-cookie'

const url = "https://recipe-organizer-api.azurewebsites.net";
const instance = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const [cookies, setCookie] = useCookies(['user'])
        const storedUserData = cookies.user
        console.log(storedUserData.role);
        const accessToken = storedUserData?.token;
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
