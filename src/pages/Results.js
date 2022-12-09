import React,{useState} from "react";
import ResultPopup from "../components/ResultPopup";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ResultsList from "../components/ResultsList";
import Header from "../components/Header";


function Results() {
  const [selectedTab,setSelectedTab] = useState('men')
  return (
    <div className="pt-5">
    <Container>
      <Tabs
        defaultActiveKey="men"
        className="mb-3"
        activeKey={selectedTab}
        onSelect={(tab)=>{setSelectedTab(tab)}}
      >
        <Tab eventKey="men" title="Men">
         <ResultsList action type="men" />
        </Tab>
        <Tab eventKey="women" title="Women">
        <ResultsList action type="women" />
        </Tab>
      </Tabs>
    </Container>
    </div>
  );
}

export default Results;
