import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement authentication logic here
    // On success:
    navigate('/account');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <form onSubmit={handleLogin}>
          <h1>Signin to your<br />PopX account</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email address" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <button className="login-form-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
