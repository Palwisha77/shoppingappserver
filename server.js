const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const List = require('./models/Lists');
const ListItem = require('./models/ListItems');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://palwisha:pal787898@ds149353.mlab.com:49353/shoppingassistant',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Database is Connected")
    }
})
app.get('/',(req,res)=>{
    res.json({hi:"there"});
    // let mylists = new List();
    // mylists.name = "Palllo"
    // mylists.save();
})
app.post('/api/save',(req,res,next)=>{
    let list = new List();
    list.title = req.body.title;

    list.save((err) => {
        if(err) return next(err);
        console.log("List item has been saved")
    });
});

app.get('/api/load',(req,res,next) => {
    List.find({},(err,list) => {
        if(err) return next(err);
        res.json(list);
    })
})

app.get('/addItem',(req,res)=>{
    var listItems = new ListItem();
    var mylists = new List();
    mylists.title = "Grocery";
    
    List.findOneAndUpdate({title:"Grocery"},{
        $set:{
            data :"karloo "
        }
    },(err,list)=>{
        if(err){
            console.log(err)
        }else{
            console.log(list)
            res.json(list)
        }
    })
    

})

app.listen(4000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is Connected on port 4000")
    }
})

