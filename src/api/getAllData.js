import {
    fetchDataStart,
    fetchDataSuccess,
    fetchDataFailure,
} from '../redux/reducers/getAllDataRecipes'

const getAllRecipesApi = `https://recipe-organizer-api.azurewebsites.net/api/Recipes/GetAll`

export const fetchApiData = () => async (dispatch) => {
    try {
        dispatch(fetchDataStart())
        const response = await fetch(getAllRecipesApi)
        const data = await response.json()
        dispatch(fetchDataSuccess(data))
    } catch (error) {
        dispatch(fetchDataFailure(error.message))
    }
}
