import React, { useState } from "react";
import Detail from "./Detail";

export const Card = ({ item }) => {
  const [showDetail, setShowDetail] = useState(false);
  const showDetail = () => {
    setShowDetail(true);
  };
  return (
    <>
      <Detail show={showDetail}></Detail>
      <div className="card col-xl-3 col-lg-4" style={{ padding: 0 }}>
        <div>
          <img
            className="card-img-top"
            src={item?.Poster}
            alt="Card image cap"
            style={{ width: "100%", height: 400, objectFit: "cover" }}
          />
        </div>
        <div className="card-body">
          <h5
            className="card-title"
            style={{
              height: 50,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
            }}
          >
            {item?.Title}
          </h5>
          <p
            className="card-text"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
            }}
          >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a
              href="#"
              className="btn btn-primary col-lg-5 col-sm-11"
              style={{ marginBottom: "5px", marginRight: "2px" }}
            >
              See detail
            </a>
            <button onClick={showDetail()}>See detail</button>
          </div>
        </div>
      </div>
    </>
  );
};
