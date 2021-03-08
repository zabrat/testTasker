import constants from '../../constants';

export const onSetTasks = payload => ({
    type: constants.ADD_TASK_SUCCESS,
    payload
});