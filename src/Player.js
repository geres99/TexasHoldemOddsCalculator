import React from "react";
import Card from "./Card";
import Tokens from "./Tokens";

function Player(props) {
  return (
    <div className={"Player" + props.spot}>
      {"Player " + props.spot}
      <Card card={props.cards[0]} />
      <Card card={props.cards[1]} />
      <Tokens tokens={props.tokens} />
    </div>
  );
}

export default Player;
