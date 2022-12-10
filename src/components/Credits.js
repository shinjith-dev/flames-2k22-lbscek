import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ListGroup from "react-bootstrap/ListGroup";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <p className="text-center mb-1">
      This website was created in collaboration with{" "}
        <strong>TinkerHub LBSCEK</strong> & <strong>MuLearn LBSCEK</strong>
      </p>

      <p className="text-center mb-0">Core Contributors:</p>
      <div className="text-center">
        <a
          href="https://github.com/the3plet/"
          class="d-inline-block py-2 p-1 text-decoration-none"
        >
          <img
            alt="the3plet"
            src="https://github.com/the3plet.png"
            className="rounded-circle me-1"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
          Sooraj
        </a>
        <a
          href="https://github.com/shinjith-dev/"
          class="d-inline-block py-2 p-1 text-decoration-none"
        >
          <img
            alt="shinjith-dev"
            src="https://github.com/shinjith-dev.png"
            className="rounded-circle me-1"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
          Shinjith
        </a>
      </div>
    </Popover.Body>
  </Popover>
);

const CreditPopup = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <p class="fw-light d-flex justify-content-center mx-auto fs-10">
      Credits &#x1F60B;
    </p>
  </OverlayTrigger>
);

export default CreditPopup;
