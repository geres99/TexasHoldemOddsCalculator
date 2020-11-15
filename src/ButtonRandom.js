import React from "react";
import "./ButtonRandom.css";

function ButtonRandom() {
  let [cardsForPlayers, setCardsForPlayers] = React.useState([]);
  let [cardsForTable, setCardsForTable] = React.useState([]);
  let [cardsOnTable, setCardsOnTable] = React.useState([]);
  let [inputValue, setInputValue] = React.useState("");
  let [cardDeckState, setCardDeckState] = React.useState([]);

  let playerSpot = 0;
  let playerNumber = 0;
  let playersSpots = () => {
    playerSpot++;
    if (playerSpot % 2 !== 0) {
      playerNumber++;
      return "Player " + playerNumber; //Creating Player Sitting Spots
    }
  };

  let PutStringOnlyOnce = false;
  let StringOnce = () => {
    if (cardsForPlayers.length === 0) {
      return;
    }
    if (PutStringOnlyOnce === false) {
      PutStringOnlyOnce = true;
      return "Cards on the table:";
    }
  };

  let onChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  let cardAdder = () => {
    let newArray = [];
    if (cardsForTable.length === 5) {
      newArray = cardsForTable.splice(0, 3);
      setCardsOnTable(newArray);
    } else {
      newArray = cardsForTable.splice(0, 1);
      setCardsOnTable([...cardsOnTable, newArray]);
    }
  };

  let cardRandomizer = () => {
    setCardsOnTable([]);
    setCardsForTable([]);
    let cardDeck = ["x"];
    for (let c = 2; c < 15; c++) {
      if (c === 11) {
        cardDeck.push("J h");
        cardDeck.push("J d");
        cardDeck.push("J c");
        cardDeck.push("J s");
      }
      if (c === 12) {
        cardDeck.push("Q h");
        cardDeck.push("Q d");
        cardDeck.push("Q c");
        cardDeck.push("Q s");
      }
      if (c === 13) {
        cardDeck.push("K h");
        cardDeck.push("K d");
        cardDeck.push("K c");
        cardDeck.push("K s");
      }
      if (c === 14) {
        cardDeck.push("A h");
        cardDeck.push("A d");
        cardDeck.push("A c");
        cardDeck.push("A s");
      }
      if (c < 11) {
        cardDeck.push(c + " h");
        cardDeck.push(c + " d");
        cardDeck.push(c + " c");
        cardDeck.push(c + " s");
      }
    }
    setCardDeckState(cardDeck); // Creating Deck of cards

    for (let i = 2; i < 10; i++) {
      if (inputValue === i.toString()) {
        let array = [];
        let array2 = [];
        let myMap = new Map();
        for (let v = 0; v < 100000; v++) {
          if (myMap.size >= i * 2 + 5) {
            setCardsForPlayers(array);
            setCardsForTable(array2);
            return;
          }
          let randomNum = Math.ceil(Math.random() * 52);
          if (myMap.has(randomNum)) {
          } else {
            if (myMap.size < i * 2) {
              array.push(randomNum);
            } else {
              array2.push(randomNum);
            }
            myMap.set(randomNum);
          }
          if (v > 90000) {
            throw new Error("loop goes for too long"); //Choosing Play Cards
          }
        }
      }
    }
  };
  return (
    <div>
      <button onClick={cardRandomizer}>Start new game</button>
      2-9 Players <input onChange={onChange} />
      {cardsForPlayers.map((x) => (
        <div>
          {playersSpots()}
          <div className={cardDeckState[x]}>{cardDeckState[x]}</div>
        </div>
      ))}
      {cardsOnTable.map((x) => (
        <div>
          {StringOnce()}
          <div className={cardDeckState[x]}>{cardDeckState[x]}</div>
        </div>
      ))}
      <button onClick={cardAdder}>Add new card to the table</button>
    </div>
  );
}

export default ButtonRandom;
