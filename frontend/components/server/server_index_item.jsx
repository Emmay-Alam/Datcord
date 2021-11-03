import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { server } = this.props;

    return (
      <li>
        <Link to={`/channels/${server.id}`}>
          { server.name }
        </Link>
      </li>
    )
  }
}

export default ServerIndexItem;