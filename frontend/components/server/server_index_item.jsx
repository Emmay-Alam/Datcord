import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  initials () {

  }

  render () {
    const { server } = this.props;
    return (
      <li className="server-index-item">
        <Link to={`/channels/${server.id}/${server.channels[0]}`}>
          { server.name }
        </Link>
      </li>
    )
  }
}

export default ServerIndexItem;