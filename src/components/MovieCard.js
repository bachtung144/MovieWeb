import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
// import Detail from "./Detail";

export const MovieCard = ({ item }) => {
  // const [showDetail, setShowDetail] = useState(false);
  // const showDetail = () => {
  //   setShowDetail(true);
  // };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
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
          <Button variant="primary">See movie detail</Button>
        </Card.Body>
      </Card>
    </>
  );
};
