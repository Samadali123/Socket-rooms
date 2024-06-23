const io = require( "socket.io" )();
const socketapi = {
    io: io
};
// roome basically peronalized chat ke liye yah  phir alag alag individually group me chat krne ke liye use krte hai groups ka socket io mein

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );

    socket.on(`sony`, msg=>{
        socket.broadcast.to(msg.roomName).emit(`max`, msg.message)
    })
    

    socket.on(`join-room`, roomName =>{
        socket.join(roomName) // is line se ek room create hojayega.
   })


});


// end of socket.io logic

module.exports = socketapi;