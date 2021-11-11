import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  initials () {
    const words = this.props.server.name.split(" ")

    // if (words.length > 1) {
    //   return words[0][0].toUpperCase() + words[1][0].toLowerCase()
    // } else {
    //   return words [0][0].toUpperCase()
    // }

    return words.map(word => word[0])
  };

  render () {
    const { server } = this.props;
    return (
      <li className="server-index-item">
        <button className="server-item-button">
          <Link className="server-item-content" to={`/channels/${server.id}/${server.channels[0]}`}>
            { this.initials() }
          </Link>
        </button>
      </li>
    )
  }
}

export default ServerIndexItem;