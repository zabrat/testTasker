import constants from '../../constants';

const initialState = {
    [constants.EDIT_TASK_MODAL_WINDOW_TYPE]: {
        isShow: false,
        context: null,
        withBlur: true,
        taskData: null
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        case constants.OPEN_MODAL_WINDOW: {
            const { type, data = null } = action.payload;

            return {
                ...state,
                [type]: {
                    ...state[type],
                    isShow: true,
                    data: data,
                }
            }
        }
        case constants.CLOSE_MODAL_WINDOW: {
            const { type } = action.payload;

            return {
                ...state,
                [type]: {
                    ...state[type],
                    isShow: false,
                }
            }
        }
        default:
            return state;
    }
}