import React from "react";
import "./Game.css";
import { DeckShuffle } from "./logic/DeckShuffle";
import Player from "./Player";
import Card from "./Card";
import { WinCheck } from "./logic/WinCheck";

function Game() {
  let [inputValue, setInputValue] = React.useState("");
  let [playerHand, setPlayerHand] = React.useState([]);
  let [otherPlayersHandHidden, setOtherPlayersHandHidden] = React.useState([]);
  let [otherPlayersHand, setOtherPlayersHand] = React.useState([]);
  let [cardsOnTableHidden, setCardsOnTableHidden] = React.useState([]);
  let [cardsOnTable, setCardsOnTable] = React.useState([]);

  let onChange = (e) => {
    setInputValue(e.target.value);
  };

  let startGame = () => {
    let NumberOfPlayers = Math.ceil(Number(inputValue));
    if (NumberOfPlayers >= 2 && NumberOfPlayers <= 9) {
      let newGameCards = new DeckShuffle();
      let cardsForGame = newGameCards.DeckShuffle(NumberOfPlayers);
      setCardsOnTableHidden(cardsForGame[0]);
      setOtherPlayersHandHidden(cardsForGame[1]);
      setPlayerHand([cardsForGame[2]]);
      setCardsOnTable([]);
      setOtherPlayersHand([]);
    }
  };

  let showCards = () => {
    let array = [];
    if (cardsOnTableHidden.length >= 5) {
      array = cardsOnTableHidden.slice(0, 3);
      setCardsOnTable(cardsOnTableHidden.splice(0, 3));
    } else {
      array = cardsOnTable.concat(cardsOnTableHidden.slice(0, 1));
      setCardsOnTable(cardsOnTable.concat(cardsOnTableHidden.splice(0, 1)));
      if (cardsOnTableHidden.length === 0 && otherPlayersHand.length === 0) {
        setOtherPlayersHand(
          otherPlayersHandHidden.splice(0, otherPlayersHandHidden.length)
        );
      }
    }
    let check = new WinCheck();
    if (otherPlayersHandHidden.length !== 0) {
      for (let i = 0; i < otherPlayersHandHidden.length; i++) {
        console.log(check.CheckWin(otherPlayersHandHidden[i], array));
      }
    } else {
      for (let i = 0; i < otherPlayersHand.length; i++) {
        console.log(check.CheckWin(otherPlayersHand[i], array));
      }
    }
  };
  return (
    <div>
      <input onChange={onChange} />
      <button onClick={startGame}>Start New Game</button>
      <button onClick={showCards}>Show Cards</button>
      {playerHand.map((x) => (
        <Player spot={x[0]} cards={x[1]} />
      ))}
      {otherPlayersHand.map((x) => (
        <Player spot={x[0]} cards={x[1]} />
      ))}
      <div>
        {otherPlayersHandHidden.map((x) => (
          <Player spot={x[0]} cards={["gray_back", "gray_back"]} />
        ))}
        {cardsOnTable.map((x) => (
          <Card card={x} />
        ))}
        {cardsOnTableHidden.map((x) => (
          <Card card={"gray_back"} />
        ))}
      </div>
    </div>
  );
}

export default Game;
