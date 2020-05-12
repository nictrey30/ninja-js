let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    {
      title: 'why mac & cheese rules',
      likes: 30
    },
    {
      title: '10 things to make with marmite',
      likes: 50
    }
  ],
  log: false,
  login() {
    console.log('the user logged in');
    this.log = true;
  },
  logout() {
    if (this.log) {
      console.log('the user logged out');
      this.log = false;
    } else {
      console.log(`${this.name} has not yet logged in`);
    }
  },
  logBlogs() {
    console.log('the user has written the following blogs: ');
    this.blogs.forEach((el) => console.log(`${el.title}: ${el.likes} likes`));
  }
};

// user.login();
user.logBlogs();

// generate random numbers
const random = Math.random();
console.log(random);

console.log(Math.round(random * 3));
