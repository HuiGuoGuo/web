/**
 * Created by 王辉 on 2016/6/15.
 */
var express = require('express');
var Blog = require('../../models/blog');

var router = express.Router();


router.route('/new').get(function (req, res, next) {
    res.render('blog/new', {title: '新增文章'});
}).post(function (req, res, next) {
    var title = req.body.title || '',
        description = req.body.description || '',
        content = req.body.content || '';


    Blog.create({
            title: title,
            description: description,
            content: content,
            created_at: new Date(),
            updated_at: new Date()
        },
        function (err, blog) {
            if (err) return next(err);    // 交给接下来的错误处理中间件
            //   res.status(201).end('注册成功');       // 存储成功
            res.render('blog/new')
        });
})

module.exports = router;




