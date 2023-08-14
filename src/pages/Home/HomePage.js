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
import { Button } from '@mui/material'

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
                                        style={{ maxWidth: 400, height: 300 }}
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
                                            {2000}
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
                                            >
                                                <FavoriteBorderIcon style={{ color: 'orange' }} />
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
                                        style={{ maxWidth: 400, height: 300 }}
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
                                            {1200}
                                            &nbsp; &nbsp;
                                            <FavoriteBorderIcon />
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
                                        style={{ maxWidth: 400, height: 300 }}
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
                                            {1200}
                                            &nbsp; &nbsp;
                                            <FavoriteBorderIcon />
                                        </Typography>
                                    </CardContent>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <Typography variant="body2" color="text.secondary">
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
        </>
    )
}

export default HomePage
