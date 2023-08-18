const getAllRecipesApi = `https://recipe-organizer-api.azurewebsites.net/api/Recipes/GetAll`
const getAllRecipesById = `https://recipe-organizer-api.azurewebsites.net/api/Recipes/Get?id=`
export const fetchData = async () => {
    try {
        const response = await fetch(getAllRecipesApi)
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`)
    }
}

export const fetchDetailData = async (id) => {
    try {
        const response = await fetch(`${getAllRecipesById}${id}`)
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }
        const data = await response.json()
        console.log('Recipe detail: ', data)
        return data
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`)
    }
}
