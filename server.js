const express = require('express')
const bodyparser =require ('body-parser')
const cors = require('cors')
const foodTruckRoutes = require('./routes/TruckRoutes.js')
const ejs= require('ejs')
const path= require('path')


const app=express()

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/assests/views'));

app.use(express.static(path.resolve(__dirname,'assests')))

app.use(bodyparser.json());
app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));

app.get('/',(req,res)=>
{
    res.render('home');
})


app.use('/api/foodtrucks',foodTruckRoutes) 


const PORT=5000

app.listen(PORT,console.log(`Server running on port ${PORT}`))

