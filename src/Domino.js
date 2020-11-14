import React from "react";
import "./Domino.css";

function Domino(props) {
  let [newDominoActive, setNewDominoActive] = React.useState([]);
  let [newNumber, setNewNumber] = React.useState(0);
  let [isTimerActive, setIsTimerActive] = React.useState(false);
  React.useEffect(() => {
    let timeOutFunction = () => {
      if (!isTimerActive) {
        return;
      }
      let isChanged = false;
      let CopyOfDomino = newDominoActive.slice();
      for (let i = 0; i < CopyOfDomino.length; i++) {
        if (newDominoActive[i] === "blue") {
          if (newDominoActive[i + 1] === "red") {
            CopyOfDomino[i + 1] = "blue";
            isChanged = true;
          }
        }
      }
      if (!isChanged) {
        setIsTimerActive(false);
      } else {
        setTimeout(timeOutFunction, 500);
      }
      // setNewDominoActive(CopyOfDomino);
    };

    setTimeout(timeOutFunction, 500);
  }, [isTimerActive]);

  let onClick = (e) => {
    setIsTimerActive(true);
    let uniqueNumber = e.target.attributes.number.nodeValue;
    let CopyOfDomino = newDominoActive.slice();

    for (let i = 0; i < CopyOfDomino.length; i++) {
      if (uniqueNumber === i.toString()) {
        if (CopyOfDomino[i] === "red") {
          CopyOfDomino[i] = "blue";
        } else {
          CopyOfDomino[i] = "red";
        }
      }
    }
    setNewDominoActive(CopyOfDomino);
  };
  let onButtonClick = () => {
    setNewDominoActive([...newDominoActive, "red"]);
    setNewNumber(newNumber + 1);
  };

  return (
    <div>
      <div className={"domino red"}></div>
      <button onClick={onButtonClick} className="button">
        +
      </button>
      {newDominoActive.map((x, y) => (
        <div
          onClick={onClick}
          className={"domino " + x}
          number={y}
          key={Math.random(0, 1)}
        />
      ))}
    </div>
  );
}

export default Domino;

// React.useEffect(() => {
//   let timeoutID = setTimeout(function () {
//     setColor((oldColor) => (oldColor === "blue" ? "red" : "blue"));
//   }, 1000);
//   return () => clearTimeout(timeoutID);
// }, [color]);
