import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nxtBtn from '../../assets/nxt.svg'
import prevBtn from '../../assets/prev.svg'
import './Carousel.css'

function Carousel(props) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {props.images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} style={{ width: "100vw" }} />
            </div>
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
      style={{ ...style,   background:`url(${nxtBtn})` }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className + ' nxtBtnC'}
      style={{ ...style,   background:`url(${prevBtn})` }}
      onClick={onClick}
    />
  );
}

export default Carousel;
