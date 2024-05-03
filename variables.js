// VAR
function example() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x);
  }
  console.log(x);
}
example();

// LET
function example() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}
example();

// CONST
function example() {
  const x = 10;
  if (true) {
    const x = 20;
    console.log(x);
  }
  console.log(x);
}
example();
