import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap/";
import EventsList from '../components/EventsList'

const Events = () => {
  return (
    <div>
      <Container>
        <Tabs  variant="pills" 
          defaultActiveKey="men"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="men" title="Men">
            <EventsList type="men" />
          </Tab>
          <Tab eventKey="women" title="Women">
          <EventsList type="women" />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Events;
