const fs = require( "fs" );

fs.writeFile( "write.txt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et", ( err ) => {
  console.log( "File is created" );
  console.log( err );
} )

//In Asynchronus we pass them a function as an argumnt --a callback
//that gets called when the task is completed
//The call back has an argument that tells us wheather the operation completed sucessfully
//Now we need to sya what to do when fs.writeFile has created, and start checking for errors.

fs.appendFile( 'write.txt', " Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.", ( err ) => {
  console.log( "task completed" )
} );

fs.readFile( "write.txt", "utf8", ( err, data ) => {
  console.log( data );
} );