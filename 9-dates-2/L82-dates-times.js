// dates and time
const now = new Date();
console.log(now);

// year, months, day, times
console.log(`getFullYear: ${now.getFullYear()}`);
console.log(`getMonth: ${now.getMonth()}`);
console.log(`getDate: ${now.getDate()}`);
console.log(`getDay: ${now.getDay()}`);

// timestamps
console.log(`timestamp: ${now.getTime()}`);

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
