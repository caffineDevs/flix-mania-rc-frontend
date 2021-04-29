import React, { useEffect, useState } from "react";
import "./FlixDetails.css";
import play from "../../assets/play.png";
import trailer from "../../assets/trailer.png";
import save from "../../assets/save.png";
import RelatedFlixes from "../RelatedFlixes/RelatedFlixes";

import { mock } from "../../assets/mock";
import { useParams } from "react-router";

function FlixDetails(props) {
  const [res, setres] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    setres(getDataById(id));
  }, [id]);

  const getDataById = (id) => {
    return mock.find((flix) => flix.id == id);
  };
  return (
    <>
      {res && (
        <>
          <div className="container py-4">
            <div className="row season-desc">
              <div className="col-12">
                <div className="position-relative amendedMargin">
                  <div className="img-banner d-flex justify-content-end">
                    <img className="img-fluid" src={res.previewBg} />
                  </div>
                  <div className="position-absolute detailTxt gradient p-4">
                    <div className="heading my-3">{res?.name}</div>
                    <div className="d-flex my-3">
                      <div className="imdb-rating p-2 border rounded mr-2 py-1 px-2">
                        IMDb 6.7
                      </div>
                      <div className="release-year p-2 border rounded mx-2 py-1 px-2">
                        2014
                      </div>
                      <div className="media-type p-2 border rounded mx-2 py-1 px-2">
                        X-Ray
                      </div>
                      <div className="rating p-2 border rounded mx-2 py-1 px-2">
                        {res.rating}+
                      </div>
                    </div>
                    <div className="desc">{res.desc}</div>

                    <div className="d-flex align-items-center">
                      <a className="mx-2 border px-4 py-2 rounded play-btn">
                        <img src={play} />
                      </a>
                      <a className="mx-2 border px-4 py-2 rounded play-btn d-block">
                        <img src={trailer} />
                      </a>
                      <a className="mx-2 border px-4 py-2 rounded play-btn d-block">
                        <img src={save} />
                      </a>
                    </div>
                    <div className="people d-flex">
                      <div className="movieTitles">
                        <div className="peopleTitles font-weight-bold">
                          Directors
                        </div>
                        <div className="peopleTitles font-weight-bold">
                          Casts
                        </div>
                        <div className="peopleTitles font-weight-bold">
                          Genres
                        </div>
                        <div className="peopleTitles font-weight-bold">
                          Subtitles
                        </div>
                        <div className="peopleTitles font-weight-bold">
                          Available in
                        </div>
                      </div>
                      <div className="values mx-4">
                        <div>{res.director}</div>
                        <div>{res.actors.map((actor) => actor).join(", ")}</div>
                        <div>
                          {res.genres.map((genre) => genre).join(", ")}{" "}
                        </div>
                        <div>{res.subtitles.map((subtitle) => subtitle).join(", ")}</div>
                        <div>{res.audio.map((aud) => aud).join(", ")}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <RelatedFlixes />
              </div>
            </div>
          </div>
          {props.isTvShow && (
            <div className="container p-4">
              <div className="row episode-list">
                <div className="col-12">
                  <div className="title">Episodes</div>

                  <div className="episodeCards">
                    <div className="episodeCard d-flex flex-column flex-sm-row rounded-2 px-3 py-2">
                      <div className="thumbnail position-relative m-2 mx-auto cursor-pointer">
                        <img src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cf76187cc31150914dbf7ab9d68a1bb6de3c46277a31d9bc5a8ad51cb479c1a0._V_SX268_.jpg" />
                        <img src={play} className="play-icon" />
                      </div>
                      <div className="main-content flex-grow-1 mx-sm-4 my-2">
                        <div className="ep-name mb-2">
                          <span className="ep-no">1. &nbsp;</span>
                          <span className="ep-name-txt">
                            And The Two Openings: Part One
                          </span>
                        </div>
                        <div className="desc truncate ">
                          Max and Caroline, now part-owners of the diner, put
                          the finishing touches on their Dessert Bar. Max deals
                          with her breakup with Randy, a Max and Caroline, now
                          part-owners of the diner, put the finishing touches on
                          their Dessert Bar. Max deals with her breakup with
                          Randy, a Max and Caroline, now part-owners of the
                          diner, put the finishing touches on their Dessert Bar.
                          Max deals with her breakup with Randy.
                        </div>
                      </div>
                      <div className="meta-content my-sm-2">
                        <div className="ratingAlert">16+</div>
                        <div className="duration my-1">21min</div>
                        <div className="releseDate">October 10, 2016</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default FlixDetails;
