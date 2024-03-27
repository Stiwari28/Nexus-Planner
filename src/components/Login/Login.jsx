import { useState, useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {


    const [formData, setFormData] = useState({
        userEmail: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4200/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            alert(data.message);
            if (response.ok) {
                window.location.href = '/home';
            }
        } catch (error) {
            console.error('Error during user login:', error);
            alert('Login failed. Please try again.');
        }
    };

    useEffect(() => {
        // Prevent user from going back to signup page after successful signup
        if (window.location.pathname === '/home') {
            window.history.replaceState(null, '', '/home');
        }
    }, []);


    return (
        <>
            <div id='loginMainDiv'>
                <div id='loginTop'>
                    <h1>NexusPlanner</h1>
                </div>
                <div id='loginMid'>
                    <div id='loginMid_right'>
                        <img src="src/assets/login.gif" alt="login" />
                    </div>
                    <div id='loginMid_left'>
                        <p id='welcomeBack'>Welcome Back!!!</p>
                        <form onSubmit={handleSubmit}>
                            <input type="email" name="userEmail" placeholder='Enter your Email' onChange={handleChange} required />
                            <input type="password" name="password" placeholder='Enter your password' onChange={handleChange} required />
                            <div id='loginBtnDiv'>
                                <button type="submit" id='loginBtn'>Login</button>
                            </div>
                        </form>
                        <div id='loginBottom'>
                            <p>New to NexusPlanner? <Link to='/signup' className='greyLink'>SignUp</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
