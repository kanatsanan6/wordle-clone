import "./App.css";
import Board from "./Board";
import Keyboard from "./Keyboard";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <h1>Wordle-Clone</h1>
      <hr />
      {/* Board */}
      <Board />
      {/* Keyboard */}
      <Keyboard />
    </div>
  );
}

export default App;
