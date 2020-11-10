import React from "react";
import "./Domino.css";

function Domino(props) {
  let [color, setColor] = React.useState("red");
  let [isStarted, setIsStarted] = React.useState(false);

  let onClick = () => {
    if (isStarted === true) {
      return;
    }
    setIsStarted(true);

    setTimeout(function () {
      setColor((oldColor) => (oldColor === "blue" ? "red" : "blue"));
    }, 1500);
  };

  React.useEffect(() => {
    let timeoutID = setTimeout(function () {
      setColor((oldColor) => (oldColor === "blue" ? "red" : "blue"));
    }, 1000);
    return () => clearTimeout(timeoutID);
  }, [color]);

  return <div onClick={onClick} className={"domino " + color}></div>;
}

export default Domino;
