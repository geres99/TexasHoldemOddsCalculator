import React from "react";
import "./Game.css";
import { DeckShuffle } from "./logic/DeckShuffle";
import Player from "./Player";
import Card from "./Card";
import { WinCheck } from "./logic/WinCheck";
import { Winners } from "./logic/Winners";

function Game() {
  let [inputValue, setInputValue] = React.useState("");
  let [blind, setBlind] = React.useState(10);
  let [minBetting, setMinBetting] = React.useState(0);
  let [sliderValue, setSliderValue] = React.useState(50);
  let [playerHand, setPlayerHand] = React.useState([]);
  let [otherPlayersHandHidden, setOtherPlayersHandHidden] = React.useState([]);
  let [otherPlayersHand, setOtherPlayersHand] = React.useState([]);
  let [cardsOnTableHidden, setCardsOnTableHidden] = React.useState([]);
  let [cardsOnTable, setCardsOnTable] = React.useState([]);
  let [tokensOfPlayers, setTokensOfPlayers] = React.useState([]);
  let [tokensOnBoard, setTokensOnBoard] = React.useState();
  let [tokensSpend, setTokensSpend] = React.useState([]);

  let onChange = (e) => {
    setInputValue(e.target.value);
  };

  let onChangeSlider = (e) => {
    setSliderValue(e.target.value);
  };

  let minBet = () => {
    if (tokensOfPlayers[0] >= blind) {
      return blind;
    }
    return tokensOfPlayers[0];
  };

  let maxBet = () => {
    console.log(tokensOfPlayers[0]);
    return tokensOfPlayers[0];
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
      let array2 = [];
      for (let i = 0; i < NumberOfPlayers; i++) {
        array.push(300);
        array2.push(0);
      }
      let pot = 0;
      for (let i = 0; i < array.length; i++) {
        array[i] = array[i] - 100;
        pot += 100;
      }
      setTokensOfPlayers(array);
      setTokensSpend(array2);
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
          console.log(i);
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
            cardsForGame[1][i - 1] = "Deleted";
            cardsForGame[1] = cardsForGame[1].filter((x) => x !== "Deleted");
            console.log(cardsForGame[1], array);
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
        <div>
          <input
            type="range"
            min={minBet()}
            max={maxBet()}
            onChange={onChangeSlider}
          />
          {sliderValue}
          <Player spot={x[0]} cards={x[1]} tokens={tokensOfPlayers[x[0] - 1]} />
        </div>
      ))}
      {otherPlayersHand.map((x) => (
        <Player spot={x[0]} cards={x[1]} tokens={tokensOfPlayers[x[0] - 1]} />
      ))}
      {otherPlayersHandHidden.map((x) => (
        <Player
          spot={x[0]}
          cards={["gray_back", "gray_back"]}
          tokens={tokensOfPlayers[x[0] - 1]}
        />
      ))}
      <div>
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
