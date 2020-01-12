// reduce
const scores = [10, 20, 60, 40, 70, 90, 30];

// number of scores over 50
let scoresOver50 = scores.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
}, 0);

const gameScores = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 }
];
// let gameScoresOver50 = gameScores.reduce((acc, curr) => {
//   if (curr.score > 50) {
//     acc++;
//   }
//   return acc;
// }, 0);

let marioTotal = gameScores.reduce((acc, curr) => {
  if (curr.player === 'mario') {
    acc += curr.score;
  }
  return acc;
}, 0);

// find
let firstHighScore = scores.find(el => el > 50);
