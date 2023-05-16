const addScore = (name, score, scoreBoard) => {
  const addToScoreBoard = {
    name,
    score,
  };
  scoreBoard.push(addToScoreBoard);
  return scoreBoard;
};

export default addScore;
