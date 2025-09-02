import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <div className="card-bottom-group">
          <div className="card-content">
            <h1>Welcome to PopX</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="card-actions">
            <button className="create-btn" onClick={() => navigate('/register')}>
              Create Account
            </button>
            <button className="login-btn" onClick={() => navigate('/login')}>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
