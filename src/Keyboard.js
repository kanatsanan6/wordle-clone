import React from "react";
import "./Keyboard.css";
import { useStateValue } from "./StateProvider/StateProvider";

function Keyboard() {
  const [{ firstLineStatus, secondLineStatus, thirdLineStatus }, dispatch] = useStateValue();
  const firstLine = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondLine = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdLine = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"];

  const add_to_list = (key) => {
    dispatch({
      type: "ADD_TO_LIST",
      item: { key },
    });
  };

  return (
    <div className="keyboard">
      <div className="keyboard__firstLine">
        {firstLine.map((key, index) => {
          if (firstLineStatus[index] === "") {
            return (
              <button
                className="keyboard__normalButton"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          } else if (firstLineStatus[index] === "green") {
            return (
              <button
                className="keyboard__normalButton greenStatus"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          } else if (firstLineStatus[index] === "yellow") {
            return (
              <button
                className="keyboard__normalButton yellowStatus"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          } else if (firstLineStatus[index] === "gray") {
            return (
              <button
                className="keyboard__normalButton grayStatus"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          }
        })}
      </div>
      <div className="keyboard__secondLine">
        {secondLine.map((key, index) => {
          if (secondLineStatus[index] === "") {
            return (
              <button
                className="keyboard__normalButton"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          } else if (secondLineStatus[index] === "green") {
            return (
              <button
                className="keyboard__normalButton greenStatus"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          } else if (secondLineStatus[index] === "yellow") {
            return (
              <button
                className="keyboard__normalButton yellowStatus"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          } else if (secondLineStatus[index] === "gray") {
            return (
              <button
                className="keyboard__normalButton grayStatus"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          }
        })}
      </div>
      <div className="keyboard__thirdLine">
        {thirdLine.map((key, index) => {
          if (index === 0) {
            return (
              <button
                className="keyboard__normalButton enterButton"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          } else if (index === thirdLine.length - 1) {
            return (
              <button
                className="keyboard__normalButton backspaceButton"
                onClick={() => {
                  add_to_list(key);
                }}
              >
                {key}
              </button>
            );
          } else {
            if (thirdLineStatus[index] === "") {
              return (
                <button
                  className="keyboard__normalButton"
                  onClick={() => {
                    add_to_list(key);
                  }}
                >
                  {key}
                </button>
              );
            } else if (thirdLineStatus[index] === "green") {
              return (
                <button
                  className="keyboard__normalButton greenStatus"
                  onClick={() => {
                    add_to_list(key);
                  }}
                >
                  {key}
                </button>
              );
            } else if (thirdLineStatus[index] === "yellow") {
              return (
                <button
                  className="keyboard__normalButton yellowStatus"
                  onClick={() => {
                    add_to_list(key);
                  }}
                >
                  {key}
                </button>
              );
            } else if (thirdLineStatus[index] === "gray") {
              return (
                <button
                  className="keyboard__normalButton grayStatus"
                  onClick={() => {
                    add_to_list(key);
                  }}
                >
                  {key}
                </button>
              );
            }
          }
        })}
      </div>
    </div>
  );
}

export default Keyboard;
