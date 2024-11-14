import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing for navigation
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [canLogin, setCanLogin] = useState(false);
    const navigate = useNavigate();  // Using navigate for redirection

    // Check if the user has signed up by looking at localStorage
    useEffect(() => {
        const isSignedUp = localStorage.getItem('isSignedUp');
        if (isSignedUp) {
            setCanLogin(true);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!canLogin) {
            setError('You must sign up first before logging in.');
            return;
        }
        // Basic validation
        if (email === '' || password === '') {
            setError('Please fill in all fields');
            return;
        }
        // Handle login logic (just an example)
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        if (email === savedEmail && password === savedPassword) {
            console.log("Login successful", { email, password });
            setError('');
            navigate('/dashboard');  // Redirect to the dashboard on success
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;
