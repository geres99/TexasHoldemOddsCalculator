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
    if (otherPlayersHand.length !== 0) {
      let points = [];
      let check = new WinCheck();
      let cardsSorted = check.SortCards(playerHand[0], array);
      points.push(check.PointsCheck(cardsSorted));
      for (let i = 0; i < otherPlayersHand.length; i++) {
        let otherPlayersCardsSorted = check.SortCards(
          otherPlayersHand[i],
          array
        );
        points.push(check.PointsCheck(otherPlayersCardsSorted));
      }
      let strongestHand = 0;
      let winner = undefined;
      let draw = [];
      for (let i = 0; i < points.length; i++) {
        if (points[i] > strongestHand) {
          strongestHand = points[i];
          winner = i;
        }
      }
      draw.push(winner);
      for (let i = 0; i < points.length; i++) {
        if (points[winner] === points[i] && winner !== i) {
          draw.push(i);
        }
      }
      if (draw.length >= 2) {
        console.log("Its a draw between Players: " + draw);
      } else {
        console.log("Player " + (winner + 1) + " is a winner!");
        console.log(points);
      }
    }

    // let check = new WinCheck();
    // console.log(
    //   check.PointsCheck([
    //     ["11", "D"],
    //     ["09", "S"],
    //     ["08", "D"],
    //     ["08", "C"],
    //     ["08", "H"],
    //     ["06", "H"],
    //     ["03", "C"],
    //   ])
    // );
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
