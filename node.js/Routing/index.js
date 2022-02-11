const http = require( "http" );

const server = http.createServer( ( req, res ) => {
  if ( req.url == '/' ) {
    res.end( "Welcome to the Homepage" )
  }
  else if ( req.url == '/about' ) {
    res.end( "Welcome to the about page" )
  }
  else if ( req.url == '/contactUs' ) {
    res.end( "Welcome to the contactUs page" )
  }
  else if ( req.url == '/DetailInfo' ) {
    res.end( "Welcome to the DetailInfo page" )
  }
} );

server.listen( 8000, "localhost", () => {
  console.log( "listening to the port no 8000" )
} );