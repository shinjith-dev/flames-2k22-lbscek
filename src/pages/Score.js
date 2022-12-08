import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import getData from "../services/getData";

const Score = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    getData("score").then((data) => {
      if (data !== null) setScores(data.filter((item,index)=>index!==0));
    });
  }, []);
  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Department</th>
              <th>Point</th>
            </tr>
          </thead>
          <tbody>
            {scores.length > 0 &&
              scores.map((score) => (
                <tr>
                  <td>{score[0]}</td>
                  <td>{score[1]}</td>
                  <td>{score[2]}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Score;
