import React from "react";
import imgDetail from "../../img/bg-img/breadcumb3.jpg";
import imgBg1 from "../../img/bg-img/bg5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
const RecipeDetail = () => {
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

      <div className="receipe-post-area section-padding-80">
        <div className="receipe-content-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-8">
                <div className="receipe-headline my-5">
                  <span>April 05, 2018</span>
                  <h2>Vegetarian cheese salad</h2>
                  <div className="receipe-duration">
                    <h6>Prep: 15 mins</h6>
                    <h6>Cook: 30 mins</h6>
                    <h6>Yields: 8 Servings</h6>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="receipe-ratings text-right my-5">
                  <div className="ratings">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                  </div>
                  <a href="#" className="btn delicious-btn">
                    For Begginers
                  </a>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="single-preparation-step d-flex">
                  <h4>01.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum nec varius dui. Suspendisse potenti. Vestibulum
                    ac pellentesque tortor. Aenean congue sed metus in iaculis.
                    Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget
                    lobortis purus. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.{" "}
                  </p>
                </div>

                <div className="single-preparation-step d-flex">
                  <h4>02.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum nec varius dui. Suspendisse potenti. Vestibulum
                    ac pellentesque tortor. Aenean congue sed metus in iaculis.
                    Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget
                    lobortis purus. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.{" "}
                  </p>
                </div>

                <div className="single-preparation-step d-flex">
                  <h4>03.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum nec varius dui. Suspendisse potenti. Vestibulum
                    ac pellentesque tortor. Aenean congue sed metus in iaculis.
                    Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget
                    lobortis purus. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.{" "}
                  </p>
                </div>

                <div className="single-preparation-step d-flex">
                  <h4>04.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum nec varius dui. Suspendisse potenti. Vestibulum
                    ac pellentesque tortor. Aenean congue sed metus in iaculis.
                    Cras a tortor enim. Phasellus posuere vestibulum ipsum, eget
                    lobortis purus. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.{" "}
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <div className="ingredients">
                  <h4>Ingredients</h4>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" for="customCheck1">
                      4 Tbsp (57 gr) butter
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck2"
                    />
                    <label className="custom-control-label" for="customCheck2">
                      2 large eggs
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck3"
                    />
                    <label className="custom-control-label" for="customCheck3">
                      2 yogurt containers granulated sugar
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck4"
                    />
                    <label className="custom-control-label" for="customCheck4">
                      1 vanilla or plain yogurt, 170g container
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck5"
                    />
                    <label className="custom-control-label" for="customCheck5">
                      2 yogurt containers unbleached white flour
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck6"
                    />
                    <label className="custom-control-label" for="customCheck6">
                      1.5 yogurt containers milk
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck7"
                    />
                    <label className="custom-control-label" for="customCheck7">
                      1/4 tsp cinnamon
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck8"
                    />
                    <label className="custom-control-label" for="customCheck8">
                      1 cup fresh blueberries{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="section-heading text-left">
                  <h3>Leave a comment</h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="contact-form-area">
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="col-12">
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
      </div>
    </>
  );
};

export default RecipeDetail;
