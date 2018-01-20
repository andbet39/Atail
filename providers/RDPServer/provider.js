const { ServiceProvider } = require('@adonisjs/fold')



class RDPServerProvider extends ServiceProvider {
  register () {
    this.app.singleton('Atail/RDPServer', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('.'))(Config)
    })
  }

  boot () {

    const server = use('Atail/RDPServer')

    server.start()

  }
}

module.exports = RDPServerProvider