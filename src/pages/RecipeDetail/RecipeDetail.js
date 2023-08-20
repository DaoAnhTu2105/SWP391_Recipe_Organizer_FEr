import React from 'react'
import imgDetail from '../../img/bg-img/breadcumb3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { Button, Rating, Box, Modal, Typography } from '@mui/material'
// import { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchRecipeDetail } from '../../redux/apiThunk/getRecipeDetailThunk'
import CircularProgress from '@mui/material/CircularProgress'
import { useState } from 'react'
import { userFavorites } from '../../redux/apiThunk/getFavoriteUserThunk'

const RecipeDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const recipeDetails = useSelector((state) => state.getRecipeDetail.recipeDetail)
    // const userFavor = useSelector((state) => state.uFavor.uf)
    const status = useSelector((state) => state.getRecipeDetail.isLoading)
    const recipeDetail = recipeDetails.data
    const user = JSON.parse(localStorage.getItem('user'))
    const [showLoginModal, setShowLoginModal] = useState(false)
    useEffect(() => {
        dispatch(fetchRecipeDetail(id))
    }, [dispatch, id])
    function formatDate(dateString) {
        const date = new Date(dateString)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }
    const formattedUpdateTime = recipeDetail ? formatDate(recipeDetail.updateTime) : ''
    const photo = recipeDetail?.photoVMs && recipeDetail?.photoVMs[0]?.photoName
    const handleSave = (newValue) => {
        if (user?.role) {
            dispatch(userFavorites(newValue))
        } else {
            setShowLoginModal(true)
        }
    }
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
                    <div>
                        <div
                            className="breadcumb-area bg-img bg-overlay mb-5"
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
                    </div>

                    <div
                        className="container-fluid"
                        style={{ paddingLeft: 200, paddingRight: 150 }}
                    >
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-8">
                                <div className="my-5">
                                    <span>{formattedUpdateTime && formattedUpdateTime}</span>
                                    <h2>{recipeDetail?.recipeName}</h2>
                                    <div className="ratings">
                                        <Rating
                                            name="read-only"
                                            value={recipeDetail?.aveVote}
                                            readOnly
                                            precision={0.5}
                                            size="large"
                                            sx={{ mt: 2 }}
                                        />
                                    </div>
                                    <p>
                                        Recipe by &nbsp;
                                        <Link
                                            to="/repice-cooker"
                                            style={{ textDecoration: 'true', color: '#f39c12' }}
                                        >
                                            {recipeDetail && recipeDetail?.userAccountVMs?.fullName}
                                        </Link>
                                    </p>
                                    <Button
                                        size="medium"
                                        style={{
                                            color: 'white',
                                            backgroundColor: '#f39c12',
                                            outline: 'none',
                                        }}
                                        onClick={() => handleSave(recipeDetail?.recipeId)}
                                    >
                                        <FavoriteBorderIcon /> &nbsp; Save
                                    </Button>
                                    &nbsp;
                                    <Button
                                        size="medium"
                                        style={{
                                            color: 'white',
                                            backgroundColor: '#f39c12',
                                            outline: 'none',
                                        }}
                                    >
                                        <ShareIcon /> &nbsp; Share
                                    </Button>
                                    <div className="receipe-headline my-5">
                                        <div className="receipe-duration">
                                            <h6>Prep Time: {recipeDetail?.prepTime} mins</h6>
                                            <h6>Cook Time: {recipeDetail?.cookTime} mins</h6>
                                            <h6>Stand Time: {recipeDetail?.standTime} mins</h6>
                                            <h6>Total Time: {recipeDetail?.totalTime} mins</h6>
                                            <h6>Serving: {recipeDetail?.servings} person(s)</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                        style={{ width: '1000px', height: '500px', marginBottom: 20 }}
                    >
                        {recipeDetail?.photoVMs && (
                            <SwiperSlide>
                                <img
                                    style={{ width: '1000px', height: '500px' }}
                                    src={photo}
                                    alt={recipeDetail?.recipeName}
                                />
                            </SwiperSlide>
                        )}
                        {/* <SwiperSlide>
                            <img
                                style={{ width: '1000px', height: '500px' }}
                                src="https://www.allrecipes.com/thmb/DZ5WtIe2s6rGk-rIEZDkMA6mGj4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7568285-perfect-pancakes-KH-4x3-218e2c39174c4a2293fca0ab752b38a8.jpg"
                                alt=""
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                style={{ width: '1000px', height: '500px' }}
                                src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/48-3-large.jpg?itok=inlusIOg"
                                alt=""
                            />
                        </SwiperSlide> */}
                    </Swiper>
                    <div className="container w-100">
                        <div className="row">
                            <div className="col-12 col-lg-12 ml-5 mb-5">
                                <div className="ingredients">
                                    <h3 style={{ color: '#f39c12' }}>Ingredients</h3>
                                    {recipeDetail?.ingredientOfRecipeVMs &&
                                        recipeDetail?.ingredientOfRecipeVMs.map((ingredient) => (
                                            <div>
                                                <span style={{ color: '#f39c12', fontSize: 25 }}>
                                                    -
                                                </span>
                                                &nbsp;
                                                <label
                                                    style={{
                                                        fontWeight: 700,
                                                        marginTop: 10,
                                                        marginBottom: 10,
                                                    }}
                                                >
                                                    {ingredient?.quantity}&nbsp;
                                                    {ingredient?.ingredientVM.measure}&nbsp;
                                                    {ingredient?.ingredientVM.ingredientName}
                                                </label>
                                            </div>
                                        ))}
                                </div>
                            </div>
                            <div>
                                <div className="col-12 col-lg-12 ml-5">
                                    <h3 style={{ color: '#f39c12', marginBottom: 30 }}>
                                        Directions
                                    </h3>
                                    {recipeDetail?.directionVMs &&
                                        recipeDetail?.directionVMs.map((direction) => (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    marginBottom: 20,
                                                }}
                                            >
                                                <h4>{direction?.directionsNum}.</h4>
                                                <p
                                                    style={{
                                                        marginBottom: 0,
                                                        marginLeft: 20,
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    {direction?.directionsDesc}
                                                </p>
                                            </div>
                                        ))}
                                </div>
                            </div>

                            <div className="col-12 col-lg-12 ml-5 mb-5">
                                <h3 style={{ color: '#f39c12', marginBottom: 30 }}>
                                    Nutrition Facts (per serving)
                                </h3>
                                <div className="row">
                                    <div className="col-sm">
                                        <h4>{recipeDetail?.calories}</h4>
                                        <span> Calories</span>
                                    </div>
                                    <div className="col-sm">
                                        <h4>{recipeDetail?.fat}</h4>
                                        <span> Fat</span>
                                    </div>
                                    <div className="col-sm">
                                        <h4>{recipeDetail?.carbohydrate}</h4>
                                        <span> Carbs</span>
                                    </div>
                                    <div className="col-sm">
                                        <h4>{recipeDetail?.protein}</h4>
                                        <span> Protein</span>
                                    </div>
                                </div>
                            </div>
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
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <PersonOutlineIcon size="medium" />
                                                &nbsp;
                                                <Rating
                                                    readOnly
                                                    name="size-large"
                                                    defaultValue={5}
                                                    size="small"
                                                />
                                            </Box>

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
                </div>
            )}

            <Modal
                open={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                aria-labelledby="login-modal-title"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography
                        id="login-modal-title"
                        variant="h5"
                        component="h2"
                        style={{ color: '#f39c12', fontWeight: 600 }}
                    >
                        Log In Required
                    </Typography>
                    <Typography sx={{ mt: 2 }}>You must log in to use this feature.</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => setShowLoginModal(false)}
                        style={{ backgroundColor: '#f39c12', outline: 'none' }}
                    >
                        Close
                    </Button>
                    &nbsp; &nbsp;
                    <Link to="/login">
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                            onClick={() => setShowLoginModal(false)}
                            style={{ backgroundColor: '#f39c12', outline: 'none' }}
                        >
                            Go to login
                        </Button>
                    </Link>
                </Box>
            </Modal>
        </>
    )
}

export default RecipeDetail
