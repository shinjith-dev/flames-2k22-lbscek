import React from 'react'
import {Container,Tabs,Tab} from 'react-bootstrap/'




const Events = () => {
  return (
    <div>
      <Container>
      <Tabs
      defaultActiveKey="men"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="men" title="Men">
        Items for mens
      </Tab>
      <Tab eventKey="women" title="Women">
        Items for women
      </Tab>
    </Tabs>
      </Container>
    </div>
  )
}

export default Events