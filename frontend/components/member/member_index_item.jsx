import React from 'react';

class MemberIndexItem extends React.Component {
  constructor(props){
    super(props);
  };

  render () {
    const { member } = this.props;

    return (
      <li className="member-info">
        <div className="member-icon">
          <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/channel/app/assets/images/default_discord_pfp.png" />
        </div>
        <div className="member-name">
          { member.username }
        </div>
      </li>
    )
  }
}

export default MemberIndexItem;