import React from 'react'
import imgDetail from '../../img/bg-img/breadcumb3.jpg'
import imgBg1 from '../../img/bg-img/bg5.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { Button, Rating, Box, ButtonGroup } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchDataAsync } from '../../redux/reducers/getAllDataRecipes'
import { format } from 'date-fns'
import { Block } from '@mui/icons-material'

const RecipeDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const getAllRecipesAPI = useSelector((state) => state.getAllRecipes.data)
    const recipeDetail =
        getAllRecipesAPI.data && getAllRecipesAPI.data.find((detail) => detail.recipeId == id)
    useEffect(() => {
        dispatch(fetchDataAsync())
    }, [dispatch])
    console.log(recipeDetail)
    const formattedUpdateTime = recipeDetail
        ? format(new Date(recipeDetail.updateTime), 'yyyy-MM-dd HH:mm')
        : ''
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

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <img src={imgBg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgBg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgBg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgBg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgBg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgBg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgBg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgBg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={imgBg1} alt="" />
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
            {recipeDetail && (
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
                                            value={recipeDetail.aveVote}
                                            readOnly
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
                            {/* <div className="col-12 col-lg-8">
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
                            </div> */}

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
                                    <h4>Ingredients</h4>
                                    {recipeDetail &&
                                        recipeDetail.ingredientOfRecipeVMs.map((ingredient) => (
                                            <div
                                                className="custom-control custom-checkbox"
                                                key={ingredient.ingredientId}
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheck1"
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheck1"
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
                                {recipeDetail &&
                                    recipeDetail.reviewVMs.map((rating) => (
                                        <>
                                            <div
                                                key={rating.reviewId}
                                                className="rating-recipeDetail"
                                            >
                                                <div className="text-left">
                                                    <h3 style={{ color: '#f39c12' }}>Reviews</h3>
                                                </div>
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
            )}
        </>
    )
}

export default RecipeDetail
