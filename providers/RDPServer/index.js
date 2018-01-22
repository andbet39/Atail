const dgram = require("dgram");

class RDPServer{
    constructor (Config) 
    {
        console.log("RDPServer constructor")
        this.Config = Config
        this._server = null
        this._ondata = null
    }
    

    start()
    {
        console.log("Server start")
        this._server = dgram.createSocket("udp4");

        this._server.on("message", (msg, remote) => {
          this._ondata(msg.toString('UTF8'),remote)
        });
    
        this._server.on("listening", function () {
          console.log("server listening ");
        });
    
        this._server.bind(8123);
    }

    ondata(fn){
        this._ondata=fn
    }

    


}

module.exports = RDPServer