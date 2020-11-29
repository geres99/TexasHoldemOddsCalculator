import React from "react";
import "./Game.css";
import { DeckShuffle } from "./logic/DeckShuffle";
import Player from "./Player";
import Card from "./Card";
import { WinCheck } from "./logic/WinCheck";
import { Winners } from "./logic/Winners";

function Game() {
  let [inputValue, setInputValue] = React.useState("");
  let [playerHand, setPlayerHand] = React.useState([]);
  let [otherPlayersHandHidden, setOtherPlayersHandHidden] = React.useState([]);
  let [otherPlayersHand, setOtherPlayersHand] = React.useState([]);
  let [cardsOnTableHidden, setCardsOnTableHidden] = React.useState([]);
  let [cardsOnTable, setCardsOnTable] = React.useState([]);
  let [tokensOfPlayers, setTokensOfPlayers] = React.useState([]);
  let [tokensOnBoard, setTokensOnBoard] = React.useState();

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
      let array = [];
      for (let i = 0; i < NumberOfPlayers; i++) {
        array.push(100);
      }
      let pot = 0;
      for (let i = 0; i < array.length; i++) {
        array[i] = array[i] - 100;
        pot += 100;
      }
      setTokensOfPlayers(array);
      setTokensOnBoard(pot);
    }
  };

  let nextRound = () => {
    if (tokensOnBoard === 0) {
      let NumberOfPlayers = otherPlayersHand.length + 1;
      if (NumberOfPlayers >= 2 && NumberOfPlayers <= 9) {
        let newGameCards = new DeckShuffle();
        let cardsForGame = newGameCards.DeckShuffle(NumberOfPlayers);
        setCardsOnTableHidden(cardsForGame[0]);
        setPlayerHand([cardsForGame[2]]);
        setCardsOnTable([]);
        setOtherPlayersHand([]);
        let array = tokensOfPlayers;
        let pot = 0;
        for (let i = 0; i < array.length; i++) {
          if (array[i] === 0) {
            if (i === 0) {
              setInputValue("");
              setPlayerHand([]);
              setOtherPlayersHandHidden([]);
              setOtherPlayersHand([]);
              setCardsOnTableHidden([]);
              setCardsOnTable([]);
              setTokensOfPlayers([]);
              setTokensOnBoard();
              alert("GAME OVER");
              return;
            }
            array[i] = "Deleted";
            array = array.filter((x) => x !== "Deleted");
            console.log(array, cardsForGame[1]);
            cardsForGame[1] = [];
            // cardsForGame = cardsForGame.filter((x) => x[1] !== "Deleted");
          } else {
            array[i] = array[i] - 100;
            pot += 100;
          }
        }
        if (array.length === 1) {
          setInputValue("");
          setPlayerHand([]);
          setOtherPlayersHandHidden([]);
          setOtherPlayersHand([]);
          setCardsOnTableHidden([]);
          setCardsOnTable([]);
          setTokensOfPlayers([]);
          setTokensOnBoard();
          alert("You won!");
          return;
        }
        setOtherPlayersHandHidden(cardsForGame[1]);
        setTokensOfPlayers(array);
        setTokensOnBoard(pot);
      }
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
      let winners = new Winners();
      let potSplit = winners.getWinners(points);
      let tokensForWinners = tokensOfPlayers;
      for (let i = 0; i < potSplit.length; i++) {
        console.log(tokensOnBoard);
        tokensForWinners[potSplit[i]] =
          tokensForWinners[potSplit[i]] + tokensOnBoard / potSplit.length;
      }
      setTokensOfPlayers(tokensForWinners);
      setTokensOnBoard(0);
    }
  };
  return (
    <div>
      <input onChange={onChange} value={inputValue} />
      <button onClick={startGame}>Start New Game</button>
      <button onClick={showCards}>Show Cards</button>
      <button onClick={nextRound}>Next Round</button>
      {tokensOnBoard}
      {playerHand.map((x) => (
        <Player spot={x[0]} cards={x[1]} tokens={tokensOfPlayers[x[0] - 1]} />
      ))}
      {otherPlayersHand.map((x) => (
        <Player spot={x[0]} cards={x[1]} tokens={tokensOfPlayers[x[0] - 1]} />
      ))}
      <div>
        {otherPlayersHandHidden.map((x) => (
          <Player
            spot={x[0]}
            cards={["gray_back", "gray_back"]}
            tokens={tokensOfPlayers[x[0] - 1]}
          />
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
