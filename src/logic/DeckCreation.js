export class DeckCreation {
  createNewCard = (cardNumber) => {
    let cardDeck = ["x"];
    for (let c = 2; c < 15; c++) {
      cardDeck.push(c + "H");
      cardDeck.push(c + "D");
      cardDeck.push(c + "C");
      cardDeck.push(c + "S");
    }
    return cardDeck[cardNumber];
  };
}
