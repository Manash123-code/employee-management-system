import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://employee-management-system-1-w067.onrender.com/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            if (result.success) {
                alert(result.message);
                navigate('/login');
            } else {
                alert(result.message);
            }
        } catch (err) {
            alert('Signup error: ' + err.message);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '60px auto', padding: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Register</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>Already registered? <Link to="/login">Login here</Link></p>
        </div>
    );
}

export default Signup;