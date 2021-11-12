import React from 'react';
import { Link } from 'react-router-dom';
import { BiHash } from 'react-icons/bi';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { channel } = this.props;

    return channel ? (
      <li className="channel-index-item">
        <div>
          <BiHash className="channel-hashtag" size={26} />
        </div>
        <Link className="channel-name" to={`/channels/${channel.serverId}/${channel.id}`}>
          { channel.name }
        </Link>
      </li>
    ) : null
  }
}

export default ChannelIndexItem;