

import React from 'react';

const Register: React.FC = () => (
  <div className="welcome-container">
    <div className="welcome-card">
      <form>
        <h1>Create your<br />PopX account</h1>

        <fieldset className="form-fieldset">
          <legend className="form-legend">
            Full Name <span className="required-star">*</span>
          </legend>
          <input type="text" placeholder="Enter full name" required />
        </fieldset>

        <fieldset className="form-fieldset">
          <legend className="form-legend">
            Phone Number <span className="required-star">*</span>
          </legend>
          <input type="text" placeholder="Enter phone number" required />
        </fieldset>

        <fieldset className="form-fieldset">
          <legend className="form-legend">
            Email Address <span className="required-star">*</span>
          </legend>
          <input type="email" placeholder="Enter email address" required />
        </fieldset>

        <fieldset className="form-fieldset">
          <legend className="form-legend">
            Password <span className="required-star">*</span>
          </legend>
          <input type="password" placeholder="Enter password" required />
        </fieldset>

        <fieldset className="form-fieldset">
          <legend className="form-legend">Company Name</legend>
          <input type="text" placeholder="Enter company name" />
        </fieldset>

        <div className="agency-inline">
          <label className="agency-label">
            Are you an Agency? <span className="required-star">*</span>
          </label>
          <label>
            <input type="radio" name="agency" value="yes" required /> Yes
          </label>
          <label>
            <input type="radio" name="agency" value="no" required /> No
          </label>
        </div>

        <button className="create-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  </div>
);

export default Register;























