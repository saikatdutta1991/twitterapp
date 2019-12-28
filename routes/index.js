const express = require('express');
const router = express.Router();
const view = require('../helpers/view');


/* GET home page. */
router.get('/', function (req, res) {
	res.sendFile(view("index"));
});

module.exports = router;
