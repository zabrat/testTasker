import constants from '../../constants';

const initialState = {
    tasks: [],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload,
            }
        default:
            return state;
    }
}