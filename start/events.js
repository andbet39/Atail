
const RDPServ = use ('Atail/RDPServer') 
const Server = use('Server')

const io = use('socket.io')(Server.getInstance())


io.on('connection', function (socket) {
  console.log(socket.id);
})



RDPServ.ondata( function(data,remote){
    console.log(data);
    const mess = JSON.parse(data);
    io.emit('newline', {'message':mess,'remote':remote});
});




