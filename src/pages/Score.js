import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import getData from "../services/getData";
import { Spinner } from "react-bootstrap";

const Score = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getData("score").then((data) => {
      if (data !== null) {
        setScores(
          data.filter((item, index) => index !== 0).sort((a, b) => a[2] < b[2])
        );
        setLoading(false)
      }
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full d-flex justify-content-center py-3">
          <Spinner animation="grow" />
        </div>
      ) : (
        <div className="pt-5">
          <Container>
            <h3 className="fw-bold ps-2">Scores</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Department</th>
                  <th>Point</th>
                </tr>
              </thead>
              <tbody>
                {scores.length > 0 ?
                  scores.map((score, index) => (
                    <tr key={score[1]}>
                      <td>{index + 1}</td>
                      <td>{score[1]}</td>
                      <td>{score[2]}</td>
                    </tr>
                  )):<p>No data</p>}
              </tbody>
            </Table>
          </Container>
        </div>
      )}
    </>
  );
};

export default Score;
