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
    const [favorite1, setFavorite1] = useState(false)
    const [favorite2, setFavorite2] = useState(false)
    const [favorite3, setFavorite3] = useState(false)
    const [numberOfFavor1, setNumberOfFavor1] = useState(1000)
    const [numberOfFavor2, setNumberOfFavor2] = useState(1000)
    const [numberOfFavor3, setNumberOfFavor3] = useState(1000)
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

    const handleFavorite1 = () => {
        if (!favorite1) {
            setFavorite1(true)
            setNumberOfFavor1(numberOfFavor1 + 1)
        } else {
            setFavorite1(false)
            setNumberOfFavor1(numberOfFavor1 - 1)
        }
    }
    const handleFavorite2 = () => {
        if (!favorite2) {
            setFavorite2(true)
            setNumberOfFavor2(numberOfFavor2 + 1)
        } else {
            setFavorite2(false)
            setNumberOfFavor2(numberOfFavor2 - 1)
        }
    }

    const handleFavorite3 = () => {
        if (!favorite3) {
            setFavorite3(true)
            setNumberOfFavor3(numberOfFavor3 + 1)
        } else {
            setFavorite3(false)
            setNumberOfFavor3(numberOfFavor3 - 1)
        }
    }

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
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slide-container">
                                        <img
                                            className="slide-image"
                                            src={image.image}
                                            alt={`Slide ${index + 1}`}
                                        />
                                        <div className="slide-overlay slide-delay">
                                            <h2
                                                className="slide-title"
                                                style={{ color: '#f39c12' }}
                                            >
                                                {image.name}
                                            </h2>
                                            <p className="slide-description">{image.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Link>
                    </Swiper>
                </div>
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
                        {/* {getAllRecipesAPI.data ? (
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
                    )} */}
                        <div className="mt-5">
                            <div>
                                <div
                                    className="single-best-receipe-area mb-30"
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <div className="receipe-content">
                                        <img
                                            style={{ maxWidth: 350, height: 250 }}
                                            src="https://www.allrecipes.com/thmb/DZ5WtIe2s6rGk-rIEZDkMA6mGj4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7568285-perfect-pancakes-KH-4x3-218e2c39174c4a2293fca0ab752b38a8.jpg"
                                            alt="Perfect Pancakes"
                                        />
                                        <Link to="/recipe-detail">
                                            <h5 className="mt-3">Perfect Pancakes</h5>
                                        </Link>
                                        <Rating name="read-only" value={5} readOnly size="small" />
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
                                                {numberOfFavor1}
                                                &nbsp; &nbsp;
                                                <Button
                                                    style={{
                                                        backgroundColor: 'white',
                                                        width: '40px',
                                                        height: '40px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        outline: 'none',
                                                    }}
                                                    onClick={() => handleFavorite1()}
                                                >
                                                    {favorite1 ? (
                                                        <FavoriteBorderIcon
                                                            style={{ color: 'orange' }}
                                                        />
                                                    ) : (
                                                        <FavoriteBorderIcon
                                                            style={{ color: 'black' }}
                                                        />
                                                    )}
                                                </Button>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5" style={{ margin: '0 20px' }}>
                            <div>
                                <div
                                    className="single-best-receipe-area mb-30"
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <div className="receipe-content">
                                        <img
                                            style={{ maxWidth: 350, height: 250 }}
                                            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F065c6583a6d9192451b2edd4d81324b3%2F168235712348320230423_144426.jpg&q=60&c=sc&orient=true&poi=auto&h=512"
                                            alt="Chef John's Perfect Prime Rib"
                                        />
                                        <Link to="/recipe-detail">
                                            <h5 className="mt-3">Chef John's Perfect Prime Rib</h5>
                                        </Link>
                                        <Rating name="read-only" value={5} readOnly size="small" />
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
                                                {numberOfFavor2}
                                                &nbsp; &nbsp;
                                                <Button
                                                    style={{
                                                        backgroundColor: 'white',
                                                        width: '40px',
                                                        height: '40px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        outline: 'none',
                                                    }}
                                                    onClick={handleFavorite2}
                                                >
                                                    {favorite2 ? (
                                                        <FavoriteBorderIcon
                                                            style={{ color: 'orange' }}
                                                        />
                                                    ) : (
                                                        <FavoriteBorderIcon
                                                            style={{ color: 'black' }}
                                                        />
                                                    )}
                                                </Button>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div>
                                <div
                                    className="single-best-receipe-area mb-30"
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <div className="receipe-content">
                                        <img
                                            style={{ maxWidth: 350, height: 250 }}
                                            src="https://www.allrecipes.com/thmb/CXHI4rajc40Y6V5l8lpy6DSN_Xk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-al-pastor-ddmfs-0831-4x3-1-07333bb010104b059996d70da5c02be0.jpg"
                                            alt="Chicken Al Pastor"
                                        />
                                        <Link to="/recipe-detail">
                                            <h5 className="mt-3">Chicken Al Pastor</h5>
                                        </Link>
                                        <Rating name="read-only" value={5} readOnly size="small" />
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
                                                {numberOfFavor3}
                                                &nbsp; &nbsp;
                                                <Button
                                                    style={{
                                                        backgroundColor: 'white',
                                                        width: '40px',
                                                        height: '40px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        outline: 'none',
                                                    }}
                                                    onClick={handleFavorite3}
                                                >
                                                    {favorite3 ? (
                                                        <FavoriteBorderIcon
                                                            style={{ color: 'orange' }}
                                                        />
                                                    ) : (
                                                        <FavoriteBorderIcon
                                                            style={{ color: 'black' }}
                                                        />
                                                    )}
                                                </Button>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </div>
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
                        {/* <div className="container">
                    <div className="row justify-content-center">
                        {getAllRecipesAPI.data &&
                            getAllRecipesAPI.data.map((recipe) => (
                                <div className="col-sm-4 mb-4" key={recipe.recipeId}>
                                    <Link to={`/recipe-detail/${recipe.recipeId}`}>
                                        <Card sx={{ maxWidth: 345, maxHeight: 470 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image={img1}
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
                </div> */}
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-4 mb-4">
                                    <Link to="/recipe-detail">
                                        <Card style={{ width: 345, maxHeight: 470 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image="https://www.allrecipes.com/thmb/DZ5WtIe2s6rGk-rIEZDkMA6mGj4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7568285-perfect-pancakes-KH-4x3-218e2c39174c4a2293fca0ab752b38a8.jpg"
                                                alt="Perfect Pancakes"
                                            />

                                            <Rating
                                                name="read-only"
                                                value={4}
                                                readOnly
                                                size="small"
                                                sx={{ mt: 2 }}
                                            />

                                            <CardContent>
                                                <Typography variant="body2" color="text.primary">
                                                    Perfect Pancakes
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <Link to="/recipe-detail">
                                        <Card style={{ width: 345, maxHeight: 470 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image="https://www.allrecipes.com/thmb/iWAZgeqnbQCmeuFuzhHo4i93d3U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7567945_One-Pan-Tex-Mex-Pork-Chops-and-Rice_Bibi_4x3-1afe62d1afbc409c8203057ff55f306d.jpg"
                                                alt="Tex-Mex Pork Chops and Rice Skillet"
                                            />

                                            <Rating
                                                name="read-only"
                                                value={4}
                                                readOnly
                                                size="small"
                                                sx={{ mt: 2 }}
                                            />

                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    Tex-Mex Pork Chops and Rice Skillet
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <Link to="/recipe-detail">
                                        <Card style={{ width: 345, maxHeight: 470 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8370989.jpg&q=60&c=sc&orient=true&poi=auto&h=512"
                                                alt="Slow Cooker Buffalo Chicken Sandwiches"
                                            />

                                            <Rating
                                                name="read-only"
                                                value={4}
                                                readOnly
                                                size="small"
                                                sx={{ mt: 2 }}
                                            />

                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    Slow Cooker Buffalo Chicken Sandwiches
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <Link to="/recipe-detail">
                                        <Card style={{ width: 345, maxHeight: 470 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F9429606.jpg&q=60&c=sc&orient=true&poi=auto&h=512"
                                                alt="Slow Cooker Mac and Cheese"
                                            />

                                            <Rating
                                                name="read-only"
                                                value={4}
                                                readOnly
                                                size="small"
                                                sx={{ mt: 2 }}
                                            />

                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    Slow Cooker Mac and Cheese
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <Link to="/recipe-detail">
                                        <Card style={{ width: 345, maxHeight: 470 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2280317.jpg&q=60&c=sc&orient=true&poi=auto&h=512"
                                                alt="Fiesta Slow Cooker Shredded Chicken Tacos"
                                            />

                                            <Rating
                                                name="read-only"
                                                value={4}
                                                readOnly
                                                size="small"
                                                sx={{ mt: 2 }}
                                            />

                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    Fiesta Slow Cooker Shredded Chicken Tacos
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <Link to="/recipe-detail">
                                        <Card style={{ width: 345, maxHeight: 470 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fcd7e43dfe39ceddc5531ac8e027df87b%2F16539182105f8afb602cda5.image.jpg&q=60&c=sc&orient=true&poi=auto&h=512"
                                                alt="Deep-Fried Oreos"
                                            />

                                            <Rating
                                                name="read-only"
                                                value={4}
                                                readOnly
                                                size="small"
                                                sx={{ mt: 2 }}
                                            />

                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    Deep-Fried Oreos
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                                <div className="col-sm-4 mb-4">
                                    <Link to="/recipe-detail">
                                        <Card style={{ width: 345, maxHeight: 470 }}>
                                            <CardMedia
                                                component="img"
                                                style={{ width: 350, height: 194 }}
                                                image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F5dafa42cae05f8e2ee0f937128bfc67c%2F167794965825420230302_201611.jpg&q=60&c=sc&orient=true&poi=auto&h=512"
                                                alt="Sloppy Joes"
                                            />

                                            <Rating
                                                name="read-only"
                                                value={4}
                                                readOnly
                                                size="small"
                                                sx={{ mt: 2 }}
                                            />

                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    Sloppy Joes
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
