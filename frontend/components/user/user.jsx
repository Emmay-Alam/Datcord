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
        <div className="user-avatar"></div>
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
          <button onClick={() => openModal('User Settings')}>
            <BsGearFill size={17} />
          </button>
        </div>
      </div>
    )
  }
}

export default User;