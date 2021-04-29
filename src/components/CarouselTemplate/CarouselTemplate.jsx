import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import nxtBtn from "../../assets/nxt.svg";
import prevBtn from "../../assets/prev.svg";
import "./CarouselTemplate.css";

function CarouselTemplate(props) {
  const [showFlixCardDetails, setshowFlixCardDetails] = useState(false);
  const [currentCardId, setCurrentCardId] = useState("");
  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // showFlixCardDetails && currentCardId == `flixCard_${index}`
  const handleMouseEnter = (e) => {
    // showFlixCardDetails && currentCardId == `flixCard_${index}` &&
    setCurrentCardId(e.target.id);
    setshowFlixCardDetails(true);
  };

  const handleMouseLeave = (e) => {
    setshowFlixCardDetails(false);
  };
  return (
    <>
      <div className="title">{props.title}</div>
      <Slider {...settings} className="mx-auto">
        {props.data.map((flix, index) => {
          return (
            <Link
              to={{ pathname: `/FlixDetails/${flix.id}`, gm: 24 }}
              key={index}
              className="position-relative"
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="px-1 flixCard  car-link"
                key={index}
                onClick={props.handleOnClick}
              >
                <img
                  onMouseEnter={handleMouseEnter}
                  id={`flixCard_${index}`}
                  src={flix.thumbnail}
                  className="img-fluid"
                />
              </div>
              <div className="position-absolute flixCardDetail text-muted text-decoration-none">
                <div className="position-relative desc p-4 d-md-none">
                  {flix.desc.substring(0, 100) + "..."}
                </div>

                <div className="position-relative desc p-4 d-none d-md-block">
                  {flix.desc.substring(0, 200) + "..."}
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: `url(${nxtBtn})` }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + " nxtBtnC"}
      style={{ ...style, background: `url(${prevBtn})` }}
      onClick={onClick}
    />
  );
}

export default CarouselTemplate;
