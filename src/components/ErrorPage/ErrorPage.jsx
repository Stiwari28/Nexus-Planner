// import React from 'react'
import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {


  return (
   <>
   <div id='errorMainDiv'>
   <div id='errorImgDiv'>
    <img src="/public/AreYouLost.gif" ></img>
    </div>
    <div id='errorBtnDiv'>
        <h3>Seems like you are lost.</h3>
    <button ><Link  to="/home"  className="homeButton" >Go back to Home Page</Link></button>
    </div>
   </div>
   </>
  )
}

export default ErrorPage