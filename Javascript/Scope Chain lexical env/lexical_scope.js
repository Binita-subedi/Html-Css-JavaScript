

var number = 42;

function printNumber() {
  console.log( number )
}
function log() {
  var number = 54;
  printNumber();
}
log()

// let no = 4;
// function x() {
//   console.log( no )
// }
// function y() {
//   let no = 8;
//   x()
// }
// y();