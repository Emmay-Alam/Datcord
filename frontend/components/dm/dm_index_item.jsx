import React from 'react';
import { Link } from 'react-router-dom';

class DmIndexItem extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { dm } = this.props;

    return (
      <li>
        <Link to={`/channels/@me/${dm.id}`}>{ dm.name }</Link>
      </li>
    )
  }
}

export default DmIndexItem;