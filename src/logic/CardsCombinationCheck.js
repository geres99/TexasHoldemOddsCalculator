export class CombinationCheck {
  straightFlushCheck = (cards) => {
    let straightFlushFunction = (v, x, cards) => {
      for (let i = v; i < cards.length; i++) {
        if (
          Number(cards[v][0] - x) === Number(cards[i][0]) &&
          cards[v][1] === cards[i][1]
        ) {
          return cards[i][0];
        }
      }
      return "";
    };
    for (let i = 0; i < cards.length - 4; i++) {
      let myString = "";
      for (let v = 0; v < 5; v++) {
        myString += straightFlushFunction(i, v, cards);
      }
      if (myString.length >= 10) {
        return "poker" + myString;
      }
    }
  };

  colorCheck = (Cards) => {
    for (let i = 0; i < Cards.length - 4; i++) {
      let myString = "";
      let colorPoints = 0;
      for (let v = i; v < Cards.length; v++) {
        if (Cards[i][1] === Cards[v][1]) {
          if (colorPoints <= 4) {
            myString += Cards[v][0];
            colorPoints++;
          }
        }
        if (colorPoints >= 5) {
          return "color" + myString;
        }
      }
    }
  };

  stritCheck = (cards) => {
    let stritFunction = (v, x, cards) => {
      for (let i = v; i < cards.length; i++) {
        if (Number(cards[v][0] - x) === Number(cards[i][0])) {
          return cards[i][0];
        }
      }
      return "";
    };
    for (let i = 0; i < cards.length - 4; i++) {
      let myString = "";
      for (let v = 0; v < 5; v++) {
        myString += stritFunction(i, v, cards);
      }
      if (myString.length >= 10) {
        return "strit" + myString;
      }
    }
  };
}
