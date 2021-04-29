import React from "react";
import { mock } from "../../assets/mock";
import CarouselTemplate from "../CarouselTemplate/CarouselTemplate";

function TVandMovies() {
  const handleOnClick = () => {};
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 TVandMovies">
            <CarouselTemplate
              title={"Wacth next TV and movies"}
              data={mock}
              handleOnClick={handleOnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TVandMovies;
