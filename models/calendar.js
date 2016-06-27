/**
 * Created by 王辉 on 2016/6/23.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CalendarSchema = new Schema(
    {
        title: String,
        what: String,
        where: String,
        start: String,
        end: String,
        who: String,
        type: String,
        description: String,
        created_by: String,
        created_at: Date,
        updated_at: Date
    }
);

module.exports = mongoose.model('calendar', CalendarSchema);