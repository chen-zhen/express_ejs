var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

router.get('/user', function(req, res, next) {
	res.render('pages/user', {title: 'Express'});
});
router.get('/segment_pos', function(req, res, next) {
	fetch('http://localhost:5000/api/vd_seg_predict_pos', {method: 'get'})
	.then(function(res) {
	    //處理 response
	    return res.json();
	    // console.log(response);
		})
	.then(function(json){
		
		res.render('pages/segment',{json:json});
		})
	.catch(function(err) {
	    // Error :(
	    console.log(err);
	});
	
});

router.get('/segment_neg', function(req, res, next) {
	fetch('http://localhost:5000/api/vd_seg_predict_neg', {method: 'get'})
	.then(function(res) {
	    //處理 response
	    return res.json();
	    // console.log(response);
		})
	.then(function(json){
		
		res.render('pages/segment',{json:json});
		})
	.catch(function(err) {
	    // Error :(
	    console.log(err);
	});
	
});

module.exports = router;