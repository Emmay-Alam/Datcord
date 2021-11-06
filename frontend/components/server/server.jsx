import React from 'react';
import ChannelIndex from '../channel/channel_index';

class Server extends React.Component {
  componentDidMount () {
    this.props.requestServer(this.props.match.params.serverId);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.requestServer(this.props.match.params.serverId);
    }
  }

  render () {
    const { server, channels } = this.props;

    return (
      <div className="channels-index">
        <ChannelIndex server={server} channels={channels} />
      </div>
    )
  }
}

export default Server;