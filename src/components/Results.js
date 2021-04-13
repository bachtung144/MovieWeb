import React from "react"
import {Card} from "./Card";

export const Results = ({results}) => {
    return(
        <section className="results-section">
            <div className="container">
                <div
                    className="card-columns row"
                    style={{justifyContent: "center"}}
                >
                    {results ? (
                        results.map((item) => (
                            <Card key={item?.imdbID} item={item}></Card>
                        ))
                    ) : (
                        <div>NOT FOUND</div>
                    )}
                </div>
            </div>
        </section>
    )
}
