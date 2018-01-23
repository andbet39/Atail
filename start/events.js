
const RDPServ = use ('Atail/RDPServer') 
const Server = use('Server')
const io = use('socket.io')(Server.getInstance())

var a2h = require('ansi2html-extended');
var cfg = {
    standalone: true,
    palette: {
        black: '#222222',
        white: '#eeeeee'
    }
}



io.on('connection', function (socket) {
  console.log("NEW CLIENT CONNECTED: " + socket.id);
})



RDPServ.ondata( function(data,remote){
    const mess = JSON.parse(data);
    mess.line = a2h.fromString(mess.line)
    io.emit('newline', {'message':mess,'remote':remote});
});




