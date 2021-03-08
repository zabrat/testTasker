import constants from '../../constants';

const initialState = {
    tasks: [],
    totalTasksCount: 0,
    pageQuantity: 0,
    currentPage: 1
}

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload.tasks,
                totalTasksCount: action.payload.total_task_count,
                pageQuantity: action.payload.pageQuantity,
            }
        default:
            return state;
    }
}