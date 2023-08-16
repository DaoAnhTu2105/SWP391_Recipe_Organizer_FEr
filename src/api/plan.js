import api from "./api";

export const getPlanWeek = async (date) => {
    const response = await api.get(`/schedul/Plans/GetPlanWeek?date=${date}`);
    return response.data;
};