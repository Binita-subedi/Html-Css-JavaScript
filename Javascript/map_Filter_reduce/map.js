const arr = [5, 1, 2, 3, 2, 6]

//Double = []

//triple = []

//Binary = []

function double( x ) {
  return x * 2;
}

function triple( a ) {
  return a * 3
}

const output2 = arr.map( triple )
console.log( output2 )

const output1 = arr.map( double )
console.log( output1 )


const output3 = arr.map( function binary( c ) {
  return c.toString( 2 )
}
)

// const output3 = arr.map( ( c ) => c.toString( 2 )
// );

console.log( output3 )