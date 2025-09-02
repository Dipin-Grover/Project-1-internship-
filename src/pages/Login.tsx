import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <form>
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
