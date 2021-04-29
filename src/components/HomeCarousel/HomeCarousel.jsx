import React from "react";
import Carousel from "../Carousel/Carousel";

function HomeCarousel() {
  const images = [
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_EnglishAlwaysOnT2ActiveFeb21/ae816ca0-d155-4bbe-b370-5416e18a9055._UR3000,600_SX1500_FMwebp_.jpg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_JackRyanS2Revised/7185237b-f244-42a6-aa30-0c4bf19ed0e6._UR3000,600_SX1500_FMwebp_.jpg",
    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_13_Hours/en_us-hero_in_13_hours-3000-600._UR3000,600_SX1500_FMwebp_.jpg",
    "https://m.media-amazon.com/images/G/01/digital/video/sonata/Hero_IN_Mentalist/en_us-hero_in_mentalist-3000-600._UR3000,600_SX1500_FMwebp_.jpg",
    "https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_Fleabag2GoldenGlobe/ff240645-476a-43ee-af67-1e1fe1751a7d._UR3000,600_SX1500_FMwebp_.jpg",
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carousel images={images} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCarousel;
