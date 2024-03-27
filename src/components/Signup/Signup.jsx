import { useState} from 'react';
import './Signup.css';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Signup = () => {
  
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        uName: '',
        userName: '',
        userEmail: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4200/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            alert(data.message);
            if (response.ok) {
                navigate("/home");
            }
        } catch (error) {
            console.error('Error during user registration:', error);
            alert('Registration failed. Please try again.');
        }
    };


    return (
        <>
            <div id='signupMainDiv'>
                <div id='signupTop'>
                    <h1>NexusPlanner</h1>
                </div>
                <div id='signupMid'>
                    <div id='signupMid_left'>
                        <p>Sign Up and unlock a world of event <br />planning possibilities with us.</p>
                        <form onSubmit={handleSubmit} id='signupForm'>
                            <input type="text" name="uName" placeholder='Enter your name' onChange={handleChange} required />
                            <input type="text" name="userName" placeholder='Set your username' onChange={handleChange} required />
                            <input type="email" name="userEmail" placeholder='Enter your Email' onChange={handleChange} required />
                            <input type="password" name="password" placeholder='Set password' onChange={handleChange} required />
                            <div id='signupBtnDiv'>
                                <button type="submit" id='signupBtn'>Sign Up</button>
                            </div>
                        </form>
                        <div id='signupBottom'>
                            <p>Already a user? <Link to='/login' className='greyLink'>Login</Link></p>
                        </div>
                    </div>
                    <div id='signupMid_right'>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
