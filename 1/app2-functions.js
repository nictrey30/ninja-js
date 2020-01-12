greet();
// speak(); -hoisting works with function declarations, not with function expressions
// functiom expression
const speak = function(name) {
  // (name) creates a local variable name that we can use inside the code block of the function
  time = new Date().getHours();
  let greeting;
  switch (true) {
    case time >= 0 && time <= 6:
      greeting = 'napping';
      break;
    case time > 6 && time <= 12:
      greeting = 'mornin';
      break;
    case time > 12 && time <= 20:
      greeting = "evening'";
      break;
    default:
      greeting = 'good nite';
  }
  console.log(`good ${greeting} ${name}`);
};

// functions declaration
function greet() {
  console.log(`Hello there`);
}

speak('Cucu');
