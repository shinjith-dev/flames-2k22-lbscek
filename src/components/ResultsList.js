import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import getData from "../services/getData";
import ResultPopup from "./ResultPopup";


const ResultsList = ({ type = "men" }) => {
  const [results, setResults] = useState([]);
  const [rawResult, setRawResult] = useState([]);
  const [showPopup,setShowPopup] = useState({show:false,data:[]})

  useEffect(() => {
    getData(`result${type}`).then((data) => {
      if (data !== null) {
        setRawResult(data.filter((item, index) => index !== 0));
        setResults(data.filter((item, index) => index%2 !== 0));
      }
    });
  }, []);

  const handleClosePopup = ()=>{
    setShowPopup(prev=>({...prev,show:false}))
  }

const onItemClick = (e)=>{
  let index = Number(String(e.target.id).slice(15))
setShowPopup(prev=>({...prev,show:true,data:rawResult.slice(index*2,(index*2+2))}))
}

  return (
    <>
      <h2>Result - {type === "men" ? "Men" : "Women"}</h2>
      <ListGroup as="ul">
        {results.length > 0 &&
          results.map((result,index) => (
            <ListGroup.Item action
            onClick={onItemClick}
            id={`resultListItem-${index}`}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="fw-bold">{result[0]}</div>
              <Badge bg="dark" pill>
                {result[1]==="Nil"?"Pending":"Completed"}
              </Badge>
            </ListGroup.Item>
          ))}
      </ListGroup>{showPopup.show &&  <ResultPopup item={showPopup.data} closePopup={()=>handleClosePopup()}/> }
    
      <p className="text-end mt-1">*To see the winners, click on the list item</p>
    </>
  );
};

export default ResultsList;
