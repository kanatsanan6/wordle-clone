import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useStateValue } from "./StateProvider/StateProvider";
import "./WinModal.css";

function WinModal() {
  const [, dispatch] = useStateValue();
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const resetBoard = () => {
    dispatch({
      type: "RESET_BOARD",
    });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="winmodal">
        <Modal.Header>
          <Modal.Title>
            <h1>You Win !!!</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Woohoo, you're doing great!</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              resetBoard();
            }}
          >
            Play Again
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default WinModal;
