import React from "react";
import "./ButtonRandom.css";

function ButtonRandom() {
  let [cardsForPlayers, setCardsForPlayers] = React.useState([]);
  let [cardsForTable, setCardsForTable] = React.useState([]);
  let [cardsOnTable, setCardsOnTable] = React.useState([]);
  let [cardsForPlayersShown, setCardsForPlayersShown] = React.useState([]);
  let [inputValue, setInputValue] = React.useState("");
  let [stringText, setStringText] = React.useState("");
  let [cardDeckState, setCardDeckState] = React.useState([]);

  let DeckCreation = () => {
    let cardDeck = ["x"];
    for (let c = 2; c < 15; c++) {
      cardDeck.push(c + "H");
      cardDeck.push(c + "D");
      cardDeck.push(c + "C");
      cardDeck.push(c + "S");
    }
    return cardDeck;
  };

  let playerSpot = 0;
  let playerNumber = 0;
  let playersSpots = () => {
    playerSpot++;
    if (playerSpot % 2 !== 0) {
      playerNumber++;
      return "Player " + playerNumber; //Creating Player Sitting Spots
    }
  };

  let onChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  let cardAdder = () => {
    setStringText("Cards on the table:");
    let newArray = [];
    if (cardsForTable.length === 5) {
      newArray = cardsForTable.splice(0, 3);
      setCardsOnTable(newArray);
    } else {
      if (cardsForTable.length === 0) {
      } else {
        if (cardsForTable.length === 1) {
          setCardsForPlayersShown(cardsForPlayers);
          setCardsForPlayers([]);
        }
        console.log(cardsForTable);
        newArray = cardsForTable.splice(0, 1);
        setCardsOnTable([...cardsOnTable, newArray]);
      }
    }
  };

  let cardRandomizer = () => {
    console.log(cardsForPlayers);
    setCardsForPlayersShown([]);
    setCardsOnTable([]);
    setCardsForTable([]);
    setCardDeckState(DeckCreation()); // Creating Deck of cards

    for (let i = 2; i < 10; i++) {
      if (inputValue === i.toString()) {
        let array = [];
        let array2 = [];
        let array3 = [];
        let myMap = new Map();
        for (let v = 0; v < 100000; v++) {
          if (myMap.size >= i * 2 + 5) {
            for (let p = 0; p < i; p++) {
              array3.push([array[p * 2], array[p * 2 + 1]]);
            }
            setCardsForPlayers(array3);
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

  let playersTimer = 0;
  let cardGiver = (x) => {
    if (playersTimer >= 2) {
      return process.env.PUBLIC_URL + "gray_back.png";
    } else {
      playersTimer++;
      return process.env.PUBLIC_URL + x + ".png";
    }
  };

  let connectCardsNum = 0;
  let connectCards = () => {
    if (connectCardsNum % 2 === 0) {
      connectCardsNum++;
      return;
    }
    connectCardsNum++;
    return "connectingCards";
  };

  let timeUnitNumber = -1;
  let timingFunction = () => {
    timeUnitNumber++;
  };
  return (
    <div>
      <button onClick={cardRandomizer}>Start new game</button>
      2-9 Players <input onChange={onChange} />
      {cardsForPlayers.map((x) => (
        <div className={"twoCards" + (timeUnitNumber + 1)}>
          {timingFunction()}
          {cardsForPlayers[timeUnitNumber].map((y) => (
            <div className="column">
              {playersSpots()}
              <div className={connectCards()}>
                <img
                  src={cardGiver(cardDeckState[y])}
                  width="50"
                  alt={cardDeckState[y]}
                ></img>
              </div>
            </div>
          ))}
        </div>
      ))}
      {cardsForPlayersShown.map((x) => (
        <div className={"twoCards" + (timeUnitNumber + 1)}>
          {timingFunction()}
          {cardsForPlayersShown[timeUnitNumber].map((y) => (
            <div className="column">
              {playersSpots()}
              <div className={connectCards()}>
                <img
                  src={process.env.PUBLIC_URL + cardDeckState[y] + ".png"}
                  width="50"
                  alt={cardDeckState[y]}
                ></img>
              </div>
            </div>
          ))}
        </div>
      ))}
      {stringText}
      <div className="row">
        {cardsOnTable.map((x) => (
          <div>
            <img
              src={process.env.PUBLIC_URL + cardDeckState[x] + ".png"}
              width="50"
              alt={cardDeckState[x]}
            ></img>
          </div>
        ))}
      </div>
      <button onClick={cardAdder}>Add new card to the table</button>
    </div>
  );
}

export default ButtonRandom;
