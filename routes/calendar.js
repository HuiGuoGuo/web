/**
 * Created by 王辉 on 2016/6/22.
 */

var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('calendar');
});

module.exports = router;