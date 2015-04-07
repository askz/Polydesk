var Docker = require('dockerode');


module.exports = {
  socket : process.env.DOCKER_SOCKET || '/var/run/docker.sock',
  repo : 'polydesk/',
  prefix : "polydesk-",
  docker : new Docker({socketPath: '/var/run/docker.sock'})
}
// var config.
// var config.
// var config.

// module.exports = config;
