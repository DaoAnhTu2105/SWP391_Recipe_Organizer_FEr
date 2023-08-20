import { Button } from 'bootstrap'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Card, CardMedia, Rating, CardContent, Typography } from '@mui/material'

const SearchResult = () => {
    const location = useLocation()
    const searchResult = location.state?.searchResult
    const result = searchResult.data
    return (
        <>
            <div className="container">
                {result.length === 0 ? (
                    <div>
                        <h1 style={{ textAlign: 'center' }}>Couldn't find any recipes</h1>
                        <div style={{ textAlign: 'center' }}>
                            <Link to="/">
                                <button
                                    style={{
                                        padding: '10px 50px',
                                        marginTop: 50,
                                        marginBottom: 150,
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        backgroundColor: '#f39c12',
                                        color: 'white',
                                        fontSize: 25,
                                        outline: 'none',
                                        border: 'none',
                                    }}
                                >
                                    Back To Home
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="row justify-content-center mt-5">
                        {result &&
                            Array.isArray(result) &&
                            result.map((recipe) => (
                                <div className="col-sm-4 mb-4" key={recipe.recipeId}>
                                    <Card style={{ width: 345, maxHeight: 470 }}>
                                        <Link to={`/recipe-detail/${recipe.recipeId}`}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image={recipe.photoVMs[0].photoName}
                                                alt="Perfect Pancakes"
                                            />
                                            <Rating
                                                name="read-only"
                                                value={recipe.aveVote}
                                                readOnly
                                                size="small"
                                                sx={{ mt: 2 }}
                                            />
                                            <CardContent>
                                                <Typography variant="body3" color="text.secondary">
                                                    {new Date(
                                                        recipe.updateTime
                                                    ).toLocaleDateString()}
                                                </Typography>
                                                <br></br>
                                                <br></br>
                                                <Typography variant="body2" color="text.primary">
                                                    {recipe.recipeName}
                                                </Typography>
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default SearchResult