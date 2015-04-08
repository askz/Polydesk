var Docker = require('dockerode');
var config = require('../config');

module.exports = {
  // Run new desktop
  runNew: function(name, type, password) {
    Docker.createContainer({
      Image: config.docker.repo + config.docker.prefix + type,
    }, function(err, container) {
      container.start({"PortBindings": {"5901/tcp": [
        {"HostPort": "5950"}
        ]}}, function(err, data) {
          console.log("New desktop " + name + "/" + type + " created");
        })
    });
  },

  //
  getRunning: function (done) {
    config.docker.listContainers(function (err, containers) {
      done(err, containers);
    });
  },

  restart: function(Id) {
    config.docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          config.docker.getContainer(containerInfo.Id).restart(cb);
      });
    });
  },

  pause: function(Id) {
    config.docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          config.docker.getContainer(containerInfo.Id).pause(cb);
      });
    });
  },

  unpause: function(Id) {
    config.docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          config.docker.getContainer(containerInfo.Id).unpause(cb);
      });
    });
  },

  start: function(Id) {
    config.docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          config.docker.getContainer(containerInfo.Id).start(cb);
      });
    });
  },

  stop: function(Id) {
    config.docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          config.docker.getContainer(containerInfo.Id).stop(cb);
      });
    });
  },
}
