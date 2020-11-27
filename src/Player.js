import React from "react";
import Card from "./Card";

function Player(props) {
  return (
    <div className={"Player" + props.spot}>
      {"Player" + props.spot}
      <Card card={props.cards[0]} />
      <Card card={props.cards[1]} />
    </div>
  );
}

export default Player;
