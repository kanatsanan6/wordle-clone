import React from "react";
import "./Popup.css";
import { useStateValue } from "./StateProvider/StateProvider";

function Popup() {
  const [{ winningStatus, noWordStatus }] = useStateValue();

  return (
    <div className="popup">
      {noWordStatus.map((item) => {
        if (winningStatus) {
          return (
            <div className="popup__normal">
              <h1>Winning</h1>
            </div>
          );
        }
        if (item) {
          return (
            <div className="popup__noword">
              <h1>No Word</h1>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Popup;
