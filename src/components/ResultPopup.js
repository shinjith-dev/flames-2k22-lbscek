import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState, useEffect } from "react";

const ResultPopup = ({ item, closePopup }) => {
  const [show, setShow] = useState({ show: true, value: item });
  useEffect(() => {
    setShow((prev) => ({ ...prev, show: true, value: item }));
  }, []);

  const handleClose = () => {
    closePopup();
    setShow(false);
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">{item[0][0]}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="py-0">
          {show.value[0][1] === "Nil" ? (
            <p className="fw-bold">Not finished yet</p>
          ) : (
            <>
              <div>
                First:<p className="fw-bold my-1">{` ${item[0][1]} - ${item[1][1]}`}</p>
              </div>
              <div>
                Second:<p className="fw-bold my-1">{` ${show.value[0][2]} - ${show.value[1][2]}`}</p>
              </div>
              <div>
                Third:<p className="fw-bold my-1">{` ${show.value[0][3]} - ${show.value[1][3]}`}</p>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ResultPopup;
