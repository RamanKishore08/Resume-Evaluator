import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in with Firebase:', email);
      onLogin(); 
      navigate('/home'); 
    } catch (error) {
      alert('Invalid email or password!');
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{' '}
          <button onClick={() => navigate('/signup')} className="signup-btn">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
