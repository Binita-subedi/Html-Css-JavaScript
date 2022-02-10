const fs = require( "fs" );
//creating a new file
fs.writeFileSync( "read.txt", "Welcome to my node.js page" );
fs.appendFileSync( "read.txt", " This is my first node.js text file " );


//Node.js includes an additional data type called Buffer
//(This additional data types called buffer's are not available in javascript)
//Buffer is mainly used to store binary data
//While reading from a file or receiving packets over the network

{/* <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 6e 6f 64 65 2e 6a 73 20 70 61 67 65 20 54 68 69 73 20 69 73 20 6d 79 20 66 69 72 73 74 20
6e 6f 64 65 2e 6a ... 12 more bytes > */}

const buf_data =
  fs.readFileSync( 'read.txt' );

console.log( buf_data );

org_data = buf_data.toString();

console.log( org_data );

//to rename the file

fs.renameSync( "read.txt", "readWrite.txt" );