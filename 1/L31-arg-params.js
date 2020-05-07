// arguments and parameters
const speak = (name = 'John', time = 'night') => {
  name = name[0].toUpperCase() + name.substr(1, name.length);
  console.log(`good ${time.toLowerCase()} ${name}`);
};

speak('trey', 'Morning'); // -> argument
speak();
