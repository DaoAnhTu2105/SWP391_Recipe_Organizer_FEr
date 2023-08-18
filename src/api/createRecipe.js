const createRecipeApi = `https://recipe-organizer-api.azurewebsites.net/api/Recipes/AddRecipe`

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





const postData = createAsyncThunk(
    'postData',
    async (data, thunkAPI) => {

        const config = {
            method: 'post',
            url: '',
            headers: {
                'Authorization': '',
                'Content-Type': ''
            },
            data: data
        };

        const response = await axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        return response.data
    }
)

const initialState = {};

// Then, handle actions in your reducers:
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Do something while pending if you want.
        builder.addCase(postData.pending, (state, action) => {})
        // Do something when passes.
        builder.addCase(postData.fulfilled, (state, action) => {})
        // Do something if fails.
        builder.addCase(postData.rejected, (state, action) => {})
    },
})