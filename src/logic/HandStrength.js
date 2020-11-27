export class HandStrength {
  Calculate = (Hand) => {
    let number = 0;
    let cardsNumbers = [];
    for (let i = 0; i < 2; i++) {
      if (Hand[1][i].length >= 3) {
        number = number + Number(Hand[1][i][0] + Hand[1][i][1]);
        cardsNumbers.push(Number(Hand[1][i][0] + Hand[1][i][1]));
      } else {
        number = number + Number(Hand[1][i][0]);
        cardsNumbers.push(Number(Hand[1][i][0]));
      }
    }
    if (Hand[1][0].length >= 3) {
      if (Hand[1][0][2] === Hand[1][1][2] || Hand[1][0][2] === Hand[1][1][1]) {
        number = number * 4;
      }
    } else {
      if (Hand[1][0][1] === Hand[1][1][1] || Hand[1][0][1] === Hand[1][1][2]) {
        number = number * 4;
      }
    }
    if (cardsNumbers[0] === cardsNumbers[1]) {
      number = number * 8;
    }
    if (
      cardsNumbers[0] === cardsNumbers[1] - 1 ||
      cardsNumbers[0] === cardsNumbers[1] + 1
    ) {
      number = number * 2;
    }
    console.log(number, cardsNumbers);
  };
}
