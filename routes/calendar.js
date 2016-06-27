/**
 * Created by 王辉 on 2016/6/22.
 */

var express = require('express');
var router = express.Router();
var Calendar = require('../models/calendar');

router.route('/').get(function(req,res,next){
    Calendar.find(function(err,doc){
        console.log(doc)
    })
    res.render('calendar');
}).post(function(req,res,next){
    var obj = req.body;
    console.log(obj)
    Calendar.create(
        obj
    )

   res.send({status:'ok'});
})

module.exports = router;