// timestamps
const before = new Date('February 1 2019 7:30:59');
const now = new Date();
// console.log(now.getTime(), before.getTime());
const diff = now.getTime() - before.getTime();
const diffDays = Math.round(diff / 1000 / 60 / 60 / 24);

// converting timestamp into date objects
const timestamp = 789930533503;
console.log(new Date(timestamp));
