import { CombinationCheck } from "./CardsCombinationCheck";

export class WinCheck {
  SortCards = (Hand, Table) => {
    let array = [];
    let array2 = [];
    let array3 = [];
    for (let i = 0; i < Table.length; i++) {
      array.push(Table[i][0]);
    }
    Hand = Hand[1].concat(array);
    Hand = Hand.sort();
    for (let i = Hand.length - 1; i >= 0; i = i - 1) {
      array3.push(Hand[i]);
    }
    Hand = array3;
    for (let i = 0; i < Hand.length; i++) {
      let cardNumber = Hand[i][0] + Hand[i][1];
      let color = Hand[i][2];
      array2.push([cardNumber, color]);
    }
    return array2;
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
