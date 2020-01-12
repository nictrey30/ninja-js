const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// names.sort();
// names.reverse(); - reversed 180

const scores = [10, 50, 20, 5, 35, 70, 45];
// scores.sort() -> [10, 20, 35, 45, 5, 50, 70]
scores.sort((a, b) => a - b);

const players = [
  { name: 'mario', score: 20 },
  { name: 'luigi', score: 10 },
  { name: 'chun-li', score: 50 },
  { name: 'yoshi', score: 30 },
  { name: 'shaun', score: 70 }
];
// sort by scores
players.sort((a, b) => a.score - b.score);
