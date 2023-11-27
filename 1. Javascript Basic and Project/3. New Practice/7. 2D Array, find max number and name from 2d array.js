const highestScorer = function (score) {
  let highScore = score[0][1];
  let highScorer = score[0][0];

  for (let i = 1; i < score.length; i++) {
  
    for (let j = 1; j < 2; j++) {
      const element = score[i][j];
      if (element> highScore) {
        highScore = element;
        highScorer = score[i][j-1];
      }
    }
  }

  return [highScore,highScorer];
};


const scoreArray = [["A", 22], ["B", 93], ["C", 44], ["D", 55], ["E", 66]];

var [highestScore,highestScorerName] = highestScorer(scoreArray);
console.log(highestScorerName);