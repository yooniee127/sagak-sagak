var express = require('express');
var router = express.Router();

/* Auth Post exam Router */
router.post('/auth', function(req, res, next){
    res.send('response')
})

module.exports = router;
