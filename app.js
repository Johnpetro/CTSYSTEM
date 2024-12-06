const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
const port =  process.env.PORT || 40000
app.use(expressLayouts);
app.set('view engine','ejs')
app.set('layout','./layouts/main');

const adminLayout = '../views/layouts/agen_layout';
// code here for hend points
app.get('/',(req,res)=>{
     res.status(200).render('index.ejs')
})
app.get('/login',(req,res)=>{
    res.status(200).render('login.ejs')
})
app.get('/register',(req,res)=>{
    res.status(200).render('register.ejs')
})
app.get('/home',(req,res)=>{
    res.render('home.ejs',{layout:adminLayout})
})

app.get('/manage_customer',(req,res)=>{
    res.render('utility/manage_customer.ejs',{layout:adminLayout})
})



app.listen(port, ()=>{console.log(`applicayion is running on port ${port}`)})


