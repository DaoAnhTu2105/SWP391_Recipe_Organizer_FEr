import api from './api'

export const userReview = async (data) => {
    const response = await api.post(`/api/Reviews/AddReview`, data)
    return response.data
}
