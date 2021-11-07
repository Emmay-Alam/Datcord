import React from 'react';
import UserSettingsContainer from '../user/user_settings_container';

class Modal extends React.Component {
  render () {
    if (!this.props.modal)
      return null;

    let component;

    switch (this.props.modal) {

    case 'User Settings':
      component = <UserSettingsContainer />;
      break;
    default:
      return null;
  }

    return (
      <div className="modal-background" onClick={() => closeModal()}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
  }
};

export default Modal;