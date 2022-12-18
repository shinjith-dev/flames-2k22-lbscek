import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ListGroup from "react-bootstrap/ListGroup";
import unionLogo from "../images/union.png";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body className="py-1 px-2">
      <div className="text-center mb-1">
        <p className="text-center mb-0 fw-bold">In collaboration with</p>
        <div>
          {" "}
          <a
            href="https://instagram.com/tinkerhub.lbscek"
            class="d-inline-block py-2 p-1 text-decoration-none"
            title="Tinkerhub LBSCEK"
          >
            <img
              alt="TinkerHub Logo"
              src="https://media.discordapp.net/attachments/883626663160729601/1051033216494084168/IMG_20221210_124025.jpg"
              className="rounded-rectangle me-1"
              style={{ width: "3rem", height: "3rem" }}
            />
          </a>
          <a
            href="https://instagram.com/gtechmulearn"
            class="d-inline-block py-2 p-1 text-decoration-none"
            title="MuLearn LBSCEK"
          >
            <img
              alt="Mulearn Logo"
              src="https://media.discordapp.net/attachments/883626663160729601/1051036455079772160/IMG_20221210_125315.png"
              className="square rounded me-1"
              style={{ width: "3rem", height: "3rem" }}
            />
          </a>
          <a
            href="https://instagram.com/tinkerhub.lbscek"
            class="d-inline-block py-2 p-1 text-decoration-none"
            title="Tinkerhub LBSCEK"
          >
            <img
              alt="TinkerHub Logo"
              src={unionLogo}
              className="rounded square me-1"
              style={{ width: "3rem", height: "3rem" }}
            />
            </a>
        </div>
      </div>

      <p className="text-center mb-0 fw-bold">Contributors:</p>
      <div className="text-center" style={{ width: "15rem" }}>
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
        <a href="#" class="d-inline-block py-2 p-1 text-decoration-none">
          <img
            alt="anjali-img"
            src="https://media.discordapp.net/attachments/1051051055460405248/1051051671112921089/IMG_20221210_135317.jpg"
            className="rounded-circle me-1"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
          Anjali
        </a>
        <a href="#" class="d-inline-block py-2 p-1 text-decoration-none">
          <img
            alt="diya-img"
            src="https://media.discordapp.net/attachments/1051051055460405248/1051051113492795462/IMG_20221210_134952.jpg"
            className="rounded-circle me-1"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
          Diya
        </a>
      </div>
    </Popover.Body>
  </Popover>
);

const CreditPopup = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <p class="fw-lighter d-flex justify-content-center mx-auto fs-10">
      Credits &#x1F60B;
    </p>
  </OverlayTrigger>
);

export default CreditPopup;
