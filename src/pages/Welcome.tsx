// Welcome.tsx
import React from 'react';
import '../index.css';

const Welcome: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="card-content">
          <h1>Welcome to PopX</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card-actions">
          <button className="create-btn">Create Account</button>
          <button className="login-btn">Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
