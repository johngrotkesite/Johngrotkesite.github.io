var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'John Grotke' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'John Grotke' });
});

router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'John Grotke' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'John Grotke' });
});

router.post('/html_form_send', function(req, res, next) {
});


module.exports = router;
