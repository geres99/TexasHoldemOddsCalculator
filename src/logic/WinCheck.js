import { CombinationCheck } from "./CardsCombinationCheck";

export class WinCheck {
  SortCards = (Cards) => {
    let cardNumber = [];
    let cardColor = [];
    for (let i = Cards.length - 1; i >= 0; i = i - 1) {
      cardNumber.push(Cards[i][0] + Cards[i][1]);
      cardColor.push(Cards[i][2]);
    }
    let cardsSorted = [];
    for (let i = 0; i < cardNumber.length; i++) {
      cardsSorted.push([cardNumber[i], cardColor[i]]);
    }
    return cardsSorted;
  };

  PointsCheck = (Cards) => {
    let game = new CombinationCheck();
    if (game.straightFlushCheck(Cards) !== undefined) {
      return game.straightFlushCheck(Cards);
    }
    if (game.fourOfAKindCheck(Cards) !== undefined) {
      return game.fourOfAKindCheck(Cards);
    }
    if (game.fullHouseCheck(Cards) !== undefined) {
      return game.fullHouseCheck(Cards);
    }
    if (game.colorCheck(Cards) !== undefined) {
      return game.colorCheck(Cards);
    }
    if (game.straightCheck(Cards) !== undefined) {
      return game.straightCheck(Cards);
    }
    if (game.threeOfAKindCheck(Cards) !== undefined) {
      return game.threeOfAKindCheck(Cards);
    }
    if (game.twoPairCheck(Cards) !== undefined) {
      return game.twoPairCheck(Cards);
    }
    if (game.pairCheck(Cards) !== undefined) {
      return game.pairCheck(Cards);
    }
    if (game.strongestCardCheck(Cards) !== undefined) {
      return game.strongestCardCheck(Cards);
    }
  };
}
