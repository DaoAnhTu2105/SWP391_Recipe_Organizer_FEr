import React from 'react'
import imgDetail from '../../img/bg-img/breadcumb3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import {
    Button,
    Rating,
    Box,
    ButtonGroup,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material'
import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { fetchDataAsync } from '../../redux/reducers/getAllDataRecipes'
// import { format } from 'date-fns'
// import { Block } from '@mui/icons-material'

const RecipeDetail = () => {
    // const { id } = useParams()
    // fix getRecipeById
    // const dispatch = useDispatch()
    // const getAllRecipesAPI = useSelector((state) => state.getAllRecipes.data)
    // const recipeDetail =
    //     getAllRecipesAPI.data && getAllRecipesAPI.data.find((detail) => detail.recipeId == id)
    // useEffect(() => {
    //     dispatch(fetchDataAsync())
    // }, [dispatch])
    // console.log(recipeDetail)
    // const formattedUpdateTime = recipeDetail
    //     ? format(new Date(recipeDetail.updateTime), 'yyyy-MM-dd HH:mm')
    //     : ''
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <>
            <div
                className="breadcumb-area bg-img bg-overlay mt-5 mb-5"
                style={{ backgroundImage: `url(${imgDetail})` }}
            >
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="breadcumb-text text-center">
                                <h2>Recipe</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                style={{ width: '900px', height: '400px' }}
            >
                <SwiperSlide>
                    <img
                        style={{ width: '900px', height: '500px' }}
                        src="https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: '900px', height: '500px' }}
                        src="https://www.allrecipes.com/thmb/DZ5WtIe2s6rGk-rIEZDkMA6mGj4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7568285-perfect-pancakes-KH-4x3-218e2c39174c4a2293fca0ab752b38a8.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        style={{ width: '900px', height: '500px' }}
                        src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/48-3-large.jpg?itok=inlusIOg"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {recipeDetail &&
                    recipeDetail.photoVMs.map((photo) => (
                        <SwiperSlide key={photo.photoId}>
                            <img src={photo.photoName} alt="" />
                        </SwiperSlide>
                    ))}
            </Swiper> */}
            {/* {recipeDetail && (
                <>
                    <div
                        className="container-fluid"
                        style={{ paddingLeft: 200, paddingRight: 150 }}
                    >
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-8">
                                <div className="receipe-headline my-5">
                                    <span>Updated on {formattedUpdateTime}</span>
                                    <h2>{recipeDetail.recipeName}</h2>
                                    <p>
                                        Recipe by &nbsp;
                                        <Link
                                            to={''}
                                            style={{ textDecoration: 'true', color: '#f39c12' }}
                                        >
                                            {recipeDetail.userAccountVMs.username}
                                        </Link>
                                    </p>
                                    <div className="receipe-duration">
                                        <h6>Prep: {recipeDetail.prepTime}</h6>
                                        <h6>Cook: {recipeDetail.cookTime}</h6>
                                        <h6>Stand Time: {recipeDetail.standTime}</h6>
                                        <h6>Total Time: {recipeDetail.totalTime}</h6>
                                        <h6>Yields: {recipeDetail.servings}</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 my-5">
                                <div className="receipe-ratings text-right">
                                    <div className="ratings">
                                        <Rating
                                            name="read-only"
                                            value={3.5}
                                            readOnly
                                            precision={0.5}
                                            size="small"
                                            sx={{ mt: 2 }}
                                        />
                                    </div>
                                    <Button
                                        size="large"
                                        style={{
                                            color: 'white',
                                            backgroundColor: '#f39c12',
                                            outline: 'none',
                                        }}
                                    >
                                        Add to Favorite
                                    </Button>
                                </div>
                                <Box
                                    size="large"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        outline: 'none',
                                        alignItems: 'center',
                                        '& > *': {
                                            m: 1,
                                        },
                                    }}
                                    style={{ marginLeft: 165, marginTop: 30 }}
                                >
                                    <ButtonGroup
                                        variant="outlined"
                                        aria-label="outlined button group"
                                    >
                                        <Button
                                            sx={{
                                                color: '#f39c12',
                                                borderColor: '#f39c12',
                                                outline: 'none',
                                                '&:hover': {
                                                    backgroundColor: '#f39c12',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            sx={{
                                                color: '#f39c12',
                                                borderColor: '#f39c12',
                                                outline: 'none',
                                                '&:hover': {
                                                    backgroundColor: '#f39c12',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            Rate
                                        </Button>
                                        <Button
                                            sx={{
                                                color: '#f39c12',
                                                borderColor: '#f39c12',
                                                outline: 'none',
                                                '&:hover': {
                                                    backgroundColor: '#f39c12',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            Share
                                        </Button>
                                    </ButtonGroup>
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                {recipeDetail &&
                                    recipeDetail.directionVMs
                                        .slice()
                                        .sort((a, b) => a.directionsNum - b.directionsNum)
                                        .map((step) => (
                                            <div
                                                className="single-preparation-step d-flex"
                                                key={step.directionsId}
                                            >
                                                <h4>0{step.directionsNum}.</h4>
                                                <p>{step.directionsDesc}</p>
                                            </div>
                                        ))}
                            </div>

                            <div className="col-12 col-lg-8">
                                <div className="single-preparation-step d-flex">
                                    <h4>01.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="single-preparation-step d-flex">
                                    <h4>02.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="single-preparation-step d-flex">
                                    <h4>03.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="single-preparation-step d-flex">
                                    <h4>04.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="single-preparation-step d-flex">
                                    <h4>05.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div className="single-preparation-step d-flex">
                                    <h4>06.</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-lg-4">
                                <div className="ingredients">
                                    <h4 style={{ color: '#f39c12' }}>Ingredients</h4>
                                    {recipeDetail &&
                                        recipeDetail.ingredientOfRecipeVMs.map((ingredient) => (
                                            <div key={ingredient.ingredientId}>
                                                <label
                                                    style={{
                                                        fontWeight: 700,
                                                        marginTop: 10,
                                                        marginBottom: 10,
                                                    }}
                                                >
                                                    {ingredient.description}
                                                </label>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mt-5 pt-5">
                                <div className="text-left">
                                    <h3 style={{ color: '#f39c12' }}>Reviews</h3>
                                </div>
                                {recipeDetail &&
                                    recipeDetail.reviewVMs.map((rating) => (
                                        <>
                                            <div
                                                key={rating.reviewId}
                                                className="rating-recipeDetail"
                                            >
                                                <div className="contact-form-area">
                                                    <form
                                                        action="#"
                                                        method="post"
                                                        style={{ width: 750 }}
                                                    >
                                                        <Rating
                                                            readOnly
                                                            name="size-large"
                                                            defaultValue={rating.voteNum}
                                                            size="large"
                                                        />
                                                        <div className="row">
                                                            <div className="col-12 col-lg-6">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="name"
                                                                    value={rating.comment}
                                                                    placeholder="Name"
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-left">
                                    <h3 style={{ color: '#f39c12' }}>Leave a comment</h3>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="contact-form-area">
                                    <form action="#" method="post">
                                        <Rating name="size-large" defaultValue={0} size="large" />
                                        <div className="row">
                                            <div className="col-12">
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="message"
                                                    cols="30"
                                                    rows="10"
                                                    placeholder="Your Reviews"
                                                ></textarea>
                                            </div>
                                            <div className="col-md-12 text-center mb-5">
                                                <button
                                                    className="btn delicious-btn mt-30"
                                                    type="submit"
                                                >
                                                    Post Comments
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )} */}

            <>
                <div className="container-fluid" style={{ paddingLeft: 200, paddingRight: 150 }}>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-8">
                            <div className="receipe-headline my-5">
                                <span>Updated on 2/8/2023</span>
                                <h2>Perfect Pancakes</h2>
                                <p>
                                    Recipe by &nbsp;
                                    <Link
                                        to={''}
                                        style={{ textDecoration: 'true', color: '#f39c12' }}
                                    >
                                        Darnell Ferguson
                                    </Link>
                                </p>
                                <div className="receipe-duration">
                                    <h6>Prep Time: 5 mins</h6>
                                    <h6>Cook Time: 20 mins</h6>
                                    <h6>Stand Time: 3 mins</h6>
                                    <h6>Total Time: 28 mins</h6>
                                    <h6>Yields: 6</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 my-5">
                            <div className="receipe-ratings text-right">
                                <div className="ratings">
                                    <Rating
                                        name="read-only"
                                        value={5}
                                        readOnly
                                        precision={0.5}
                                        size="small"
                                        sx={{ mt: 2 }}
                                    />
                                </div>
                                <Button
                                    size="large"
                                    style={{
                                        color: 'white',
                                        backgroundColor: '#f39c12',
                                        outline: 'none',
                                    }}
                                >
                                    Add to Favorite
                                </Button>
                            </div>
                            <Box
                                size="large"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    outline: 'none',
                                    alignItems: 'center',
                                    '& > *': {
                                        m: 1,
                                    },
                                }}
                                style={{ marginLeft: 165, marginTop: 30 }}
                            >
                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                    <Button
                                        sx={{
                                            color: '#f39c12',
                                            borderColor: '#f39c12',
                                            outline: 'none',
                                            '&:hover': {
                                                backgroundColor: '#f39c12',
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        sx={{
                                            color: '#f39c12',
                                            borderColor: '#f39c12',
                                            outline: 'none',
                                            '&:hover': {
                                                backgroundColor: '#f39c12',
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        Rate
                                    </Button>
                                    <Button
                                        sx={{
                                            color: '#f39c12',
                                            borderColor: '#f39c12',
                                            outline: 'none',
                                            '&:hover': {
                                                backgroundColor: '#f39c12',
                                                color: 'white',
                                            },
                                        }}
                                    >
                                        Share
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 ml-5 mb-5">
                            <div className="ingredients">
                                <h3 style={{ color: '#f39c12' }}>Ingredients</h3>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        2 cups whole milk
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        1/4 cup white vinegar
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        2 1/2 cups flour
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        3/4 cup sugar
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        2 teaspoons baking powder
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        1 teaspoon baking soda
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        1 teaspoon salt
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        3 large eggs
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        1 teaspoon vanilla extract
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        1 tablespoon butter, softened, or as needed, for greasing,
                                        plus more for serving
                                    </label>
                                </div>
                                <div>
                                    <span style={{ color: '#f39c12', fontSize: 25 }}> - </span>
                                    <label
                                        style={{
                                            fontWeight: 700,
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                    >
                                        toppings of choice, e.g. maple syrup or fruit, for serving
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 ml-5">
                            <h3 style={{ color: '#f39c12', marginBottom: 30 }}>Directions</h3>
                            <div className="single-preparation-step d-flex">
                                <h4>01.</h4>
                                <p>Preheat a griddle to 300 degrees F (175 degrees C).</p>
                            </div>
                            <div className="single-preparation-step d-flex">
                                <h4>02.</h4>
                                <p>
                                    Stir together milk and vinegar in a small bowl or a 4-cup liquid
                                    measuring cup.
                                </p>
                            </div>
                            <div className="single-preparation-step d-flex">
                                <h4>03.</h4>
                                <p>
                                    Whisk together flour, sugar, baking powder, baking soda, and
                                    salt in a second bowl.
                                </p>
                            </div>
                            <div className="single-preparation-step d-flex">
                                <h4>04.</h4>
                                <p>
                                    Beat eggs in a large bowl until smooth. Add vanilla and milk
                                    mixture; whisk together. Add flour mixture to bowl with egg
                                    mixture and whisk until just combined. (Batter will be lumpy.)
                                    Let rest 3 minutes and gently stir again.
                                </p>
                            </div>
                            <div className="single-preparation-step d-flex">
                                <h4>05.</h4>
                                <p>
                                    Melt some butter on the griddle, then carefully wipe with a
                                    paper towel. (You want just a bit of a sheen; don’t overgrease
                                    the griddle.) Spoon batter in 1/3-cup portions onto griddle.
                                    Cook until bubbles form on surface of batter, about 2 1/2
                                    minutes.
                                </p>
                            </div>
                            <div className="single-preparation-step d-flex">
                                <h4>06.</h4>
                                <p>
                                    Flip pancakes and cook until browned on the other side, about 1
                                    1/2 minutes more. Repeat with remaining batter. Serve
                                    immediately with butter and toppings.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 ml-5 mb-5">
                            <h3 style={{ color: '#f39c12', marginBottom: 30 }}>
                                Nutrition Facts (per serving)
                            </h3>
                            <div className="row">
                                <div className="col-sm">
                                    <h4>409</h4>
                                    <span> Calories</span>
                                </div>
                                <div className="col-sm">
                                    <h4>8g</h4>
                                    <span> Fat</span>
                                </div>
                                <div className="col-sm">
                                    <h4>73g</h4>
                                    <span> Carbs</span>
                                </div>
                                <div className="col-sm">
                                    <h4>11g</h4>
                                    <span> Protein</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 ml-5 mb-5">
                            <button
                                onClick={handleOpen}
                                style={{
                                    padding: '5px 40px',
                                    borderRadius: '10px',
                                    backgroundColor: '#f39c12',
                                    color: 'white',
                                    fontSize: 20,
                                    border: 'none',
                                    outline: 'none',
                                }}
                            >
                                {open ? 'Hide nutritions' : 'Show full nutritions'}
                            </button>
                        </div>
                        {open && (
                            <div
                                className="col-12 col-lg-12 ml-5 mb-5 mx-auto"
                                style={{
                                    border: '1px solid silver',
                                    padding: '20px',
                                    maxWidth: '40%',
                                }}
                            >
                                <h5 style={{ color: '#f39c12', marginBottom: 30 }}>
                                    Nutrition Facts
                                </h5>
                                <p>Servings Per Recipe: 6</p>
                                <p>Calories: 409</p>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: 430,
                                        bgcolor: 'background.paper',
                                    }}
                                    className="col-12 col-lg-12"
                                >
                                    <nav aria-label="main mailbox folders" className="col-sm-12">
                                        <List className="col-12 col-lg-12">
                                            <Divider className="col-sm-12" />
                                            <ListItem
                                                style={{
                                                    textAlign: 'right',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItemText primary="% Daily Value *" />
                                            </ListItem>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Total Fat 8g" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="10%" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Saturated Fat 4g" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="18%" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Cholesterol 106mg" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="35%" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Sodium 812mg" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="35%" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Total Carbohydrate 73g" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="27%" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Dietary Fiber 2g" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="7%" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Total Sugars 32g" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Protein 11g" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Vitamin C 12mg" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="60%" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Calcium 210mg" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="16%" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Iron 3mg" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="18%" />
                                                </ListItem>
                                            </List>
                                            <Divider className="col-sm" />
                                            <List
                                                style={{
                                                    display: 'flex',
                                                }}
                                                className="col-sm-12"
                                            >
                                                <ListItem>
                                                    <ListItemText primary="Potassium 261mg" />
                                                </ListItem>
                                                <ListItem
                                                    style={{
                                                        textAlign: 'right',
                                                    }}
                                                >
                                                    <ListItemText primary="6%" />
                                                </ListItem>
                                            </List>
                                        </List>
                                    </nav>
                                </Box>
                            </div>
                        )}
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-left">
                                <h3 style={{ color: '#f39c12' }}>Reviews</h3>
                            </div>

                            <div className="rating-recipeDetail">
                                <div className="contact-form-area">
                                    <form action="#" method="post" style={{ width: 750 }}>
                                        <Rating
                                            readOnly
                                            name="size-large"
                                            defaultValue={5}
                                            size="large"
                                        />
                                        <div className="row">
                                            <div className="col-12 col-lg-6">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    value="Great Recipe!"
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="text-left">
                                <h3 style={{ color: '#f39c12' }}>Leave a comment</h3>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="contact-form-area">
                                <form action="#" method="post">
                                    <Rating name="size-large" defaultValue={0} size="large" />
                                    <div className="row">
                                        <div className="col-12">
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                id="message"
                                                cols="30"
                                                rows="10"
                                                placeholder="Your Reviews"
                                            ></textarea>
                                        </div>
                                        <div className="col-md-12 text-center mb-5">
                                            <button
                                                className="btn delicious-btn mt-30"
                                                type="submit"
                                            >
                                                Post Comments
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default RecipeDetail
