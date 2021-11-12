<<<<<<< HEAD
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

=======
import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  initials () {
    const words = this.props.server.name.split(" ")
    return words.map(word => word[0]).join('')
  };

  render () {
  const fontSize = this.initials().length < 4 ? 18 : 12;

    const { server } = this.props;
    return (
      <li className="server-index-item">
        <Link className="server-item-content" style={{fontSize}} to={`/channels/${server.id}/${server.channels[0]}`}>
          { this.initials() }
        </Link>
      </li>
    )
  }
}

>>>>>>> channel
export default ServerIndexItem;