import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.email.trim() && formData.password.trim();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      return; // Don't submit if form is invalid
    }

    // Navigate only if form is valid
    navigate('/account');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <form onSubmit={handleLogin} noValidate>
          <h1>Signin to your<br />PopX account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
          <fieldset className="form-fieldset">
            <legend className="form-legend">Email Address</legend>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </fieldset>
          
          <fieldset className="form-fieldset">
            <legend className="form-legend">Password</legend>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </fieldset>
          
          <button 
            className={`login-form-btn ${!isFormValid ? 'disabled-cursor' : ''}`}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
