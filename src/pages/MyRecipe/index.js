import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { Box, Typography, Rating, CardContent } from '@mui/material';
import { Link } from 'react-router-dom'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
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
                <Box sx={{ height: 'auto' }} >
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
                                    style={{ display: "flex" }}
                                >
                                    <Link to={`/recipe-detail/${myRecipe.recipeId}`}>
                                        <Box style={{ display: "flex" }}>
                                            <img
                                                style={{ maxWidth: 280, height: 100 }}
                                                src={myRecipe.photoVMs[0].photoName}
                                                alt={myRecipe.recipeName}
                                            />
                                            <Box sx={{ paddingLeft: "55px", maxWidth: "800px", width: "700px", paddingBottom: "20px" }}>
                                                <h5
                                                    style={{ fontWeight: '600', fontSize: "35px" }}
                                                >
                                                    {myRecipe.recipeName}
                                                </h5>
                                                <h5 style={{ fontWeight: '300', fontSize: "15px" }}>
                                                    {new Date(myRecipe.updateTime).toLocaleDateString()}
                                                </h5>
                                            </Box>
                                        </Box>
                                    </Link>
                                    <Box>
                                        <Box>
                                            <Link to={`/update-recipe/${myRecipe.recipeId}`}>
                                                <ModeEditOutlineIcon />
                                            </Link>
                                        </Box>
                                        <Box>
                                            <DeleteSweepIcon />
                                        </Box>
                                    </Box>
                                </div>
                            ))}
                    </Box>

                </Box>
            </Container>
        </React.Fragment>

    )
}
export default MyRecipe