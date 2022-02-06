var promise = new Promise( function ( resolve, reject ) {
  const x = "Code like her";
  const y = "Code like her";
  if ( x === y ) {
    resolve();
  } else { reject(); }

} );
promise.
  then( function () {
    console.log( "Success, True" )

  } ).catch( function () {
    console.log( "occured some error" )
  } )
