
var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/broadcast', function(req, res, next) {
	res.redirect("/");
});
router.get('/view', function(req, res, next) {
  //res.sendFile('./index.html');
  res.sendFile(path.join(__dirname,  "/../public/index.html"));
});

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile('./index.html');
});

module.exports = router;
