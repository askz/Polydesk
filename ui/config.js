var Docker = require('dockerode');


module.exports = {
  socket : process.env.DOCKER_SOCKET || '/var/run/docker.sock',
  repo : 'polydesk/',
  prefix : "",
  docker : new Docker({socketPath: this.socket})
}