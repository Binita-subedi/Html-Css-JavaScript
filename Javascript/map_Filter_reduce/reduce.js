const arr = [3, 5, 6, 8, 4, 5,];

//sum of array
function findSum( arr ) {
  let sum = 0;
  for ( let i = 0; i < arr.length; i++ ) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log( findSum( arr ) );

const output = arr.reduce( function ( acc, curr ) {
  acc = acc + curr;
  return acc;
}, 0 );
console.log( output );
