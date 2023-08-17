import api from "./api";

export const getPlanWeek = async (date) => {
    const response = await api.get(`/api/Plans/GetPlanWeek?date=${date}`);
    return response.data;
};

export const getPlanDate = async (date) => {
    const response = await api.get(`/api/Plans/GetPlan?date=${date}`);
    return response.data;
};