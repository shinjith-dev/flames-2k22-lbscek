import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ListGroup from "react-bootstrap/ListGroup";
import anjaliImg from '../images/profile.png'

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <div className="text-center mb-1">
      <strong>Made in collaboration with</strong>
      <a
          href="https://instagram.com/tinkerhub.lbscek"
          class="d-inline-block py-2 p-1 text-decoration-none"
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
        >
          <img
            alt="Mulearn Logo"
            src="https://media.discordapp.net/attachments/883626663160729601/1051036455079772160/IMG_20221210_125315.png"
            className="square rounded me-1"
            style={{ width: "3rem", height: "3rem" }}
          />
          
        </a>
      </div>

      <p className="text-center mb-0"><strong>Contributors:</strong></p>
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
        <a
          href="#"
          class="d-inline-block py-2 p-1 text-decoration-none"
        >
          <img
            alt="anjali-img"
            src={anjaliImg}
            className="rounded-circle me-1"
            style={{ width: "1.8rem", height: "1.8rem" }}
          />
          Anjali
        </a>
       
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
