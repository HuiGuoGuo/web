/**
 * Created by 王辉 on 2016/6/14.
 */

var express = require('express');
var router = express.Router();
router.get('/login',function(req,res){
    res.render('account/login',{content:'login'})
});

module.exports=router;
