/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// import React from 'react'
import './CreateEvent.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Logout from '../Logout/Logout';
const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventOrganizer: '',
    eventOrganizerEmail:'',
    eventTitle: '',
    eventCategory: '',
    eventDescription: '',
    eventDate: '',
    eventTime: '',
    eventLocation: '',
    peopleCapacity: 0,
});
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const res = await axios.post('http://localhost:4200/events', formData);
      console.log(res.data);
      alert("Event is successfully added"); // Alert the message from the response
        if (res.status === 201) { // Check if the response status is 201 (Created)
            window.location.href = '/home';
        }
      // Optionally, you can redirect the user to another page after successful event creation.
  } catch (error) {
      console.error('Error creating event: ', error);
  }
};
  return (
    <>
    <div id='createEventMainDiv'>
      <div id='createEventTop'>
        <h1>NexusPlanner</h1>
      </div>
      <div id='createEventMid'>
      <form id="EventForm" onSubmit={handleSubmit}>
        <div id='craftEvent'>
        <h4>Craft Your Perfect Event</h4>
        </div>
            <div id="first0" className='ef'>
                <label htmlFor="eventOrganizer">Enter Your Name</label><br/>
                <input type="text" id="eventOrganizer" name="eventOrganizer" placeholder="Enter your Name" 
                value={formData.eventOrganizer}
                onChange={handleChange} />
            </div>
            <div id="first1"  className='ef'>
                <label htmlFor="eventOrganizerEmail">Enter Your Email</label><br/>
                <input type="email" id="eventOrganizerEmail" name="eventOrganizerEmail" placeholder="Enter your Email"
                value={formData.eventOrganizerEmail}
                onChange={handleChange}  />
            </div>
            <div id="first"  className='ef'>
                <label htmlFor="eventTitle">Event Title</label><br/>
                <input type="text" id="eventTitle" name="eventTitle" placeholder="Enter Event Title" 
                value={formData.eventTitle}
                onChange={handleChange} />
            </div>
            <div id="second"  className='ef'>
            <label htmlFor="eventCategory">Select Event Category:</label><br/>
                 <select id="eventCategory" name="eventCategory"  value={formData.eventCategory}
    onChange={handleChange}>
                  <option value="conference">Conference</option>
                  <option value="workshop">Workshop</option>
                  <option value="seminar">Seminar</option>
                  <option value="webinar">Webinar</option>
                  <option value="networkingEvent">Networking Event</option>
                  <option value="exhibition">Exhibition</option>
                  <option value="panelDiscussion">Panel Discussion</option>
                  <option value="dinnerEvent">Dinner Event</option>
                  </select>

            </div>
            <div id="third"  className='ef'>
            <label htmlFor="eventDescription">Event Description</label><br/>
                <textarea id="eventDescription" name="eventDescription" placeholder="Enter Event Description" 
                value={formData.Description}
                onChange={handleChange} />
            </div>
            <div id="fourth"  className='ef'>
                <label htmlFor="eventDate">Event Date</label><br/>
                <input type="date" id="eventDate" name="eventDate" 
                value={formData.eventDate}
                onChange={handleChange} />
            </div>
            <div id="fifth"  className='ef'>
                <label htmlFor="eventTime">Event Time</label><br/>
                <input type="time" id="eventTime" name="eventTime" 
                value={formData.eventTime}
                onChange={handleChange} />
            </div>
            <div id="sixth"  className='ef'>
                <label htmlFor="eventLocation">Event Location</label><br/>
                <input type="text" id="eventLocation" name="eventLocation" placeholder="Enter Event Location" 
                value={formData.eventLocation}
                onChange={handleChange} />
            </div>
            <div id="seventh"  className='ef'>
                <label htmlFor="peopleCapacity">People Capacity</label><br/>
                <input type="number" id="peopleCapacity" name="peopleCapacity" 
                value={formData.eventCapacity}
                onChange={handleChange} />
            </div>
            <div id="eighth">
            <button type="submit">Add Event</button>
            </div>
        </form>
      </div>
      <div id='createEventBottom'>
        <p><Link to='/home' className='greyLink'>Back to Home</Link></p>
      </div>

    </div>
    <div id='manageEventBottom'>
                <Logout />
            </div>
    </>
  )
}

export default CreateEvent