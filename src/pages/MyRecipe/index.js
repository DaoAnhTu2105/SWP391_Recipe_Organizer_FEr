import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { Box, Typography, Rating, CardContent } from '@mui/material';
import { Link } from 'react-router-dom'
const MyRecipe = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const accessToken = user?.token
    const [allMyRecipes, setAllMyRecipes] = useState('')
    const allMyRecipessUrl = `https://recipe-organizer-api.azurewebsites.net/api/Recipes/GetByCooker`;
    const getAllMyRecipes = () => {
        fetch(allMyRecipessUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setAllMyRecipes(data)
            })
            .catch((error) => console.log(error.message));
    };
    useEffect(() => {
        getAllMyRecipes();
    }, []);
    console.log(allMyRecipes)

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box sx={{ height: '100vh' }} >
                    <Box sx={{ paddingTop: "50px" }}>
                        <Typography>
                            All My Recipes
                        </Typography>
                    </Box>
                    <Box sx={{ paddingTop: "100px" }}>
                        {allMyRecipes?.data &&
                            allMyRecipes?.data.map((myRecipe) => (
                                <div
                                    className="col-sm-12 mb-4"
                                    key={myRecipe.recipeId}

                                >
                                    <Link to={`/recipe-detail/${myRecipe.recipeId}`}>
                                        <Box style={{ display: "flex" }}>
                                            <img
                                                style={{ maxWidth: 350, height: 250 }}
                                                src={myRecipe.photoVMs[0].photoName}
                                                alt={myRecipe.recipeName}
                                            />
                                            <Box>
                                                <h5
                                                    className="mt-3"
                                                    style={{ fontWeight: '600', fontSize: "50px" }}
                                                >
                                                    {myRecipe.recipeName}
                                                </h5>
                                            </Box>

                                        </Box>


                                    </Link>
                                </div>
                            ))}
                    </Box>

                </Box>
            </Container>
        </React.Fragment>

    )
}
export default MyRecipe