import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.scss'; // Import your CSS file

function Signup() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState(null);
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('userName', userName);
            formData.append('email', email);
            formData.append('dob', dob);
            formData.append('password', password);
            formData.append('role', role);
            if (profile) {
                formData.append('profileImage', profile);
            }

            const response = await axios.post(
                'http://localhost:8009/api/sign-up',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('Signup Successful', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    const handleFileChange = (event) => {
        setProfile(event.target.files[0]);
    };

    return (
        <div className="centered-form">
            <div className="form-structor">
                <div className="signup">
                    <h2 className="form-title" id="signup">
                        SignUp
                    </h2>
                    <div className="form-holder">
                        <input
                            type="text"
                            className="input"
                            placeholder="Username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="date"
                            className="input"
                            placeholder="DOB"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="file"
                            className="input"
                            onChange={handleFileChange}
                        />
                        <select
                            className="input"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button className="submit-btn" onClick={handleSubmit}>
                        Sign Up
                    </button>
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
