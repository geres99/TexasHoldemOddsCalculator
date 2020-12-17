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
}
