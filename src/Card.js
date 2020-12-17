import React from "react";

function Card(props) {
  return (
    <img
      src={process.env.PUBLIC_URL + "./Images/" + props.card + ".png"}
      alt={props.card}
      number={props.myNumber}
      width="50"
    />
  );
}

export default Card;
