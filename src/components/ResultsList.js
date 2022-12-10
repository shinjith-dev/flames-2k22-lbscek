import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import getData from "../services/getData";
import ResultPopup from "./ResultPopup";
import { Button, Spinner } from "react-bootstrap";
import './loading.css'

const ResultsList = ({ type = "men" }) => {
  const [results, setResults] = useState([]);
  const [rawResult, setRawResult] = useState([]);
  const [showPopup, setShowPopup] = useState({ show: false, data: [] });
  const [loading, setLoading] = useState(true);
  const [popupData, setPopupData] = useState([]);

  useEffect(() => {
    getData(`result${type}`).then((data) => {
      if (data !== null) {
        setRawResult(data.filter((item, index) => index !== 0));
        setResults(data.filter((item, index) => index % 2 !== 0));
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    setPopupData([...rawResult]);
  }, [rawResult]);

  const handleClosePopup = () => {
    setShowPopup((prev) => ({ ...prev, show: false }));
  };

  const onItemClick = (e) => {
    let index = Number(String(e.target.id).slice(15));
    setShowPopup((prev) => ({
      show: true,
      data: popupData.slice(index * 2, index * 2 + 2),
    }));
  };

  return (
    <>
      {loading ? (
        <div className="w-full d-flex justify-content-center py-3">
          <Spinner animation="grow" />
        </div>
      ) : (
        <>
          <h2>Result - {type === "men" ? "Men" : "Women"}</h2>
          <ListGroup as="ul">
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-star bg-dark text-light"
            >
              <div className="ms-4">ITEM</div>
              <div className="me-4">RESULTS</div>
            </ListGroup.Item>
            {results.length > 0 ? (
              results.map((result, index) => (
                <ListGroup.Item
                  action
                  // onClick={onItemClick}
                  id={`resultListItem-${index}`}
                  key={result[0]}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="fw-bold ms-2">{result[0]}</div>
                  {/* <Badge bg="dark" pill>
                    {result[1] === "Nil" ? "Pending" : "Completed"}
                  </Badge> */}
                  <div>
                    <Button
                    onClick={onItemClick}
                    id={`resultListItem-${index}`}
                      variant="link"
                      className="link-dark me-2"
                      disabled={result[1] === "Nil"}
                    >
                      {result[1] === "Nil" ? "Pending" : "Show Winners"}
                    </Button>
                    {/* <div class="lds-facebook">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div> */}
                  </div>
                </ListGroup.Item>
              ))
            ) : (
              <p>No data</p>
            )}
          </ListGroup>
          {showPopup.show && (
            <ResultPopup
              item={showPopup.data}
              closePopup={() => handleClosePopup()}
            />
          )}
        </>
      )}
    </>
  );
};

export default ResultsList;
