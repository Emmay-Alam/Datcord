import React from 'react';
import { Link } from 'react-router-dom';

class DmIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { dm } = this.props;

    return (
      <li className="dm-info">
        <div className="dm-icon">
          <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/channel/app/assets/images/default_discord_pfp.png" />
        </div>
        <div className="dm-name">
          <Link className="dm-name-link" to={`/channels/@me/${dm.id}`}>{ dm.name }</Link>
        </div>
      </li>
    )
  }
}

export default DmIndexItem;