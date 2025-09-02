import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <form>
          <h1>Create your<br />PopX account</h1>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" />
          </div>
          <div className="form-group">
            <label>Are you an Agency?</label>
            <div>
              <label><input type="radio" name="agency" value="yes" /> Yes</label>
              <label><input type="radio" name="agency" value="no" /> No</label>
            </div>
          </div>
          <button className="create-btn" type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
