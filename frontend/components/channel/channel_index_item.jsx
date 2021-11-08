import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { channel } = this.props;

    return channel ? (
      <li>
        <Link to={`/channels/${channel.serverId}/${channel.id}`}>
          { channel.name }
        </Link>
      </li>
    ) : null
  }
}

export default ChannelIndexItem;