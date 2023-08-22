import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDataAsync } from '../../redux/apiThunk/getAllRecipesThunk'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box } from '@mui/material'
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import CircularProgress from '@mui/material/CircularProgress'
import { bestRecipes } from '../../redux/apiThunk/getBestRecipeThunk'
import { favoritesRecipe } from '../../redux/apiThunk/getFavoritesRecipeThunk'

const HomePage = () => {
    const dispatch = useDispatch()
    const dispatchBestRecipes = useDispatch()
    const dispatchFavoriteRecipes = useDispatch()
    const getAllRecipesAPI = useSelector((state) => state.getAllRecipes.getAllRecipes)
    const bestRecipesAPI = useSelector((state) => state.bestRecipe.bestRecipes)
    const favoriteRecipeAPI = useSelector((state) => state.favoriteRecipe.favoriteRecipe)
    const status = useSelector((state) => state.getAllRecipes.isLoading)

    useEffect(() => {
        dispatch(fetchDataAsync())
        dispatchBestRecipes(bestRecipes())
        dispatchFavoriteRecipes(favoritesRecipe())
    }, [dispatch, dispatchBestRecipes, dispatchFavoriteRecipes])

    return (
        <>
            {status === 'loading' ? (
                <CircularProgress
                    sx={{
                        marginTop: '10%',
                        marginLeft: '47%',
                        marginBottom: '10%',
                    }}
                />
            ) : (
                <div className="container-fluid">
                    <div className="mt-5">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            mousewheel={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
                            className="mySwiper"
                            style={{ width: 1200, height: 700, cursor: 'pointer' }}
                        >
                            {favoriteRecipeAPI.data &&
                                Array.isArray(favoriteRecipeAPI.data) &&
                                favoriteRecipeAPI.data.map((favorite) => (
                                    <SwiperSlide key={favorite.photoVMs[0].photoId}>
                                        <Link to={`/recipe-detail/${favorite.recipeId}`}>
                                            <div className="slide-container">
                                                <img
                                                    className="slide-image"
                                                    src={favorite.photoVMs[0].photoName}
                                                    alt={favorite.recipeName}
                                                />
                                                <div className="slide-overlay slide-delay">
                                                    <h2
                                                        className="slide-title"
                                                        style={{ color: '#f39c12' }}
                                                    >
                                                        {favorite.recipeName}
                                                    </h2>
                                                    <p className="slide-description">
                                                        {favorite.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                    <section className="best-receipe-area">
                        <h1 className="title-recipes">Best Recipes</h1>
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
                                    {bestRecipesAPI.data &&
                                        Array.isArray(bestRecipesAPI.data) &&
                                        bestRecipesAPI.data.map((bestRecipe) => (
                                            <div
                                                className="col-sm-4 mb-4"
                                                key={bestRecipe.recipeId}
                                            >
                                                <Link to={`/recipe-detail/${bestRecipe.recipeId}`}>
                                                    <img
                                                        style={{ maxWidth: 350, height: 250 }}
                                                        src={bestRecipe.photoVMs[0].photoName}
                                                        alt={bestRecipe.recipeName}
                                                    />
                                                    <h5
                                                        className="mt-3"
                                                        style={{ fontWeight: '600' }}
                                                    >
                                                        {bestRecipe.recipeName}
                                                    </h5>
                                                    <Box
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <Rating
                                                            name="read-only"
                                                            value={bestRecipe?.aveVote}
                                                            readOnly
                                                            precision={0.5}
                                                            size="small"
                                                        />
                                                        &nbsp; &nbsp;
                                                        <span
                                                            style={{ color: 'rgba(71,71,71, 0.6)' }}
                                                        >
                                                            {bestRecipe?.totalReview} ratings
                                                        </span>
                                                    </Box>
                                                    <CardContent
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="body3"
                                                            color="text.primary"
                                                        >
                                                            {bestRecipe?.totalFavorite}
                                                        </Typography>
                                                        &nbsp; &nbsp;
                                                        <Typography
                                                            style={{
                                                                backgroundColor: 'white',
                                                                height: '20px',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                outline: 'none',
                                                            }}
                                                        >
                                                            {bestRecipe?.isFavorite ? (
                                                                <FavoriteBorderIcon
                                                                    style={{ color: 'orange' }}
                                                                />
                                                            ) : (
                                                                <FavoriteBorderIcon
                                                                    style={{ color: 'black' }}
                                                                />
                                                            )}
                                                        </Typography>
                                                    </CardContent>
                                                </Link>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
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
                                        Array.isArray(getAllRecipesAPI.data) &&
                                        getAllRecipesAPI.data.map((recipe) => (
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
                                                            precision={0.5}
                                                            size="small"
                                                            sx={{ mt: 2 }}
                                                        />
                                                        <CardContent>
                                                            <Typography
                                                                variant="body1"
                                                                color="text.primary"
                                                                style={{
                                                                    fontWeight: 600,
                                                                    fontSize: 15,
                                                                }}
                                                            >
                                                                {recipe.recipeName}
                                                            </Typography>
                                                            <br></br>
                                                            <Typography
                                                                variant="body3"
                                                                color="text.secondary"
                                                            >
                                                                {new Date(
                                                                    recipe.updateTime
                                                                ).toLocaleDateString()}
                                                            </Typography>
                                                        </CardContent>
                                                    </Link>
                                                </Card>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HomePage
