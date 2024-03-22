/* eslint-disable no-undef */
const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/NexusPlanner')
.then(()=>console.log("Database is successfully connected"))
.catch(()=>console.log("Unsuccessful Database connection"))