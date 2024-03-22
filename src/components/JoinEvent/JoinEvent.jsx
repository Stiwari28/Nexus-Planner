// JoinEvent.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logout from '../Logout/Logout';

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
          // Implement logic to join the event (e.g., update the event document in the database)
          // You can use axios to send a request to the server to update the event
          // Example:
          // await axios.post(`http://localhost:4200/events/${eventId}/join`, { userId: currentUser._id });
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
                        {/* Map through events and display them as cards */}
                        {events.map((event) => (
                            <div key={event._id} className='eventCard'>
                                <h2>{event.eventTitle}</h2>
                                <p>{event.eventCategory}</p>
                                <p>{event.eventDescription}</p>
                                <p>{event. eventDate}</p>
                                <p>{event.eventTime}</p>
                                <p>{event.eventLocation}</p>
                                {/* Add join event button */}
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
