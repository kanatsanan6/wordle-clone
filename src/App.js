import "./App.css";
import Board from "./Board";
import Keyboard from "./Keyboard";
import Popup from "./Popup";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <h1>Wordle-Clone</h1>
      <hr />
      {/* Pop up status */}
      <Popup className="app__popup" />
      {/* Board */}
      <Board className="app__board" />
      {/* Keyboard */}
      <Keyboard />
      <p>created by Kanatsanan6</p>
    </div>
  );
}

export default App;
