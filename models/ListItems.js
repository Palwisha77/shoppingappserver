const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const listItem = new Schema({
    items: String
})

module.exports = ListItem = mongoose.model("items",listItem);