import React from 'react';

class UserSettings extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  };

  handleLogout () {
    this.props.logoutUser()
      .then(() => this.props.closeModal())
  }

  render () {
    const { closeModal } = this.props;
    return (
      <div className="settings-container">
        <div className="sidebar-settings">
          <div className="user-settings">
            <h2>USER SETTINGS</h2>
            <ul>
              <li>My Account</li>
              <li>User Profile</li>
            </ul>
          </div>
          <div className="logout">
            <ul>
              <li onClick={() => this.handleLogout()}>Log Out</li>
            </ul>
          </div>
        </div>
        <div className="main-settings">
          <div>
            <button onClick={() => closeModal()}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

export default UserSettings;