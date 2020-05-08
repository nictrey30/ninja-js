// object literals
let user = {
  name: 'Chris',
  age: 30,
  email: 'chris@gmail.com',
  location: 'Berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  // shorthand notation - we cannot use function expressions when declaring methods
  login() {
    console.log(`${this.name} has logged in`);
  },
  logout() {
    console.log(`${this.name} has logged out`);
  },
  logBlogs() {
    this.blogs.forEach((blog) => console.log(blog));
  }
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

user['name'] = 'chun-li';
console.log(user['name']);

// accessing the key via string notation
const key = 'location';
console.log(`location is ${user[key]}`);

console.log(typeof user);

user.login();
user.logBlogs();
user.logout();
