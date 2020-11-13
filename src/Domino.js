import React from "react";
import "./Domino.css";

function Domino(props) {
  let [color, setColor] = React.useState("red");
  // let [isStarted, setIsStarted] = React.useState(false);
  let [newDominoActive, setNewDominoActive] = React.useState([]);
  let [newNumber, setNewNumber] = React.useState(0);

  let onClick = () => {
    // if (isStarted === true) {
    //   return;
    // }
    // setIsStarted(true);
    if (newDominoActive[0] === "red") {
      setTimeout(function () {
        setNewDominoActive(newDominoActive.map((x) => "blue"));
      }, 2000);
    } else {
      setNewDominoActive(newDominoActive.map((x) => "red"));
    }
    console.log(newDominoActive);
    setTimeout(function () {
      setColor((oldColor) => (oldColor === "blue" ? "red" : "blue"));
    }, 1);
  };
  let onButtonClick = () => {
    setNewDominoActive([...newDominoActive, "red"]);
    setNewNumber(newNumber + 1);
  };

  return (
    <div>
      <div onClick={onClick} className={"domino " + color}></div>
      <button onClick={onButtonClick} className="button">
        +
      </button>
      {newDominoActive.map((x) => (
        <div className={"domino " + x} key={Math.random(0, 1)} number={x} />
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
