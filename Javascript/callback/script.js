// setTimeout( function () {
//   console.log( "Timer" );
// }, 4000 );

// function x( y ) {
//   console.log( "x" )
//   y();
// }
// x( function y() {
//   console.log( "y" )
// } )



function event_Listner() {
  let count = 0;

  document.getElementById( "btn" ).addEventListener( "click", function xyz() {
    console.log( "HelloWorld", ++count );
  } );

}
event_Listner();

