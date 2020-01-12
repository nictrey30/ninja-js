const scores = [10, 30, 15, 25, 50, 40, 5];

// filter the scores >= 20
let newScores = scores.filter(el => el >= 20);

const users = [
  { name: 'shaun', premium: true },
  { name: 'yoshi', premium: false },
  { name: 'mario', premium: false },
  { name: 'chun-li', premium: true }
];

let premiumUsers = users.filter(el => el.premium);
