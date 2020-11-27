import { DeckCreation } from "./DeckCreation";

export class DeckShuffle {
  DeckShuffle = (playersNumber) => {
    let newCard = new DeckCreation();
    let cardsForGame = [];
    let cardsOnTable = [];
    let cardsForOtherPlayers = [];
    let cardsForPlayer = [];
    let myMap = new Map();
    for (let i = 0; i < 100000; i++) {
      if (myMap.size >= playersNumber * 2 + 5) {
        cardsForPlayer.push(1, cardsForGame.splice(0, 2));
        for (let v = 2; cardsForGame.length !== 0; v++) {
          cardsForOtherPlayers.push([v, cardsForGame.splice(0, 2)]);
        }
        return [cardsOnTable, cardsForOtherPlayers, cardsForPlayer];
      }
      let randomNumber = Math.ceil(Math.random() * 52);
      if (!myMap.has(randomNumber)) {
        if (myMap.size < playersNumber * 2) {
          cardsForGame.push(newCard.createNewCard(randomNumber));
        } else {
          cardsOnTable.push([newCard.createNewCard(randomNumber)]);
        }
      }
      myMap.set(randomNumber);
      if (i >= 90000) {
        throw new Error("Loop takes too long");
      }
    }
  };
}
