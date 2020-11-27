export class WinCheck {
  CheckWin = (Hand, Table) => {
    let ColorCheck = (x, y) => {
      let colorPoints = y;
      for (let i = 0; i < Table.length; i++) {
        console.log(Table);
        if (Hand[1][0][x] === Table[i][1] || Hand[1][0][x] === Table[i][2]) {
          colorPoints++;
        }
      }
      if (colorPoints >= 5) {
        return "Color";
      }
    };

    if (Hand[1][0].length >= 3) {
      let x = 2;
      if (Hand[1][0][x] === Hand[1][1][1] || Hand[1][0][x] === Hand[1][1][2]) {
        ColorCheck(x, 1);
      } else {
        ColorCheck(x, 0);
      }
    } else {
      let x = 1;
      if (Hand[1][0][x] === Hand[1][1][1] || Hand[1][0][x] === Hand[1][1][2]) {
        ColorCheck(x, 1);
      } else {
        ColorCheck(x, 0);
      }
    }
    return "NoColor";
  };
}
