import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../Logout/Logout';
import './JoinEvent.css'
const JoinEvent = () => {
    const [events, setEvents] = useState([]);

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

    const joinEvent = async () => {
      try {
          alert('Event joined successfully!');
      } catch (error) {
          console.error('Error joining event: ', error);
          alert('Failed to join event. Please try again later.');
      }
  };

    return (
        <>
            <div id='joinEventMainDiv'>
                <div id='joinEventTop'>
                    <h1>NexusPlanner</h1>
                </div>
                <div id='eventCards'>
                    <div id='eventCardsHeading'>
                        <h3>Discover a World of Events Below – Explore and Connect Today!</h3>
                    </div>
                    <div id='eventCardsMain'>
                        {events.map((event) => (
                            <div key={event._id} className='eventCard'>
                                <h2>{event.eventTitle}</h2>
                                <p>Event Category:{event.eventCategory}</p>
                                <p>Event Description: {event.eventDescription}</p>
                                <p>Date: {event. eventDate}</p>
                                <p>Time: {event.eventTime}</p>
                                <p>Location: {event.eventLocation}</p>
                                <button onClick={() => joinEvent(event._id)}>Join Event</button>
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

export default JoinEvent;
