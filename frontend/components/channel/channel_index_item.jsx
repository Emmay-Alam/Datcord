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
        <li>
          <div class-name="channel-hashtag">
            <RiHashtag />
          </div>
          <Link to={`/channels/${channel.serverId}/${channel.id}`}>
            { channel.name }
          </Link>
        </li>
      </div>
    ) : null
  }
}

export default ChannelIndexItem;