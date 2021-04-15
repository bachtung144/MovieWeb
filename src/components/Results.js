import React from "react";
import { MovieCard } from "./MovieCard";
import { Container, Row, Col } from "react-bootstrap";

export const Results = ({ results }) => {
  return (
    <section className="results-section">
      <Container>
        <Row>
          {results ? (
            results.map((item) => (
              <Col md={4}>
                <MovieCard key={item?.imdbID} item={item}></MovieCard>
              </Col>
            ))
          ) : (
            <div>NOT FOUND</div>
          )}
        </Row>
      </Container>
    </section>
  );
};
