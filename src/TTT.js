/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";

class Result extends Component {
    render() {
        const { result } = this.props;
        return (
            <div className="card col-xl-3 col-lg-4" style={{ padding: 0 }}>
                <div>
                    <img
                        className="card-img-top"
                        src={result.Poster}
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
                        {result.Title}
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
                        <a
                            href="#"
                            className="btn btn-primary col-lg-5 col-sm-11"
                            style={{ marginBottom: "5px", marginLeft: "2px" }}
                        >
                            Go some
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
