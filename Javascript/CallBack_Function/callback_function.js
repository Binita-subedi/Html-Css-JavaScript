
setTimeout( function () {
  console.log( "Timer" )
}, 3000 );

function x( y ) {
  console.log( "JavaScript" )
  y();

}
x( function y() {
  console.log( "code Rush" )
} )