import React from 'react';
import ChannelIndex from '../channel/channel_index';
import UserContainer from '../user/user_container';
import { FiChevronDown } from 'react-icons/fi'

class ServerChannels extends React.Component {
  componentDidMount () {
    this.props.requestServer(this.props.match.params.serverId)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.requestServer(this.props.match.params.serverId);
    }
  }

  render () {
    const { server, channels } = this.props;

    return server ? (
      <div className="server-content-container">
        <div className="server-content">
          <div className="server-header">
            <div className="server-name">{ server.name }</div>
            <div class-name="server-settings"><FiChevronDown size={19}/></div>
          </div>
          <div className="channels-index">
            <h2>TEXT CHANNELS</h2>
            <ChannelIndex server={server} channels={channels} />
          </div>
        </div>
        <div className="user-container">
          <UserContainer />
        </div>
      </div>
    ) : null
  }
}

export default ServerChannels;