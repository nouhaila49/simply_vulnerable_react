var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<div onmouseover=\"alert('This is a script injected from an external source.')\">hover here</div>");
});

module.exports = router;
