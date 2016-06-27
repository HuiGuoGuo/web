/**
 * Created by 王辉 on 2016/6/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    title: String,
    content: String,
    description: String,
    created_by: String,
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('Blog', BlogSchema);