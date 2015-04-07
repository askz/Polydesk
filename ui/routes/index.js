var express = require('express');
var router = express.Router();
var docKontrol = require('../controls/docKontrol');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Polydesk Homepage' });
});

/* GET running desktops. */
router.get('/running', function(req, res, next) {
    docKontrol.getRunning(function (err, containers) {
	if (err)
	    res.status(500).send(err);
	else
	    res.render('running_desk', { title: 'Running Polydesks', desktops: containers });
    });
});

/* GET new desktop. */
router.get('/new', function(req, res, next) {
  res.render('new_desk.html', { title: 'New Polydesk' });
});

/* GET new desktop form. */
router.post('/new/desktop', function(req, res, next) {
  var desktop = req.body.desktop,
  	  name = req.body.name,
  	  password = req.body.password;
  if (docKontrol.runNew(name, desktop, password) === true)
    res.redirect('/');
});

module.exports = router;
