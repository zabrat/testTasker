import constants from '../../constants';

const initialState = {
    tasks: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.SET_TASKS:
            return {
                ...state,
                tasks: action.payload,
            }
        default:
            return state;
    }
}