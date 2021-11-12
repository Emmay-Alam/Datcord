import React from 'react';
import MemberIndexItem from './member_index_item';

class MemberIndex extends React.Component {
  constructor(props) {
    super(props);
  };

  render () {
    const { server, members } = this.props;

    if (!server) {
      return null;
    };

    const memberIndexItems = Object.values(members).map(member =>
      (
        <MemberIndexItem
        key={member.id}
        member={member}
        />
      )
    )

    return (
      <div>
        <h2>MEMBERS—{ Object.values(members).length }</h2>
        <ul className="member-list-container">
          { memberIndexItems }
        </ul>
      </div>
    )
  }
}

export default MemberIndex;