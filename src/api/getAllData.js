import api from './api'

const getAllRecipesApi = `https://recipe-organizer-api.azurewebsites.net/api/Recipes/GetAll`

export const getAllRecipe = async (date) => {
    const response = await api.get(`/api/Recipes/GetAll`);
    return response.data;
};

// export const fetchData = async () => {
//     try {
//         const response = await fetch(getAllRecipesApi)

//         if (!response.ok) {
//             console.error('Failed to fetch data. Status:', response.status)
//             throw new Error(`Failed to fetch data. Status: ${response.status}`)
//         }

//         const data = await response.json()
//         // console.log('Fetched data:', data)
//         return data
//     } catch (error) {
//         console.error('Error fetching data:', error.message)
//         throw new Error(`Error fetching data: ${error.message}`)
//     }
// }
