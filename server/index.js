/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express= require('express');
const cors = require('cors');
const app=express();
const port=4200;
require('dotenv').config();

const EventModel= require('./models/eventData');
const registrationData= require('./models/registrationData');
const userModel= require('./models/userData');
require('./db/connection');
app.use(express.json());
app.use(cors());



// Route to create a new event
app.post('/events', async (req, res) => {
    try {
        const newEvent = await EventModel.create(req.body);
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error creating event: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to fetch all events
app.get('/events', async (req, res) => {
    try {
        const events = await EventModel.find();
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to delete an event by ID
app.delete('/events/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        await EventModel.findByIdAndDelete(eventId);
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to handle PUT request for updating event data
app.put('/events/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const updatedEvent = req.body;
        const result = await EventModel.findByIdAndUpdate(eventId, updatedEvent, { new: true });
        res.status(200).json(result);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/events/user/:userName', async (req, res) => {
    try {
        const userName = req.params.eventOrganizer;
        // Implement logic to fetch events created by the user with the given userId
        const userEvents = await EventModel.find({ eventOrganizer: userName });
        res.json(userEvents);
    } catch (error) {
        console.error('Error fetching user events: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/events', async (req, res) => {
    try {
        const event = await EventModel.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        console.error('Error creating event: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define route for user registration
app.post('/api/signup', async (req, res) => {
    try {
        const { uName, userName, userEmail, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ userEmail });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // Create new user instance
        const newUser = new userModel({ uName, userName, userEmail, password });

        // Save user to database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Define route for user login
app.post('/api/login', async (req, res) => {
    try {
        // Extract user credentials from request body
        const { userEmail, password } = req.body;

        // Find user by email
        const user = await userModel.findOne({ userEmail });

        // Check if user exists and password is correct
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Respond with success message and user details
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error("Error during user login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.listen(port, ()=>{
    console.log(`Port Number ${port}`);
})