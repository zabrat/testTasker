import constants from "../../constants";
import * as api from '../../REST'
import * as actions from './actions'
import { takeEvery, call, put } from "redux-saga/effects";

export function* watchTodoModule() {
  yield takeEvery(constants.GET_TASKS, workerGetTasks);
}

function* workerGetTasks() {
  try {
    const response = yield call(api.getAllTasks);
    const tasks = response.message.tasks;

    yield put(actions.onSetTasks(tasks))
  } catch (err) {
        console.log("ERROR", err);
  }
}
