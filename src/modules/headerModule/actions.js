import constants from '../../constants';

export const onAddTaskRequest = payload => ({
    type: constants.ADD_TASK_REQUEST,
    payload
})