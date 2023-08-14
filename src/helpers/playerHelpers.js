export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataValues, matchData) => {
  return playerDataValues.map((player) => {
    const winCount = matchData.reduce((accumulator, match)=> {
      accumulator = match.winner === player.gamerTag ? accumulator += 1 : accumulator;
      return accumulator;
    }, 0);

    player["wins"] = winCount;
    return player;
  });
}