import React from "react";
import Button from "react-bootstrap/Button";
import logo from "../images/hi.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
   
    <Container className="position-absolute top-50 start-50 translate-middle">
      <div className="d-flex flex-column align-items-center">
        <div className="spinner-border mb-2" role="status">
          <p>-----</p>
        </div>
        <div className="h1 text-center fw-bold mb-1" style={{fontSize:"3rem"}}>FLAMES'22</div>
        <p className="fw-light text-center fs-6 mb-0">Annual Athletic Meet</p>
        <p className="fw-lighter text-center " style={{fontSize:"0.8rem"}}>COLLEGE UNION 2022 LBSCEK</p>
      </div>

      <div className="gap-2 hstack mx-auto justify-content-center mt-5">
        <Link to="/events">
          <Button type="button" variant="dark">Events</Button>
        </Link>
        <Link to="/results">
          <Button type="button" variant="dark">Result</Button>
        </Link>
        <Link to="/score">
          <Button type="button" variant="dark">Score</Button>
        </Link>
      </div>
    </Container>
    </>
  );
};

export default Home;
