import React from "react";
import "./TexasHoldem.css";
import { DeckCreation } from "./logic/DeckCreation";
import { WinCheck } from "./logic/WinCheck";
import Card from "./Card";

function TexasHoldem() {
  let [cardsUsed, setCardsUsed] = React.useState([
    ["gray_back", "gray_back"],
    ["gray_back", "gray_back"],
    ["gray_back", "gray_back", "gray_back", "gray_back", "gray_back"],
  ]);
  let [rerender, setRerender] = React.useState();
  let [spot, setSpot] = React.useState("");
  let [chance, setChance] = React.useState([
    [0, 0],
    [0, 0],
  ]);

  let cards = new DeckCreation();
  let deck = cards.createNewCard();

  let deleteCard = (e) => {
    if (spot !== "") {
      let thisLenght = cardsUsed[spot].length;
      if (cardsUsed[spot][thisLenght - 1] === "gray_back") {
        let myTarget = e.target.attributes[1].nodeValue;
        let x = document.getElementsByClassName(myTarget);
        x[0].style.display = "none";
        cardsUsed[spot].splice(thisLenght - 1, thisLenght);
        cardsUsed[spot].push(myTarget);
        cardsUsed[spot] = cardsUsed[spot].sort();
        setCardsUsed(cardsUsed);
        setRerender(Math.random());
      }
    }
    // let player1 = points(cardsUsed[0], cardsUsed[2]);
    let player1 = cardsUsed[0].filter((x) => x !== "gray_back");
    let player2 = cardsUsed[1].filter((x) => x !== "gray_back");
    if (player1.length >= 2 && player2.length >= 2) {
      let table = cardsUsed[2].filter((x) => x !== "gray_back");
      let cardsOnTable = table.concat(player1.concat(player2));
      let deckLeftovers = deck;
      for (let i = 0; i < cardsOnTable.length; i++) {
        deckLeftovers = deckLeftovers.filter((x) => x !== cardsOnTable[i]);
      }
      let wins = 0;
      let draws = 0;
      let loses = 0;
      for (let i = 0; i < 5000; i++) {
        let gameTable = cardsUsed[2].filter((x) => x !== "gray_back");
        let gameDeck = deckLeftovers;
        for (let v = 0; v < 5 - table.length; v++) {
          let randomCard =
            gameDeck[Math.floor(Math.random() * gameDeck.length)];
          gameDeck = gameDeck.filter((x) => x !== randomCard);
          gameTable.push(randomCard);
        }
        let pointsOfPlayer1 = player1.concat(gameTable);
        let pointsOfPlayer2 = player2.concat(gameTable);

        let check = new WinCheck();
        pointsOfPlayer1 = check.PointsCheck(pointsOfPlayer1);
        pointsOfPlayer2 = check.PointsCheck(pointsOfPlayer2);

        if (pointsOfPlayer1 > pointsOfPlayer2) {
          wins++;
        }
        if (pointsOfPlayer1 === pointsOfPlayer2) {
          draws++;
        }
        if (pointsOfPlayer1 < pointsOfPlayer2) {
          loses++;
        }
      }
      chance[0][0] = ((wins / (wins + draws + loses)) * 100)
        .toString()
        .slice(0, 6);
      chance[0][1] = ((loses / (wins + draws + loses)) * 100)
        .toString()
        .slice(0, 6);
      chance[1][0] = ((draws / (wins + draws + loses)) * 100)
        .toString()
        .slice(0, 6);
      chance[1][1] = ((draws / (wins + draws + loses)) * 100)
        .toString()
        .slice(0, 6);
      setChance(chance);
      setRerender(Math.random());
    }
  };
  let addCard = (e) => {
    let myTarget = e.target.attributes[1].nodeValue;
    let TargetNumber = Number(e.target.attributes[2].nodeValue);
    if (myTarget !== "gray_back" && TargetNumber === spot) {
      let x = document.getElementsByClassName(myTarget);
      x[0].style.display = "block";
      cardsUsed[TargetNumber] = cardsUsed[TargetNumber].filter(
        (x) => x !== myTarget
      );
      cardsUsed[TargetNumber].push("gray_back");
      setCardsUsed(cardsUsed);
      setRerender(Math.random());
    }
    setSpot(TargetNumber);
    resetStyles();
    let x = document.getElementsByClassName("player" + TargetNumber);
    x[0].style.border = "1px solid blue";
  };

  let resetStyles = () => {
    let x = document.getElementsByClassName("player0");
    let y = document.getElementsByClassName("player1");
    let z = document.getElementsByClassName("player2");
    x[0].style.border = "none";
    y[0].style.border = "none";
    z[0].style.border = "none";
  };

  return (
    <div>
      <div className="row">
        {deck.map((x) => (
          <div className={x} deletingTarget={x} onClick={deleteCard}>
            <Card card={x} />{" "}
          </div>
        ))}
      </div>
      <div className="row">
        Win Chance = ~{chance[0][0]}% Draw Chance = ~{chance[1][0]}%
        <div className="row player0">
          {cardsUsed[0].map((x) => (
            <div deletingTarget={x} onClick={addCard}>
              <Card card={x} myNumber={0} />{" "}
            </div>
          ))}
        </div>
        <div className="row">
          Win Chance = ~{chance[0][1]}% Draw Chance = ~{chance[1][1]}%
          <div className="row player1">
            {cardsUsed[1].map((x) => (
              <div deletingTarget={x} onClick={addCard}>
                <Card card={x} myNumber={1} />{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="row player2">
          {cardsUsed[2].map((x) => (
            <div deletingTarget={x} onClick={addCard}>
              <Card card={x} myNumber={2} />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TexasHoldem;
