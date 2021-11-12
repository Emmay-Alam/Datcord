import { connect } from 'react-redux';
import User from './user';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.session.id
});

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(User);