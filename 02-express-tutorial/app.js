const http = require( 'http' );

const server = http.createServer( ( req, res ) =>
{
    res.writeHead( 200, { 'content-type': 'text/html' } )
    console.log( req.method );
    res.write( '<h1>home page</h1>' )
    res.end()
} );
server.listen( 5000 );