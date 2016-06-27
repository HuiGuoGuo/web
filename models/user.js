/**
 * Created by 王辉 on 2016/6/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, index: {unique: true}},
    password: String,
    email: String,
    avatar: {
        type: String,
        default: '/images/default-avatar.jpeg'
    },
    title: {
        type: String,
        default: '未命名博客'
    },
    description: {
        type: String,
        default: '博主很懒，还没有添加任何描述……'
    }
});

module.exports = mongoose.model('User', UserSchema);