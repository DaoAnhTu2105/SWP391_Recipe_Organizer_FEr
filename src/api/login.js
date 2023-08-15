import axios from "axios";
const URL = "https://recipe-organizer-api.azurewebsites.net";

const instance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const login = async (credential) => {
    const response = await instance.post("/api/UserAccounts/CheckLogin", credential);
    return response.data;
};
