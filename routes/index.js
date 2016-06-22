var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  /*  var collection = db.get('blogs'); //获得数据库中的集合(类似关系数据库中的表)
    collection.find({}, {}, function (e, docs) { //取得所有的集合数据, 渲染到页面上,关键字是userlist
        res.render('userlist', {
            "userlist": docs
        });
    })*/
    res.render('index', {title: 'Express'});
});

module.exports = router;
