var express = require('express');
var router = express.Router();
var docKontrol = require('../controls/docKontrol');


router.get('/running', function(req, res, next) {
  res.send(docKontrol.getRunning);
});

router.get('/stats', function(req, res, next) {
  res.send(docKontrol.getStats);
});

router.get('/pause/:id', function(req, res, next) {
  res.send(docKontrol.pause(req.body.id));
});

router.get('/start/:id', function(req, res, next) {
  res.send(docKontrol.start(req.body.id));
});

router.get('/restart/:id', function(req, res, next) {
  res.send(docKontrol.restart(req.body.id));
});

router.get('/unpause/:id', function(req, res, next) {
  res.send(docKontrol.unpause(req.body.id));
});

module.exports = router;
