import React from 'react';
import UserSettingsContainer from '../user/user_settings_container';
import ServerCreatorContainer from '../server/server_creator_container';

class Modal extends React.Component {
  render () {
    if (!this.props.modal)
      return null;

    let component;

    const { closeModal } = this.props;

    switch (this.props.modal) {

    case 'User Settings':
      component = <UserSettingsContainer />;
      break;
    case 'Add a Server':
      component = <ServerCreatorContainer />;
      break;
    default:
      return null;
  }

    return (
      <div className="modal-background">
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
  }
};

export default Modal;