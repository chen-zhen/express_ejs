var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next) {
	res.render('views/pages/user', {title: 'Express'});
});

module.exports = router;