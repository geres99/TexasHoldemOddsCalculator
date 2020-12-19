export class DeckCreation {
  createNewCard = () => {
    let cardDeck = [];
    for (let c = 2; c < 15; c++) {
      if (c < 10) {
        cardDeck.push("0" + c + "H");
        cardDeck.push("0" + c + "D");
        cardDeck.push("0" + c + "C");
        cardDeck.push("0" + c + "S");
      } else {
        cardDeck.push(c + "H");
        cardDeck.push(c + "D");
        cardDeck.push(c + "C");
        cardDeck.push(c + "S");
      }
    }
    return cardDeck;
  };
  createNewDeck = () => {
    let cardDeck = [];
    for (let c = 2; c < 15; c++) {
      if (c < 10) {
        cardDeck.push({ card: "0" + c + "H", show: "show" });
        cardDeck.push({ card: "0" + c + "D", show: "show" });
        cardDeck.push({ card: "0" + c + "C", show: "show" });
        cardDeck.push({ card: "0" + c + "S", show: "show" });
      } else {
        cardDeck.push({ card: c + "H", show: "show" });
        cardDeck.push({ card: c + "D", show: "show" });
        cardDeck.push({ card: c + "C", show: "show" });
        cardDeck.push({ card: c + "S", show: "show" });
      }
    }
    return cardDeck;
  };
}
