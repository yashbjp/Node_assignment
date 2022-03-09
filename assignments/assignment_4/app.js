const express = require('express');
const app=express();
const mongoose=require('mongoose');
var methodOverride = require('method-override');
mongoose.connect('mongodb://localhost:27017/assignment_4');
var bodyParser = require('body-parser')
app.use(methodOverride('_method'));
const user = require('./model/user');

app.use(bodyParser());
app.use(express.static("public"));

app.set('views','./views');
app.set('views engine','ejs');

app.get("/", async (req,res)=>{
    const users= await user.find();
    res.render('index.ejs',{users});
})

app.get("/form",(req,res)=>{
    res.render('form.ejs');
})

app.post("/user/add", async (req,res)=>{
    const {name,email,age,city,profession}=req.body;
    await user.create({
        name,
        email,
        age,
        city,
        profession
    })
    res.redirect('/');
})
app.put("/user/:id/select", async (req,res)=>{
    await user.updateOne({_id: req.params.id},{selected:true});
    res.redirect('/');
})
app.delete("/user/:id/delete", async (req,res)=>{
    await user.deleteOne({_id: req.params.id},{selected:true});
    res.redirect('/');
})
app.listen(3000,()=>console.log('hello'))