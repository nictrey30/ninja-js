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
  login: function() {
    console.log('the user logged in');
    this.log = true;
  },
  logout: function() {
    if (this.log) {
      console.log('the user logged out');
      this.log = false;
    } else {
      console.log(`${this.name} has not yet logged in`);
    }
  },
  logBlogs: function() {
    this.blogs.forEach(el => console.log(`${el.title}: ${el.likes} likes`));
  }
};

// user.login();
