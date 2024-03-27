// import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';

const Home = () => {



  return (
    <>
    <div id='homeMainDiv'>
      <div id='homeTop'>
        <h1>NexusPlanner</h1> 
      </div>
      <div id='homeBottom'>
      <div className='homeBottomDivs'>
          <div className='BottomDivsImg'>
            <div id='createImg'>

            </div>
          </div>
          <div className='BottomDivsName'>
          <Link to='/createEvent' className='homepageLink'>
          <h5>Create Event</h5>
        </Link>
          </div>
        </div>
        <div className='homeBottomDivs'>
          <div className='BottomDivsImg' >
            <div id='joinImg'>

            </div>
          </div>
          <div className='BottomDivsName'>
          <Link to='/joinEvent'  className='homepageLink'>
          <h5>Join Event</h5>
       </Link>
          </div>
        </div>
        <div className='homeBottomDivs'>
          <div className='BottomDivsImg' >
            <div id='manageImg'></div>
          </div>
          <div className='BottomDivsName'>
          <Link to='/manageEvents'  className='homepageLink'>
          <h5 className='linkH5'>Manage Events</h5>
       </Link>
          </div>
        </div>
      </div>

    </div>
    <div id='manageEventBottom'>
                <Logout />
            </div>
    </>
  )
}

export default Home