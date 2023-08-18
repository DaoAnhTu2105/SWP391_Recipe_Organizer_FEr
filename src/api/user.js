import api from "./api";

export const getUsers = async (date) => {
    const response = await api.get(`/api/UserAccounts/GetAllUser`);
    return response.data;
};

export const updateRole = async (id, role) => {
    const response = await api.get(`/api/UserAccounts/ChangeRole?id=${id}&roleChange=${role}`);
    return response.data;
};