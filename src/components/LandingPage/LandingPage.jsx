// import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
const LandingPage = () => {

  return (
    <>
    <div id="LandingPage">
        <div id="mainContainer">
            <p id="landing_p">Welcome to</p>
            <h1 id="landing_h1">NexusPlanner</h1>
            <p id='landingTagline'>Your ultimate event management platform, seamlessly bringing creators and participants together. Plan, join, and orchestrate unforgettable experiences effortlessly.</p>
            <div id="loginSignupLink">
            <p>New User? <Link to='/signup'className='greyLink'>SignUp</Link></p>
            <p>Already a user? <Link to='/login' className='greyLink'>Login</Link></p>
            </div>
        </div>
        <div id="mainContainerImg">
        </div>
    </div>
    </>
  )
}

export default LandingPage