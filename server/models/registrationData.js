/* eslint-disable no-undef */
const mongoose= require('mongoose');

const registrationSchema= new mongoose.Schema({
    userName:String,
    userEmail:String,
});

const registrationModel= new mongoose.model('RegistrationModel', registrationSchema);
module.exports=registrationModel;