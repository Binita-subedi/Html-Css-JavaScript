// 1:create a folder 
// 2:create a file in it named bio.text and add data into it.
// 3:Add more data into the file at the end of the existing data
// 4:Read the data without getting the buffer data at first.
// 5:Rename the file name to mybio.txt
// 6:Delete both the file and the folder

const fs = require( 'fs' )

fs.mkdirSync( "Binita" );

fs.writeFileSync( "./bio.txt", "Bio means 'life,' and gives rise mostly to words from the realm of the 'life' sciences." )
//adding more data to the same text file without overriding existing data

fs.appendFileSync( "bio.txt", "Biological processes have to do with the way 'living' organisms function. Microbiologists study small 'life' forms, such as bacteria, viruses, and other one-celled organisms." )

//Reading data from bio.txt without buffer data..for which we are using encoding

const data = fs.readFileSync( "bio.txt", "utf8" );
console.log( data );

//Renaming the bio.txt file

fs.renameSync( "./bio.txt", "./New_Bio.txt" );

// Deleting the file and folder
// file
fs.unlinkSync( "./New_Bio.txt" );
// folder
fs.rmdirSync( "Binita" );