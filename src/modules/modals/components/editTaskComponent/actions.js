import constants from '../../../../constants';

export const onEditTaskRequest = payload => ({
    type: constants.EDIT_TASK_REQUEST, payload 
});

export const onGetTasksRequest = () => ({
    type: constants.GET_TASKS_REQUEST
});