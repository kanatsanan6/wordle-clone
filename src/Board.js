import React, { useEffect, useState } from "react";
import "./Board.css";
import wordList from "./word/word.json";

function Board() {
  const initialBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];
  const initialNumLetter = 0;
  const initialResult = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

  const [board, setBoard] = useState(initialBoard);
  let [numLetter, setNumLetter] = useState(initialNumLetter);
  let [result, setResult] = useState(initialResult);
  let [answer, setAnswer] = useState("");

  const randomAnswer = () => {
    const totalAlp = Object.keys(wordList).length; // length of wordList
    const randomAlp = Math.floor(Math.random() * totalAlp); // random an alphabet
    const totalAnswer = wordList[Object.keys(wordList)[randomAlp]].length; // length of wordList[totalAlp]
    const randomIndex = Math.floor(Math.random() * totalAnswer);
    const randomAnswer =
      wordList[Object.keys(wordList)[randomAlp]][randomIndex];
    setAnswer((answer = randomAnswer.toUpperCase()));
  };

  const judgement = (word) => {
    // Does word exist?
    const wordExist = wordList[word[0].toLowerCase()].includes(
      word.join("").toLowerCase()
    );
    /* not exist */
    if (wordExist === "false") {
      return -1;
    } else {
      /* exist */
      const result = [];
      for (let index = 0; index < 5; index++) {
        const letterExist = answer.includes(word[index]);
        if (letterExist && word[index] === answer[index]) {
          result.push("green");
        } else if (letterExist) {
          result.push("yellow");
        } else {
          result.push("gray");
        }
      }
      return result;
    }
  };

  // handle input from keyboard
  const handleKeyInput = (event) => {
    let enterLoop = false;
    loop1: for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 5; col++) {
        if (board[row][col] === "") {
          enterLoop = true;
          // Alphabet: Add a letter to the board
          if (
            event.key.match(/[a-z]/i) &&
            event.key.length === 1 &&
            numLetter < 5
          ) {
            setNumLetter((numLetter += 1));
            const newBoard = [...board];
            newBoard[row][col] = event.key.toUpperCase();
            setBoard(newBoard);
            break loop1;
          }
          // Backspace: Delete a letter from the board
          else if (event.key === "Backspace" && numLetter > 0) {
            const newBoard = [...board];
            if (col === 0) {
              newBoard[row - 1][4] = "";
            } else {
              newBoard[row][col - 1] = "";
            }
            setBoard(newBoard);
            setNumLetter((numLetter -= 1));
            break loop1;
          }
          // Enter: Judgement creteria
          else if (event.key === "Enter" && numLetter === 5) {
            const judgementResult = judgement(board[row - 1]);
            if (judgementResult !== -1) {
              setNumLetter((numLetter = initialNumLetter));
              const newResult = [...result];
              newResult[row - 1] = judgementResult;
              setResult(newResult);
            } else {
              console.log("Word is not existed");
            }
            break loop1;
          }
        }
      }
    }

    if (enterLoop === false) {
      if (event.key === "Backspace" && numLetter > 0) {
        const newBoard = [...board];
        newBoard[5][4] = "";
        setBoard(newBoard);
        setNumLetter((numLetter -= 1));
      } else if (event.key === "Enter" && numLetter === 5) {
        const judgementResult = judgement(board[5]);
        if (judgementResult !== -1) {
          setNumLetter((numLetter = initialNumLetter));
          const newResult = [...result];
          newResult[5] = judgementResult;
          setResult(newResult);
        } else {
          console.log("Word is not existed");
        }
      }
    }
  };
  useEffect(() => {
    randomAnswer();
    console.log(`Answer: ${answer}`);
  }, []);

  useEffect(() => {
    // listen to keyboard input
    window.addEventListener("keydown", handleKeyInput);
    return () => {
      window.removeEventListener("keydown", handleKeyInput);
    };
  });

  return (
    <div className="board">
      {board.map((rowElement, row) => {
        return rowElement.map((element, col) => {
          if (element === "") {
            return <div className="board__letterContainer"></div>;
          } else if (result[row][col] === "") {
            return (
              <div className="board__letterContainer board__letterExist">
                <h1>{element}</h1>
              </div>
            );
          } else if (result[row][col] === "gray") {
            return (
              <div className="board__letterContainer board__letterExist board__resultGray">
                <h1>{element}</h1>
              </div>
            );
          } else if (result[row][col] === "yellow") {
            return (
              <div className="board__letterContainer board__letterExist board__resultYellow">
                <h1>{element}</h1>
              </div>
            );
          } else if (result[row][col] === "green") {
            return (
              <div className="board__letterContainer board__letterExist board__resultGreen">
                <h1>{element}</h1>
              </div>
            );
          }
        });
      })}
    </div>
  );
}

export default Board;
