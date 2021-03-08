import constants from '../../constants';
import * as api from '../../REST';
import * as actions from './actions';
import { takeEvery, call, put } from 'redux-saga/effects';

export function* watchTodoModule() {
  yield takeEvery(constants.GET_TASKS_REQUEST, workerGetTasks);
  yield takeEvery(constants.SORT_FIELD_REQUEST, workerSortField);
  yield takeEvery(constants.CHANGE_PAGE_REQUEST, workerChangePage);
}

function* workerGetTasks(action) {
  try {
    const response = yield call(api.getAllTasks, action.payload);
    const tasksData = response.message;
    const pageQuantity = Math.ceil(tasksData.total_task_count / 3)
    tasksData.pageQuantity = pageQuantity;

    yield put(actions.onSetTasks(tasksData))
  } catch (err) {
    console.error("ERROR", err);
  }
}

function* workerSortField(action) {
  try {
    const response = yield call(api.sortField, action.payload);
    const tasksData = response.message;
    const pageQuantity = Math.ceil(tasksData.total_task_count / 3)
    tasksData.pageQuantity = pageQuantity;

    yield put(actions.onSetTasks(tasksData))
  } catch (err) {
        console.error("ERROR", err);
  }
}

function* workerChangePage(action) {
  try {
    const response = yield call(api.changePage, action.payload);
    const tasksData = response.message;
    const pageQuantity = Math.ceil(tasksData.total_task_count / 3)
    tasksData.pageQuantity = pageQuantity;

    yield put(actions.onSetTasks(tasksData))
  } catch (err) {
    console.error("ERROR", err);
  }
}