import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Rating, CardActions, Button } from '@mui/material'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { userFavor } from '../../redux/apiThunk/getFavoriteUserThunk'
import { removeFavor } from '../../redux/apiThunk/getFavoriteUserThunk'

const FavoriteRecipe = () => {
    const dispatch = useDispatch()
    const getUserFavor = useSelector((state) => state.uFavor.userFavorites)
    const favorite = getUserFavor?.data
    const [reload, setReload] = useState(false)
    const handleRemove = async (recipeId) => {
        await dispatch(removeFavor(recipeId))
        setReload(!reload)
    }
    useEffect(() => {
        dispatch(userFavor())
    }, [dispatch, reload])
    return (
        <>
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    style={{ color: '#f39c12', marginTop: 20 }}
                    gutterBottom
                >
                    Favorite Recipes
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    All your favorite content in one place!
                </Typography>
            </Container>
            {favorite?.length !== 0 ? (
                <>
                    <div
                        style={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: 40,
                        }}
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                {favorite &&
                                    Array.isArray(favorite) &&
                                    favorite.map((favor) => (
                                        <div className="col-sm-4 mb-4" key={favor.recipeId}>
                                            <Card style={{ width: 345, maxHeight: 470 }}>
                                                <Link to={`/recipe-detail/${favor.recipeId}`}>
                                                    <CardMedia
                                                        component="img"
                                                        style={{ width: 350, height: 194 }}
                                                        image={favor.photoVMs[0].photoName}
                                                        alt="Perfect Pancakes"
                                                    />
                                                    <Rating
                                                        name="read-only"
                                                        value={favor.aveVote}
                                                        readOnly
                                                        size="small"
                                                        sx={{ mt: 2 }}
                                                    />
                                                </Link>
                                                <CardContent>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {favor.recipeName}
                                                    </Typography>
                                                    <br></br>
                                                    <CardActions
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <Button
                                                            size="small"
                                                            style={{
                                                                outline: 'none',
                                                                color: '#f39c12',
                                                            }}
                                                            onClick={() =>
                                                                handleRemove(favor.recipeId)
                                                            }
                                                        >
                                                            Remove
                                                        </Button>
                                                    </CardActions>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div style={{ marginTop: 50 }}>
                    <h3 style={{ textAlign: 'center' }}>No favorite recipes yet</h3>
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
            )}
        </>
    )
}
export default FavoriteRecipe
