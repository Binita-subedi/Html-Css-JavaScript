const fs = require( 'fs' )

fs.mkdir( "Async", ( err ) => {
  console.log( "folder Created" )
} );

fs.writeFile( "./Async/bio.txt", "The options argument may be omitted. If provided, it should be an object.", ( err ) => {
  console.log( "File bio.txt is created" )
} );

fs.appendFile( "./Async/bio.txt", " Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer.", ( err ) => {
  console.log( "Data has been appended" );
} )

fs.readFile( './Async/bio.txt', 'utf-8', ( err, data ) => {
  console.log( err )
  console.log( data );
} )
//remaning file using async

fs.rename( "./Async/bio.txt", "./Async/New_bio.txt", ( err ) => {
  console.log( "rename is done" )

} )

// fs.unlink( "./Async/New_bio.txt", ( err ) => {
//   console.log( "File is deleted" )
// } )

// fs.rmdir( "./Async", ( err ) => {
//   console.log( "folder has been deleted" )
// } )