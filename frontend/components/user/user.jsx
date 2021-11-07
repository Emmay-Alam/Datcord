import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { currentUser, openModal } = this.props;

    return (
      <div>
        <div>
          {currentUser.username}#{currentUser.tag}
        </div>
        <div>
          <button>Mute (Coming Soon!)</button>
          <button>Deafen (Coming Soon!)</button>
          <button onClick={() => openModal('User Settings')}>User Settings</button>
        </div>
      </div>
    )
  }
}

export default User;