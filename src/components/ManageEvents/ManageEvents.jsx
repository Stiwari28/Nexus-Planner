import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../Logout/Logout';
import './ManageEvents.css'


const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [editedEvent, setEditedEvent] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:4200/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events: ', error);
            }
        };

        fetchEvents();
    }, []);

    const handleEdit = (eventId) => {
        setEditedEvent(events.find(event => event._id === eventId));
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:4200/events/${editedEvent._id}`, editedEvent);
            setEvents(events.map(event => event._id === editedEvent._id ? editedEvent : event));
            setEditedEvent(null);
            console.log('Event edited and saved successfully');
        } catch (error) {
            console.error('Error saving event: ', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedEvent({ ...editedEvent, [name]: value });
    };

    const handleDelete = async (eventId) => {
      try {
          await axios.delete(`http://localhost:4200/events/${eventId}`);
          setEvents(events.filter(event => event._id !== eventId));
          console.log('Event deleted successfully');
      } catch (error) {
          console.error('Error deleting event: ', error);
      }
  };

    return (
        <>
            <div id='manageEventMainDiv'>
                <div id='manageEventTop'>
                    <h1>NexusPlanner</h1>
                </div>
                <div id='manageEventCards'>
                    <div id='manageEventCardsHeading'>
                        <h3>Event Control Panel</h3>
                    </div>
                    <div id='eventCardsMain'>
                        {events.map((event) => (
                            <div key={event._id} className='eventCard'>
                                {editedEvent && editedEvent._id === event._id ? (
                                    <div>
                                        <input type="text" name="eventTitle" value={editedEvent.eventTitle} onChange={handleChange} />
                                        <input type="text" name="eventDescription" value={editedEvent.eventDescription} onChange={handleChange} />
                                        <input type="text" name="eventDate" value={editedEvent.eventDate} onChange={handleChange} />
                                        <button onClick={handleSave}>Save</button>
                                    </div>
                                ) : (
                                    <div>
                                        <h2>{event.eventTitle}</h2>
                                        <p>{event.eventDescription}</p>
                                        <p>Date: {event.eventDate}</p>
                                        <button onClick={() => handleEdit(event._id)}>Edit</button>
                                        <button onClick={() => handleDelete(event._id)}>Delete</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div id='createEventBottom'>
        <p><Link to='/home' className='greyLink'>Back to Home</Link></p>
      </div>
            </div>
            <div id='manageEventBottom'>
                <Logout />
            </div>
        </>
    );
};

export default ManageEvents;
