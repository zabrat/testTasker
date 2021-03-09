import constants from '../../constants';

const initialState = {
    tasks: [],
    totalTasksCount: 0,
    pageQuantity: 0,
    currentPage: 1,
    isCurrentSortDirectionDesc: true,
    currentSortField: 'username',
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
        case constants.CHANGE_PAGE_REQUEST:
            return {
                ...state,
                currentPage: action.payload
            }
        case constants.SORT_FIELD_REQUEST:
            return {
                ...state,
                isCurrentSortDirectionDesc: (action.payload === state.currentSortField) && !state.isCurrentSortDirectionDesc,
                currentSortField: action.payload
            }
        default:
            return state;
    }
}