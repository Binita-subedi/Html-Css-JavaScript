const arr = [2, 6, 8, 9, 4, 5]

//filter odd values


function odd( a ) {
  return a % 2;
}


const output1 = arr.filter( odd );
console.log( output1 )

//filter even 

function even( b ) {
  return b % 2 === 0;
}

const output2 = arr.filter( even )
console.log( output2 )

//value greater than 5
const output3 = arr.filter( ( c ) =>
  c > 5 )
console.log( output3 );