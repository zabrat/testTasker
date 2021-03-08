import constants from '../../constants';

export const onGetTasksRequest = () => ({
    type: constants.GET_TASKS_REQUEST
})

export const onSortFieldRequest = payload => ({
    type: constants.SORT_FIELD_REQUEST,
    payload
})

export const onChangePage = payload => ({
    type: constants.CHANGE_PAGE_REQUEST,
    payload
})