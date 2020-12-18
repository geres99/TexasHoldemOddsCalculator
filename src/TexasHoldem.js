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
  let [handStrenght, setHandStrength] = React.useState([0, 0]);

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
    let player1 = points(cardsUsed[0], cardsUsed[2]);
    let player2 = points(cardsUsed[1], cardsUsed[2]);
    if (player1.length >= 5 && player2.length >= 5) {
      let check = new WinCheck();
      player1 = check.SortCards(player1);
      player2 = check.SortCards(player2);
      handStrenght[0] = check.PointsCheck(player1);
      handStrenght[1] = check.PointsCheck(player2);
      console.log(handStrenght);
      setHandStrength(handStrenght);
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

  let points = (Hand, Table) => {
    let cardsLength = Hand.concat(Table);
    cardsLength = cardsLength.filter((x) => x !== "gray_back");
    return cardsLength;
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
        <div className="row player0">
          {cardsUsed[0].map((x) => (
            <div deletingTarget={x} onClick={addCard}>
              <Card card={x} myNumber={0} />{" "}
            </div>
          ))}
        </div>
        <div className="row">
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
