import React from 'React';
import DmIndexItem from './dm_index_item';

class DmIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestDms();
  }

  render () {
    const dmIndexItems = this.props.dms.map(dm =>
      <DmIndexItem
        key={`${dm.id}-${dm.name}`}
        dm={dm}
      />)

    return (
      <div className="dms-container">
        <div className="friends-icon"></div>
        <div className="nitro-icon"></div>
        <div className="dm-index">
          <h2>DIRECT MESSAGES</h2>
          <ul>
            { dmIndexItems }
          </ul>
        </div>
      </div>
    )
  }
}

export default DmIndex;