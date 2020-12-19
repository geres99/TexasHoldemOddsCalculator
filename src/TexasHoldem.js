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
  let [chance, setChance] = React.useState({
    winChance: 0,
    loseChance: 0,
    drawChance: 0,
  });

  let cards = new DeckCreation();
  let deck = cards.createNewCard();
  let freeCardsList = cards.createNewDeck();

  let [freeCards, setFreeCards] = React.useState(freeCardsList);
  let [borders, setBorders] = React.useState([
    { border: "noBorder" },
    { border: "noBorder" },
    { border: "noBorder" },
  ]);

  console.log(freeCards);

  let deleteCard = (e) => {
    if (spot !== "") {
      let thisLenght = cardsUsed[spot].length;
      if (cardsUsed[spot][thisLenght - 1] === "gray_back") {
        let myTarget = e.target.attributes[1].nodeValue;
        freeCards.map((x) => {
          if (x.card === myTarget) {
            x.show = "dontShow";
          }
        });
        cardsUsed[spot].splice(thisLenght - 1, thisLenght);
        cardsUsed[spot].push(myTarget);
        cardsUsed[spot] = cardsUsed[spot].sort();
        setCardsUsed(cardsUsed);
        setRerender(Math.random());
      }
    }
    let player1 = cardsUsed[0].filter((x) => x !== "gray_back");
    let player2 = cardsUsed[1].filter((x) => x !== "gray_back");
    if (player1.length >= 2 && player2.length >= 2) {
      let ratios = new WinCheck();
      let chances = ratios.getWinners(cardsUsed, deck);
      chance.winChance = chances.winChance;
      chance.loseChance = chances.loseChance;
      chance.drawChance = chances.drawChance;
      setChance(chance);
      setRerender(Math.random());
    } else {
      chance.winChance = 0;
      chance.loseChance = 0;
      chance.drawChance = 0;
    }
  };

  let addCard = (e) => {
    let myTarget = e.target.attributes[1].nodeValue;
    let TargetNumber = Number(e.target.attributes[2].nodeValue);
    if (myTarget !== "gray_back" && TargetNumber === spot) {
      freeCards.map((x) => {
        if (x.card === myTarget) {
          x.show = "show";
        }
      });
      cardsUsed[TargetNumber] = cardsUsed[TargetNumber].filter(
        (x) => x !== myTarget
      );
      cardsUsed[TargetNumber].push("gray_back");
      setCardsUsed(cardsUsed);
      setRerender(Math.random());

      let player1 = cardsUsed[0].filter((x) => x !== "gray_back");
      let player2 = cardsUsed[1].filter((x) => x !== "gray_back");
      if (player1.length >= 2 && player2.length >= 2) {
        let ratios = new WinCheck();
        let chances = ratios.getWinners(cardsUsed, deck);
        chance.winChance = chances.winChance;
        chance.loseChance = chances.loseChance;
        chance.drawChance = chances.drawChance;
        setChance(chance);
        setRerender(Math.random());
      } else {
        chance.winChance = 0;
        chance.loseChance = 0;
        chance.drawChance = 0;
      }
    }
    resetStyles();
    borders[TargetNumber].border = "border";
    setSpot(TargetNumber);
  };

  let resetStyles = () => {
    borders.map((x) => (x.border = "noBorder"));
  };

  return (
    <div>
      <div className="row">
        {freeCards.map((x) => (
          <div className={x.show} deletingTarget={x.card} onClick={deleteCard}>
            <Card card={x.card} />{" "}
          </div>
        ))}
      </div>
      <div className="row spaceequal">
        <div className="centre">
          <div className="column">
            <div>Win Chance = ~{chance.winChance}%</div>
            <div>Draw Chance = ~{chance.drawChance}%</div>
            <div className="row centre">
              <div className={"row player0 " + borders[0].border}>
                {cardsUsed[0].map((x) => (
                  <div deletingTarget={x} onClick={addCard}>
                    <Card card={x} myNumber={0} />{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div>Win Chance = ~{chance.loseChance}%</div>
          <div>Draw Chance = ~{chance.drawChance}%</div>
          <div className="row centre">
            <div className={"row player1 " + borders[1].border}>
              {cardsUsed[1].map((x) => (
                <div deletingTarget={x} onClick={addCard}>
                  <Card card={x} myNumber={1} />{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row  spaceequal">
        <div className={"row player2 " + borders[2].border}>
          {cardsUsed[2].map((x) => (
            <div deletingTarget={x} onClick={addCard}>
              <Card card={x} myNumber={2} />{" "}
            </div>
          ))}
        </div>
      </div>
      <div className="centre">
        <img
          className="centre"
          src={process.env.PUBLIC_URL + "/Images/logo.png"}
          alt="logo"
          width="250px"
        />
      </div>
    </div>
  );
}

export default TexasHoldem;
