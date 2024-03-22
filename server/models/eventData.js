/* eslint-disable no-undef */
const mongoose= require('mongoose');

const eventSchema= new mongoose.Schema({
    eventOrganizer:String,
    eventOrganizerEmail:String,
    eventTitle:String,
    eventCategory:String,
    eventDescription:String,
    eventDate:String,
    eventTime:String,
    eventLocation:String,
    peopleCapacity:Number,
});

const eventModel= new mongoose.model('EventModel', eventSchema);
module.exports=eventModel;