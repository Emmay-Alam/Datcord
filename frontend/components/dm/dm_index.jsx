import React from 'react';
import DmIndexItem from './dm_index_item';
import UserContainer from '../user/user_container';

class DmIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestDms();
  }

  render () {
    const dmIndexItems = this.props.dms.map(dm =>
      <DmIndexItem
        key={`${dm.id}-${dm.name}`}
        dm={dm}
      />)

    return (
      <div className="dms-content-container">
        <div className="dms-content">
          <div className="fake-search-bar">
            <button readOnly>Find or start a conversation</button>
          </div>
          <div className="friends-icon">Friends</div>
          <div className="nitro-icon"></div>
          <div className="dm-index">
            <h2>DIRECT MESSAGES</h2>
            <ul>
              { dmIndexItems }
            </ul>
          </div>
        </div>
        <div className="user-container">
          <UserContainer />
        </div>
      </div>
    )
  }
}

export default DmIndex;