import React from 'react';
import { Link } from 'react-router-dom';
import { RiHashtag } from 'react-icons/ri';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { channel } = this.props;

    return channel ? (
      <div>
        <li className="channel-index-item">
          <div>
            <RiHashtag className="channel-hashtag" size={26} />
          </div>
          <Link className="channel-name" to={`/channels/${channel.serverId}/${channel.id}`}>
            { channel.name }
          </Link>
        </li>
      </div>
    ) : null
  }
}

export default ChannelIndexItem;