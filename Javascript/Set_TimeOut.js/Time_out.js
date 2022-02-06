// function x() {
//   var a = "Hello World"
//   setTimeout( function () {
//     console.log( a )
//   }, 3000 )
//   console.log( "Code Like Her" )
// }
// x()



// function x() {
//   for ( var i = 1; i <= 5; i++ ) {
//     setTimeout( function () {
//       console.log( i );
//     }, i * 3000 )
//   }
//   console.log( "Code Like Her" )
// }
// x();




function x() {
  for ( var i = 1; i <= 5; i++ ) {
    function close( i ) {
      setTimeout( function () {
        console.log( i )
      }, i * 3000 )
    }
    close( i );
  }
  console.log( "Hello World" )
}
x();