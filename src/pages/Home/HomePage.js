import img1 from "../../img/bg-img/r1.jpg";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import Rating from "@mui/material/Rating";
import bestImg from "../../img/bg-img/r1.jpg";

export default function HomePage() {
  return (
    <>
      <h1 className="title-recipes">Best Recipes</h1>
      <section class="best-receipe-area">
        <div class="container">
          <div class="row mt-5">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-best-receipe-area mb-30">
                <img src={bestImg} alt="" />
                <div class="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Sushi Easy Receipy</h5>
                  </a>
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-best-receipe-area mb-30">
                <img src={bestImg} alt="" />
                <div class="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Homemade Burger</h5>
                  </a>
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-best-receipe-area mb-30">
                <img src={bestImg} alt="" />
                <div class="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Vegan Smoothie</h5>
                  </a>
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-best-receipe-area mb-30">
                <img src={bestImg} alt="" />
                <div class="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Calabasa soup</h5>
                  </a>
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-best-receipe-area mb-30">
                <img src={bestImg} alt="" />
                <div class="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Homemade Breakfast</h5>
                  </a>
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-best-receipe-area mb-30">
                <img src={bestImg} alt="" />
                <div class="receipe-content">
                  <a href="receipe-post.html">
                    <h5>Healthy Fruit Desert</h5>
                  </a>
                  <div class="ratings">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="title-recipes">Lastest Recipes</h1>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
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
                {/* <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
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
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
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
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
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
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
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
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
