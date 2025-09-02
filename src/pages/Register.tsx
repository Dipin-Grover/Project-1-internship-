import React from 'react';

const Register: React.FC = () => (
  <div className="welcome-container">
    <div className="welcome-card">
      <form>
        <h1>Create your<br />PopX account</h1>

        <div className="form-group">
          <label>
            Full Name <span className="required-star">*</span>
          </label>
          <input type="text" placeholder="Enter full name" required />
        </div>

        <div className="form-group">
          <label>
            Phone Number <span className="required-star">*</span>
          </label>
          <input type="text" placeholder="Enter phone number" required />
        </div>

        <div className="form-group">
          <label>
            Email Address <span className="required-star">*</span>
          </label>
          <input type="email" placeholder="Enter email address" required />
        </div>

        <div className="form-group">
          <label>
            Password <span className="required-star">*</span>
          </label>
          <input type="password" placeholder="Enter password" required />
        </div>

        <div className="form-group">
          <label>
            Company Name
          </label>
          <input type="text" placeholder="Enter company name" />
        </div>

        <div className="form-group">
          <label>
            Are you an Agency? <span className="required-star">*</span>
          </label>
          <div className="radio-group">
            <label>
              <input type="radio" name="agency" value="yes" required /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" required /> No
            </label>
          </div>
        </div>

        <button className="create-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  </div>
);

export default Register;
