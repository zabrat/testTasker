import constants from '../../constants';

const initialState = {
    userStatus: 'guest',
    currentUserData: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.SIGN_IN_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
            }
        default:
            return state;
    }
}