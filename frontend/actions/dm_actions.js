import * as DmAPIUtil from '../util/dms';

export const RECEIVE_DMS = 'RECEIVE_DMS';
export const RECEIVE_DM = 'RECEIVE_DM';
export const REMOVE_DM = 'REMOVE_DM';
export const RECEIVE_DM_ERRORS = 'RECEIVE_DM_ERRORS';
export const RESET_DM_ERRORS = 'RESET_DM_ERRORS';

const receiveDms = dms => ({
  type: RECEIVE_DMS,
  dms
});

const receiveDm = dm => ({
  type: RECEIVE_DM,
  dm
});

const receiveDmErrors = errors => ({
  type: RECEIVE_DM_ERRORS,
  errors
});

const resetDmErrors = () => ({
  type: RESET_DM_ERRORS
});

export const requestDms = () => dispatch => (
  DmAPIUtil.requestDms()
    .then(
      dms => dispatch(receiveDms(dms))
    )
);

export const requestDm = dmId => dispatch => (
  DmAPIUtil.requestDm(dmId)
    .then(
      dm => dispatch(receiveDm(dm)),
      errors => dispatch(receiveDmErrors(errors.responseJSON))
    )
);