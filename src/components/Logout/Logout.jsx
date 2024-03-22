// Logout.jsx
// import React from 'react';
import './Logout.css'
const Logout = () => {
    const handleLogout = () => {
        
        window.location.href = '/';
        window.history.pushState(null, '', '/');
        window.onpopstate = () => {
            window.history.go(1);
        };
    };

    return (
        <div id="logoutBtn">
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
