const express = require('express');
const app=express();
var bodyParser = require('body-parser')

app.use(bodyParser());
app.set('views','./views');
app.set('views engine','ejs');
var users = [{
    name:"Yash",
    age:25,
    email:"yash@gmail.com",
    profession:"Engineer",
    city:"Kanpur"
},
{
    name:"Shrey",
    age:30,
    email:"shrey@gmail.com",
    profession:"Sales",
    city:"Delhi"
},{
    name:"Vikas",
    age:34,
    email:"vikas@gmail.com",
    profession:"Business Analyst",
    city:"Delhi"
},{
    name:"Sam",
    age:30,
    email:"sam@gmail.com",
    profession:"System Analyst",
    city:"Delhi"
}];

app.get("/",(req,res)=>{
    res.render('index.ejs',{users});
})

app.get("/form",(req,res)=>{
    res.render('form.ejs');
})

app.post("/user/add",(req,res)=>{
    users.push({
    name:req.body.name,
    age:req.body.age,
    email:req.body.email,
    profession:req.body.profession,
    city:req.body.city
    })
    res.redirect('/');
})
app.listen(3000,()=>console.log('hello'))