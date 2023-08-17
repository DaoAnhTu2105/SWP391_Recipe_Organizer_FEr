import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
// import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography'
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDataAsync } from '../../redux/reducers/getAllDataRecipes'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Button, Box } from '@mui/material'
import { useState } from 'react'
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

const HomePage = () => {
    const dispatch = useDispatch()
    const getAllRecipesAPI = useSelector((state) => state.getAllRecipes.data)
    console.log(getAllRecipesAPI)
    useEffect(() => {
        dispatch(fetchDataAsync())
    }, [dispatch])
    const images = [
        {
            image: 'https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg',
            name: 'Perfect Pancakes',
            description:
                'Serve these pancakes with butter and syrup, or up the ante with toppings such as sprinkles, chopped bittersweet chocolate, and sliced or chopped fruit for a perfect breakfast.',
        },
        {
            image: 'https://www.allrecipes.com/thmb/aIj82l62AOxezVyHOMXg7HJojgk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7567649_Briquette-Grilled-Ribeye-Steak_Yoly_4x3-7c200441d55e4eeda1f90c7902a0e147.jpg',
            name: 'Charcoal-Grilled Ribeye Steak',
            description:
                'Ribeye steak, seasoned salt, and pepper are all you need for a perfectly grilled steak. Make sure your briquettes are red hot.',
        },
        {
            image: 'https://www.allrecipes.com/thmb/tWd5RZBorGBNJGltuNhX0-nYIRc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/263330-instant-pot-mexican-rice-3x4-151-copy-b40cff6ceab84a46beb1c130d15643bc.jpg',
            name: 'Instant Pot Mexican Rice',
            description:
                'Make Spanish rice in an Instant Pot for a wonderful side dish for any Mexican meal.',
        },
    ]

    return (
        <>
            <div className="container-fluid">
                <div className="mt-5">
                    {getAllRecipesAPI.data && (
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
                            <Link to="/recipe-detail">
                                {getAllRecipesAPI.data.map((image) => (
                                    <SwiperSlide key={image.photoVMs[0].photoId}>
                                        <div className="slide-container">
                                            <img
                                                className="slide-image"
                                                src={image.photoVMs[0].photoName}
                                                alt={image.recipeName}
                                            />
                                            <div className="slide-overlay slide-delay">
                                                <h2
                                                    className="slide-title"
                                                    style={{ color: '#f39c12' }}
                                                >
                                                    {image.recipeName}
                                                </h2>
                                                <p className="slide-description">
                                                    {image.description}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Link>
                        </Swiper>
                    )}
                </div>
                {/* on-going */}
                <div className="mt-5">
                    <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Link to="/recipe-detail">
                            <Card
                                sx={{
                                    display: 'flex',
                                    width: 500,
                                    borderLeft: '4px solid #f39c12',
                                    cursor: 'pointer',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignContent: 'center' }}>
                                    <CardContent>
                                        <Typography component="div" variant="h5">
                                            Authentic Chicken Adobo
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Philippines
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 250, height: 200 }}
                                    image="https://www.allrecipes.com/thmb/GpCdaXApkRjAUnDyOzaKOgPBxEQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1126855-Slow-Cooker-Chicken-Adobo-Photo-by-Snacking-in-the-Kitchen-resized-82e2e03a907740709abaf4b8c01c9eaf.jpg"
                                    alt="Live from space album cover"
                                />
                            </Card>
                        </Link>
                        <Link to="/recipe-detail">
                            <Card sx={{ display: 'flex', width: 500, cursor: 'pointer' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignContent: 'center',
                                        borderLeft: '4px solid #f39c12',
                                    }}
                                >
                                    <CardContent>
                                        <Typography component="div" variant="h5">
                                            Prosciutto-Wrapped Pork Tenderloin
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Asian
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 250, height: 200 }}
                                    image="https://www.allrecipes.com/thmb/ifNsu4fHS9Mkk19IXpVKDB24k_s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2930533-prosciutto-wrapped-pork-tenderloin-with-crispy-sage-hello-angie-4x3-1-a290eeae1f874874a153339d5398357a.jpg"
                                    alt="Live from space album cover"
                                />
                            </Card>
                        </Link>
                    </Box>
                </div>
                <section className="best-receipe-area">
                    <h1 className="title-recipes">Best Recipes</h1>
                    <div className="container">
                        {getAllRecipesAPI.data &&
                        getAllRecipesAPI.data.aveVote > 4 &&
                        getAllRecipesAPI.data.totalFavorite >= 1000 ? (
                            getAllRecipesAPI.data.map((bestRecipe, index) => (
                                <div className="mt-5" key={index}>
                                    <div
                                        className="single-best-receipe-area mb-30"
                                        style={{ display: 'flex', justifyContent: 'center' }}
                                    >
                                        <div className="receipe-content">
                                            <Link to="/recipe-detail">
                                                <img
                                                    style={{ maxWidth: 350, height: 250 }}
                                                    src={bestRecipe.photoVMs[0].photoName}
                                                    alt={bestRecipe.recipeName}
                                                />
                                                <h5 className="mt-3" style={{ fontWeight: '600' }}>
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
                                                        value={bestRecipe.aveVote}
                                                        readOnly
                                                        size="small"
                                                    />
                                                    &nbsp; &nbsp;
                                                    <span style={{ color: 'rgba(71,71,71, 0.6)' }}>
                                                        {bestRecipe.totalReview}
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
                                                        {bestRecipe.totalFavorite}
                                                    </Typography>
                                                    <Button
                                                        style={{
                                                            backgroundColor: 'white',
                                                            height: '20px',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            outline: 'none',
                                                        }}
                                                        onClick={''}
                                                    >
                                                        {bestRecipe.isFavorite ? (
                                                            <FavoriteBorderIcon
                                                                style={{ color: 'orange' }}
                                                            />
                                                        ) : (
                                                            <FavoriteBorderIcon
                                                                style={{ color: 'black' }}
                                                            />
                                                        )}
                                                    </Button>
                                                </CardContent>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h3 style={{ color: 'rgba(71,71,71, 0.7)' }} className="mt-5">
                                There are currently no total ratings and favorites yet
                            </h3>
                        )}
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
                                    getAllRecipesAPI.data.map((recipe) => (
                                        <div className="col-sm-4 mb-4" key={recipe.recipeId}>
                                            <Link to="/recipe-detail">
                                                <Card style={{ width: 345, maxHeight: 470 }}>
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
                                                        <Typography
                                                            variant="body3"
                                                            color="text.secondary"
                                                        >
                                                            {new Date(
                                                                recipe.updateTime
                                                            ).toLocaleDateString()}
                                                        </Typography>
                                                        <br></br>
                                                        <br></br>
                                                        <Typography
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
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
                </div>
            </div>
        </>
    )
}

export default HomePage
