import constants from '../../constants';

export const onSignInRequest = payload => ({
    type: constants.SIGN_IN_REQUEST,
    payload
})