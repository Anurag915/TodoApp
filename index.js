const express=require('express');
const app=express();
require("dotenv").config();
port=process.env.PORT || 5000;

//middleware for body parser
app.use(express.json());

//import routes
const todoRoutes=require('./routes/Todos');

//mount the todo ASPI routes
app.use('/api/v1',todoRoutes);
//use routes


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

//connect to database
const dbConnect=require('./config/database');
dbConnect();

//default route
app.get('/',(req,res)=>{
    res.send('Welcome to the todo API');
});