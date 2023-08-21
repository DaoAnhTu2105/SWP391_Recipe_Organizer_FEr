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
import { addReview } from '../../redux/apiThunk/reviewThunk'

const RecipeDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const recipeDetails = useSelector((state) => state.getRecipeDetail.recipeDetail)
    const status = useSelector((state) => state.getRecipeDetail.isLoading)
    const recipeDetail = recipeDetails.data
    const user = JSON.parse(localStorage.getItem('user'))
    const [showLoginModal, setShowLoginModal] = useState(false)
    const [postComment, setPostComment] = useState('')
    const [rate, setRate] = useState(0)
    const [reload, setReload] = useState(false)
    useEffect(() => {
        dispatch(fetchRecipeDetail(id))
    }, [dispatch, id, reload])
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
    const handleComment = async (id, rate, comment) => {
        console.log('rate: ', rate)
        console.log('comment: ', comment)
        console.log('id: ', id)

        await dispatch(addReview({ data: JSON.stringify(id, rate, comment) }))
        setReload(!reload)
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
                <div className="ml-5">
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

                    <div className="ml-5">
                        <div className="row">
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
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    src={photo}
                                    alt={recipeDetail?.recipeName}
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div>
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

                    <div className="ml-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-left">
                                    <h3 style={{ color: '#f39c12' }}>Reviews</h3>
                                </div>
                                {recipeDetail?.reviewVMs &&
                                    recipeDetail?.reviewVMs.map((review) => (
                                        <div
                                            className="rating-recipeDetail mb-3 mt-3"
                                            key={review.reviewId}
                                        >
                                            <div className="contact-form-area">
                                                <form
                                                    action="#"
                                                    method="post"
                                                    style={{ width: 750 }}
                                                >
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <img
                                                            src={review?.user.avatarName}
                                                            alt=""
                                                            style={{
                                                                borderRadius: '50%',
                                                                width: '30px',
                                                                height: '30px',
                                                            }}
                                                        />
                                                        &nbsp; &nbsp;
                                                        <b>{review?.user.fullName}</b>
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            margin: '5px 0',
                                                        }}
                                                    >
                                                        <Rating
                                                            readOnly
                                                            name="size-large"
                                                            defaultValue={review?.voteNum}
                                                            size="small"
                                                        />
                                                        &nbsp; &nbsp;
                                                        <span
                                                            style={{ color: 'rgba(71,71,71, 0.6)' }}
                                                        >
                                                            {new Date(
                                                                review?.updateTime
                                                            ).toLocaleDateString()}
                                                        </span>
                                                    </Box>

                                                    <div className="row">
                                                        <div className="col-12 col-lg-6">
                                                            <p
                                                                style={{
                                                                    width: 300,
                                                                    backgroundColor:
                                                                        'rgba(153,153,153, 0.2)',
                                                                    fontWeight: 700,
                                                                    paddingLeft: 10,
                                                                }}
                                                            >
                                                                {review?.comment}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    ))}
                                {recipeDetail?.userReview && (
                                    <div
                                        className="rating-recipeDetail mb-3 mt-3"
                                        key={user.userId}
                                    >
                                        <div className="contact-form-area">
                                            <form action="#" method="post" style={{ width: 750 }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <img
                                                        src={
                                                            recipeDetail?.userReview.user.avatarName
                                                        }
                                                        alt=""
                                                        style={{
                                                            borderRadius: '50%',
                                                            width: '30px',
                                                            height: '30px',
                                                        }}
                                                    />
                                                    &nbsp; &nbsp;
                                                    <b>{recipeDetail?.userReview.user.fullName}</b>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        margin: '5px 0',
                                                    }}
                                                >
                                                    <Rating
                                                        readOnly
                                                        name="size-large"
                                                        defaultValue={
                                                            recipeDetail?.userReview.voteNum
                                                        }
                                                        size="small"
                                                    />
                                                    &nbsp; &nbsp;
                                                    <span style={{ color: 'rgba(71,71,71, 0.6)' }}>
                                                        {new Date(
                                                            recipeDetail?.userReview.updateTime
                                                        ).toLocaleDateString()}
                                                    </span>
                                                </Box>

                                                <div className="row">
                                                    <div className="col-12 col-lg-6">
                                                        <p
                                                            style={{
                                                                width: 300,
                                                                backgroundColor:
                                                                    'rgba(153,153,153, 0.2)',
                                                                fontWeight: 700,
                                                                paddingLeft: 10,
                                                            }}
                                                        >
                                                            {recipeDetail?.userReview.comment}
                                                        </p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="col-md-12">
                                <div className="text-left">
                                    <h3 style={{ color: '#f39c12' }}>Leave a comment</h3>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="contact-form-area">
                                    {recipeDetail?.recipeId && (
                                        <div>
                                            <Rating
                                                name="size-large"
                                                defaultValue={rate}
                                                size="large"
                                                onChange={(e) => setRate(e.target.value)}
                                            />
                                            <div className="row">
                                                <div className="col-12">
                                                    <textarea
                                                        className="form-control"
                                                        cols="10"
                                                        rows="10"
                                                        style={{ width: '30%', height: '100px' }}
                                                        value={postComment}
                                                        placeholder="Your Reviews"
                                                        onChange={(e) =>
                                                            setPostComment(e.target.value)
                                                        }
                                                    ></textarea>
                                                </div>
                                                <div className=" mb-5 ml-3">
                                                    <button
                                                        className=" delicious-btn "
                                                        type="submit"
                                                        onClick={() =>
                                                            handleComment(
                                                                recipeDetail.recipeId,
                                                                rate,
                                                                postComment
                                                            )
                                                        }
                                                    >
                                                        Post Comments
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
