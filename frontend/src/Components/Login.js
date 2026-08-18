import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://employee-management-system-1-w067.onrender.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            if (result.success) {
                localStorage.setItem('token', result.jwtToken);
                localStorage.setItem('loggedInUser', result.name);
                navigate('/employee');
            } else {
                alert(result.message);
            }
        } catch (err) {
            alert('Login error: ' + err.message);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '60px auto', padding: '30px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '15px' }}>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
}

export default Login;