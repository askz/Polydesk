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

  getRunning: function() {
    var docks = null;
    Docker.listContainers(function (err, containers) {
      docks = containers;
    });
    return docks;
  },

  restart: function(Id) {
    Docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          Docker.getContainer(containerInfo.Id).restart(cb);
      });
    });
  },

  pause: function(Id) {
    Docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          Docker.getContainer(containerInfo.Id).pause(cb);
      });
    });
  },

  unpause: function(Id) {
    Docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          Docker.getContainer(containerInfo.Id).unpause(cb);
      });
    });
  },

  start: function(Id) {
    Docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          Docker.getContainer(containerInfo.Id).start(cb);
      });
    });
  },

  stop: function(Id) {
    Docker.listContainers(function (err, containers) {
      containers.forEach(function (containerInfo) {
        if (containerInfo.Id === Id)
          Docker.getContainer(containerInfo.Id).stop(cb);
      });
    });
  },
}
