import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validate inputs
  const isValid =
    fullName.trim() !== '' &&
    phone.trim().length === 10 &&
    email.trim() !== '' &&
    password.trim() !== '';

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    navigate('/account'); // Redirect to profile page
  }

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        {/* Make form a flex column */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', minHeight: '60vh' }}>
          <h1>Create your<br />PopX account</h1>

          <fieldset className="form-fieldset">
            <legend className="form-legend">
              Full Name <span className="required-star">*</span>
            </legend>
            <input
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </fieldset>

          <fieldset className="form-fieldset">
            <legend className="form-legend">
              Phone Number <span className="required-star">*</span>
            </legend>
            <input
              type="number"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              inputMode="numeric"
              pattern="\d{10}"
            />
          </fieldset>

          <fieldset className="form-fieldset">
            <legend className="form-legend">
              Email Address <span className="required-star">*</span>
            </legend>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>

          <fieldset className="form-fieldset">
            <legend className="form-legend">
              Password <span className="required-star">*</span>
            </legend>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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

          {/* Spacer div pushes button to bottom */}
          <div style={{ flexGrow: 1 }}></div>
          <button className="create-btn" type="submit" disabled={!isValid}>
            Create Account
            <span className="skip-icon" aria-hidden="true"></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
