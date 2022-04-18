import React from "react";
import "./Keyboard.css";

function Keyboard() {
  const firstLine = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondLine = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdLine = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"];
  return (
    <div className="keyboard">
      <div className="keyboard__firstLine">
        {firstLine.map((key) => {
          return <button className="keyboard__normalButton">{key}</button>;
        })}
      </div>
      <div className="keyboard__secondLine">
        {secondLine.map((key) => {
          return <button className="keyboard__normalButton">{key}</button>;
        })}
      </div>
      <div className="keyboard__thirdLine">
        {thirdLine.map((key, index) => {
          if (index === 0) {
            return <button className="keyboard__normalButton enterButton">{key}</button>;
          } else if (index === thirdLine.length - 1) {
            return <button className="keyboard__normalButton backspaceButton">{key}</button>;
          } else {
            return <button className="keyboard__normalButton">{key}</button>;
          }
        })}
      </div>
    </div>
  );
}

export default Keyboard;
