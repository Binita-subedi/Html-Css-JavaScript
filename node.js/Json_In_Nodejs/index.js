//Json stands for JavaScript Object Notation it is a text based format for representing structured data based on JavaScript
//Json is a lightweight format for storing and transporting data.
//Json is often used when data is sent from a server to a web page.

const fs = require( "fs" )
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

//converting object into JSON

const jsonData = JSON.stringify( car );

fs.writeFile( "JsonFile.json", jsonData, "utf8", ( err ) => {
  if ( err ) {
    console.log( "An error occured while writing JSON Object to File." );
    return console.log( err );
  }

  console.log( "JSON file has been saved." );
} );


fs.readFile( "JsonFile.json", "utf8", ( err, data ) => {
  console.log( data );
} )

const objData = JSON.parse( jsonData );
console.log( objData )
console.log( objData.model )
