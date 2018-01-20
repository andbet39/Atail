
const RDPServ = use ('Atail/RDPServer') 
const Server = use('Server')

const io = use('socket.io')(Server.getInstance())


io.on('connection', function (socket) {
  console.log(socket.id)
    socket.on('join',  (msg) =>{
    socket.join(msg)
  });
})



RDPServ.ondata( function(data,remote){
    console.log(data)
    const mess = JSON.parse(data)
  
    if (mess.channel){
      io.to(mess.channel).emit('newline', {'message':mess,'remote':remote});
    }else{
      console.log("to all")
      io.emit('newline', {'message':mess,'remote':remote});
    }
});




