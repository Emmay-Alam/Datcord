import React from 'react';

class MemberIndexItem extends React.Component {
  constructor(props){
    super(props);
  };

  render () {
    const { member } = this.props;

    return (
      <li>
        { member.username }
      </li>
    )
  }
}

export default MemberIndexItem;