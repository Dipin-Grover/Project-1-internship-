import React from 'react';

const Profile: React.FC = () => (
  <div className="welcome-container">
    <div className="welcome-card profile-card">
      <div className="account-header">Account Settings</div>
      <div className="account-divider"></div>
      <div className="account-row">
        <div className="profile-pic"></div>
        <div className="profile-info">
          <div className="profile-name">Marry Doe</div>
          <div className="profile-email">Marry@Gmail.Com</div>
          <div className="profile-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error possimus sit animi quaerat deleniti necessitatibus, neque nostrum iste quia tempora.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
