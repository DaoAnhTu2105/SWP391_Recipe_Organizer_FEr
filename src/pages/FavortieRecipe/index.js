import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import img1 from '../../img/bg-img/r1.jpg'
import { Rating, CardActions, Button } from '@mui/material'
import Container from '@mui/material/Container'
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
                            <Card sx={{ maxWidth: 345, maxHeight: 470 }}>
                                <CardMedia
                                    component="img"
                                    style={{ width: 350, height: 194 }}
                                    image={img1}
                                    alt="Paella dish"
                                />

                                <Rating
                                    name="read-only"
                                    value="4"
                                    readOnly
                                    size="small"
                                    sx={{ mt: 2 }}
                                />

                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Shrimp and Chorizo Paella
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button size="small">View</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Card sx={{ maxWidth: 345, maxHeight: 470 }}>
                                <CardMedia
                                    component="img"
                                    style={{ width: 350, height: 194 }}
                                    image={img1}
                                    alt="Paella dish"
                                />

                                <Rating
                                    name="read-only"
                                    value="4"
                                    readOnly
                                    size="small"
                                    sx={{ mt: 2 }}
                                />

                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Shrimp and Chorizo Paella
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button size="small">View</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Card sx={{ maxWidth: 345, maxHeight: 470 }}>
                                <CardMedia
                                    component="img"
                                    style={{ width: 350, height: 194 }}
                                    image={img1}
                                    alt="Paella dish"
                                />
                                <Rating
                                    name="read-only"
                                    value="4"
                                    readOnly
                                    size="small"
                                    sx={{ mt: 2 }}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Shrimp and Chorizo Paella
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button size="small">View</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Card sx={{ maxWidth: 345, maxHeight: 470 }}>
                                <CardMedia
                                    component="img"
                                    style={{ width: 350, height: 194 }}
                                    image={img1}
                                    alt="Paella dish"
                                />
                                <Rating
                                    name="read-only"
                                    value="4"
                                    readOnly
                                    size="small"
                                    sx={{ mt: 2 }}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Shrimp and Chorizo Paella
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button size="small">View</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Card sx={{ maxWidth: 345, maxHeight: 470 }}>
                                <CardMedia
                                    component="img"
                                    style={{ width: 350, height: 194 }}
                                    image={img1}
                                    alt="Paella dish"
                                />
                                <Rating
                                    name="read-only"
                                    value="4"
                                    readOnly
                                    size="small"
                                    sx={{ mt: 2 }}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Shrimp and Chorizo Paella
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button size="small">View</Button>
                                    <Button size="small">Delete</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FavoriteRecipe
