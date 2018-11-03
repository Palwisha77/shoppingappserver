const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const myList = new Schema({
    title:{
        type:String
    },
    data:Array
})

module.exports = List = mongoose.model('lists',myList);
