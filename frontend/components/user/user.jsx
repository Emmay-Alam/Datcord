import React from 'react';
import { BsGearFill, BsHeadphones } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';

class User extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { currentUser, openModal } = this.props;

    return (
      <div className="user-content-container">
        <div className="user-avatar">
          <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/channel/app/assets/images/default_discord_pfp.png" />
        </div>
        <div className="user-info">
          <div className="user-username">
            {currentUser.username}
          </div>
          <div className="user-tag">
            #{currentUser.tag}
          </div>
        </div>
        <div className="user-buttons">
          <button>
            <FaMicrophone size={18} />
          </button>
          <button>
            <BsHeadphones size={21} />
          </button>
          <button id="user-setting-button" onClick={() => openModal('User Settings')}>
            <BsGearFill size={17} />
          </button>
        </div>
      </div>
    )
  }
}

export default User;