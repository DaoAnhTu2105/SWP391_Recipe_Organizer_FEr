import img1 from '../../img/bg-img/r1.jpg'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
// import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography'
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import Rating from '@mui/material/Rating'
import bestImg from '../../img/bg-img/r1.jpg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDataAsync } from '../../redux/reducers/getAllDataRecipes'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const HomePage = () => {
    const dispatch = useDispatch()
    const getAllRecipesAPI = useSelector((state) => state.getAllRecipes.data)

    const isLoading = useSelector((state) => state.getAllRecipes.isLoading)
    const error = useSelector((state) => state.getAllRecipes.error)
    useEffect(() => {
        dispatch(fetchDataAsync())
    }, [dispatch])

    if (isLoading === 'loading') {
        return <div>Loading...</div>
    }

    if (error === 'failed') {
        return <div>Error: {error}</div>
    }

    return (
        <>
            <h1 className="title-recipes">Best Recipes</h1>
            <section className="best-receipe-area">
                <div className="container">
                    {getAllRecipesAPI.data ? (
                        <div className="row mt-5">
                            {getAllRecipesAPI.data &&
                                getAllRecipesAPI.data.map(
                                    (bestRecipe) =>
                                        bestRecipe.aveVote > 4 &&
                                        bestRecipe.totalFavorite > 1 && (
                                            <div
                                                className="col-12 col-sm-6 col-lg-4"
                                                key={bestRecipe.recipeId}
                                            >
                                                <Link to={`/recipe-detail/${bestRecipe.recipeId}`}>
                                                    <div className="single-best-receipe-area mb-30">
                                                        <img src={bestImg} alt="" />
                                                        <div className="receipe-content">
                                                            <Link to="/recipe-detail">
                                                                <h5>Sushi Easy Receipy</h5>
                                                            </Link>
                                                            <Rating
                                                                name="read-only"
                                                                value={bestRecipe.aveVote}
                                                                readOnly
                                                                size="small"
                                                            />
                                                            <CardContent>
                                                                <Typography
                                                                    variant="body3"
                                                                    color="text.secondary"
                                                                    style={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                    }}
                                                                >
                                                                    {bestRecipe.totalFavorite}
                                                                    &nbsp; &nbsp;
                                                                    <FavoriteBorderIcon />
                                                                </Typography>
                                                            </CardContent>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                )}
                        </div>
                    ) : (
                        <div className="row mt-5">
                            <div className="col-12 col-sm-12 col-lg-12">
                                There are currently no likes and reviews
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <h1 className="title-recipes">Lastest Recipes</h1>
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
                        {getAllRecipesAPI.data &&
                            getAllRecipesAPI.data.map((recipe) => (
                                <div className="col-sm-4 mb-4" key={recipe.recipeId}>
                                    <Link to={`/recipe-detail/${recipe.recipeId}`}>
                                        <Card sx={{ maxWidth: 345, maxHeight: 470 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image={recipe.photoVMs[0].photoName}
                                                alt={recipe.photoVMs[0].photoName}
                                            />

                                            <Rating
                                                name="read-only"
                                                value={recipe.aveVote}
                                                readOnly
                                                size="small"
                                                sx={{ mt: 2 }}
                                            />

                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {recipe.recipeName}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
