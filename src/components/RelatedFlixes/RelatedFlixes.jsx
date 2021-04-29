import React from "react";
import CarouselTemplate from "../CarouselTemplate/CarouselTemplate";
import "./RelatedFlixes.css";

import { mock } from "../../assets/mock";

function RelatedFlixes() {
  return (
    <div className="container RelatedFlixes px-0 my-5">
      <div className="row">
        <div className="col-12">
          <CarouselTemplate data={mock} title={"People also watched these"} />
        </div>
      </div>
    </div>
  );
}

export default RelatedFlixes;
