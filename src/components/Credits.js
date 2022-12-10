import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ListGroup from "react-bootstrap/ListGroup";

const popover = (
  <Popover id="popover-basic">
    
    <Popover.Body>
      <p className="text-center mb-1">This website was developed in collaboration with <strong>TinkerHub LBSCEK</strong> & <strong>Mulearn LBSCEK</strong></p>
      
      <p className="text-center mb-0">Contributers:</p>
      <div className="text-center">
      <a href="https://github.com/the3plet" class="d-inline p-2 text-decoration-none">Sooraj</a>
      <a href="https://github.com/shinjith-dev/" class="d-inline p-2 text-decoration-none">Shinjith</a>
      </div>
    </Popover.Body>
  </Popover>
);

const CreditPopup = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <p class="fw-lighter d-flex justify-content-center mx-auto fs-10">Credits &#x1F60B;</p>
  </OverlayTrigger>
);

export default CreditPopup;
