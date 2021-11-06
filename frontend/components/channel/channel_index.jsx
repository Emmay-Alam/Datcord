import React from 'react';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { server, channels } = this.props;

    if (!server) {
      return null;
    };

    const channelIndexItems = Object.values(channels).map(channel =>
      (
        <ChannelIndexItem
          key={channel.id}
          channel={channel}
        />
      )
    )

    return (
      <ul>
        { channelIndexItems }
      </ul>
    )
  }
}

export default ChannelIndex;