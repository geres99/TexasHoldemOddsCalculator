export function BetingSystemPlayer(
  pot,
  tokensOfPlayer,
  tokensSpend,
  minBet,
  blind,
  inputValue
) {
  inputValue = Number(inputValue);
  if (minBet === 0) {
    minBet = blind;
  }
  if (minBet > tokensOfPlayer) {
    pot = pot + tokensOfPlayer;
    tokensOfPlayer = 0;
    tokensSpend = tokensSpend + tokensOfPlayer;
    return [pot, tokensOfPlayer, tokensSpend, minBet];
  }
  if (minBet <= tokensOfPlayer) {
    pot = pot + inputValue;
    tokensOfPlayer = tokensOfPlayer - inputValue;
    tokensSpend = tokensSpend + inputValue;
    minBet = inputValue - minBet + blind;
    return [pot, tokensOfPlayer, tokensSpend, minBet];
  }
}
