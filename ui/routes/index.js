var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index.html', { title: 'Polydesk Homepage' });
});
/* GET running desktops. */
router.get('/running', function(req, res, next) {
  res.render('running_desk.html', { title: 'Running Polydesk' });
});

/* GET new desktops. */
router.get('/new', function(req, res, next) {
  res.render('new_desk.html', { title: 'New Polydesk' });
});

module.exports = router;
