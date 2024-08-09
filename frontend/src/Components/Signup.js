import React, { useState } from 'react';
import './Signup.scss'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [role, setRole] = useState("user");
    const [error, setError] = useState("");
    const [profile, setProfile] = useState(null); // Change initial state to null
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("userName", userName);
            formData.append("email", email);
            formData.append("dob", dob);
            formData.append("password", password);
            formData.append("role", role);
            if (profile) {
                formData.append("profileImage", profile); // Append file with correct field name
            }

            const response = await axios.post("http://localhost:8009/api/sign-up", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("Signup Successful", response.data);
            navigate("/login");
        } catch (error) {
            setError("Error during signup");
            console.error("Error during signup:", error);
        }
    };

    const handleFileChange = (event) => {
        setProfile(event.target.files[0]);
    };

    return (
        <div className="signup-wrapper">
            <div className="main-w3layouts wrapper">
                <h1>SignUp Form</h1>
                <div className="main-agileinfo">
                    <div className="agileits-top">
                        <form onSubmit={handleSubmit}>
                            <input
                                className="text"
                                type="text"
                                name="Username"
                                value={userName}
                                onChange={(event) => setUserName(event.target.value)}
                                placeholder="Username"
                                required
                            />
                            <input
                                className="text"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="Email"
                                required
                            />
                            <input
                                className="text w3lpass"
                                type="date"
                                name="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                placeholder="Date of Birth"
                                required
                            />
                            <input
                                className="text"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="Password"
                                required
                            />
                            <input
                                className="text"
                                type="file"
                                name="profileImage"
                                onChange={handleFileChange}
                            />
                            <input type="submit" value="SIGNUP" className="btn" />
                        </form>
                        {error && <p className="error-message">{error}</p>}
                        <p>
                            Don't have an Account? <a href="/login">Login Now!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
