import React, { useState } from "react";
import { Card, Button, Modal, Container, Image } from "react-bootstrap";
// import Detail from "./Detail";

export const MovieCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const [record, setRecord] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    console.log(movie);
    setRecord(movie);
    setShow(true);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{record?.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Image
                style={{
                  overflow: "hidden",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                src={record?.Poster}
                fluid
              />
            </div>
            <div className="movie__card-descrition">
              <div>
                <b>Description: </b>
              </div>
              You're reading this text in a modal!. Some quick example text to
              build on the card title and make up the bulk of the card's
              content.
            </div>

            <div className="movie__card-info">
              <div>
                <b>Movie info: </b>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ width: "32%", textAlign: "center" }}>
                  <b>Year: </b>
                  {record?.Year}
                </div>
                <div style={{ width: "32%", textAlign: "center" }}>
                  <b>imdbID: </b>
                  {record?.imdbID}
                </div>
                <div style={{ width: "32%", textAlign: "center" }}>
                  <b>Type: </b>
                  {record?.Type}
                </div>
              </div>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        style={{ width: "22rem", marginBottom: "1rem" }}
        bg="dark"
        border="light"
        text="white"
      >
        <Card.Img
          style={{ width: "100%", height: 400, objectFit: "cover" }}
          variant="top"
          src={item?.Poster}
        />
        <Card.Body>
          <Card.Title
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
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => handleShow(item)}>
            See movie detail
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
