import React from "react";

function DeckCreation() {
  let cardDeck = ["x"];
  for (let c = 2; c < 15; c++) {
    if (c === 11) {
      cardDeck.push("JH");
      cardDeck.push("JD");
      cardDeck.push("JC");
      cardDeck.push("JS");
    }
    if (c === 12) {
      cardDeck.push("QH");
      cardDeck.push("QD");
      cardDeck.push("QC");
      cardDeck.push("QS");
    }
    if (c === 13) {
      cardDeck.push("KH");
      cardDeck.push("KD");
      cardDeck.push("KC");
      cardDeck.push("KS");
    }
    if (c === 14) {
      cardDeck.push("AH");
      cardDeck.push("AD");
      cardDeck.push("AC");
      cardDeck.push("AS");
    }
    if (c < 11) {
      cardDeck.push(c + "H");
      cardDeck.push(c + "D");
      cardDeck.push(c + "C");
      cardDeck.push(c + "S");
    }
  }
  return cardDeck;
}

export default DeckCreation;
