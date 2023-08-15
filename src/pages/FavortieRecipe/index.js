import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Rating, CardActions, Button } from '@mui/material'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
const FavoriteRecipe = () => {
    return (
        <>
            <Container maxWidth="md">
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
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
                                <Card sx={{ width: 345 }}>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '100%', height: 200, objectFit: 'cover' }}
                                        image="https://www.allrecipes.com/thmb/DZ5WtIe2s6rGk-rIEZDkMA6mGj4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7568285-perfect-pancakes-KH-4x3-218e2c39174c4a2293fca0ab752b38a8.jpg"
                                        alt="Perfect Pancakes"
                                    />

                                    <Rating
                                        name="read-only"
                                        value={5}
                                        readOnly
                                        size="small"
                                        sx={{ mt: 2 }}
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Perfect Pancakes
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            size="small"
                                            style={{ outline: 'none', color: '#f39c12' }}
                                        >
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Link>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
                                <Card sx={{ width: 345 }}>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '100%', height: 200, objectFit: 'cover' }}
                                        image="https://www.justalittlebitofbacon.com/wp-content/uploads/2016/03/carrot-cupcakes-3.jpg"
                                        alt="Carrot Cake Cupcakes with Cream Cheese Frosting"
                                    />

                                    <Rating
                                        name="read-only"
                                        value={5}
                                        readOnly
                                        size="small"
                                        sx={{ mt: 2 }}
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Carrot Cake Cupcakes with Cream Cheese Frosting
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            size="small"
                                            style={{ outline: 'none', color: '#f39c12' }}
                                        >
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Link>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
                                <Card sx={{ width: 345 }}>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '100%', height: 200, objectFit: 'cover' }}
                                        image="https://www.allrecipes.com/thmb/SzvN3B4eplSpbgD5mbwfcQhnAQU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1341581-298a4fad88cb40e4b1c0e87b1eca9fce.jpg"
                                        alt="Strawberry Cheesecake Bites"
                                    />

                                    <Rating
                                        name="read-only"
                                        value={5}
                                        readOnly
                                        precision={0.5}
                                        size="small"
                                        sx={{ mt: 2 }}
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Strawberry Cheesecake Bites
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            size="small"
                                            style={{ outline: 'none', color: '#f39c12' }}
                                        >
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Link>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
                                <Card sx={{ width: 345 }}>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '100%', height: 200, objectFit: 'cover' }}
                                        image="https://www.allrecipes.com/thmb/B3copytkVrvevc2rxWEPP_I6TmI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jalapeno-popper-pig-shots-recipe-7563404DotdashMeredithFoodStudio4x3-a8de087b0e7141c79fab763c4f53d9bd.jpg"
                                        alt="Jalapeno Popper Pig Shots"
                                    />

                                    <Rating
                                        name="read-only"
                                        value={3.5}
                                        readOnly
                                        precision={0.5}
                                        size="small"
                                        sx={{ mt: 2 }}
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Jalapeno Popper Pig Shots
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            size="small"
                                            style={{ outline: 'none', color: '#f39c12' }}
                                        >
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Link>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
                                <Card sx={{ width: 345 }}>
                                    <CardMedia
                                        component="img"
                                        style={{ width: '100%', height: 200, objectFit: 'cover' }}
                                        image="https://www.allrecipes.com/thmb/QomcjVk_cro-2Fg5tLjHDqLFcxU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Chocolate-Chip-Belgian-Waffles-2000-ce0a7236282c43bf90f9fa3d6e2054ff.jpeg"
                                        alt="Chocolate Chip Belgian Waffles"
                                    />

                                    <Rating
                                        name="read-only"
                                        value={5}
                                        readOnly
                                        precision={0.5}
                                        size="small"
                                        sx={{ mt: 2 }}
                                    />

                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Chocolate Chip Belgian Waffles
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button
                                            size="small"
                                            style={{ outline: 'none', color: '#f39c12' }}
                                        >
                                            Remove
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FavoriteRecipe
