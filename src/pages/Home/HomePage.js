import img1 from '../../img/bg-img/r1.jpg'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
// import CardActions from "@mui/material/CardActions";
import Typography from '@mui/material/Typography'
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import Rating from '@mui/material/Rating'
import bestImg from '../../img/bg-img/r1.jpg'
import { Link } from 'react-router-dom'
import { Search } from '../../components/Search'
import SearchFilter from '../../components/SearchFilter'

const HomePage = () => {
    return (
        <>
            <Search />
            <br></br>
            <SearchFilter />
            <h1 className="title-recipes">Best Recipes</h1>
            <section className="best-receipe-area">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <Link to="/recipe-detail">
                                <div className="single-best-receipe-area mb-30">
                                    <img src={bestImg} alt="" />
                                    <div className="receipe-content">
                                        <Link to="/recipe-detail">
                                            <h5>Sushi Easy Receipy</h5>
                                        </Link>
                                        <div className="ratings">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <Link to="/recipe-detail">
                                <div className="single-best-receipe-area mb-30">
                                    <img src={bestImg} alt="" />
                                    <div className="receipe-content">
                                        <Link to="/recipe-detail">
                                            <h5>Sushi Easy Receipy</h5>
                                        </Link>
                                        <div className="ratings">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <Link to="/recipe-detail">
                                <div className="single-best-receipe-area mb-30">
                                    <img src={bestImg} alt="" />
                                    <div className="receipe-content">
                                        <Link to="/recipe-detail">
                                            <h5>Sushi Easy Receipy</h5>
                                        </Link>
                                        <div className="ratings">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <Link to="/recipe-detail">
                                <div className="single-best-receipe-area mb-30">
                                    <img src={bestImg} alt="" />
                                    <div className="receipe-content">
                                        <Link to="/recipe-detail">
                                            <h5>Sushi Easy Receipy</h5>
                                        </Link>
                                        <div className="ratings">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <Link to="/recipe-detail">
                                <div className="single-best-receipe-area mb-30">
                                    <img src={bestImg} alt="" />
                                    <div className="receipe-content">
                                        <Link to="/recipe-detail">
                                            <h5>Sushi Easy Receipy</h5>
                                        </Link>
                                        <div className="ratings">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-4">
                            <Link to="/recipe-detail">
                                <div className="single-best-receipe-area mb-30">
                                    <img src={bestImg} alt="" />
                                    <div className="receipe-content">
                                        <Link to="/recipe-detail">
                                            <h5>Sushi Easy Receipy</h5>
                                        </Link>
                                        <div className="ratings">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
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
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
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
                                    {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
                                </Card>
                            </Link>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
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
                                    {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
                                </Card>
                            </Link>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
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
                                    {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
                                </Card>
                            </Link>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
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
                                    {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
                                </Card>
                            </Link>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <Link to="/recipe-detail">
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
                                    {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
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
