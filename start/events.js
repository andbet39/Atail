
const RDPServ = use ('Atail/RDPServer') 

RDPServ.ondata( function(data,remote){
    console.log(data)
    console.log(remote)
});


