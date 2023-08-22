import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Rating, CardActions, Button, Box, Modal } from '@mui/material'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { userFavor } from '../../redux/apiThunk/getFavoriteUserThunk'
import { removeFavor } from '../../redux/apiThunk/getFavoriteUserThunk'
import SearchFilter from './SearchFavoriteFilter'
import toast, { Toaster } from 'react-hot-toast'

const FavoriteRecipe = () => {
    const dispatch = useDispatch()
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [detail, setDetail] = useState('')
    const getUserFavor = useSelector((state) => state.uFavor.userFavorites)
    const userFavorError = useSelector((state) => state.uFavor.isLoading)
    console.log(userFavorError)
    const favorite = getUserFavor?.data
    const [reload, setReload] = useState(false)
    const handleRemove = (id) => {
        setShowDeleteModal(true)
        setDetail(id)
    }
    const handleConfirmRemove = async () => {
        await dispatch(removeFavor(detail))
        toast.success('Remove successful!')
        setShowDeleteModal(false)
        setReload(!reload)
    }
    useEffect(() => {
        dispatch(userFavor())
    }, [dispatch, reload])
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Container maxWidth="md">
                <SearchFilter />

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
            {userFavorError === 'error' ? (
                <Box
                    sx={{
                        paddingTop: '100px',
                        paddingBottom: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        alignItems: 'center',
                    }}
                >
                    <Typography sx={{ paddingRight: '10px' }}> Please</Typography>
                    <a
                        style={{
                            color: 'rgb(243, 156, 18)',
                            textDecoration: 'underline',
                            fontSize: '25px',
                        }}
                        href="/login"
                    >
                        LOGIN
                    </a>
                    <Typography sx={{ paddingLeft: '10px' }}> before using this feature</Typography>
                </Box>
            ) : favorite?.length !== 0 ? (
                <>
                    <div
                        className="container mb-5"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '40px',
                        }}
                    >
                        {favorite &&
                            Array.isArray(favorite) &&
                            favorite.map((favor) => (
                                <div className="grid-item" key={favor.recipeId}>
                                    <Card
                                        style={{ width: 345, maxHeight: 470, textAlign: 'center' }}
                                    >
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
                                                precision={0.5}
                                                sx={{ mt: 2 }}
                                            />
                                        </Link>
                                        <CardContent>
                                            <Typography variant="body2" color="text.primary">
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
                                                    onClick={() => handleRemove(favor.recipeId)}
                                                >
                                                    Remove
                                                </Button>
                                            </CardActions>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
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
            <Modal
                open={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
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
                        Remove favorite
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        Do you want to remove this item from the favorites list?
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={() => setShowDeleteModal(false)}
                        style={{ backgroundColor: '#f39c12', outline: 'none' }}
                    >
                        Close
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={handleConfirmRemove}
                        style={{ backgroundColor: '#f39c12', outline: 'none' }}
                    >
                        Confirm
                    </Button>
                </Box>
            </Modal>
        </>
    )
}
export default FavoriteRecipe
