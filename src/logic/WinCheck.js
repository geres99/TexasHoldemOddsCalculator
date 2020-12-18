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
    Cards = this.SortCards(Cards);
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
  getWinners = (cardsUsed, deck) => {
    let player1 = cardsUsed[0].filter((x) => x !== "gray_back");
    let player2 = cardsUsed[1].filter((x) => x !== "gray_back");
    if (player1.length >= 2 && player2.length >= 2) {
      let table = cardsUsed[2].filter((x) => x !== "gray_back");
      let cardsOnTable = table.concat(player1.concat(player2));
      let deckLeftovers = deck;
      for (let i = 0; i < cardsOnTable.length; i++) {
        deckLeftovers = deckLeftovers.filter((x) => x !== cardsOnTable[i]);
      }
      let wins = 0;
      let draws = 0;
      let loses = 0;
      for (let i = 0; i < 5000; i++) {
        let gameTable = cardsUsed[2].filter((x) => x !== "gray_back");
        let gameDeck = deckLeftovers;
        for (let v = 0; v < 5 - table.length; v++) {
          let randomCard =
            gameDeck[Math.floor(Math.random() * gameDeck.length)];
          gameDeck = gameDeck.filter((x) => x !== randomCard);
          gameTable.push(randomCard);
        }
        let pointsOfPlayer1 = player1.concat(gameTable);
        let pointsOfPlayer2 = player2.concat(gameTable);

        let check = new WinCheck();
        pointsOfPlayer1 = check.PointsCheck(pointsOfPlayer1);
        pointsOfPlayer2 = check.PointsCheck(pointsOfPlayer2);

        if (pointsOfPlayer1 > pointsOfPlayer2) {
          wins++;
        }
        if (pointsOfPlayer1 === pointsOfPlayer2) {
          draws++;
        }
        if (pointsOfPlayer1 < pointsOfPlayer2) {
          loses++;
        }
      }
      let chances = {
        winChance: (wins * 100) / (wins + draws + loses),
        loseChance: (loses * 100) / (wins + draws + loses),
        drawChance: (draws * 100) / (wins + draws + loses),
      };
      return chances;
    }
  };
}
