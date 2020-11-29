export class Winners {
  getWinners = (points) => {
    let strongestHand = 0;
    let winner = undefined;
    let draw = [];
    for (let i = 0; i < points.length; i++) {
      if (points[i] > strongestHand) {
        strongestHand = points[i];
        winner = i;
      }
    }
    draw.push(winner);
    for (let i = 0; i < points.length; i++) {
      if (points[winner] === points[i] && winner !== i) {
        draw.push(i);
      }
    }
    if (draw.length >= 2) {
      return draw;
    }
    return [winner];
  };
}
