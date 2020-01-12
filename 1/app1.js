// variables and block scope
let age = 34;
// let age = 50; - can't re-declare variable in the same scope
if (true) {
  let age = 40;
  let name = 'ninja';
  console.log(`inside first code block: ${age}, ${name}`);
  if (true) {
    // takes the age value that is the most immediate
    console.log(`inside second code block ${age}`);
    var test = 'hello';
  }
}
console.log(`outside first code block: ${age}, ${name}, ${test}`);
