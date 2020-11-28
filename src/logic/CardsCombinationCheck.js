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
        return Number("9" + myString);
      }
    }
  };

  fourOfAKindCheck = (cards) => {
    let theStrongetCard = (fourOfKindNumber, cards) => {
      for (let p = 0; p < cards.length; p++) {
        if (cards[p][0] !== fourOfKindNumber) {
          return cards[p][0];
        }
      }
    };
    for (let i = 0; i < cards.length - 3; i++) {
      let myString = "";
      for (let v = i; v < cards.length; v++) {
        if (cards[i][0] === cards[v][0]) {
          myString += cards[v][0];
        }
      }
      if (myString.length >= 8) {
        myString += theStrongetCard(cards[i][0], cards);
        return Number("8" + myString);
      }
    }
  };

  fullHouseCheck = (cards) => {
    let pairCheck = (cards, threeOfAKindCard) => {
      for (let i = 0; i < cards.length - 1; i++) {
        let myString = "";
        for (let v = i; v < cards.length; v++) {
          if (cards[i][0] === cards[v][0] && cards[i][0] !== threeOfAKindCard) {
            if (myString.length < 4) {
              myString += cards[v][0];
            }
          }
        }
        if (myString.length >= 4) {
          return myString;
        }
      }
    };
    for (let i = 0; i < cards.length - 2; i++) {
      let myString = "";
      for (let v = i; v < cards.length; v++) {
        if (cards[i][0] === cards[v][0]) {
          myString += cards[v][0];
        }
      }
      if (myString.length >= 6) {
        let pair = pairCheck(cards, cards[i][0]);
        if (pair !== undefined) {
          return Number("7" + myString + pair);
        }
      }
    }
  };

  colorCheck = (cards) => {
    for (let i = 0; i < cards.length - 4; i++) {
      let myString = "";
      for (let v = i; v < cards.length; v++) {
        if (cards[i][1] === cards[v][1]) {
          if (myString.length <= 8) {
            myString += cards[v][0];
          }
        }
        if (myString.length >= 10) {
          return Number("6" + myString);
        }
      }
    }
  };

  straightCheck = (cards) => {
    let straightFunction = (v, x, cards) => {
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
        myString += straightFunction(i, v, cards);
      }
      if (myString.length >= 10) {
        return Number("5" + myString);
      }
    }
  };

  threeOfAKindCheck = (cards) => {
    let theStrongetCard = (cards, fourOfKindNumber, firstStrongestCard) => {
      for (let p = 0; p < cards.length; p++) {
        if (
          cards[p][0] !== fourOfKindNumber &&
          cards[p][0] !== firstStrongestCard
        ) {
          return cards[p][0];
        }
      }
    };
    for (let i = 0; i < cards.length - 2; i++) {
      let myString = "";
      for (let v = i; v < cards.length; v++) {
        if (cards[i][0] === cards[v][0]) {
          myString += cards[v][0];
        }
      }
      if (myString.length >= 6) {
        let strongestCard = theStrongetCard(cards, cards[i][0]);
        let secoundStrongestCard = theStrongetCard(
          cards,
          cards[i][0],
          strongestCard
        );
        myString += strongestCard + secoundStrongestCard;
        return Number("4" + myString);
      }
    }
  };

  twoPairCheck = (cards) => {
    let pairCheck = (cards, pairNumber) => {
      for (let i = 0; i < cards.length - 1; i++) {
        let myString = "";
        for (let v = i; v < cards.length; v++) {
          if (cards[i][0] === cards[v][0] && cards[i][0] !== pairNumber) {
            if (myString.length < 4) {
              myString += cards[v][0];
            }
          }
        }
        if (myString.length >= 4) {
          return myString;
        }
      }
    };

    let theStrongetCard = (cards, firstPairNumber, secoundPairNumber) => {
      for (let p = 0; p < cards.length; p++) {
        if (
          cards[p][0] !== firstPairNumber &&
          cards[p][0] !== secoundPairNumber
        ) {
          return cards[p][0];
        }
      }
    };

    for (let i = 0; i < cards.length - 1; i++) {
      let myString = "";
      for (let v = i; v < cards.length; v++) {
        if (cards[i][0] === cards[v][0]) {
          myString += cards[v][0];
        }
      }
      if (myString.length >= 4) {
        let pair = pairCheck(cards, cards[i][0]);
        if (pair !== undefined) {
          let strongestCard = theStrongetCard(
            cards,
            cards[i][0],
            pair[0] + pair[1]
          );
          return Number("3" + myString + pair + strongestCard);
        }
      }
    }
  };

  pairCheck = (cards) => {
    let theStrongetCard = (
      cards,
      pairNumber,
      firstStrongestCard,
      secoundStrongestCard
    ) => {
      for (let p = 0; p < cards.length; p++) {
        if (
          cards[p][0] !== pairNumber &&
          cards[p][0] !== firstStrongestCard &&
          cards[p][0] !== secoundStrongestCard
        ) {
          return cards[p][0];
        }
      }
    };
    for (let i = 0; i < cards.length - 1; i++) {
      let myString = "";
      for (let v = i; v < cards.length; v++) {
        if (cards[i][0] === cards[v][0]) {
          myString += cards[v][0];
        }
      }
      if (myString.length >= 4) {
        let strongestCard = theStrongetCard(cards, cards[i][0]);
        let secoundStrongestCard = theStrongetCard(
          cards,
          cards[i][0],
          strongestCard
        );
        let thirdStrongestCard = theStrongetCard(
          cards,
          cards[i][0],
          strongestCard,
          secoundStrongestCard
        );
        myString += strongestCard + secoundStrongestCard + thirdStrongestCard;
        return Number("2" + myString);
      }
    }
  };

  strongestCardCheck = (cards) => {
    let myString = "";
    for (let i = 0; i < 5; i++) {
      myString += cards[i][0];
    }
    return Number("1" + myString);
  };
}
