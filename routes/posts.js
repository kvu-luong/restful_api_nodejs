const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('We are on posts index page');
})
router.get('/posts', (req, res) => {
	res.send('We are on posts');
})

router.get('/specific', (req, res) =>  {
	res.send("Specific");
})
module.exports = router;