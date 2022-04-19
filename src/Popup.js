import React, { useState } from "react";
import "./Popup.css";
import { useStateValue } from "./StateProvider/StateProvider";
import "./bootstrap-Modal/css/bootstrap.min.css";
import WinModal from "./WinModal";

function Popup() {
  const [{ winningStatus, noWordStatus }] = useStateValue();

  return (
    <div className="popup">
      {noWordStatus.map((item) => {
        if (winningStatus) {
          return <WinModal className="popup__winmodal" />;
        }
        if (item) {
          return (
            <div className="popup__noword">
              <h1>Not in word list</h1>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Popup;
